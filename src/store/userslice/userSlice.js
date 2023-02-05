import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        fname: 'shoaib rehman'
    },
    reducers: {
        addUser(state, { payload }) {
            state.users.push(payload)
        },
        removeUser(state, { payload }) {
            state.users.splice(payload, 1)


        },
        deleteUsers(state, { payload }) {
            state.users.splice(payload)
        },
    }
})


export const { addUser, removeUser, deleteUsers } = userSlice.actions;
export default userSlice.reducer