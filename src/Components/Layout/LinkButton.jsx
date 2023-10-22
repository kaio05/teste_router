import { Link } from 'react-router-dom'

const LinkButton = ({to}) => {
    return (
        <button><Link to={to}>About</Link></button>
    )
}

export default LinkButton
