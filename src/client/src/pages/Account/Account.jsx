import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import { AuthContext } from '../../context/AuthContext'
import './account.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'



const Account = () => {
    const [page,setPage] = useState("1")
    const [avatar,setAvatar] = useState("https://www.redditstatic.com/avatars/avatar_default_01_A5A4A4.png")

    const {user } = useContext(AuthContext)


    const [errorpwd ,setErrorpwd] = useState(false)

    // ==================== function =====================
    function handleSubmidaddmv(e){
        var checkbox = document.getElementById('btn-admin1')
        if (e === true){
            checkbox.style.display = "block";
          } else {
            checkbox.style.display = "none";
          }
    }
    function handleCheckbox(e){
        var checkbox = document.getElementById("changepassword")
        if (e === true){
            checkbox.style.display = "block";
          } else {
            checkbox.style.display = "none";
          }
    }
    const handleChangeinfo = async (e)=>{
        e.preventDefault();
        var username = document.getElementById("fullname").value
        var phone = document.getElementById("telephone").value
        // var checkchange = document.getElementById("change_password").checked
        // var newpass = ""
        // var confirmpwd = ""
        // var oldpass = ""
        // if (checkchange == true){
        //     confirmpwd = document.getElementById("confirmation").value
        //     newpass = document.getElementById("password2").value
        //     oldpass =document.getElementById("password1").value
        //     if (oldpass == data.password){
        //         if (newpass == confirmpwd){
        //             setErrorpwd(false)
        //         }else{
        //             setErrorpwd(true)
        //         }
        //     }else{
        //         setErrorpwd(true)
        //     }
            
            
        // }
        if (username.length > 3){
            try {
                console.log(username.length)
                const res = await axios.put(`http://localhost:8000/api/users/${user.details._id}`,{"username":username})
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        if (phone.length > 3){
            try {
                const res = await axios.put(`http://localhost:8000/api/users/${user.details._id}`,{'phone':phone})
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        // console.log(username)
        // console.log(phone)
        // console.log(newpass)
    }
    const [info,setInfor] = useState({
        name: "",
        categories: [],
        address: [],
        photos:"" ,
        desc:"" ,
        rating:"",
        booked_seats: [],
        booked_tickets: [],
        dates: [],
        price:"" ,
        trailer:"" ,
        author: "",
        cast:"",
    })
    const handleInfo = e =>{
        setInfor((prev) => ({ ...prev, [e.target.className]: e.target.value }));

    }
    const [addcheck,setAddcheck] = useState(false)
    const handleAdd= async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8000/api/movies`,info)
            console.log(res)
            setAddcheck(true)
        } catch (err) {
            console.log(err)
        }
    }
    const [delname,setDelname] = useState(undefined)

    const [delprocess,setDelprocess] = useState(false)

    const getNameDel = e =>{
        setDelname(e.target.value)
    }
    const handleDel = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:8000/api/movies?name=${delname}`)
            console.log(res.data[0]._id)
            const resDel = await axios.delete(`http://localhost:8000/api/movies/${res.data[0]._id}`)
            setDelprocess(true)
            console.log(resDel)
        } catch (err) {
            console.log(err)
        }
    }
    const [revenuemv,setRevenuemv] = useState(undefined)
    const [seatsold,setSeatsold] = useState(undefined)
    const handleRevenue = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:8000/api/movies?name=${revenuemv}`)
            setSeatsold((res.data[0].booked_seats).length)
        } catch (err) {
            console.log(err)
        }
        
    }
    const [historydata,setHistorydata] = useState()
    async function loadHistory (){
        try {
            const res = await axios.get(`http://localhost:8000/api/tickets/users/${user.details._id}`)
            setHistorydata(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }

    }
    function setupTime(e){
        var d = new Date(e)
        return d.toLocaleString('es-us')
      }
    const handleChangePage = e =>{
        setPage(e)
        loadHistory()
    }

    //====================================================
    return (
    
    <div className='account-main'>
        <Navbar/>
        <Header/>
        {user ? (
        <div className="container-account">

            <div className="account">
                <div className="select-page-account">
                    <select value={page} onChange={e => handleChangePage(e.target.value)} className="page">
                        <option value="1">Thông tin chung</option>
                        <option value="2">Thông tin chi tiết</option>
                        {!user.isAdmin && (<option value="3">Lịch sử mua vé</option>)}
                        {user.isAdmin && (<option value="4" >Adminpage</option>)}
                    </select>
                </div>

                <div className="account-contant">
                    {page === "1" && (
                        <div className="account-detail">
                            <div className="my-account">
                                <div className="dashboard">
                                    <div className="page-title"  >
                                        <h1>Thông tin chung</h1>
                                    </div>
                                    <div className="format-profile">
                                        <div className="my-profile">
                        
                                            <div className="image-profile">
                                                <img src={avatar} alt="" className='avatar'/>
                                            </div>
                                            <div className="barcode-my">
                                                <div className="show-barcode-my"  >
                                                    <strong>Thẻ thành viên</strong>                                               
                                                </div>
                                                <div className="show-barcode-my"  >
                                                    <img src="https://www.barcodesinc.com/generator/image.php?code=9992245764270525&style=196&type=C128B&width=220&height=80&xres=1&font=3" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rank">
                                            <div className="setrank">
                                                <div className='rank-account'>
                                                    <p>Cấp độ tài khoản</p>

                                                    <FontAwesomeIcon icon={faRankingStar} />
                                                    <span>Đáy Rank</span>
                                                </div>
                                                <div className="total-movie-watched">
                                                    <p>Tổng chi tiêu</p>
                                                    <p>10000 <span>vnđ</span></p>
                                                </div>
                                                <div className="point">
                                                    <p>Điểm Fox</p>
                                                    <p>0 <span>Đ</span>  </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="welcome-msg"  >
                                            <p className="hello"><strong>Xin chào {user.details.username},</strong></p>
                                            <p>Với trang này, bạn sẽ quản lý được tất cả thông tin tài khoản của mình.</p>
                                        </div>
                                    </div>
                                    <div className="box-account box-info">
                                        <div className="box-head"  >
                                            <h3>Thông tin tài khoản</h3>
                                        </div>

                                        <div className="box"  >
                                            <div className="box-content box-content-my col2-set"  >
                                                <span>Tên : {user.details.firstName} {user.details.lastName}</span><br/>
                                                <span>Email : {user.details.email}</span><br/>
                                                <span>Tên đăng nhập : {user.details.username}</span><br/>
                                                <span>Điện thoại : {user.details.phone}</span><br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {page === "2" && (
                        <div className="account-detail">
                            <div className="my-account">
                                <div className="page-title">
                                    <h1>Thay đổi thông tin</h1>
                                </div>
                                <form method='post' id='form-validate' className='scaffold-form edit-account'>
                                    <ul>
                                        <li className="fields">
                                            <label htmlFor="fullname" className="required"><em>* </em>Username </label>
                                            <div className="input-box"   >
                                                
                                                <input type="text" id="fullname" name="fullname"  title ="full name" placeholder="Họ và tên"  className="input-text required-entry"/>
                                            </div>
                                        </li>

                                        <li className="fields phone_user">
                                            <label htmlFor="phone" className="required"><em>* </em>Số điện thoại</label>
                                            <div className="input-box"   >
                                                
                                                <input type="tel" name="telephone" id="telephone"  title="Phone Number" placeholder='số điện thoại' className="input-text validate-mobile required-entry"/>
                                            </div>
                                        </li>

                                        <li className="fields sex">
                                            <label htmlFor="gender" className="required"><em>* </em>Giới tính</label>
                                            <div className="input-box"   >
                                                <input type="radio" name="gender" value="1" /><em>nam</em><br/>
                                                <input type="radio" name="gender" value="2" /><em>nữ</em><br/>
                                                <input type="radio" name="gender" value="113"/><em>both</em><br/>
                                            </div>
                                        </li>

                                        <li className="fields birthday">					
                                            <label htmlFor="month"><em>*</em>Ngày sinh</label>
                                            <div className="input-box customer-dob"   >
                                                SEP 14 2002					
                                            </div>
                                        </li>

                                        <li className="fields email">
                                            <label htmlFor="email" className="required"><em>*</em>Địa chỉ email</label>
                                            <div className="input-box"   >
                                                {user.details.email}              
                                            </div>
                                        </li>               

                                        <li className="fields chacskbox">
                                            <div className="check-field-change-pass control"   >
                                                <input type="checkbox" name="change_password" id="change_password" onClick={e => handleCheckbox(e.target.checked)} title="Đổi mật khẩu" className="checkbox validation-passed"/>
                                                <label className="change-pass-normal" htmlFor="change_password">Tôi muốn thay đổi mật khẩu</label>
                                            </div>

                                            
                                        </li>
                                    </ul>
                                    <div className="fieldset changepass" id='changepassword' style={{display:"none"}}>
                                        <h2 className="legend">Đổi mật khẩu</h2>
                                        <ul className="form-list">
                                            <li className="fields">
                                                <div className="field left"   >
                                                    <label htmlFor="password" className="required"><em>*</em>Mật khẩu cũ</label>
                                                    <div className="input-box"   >
                                                        <input type="password" title="Mật khẩu cũ" className="input-text required-entry validate-password" name="password" id="password1" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fields">
                                                <div className="field left"   >
                                                    <label htmlFor="password" className="required"><em>*</em>Mật khẩu mới</label>
                                                    <div className="input-box"   >
                                                        <input type="password" title="Mật khẩu mới" className="input-text required-entry validate-password" name="password" id="password2" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fields">
                                                <div className="field right"   >
                                                    <label htmlFor="confirmation" className="required"><em>*</em>Nhập lại mật khẩu mới</label>
                                                    <div className="input-box"   >
                                                        <input type="password" title="Nhập lại mật khẩu mới" className="input-text required-entry validate-cpassword" name="confirmation" id="confirmation"/>
                                                    </div>
                                                </div>
                                            </li>
                                            {errorpwd && (
								                <span className="checkpass"> Mật khẩu không trùng khớp hoặc mật khẩu cũ bị sai</span>)}
                                        </ul>
                                    </div>
                                    <div className='btnpage2'>
                                        <input type="button" value="Submit" id='sb' className='btn-page2' onClick={handleChangeinfo}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    { page === "3" && (
                        <div className="account-detail">
                            <div className="my-account">
                                <div className="page-title">
                                    <h1>Lịch sử xem phim</h1>
                                </div>
                                <table className='h-table'>
                                    <tr>
                                        <td>Mã vé</td>
                                        <td>Tên phim</td>
                                        <td>Ngày xem</td>
                                        <td>Địa chỉ</td>
                                    </tr>
                                    <tbody>
                                        {historydata && historydata.map((item,idx)=>{
                                            return (
                                                <tr key={idx}>
                                                    <td>{item._id}</td>
                                                    <td>{item.movie_name}</td>
                                                    <td>{setupTime(item.date)}</td>
                                                    <td>{item.address}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    { page=== "4" && (
                        <div className="account-detail">
                            <div className="my-account">
                                <div className="page-title">
                                    <h1>Thêm phim sắp chiếu</h1>
                                </div>
                                <form className='form-addmv'>
                                    <ul>
                                        <li>
                                            <em>Tên phim</em>
                                            <input type="text" name='name' className='name' onChange={e=> handleInfo(e)} placeholder='nhập tên phim' />
                                        </li>
                                        <li>
                                            <em>Thể loại</em>
                                            <input type="text" name='categories' className='categories' placeholder='nhập Thể loại'  onChange={e=> handleInfo(e)}/>                                
                                        </li>
                                        <li>
                                            <em>Đạo diễn</em>
                                            <input type="text" name='author' className='author' placeholder='nhập tên Đạo diễn' onChange={e=> handleInfo(e)} />                                
                                        </li>
                                        <li>
                                            <em>Mô tả chung</em>
                                            <input type="text" name='desc' className='desc' placeholder='nhập mô tả chung về phim' onChange={e=> handleInfo(e)} />
                                        </li>
                                        <li>
                                            <em>Diễn viên đóng phim</em>
                                            <input type="text" name='cast' className='cast' placeholder='nhập tên các diễn viên' onChange={e=> handleInfo(e)} />
                                        </li>
                                        <li>
                                            <em>Ngày ra mắt</em>
                                            <input type="datetime-local" className="dates" name="dates"    min="2022-01-01T00:00" max="2025-01-01T00:00" onChange={e=> handleInfo(e)}/>
                                        </li>
                                        <li>
                                            <em>Hình ảnh</em>
                                            <input type="url" name='photos' className='photos' placeholder='nhập đường dẫn ảnh'onChange={e=> handleInfo(e)}  />
                                        </li>
                                        <li>
                                            <em>Token trailer phim</em>
                                            <input type="text" name='trailer' className='trailer' placeholder='nhập token trailer' onChange={e=> handleInfo(e)} />
                                        </li>
                                        <li>
                                            <em>Đánh giá</em>
                                            <input type="number" name='rating' className='rating' min={0} max={5} step={0.1} onChange={e=> handleInfo(e)} />
                                        </li>
                                        <li>
                                            <em>Địa chỉ rạp chiếu</em>
                                            <input type="text" name='address' className='address' placeholder='nhập địa chỉ rạp chiếu' onChange={e=> handleInfo(e)} />
                                        </li>
                                        <li>
                                            <em>Giá vé</em>
                                            <input type="text" name='price' className='price' placeholder='nhập giá vé' onChange={e=> handleInfo(e)} />
                                        </li>
                                    </ul>
                                    <div className='checkbox-addmv'>
                                        <input type="checkbox" name="conformsubmit" id='conformsubmit' onClick={e => handleSubmidaddmv(e.target.checked)} />
                                        <em>Đồng ý thêm phim</em>
                                        <div id="btn-admin1" className='btn-admin01'  style={{display:"none"}}  >
                                            <input type="button" value="Submit" onClick={handleAdd} />
                                        </div>
                                        <div>
                                            {addcheck === true && (
                                                <span style={{color:'red'}}>Phim đã được thêm vào kho phim</span>
                                            )}
                                        </div>
                                    </div> 

                                </form>
                            </div>

                            <div className="my-account">
                                <div className="page-title">
                                    <h1>Xóa phim</h1>
                                </div>
                                <form className='acc-deletemv'>
                                    <ul>
                                        <li>
                                            <em>Tên phim</em>
                                            <input type="text" name='name' onChange={e => getNameDel(e)}  className='del-movie' placeholder='nhập tên phim' />
                                        </li>
                                    </ul>
                                </form>
                                <div className="btn2-delmv">
                                    <input type="button" value="Submit" onClick={handleDel} />
                                </div>
                            </div>

                            <div className="my-account">
                                <div className="page-title">
                                    <h1>Xem số ghế đã bán của phim</h1>
                                </div>
                                <div className='revenuemv'>
                                    <p><input type="text" placeholder='nhập tên phim' onChange={e => setRevenuemv(e.target.value)} className='revenue-name' /></p>

                                    <div className='rev-btn'>
                                        <input type="button" value="Submit" className='revenue-btn'onClick={handleRevenue}/>
                                    </div>
                                </div>
                                <div className="revenue-show">
                                    <ul>
                                        <li>
                                            <span>Tổng số vé đã bán : {seatsold}</span>
                                        </li>

                                        <li>
                                            <span>Tổng doanh thu : {seatsold * 90000}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
        ) : (
            <div className="container-account">
                <div className="account">
                    <div className='togetacc'>
                        <span>Bạn đã có tài khoản hoặc chưa có tài khoản?</span><br/>
                        <span>Đã có tài khoản click <Link to="/login">here</Link> để tới trang đăng nhập .</span><br/>
                        <span>Chưa có tài khoản click <Link to="/login">here</Link> để tới trang đăng kí .</span>
                    </div>
                </div>
            </div>
        )}
        <Footer/>
    </div>
  )
}

export default Account