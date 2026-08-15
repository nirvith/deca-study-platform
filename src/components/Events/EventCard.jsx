import { Link } from "react-router-dom";


function EventCard({id, abbreviation, name, cluster, format}) {

    return (
            <article className="event-card">
                <div className="event-card-top">
                    <span className="event-abbreviation">{abbreviation}</span>
                    <span className="event-cluster">{cluster}</span>
                </div>
                <h3 className="event-name">{name}</h3>
                <p className="event-format">{format}</p>
                <Link  className="event-link" to={`/events/${id}`}>View Event</Link>
            </article>
    )
}

export default EventCard;