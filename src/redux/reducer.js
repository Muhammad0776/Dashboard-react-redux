import initialState from "./initialState";
import { SET_POSTS, SET_TODOS, SET_ALBUMS, TOGGLE_MENU } from "./types";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU: return { ...state, isSidebarShow: !state.isSidebarShow }

        case SET_TODOS: return { ...state, todos: action.payload };

        case SET_ALBUMS: return { ...state, Albums: action.payload };

        case SET_POSTS: return { ...state, Posts: action.payload };

        default: return state;
    }
}

export default reducer;