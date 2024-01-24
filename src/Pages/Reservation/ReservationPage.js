import React from 'react'
import "./Reservation.css"
import { MenuItem, TextField } from '@mui/material';
import docotorPic from "./../../image/pngwing.com_5.png" ;


const ReservationPage = () => {

    const currencies = [
        {
          value: 'USD',
          label: '',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        }]
   
  return (
    <section className='k-reservation'>
        <div className='left'>
            <img src={docotorPic} alt='doctor' />
        </div>
        <div className='right'>
            <h3>حجز كشف الطلاب</h3>
            <form>
                <div className='k-inputs'>



                    <TextField label='إسم الطالب رباعي' color="primary" sx={{
                        color: "white",
                        "& .MuiInputLabel-root": {
                          color: "#777474"
                        },
                        "& .MuiInputBase-root": {
                          color: "white"
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#777474"
                        },
                        width : "200px" , 

                        
                        
                      }} id="standard-basic"variant="standard" />

                      <TextField label='الرقم القومي' type="number" color="primary" sx={{
                        color: "white",
                        "& .MuiInputLabel-root": {
                          color: "#777474"
                        },
                        "& .MuiInputBase-root": {
                          color: "white"
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#777474"
                        },
                        width : "200px" , 

                        
                        
                      }} id="standard-basic"variant="standard" />

                      <TextField label='العيادة' type="date"  color="primary" sx={{
                        color: "white",
                        "& .MuiInputLabel-root": {
                          color: "#777474"
                        },
                        "& .MuiInputBase-root": {
                          color: "white"
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          color: "#777474"
                        },
                        width : "200px" , 

                        
                        
                      }} id="standard-basic"variant="standard" />


                      <TextField
                        id="standard-select-currency"
                        select
                        label="اختار العيادة"
                        defaultValue="EUR"
                        variant="standard"
                        sx={{
                            width :"200px" ,
                            
                        "& .MuiInputLabel-root": {
                            color: "#777474"
                          },
                          "& .MuiInputBase-root": {
                            color: "white"
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#777474"
                          },
                        }}
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>



                    
                </div>
                <button className='btn'>حجز الكشف</button>
            </form>
        </div>

    </section>
  );
}

export default ReservationPage
