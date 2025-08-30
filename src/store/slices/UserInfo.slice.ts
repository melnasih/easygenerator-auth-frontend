import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/auth";

interface UserInfoState {
  UserData: {
    user: User | null;
    token: string | null;
  };
}

type UserPayload = {
  user: User | null;
  token: string | null;
};

const initialState: UserInfoState = {
  UserData: {
    user: null,
    token: null,
  },
};

const UserInfo = createSlice({
    name: "CurrentUserData",
    initialState,
    reducers: {
        UpdateUserData(state, action: PayloadAction<UserPayload>) {
            state.UserData = action.payload;
        },
        RemoveUserData: (state) => {
            state.UserData = {
                user: null,
                token: null
            };
        },
    }
});


export const { UpdateUserData, RemoveUserData } = UserInfo.actions;
export default UserInfo;
