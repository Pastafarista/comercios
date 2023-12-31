import { NextResponse } from 'next/server'
import { readFileSync } from 'fs';

export async function GET() {
    try{
        {/* Obtener el listado de comercios */}
        const commerce = JSON.parse(readFileSync("data/commerce.txt"))
        
        return NextResponse.json(commerce)
    } catch(e){  
        return NextResponse.json({message: "Error al obtener el listado de los comercios", status: 400})
    }
}