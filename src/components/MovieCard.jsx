import { React } from 'react';

export default function MovieCard() {
    return (
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
            {/* here we are going to create component which will show the category and movies related to it. */}
        </div>
    )
}