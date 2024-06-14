import React from 'react';
import {useParams} from 'react-router-dom'

const SingleTeam = () => {
    const {teamName} =useParams()
    return (
        <div className="mt-10">
            {teamName}
        </div>
    );
};

export default SingleTeam;