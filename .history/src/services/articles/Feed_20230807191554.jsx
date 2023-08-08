
const Feed = ({ title, link, date }) => {
    let formatDate = { day: 'numeric', mounth: 'long', year: 'numeric' }

    let articleDate = new Date(date).toLocaleDateString('en-GB', formatDate)

    return (
        <div>

        </div>
        
    )
}

export default Feed