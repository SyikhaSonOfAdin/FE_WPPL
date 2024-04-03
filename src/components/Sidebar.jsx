import Avatar from "../assets/svg/icon/Avatar.svg";
import dashboardIcon from "../assets/svg/icon/dashboard.svg";
import Transfer from "../assets/svg/icon/product.svg";
import History from "../assets/svg/icon/pricing.svg";
import Locations from "../assets/svg/icon/toDo.svg";
import Promote from "../assets/svg/icon/uiElement.svg";
import Settings from "../assets/svg/icon/settings.svg";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";


export default function Sidebar() {
    const [isOpen, setOpen] = useState(true);
    const Navigate = useNavigate();

    return (
        <>
            <div className='flex h-screen'>

                <div className={`h-full ${isOpen ? "w-2/3" : "w-[16%] md:w-[7%] lg:w-[4%]"} duration-300 md:w-2/5 lg:w-1/5 flex flex-col bg-white border-r shadow-sm`}>
                    <div className={`p-2 pb-2 flex justify-between items-center ${!isOpen && ""}`}>
                        <div className={`flex ${!isOpen && "hidden"}`}>
                            <img src='https://img.logoipsum.com/234.svg' className='w-12' alt='logo idk' />
                            <h1 className="p-2 font-bold text-xs md:text-lg">Hello Budi 👋</h1>
                            <h1></h1>
                        </div>

                        <div className="flex">
                            <div className='w-10 flex flex-col gap-0.5 p-2' onClick={() => setOpen(!isOpen)}>
                                <div className="w-full h-1 bg-black/60 rounded"></div>
                                <div className="w-full h-1 bg-black/60 rounded"></div>
                                <div className="w-full h-1 bg-black/60 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className={`flex flex-col p-6 ${!isOpen && "hidden"}`}>
                        <h1 className="font-bold text-xs md:text-lg">Sistem Informasi</h1>
                        <h1 className="font-bold text-xs md:text-lg">Manajemen Warehouse</h1>
                    </div>

                    <div className="flex flex-col h-full justify-between">
                        <div className="flex flex-col">
                            <div onClick={() => {
                                Navigate('/Dashboard')
                            }} className={`flex mx-3 my-1 p-1 w-[90%] rounded-md text-gray-600 hover:text-black hover:font-bold hover:bg-gray-100 hover:cursor-pointer ${!isOpen && "w-[52%] lg:w-[50%] my-2"}`}>
                                <img src={dashboardIcon} alt="" className="" />
                                <h1 className={`ml-3 text-sm md:text-lg ${!isOpen && "hidden"}`}>Dashboard</h1>
                            </div>

                            <div onClick={() => {
                                Navigate('/Received')
                            }} className={`flex mx-3 my-1 p-1 w-[90%] rounded-md text-gray-600 hover:text-black hover:font-bold hover:bg-gray-100 hover:cursor-pointer ${!isOpen && "w-[52%] lg:w-[50%] my-2"}`}>
                                <img src={Transfer} alt="" />
                                <h1 className={`ml-3 text-sm md:text-lg ${!isOpen && "hidden"}`}>Barang Masuk</h1>
                            </div>

                            <div onClick={() => {
                                Navigate('/Issued')
                            }} className={`flex mx-3 my-1 p-1 w-[90%] rounded-md text-gray-600 hover:text-black hover:font-bold hover:bg-gray-100 hover:cursor-pointer ${!isOpen && "w-[52%] lg:w-[50%] my-2"}`}>
                                <img src={Transfer} alt="" />
                                <h1 className={`ml-3 text-sm md:text-lg ${!isOpen && "hidden"}`}>Barang Keluar</h1>
                            </div>

                            <div className={`flex mx-3 my-1 p-1 w-[90%] rounded-md text-gray-600 hover:text-black hover:font-bold hover:bg-gray-100 hover:cursor-pointer ${!isOpen && "w-[52%] lg:w-[50%] my-2"}`}>
                                <img src={History} alt="" />
                                <h1 className={`ml-3 text-sm md:text-lg ${!isOpen && "hidden"}`}>History</h1>
                            </div>
                            
                            <div className={`flex mx-3 my-1 p-1 w-[90%] rounded-md text-gray-600 hover:text-black hover:font-bold hover:bg-gray-100 hover:cursor-pointer ${!isOpen && "w-[52%] lg:w-[50%] my-2"}`}>
                                <img src={Locations} alt="" />
                                <h1 className={`ml-3 text-sm md:text-lg ${!isOpen && "hidden"}`}>Locations</h1>
                            </div>
                
                            
                            <div className={`flex mx-3 my-1 p-1 w-[90%] rounded-md text-gray-600 hover:text-black hover:font-bold hover:bg-gray-100 hover:cursor-pointer ${!isOpen && "w-[52%] lg:w-[50%] my-2"}`}>
                                <img src={Promote} alt="" />
                                <h1 className={`ml-3 text-sm md:text-lg ${!isOpen && "hidden"}`}>Promote</h1>
                            </div>

                            <div className={`flex mx-3 my-1 p-1 w-[90%] rounded-md text-gray-600 hover:text-black hover:font-bold hover:bg-gray-100 hover:cursor-pointer ${!isOpen && "w-[52%] lg:w-[50%] my-2"}`}>
                                <img src={Settings} alt="" />
                                <h1 className={`ml-3 text-sm md:text-lg ${!isOpen && "hidden"}`}>Transfer</h1>
                            </div>
                        </div>

                        <div className='flex m-3'>
                            <img className='w-10 h-10' src={Avatar} alt="" />
                            <div className="flex justify-between items-center w-52 ml-3 mb-2">
                                <div className={`flex flex-col leading-6 ${!isOpen && "hidden"}`}>
                                    <h4 className="font-semibold text-sm md:text-sm lg:text-base">Budi</h4>
                                    <span className="text-xs text-gray-600 md:text-sm lg:text-base">Admin Warehouse</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}