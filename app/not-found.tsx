import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-black uppercase">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            Page Not Found
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-black hover:bg-gray-800 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
