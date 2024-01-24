import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";



export const signUp = createAsyncThunk("auth/signup" , async (args , thunkAPI)=>{
    console.log("Enter Here")
    
        const res =await axios.post("http://localhost:7000/api/v1/signup" , {
            email : args.email , 
            password : args.password ,
            rePassword : args.rePassword , 
            age : args.age ,
            name : args.name , 
            gender : args.gender

        } )
        console.log(res.data) ;
   
})


export const login = createAsyncThunk("authslice/login" , async(args , thunkAPI)=>{
    console.log("Entered Here ")
   
    const response = await axios.post("http://localhost:7000/api/v1/login" , {
        email : args.email, 
        password : args.password
    } , {
        headers : {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
          }
    })
    console.log(response.data)
    
   
   
} )

const initialState = {
    loginInfo : {
        error : false ,
        success : false

    } , 
    singup : {
        error : false , 
        success : false
    }
}


const AuthSlice = createSlice({
    name : "authslice" , 
    initialState , 
    reducers : {

    } ,extraReducers : {
        [signUp.fulfilled] : (state ,action)=>{
            toast.success("  لقد تم إنشاء الحساب بنجاح برجاء فحص الحساب")
            state.singup.success = true
            console.log("Data Added Successfully")
        },[signUp.pending] : (state ,action)=>{
            console.log("Data Pending Successfully")
        },[signUp.rejected] : (state ,action)=>{
            toast.warning("انطر ابلاكاش")
            state.singup.success = false

            console.log("Data Rejected")
        },
        // Login Function
        [login.fulfilled] : (state , action)=>{
            toast.success("تم الدخول بنجاح")
            state.loginInfo.success = true
            console.log("Login Successfully")
        },
        [login.pending] : (state , action)=>{
            console.log("Logisn Pending ")
        },
        [login.rejected] : (state , action)=>{
            state.loginInfo.success = false
            toast.warning("كلمة المرور او الحساب غير صحيح")
            console.log("Login Rejected")
        },

    }
})

export default AuthSlice.reducer ; 

