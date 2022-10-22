import { useState } from "react"
import { Button } from "./Button"


export function Display (){
    function close(){
        setMili(0)
        setSec (0)
        setMin (0)
        setHour (0)        
    }
    
    const [mili, setMili] = useState(321)
    const [sec, setSec] = useState(8)
    const [min, setMin] = useState(3)
    const [hour, setHour] = useState(12)

    
    function childToParent (action)  {
        
        if (action === 'zerar'){
            close()
        }
        if (action === 'start'){
            ///criar funcao cronometro
            ///contar()
            setMili(231)
            setSec (12)
            setMin (32)
            setHour (1)
        }
        if (action === 'stop'){
            console.log('stop')        
        } 
    }
    const childToParent2 = () => {
        close()
        alert('starting...')
    }
    
    return(
        <div>
            <div className="flex text-center justify-center mt-10">
                <button onClick={() => close()}>teste</button>
                <div className="ml-1 mr-1">
                    <span className="text-5xl">{
                        hour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
                                               }</span>
                    <span className="text-5xl"> :</span>
                </div>

                <div className="ml-1 mr-1">
                    <span className="text-5xl">{
                        min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
                    }</span>
                    <span className="text-5xl"> :</span>
                </div>
                <div className="ml-1 mr-1">
                    <span className="text-5xl">
                    {
                        sec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
                    }   
                    </span>
                    <span className="text-5xl"> :</span>
                </div>
                <div className="ml-1 mr-1">
                    <span className="text-5xl">
                    {
                        mili.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
                    }</span>
                </div>
            </div> 
            <Button childToParent={childToParent}/>  
        </div>
    )
}