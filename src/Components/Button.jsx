import React from "react"


export function Button({childToParent}){
    
    const ok = 'sd'
   
    return(
        <div className={`ml-10 mr-10 border rounded-sm border-lime-500 
        mt-10 mb-10 px-3 py-3`}>
            <button className="ml-1 bg-orange-500 hover:bg-orange-700
                text-white px-4 py-2 rounded-md"
                onClick={() => childToParent()}
            >
                Zerar
            </button>
            <button className="ml-1 bg-red-500 hover:bg-red-700
                text-white px-4 py-2 rounded-md"                
            >
                Parar
            </button>
            <button className="ml-1 bg-green-500 hover:bg-green-700
                text-white px-4 py-2 rounded-md"
            >
                Começar
            </button>
            
        </div>
    )
}