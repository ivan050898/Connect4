import { createStore } from 'redux';
import { SETMATRIZ} from './Types';


const InitialState = {
    Matriz:Array.from(Array(6), _ => Array(7).fill(0)),
    Jugador:1,
    Jugador1:'',
    Jugador2:'',
    Id:-1,
    Estado:0,
    Tiempo:''

}

const GameReducer = ( state = InitialState, action) => {
    switch(action.type){

        case SETMATRIZ:
            const newState = {
                ...action.payload
            };
            return newState;
        
        
        default:
            return state;
    }
}

const GameStore = createStore(GameReducer);

export default GameStore;