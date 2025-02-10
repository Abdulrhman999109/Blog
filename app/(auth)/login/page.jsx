
"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

// components
import AuthForm from "../AuthForm"
import Link from 'next/link'

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError('')

    const supabase = createClientComponentClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      setError(error.message)
    }
    if (!error) {
      router.push('/')
    } 

  }
[]
  return (
    <main>
      <h2 className=" text-center text-2xl" >Login</h2>

      <AuthForm handleSubmit={handleSubmit} />
      <p className='flex justify-center'>Do you not have an account?<Link href={"/register"}> create Accont</Link></p>

      {error && (
        <div className="error">{error}</div>
      )}
    </main>
  )
}
