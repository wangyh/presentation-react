export function next(){
    return {
        type: 'NEXT'
    };
}

export function prev(){
    return {
        type: 'PREV'
    };
}


export function init(state){
    return {
        type: 'SET',
        state: state
    };
}

export function total(total){
    return {
        type: 'TOTAL',
        total: total
    };
}
