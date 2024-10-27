import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer, WebStorage } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

function createLocalStorage() : WebStorage {
    const isServer = typeof window==='undefined'
    if(isServer) {
        return {
            getItem() {return Promise.resolve(null)},
            setItem() {return Promise.resolve()},
            removeItem() {return Promise.resolve()}
        }
    }

    return createWebStorage('local')
}

const storage = createLocalStorage()

const persistedConfig = {
    key:'rootPersist',
    storage
}

const rootReducer = combineReducers({bookSlice})
const persistedReducer = persistReducer(persistedConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export type StateType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector
export type AppDispatch = typeof store.dispatch