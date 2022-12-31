import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './payment.css';

const Payment = () => {
    const location = useLocation()
    // console.log(location.state)
    function setupTime(e){
      var d = new Date(e)
      return d.toLocaleString('es-us')
    }


    async function handlePay (){
      const total = location.state.id.length * 90000
      const lId = []
      
      location.state.id.forEach((te)=>{
        lId.push(te._id)
      })

      console.log(lId)
      
      try{
        console.log(location.state.id[0]._id)
        const res = await axios.post(`http://localhost:8000/api/payments/pay/${location.state.id[0]._id}`,
                                      {"service_name": "MOMO",
                                      "amount": total,
                                      "payment_info": 'Thanh toán vé xem phim ',
                                      "listIds":lId})
        window.open(res.data.payUrl,'_self', 'noopener,noreferrer');
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
            Thông tin vé đã đặt
          </div>
          <table className='h-table'>
            <tr>
                <th >Id </th>
                <th>Movie's name</th>
                <th>Schedule</th>
                <th>Address</th>
            </tr>
            <tbody className='temp'>
              {
                location.state.id.map((item,idx)=>{
                  return (
                    <tr key={idx}>
                      
                      {/* <td >Mã vé: </td> */}
                      <td>{item._id}</td>
                     
                      {/* <td>Tên phim: </td> */}
                      <td>{item.movie_name}</td>
                   
                      {/* <td>Ngày xem: </td> */}
                      <td>{setupTime(item.date)}</td>
                    
                      {/* <td>Địa chỉ: </td> */}
                      <td>{item.address}</td>
                   
                     
                  </tr>
                  )
                })
              }
             
                     
            
            </tbody>
          </table>
          <h1>Tổng tiền vé  </h1>
          <h3>{location.state.id.length * 90000} vnđ</h3>
          <button
									onClick={handlePay}
									className="pay"
								>
									Paynow
								</button>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Payment


