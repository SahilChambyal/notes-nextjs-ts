

const ProgressBar = ({ progress , color}:{progress:any, color:string}) => {

    const styleObject = {
        width: `${progress}%`,
        backgroundColor: color || '#333',
        height: 5,
        borderRadius: 20
    }
    return (
        <div className="mt-[50px] w-[300px] sm:w-[400px] md:w-[600px] ">
            <div className="h-[5px] w-[100%] rounded-[20px] text-center ">
                <div style={styleObject}>
                    
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;