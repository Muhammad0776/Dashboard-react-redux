import React from 'react'
import { Link } from 'react-router-dom'
import DashboardWrapper from './DashboardWrapper'
import { BiSearchAlt, BiPhotoAlbum } from "react-icons/bi";
import { BsFilePost } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiCalendarTodoFill } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";
import logo from "../../logo.svg"

const Dashboard = ({ children }) => {

    return (
        <DashboardWrapper>
            <div className="sidebar border-end">
                <div className="d-flex justify-content-between mb-5">
                    <img src="https://t4.ftcdn.net/jpg/03/75/38/73/360_F_375387396_wSJM4Zm0kIRoG7Ej8rmkXot9gN69H4u4.jpg" className="w-25" alt="" />
                </div>
                <div>
                    <p>General</p>
                    <ul>
                        <li><Link to="/"><AiFillHome className="me-3" /> Home</Link></li>
                        <li><Link to="/dashboard/users"><FaUsers className="me-3" /> Users</Link></li>
                        <li><Link to="/dashboard/todos"><RiCalendarTodoFill className="me-3" /> Todos</Link></li>
                        <li><Link to="/dashboard/albums"><BiPhotoAlbum className="me-3" /> Albums</Link></li>
                        <li><Link to="/dashboard/photos"><HiOutlinePhotograph className="me-3" /> Photos</Link></li>
                        <li><Link to="/dashboard/posts"><BsFilePost className="me-3" /> Posts</Link></li>
                    </ul>
                </div>
            </div>
            <div className="rightside">
                <header className="d-flex justify-content-between">
                    <div className="search"><BiSearchAlt /></div>
                    <div className="text-end d-flex justify-content-center align-items-center">
                        <span></span>
                        <div className="others me-4"><MdCall /></div>
                        <div className="others"><FaUserFriends /></div>
                        <a href="#" className="user"><img src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" alt="" /></a>
                    </div>
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </DashboardWrapper >
    )
}

export default Dashboard;