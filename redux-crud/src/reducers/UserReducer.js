import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../assets/data";

export const userSlice = createSlice({
    name: 'user',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        editUser: (state, action) => {
            const { id, name, email } = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu){
                uu.name = name;
                uu.email = email
            }
        }
    }
})

export const { addUser, editUser } = userSlice.actions;
export default userSlice.reducer;