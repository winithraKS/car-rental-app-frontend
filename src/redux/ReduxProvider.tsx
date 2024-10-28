'use client'

import { Provider } from "react-redux"
import { store } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

export default function ReduxProvider({children}:{children:React.ReactNode}) {
    
    const reduxPersistor = persistStore(store)
    
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={reduxPersistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}