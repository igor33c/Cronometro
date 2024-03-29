import { useState, useEffect } from "react"
import { Button } from "./Button"
import { Display } from "./DisplayT"

export function SetTimer (){
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


function starting(){
    setStart(true)
}
function stoping(){
    setStart(false)
}
function zering(){    
    setTime(0)  
    setStart(false)
    
}
function childToParent (action)  {    
    if (action === 'zerar'){
        zering()
    }
    if (action === 'start'){        
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
        <Display 
            time={time}
        />         
        <Button 
            childToParent={childToParent}
        />  
    </div>
    )
}