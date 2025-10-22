<<<<<<< HEAD
import marker from '../images/marker.png'
=======
/**
 * Challenge: Fix our component! 😱
 */
>>>>>>> f04f80c01ef4fe5a01d08ac775a3de5d754f178f

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.entry.img.src}
                    alt={props.entry.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
<<<<<<< HEAD
                    src={marker} 
=======
                    src="../images/marker.png" 
>>>>>>> f04f80c01ef4fe5a01d08ac775a3de5d754f178f
                    alt="map marker icon"
                />
                <span className="country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="trip-dates">{props.entry.dates}</p>
                <p className="entry-text">{props.entry.text}</p>
            </div>
            
        </article>
    )
}