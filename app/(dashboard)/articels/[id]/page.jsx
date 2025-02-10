import { notFound } from 'next/navigation'
import React from 'react'
import { cookies } from 'next/headers';
import DeleteButton from './DeleteButton';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';


export async function generateMetadata({params}){
  const supabase = createServerComponentClient({cookies})
  const {data :articel} = await supabase.from('Articels')
  .select()
  .eq('id',params.id)
  .single()
  return{
    title:`Blogs | ${articel?.title || 'Articel Not Found'}`
    }
}

async function getArticel(id){
  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.from('Articels')
  .select()
  .eq('id' ,id)
  .single()

    if(!data){
        notFound()
    }

    return data
}



export default async function  ArticelsDetails({params}) {
  const articel = await getArticel(params.id) 

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

return (
  <main>
      <nav>
          
          <h2>Articels Details</h2>
          <div className="ml-auto">
          {data.session.user.email === articel.user_email && (
            <DeleteButton id={articel.id} />
          )}
        </div>
      </nav>
      <div className='card'>
          <h3>{articel.title}</h3>
          <h4>Created by {articel.user_email}</h4>
          <p>{articel.content}</p>
      </div>

  </main>
)
}
