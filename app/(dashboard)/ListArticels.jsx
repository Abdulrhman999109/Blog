import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import React from 'react';
import { cookies } from 'next/headers';

async function getArticels() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("Articels").select();

  if (error) {
    console.log(error.message);
  }

  return data || [];
}

export default async function ListArticels() {
  const articels = await getArticels();

  return (
    <main className="min-h-screen bg-gradient-to-br  py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articels.length > 0 ? (
          articels.map((articel) => (
            <div
              key={articel.id}
              className="relative  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white opacity-20 hover:opacity-30 transition-all duration-300"></div>

              <Link href={`/articels/${articel.id}`}>
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-500 transition-colors duration-300">
                    {articel.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {articel.content.slice(0, 200)}...
                  </p>
                </div>
              </Link>

              <div className="absolute bottom-0 left-0 w-full bg-gray-100 py-3 px-4 flex justify-between items-center text-gray-600 text-xs">
                <span>By: {articel.user_email}</span>
                <span>{new Date(articel.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-xl col-span-full">
            There are no open articles.
          </p>
        )}
      </div>
    </main>
  );
}