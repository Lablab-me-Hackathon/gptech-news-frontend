
const Feed = ({ title, link, date }) => {
    let formatted = { day: 'numeric', mounth: 'long', year: 'numeric' }

    let
    return (
        <div>
            <h3>{title}</h3>
            <p>{date}</p>
        </div>
    )
}

export default Feed