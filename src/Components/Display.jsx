import { useState, useEffect } from "react"
import { Button } from "./Button"



export function Display (){

  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)

  useEffect(() =>{
    let interval = null
    if (start){
        interval = setInterval(() => {            
            setTime(prevTime => prevTime+10)
            
        },10)    
    }
    else{
        clearInterval(interval)
    }

    return() => clearInterval(interval)
  }
  ,[start])


const [mili, setMili] = useState(0)
const [sec, setSec] = useState(0)
const [min, setMin] = useState(0)
const [hour, setHour] = useState(0)

function starting(){
    setStart(true)
}
function stoping(){
    setStart(false)
}
function zering(){
    ///zering kkkk
    setStart(0)
    setMili(0)
}
function childToParent (action)  {
    
    if (action === 'zerar'){
        zering()
    }
    if (action === 'start'){
        ///criar funcao cronometro
        ///contar()
        starting()
        
    }
    if (action === 'stop'){
        stoping()       
    } 
}

///<button onClick={() => close()}>teste</button>
return(
    <div>
        <div className="flex text-center justify-center mt-10">
            
            
            <div className="ml-1 mr-1">
                <span className="text-5xl">
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
                </span>
                <span className="text-5xl"> :</span>
            </div>
            <div className="ml-1 mr-1">
                <span className="text-5xl">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </span>
                <span className="text-5xl"> :</span>
            </div>
            <div className="ml-1 mr-1">
                <span className="text-5xl">
                    {console.log(time)}
                {(setMili + (time / 10) % 1000).slice(-2)}</span>
            </div>
        </div> 
        <Button childToParent={childToParent}/>  
    </div>
    )
}