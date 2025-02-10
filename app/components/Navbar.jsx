"use client"

import React from 'react';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default function Navbar({ user }) {
  return (
    <nav className="bg-gray-900 text-yellow-50 px-8 py-4 shadow-lg fixed top-0 w-full z-10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="myLogo.png" alt="Logo" className="h-12 w-12 rounded-full shadow-md" />
        <h1 className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition">
          <Link href="/">Blog Haven</Link>
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/" className="px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-50 rounded-md transition">
          Dashboard
        </Link>
        <Link href="/articels" className="px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-50 rounded-md transition">
          Articles
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm text-gray-400">
              Welcome, <span className="text-yellow-300 font-semibold">{user.email}</span>
            </span>
            <LogoutButton />
          </>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}