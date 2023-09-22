import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"Users",
    initialState:{
        User:JSON.parse(localStorage.getItem('Users'))?JSON.parse(localStorage.getItem('Users')):[],
        AllUsers:[]
    },
    reducers:{
        addUser:(state,action)=>{
            state = [...state,action.payload];
        }
    }
})

export default UserSlice.reducer