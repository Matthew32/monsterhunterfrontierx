import React, { useState } from 'react';

const menuItems = [
    {
      href: 'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/buki/taiken.htm',
      title: 'Swords',
    },
    {
        href:'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/damage/gakufu.htm',
        title: 'Songs'
    },
    {
        href:'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/bougu/tree.htm',
        title:'Armors'
    },
    {
        href:'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/bougu/bouguF.htm',
        title:'Decos'
    },
    {
        href:'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/mons/monsF_h.htm',
        title:'Carves'
    },
    {
        href: 'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/quest/hrF.htm',
        title: 'HR 1-100 level quest'
    },
    {
        href: 'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/quest/grF.htm',
        title: 'G level quest'
    },
    {
        href:'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/saisyu/kaiF.htm',
        title: 'Low level gathering'
    },
    {
        href:'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/saisyu/zyouiF.htm',
        title:'High level gathering'
    },
    {
        href:'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/saisyu/sugoF.htm',
        title: 'HR 100 gathering'
    },
    {
        href:'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/saisyu/gF.htm',
        title: 'G level gathering'
    }
  ];

function Sidebar(onClickHandler:any) {
    return (
        <div className='flex flex-col md:flex-row flex-1'>
            <aside className='overflow-y-auto fixed text-[#fffff2] bg-[#2b2b2b] border-indigo-500  w-full h-full md:w-40'>
                <nav>
                    <ul>
                        {menuItems.map(({ href, title }) => (
                            <li className=' border-y-2  w-full' key={title}>
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