import { React } from 'react';
import Img1 from "./images/img2.jpg";

export default function MovieCard(movie) {
    return (
        <div className='h-75 w-60 border-4 rounded-lg p-0 border-slate-600'>
            <div className='h-35 w-55 p-0 m-0'>
                <img src={movie.src} alt={movie.movieName} className='object-fill' />
            </div>
            <div className='h-25 w-55 m-0 p-0 bg-red-300'>
                <h2 className='h-15'>{movie.movieName}</h2>
                {/* <p className='h-10'>{person.courseDes}</p> */}
            </div>
        </div>

    );
}