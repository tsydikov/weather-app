import {CREATE_POST,DELETE_POST} from './types'

const initialState = {
  posts: []
}
export function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat([action.payload]) }
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(item => item.id !== action.payload) } 
    default: return state

  }
}

  