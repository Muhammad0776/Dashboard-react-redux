import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard'
import { setPosts } from '../../redux/actions';
import PostsWrapper from './PostsWrapper'

const Posts = () => {
    const { menu } = useParams();
    console.log("todoni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setPosts(dispatch);
    }, [])

    const data = useSelector(state => state.Posts);

    return (
        <PostsWrapper>

        </PostsWrapper>
    )
}

export default Posts