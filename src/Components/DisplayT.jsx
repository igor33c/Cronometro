export function Display(props){
    return(
    <div>
        <div className="max-w-md flex text-center justify-center mt-10"> 
            <div className="ml-1 mr-1">
                <span className="text-5xl">
                {("0" + Math.floor((props.time / 3600000) % 60)).slice(-2)}
                </span>
                <span className="text-5xl"> :</span>
            </div>         
            <div className="ml-1 mr-1">
                <span className="text-5xl">
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}
                </span>
                <span className="text-5xl"> :</span>
            </div>
            <div className="ml-1 mr-1">
                <span className="text-5xl">
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
                </span>
                <span className="text-5xl"> :</span>
            </div>
            <div className="ml-1 mr-1">
                <span className="text-5xl">
                    {console.log(props.time/3600000)}
                {("0" + (props.time / 10) % 1000).slice(-2)}</span>
            </div>
        </div>
    </div>
    )
}