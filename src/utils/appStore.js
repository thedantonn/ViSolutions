import {configureStore} from '@reduxjs/toolkit'
import questionsReducer from "../slice/questionsSlice"

const appStore = configureStore({
    reducer : {
        questions: questionsReducer,
    }
})

export default appStore