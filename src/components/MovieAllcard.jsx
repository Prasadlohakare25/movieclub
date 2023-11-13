import { React } from 'react';
import MovieCard from './MovieCard';
import Img1 from "./images/img2.jpg";

export default function MovieAllcard() {
    return (
        <div>
            <div className='bg-zinc-900 h-screen text-white'>
                <navbar className='flex bg-black shadow-lg'>
                    <h1 className='flex-1 text-red-600 font-extrabold text-4xl p-4'>MovieClub</h1>
                    <div className='flex-2 text-white'>
                        <h1 className='border border-slate-50 m-4 p-1'> UserName</h1>
                    </div>
                </navbar>
                <div className='divOne text-white font-poppins p-4'>
                    <h1 className='font-extrabold text-3xl my-3 '>Movies</h1>
                    <p>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
                </div>
                <div className='font-bold text-3xl text-white px-4'>
                    <h1>Our Featured</h1>
                </div>
                {/* here we are going to create component which will show the category and movies related to it. */}
                <div className='flex p-5 space-x-[40px]'>
                    {/* {
                    cards.length > 0 ? cards.map((item) => <MovieCard movie={item} />) : 'movie not found'
                } */}
                    <MovieCard src={Img1} movieName={"Jawan"} />
                </div>
            </div>
        </div>
    )
}