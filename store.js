// the store

// 1- the state
// 2- get the state
// 3- listen to changes on the state
// 4- update the state

function createStore(reducer) {
    let state;
    let listeners = [];

    const getState = () => state;
    const subscribe = (listener) => {
        listeners.push(listener);

        //return a unsubscribe function
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }
    const dispatch = (action) => {
        // with actions, we can transform the state of the store with pure functions
        state = reducer(state, action);

        //call listeners
        listeners.forEach((listener) => listener());
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}

//actions (aka events)
// describes an event occured in application
// type is required

const action_add_todo = {
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
};

/**
 * Functional Programming - Pure functions:
 * 
 * There are no side effects.
 * It will always give us the same result given the same arguments.
 * 
 * Characteristics of a Pure Function
 * 
 * 1- Pure functions always return the same result given the same arguments. 
 * 2- Pure function's execution doesn't depend on the state of the application.
 * 3- Pure functions don't modify the variables outside of their scope.
 * 
 * Side effects: 
 * ---
 * Dom manupulation
 * Ajax calls
 * Changing global variables 
 * Depend of any IO
 * ---
 */

//todos => todo action reducer..
function todos(state = [], action) {
    console.log(state, action);

    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map((todo) => todo.id !== action.id ? todo 
                    : {...todo, complete: !todo.complete});
    }
    return state;
}


const store = createStore(todos);
console.log('Store: ', store);

//we can use unsubscribe function to remove listeners later.
const unsubscribe = store.subscribe(() => {
    console.log('the state: ', store.getState());
});


/**
 * Dispatching actions
 * 
 * updating the state of store.
 */
store.dispatch(action_add_todo);
store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 1,
        name: 'Dispatching actions',
        complete: true,
    }
});


const action_remove_todo = {
    type: 'REMOVE_TODO',
    id: 0
};

const action_toggle_todo = {
    type: 'TOGGLE_TODO',
    id: 0
};

store.dispatch(action_toggle_todo);
store.dispatch(action_remove_todo);


unsubscribe();

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 2,
        name: 'Unsubscribe listeners',
        complete: true,
    }
});