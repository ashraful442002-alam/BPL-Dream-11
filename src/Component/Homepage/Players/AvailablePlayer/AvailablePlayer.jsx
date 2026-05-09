import React from 'react';
import Card from '../../../Ui/Card';

const AvailablePlayer = ({ players,setCoins , coins }) => {

    return (
        <div className='grid gap-6 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        p-4'>

            {
                players.map(player => (

                    <Card player={player} setCoins={setCoins} coins={coins}></Card>
                    
                ))
            }

        </div>
    );
};

export default AvailablePlayer;