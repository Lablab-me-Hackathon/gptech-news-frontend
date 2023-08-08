
const Feed = ({ title, link, date }) => {
    let format
    return (
        <div>
            <h3>{title}</h3>
            <p>{date}</p>
        </div>
    )
}

export default Feed