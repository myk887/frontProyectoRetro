import { combineReducers } from "redux"

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'login':
      return action.user
    default:
      return state
  }
}
const userDatosReducer = (state = null, action) => {
  switch (action.type) {
    case 'datos':
      return action.datos
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  userDatos: userDatosReducer,
})

export default rootReducer
