// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

// Function to get the preloaded state from localStorage
const getPreloadedState = () => {
  const preloadedState = {};
  const stateKeys = [
    'user',
    'counter'
  ];

  stateKeys.forEach(key => {
    
    const savedState = JSON.parse(window.localStorage.getItem(key));
    if (savedState !== null) {
      preloadedState[key] = savedState;
    }
  });

  return preloadedState;
};

const preloadedState = getPreloadedState();
const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware,
});

store.subscribe(() => {
  const state = store.getState();




  // Save each part of the state separately
  const stateToPersist = {
    user: state.user,
    counter:state.counter
  };

  Object.keys(stateToPersist).forEach(key => {
    localStorage.setItem(key, JSON.stringify(stateToPersist[key]));
  });
});

export default store;
