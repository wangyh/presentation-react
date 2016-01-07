import {Map} from 'immutable';

export default function reducer(state=Map(), action){
   switch(action.type){
       case 'NEXT':
           return next(state);
       case 'PREV':
           return prev(state);
       case 'SET':
           return set(action.state);
       case 'TOTAL':
           return total(state, action.total);
   }
   return state;
}

function total(state, total){
    return state.set('total', total);
}

function set(newState){
    return Map(newState);
}


function next(state){
    if(state.get('index') < state.get('total')-1){
        return state.set('index', state.get('index') + 1);
    }
    return state;
}

function prev(state){
    if(state.get('index') > 0){
        return state.set('index', state.get('index') - 1);
    }
    return state;
}

