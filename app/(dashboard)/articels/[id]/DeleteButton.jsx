"use client"


import { useTransition } from 'react'
import { DeleteArticel } from '../action'

export default function DeleteButton({ id }) {
  let [isPending, startTransition] = useTransition()

  return (
    <button 
      className="btn-primary" 
      onClick={() => startTransition(() => DeleteArticel(id))}
      disabled={isPending}
    >
      {isPending && (
        <>
          Deleting....
        </>
      )}
      {!isPending && (
        <>
          Delete Articel
        </>
      )}
    </button>
  )
}