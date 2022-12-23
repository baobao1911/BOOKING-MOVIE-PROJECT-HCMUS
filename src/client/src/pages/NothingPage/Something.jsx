import React from 'react'
import { Link } from 'react-router-dom'

const Something = () => {
  return (
    <div className='thanks'>
        <span>Đặt vé thành công</span>
        <span>Cảm ơn bạn đã đặt vé trên web của chúng tôi !!!</span>
        <Link to={'/'}>Quay lại</Link>
    </div>
  )
}

export default Something