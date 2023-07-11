
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
            <div className='sm:flex-grow sm:h-min md:w-2/6 min-w bg-brown text-tan flex justify-center '>
                <div className='font-kadwa tracking-widest h-min text-2xl lg:text-3xl xl:text-4xl'>
                    <h2 className='text-center mt-5'>Hours:</h2>
                    <h3 className='text-center mt-10'>Sun-Mon: 11-9</h3>
                    <h3 className='text-center mt-10'>Tues-Thur: 11-10</h3>
                    <h3 className='text-center mt-10 mb-5'>Fri-Sat: 11-11</h3>
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
                
            </div>
            <div className='h-fit fit-content bg-black flex justify-between'>
                <img className='w-[30%] m-8' src='cobb.jpg'></img>
                <img className='w-[30%] m-8' src='dip.jpg'></img>
                <img className='w-[30%] m-8' src='sandwich.jpg'></img>
            </div>
            <div className='flex flex-wrap flex-grow h-fit bg-brown font-kadwa text-lg'>
                <div className='border-r-2 w-2/6'>
                    <div className='border-b-2 text-center'> 
                        <p className='m-2 text-tan'>Lakewood Ranch Main Street</p>
                    </div>
                    <div className='m-2 mt-4 text-center text-tan'>
                    <p>8141 Lakewood Main St. N103</p>
                    <p>Lakewood Ranch, FL, 34202</p>
                    <p>Phone: (941) 822-8131</p>
                    </div>
                </div>
                <div className='w-2/6'>
                    <a href=""><img src=""></img></a>
                    <a href=""><img src=""></img></a>
                    <a href=""><img src=""></img></a>
                </div>
                <div className='w-2/6 flex items-center border-l-2 justify-center'>
                    <div className='w-full text-center lg:w-1/2 text-tan text-xl '>
                        <p>Hours:</p>
                        <p>Sun-Mon: 11-9</p>
                        <p>Tues-Thur: 11-10</p>
                        <p>Fri-Sat: 11-11</p>
                    </div>
                    <div className='w-1/2 h-full lg:flex lg: items-center collapse md:block lg:visible'>
                        <img className='object-center'src='logo.png'></img>
                    </div>
                </div>
            </div>
            <style>{`

            `}</style>
        </>
    );
}
