import { NextResponse } from "next/server";
import axios from "axios";

async function GET(request) {
  let body = await request.nextUrl.searchParams.entries();
  body = Object.fromEntries(body);

  const http = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
  });

  const res = await http
    .get("/weather", {
      params: {
        ...body,
        appid: "c153494e41a68784f0391cd1d1de3727",
      },
    })
    .then((response) => response.data);

  return NextResponse.json(res);
}

function POST(request) {
  // await request.json()
}

export { GET, POST };
