
const Feed = ({ title, link, date }) => {
    let formatDate = { day: 'numeric', mounth: 'long', year: 'numeric' }

    let articleDate = newDate(date).toLocaleDateString('en-GB', )

    return (
        <div>
            <h3>{title}</h3>
            <p>{date}</p>
        </div>
    )
}

export default Feed