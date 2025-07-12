export default function FeatureCard({ Icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center bg-white shadow-md p-4 rounded-md w-full">
      <Icon className="text-blue-600 mb-4" style={{ fontSize: 60 }} />
      <p className="font-medium text-sm">{title}</p>
      <p className="font-bold text-lg">{subtitle}</p>
    </div>
  );
}
