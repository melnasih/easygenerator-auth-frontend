import { configureStore } from "@reduxjs/toolkit";
import UserInfo from './slices/UserInfo.slice';

const store = configureStore({
    reducer : {
        // current user data 
        UserInfoData: UserInfo.reducer,
    }
});

export default store;