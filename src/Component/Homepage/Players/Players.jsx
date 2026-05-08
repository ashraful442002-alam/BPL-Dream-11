import React from 'react';
import AvailablePlayer from "./AvailablePlayer/AvailablePlayer";

const Players = ({ playerPromise }) => {

    const players = React.use(playerPromise); 

    return (
        <div className='container mx-auto'>

            <p>Total Players: {players.length}</p>

            <AvailablePlayer players={players} />

        </div>
    );
};

export default Players;