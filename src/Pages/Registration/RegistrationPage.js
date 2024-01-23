import React from 'react'
import logo from  "./../../image/logo.png"

import "./../../Component/Login/login.css"

const RegistrationPage = () => {
  return (
    <section className='m-section'>
    <div className="form-box">
        <div className="form-value">
            <form lang="ar" dir="rtl">
                <h2 className='m-h2'> إنشاء حساب</h2>
                <div className="inputbox">
                    <ion-icon className="fas fa-user"></ion-icon>
                    <input   type="email" required />
                    <label htmlFor=''>الايميل الجامعي   </label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required />
                    <label htmlFor=''for>كلمة المرور</label>
                </div>

                <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label htmlFor=''for> تأكيد كلمة المرور</label>
            </div>

                <a href="../home/index.html">دخول</a>
 
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
