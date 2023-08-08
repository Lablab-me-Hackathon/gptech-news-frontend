
const Feed = ({ title, link, date }) => {
    let formatDate = { day: 'numeric', mounth: 'long', year: 'numeric' }

    let articleDate = newDate(date).toLocaleDateString('en-GB', formatDate)

    return (
        <div>
            <h3>{title}</h3>
            <p>{articleDate}</p>
            a
        </div>
    )
}

export default Feed