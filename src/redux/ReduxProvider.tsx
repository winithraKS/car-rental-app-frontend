'use client'

import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxProvider({children}:{children:React.ReactNode}) {
    const persistedStore = persistStore(store)
    
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                {children}
            </PersistGate>
        </Provider>
    )
}