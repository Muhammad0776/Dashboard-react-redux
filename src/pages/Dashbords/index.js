import React from 'react'
import { useParams } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard';
import Home from '../Home';
import Todos from '../Todos';
import Posts from '../Posts'

const Dashboards = () => {
    const { menu } = useParams();
    console.log("menu", menu);

    return (
        <Dashboard>
            {menu === "home" && <Home /> || ""}
            {menu === "todos" && <Todos /> || ""}
            {menu === "posts" && <Posts /> || ""}
        </Dashboard>
    )
}

export default Dashboards;