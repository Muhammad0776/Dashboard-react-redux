import React from 'react'
import { useParams } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard';
import Home from '../Home';
import Todos from '../Todos';
import Posts from '../Posts'
import Albums from '../Albums';
import Photos from '../Photos';
import Users from '../Users';

const Dashboards = () => {
    const { menu } = useParams();
    console.log("menu", menu);

    return (
        <Dashboard>
            {menu === "home" && <Home /> || ""}
            {menu === "todos" && <Todos /> || ""}
            {menu === "posts" && <Posts /> || ""}
            {menu === "albums" && <Albums /> || ""}
            {menu === "photos" && <Photos /> || ""}
            {menu === "users" && <Users /> || ""}
        </Dashboard>
    )
}

export default Dashboards;