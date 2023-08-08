
const Feed = ({ title, link, date }) => {
    let formatDate = { day: 'numeric', mounth: 'long', year: 'numeric' }

    let articleDate = new Date(date).toLocaleDateString('en-GB', formatDate)

    return (
        <div className="py-5">
            <a href={link} target='_blank' rel="noopener noreferrer">
                <h3 className="text-xl mb-1 ">{title}</h3>
                <p>{articleDate}</p>
            </a>
        </div>

    )
}

export default Feed