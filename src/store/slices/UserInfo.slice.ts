import { createSlice } from "@reduxjs/toolkit";

const UserInfo = createSlice({
    name: "CurrentUserData",
    initialState: {
        UserData: {
            user: '',
            token: '',
        },
    },
    reducers: {
        UpdateUserData(state, action) {
            state.UserData = action.payload;
        },
        RemoveUserData: (state) => {
            state.UserData = {
                user: '',
                token: ''
            };
        },
    }
});


export const { UpdateUserData, RemoveUserData } = UserInfo.actions;
export default UserInfo;
