import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard'
import { setUsers } from '../../redux/actions';
import UsersWrapper from './UsersWrapper'

const Users = () => {
    const { menu } = useParams();
    console.log("todoni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setUsers(dispatch);
    }, [])

    const data = useSelector(state => state.Users);

    return (
        <UsersWrapper>

        </UsersWrapper>
    )
}

export default Users