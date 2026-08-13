
function EventCard({abbreviation, name, cluster, format}) {

    return (
            <article className="event-card">
                <div className="event-card-top">
                    <span className="event-abbreviation">{abbreviation}</span>
                    <span className="event-cluster">{cluster}</span>
                </div>
                <h3 className="event-name">{name}</h3>
                <p className="event-format">{format}</p>
                <a className="event-link" href="#">View Event</a>
            </article>
    )
}

export default EventCard;