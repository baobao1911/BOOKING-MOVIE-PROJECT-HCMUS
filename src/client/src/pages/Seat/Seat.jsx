import useFetch from "../../hooks/useFetch"
import "./seat.css"
import React, {useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { AuthContext } from '../../context/AuthContext'
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Seat = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const { data, loading, error } =  useFetch(`http://localhost:8000/api/movies/find/${id}`)


    const count = document.getElementById('count');
    const total = document.getElementById('total');
    const listseat = document.getElementById('lseat');
    var seat = document.getElementsByClassName('seat')
    seat = [...seat]


    const [seatbooking,setSeatbooking] = useState([])
    const [adrs,seatAdrs] = useState([])
    const [time,setTime] = useState([])
    const [lseat,SetLseat] = useState([])
    
    const { user } = useContext(AuthContext)

    //==============================
    const [movie_id,setMvid] = useState(undefined) 
    const [customer_id,setCsid] = useState(undefined)
    const [seat_number,setSeatnumber]  = useState(undefined)
    const [cinema_complex,setCinema] = useState('chọn rạp')
    const [movie_show_time,setGettime] = useState('chọn giờ chiếu')

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

    function setupSeat () {
      setSeatbooking(data.booked_seats)
      for (let i in seatbooking){
        seat[seatbooking[i]+2].classList.toggle('occupied')
        console.log(seatbooking[i])
      }
      seatAdrs(data.address)
      setTime(data.dates)
    }
  
    useEffect(()=>{
      setupSeat()
      console.log("loa")
    },[data])
    
    const handleClick = e => {
      if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
          e.target.classList.toggle('selected');
      }
      updateSelectedCount();
      console.log(listseat.textContent)
    };

    function setupTime(e){
      var d = new Date(e)
      return d.toLocaleString('es-us')
    }

    const handlePayment = async (e) => {
      e.preventDefault();

      if (user) {
        setCsid(user._id)
        
        try {
          const res = await axios.post(`http://localhost:8000/api/tickets/${movie_id}`,{movie_id,customer_id,seat_number,cinema_complex,movie_show_time});
          console.log(res);
        } catch (err) {
          console.log(err);

        }
      }
      
    };
  //==================================================
  return (
    <section>
      <Navbar/>

    {loading ? (
      console.log("loading api")
    ) : (
      <div className="movie-container"  >
        <label htmlFor="moviename">{data.name}</label>
        
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

        <select value={cinema_complex} onChange={e => setCinema(e.target.value)} className="cinema_complex">
          {adrs && adrs.map ((item,idx) => (
            <option  key={idx} value={item}> {item}</option>
          ))}
        </select>

        <select value={movie_show_time} onChange={e=>setGettime(e.target.value)} className="time">
          {time && time.map ((item,idx) => (
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
            <br/>
            Total price : <span id="total">0</span>
            <br/>
            Your Seat : <span id="lseat">none</span>
          </p>
          <input type="button" value="payment" onClick={handlePayment}/>
        </div>
      </div>
      )}
      <Footer/>
    </section>
    )
}

export default Seat