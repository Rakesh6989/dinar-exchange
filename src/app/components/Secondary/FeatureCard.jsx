import Image from "next/image";

export default function FeatureCard({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col  items-center text-center bg-white shadow-md p-4 rounded-md w-full">
      <Image src={icon} alt={title} width={60} height={60} className="mb-4" />
      <p className="font-medium text-sm">{title}</p>
      <p className="font-bold text-lg">{subtitle}</p>
    </div>
  );
}
