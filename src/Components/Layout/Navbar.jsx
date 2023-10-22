import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul className={styles.nav_list}>
                <li>
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link to="/contact">Contact</Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link to="/about">About</Link>
                    </p>
                </li>
            </ul>
        </>
    )
}

export default Navbar