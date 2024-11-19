import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name : "questions",
    initialState:null,
    reducers:{
        addQuestions : (state,action) => {
            return action.payload
        }
    }
})

export const {addQuestions} = questionsSlice.actions
export default questionsSlice.reducer