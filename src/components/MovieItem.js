import React from 'react';
import { Link } from 'react-router-dom'

const movieItem = (props) => {
    return(
            <div className="collection" style={styles.listItem}>
                <Link to={`/${props.id}`}>
                    <div className="collection-item">
                        <p>Movie Title: {props.title}</p>
                    </div>
                </Link>
            </div>
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