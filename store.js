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

/** Action type/ event name constants */

const ADD_TODO ='ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

//todos => todo action reducer..
function todos(state = [], action) {
    console.log(state, action);
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo];
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case TOGGLE_TODO:
            return state.map(todo => todo.id !== action.id ? todo 
                    : {...todo, complete: !todo.complete});
        default:
            return state;
    }
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
    type: ADD_TODO,
    todo: {
        id: 1,
        name: 'Dispatching actions',
        complete: true,
    }
});


const action_remove_todo = {
    type: REMOVE_TODO,
    id: 0
};

const action_toggle_todo = {
    type: TOGGLE_TODO,
    id: 0
};

store.dispatch(action_toggle_todo);
store.dispatch(action_remove_todo);


unsubscribe();

store.dispatch({
    type: ADD_TODO,
    todo: {
        id: 2,
        name: 'Unsubscribe listeners',
        complete: true,
    }
});

//another reducer function
function goals(state= [], action){
    switch(action.type){
        case 'ADD_GOAL':
            return [...state, action.goal];
        case 'REMOVE_GOAL':
            return state.filter(goal => goal.id !== action.id);
        default:
            return state;
    }
}

// so how to combine reducer functions goals and todos.. ?
//instead of one todos array we have to goals and todos array within an object

const ADD_GOAL = 'ADD_GOAL';

function app(state = {}, action){
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action)
    }
}

const store2 = createStore(app);
console.log('Store 2: ', store2);

//we can use unsubscribe function to remove listeners later.
const unsubscribe2 = store2.subscribe(() => {
    console.log('the state: ', store2.getState());
});

store2.dispatch(action_add_todo);
store2.dispatch({
    type: ADD_GOAL,
    goal: {
        id: 0,
        name: 'to be rich'
    }
});
store2.dispatch(action_toggle_todo);
store2.dispatch(action_remove_todo);

