import React from 'react';
import SmurfCard from './SmurfCard';

const SmurfList = props=> {
    return(
        <div className='smurf-list-container'>
            {props.smurfs.map(smurf => {
                return <SmurfCard key={smurf.id} smurfData={smurf}/>
            })}
        </div>
    );
}

export default SmurfList;