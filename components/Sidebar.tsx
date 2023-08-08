"use client"
import React, { useState } from 'react';

const menuItems = [
    {
      href: 'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/buki/taiken.htm',
      title: 'Swords',
    }
  ];

function Sidebar(onClickHandler:any) {
    return (
        <div className='flex flex-col md:flex-row flex-1'>
            <aside className='overflow-y-auto fixed text-[#fffff2] bg-[#2b2b2b] bg-border-4 border-indigo-200 border-rose-600 w-full h-full md:w-40'>
                <nav>
                    <ul>
                        {menuItems.map(({ href, title }) => (
                            <li className='border-2 w-full' key={title}>
                                <a href={href} onClick={onClickHandler.onClickHandler} >
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    );
}

export default Sidebar;