

export function Timer (){

    const mili = 321
    const sec = 8
    const min = 3
    const hour = 12

    
    
    return(
        <div>
            <div className="flex text-center justify-center mt-10">
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
        </div>
    )
}