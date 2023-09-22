import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getProducts = createAsyncThunk('gets/getProducts',async () =>{
    return axios.get('https://hexago.onrender.com/Products').then((res)=>{
        return res.data;
    })

})


const ProductSlice = createSlice({
    name:"Products",
    initialState:{
        Product:{
            username:JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).Username:"",
            origin:"",
            title:"",
            description:"",
            minimum:120,
            location:"",
            sellerMail:"",
            endDate:10/10/2023,
            seller:"",
            finalBid:0,
            latestBid:0,
            latestMem:'',
            period:1980,
            material:"",
            damage:"",
            additional:"",
            proof:"",
            img_url:""
        },
        AllProducts:[],
        ReqProducts:[],
        search:'',
        loading:false
    },
    reducers:{
        updateFormField: (state, action) => {
            const { name, value } = action.payload;
            state.Product[name] = value;
        },
        searchRed:(state,action)=>{
            const { value } = action.payload;
            // return state = action.payload
            const result = state.AllProducts.filter((obj)=>{
                for(let key in obj){
                    const objVal = obj[key].toString().toLowerCase();
                    if (objVal.includes(value.toLowerCase())) {
                        return obj;
                    }
                    console.log(objVal);
                }
            })
            state.search = value
            state.ReqProducts = result;
        }
    },
    extraReducers:{
        [getProducts.pending]:(state,action)=>{
            state.loading = true
        },
        [getProducts.fulfilled]:(state,action)=>{
            state.AllProducts = action.payload
            state.ReqProducts = action.payload
            state.loading = false
        },
        [getProducts.rejected]:(state,action)=>{
            state.loading = false
        }
    }
})

export const {updateFormField,searchRed} = ProductSlice.actions;

export default ProductSlice.reducer
