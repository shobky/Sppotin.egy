import React from 'react'
import { IoLogOutSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import "./home.css"
import man from '../../../assets/avatars/man.png'
import thinker from '../../../assets/imgs/thinkerIllus.png'

const Home = () => {
    const { user } = useAuth()
    return (
        <div className='admin-home'>
            <h1 className='admin-home_header'>Spot <span>In</span></h1>
            <IoLogOutSharp className='admin-home_logout-icon' />
            <div className='admin-home_user-div'>
                <img className='admin-home_user-photo' src={user?.photoURL ?? man} alt="" />
                <p className='admin-home_user-name'>{user?.displayName.substring(0, 5)}..</p>
            </div>
            <div className='admin-home_link-grid'>
                <Link to="/cashier.system" className='admin-home_link admin-link-1'>Cashier</Link>
                <Link to="/cashier.system/orders" className='admin-home_link admin-link-2'>Orders</Link>
                <Link to="/cashier.system/add-new-item" className='admin-home_link admin-link-3'>Add Item</Link>
                <Link to="/cashier.system/orders/ledger" className='admin-home_link admin-link-4'>Ledger</Link>
            </div>
            <img src={thinker} alt="" className='home_admein_thinkerpng' />
        </div>
    )
}

export default Home