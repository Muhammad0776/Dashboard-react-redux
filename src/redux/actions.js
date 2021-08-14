import { getTodos } from "../api"
import { SET_TODOS, SET_POSTS, SET_ALBUMS, TOGGLE_MENU } from "./types";
import { getPosts } from "../api/posts"
import { getAlbums } from "../api/albums"



export const toggleMenu = (dispatch) => {
    dispatch({ type: TOGGLE_MENU })
}

export const setTodos = async (dispatch) => {
    const data = await getTodos();

    console.log(data);

    dispatch({ type: SET_TODOS, payload: data });
}


export const setPosts = async (dispatch) => {
    const data = await getPosts();

    console.log(data);

    dispatch({ type: SET_POSTS, payload: data });
}

export const setAlbums = async (dispatch) => {
    const data = await getAlbums();

    console.log(data);

    dispatch({ type: SET_ALBUMS, payload: data });
}