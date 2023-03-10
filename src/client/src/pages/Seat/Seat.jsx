import useFetch from "../../hooks/useFetch"
import "./seat.css"
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { AuthContext } from '../../context/AuthContext'
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Seat = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const { data, loading, error } = useFetch(`http://localhost:8000/api/tickets/movies/${id}`)
  const dataMv = location.state.id

  const count = document.getElementById('count');
  const total = document.getElementById('total');
  const listseat = document.getElementById('lseat');

  const [seatbooking, setSeatbooking] = useState([])
  const [adrs, seatAdrs] = useState([])
  const [time, setTime] = useState([])
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const [checkT,setCheckT] = useState(0)
  //==============================
  const [movie_id, setMvid] = useState("")
  const [customer_id, setCsid] = useState("")
  const [seat_number, setSeatnumber] = useState("")
  const [address, setAddress] = useState("none")
  const [date, setDate] = useState("none")
  //==============================
  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * 90000;
    var arrseat = []

    selectedSeats.forEach((e) => {
      arrseat.push(e.getAttribute('value'))
    })
    listseat.innerText = arrseat
  }

  const [checkload,setCheckload] = useState(false)
  function setupSeat() {

      var seat = document.getElementsByClassName('seat')
      seat = [...seat]

      data.forEach((val) => {
      var idx = parseInt(val.seat_number,10)  + 2
      seat[idx].classList.toggle('occupied')
      })

    seatAdrs(dataMv.address)
    setTime(dataMv.dates)
    setCsid(user.details._id)
    setMvid(id)
  }

  useEffect(() => {
      setupSeat()
  },[loading])

  const handleClick = e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected');
    }
    updateSelectedCount();
    console.log(listseat.textContent)
  };

  function setupTime(e) {
    var d = new Date(e)
    return d.toLocaleString('es-us',{ hour12: false,
                                      day:"numeric", 
                                      month:"numeric",
                                      year: "numeric",
                                      hour: "numeric", 
                                      minute: "numeric"})
  }

  const handlePayment = async (e) => {
    e.preventDefault();
    let temp = ((listseat.textContent).split(",")).map(i => Number(i));

    if (address === 'none' || address === 'Ch???n r???p' || date === 'none'|| date === 'Ch???n gi??? chi???u phim'){
      setCheckT(1)
    }
    else if ((temp.length === 1 && isNaN(temp[0])) || temp[0] === 0){
      setCheckT(2)
    }
    else{
      var arr = []
        for (let i in temp) {
          try {
            const res = await axios.post(`http://localhost:8000/api/tickets/${customer_id}/${movie_id}`,
              { movie_id, customer_id, "seat_number": temp[i], address, date, "movie_name": dataMv.name ,"status":false});
            arr.push(res.data)
          } catch (err) {
            console.log(err);
          }
        }
        navigate("/payment", { state: { id: arr, id_user: user.details._id } });
    }
  }
  //==================================================
  return (
    <section>
      <Navbar />

      {loading === false && (
        <div className="seat-movie-container"  >
          <label htmlFor="seat-moviename">{dataMv.name}</label>

          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>

          <select value={address} onChange={e => setAddress(e.target.value)} className="seat-address">
            <option selected >Ch???n r???p</option>
            {adrs && adrs.map((item, idx) => (
              <option key={idx} value={item}> {item}</option>
            ))}
          </select>

          <select value={date} onChange={e => setDate(e.target.value)} className="seat-time">
            <option selected >Ch???n gi??? chi???u phim</option>
            {time && time.map((item, idx) => (
              <option key={idx} value={item}> {setupTime(item)}</option>
            ))}
          </select>

          <div className="container">
            <div className="screen"></div>

            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="1" />
              <input onClick={handleClick} type="button" className='seat' value="2" />
              <input onClick={handleClick} type="button" className='seat' value="3" />
              <input onClick={handleClick} type="button" className='seat' value="4" />
              <input onClick={handleClick} type="button" className='seat' value="5" />
              <input onClick={handleClick} type="button" className='seat' value="6" />
              <input onClick={handleClick} type="button" className='seat' value="7" />
              <input onClick={handleClick} type="button" className='seat' value="8" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="9" />
              <input onClick={handleClick} type="button" className='seat' value="10" />
              <input onClick={handleClick} type="button" className='seat' value="11" />
              <input onClick={handleClick} type="button" className='seat' value="12" />
              <input onClick={handleClick} type="button" className='seat' value="13" />
              <input onClick={handleClick} type="button" className='seat' value="14" />
              <input onClick={handleClick} type="button" className='seat' value="15" />
              <input onClick={handleClick} type="button" className='seat' value="16" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="17" />
              <input onClick={handleClick} type="button" className='seat' value="18" />
              <input onClick={handleClick} type="button" className='seat' value="19" />
              <input onClick={handleClick} type="button" className='seat' value="20" />
              <input onClick={handleClick} type="button" className='seat' value="21" />
              <input onClick={handleClick} type="button" className='seat' value="22" />
              <input onClick={handleClick} type="button" className='seat' value="23" />
              <input onClick={handleClick} type="button" className='seat' value="24" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="25" />
              <input onClick={handleClick} type="button" className='seat' value="26" />
              <input onClick={handleClick} type="button" className='seat' value="27" />
              <input onClick={handleClick} type="button" className='seat' value="28" />
              <input onClick={handleClick} type="button" className='seat' value="29" />
              <input onClick={handleClick} type="button" className='seat' value="30" />
              <input onClick={handleClick} type="button" className='seat' value="31" />
              <input onClick={handleClick} type="button" className='seat' value="32" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="33" />
              <input onClick={handleClick} type="button" className='seat' value="34" />
              <input onClick={handleClick} type="button" className='seat' value="35" />
              <input onClick={handleClick} type="button" className='seat' value="36" />
              <input onClick={handleClick} type="button" className='seat' value="37" />
              <input onClick={handleClick} type="button" className='seat' value="38" />
              <input onClick={handleClick} type="button" className='seat' value="39" />
              <input onClick={handleClick} type="button" className='seat' value="40" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="41" />
              <input onClick={handleClick} type="button" className='seat' value="42" />
              <input onClick={handleClick} type="button" className='seat' value="43" />
              <input onClick={handleClick} type="button" className='seat' value="44" />
              <input onClick={handleClick} type="button" className='seat' value="45" />
              <input onClick={handleClick} type="button" className='seat' value="46" />
              <input onClick={handleClick} type="button" className='seat' value="47" />
              <input onClick={handleClick} type="button" className='seat' value="48" />
            </div>

            <p className="text">
              You have selected <span id="count">0</span> seats
              <br />
              Total price : <span id="total">0</span>
              <br />
              Your Seat : <span id="lseat">none</span>
            </p>
            <div className="c-btn-pay">
              <input type="button" className="btn-pay" value="T???i trang thanh to??n" onClick={handlePayment} />
            </div>
            <br/>
            <div>
              {checkT === 1 && <span>Vui l??ng ch???n ?????a ch??? r???p v?? th???i gia chi???u phim</span>}
              {checkT === 2 && <span>Oop!! C?? v??? b???n ch??a ch???n gh??? .</span>}
            </div>


          </div>
        </div>
      )}
      <Footer />
    </section>
  )
}

export default Seat