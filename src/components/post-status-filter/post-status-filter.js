import React from 'react';
import { Button } from 'reactstrap'; 
import './post-status-filter.css';

const PostStatusFilter = () => {
    return(
        <div className="btn-group">
            <Button outline color='info'>Alllllll</Button>
            <button
                className="btn btn-info"
                type="btn"
            >All
            </button> 
            
            <button
                className="btn btn-outline-secondary"
                type="btn"
            >Like
            </button>
        </div>
    )
}


export default PostStatusFilter;