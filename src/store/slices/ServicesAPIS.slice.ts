import { createSlice } from "@reduxjs/toolkit";

const auth_service = import.meta.env.VITE_Auth_Service;


const ServicesAPIs = createSlice({
    name: 'ajax_urls',
    initialState: {
        auth:{
            users_url: `${auth_service}/api/users`,
            login_url: `${auth_service}/api/login/`,
        },
        
    },
    reducers: {

    }
});

export default ServicesAPIs;