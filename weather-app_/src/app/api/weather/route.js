import { NextResponse } from "next/server";
import axios from "axios";


async function  GET(request) {
//
// const response = {Message: "Hello World"};
const data = await request.json();
const http = axios.create({ baseURL: "https://api.openweathermap.org/data/2.5",

});

// http.get("/weather", {
//     params: {
//         appid: "4e08b992e608c56b4ad1324b871bec82",
//         q: "Makati",
//     },
// });



const response = {Message: "Hello World"};

return NextResponse.next(request);
}

function  POST() {
//
    
}

export {GET, POST};