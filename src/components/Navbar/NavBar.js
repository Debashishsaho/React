import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import './NavBar.css';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const updateMedia = () => {
        setIsMobile(window.innerWidth <= 960);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

    return (
        <Fragment>
            <nav className='navbar'>
                {isMobile ? (
                    <>
                        <MenuOutlinedIcon className="menu-icon" onClick={toggleMenu} />
                        {showMenu && (
                            <div className='dropdown'>
                                <NavLink className='navlink' to='/chmod_calculator' onClick={toggleMenu}>
                                    <ChevronRightOutlinedIcon /> Chmod Calculator
                                </NavLink>
                                <NavLink className='navlink' to='/unix_timestamp_converter' onClick={toggleMenu}>
                                    <ScheduleOutlinedIcon /> Unix TimeStamp Converter
                                </NavLink>
                                <NavLink className='navlink' to='/crontab_generator' onClick={toggleMenu}>
                                    <CalendarTodayOutlinedIcon /> Crontab Generator
                                </NavLink>
                                <NavLink className='navlink' to='/password_generator' onClick={toggleMenu}>
                                    <ShieldOutlinedIcon /> Password Generator
                                </NavLink>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="navlinks">
                        <NavLink className='navlink' to='/'>
                            <CodeIcon />
                        </NavLink>
                        <NavLink className='navlink' to='/chmod_calculator'>
                            <ChevronRightOutlinedIcon /> Chmod Calculator
                        </NavLink>
                        <NavLink className='navlink' to='/unix_timestamp_converter'>
                            <ScheduleOutlinedIcon /> Unix TimeStamp Converter
                        </NavLink>
                        <NavLink className='navlink' to='/crontab_generator'>
                            <CalendarTodayOutlinedIcon /> Crontab Generator
                        </NavLink>
                        <NavLink className='navlink' to='/password_generator'>
                            <ShieldOutlinedIcon /> Password Generator
                        </NavLink>
                    </div>
                )}
                <button className='github-button'>
                    <p className='github-text'>
                        <GitHubIcon className='github-icon' />
                        GitHub
                    </p>
                </button>
            </nav>
        </Fragment>
    );
}

export default NavBar;
