import React from 'react';
import { Link } from 'react-router-dom'

const movieItem = (props) => {
    return(
        <Link to={`/${props.id}`}>
            <div className="collection" style={styles.listItem}>
                <div className="collection-item">
                    <p>Movie Title: {props.title}</p>
                </div>
            </div>
        </Link>
    )
}

const styles = {
    listItem: {
        width: '80%',
        display: 'block',
        margin: '10px auto',
    },
    
}

export default movieItem