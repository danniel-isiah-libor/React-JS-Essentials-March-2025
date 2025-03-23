import React from 'react'
import { NextResponse } from 'next/server'
import axios from 'axios'
export async function GET(request) {
    let body = await request.nextUrl.searchParams.entries();
    body = Object.fromEntries(body)
    
    
    const http = axios.create({
        baseURL: process.env.VITE_APP_WEATHER_URL,
    })
    const result = await http.get('/forecast', {
        params: {
            ...body,
            appid: process.env.VITE_APP_WEATHER_APP_KEY,
        }
    })
    .then((response) => response.data)
    .catch(() => null)
    console.log("result", result)
    

   return NextResponse.json(result)
}
// function POST() {

// }

export default {GET}