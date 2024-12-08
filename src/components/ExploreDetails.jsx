import React, { useState } from 'react';
import { useContext } from 'react';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import { useLoaderData } from 'react-router-dom';
import { DataContext } from '../providers/DataProvider';
// import GameList from './GameList';


const ExploreDetails = () => {
    const details = useLoaderData()
    // console.log(details)

    const { _id, photo, name, review, rating, publishing } = details

    const {handleSelectedReview,selectedReviews} = useContext(DataContext)
    console.log(handleSelectedReview,selectedReviews)

    return (
        <div>
            <h2 className='text-center font-bold text-2xl mt-4'>Explore Details Your Game Here</h2>
         <div className="w-11/12 mx-auto mt-5 card lg:card-side bg-purple-400 mb-3">
  <figure>
    <img
      src={photo}
      className="w-64 h-64 mb-3 mx-14 rounded-md mt-3 object-cover"
      alt="Album"/>
  </figure>
  <div className="flex justify-around w-full mt-6">
    <div>
         <h2 className="card-title text-purple-950">Name: {name}</h2>
         <p>Rating: {rating}</p>
         <p>Publishing-Year: {publishing}</p>
         <div className='flex gap-2'>
         <img src={photo} className='rounded-full w-12 h-12 object-cover'></img>
         <p className='mt-4'>Name: Jone tellas</p>
         </div>
         <p>Email: Jonetell34@gmail.com</p>
         <p>Review: {review}</p>

    </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-3">
        <button className="font-bold text-white">Share the Game</button>
        <button className="btn text-sky-600 text-2xl font-bold bg-blue-200"><CiFacebook /><CiTwitter /></button>
        <button onClick={()=>handleSelectedReview(details)} className="btn text-green-600 font-bold bg-blue-200">Add to Watch-list</button>

        {/* <div>
        <GameList selectedReviews={selectedReviews}></GameList>
        </div> */}
   </div>
    </div>
       
  </div>
</div> 
        </div>
    );
};

export default ExploreDetails;