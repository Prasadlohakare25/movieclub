import { React } from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";


export default function SignUp() {
    return (
        <div className='bg-[url("components/images/img1.jpg")] h-screen'>
            <div className='place-self-start text-red-600 font-extrabold text-4xl shadow-lg p-4'><h1>MovieCLub</h1></div>
            <div className='main_div flex items-center justify-center flex-col m-16 '>


                <div className='box-div text-center bg-black px-20 py-3 text-white font-bold bg-opacity-80 border border-slate-400 rounded-lg'>
                    <h1 className='font-bold text-3xl m-2'>Sign Up</h1><br /><br />
                    <form>
                        <label for='user-name'>Name</label><br />
                        <input type="text" name='user-name' className='p-1 border-2 m-1 border-slate-700 text-black font-normal px-4' placeholder='Enter your name' required /><br />

                        <label for='user-email'>Email</label><br />
                        <input type='email' name='user-email' placeholder='Enter your email' className='p-1 border-2 border-slate-700 m-1 font-normal  px-4 text-black' required /><br />

                        <label for='user-pass'>Password</label><br />
                        <input type='password' name='user-pass' placeholder='xxxxxx' className='p-1 border-2 border-slate-700 m-1 font-normal px-4 text-black' required /><br />

                        <button className='bg-red-700 m-5 p-1 border rounded-lg px-7 border-slate-950 text-gray-50'>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}