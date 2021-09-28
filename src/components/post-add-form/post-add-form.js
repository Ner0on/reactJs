import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {
    return (
        <div>   
            <form className="bottom-panel d-flex">
                <input
                    type="text"
                    placeholder="What do you think right now"
                    className="form-control new-post-label"
                />
                <button
                    type="btn" 
                    className="btn btn-outline-secondary"
                >Add
                </button>
            </form>
        </div>
    )   
}

export default PostAddForm;