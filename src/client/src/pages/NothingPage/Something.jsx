import React from 'react'
import { Link } from 'react-router-dom'
import './something.css'

const Something = () => {
  return (
    <div className='thanks'>
        <span>Đặt vé thành công</span><br/>
        <span>Cảm ơn bạn đã đặt vé trên web của chúng tôi !!!</span><br/>
        <Link to={'/'}>Quay lại</Link>
    </div>
  )
}

export default Something