import React, { useRef } from 'react'
import "./login.css"
import logo from "./../../image/logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../RTK/Slice/Auth/AuthSlice'

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {

    const dispatch = useDispatch() ;

    const {loginInfo } = useSelector(state=>state.AuthSlice) ; 
    const navigate = useNavigate() ; 
    const {success} = loginInfo

    if(success){
        console.log("Enter")
        setTimeout(()=>{
        navigate("/reservation") ;

        }, 6000)
    }


    const emailRef = useRef(null) ;
    const passwordRef = useRef(null) ;

    const loginHandler = (e)=>{
        e.preventDefault()
        dispatch(login({email :emailRef.current.value , password : passwordRef.current.value}))
    }

    // const loginHandler = (e)=>{
        
    //     const res = axios.post("http://localhost:7000/api/v1/login" , {
    //         email : emailRef.current.value , 
    //         password : passwordRef.current.value
    //     })
    //     console.log(res); 
    //     e.preventDefault() ;

    // }

    

   
  return (
    <section className='m-section'>
    <ToastContainer />
    <div className="form-box">
        <div className="form-value">
            <form lang="ar" onSubmit={loginHandler} dir="rtl">
                <h2 className='m-h2'>تسجيل الدخول</h2>
                <div className="inputbox">
                    <ion-icon className="fas fa-user"></ion-icon>
                    <input ref={emailRef}   type="email" required />
                    <label htmlFor=''> الايميل الجامعي</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input ref={passwordRef} type="password" required />
                    <label htmlFor=''>كلمة المرور</label>
                </div>


                <button className='btn' >دخول</button>
 
            </form>
        </div>
    </div>
    <div className="content">
        <div className="logo">
            <img src={logo} width="350" alt="df" />
        </div>
        <h1 lang="ar" dir="rtl">مستشفى طلاب جامعة حلوان</h1>
        <p lang="ar" dir="rtl">نوجة عناية سيادتكم بأنه يتم التسجيل لكل
            عمل داخل النظام</p>
    </div>
</section>
  )
}

export default LoginPage
