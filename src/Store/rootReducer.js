import { combineReducers } from "redux";
import mathReducer from "../Maths/Store/reducer";
import jokeReducer from "../Jokes/Store/reducer";

const rootReducer = combineReducers({
  math: mathReducer,
  joke: jokeReducer,
});

export default rootReducer;
