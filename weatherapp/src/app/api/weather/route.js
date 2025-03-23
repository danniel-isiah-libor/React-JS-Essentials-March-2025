import axios from "axios"
import { NextResponse, } from "next/server"

async function GET(request){

    
    let body = await request.nextUrl.searchParams.entries();
    body = Object.fromEntries(body);
    
    const http = axios.create({
        baseURL:process.env.VITE_APP_WEATHER_URL,
    })
   
    const res= await http.get(`/weather`,{
        params:{
            ...body,
            appid:process.env.VITE_APP_WEATHER_APP_API_KEY,
        }
    }).then((response)=>response.data).catch(()=>null)


    
    return NextResponse.json(res);
}


function POST(){

}

export {GET,POST}