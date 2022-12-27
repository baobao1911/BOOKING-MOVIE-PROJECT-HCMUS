import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './payment.css';

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
            Thanh Toán
          </div>
          <table className='h-table'>
            {/* <tr>
               
                <td>Tên phim</td>
                <td>Ngày xem</td>
                <td>Địa chỉ</td>
            </tr> */}
            <tbody className='temp'>
              {
                location.state.id.map((item,idx)=>{
                  return (
                    <tr key={idx}>
                      <tr>
                      <td >Mã vé: </td>
                      <td>{item._id}</td>
                      </tr>
                      <tr>
                      <td>Tên phim: </td>
                      <td>{item.movie_name}</td>
                      </tr>
                      <tr>
                      <td>Ngày xem: </td>
                      <td>{setupTime(item.date)}</td>
                      </tr>
                      <tr>
                      <td>Địa chỉ: </td>
                      <td>{item.address}</td>
                      </tr>
                      <tr>
                      <td>Tổng Tiền: </td>
                      <td>{location.state.id.length * 90000}</td>
                    </tr>
                  </tr>
                  )
                })
              }
              
            </tbody>
          </table>
          <button
									onClick={handlePay}
									className="pay"
								>
									Payment
								</button>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Payment


