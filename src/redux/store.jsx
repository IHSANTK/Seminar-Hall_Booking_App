import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { PersistGate } from 'redux-persist/integration/react';
import bookingReducer from './reducers'; 


const persistConfig = {
  key: 'root',
  storage,
};


const persistedReducer = persistReducer(persistConfig, bookingReducer);


const store = configureStore({
  reducer: persistedReducer,
});


const persistor = persistStore(store);

const AppProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default AppProvider;