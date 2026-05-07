import React, { use } from 'react';
import AvailablePlayer from '../../AvailablePlayer/AvailablePlayer';

const Players = ({ playerPromise }) => {

    const players = use(playerPromise);

    console.log(players);

    return (
        <div className='container mx-auto'>
            
            <p>Total Players: {players.length}</p>
            <AvailablePlayer players={players}></AvailablePlayer>
        </div>
    );
};

export default Players;