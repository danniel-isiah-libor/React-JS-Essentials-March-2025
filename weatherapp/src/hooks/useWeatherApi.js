import React from 'react'

export default async function useWeatherApi(apiString) {
    
    const result = await (
        await fetch(apiString)
       ).json()

       return result
}
