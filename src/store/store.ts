import {createStore} from "redux";
import { tokenReducer } from "./tokens/tokensRedecer";

const store = createStore(tokenReducer);

export default store;