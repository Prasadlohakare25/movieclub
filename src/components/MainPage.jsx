import { React } from 'react';
import Img from "./images/tv.png";
import Img1 from "./images/img2.jpg";
import Img2 from "./images/img3.png";
import '../App.css';

function MainPage() {
    return (
        <div className="main">
            <div className='bg-[url("components/images/img1.jpg")] h-screen w-full bg-cover'>
                <navbar className='flex'>
                    <nav className='flex-1 font-bold text-2xl'>
                        <h1 className='text-red-600 font-bold text-5xl p-5 px-10'>Movieclub</h1></nav>
                    <nav id="sideoption" className=' flex flex-3 mx-5 p-4  '>
                        <div className='mx-3'>
                            <select name='choice' className='bg-opacity-30 bg-rose-100  border rounded -lg px-2 py-1 font-bold'>
                                <option value='english'>English</option>
                                <option value='hindi'>Hindi</option>
                            </select>
                        </div>
                        <div className='mx-5'>
                            <button className='bg-red-600 bg-opacity-90 border-none p-1 rounded-sm px-2'>Sign In</button>
                        </div>
                    </nav>
                </navbar>
                <div className='flex flex-col justify-center items-center h-2/3'>
                    <div><h1 className='text-zinc-200 font-black text-4xl my-4'>Laughter. Tears. Thrills. Find it all on Movieclub</h1></div>
                    <div>
                        <p className='text-slate-100 text-2xl'>Ready to bing? Enter your email and sign up now</p></div>
                    <div>
                        <button className='bg-red-600 bg-opacity-80 border rounded-sm px-2 p-1 text-slate-100 font-medium text-lg m-3'>Sign Up</button>
                    </div>
                </div>
            </div>
            {/* this is the second div */}
            <div className='bg-gray-950 h-full border-y-8 border-gray-500 py-20 flex place-self-center'>
                <div className='text-slate-100 flex-1 place-self-center text-center'>
                    <h1 className='font-bold text-4xl '>Enjoy on your TV</h1>
                    <p className='font-medium text-xl'>Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='flex-1 self-center place-self-center px-10'>
                    <img src={Img} alt='TV image' className='h-80' />
                </div>
            </div>
            {/* this is the third div */}
            <div className='bg-gray-950 h-full border-y-8 border-gray-500 py-20 flex place-self-center'>
                <div className='flex-2 self-center place-self-center px-20'>
                    <img src={Img1} alt='TV image' className='h-80' />
                </div>
                <div className='text-slate-100 flex-1 place-self-center text-start'>
                    <pre className='font-bold text-4xl '>Download your shows
                        to watch offline</pre>
                    <p className='font-medium text-xl'>Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
            {/* this is the fourth div */}
            <div className='bg-gray-950 h-full border-y-8 border-gray-500 py-20 flex place-self-center'>
                <div className='text-slate-100 flex-1 place-self-center text-center'>
                    <pre className='font-bold text-4xl '>Watch everywhere</pre>
                    <p className='font-medium text-xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className='flex-2 self-center place-self-center px-20'>
                    <img src={Img2} alt='TV image' className='h-80' />
                </div>
            </div>
        </div>
    )
}
export default MainPage;