import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-yellow-50 px-8 space-y-16">
      <header className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
          Welcome to <span className="text-yellow-400">Blog Haven</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Your ultimate platform for creating, sharing, and exploring amazing articles. 
          Manage your content effortlessly with our user-friendly tools.
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-6">
        <Link href="/articels">
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition">
            View Articles
          </button>
        </Link>
        <Link href="/articels/createarticel">
          <button className="bg-gray-800 text-yellow-50 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-700 transition">
            Add Article
          </button>
        </Link>
      </div>

      <section className="bg-gray-800 shadow-lg rounded-2xl p-8 w-full md:w-2/3 space-y-4">
        <h3 className="text-3xl font-bold text-yellow-400">About Us</h3>
        <p className="text-gray-300 leading-relaxed">
          At Blog Haven, we aim to empower individuals to express their thoughts, share knowledge, 
          and connect with a wider audience. Whether you&apos;re a professional writer or a beginner, 
          our tools are designed to make content creation easy and enjoyable.
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500">
        &copy; 2025 Blog Haven. All rights reserved.
      </footer>
    </main>
  );
}
