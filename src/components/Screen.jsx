
export default function Screen({children, className =""}){
    return (
        <div className={` w-screen h-screen max-w-screen max-h-screen ${className}`}>
            {children}
        </div>
    )
}
