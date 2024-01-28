import React from 'react';
import logo from "../img/gkg.png"

function Footer() {

    return (
        <div className="footer">
            <div className="space h-10"></div>
            <div className="hr-1-div grid grid-cols-3">
                <hr className="hr-1-1 w-full border-4 border-solid border-black" />
                <hr className="hr-1-2 w-full border-4 border-solid border-red-800" />
                <hr className="hr-1-3 w-full border-4 border-solid border-red-500" />
            </div>
            <div className="inner-footer pt-20">
                <dl className="grid grid-cols-1 lg:grid-flow-col lg:grid-rows-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-start">
                        
                        <div className="main social flex flex-col gap-2 ">
                            <div className="up flex flex-row gap-2">
                                <a href="https://www.instagram.com/">
                                    <button className="card1 w-[70px] h-[70px] outline-none border-solid border-2 border-red-600 hover:text-white">
                                        <div className="instagram"><img
                            className="h-12 w-auto p-2"
                            src={logo}
                            alt=""
                        />
                                             </div>
                                    </button>
                                </a>
                                <a href="https://twitter.com/">
                                    <button className="card2 w-[70px] h-[70px] outline-none  border-solid border-2 border-red-600 hover:text-white">
                                        <div className="twitter"><img
                            className="h-12 w-auto p-2"
                            src={logo}
                            alt=""
                        />
                                            
                                        </div>
                                    </button>
                                </a>
                            </div>
                            <div className="down flex flex-row gap-2">
                                <a href="https://www.youtube.com/">
                                    <button className="card3 w-[70px] h-[70px] outline-none  border-solid border-2 border-red-600 hover:text-white">
                                        <div className="youtube"><img
                            className="h-12 w-auto p-2"
                            src={logo}
                            alt=""
                        />
                                              </div>
                                    </button>
                                </a>
                                <a href="https://www.facebook.com/">
                                    <button className="card4 w-[70px] h-[70px] outline-none  border-solid border-2 border-red-600 hover:text-white">
                                        <div className="facebook" >
                                        <img
                            className="h-12 w-auto p-2"
                            src={logo}
                            alt=""
                        />
                                               </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="logo flex flex-col items-center">
                        <img
                            className="h-12 w-auto mt-12"
                            src={logo}
                            alt=""
                        />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold ">Developer</div>
                                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-700">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="text-zinc-500">İsmet Ayşe Kaya</div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto   flex max-w-2xl flex-col gap-y-4">
                        <div className="flex items-center justify-center ">
                            <dl className="grid grid-cols-1 gap-y-10 lg:grid-cols-3">
                               
                            </dl>

                        </div>

                    </div>

                    <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-end justify-end">
                        <img className='h-[400px] w-auto' src="" alt="" />
                    </div>
                </dl>
            </div>
            <div className="hr-1-div grid grid-cols-3">
                <hr className="hr-1-3 w-full border-4 border-solid border-red-500" />
                <hr className="hr-1-2 w-full border-4 border-solid border-red-800" />
                <hr className="hr-1-1 w-full border-4 border-solid border-black" />
            </div>
            <div className="space h-10 "></div>

        </div>
    );
}
export default Footer;