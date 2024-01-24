import React, { useRef } from 'react'
import logo from  "./../../image/logo.png"
import { signUp } from '../../RTK/Slice/Auth/AuthSlice' 
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify'

import "./../../Component/Login/login.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {

    const {singup } = useSelector(state=>state.AuthSlice) ; 

    const {success} = singup

    console.log(`The Success value ${success}`)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    


    const emailRef = useRef(null) ; 
    const passwordRef = useRef(null) ;
    const passowrdReTypeRef = useRef(null) ;
    const nameRef = useRef(null) ; 
    const genederRef = useRef(null) ; 
    const ageRef = useRef(null ) ; 
    
    toast.warning("So we")
    const signUpHandler = (e)=>{


        if(passowrdReTypeRef.current.value === passwordRef.current.value){
            dispatch(signUp({ name : nameRef.current.value ,  age : ageRef.current.value ,   gender:genederRef.current.value ,   email : emailRef.current.value  , password : passwordRef.current.value , rePassword : passowrdReTypeRef.current.value})) ; 

        }else{
            console.log("Input Are Different")
        }
        e.preventDefault() ;

  
    }

    if(success){
        console.log("Enter")
        setTimeout(()=>{
        navigate("/login") ;

        } , 6000)
    }


  return (
    <section className='m-section'>
    <ToastContainer />
    <div className="form-box">
        <div className="form-value">
            <form lang="ar" onSubmit={signUpHandler} dir="rtl">
                <h2 className='m-h2'> إنشاء حساب</h2>
                <div className="inputbox">
                    <ion-icon className="fas fa-user"></ion-icon>
                    <input ref={nameRef}  type="text" required />
                    <label htmlFor=''> اسم الطالب رباعي   </label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input ref={ageRef} type="number" required />
                    <label htmlFor=''> العمر</label>
                </div>

                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input ref={genederRef} type="text" required />
                    <label htmlFor=''>  النوع </label>
                </div>

                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input ref={emailRef} type="email" required />
                    <label htmlFor=''>  الايميل الجامعي </label>
                </div>

                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input ref={passwordRef} type="text" required />
                    <label htmlFor=''>  كلمة السر </label>
                </div>

                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input ref={passowrdReTypeRef} type="text" required />
                    <label htmlFor=''>  إعادة كلمة السر </label>
                </div>

                <button className='btn' onClick={signUpHandler}>دخول</button>
 
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

export default RegistrationPage
