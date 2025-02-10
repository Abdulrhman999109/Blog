'use server'

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function AddArticels(formData) {
    const articel = Object.fromEntries(formData)

    const supabase = createServerActionClient({cookies})

    const {data:{session}} = await supabase.auth.getSession()


    const {error} = await supabase.from('Articels')
    .insert({
        ...articel,
        user_email : session.user.email,
    })

    if(error){
        throw new Error('Could Not add a Articel')
    }
    revalidatePath('/articels')
    redirect('/articels')
}



export async function DeleteArticel(id) {
    const supabase = createServerActionClient({ cookies })

    const { error } = await supabase.from('Articels')
      .delete()
      .eq('id', id)
    
    if (error) {
      throw new Error('Could not delete the Articels.')
    }
  
    revalidatePath('/articels')
    redirect('/articels')
  } 
