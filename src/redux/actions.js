import { getTodos } from "../api"
import { SET_TODOS, SET_POSTS, SET_ALBUMS, SET_PHOTOS, SET_USERS, TOGGLE_MENU } from "./types";
import { getPosts } from "../api/posts"
import { getAlbums } from "../api/albums"
import { getPhotos } from "../api/photos"
import { getUsers } from "../api/users"




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

export const setPhotos = async (dispatch) => {
    const data = await getPhotos();

    console.log(data);

    dispatch({ type: SET_PHOTOS, payload: data });
}

export const setUsers = async (dispatch) => {
    const data = await getUsers();

    console.log(data);

    dispatch({ type: SET_USERS, payload: data });
}