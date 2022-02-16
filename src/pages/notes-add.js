import React from 'react';

export default function NotesAdd () {
    return (<main>
        <h2 className="page-title">Add note</h2>
        <form>
            <div className="form-item first">
                <div className="form-label">
                    <label for="name">Name</label>
                </div>
                <div className="form-input">
                    <input type="text" id="name" />
                </div>
            </div>
            <div className="form-item">
                <div className="form-label">
                    <label for="description">Description</label>
                </div>
                <div className="form-input">
                    <textarea id="description" />
                </div>
            </div>
            <input type="submit" value="Save"></input>
        </form>
    </main>)
}