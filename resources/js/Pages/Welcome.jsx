
import { Link, Head } from '@inertiajs/react';
export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <link href="{{'css/styles.css') }}" rel="stylesheet"></link>
            <div className="flex items-center min-h-fit ">
                <img className='sm:top-0 sm:left-0 md:top-0 md:left-0 sm: max-w-[45%] md:max-w-[15%]' src="logo.png"></img>
                <div className='font-kadwa text-xl tracking-widest left-0 flex flex-wrap md:flex-nowrap sm:flex-wrap sm:top-10 w-screen'>
                    <a href="" className="m-2 md:flex-nowrap sm:flex-wrap">Beer</a>
                    <a href="" className="m-2 md:flex-nowrap sm:flex-wrap">Wine</a>
                    <a href="" className="m-2 md:flex-nowrap sm:flex-wrap">Food</a>
                    <a href="" className="m-2 md:flex-nowrap sm:flex-wrap">About</a>
                    <a href="" className="m-2 md:flex-nowrap sm:flex-wrap">Gallery</a>
                    <a href="" className="m-2 md:flex-nowrap sm:flex-wrap">Contact</a>
                <div className="m-2 text-right right-0"> 
                    {props.auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Login
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                </div>
            </div>
            <div className='sm:flex flex-wrap bg-brown h-fit items-center'>
            <div className='sm:flex-grow sm:h-min md:h-80 md:w-2/6 min-w bg-brown text-tan flex justify-center '>
                <div className='font-kadwa tracking-widest h-min text-2xl lg:text-3xl xl:text-4xl'>
                <h2 className='text-center'>Hours:</h2>
                <h3 className='text-center mt-10'>Sun-Mon: 11-9</h3>
                <h3 className='text-center mt-10'>Tues-Thur: 11-10</h3>
                <h3 className='text-center mt-10'>Fri-Sat: 11-11</h3>
                </div>
            </div>
            <div className='flex sm:flex-grow flex-wrap items-center max-h-full md:w-2/6 '>
                <img className='object-contain' src="bbqflat.jpg"></img>
            </div>
            <div className='justify-center sm:flex-grow flex-wrap sm:h-min md:h-min md:w-2/6 bg-brown text-tan text-center '>
                <div className='flex justify-center'>
                    <img className='relative max-w-[80%] mt-5 mb-5' src="map.png"></img>
                </div>
                <div className='font-kadwa min-w-full text-xl mb-2'>
                    <h2>Address:</h2>
                    <p>8141 Lakewood Main St. N103</p>
                    <p>Lakewood Ranch, FL 34202</p>
                    <p>Phone: (941) 822-8131</p>
                </div>
            </div>
            </div>
            <div className='h-20'>
                asdf
            </div>
            <div className='h-80 sm:flex flex-wrap bg-black'>
                asdf
            </div>
            <div className='h-40 bg-brown'>
                asdf
            </div>
            <style>{`

            `}</style>
        </>
    );
}
