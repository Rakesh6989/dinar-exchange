// At the top of the file
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-10 pb-6">
      {/* Top Subscribe Bar */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm max-w-md text-center md:text-left">
          Exclusive coupons, extra savings, and tons of EVERYDAY deals delivered
          straight to your inbox.
        </p>
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-3 py-2 text-black rounded-md text-sm"
          />
          <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Middle Links */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10 text-sm">
        <div>
          <h3 className="font-bold mb-2">SUPPORT</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Track Order</li>
            <li>Returns & Exchange</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">COMPANY</h3>
          <ul className="space-y-1 text-gray-300">
            <li>About Us</li>
            <li>Career</li>
            <li>Collaboration</li>
            <li>Media</li>
            <li>Beyoungistan</li>
            <li>Beyoung Blog</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">STORES NEAR ME</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Udaipur</li>
            <li>Lucknow</li>
            <li>Ahmedabad</li>
            <li>Kota</li>
            <li>Mirzapur</li>
            <li>Bhilwara</li>
            <li>More...</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">LOCATION</h3>
          <p className="text-gray-300">
            support@beyoung.in
            <br />
            Bhingarshah Choraha, Udaipur
            <br />
            Ahmedabad Main Road
            <br />
            India – 313002
          </p>
        </div>

        {/* Social Links */}
        <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-3">
          <div>
            <h3 className="font-bold mb-1">FOLLOW US</h3>
            <div className="flex gap-3 text-white text-xl">
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <PinterestIcon />
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-1 mt-4">100% SECURE PAYMENT</h3>
            <div className="flex gap-2">
              <img src="/payments/paytm.png" alt="Paytm" className="h-6" />
              <img src="/payments/visa.png" alt="Visa" className="h-6" />
              <img
                src="/payments/mastercard.png"
                alt="MasterCard"
                className="h-6"
              />
              <img src="/payments/rupay.png" alt="RuPay" className="h-6" />
              {/* Add as needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} Beyoung Folks Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
