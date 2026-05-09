import React from 'react';
import AvailablePlayer from "./AvailablePlayer/AvailablePlayer";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise }) => {

    const players = React.use(playerPromise); 



    const [selectedType, setSelectedType] = React.useState('available');

    console.log(selectedType,"selectedType");


    return (
        <div className='container mx-auto my-[60px]'>

           <div className='flex  justify-between gap-4 items-center mb-[20px]'>
            
         {selectedType === "available" ? (
  <h2 className='font-bold text-3xl'>Available Players</h2>
) : (
  <h2 className='font-bold text-3xl'>Selected Players(2/6)</h2>
)}
            <div className='flex'>
                <button onClick={ ()=> setSelectedType("available")} className={`btn ${selectedType==="available"?"bg-[#E7FE29]":"bg-zinc-600 text-white"}  text-black rounded-r-none rounded-2xl`}>Available</button>


                <button onClick={ ()=> setSelectedType("selected")} className={`btn ${selectedType==="selected"?"bg-[#E7FE29]":"bg-zinc-600 text-white"}  text-black rounded-l-none rounded-2xl`}>Selected(0)</button>
                </div>
            </div>
           

           { selectedType === "available" ? (
  <AvailablePlayer players={players} />
) : (
  <SelectedPlayers />
)}

        </div>
    );
};

export default Players;