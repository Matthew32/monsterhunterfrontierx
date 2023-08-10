"use client"
import React, { useState } from 'react';
import Iframe from 'react-iframe'


function CustomIframe(src:{src:string}) {
    return (
        <Iframe  url={src.src}
        id=""
        className="w-full"
        height='1440'
        display="block"
        position="relative" />
    );
}

export default CustomIframe;