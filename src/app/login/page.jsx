"use client"
import React, { useState, useEffect } from 'react'

function SearchInput() {
  const [result, setresult] = useState(["Rakesh"])
  const [uniqueCat, setuniqueCat] = useState([])
  const [clickedcat, setclickedcat] = useState("")
  const [renderdata, setrenderdata] = useState(null)
  useEffect(() => {
    const fetchdata = async () => {

      try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json();
        if (data) {
          console.log(data)
          setresult(data)
          const cat = data.map(val => val.category)
          console.log("cat", cat)
          setuniqueCat(cat.filter((val, ind, self) => self.indexOf(val) === ind))

        }
      } catch (e) {
        console.log(e)
      }
    }
    fetchdata()

  }, [])
  console.log("result", result)

  return (
    <div className='p-10'>
      <div className='flex justify-between'>
        {uniqueCat && uniqueCat.map((val, ind) => {
          return (
            <button key={ind} className='border bg-red-200 p-1 text-sm cursor-pointer rounded' onClick={() => setclickedcat(val)}>
              {val}
            </button>
          )
        })}
      </div>
      <div className='flex justify-around   flex-wrap mt-5'>
        {result && result.filter((val) => val.category === clickedcat).map((val, ind) => {
          return (
            <div key={ind} className='max-w-[300px] w-full border cursor-pointer rounded-xl flex flex-col justify-between my-3'>
              <p className='bg-blue-200 w-fit rounded-xl m-2 p-1 '>
                {val.category}

              </p>

              <img src={val.image} className='max-w-[250px] max-h-[200px] object-contain' />
              <p className='text-sm text-[#808080] p-3 font-bold'>

                $:{val.price}
              </p>

              <p className='text-sm text-justify p-3'>
                {val.description}

              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchInput
