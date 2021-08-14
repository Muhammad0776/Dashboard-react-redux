import { faMastodon } from '@fortawesome/free-brands-svg-icons';
import { faPhotoVideo, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiPhotoAlbum } from "react-icons/bi";
import { GiPostStamp } from "react-icons/gi";
import React from 'react'
import { Fade } from "react-awesome-reveal";
import Dashboard from '../../containers/Dashboard'
import HomeWrapper from './HomeWrapper'
import { Link } from 'react-router-dom';

const Home = () => {

    return (

        <HomeWrapper>
            <h3>Hi, Welcome back</h3>
            <div className="row mt-5">
                <div className="col-sm-6 col-md-3">
                    <div className="p-4 cards card1 mb-3">
                        <Fade className=" d-flex justify-content-center align-items-center">
                            <div className="div div1"><FontAwesomeIcon icon={faUsers} className="icon icon1" /></div>
                            <Link to="/dashboard/users" className="fs-3">Users</Link>
                        </Fade>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="p-4 cards card2 mb-3">
                        <Fade className="d-flex justify-content-center align-items-center text-center">
                            <div className="div div2"><FontAwesomeIcon icon={faMastodon} className="icon icon2" /></div>
                            <Link to="/dashboard/todos" className="fs-3">Todos</Link>
                        </Fade>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="p-4 cards card3 mb-3">
                        <Fade className="d-flex justify-content-center align-items-center text-center">
                            <div className="div div3"><BiPhotoAlbum className="icon icon3" /></div>
                            <Link to="/dashboard/albums" className="fs-3">Albums</Link>
                        </Fade>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="p-4 cards card4  mb-3">
                        <Fade className="d-flex justify-content-center align-items-center text-center">
                            <div className="div div4"><FontAwesomeIcon icon={faPhotoVideo} className="icon icon4" /></div>
                            <Link to="/dashboard/photos" className="fs-3">Photos</Link>
                        </Fade>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="p-4 cards card5 mb-3">
                        <Fade className="d-flex justify-content-center align-items-center text-center">
                            <div className="div div5"><GiPostStamp className="icon icon5" /></div>
                            <Link to="/dashboard/posts" className="fs-3">Posts</Link>
                        </Fade>
                    </div>
                </div>
            </div>
        </HomeWrapper>

    )
}

export default Home