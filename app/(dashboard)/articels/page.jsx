import React, { Suspense } from 'react'
import ListArticels from '../ListArticels'
import Link from 'next/link'
import Loading from '../loading'


export const metadata = {
  title: 'Blogs | Articels',
}

export default function Articels() {
  return (
    <main>
       
        <Suspense fallback={<Loading/>}>
        <Link href="/articels/createarticel">
          <button className="btn-primary">Add Articel</button>
        </Link>
          <ListArticels/>
        </Suspense>
        
    </main>
  )
}
