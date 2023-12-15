"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Register() {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [hobbies, setHobbies] = useState("")
    const [reciveOffers, setReciveOffers] = useState(false)

    const redirigir = (code) => {
        console.log("Code", code)
        if (code == 200) {
            router.push("/login-usuarios")
        }
        else{
            alert("El correo electrónico ya está registrado, use otro correo electrónico.")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password,
            name: name,
            age: age,
            city: city,
            hobbies: hobbies,
            reciveOffers: reciveOffers
        }

        fetch("/api/user-register", {
            method: "POST",
            headers: {
            //Authorization: `Bearer ${tokenJWT}`
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => redirigir(data.status))
    }

    return (
        <section>

            {/*Formulario de registro*/}
            <div className="w-full bg-blue rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-white">Regístrate</p>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

                        <div>
                            <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" required />
                        </div>

                        <div>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo Electrónico" required />
                        </div>
                        <div>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Contraseña" x-model="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                        <div>
                            <input onChange={(e) => setAge(e.target.value)} type="number" name="age" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Edad" required />
                        </div>

                        <div>
                            <input onChange={(e) => setCity(e.target.value)} type="text" name="city" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ciudad" required />
                        </div>

                        <div>
                            <input onChange={(e) => setHobbies(e.target.value)} type="text" name="hobbies" id="hobbies" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hobbies" required />
                        </div>

                        <div className="flex items-center">
                            <input onChange={(e) => setReciveOffers(e.target.value)} type="checkbox" name="reciveOffers" id="reciveOffers" className="rounded text-primary-600 focus:ring-primary-600" />
                            <label htmlFor="reciveOffers" className="ml-2 block text-sm text-white-900">
                                Recibir ofertas
                            </label>
                        </div>

                        <div className="flex justify-between">
                            <Link href="/login-usuarios" className="align-start text-xs font-thin text-white hover:underline">Ya tengo una cuenta</Link>
                        </div>
                        <button type="submit" className="w-full text-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Registrar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}