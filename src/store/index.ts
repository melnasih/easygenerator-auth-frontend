import { configureStore } from "@reduxjs/toolkit";
import UserInfo from './slices/UserInfo.slice';
import ServicesAPIs from './slices/ServicesAPIS.slice'

const store = configureStore({
    reducer : {
        // current user data 
        UserInfoData: UserInfo.reducer,
        // services api urls 
        ServicesAPIs: ServicesAPIs.reducer
    }
});

export default store;