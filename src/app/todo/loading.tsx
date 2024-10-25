export default function Loading() {
  return (
    <div className="space-y-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-lg">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex items-center justify-between p-2">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 rounded-sm bg-gray-200 animate-pulse" />
            <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-8 w-16 bg-gray-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
}
