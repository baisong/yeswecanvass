import React from 'react';

const noteRecords = [
    {
        name: 'Person A',
        description: 'No answer'
    },
    {
        title: 'Person B',
        path: 'Registered to vote'
    },
    {
        title: 'Person C',
        path: 'Interested in volunteering'
    }
];

export default function Notes () {
    return (
    <main>
    <h2 className="page-title">My notes</h2>
        <table>
            <tr className="table-header">
                <td>Name</td>
                <td>Description</td>
            </tr>
            { noteRecords.map((record, i) => (
            <tr key={i}>
                <td>{record.name}</td>
                <td>{record.description}</td>
            </tr>
            ))
            }
        </table>
    </main>
    )
}