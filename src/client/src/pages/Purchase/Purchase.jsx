import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import './purchase.css'
const Purchase = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	// single-time read
	const params = Object.fromEntries([...searchParams]);
    // const resultCode = params.get('resultCode');
	const [checkLoad,setCheckLoad] = useState(false)
	// const {data , loading,error} = useFetch(`http://localhost:8000/api/payments/callback/${params.orderId}`)
	const arrz = []

	async function handleUpdateTicket (){
		(JSON.parse(params.extraData)).forEach((val)=>{
			arrz.push(val)
		})
		console.log(arrz)
		for(let i in arrz){
			try{
				console.log(arrz[i])
				const res = await axios.put(`http://localhost:8000/api/tickets/${arrz[i]}`,{"status":true})
				console.log(res)
			}catch(err){
				console.log('err')
				console.log(err)
			}
		}
		setCheckLoad(true)
	}

		

	useEffect(()=>{
		if(checkLoad === false){
			handleUpdateTicket()
		}
	},[])
	// const info = (<table className='h-table'>
	// 				<tr>
	// 					<th >Id </th>
	// 					<th>Movie's name</th>
	// 					<th>Schedule</th>
	// 					<th>Address</th>
	// 				</tr>
	// 				<tbody className='temp'>
	// 				{
	// 					data.map((item,idx)=>{
	// 					return (
	// 						<tr key={idx}>
							
	// 						{/* <td >Mã vé: </td> */}
	// 						<td>{item._id}</td>
							
	// 						{/* <td>Tên phim: </td> */}
	// 						<td>{item.movie_name}</td>
						
	// 						{/* <td>Ngày xem: </td> */}
	// 						<td>{setupTime(item.date)}</td>
							
	// 						{/* <td>Địa chỉ: </td> */}
	// 						<td>{item.address}</td>
				
	// 					</tr>
	// 					)
	// 					})
	// 				}
	// 				</tbody>
	// 			</table>
	// 			)

	return (
		<div>
			
			<Navbar />
				<div className="F">
					<div className="container-pur">
						{parseInt(params.resultCode,10) === 0 ? 
							<div>
								<span>Thanh toán thành công</span>
							</div>
							:
							<div>
								<span>Thanh toán thất bại</span>
							</div>	
						}
						

						<Link to={'/'}>Quay về trang chính</Link>
					</div>
				</div>
			
			<Footer />
		</div>
	);
};

export default Purchase;
