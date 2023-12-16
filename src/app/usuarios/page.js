"use client"

import { useSearchParams } from 'next/navigation'

export default function Usuarios() {

  const searchParams = useSearchParams()

  const email = searchParams.get("email")

  console.log(email)


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-black">Usuarios</h1>

        <h1 className="text-black">Bienvenido {email}!</h1>
    </main>
  )
}