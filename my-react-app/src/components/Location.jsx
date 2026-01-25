function Location(props){
    console.log(props)
    return(
        <>
    <div className="container">
            <div className="location-img">
                <img 
                src={props.img.src}
                alt={props.img.alt} 
                />
            </div>

            <div className="descreption">
                <h3><i class="fa-solid fa-location-dot"></i> {props.city}</h3>
                <h1>{props.venue}</h1>
                <h2>{props.date}</h2>
                <p>{props.description}</p>
            
            </div>
    </div>
    </>
    );
    
}

export default Location