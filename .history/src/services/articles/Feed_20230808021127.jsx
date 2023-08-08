import { PropTypes } from 'prop-types';

const Feed = ({ title, link, date }) => {
    let formatDate = { day: 'numeric', mounth: 'long', year: 'numeric' }

    let articleDate = new Date(date).toLocaleDateString('en-GB', formatDate)

    return (
        <div className="py-5">
            <a href={link} target='_blank' rel="noopener noreferrer" className="hover:opacity-70 hover:text-orange-500">
                <h3 className="text-xl mb-1 underline decoration-blue-400 mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{title}</h3>
                <p>{articleDate}</p>
            </a>
        </div>
    )
}

Feed.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default Feed