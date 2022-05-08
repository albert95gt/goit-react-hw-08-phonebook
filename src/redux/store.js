import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import contactReducer from './contacts/contactSlice';
// import { contactApi } from 'redux/contacts/contactApi';
import filterReducer from 'redux/contacts/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // [contactApi.reducerPath]: contactApi.reducer,
    contacts: contactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // contactApi.middleware,
  ],
});

export const persistor = persistStore(store);
