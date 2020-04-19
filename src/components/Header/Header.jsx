import React from 'react'
import Button from '@material-ui/core/Button';

import styles from './Header.module.css';

import coronaImage from '../../images/coronaImg.png'
import { Link } from 'react-router-dom';

function Header({ title, path }) {
    return (
        <div className={styles.headerWrapper}>
            <img className={styles.covidImage} src={coronaImage} alt="COVID-19" />
            <Link to={path}>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={styles.button}
                >{title}</Button>
            </Link>
        </div>
    )
}

export default Header
