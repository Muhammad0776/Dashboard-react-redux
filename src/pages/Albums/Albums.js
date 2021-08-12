import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard'
import { setAlbums } from '../../redux/actions';
import AlbumsWrapper from './AlbumsWrapper'

const Albums = () => {
    const { menu } = useParams();
    console.log("todoni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setAlbums(dispatch);
    }, [])

    const data = useSelector(state => state.Albums);

    return (
        <AlbumsWrapper>

        </AlbumsWrapper>
    )
}

export default Albums