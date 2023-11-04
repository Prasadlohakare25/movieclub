import { React } from 'react';

export default function SignIn() {
    return (
        <div className='bg-[url("components/images/img1.jpg")] h-screen'>
            <div className='place-self-start text-red-600 font-extrabold text-4xl shadow-lg p-4'><h1>MovieCLub</h1></div>
            <div className='main_div flex items-center justify-center flex-col m-16 '>


                <div className='box-div text-center bg-black px-20 py-3 text-white font-bold bg-opacity-80 border border-slate-400 rounded-lg'>
                    <h1 className='font-bold text-3xl m-2 '>Sign In</h1><br />
                    <label for='user-email'>Email</label><br />
                    <input type='email' name='user-email' placeholder='Enter your email' className='p-1 border-2 border-slate-700 m-1 font-normal px-4 text-black' required /><br />
                    <label for='user-pass'>Password</label><br />
                    <input type='password' name='user-pass' placeholder='xxxxxx' className='p-1 border-2 border-slate-700 m-1 font-normal px-4 text-black' required /><br />
                    <button className='bg-red-700 m-5 p-1 border rounded-lg px-7 border-slate-950 text-gray-50'>Sign In</button><br/>
                    <p className='font-light font-serif'>If not a member then Sign Up</p>
                    <button className='bg-slate-700 border rounded-lg px-3 border-slate-50 text-gray-50 font-serif'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}