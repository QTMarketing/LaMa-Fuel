import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-extrabold text-gray-900">Page not found</h1>
        <p className="mt-3 text-gray-600">The page you are looking for doesn’t exist or was moved.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/blog" className="rounded-md bg-black text-white px-5 py-2 font-semibold hover:opacity-90">Back to Blog</Link>
          <Link href="/" className="rounded-md border border-gray-300 px-5 py-2 font-semibold text-gray-800 hover:bg-gray-50">Home</Link>
        </div>
      </div>
    </main>
  );
}




