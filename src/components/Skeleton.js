export default function Skeleton() {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-gray-100 animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-5 bg-gray-300 rounded w-1/3"></div>
        <div className="flex justify-between pt-4">
          <div className="h-6 bg-gray-300 rounded w-16"></div>
          <div className="h-8 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
}