import React from 'react';
import './search-panel.css';

const SerachPanel = () => {
    return(
        <input
            className="form-control search-input"
            type="text"
            placeholder="Search by post"
        />
    )
}

export default SerachPanel;