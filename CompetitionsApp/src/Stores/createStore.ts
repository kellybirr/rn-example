import { configureStore } from '@reduxjs/toolkit';
import { compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './Root/reducer';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
    reducer: rootReducer,
     middleware: [thunk],
});
const persistor = persistStore(store);

export { store, persistor };
