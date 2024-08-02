import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data)
    return data;
})

export const todoSlicer = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTodo.rejected, (state, action) => {
            state.error;
        });
    }
})

export default todoSlicer.reducer