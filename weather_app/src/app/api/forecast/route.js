import { NextResponse } from "next/server";
import axios from "axios";

async function GET(request) {
  let body = await request.nextUrl.searchParams.entries();
  body = Object.fromEntries(body);

  const http = axios.create({
    baseURL: process.env.VITE_APP_WEATHER_URL,
  });

  const res = await http
    .get("/forecast", {
      params: {
        ...body,
        appid: process.env.VITE_APP_WEATHER_API_KEY,
      },
    })
    .then((response) => response.data);

  return NextResponse.json(res);
}

function POST(request) {
  // await request.json()
}

export { GET, POST };