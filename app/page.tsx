"use client"
import Iframe from 'react-iframe'
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import CustomIframe from '@/components/CustomIframe';
export default function Home() {
  const [src, setSrc] = useState('https://xl3lackout.github.io/MHFZ-Ferias-English-Project/buki/taiken.htm');
  const onClickHandler = (e) => {
    e.preventDefault();
    setSrc(e.target.href);
  };
  return (
    <div>
      <Sidebar onClickHandler={onClickHandler} />
      <main className="flex min-h-screen flex-col items-center justify-between pt-0 pl-40">
        <CustomIframe src={src}/>
      </main>
    </div>
     )
}
