import React from 'react';
import './Root.css'
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    const navigation = useNavigation();

    const isnavigation = Boolean(navigation.location)
    return (
        <div>
            <Header></Header>

            <div className='root-main'>
                <SideBar></SideBar>
                {isnavigation && <h4>Loading...</h4>}
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;