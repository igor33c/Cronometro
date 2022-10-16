import React from "react"
export function Button(){
    return(
        <div className="border rounded-sm border-lime-500 mt-5 mb-5 px-3 py-3">
            <button className="bg-gradient-to-r from-red-400 to-red-700
             text-white px-4 py-2 rounded-md mr-1">Pare</button> 
            <button className="ml-1 bg-gradient-to-r from-green-400 to-green-700
             text-white px-4 py-2 rounded-md">Começar</button>
        </div>
    )
}