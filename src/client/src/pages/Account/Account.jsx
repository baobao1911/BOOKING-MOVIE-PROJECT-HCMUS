import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './account.css'

const Account = () => {
    const [page,setPage] = useState("1")
    const [avatar,setAvatar] = useState("https://www.redditstatic.com/avatars/avatar_default_01_A5A4A4.png")
    console.log(page)
    const handleChangePage = e =>{
        setPage(e)
    }
    // ==================== function =====================
    function hideButtonSubmit(e){
        // var checkBox = document.getElementById("conformsubmit");
        var buttonSubmit = document.getElementsByID("btn")

        if (e === true){
            buttonSubmit.style.display = "block";
          } else {
            buttonSubmit.style.display = "none";
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
    //====================================================
    return (
    <div className='account-main'>
        <Navbar/>
        <Header/>
        <div className="container-account">

            <div className="account">
                <div className="select-page-account">
                    <select value={page} onChange={e => setPage(e.target.value)} className="page">
                        <option value="1">Thông tin chung</option>
                        <option value="2">Thông tin chi tiết</option>
                        <option value="3">Lịch sử mua vé</option>
                        <option value="4">Adminpage</option>
                    </select>
                </div>

                <div className="account-contant">
                    {page === "1" ? (
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
                                        <div className="welcome-msg"  >
                                            <p className="hello"><strong>Xin chào bao nguyen,</strong></p>
                                            <p>Với trang này, bạn sẽ quản lý được tất cả thông tin tài khoản của mình.</p>
                                        </div>
                                    </div>
                                    <div className="box-account box-info">
                                        <div className="box-head"  >
                                            <h3>Thông tin tài khoản</h3>
                                        </div>
                                        <div className="box"  >
                                            
                                            <div className="box-content box-content-my col2-set"  >
                                                <span>Tên : bao nguyen</span><br/>
                                                <span>Email : jonnybao091@gmail.com</span><br/>
                                                <span>Tên đăng nhập : 0377707361</span><br/>
                                                <span>Điện thoại : 0377707361</span><br/>
                                            </div>
                                            <div className="box-title"  >
                                                <span>Bạn có muốn thay đổi thông tin của mình không ? </span>
                                                <div className='change-checkbox'>
                                                    <input type="checkbox"/>
                                                    <em>Đồng ý </em>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):(
                        console.log("cc")
                    )}
                    
                    {page === "2" ? (
                        <div className="account-detail">
                            <div className="my-account">
                                <div className="page-title">
                                    <h1>Thay đổi thông tin</h1>
                                </div>
                                <form method='post' id='form-validate' className='scaffold-form edit-account'>
                                    <ul>
                                        <li className="fields">
                                            <label htmlFor="fullname" className="required"><em>*</em>Họ  và tên</label>
                                            <div className="input-box"   >
                                                
                                                <input type="text" id="fullname" name="fullname"  title ="full name" placeholder="Họ và tên" className="input-text required-entry"/>
                                            </div>
                                        </li>

                                        <li className="fields phone_user">
                                            <label htmlFor="phone" className="required"><em>*</em>Số điện thoại</label>
                                            <div className="input-box"   >
                                                
                                                <input type="tel" name="telephone" id="telephone"  title="Phone Number" placeholder='số điện thoại' className="input-text validate-mobile required-entry"/>
                                            </div>
                                        </li>

                                        <li className="fields sex">
                                            <label htmlFor="gender" className="required"><em>*</em>Giới tính</label>
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
                                                jonnybao091@gmail.com                
                                            </div>
                                        </li>

                                        <li className="fields field-country">
                                            <div className="field field-country-first"   >
                                                <label htmlFor="region_id" className="required "><em>*</em>Thành phố/Tỉnh</label>
                                                <div className="input-box"   >
                                                    <select id="region_id" name="region_id" title="Tỉnh/Tp" className="validate-select validation-passed">
                                                        <option value="">Vui lòng chọn...</option>
                                                        <option value="65">Hồ Chí Minh</option>                                                       
                                                        <option value="64">Hà Nội</option>                                                       
                                                        <option value="60">Đà Nẵng</option>                                                       
                                                        <option value="48">Cần Thơ</option>                                                       
                                                        <option value="39">Đồng Nai</option>                                                       
                                                        <option value="62">Hải Phòng</option>                                                       
                                                        <option value="13">Quảng Ninh</option>                                                       
                                                        <option value="43">Bà Rịa-Vũng Tàu</option>                                                       
                                                        <option value="31">Bình Định</option>                                                       
                                                        <option value="57">Bình Dương</option>                                                       
                                                        <option value="33">Đắk Lắk</option>                                                       
                                                        <option value="51">Trà Vinh</option>                                                       
                                                        <option value="06">Yên Bái</option>                                                       
                                                        <option value="49">Vĩnh Long</option>                                                       
                                                        <option value="47">Kiên Giang</option>                                                       
                                                        <option value="73">Hậu Giang</option>                                                       
                                                        <option value="23">Hà Tĩnh</option>                                                       
                                                        <option value="32">Phú Yên</option>                                                       
                                                        <option value="58">Bình Phước</option>                                                       
                                                        <option value="40">Bình Thuận</option>                                                       
                                                        <option value="59">Cà Mau</option>                                                       
                                                        <option value="04">Cao Bang</option>                                                       
                                                        <option value="72">Dak Nong</option>                                                       
                                                        <option value="71">Dien Bien</option>                                                       
                                                        <option value="45">Đồng Tháp</option>                                                       
                                                        <option value="54">Bac Giang</option>                                                       
                                                        <option value="30">Gia Lai</option>                                                       
                                                        <option value="44">An Giang</option>                                                       
                                                        <option value="55">Bac Lieu</option>                                                       
                                                        <option value="03">Ha Giang</option>                                                       
                                                        <option value="63">Ha Nam</option>                                                       
                                                        <option value="53">Bac Cạn</option>                                                       
                                                        <option value="56">Bac Ninh</option>                                                       
                                                        <option value="50">Ben Tre</option>                                                       
                                                        <option value="15">Ha Tay</option>                                                       
                                                        <option value="61">Hai Duong</option>                                                       
                                                        <option value="14">Hoa Binh</option>                                                       
                                                        <option value="66">Hưng Yên</option>                                                       
                                                        <option value="34">Khánh Hòa</option>                                                       
                                                        <option value="28">Kon Tum</option>                                                       
                                                        <option value="01">Lai Chau</option>                                                       
                                                        <option value="35">Lam Dong</option>                                                       
                                                        <option value="09">Lạng Sơn</option>                                                       
                                                        <option value="02">Lao Cai</option>                                                       
                                                        <option value="41">Long An</option>                                                       
                                                        <option value="67">Nam Dinh</option>                                                       
                                                        <option value="22">Nghệ An</option>                                                       
                                                        <option value="18">Ninh Binh</option>                                                       
                                                        <option value="36">Ninh Thuan</option>                                                       
                                                        <option value="68">Phú Thọ</option>                                                       
                                                        <option value="24">Quảng Binh</option>                                                       
                                                        <option value="27">Quảng Nam</option>                                                       
                                                        <option value="29">Quảng Ngãi</option>                                                       
                                                        <option value="25">Quảng Tri</option>                                                       
                                                        <option value="52">Sóc Trăng</option>                                                       
                                                        <option value="05">Sơn La</option>                                                       
                                                        <option value="37">Tây Ninh</option>                                                       
                                                        <option value="20">Thai Binh</option>                                                       
                                                        <option value="69">Thái Nguyên</option>                                                       
                                                        <option value="21">Thanh Hoa</option>                                                       
                                                        <option value="26">Thua Thien-Hue</option>                                                       
                                                        <option value="46">Tiền Giang</option>                                                       
                                                        <option value="07">Tuyen Quang</option>                                                       
                                                        <option value="70">Vinh Phuc</option>                                                       
                                                    </select>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="fields wide" >
                                            <label htmlFor="street_1" className="required"><em>*</em>Địa chỉ</label>
                                            <div className="input-box"   >
                                                <input type="text" name="street[]" placeholder='No address 700' title="Địa chỉ" id="street_1" className="input-text required-entry"/>
                                            </div>
                                        </li>

                                        <li className="fields chacskbox">
                                            <div className="check-field-change-pass control"   >
                                                <input type="checkbox" name="change_password" id="change_password" onClick={e => handleCheckbox(e.target.checked)} title="Đổi mật khẩu" className="checkbox validation-passed"/>
                                                <label className="change-pass-normal" htmlFor="change_password">Tôi muốn thay đổi mật khẩu</label>
                                            </div>

                                            <div className="fieldset changepass" id='changepassword' style={{display:"none"}}>
                                                <h2 className="legend">Đổi mật khẩu</h2>
                                                <ul className="form-list">
                                                    <li className="fields">
                                                        <div className="field left"   >
                                                            <label htmlFor="password" className="required"><em>*</em>Mật khẩu mới</label>
                                                            <div className="input-box"   >
                                                                <input type="password" title="Mật khẩu mới" className="input-text required-entry validate-password" name="password" id="password" aria-autocomplete="list"/>
                                                            </div>
                                                        </div>
                                                        <div className="field right"   >
                                                            <label htmlFor="confirmation" className="required"><em>*</em>Nhập lại mật khẩu mới</label>
                                                            <div className="input-box"   >
                                                                <input type="password" title="Nhập lại mật khẩu mới" className="input-text required-entry validate-cpassword" name="confirmation" id="confirmation"/>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                    <input type="button" value="Submit" className='btn-submit'/>
                                </form>
                            </div>
                        </div>
                    ):(
                        console.log("cc")
                    )}

                    {page === "3" ? (
                        <div className="page3">
                            
                        </div>
                    ):(
                        console.log("cc")
                    )}

                    {page=== "4"?(
                        <div className="account-detail">
                            <div className="my-account">
                                <div className="page-title">
                                    <h1>Thêm phim sắp chiếu</h1>
                                </div>
                                <form className='form-addmv'>
                                    <ul>
                                        <li>
                                            <em>Tên phim</em>
                                            <input type="text" name='name' className='name' placeholder='nhập tên phim'/>
                                        </li>
                                        <li>
                                            <em>Thể loại</em>
                                            <input type="text" name='categories' className='categories' placeholder='nhập Thể loại'/>                                
                                        </li>
                                        <li>
                                            <em>Đạo diễn</em>
                                            <input type="text" name='author' className='author' placeholder='nhập tên Đạo diễn'/>                                
                                        </li>
                                        <li>
                                            <em>Mô tả chung</em>
                                            <input type="text" name='desc' className='desc' placeholder='nhập mô tả chung về phim'/>
                                        </li>
                                        <li>
                                            <em>Diễn viên đóng phim</em>
                                            <input type="text" name='cast' className='cast' placeholder='nhập tên các diễn viên'/>
                                        </li>
                                        <li>
                                            <em>Ngày ra mắt</em>
                                            <input type="datetime-local" className="dates" name="dates"  min="2022-01-01T00:00" max="2025-01-01T00:00"/>
                                        </li>
                                        <li>
                                            <em>Hình ảnh</em>
                                            <input type="url" name='photos' className='photos' placeholder='nhập đường dẫn ảnh'/>
                                        </li>
                                        <li>
                                            <em>Token trailer phim</em>
                                            <input type="text" name='trailer' className='trailer' placeholder='nhập token trailer'/>
                                        </li>
                                        <li>
                                            <em>Đánh giá</em>
                                            <input type="number" name='rate' className='rate' min={0} max={5} step={0.1}/>
                                        </li>
                                        <li>
                                            <em>Địa chỉ rạp chiếu</em>
                                            <input type="text" name='address' className='address' placeholder='nhập địa chỉ rạp chiếu'/>
                                        </li>
                                    </ul>
                                    <div>
                                        <input type="checkbox" name="conformsubmit" id='conformsubmit' onClick={e => hideButtonSubmit(e.target.checked)} />
                                        <e>Đồng ý thêm phim</e>
                                    </div> 
                                    <input type="button" value="Submit" className='btn-submit' id='btn' style={{display : "none"}}/>
                                </form>
                            </div>

                            <div className="delete-movie">

                            </div>
                        </div>
                        
                    ):(
                        console.log("cc")
                    )}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Account