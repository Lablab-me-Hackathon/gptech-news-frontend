
const Feed = ({ title, link, date }) => {
    let formatDate = { day: 'numeric', mounth: 'long', year: 'numeric' }

    let articleDate = newDate(date).toLocaleDateString('en-GB', formatDate)

    return (
        <div>
            <img src="https://cdn-images-1.medium.com/max/303/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png" alt=""  />
            <h3>{title}</h3>
            <p>{articleDate}</p>
            <a href={link}>Read Article</a>
        </div>
    )
}

export default Feed