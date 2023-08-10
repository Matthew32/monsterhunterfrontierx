import './globals.css'
import React, { useState } from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Sidebar from '@/components/Sidebar';
export const metadata: Metadata = {
  title: 'Monster hunter frontier z guide',
  description: 'By Matt',
}
export default function RootLayout({
   children 
}: {
  children: React.ReactNode,
}) {  
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
