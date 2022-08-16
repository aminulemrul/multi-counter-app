
// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const addMoreButtonEl = document.getElementById("addMore");

// action indentifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const increment = (payloadValue) =>{
    return {
        type: INCREMENT,
        payload: payloadValue
    }
}
const decrement = (payloadValue) =>{
    return {
        type: DECREMENT,
        payload: payloadValue
    }
}

// initial state
const initialState = {
    value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(3));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(2));
});

// create new counter view
const counterView = () => {
    var counterHtml = '<div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">'+
                            '<div id="counter2" class="text-2xl font-semibold"></div>'+
                            '<div class="flex space-x-3">'+
                                '<button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment2">Increment</button>'+
                                '<button class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement2">Decrement</button>'+
                            '</div>'+
                        '</div>';
                       
    let counterId = document.getElementById('counters-div');
    counterId.innerHTML +=counterHtml;
}


addMoreButtonEl.addEventListener("click", counterView);

