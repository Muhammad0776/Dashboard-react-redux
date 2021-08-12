import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard'
import { setPhotos } from '../../redux/actions';
import PhotosWrapper from './PhotosWrapper'

const Photos = () => {
    const { menu } = useParams();
    console.log("todoni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setPhotos(dispatch);
    }, [])

    const data = useSelector(state => state.Photos);

    return (
        <PhotosWrapper>

        </PhotosWrapper>
    )
}

export default Photos