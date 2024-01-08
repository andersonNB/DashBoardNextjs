import React from 'react'
import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from './';



const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subtitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subtitle: 'Contador Client Side'
    },
]

const Sidebar = () => {
    return (
        <div
            style={{ width: '400px' }}
            id="menu"
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
        >
            <div id="logo" className="my-4 px-6">
                <h1 className="flex flex-row items-center text-lg md:text-2xl font-bold text-white">
                    <span className='mr-2'><IoLogoReact /></span>
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                            className="rounded-full w-8 h-8"
                            alt="User profile"
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Anderson Navarro
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {
                    menuItems.map(({ path, icon, title, subtitle }, index) => {
                        return (
                            <SidebarMenuItem key={index}
                                path={path}
                                icon={icon}
                                title={title}
                                subtitle={subtitle} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar