function Movie(props){
    
    const {title, year, type, image__link} = props;

    return (
        <div className="movie__card">
                <div className="card">
                    <div className="card-image">
                    {
                        image__link === 'N/A' ? <img src={"https://placehold.co/381x572/000000/FFFFFF/png"} className="movie__poster"/> : <img src={image__link} className="movie__poster"/>
                    }
                    
                    <span className="card-title">{title}</span>
                    </div>
                    <div className="card-content">
                    <p>Content type: {type}</p>
                    <p>Year: {year}</p>
                    </div>
                </div>
                </div>
    )
}


export default Movie