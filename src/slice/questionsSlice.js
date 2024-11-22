import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name : "questions",
    initialState:{
        Questions: null,
        filterQuestions: null,
        filter: '',
        searchedQuestions: null,
        isSearch:false
    },
    reducers:{
        addFilterQuestions : (state,action) => {
            state.filterQuestions = action.payload
        },
        addfilter : (state,action) => {
            state.filter = action.payload
        },
        isSearch : (state,action) => {
            state.isSearch = action.payload
        },
        addSearchedQuestion : (state,action) => {
            state.searchedQuestions = action.payload
        }
    
    }
})

export const {addFilterQuestions,addfilter,addSearchedQuestion,isSearch} = questionsSlice.actions
export default questionsSlice.reducer