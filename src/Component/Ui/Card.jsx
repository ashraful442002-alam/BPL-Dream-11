import React from 'react';
import { FaUser, FaFlag } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { BiSolidCricketBall } from "react-icons/bi";

const Card = ({ player }) => {
    return (
        <div

                        className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl"
                    >

                       
                        <div className="w-full aspect-[3/4] overflow-hidden rounded-t-xl">
                            <img
                                src={player.playerimag}
                                alt={player.playerName}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="card-body space-y-2">

                            <h2 className="card-title text-lg font-bold flex items-center gap-2">
                                <FaUser /> {player.playerName}
                            </h2>

                            <div className='flex justify-between items-center'>
                                <div className='flex gap-2 items-center text-sm'>
                                    <FaFlag />
                                    <p>{player.country}</p>
                                </div>

                                <button className='btn btn-sm btn-outline'>
                                    {player.playertype}
                                </button>
                            </div>

                            <div className="divider my-1"></div>

                            <h2 className='font-semibold'>
                                Rating: <span className='text-primary'>{player.rating}</span>
                            </h2>

              
                            <div className="flex justify-between text-sm items-center">

                                <div className="flex items-center gap-2">
                                    <BiSolidCricketBall />
                                    <p>{player.bowlingstyle}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <GiCricketBat />
                                    <p>{player.battingstyle}</p>
                                </div>

                            </div>

                            <div className="flex justify-between items-center pt-2">
                                <p className="font-bold text-lg text-green-600">
                                    {player.price}
                                </p>

                                <button className="btn btn-primary btn-sm">
                                    Buy
                                </button>
                            </div>

                        </div>
                    </div>
    );
};

export default Card;