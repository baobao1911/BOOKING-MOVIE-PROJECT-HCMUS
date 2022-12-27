import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Payment = () => {
    const location = useLocation()
    console.log(location.state)
    const navigate = useNavigate()
    function setupTime(e){
      var d = new Date(e)
      return d.toLocaleString('es-us')
    }


    async function handlePay (){
      const total = location.state.id.length * 90000 
      try{
        console.log(total)
        console.log(location.state.id[0]._id)
        const res = await axios.post(`http://localhost:8000/api/payments/pay/${location.state.id[0]._id}`,
                                      {"service_name": "MOMO",
                                      "amount": total,
                                      "payment_info": 'Thanh toán vé xem phim ' })
        console.log(res.data)
        window.open(res.data.payUrl, '_blank', 'noopener,noreferrer');
      }catch(err){
        console.log(err)
      }
    }
  return (
    <div>
      <Navbar/>
      <div className='payment'>
        <div className='payment-conatiner'>
          <div className="page-title">
            <h1>Thanh Toán</h1>
          </div>
          <table className='h-table'>
            <tr>
                <td>Mã vé</td>
                <td>Tên phim</td>
                <td>Ngày xem</td>
                <td>Địa chỉ</td>
            </tr>
            <tbody>
              {
                location.state.id.map((item,idx)=>{
                  return (
                    <tr key={idx}>
                      <td>{item._id}</td>
                      <td>{item.movie_name}</td>
                      <td>{setupTime(item.date)}</td>
                      <td>{item.address}</td>
                  </tr>
                  )
                })
              }
              <tr>
                <td>Tổng Tiền</td>
                <td>{location.state.id.length * 90000}</td>
              </tr>
              
            </tbody>
          </table>
          <div className='pay'>
              <input type="button" value="Payment" onClick={handlePay}/>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Payment