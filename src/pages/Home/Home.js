import { faMastodon } from '@fortawesome/free-brands-svg-icons';
import { faPhotoVideo, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiPhotoAlbum } from "react-icons/bi";
import { GiPostStamp } from "react-icons/gi";
import React from 'react'
import { Fade, Slide } from "react-awesome-reveal";
import Dashboard from '../../containers/Dashboard'
import HomeWrapper from './HomeWrapper'

const Home = () => {

    return (
        <Dashboard>
            <HomeWrapper>
                <h3>Hi, Welcome back</h3>
                <div className="row mt-5">
                    <div className="col-sm-6 col-md-3">
                        <div className="p-4 cards card1 mb-3">
                            <Slide className=" d-flex justify-content-center align-items-center">
                                <div className="div div1"><FontAwesomeIcon icon={faUsers} className="icon icon1" /></div>
                                <h3>Users</h3>
                            </Slide>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="p-4 cards card2 mb-3">
                            <Slide className="d-flex justify-content-center align-items-center text-center">
                                <div className="div div2"><FontAwesomeIcon icon={faMastodon} className="icon icon2" /></div>
                                <h3>Todos</h3>
                            </Slide>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="p-4 cards card3 mb-3">
                            <Slide className="d-flex justify-content-center align-items-center text-center">
                                <div className="div div3"><BiPhotoAlbum className="icon icon3" /></div>
                                <h3>Albums</h3>
                            </Slide>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="p-4 cards card4  mb-3">
                            <Slide className="d-flex justify-content-center align-items-center text-center">
                                <div className="div div4"><FontAwesomeIcon icon={faPhotoVideo} className="icon icon4" /></div>
                                <h3>Photos</h3>
                            </Slide>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="p-4 cards card5 mb-3">
                            <Slide className="d-flex justify-content-center align-items-center text-center">
                                <div className="div div5"><GiPostStamp className="icon icon5" /></div>
                                <h3>Posts</h3>
                            </Slide>
                        </div>
                    </div>
                </div>
            </HomeWrapper>
        </Dashboard>
    )
}

export default Home