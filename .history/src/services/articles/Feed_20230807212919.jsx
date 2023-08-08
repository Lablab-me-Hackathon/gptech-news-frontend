import { PropTypes } from 'prop-types';

const Feed = ({ title, link, date }) => {
    let formatDate = { day: 'numeric', mounth: 'long', year: 'numeric' }

    let articleDate = new Date(date).toLocaleDateString('en-GB', formatDate)

    return (
        <div className="py-5">
            <a href={link} target='_blank' rel="noopener noreferrer" className="hover:opacity-70 hover:text-orange-500">
                <h3 className="text-xl mb-1 underline decoration-blue-400">{title}</h3>
                <p>{articleDate}</p>
            </a>
        </div>
    )
}
Project.propTypes = {
    logo: PropTypes.instanceOf(Date).isRequired,
    // formattedDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
  };
export default Feed