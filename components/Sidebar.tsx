"use client"

const menuItems = [
    {
      href: '/',
      title: 'Homepage',
    },
    {
      href: 'https://xl3lackout.github.io/MHFZ-Ferias-English-Project/buki/buki.htm',
      title: 'Swords',
    },
    {
      href: '/contact',
      title: 'Contact',
    },
  ];

function Sidebar() {
    return (
        <div className='flex flex-col md:flex-row flex-1'>
            <aside className='overflow-y-auto fixed bg-fuchsia-100 w-full h-full md:w-60'>
                <nav>
                    <ul>
                        {menuItems.map(({ href, title }) => (
                            <li className='m-2' key={title}>
                                <a href={href}>
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