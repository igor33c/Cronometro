import React from "react"
function onClickStop(){
    console.log('stop')
}
function onClickStart(){
    console.log('start')
}
export function Button(){
    return(
        <div className="border rounded-sm border-lime-500 mt-10 mb-5 px-3 py-3">
            <button className="ml-1 bg-red-500 hover:bg-red-700
                text-white px-4 py-2 rounded-md"
                onClick={() => onClickStop()}
            >
                Parar
            </button>
            <button className="ml-1 bg-green-500 hover:bg-green-700
                text-white px-4 py-2 rounded-md"
                onClick={() => onClickStart()}
            >
                Começar
            </button>
        </div>
    )
}