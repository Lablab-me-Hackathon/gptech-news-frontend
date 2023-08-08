
const Feed = ({ title, link, date }) => {
    let formatDate = { day: 'numeric', mounth: 'long', year: 'numeric' }

    let articleDate = newDate(date).toLocaleDateString('en-GB', formatDate)

    return (
        <div>
            <img src="" alt="" srcset="" />
            <h3>{title}</h3>
            <p>{articleDate}</p>
            <a href={link}>Read Article</a>
        </div>
    )
}

export default Feed