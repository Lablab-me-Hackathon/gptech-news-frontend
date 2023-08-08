
const Feed = ({ title, link, date }) => {
    let formatDate = { day: 'numeric', mounth: 'long', year: 'numeric' }

    let articleDate = new Date(date).toLocaleDateString('en-GB', formatDate)

    return (
        <a className="py-3">
            <h3 className="text-xl mb-1">{title}</h3>
            <p>{articleDate}</p>
            <a href={link}>Read Article</a>
        </a>
    )
}

export default Feed