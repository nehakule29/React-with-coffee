import React from 'react';
import Header from './components/Headers/Header';
import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';

export default function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}