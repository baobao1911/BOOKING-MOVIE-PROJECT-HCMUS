import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer">
				<div className="fLists">
					<ul className="fList">
						<li className="fListHeaderItems">CGV Việt Nam</li>
						<li className="fListItems">Giới Thiệu</li>
						<li className="fListItems">Tiện Ích Online</li>
						<li className="fListItems">Thẻ Quà Tặng</li>
						<li className="fListItems">Liên Hệ Quảng Cáo CGV</li>
					</ul>

					<ul className="fList">
						<li className="fListHeaderItems">Điều khoản sử dụng</li>
						<li className="fListItems">Điều Khoản Chung</li>
						<li className="fListItems">Điều Khoản Giao Dịch</li>
						<li className="fListItems">Chính Sách Thanh Toán</li>
						<li className="fListItems">Chính Sách Bảo Mật</li>
					</ul>

					<ul className="fList">
						<li className="fListHeaderItems">
							Kết nối với chúng tôi{" "}
						</li>
						<li className="fListItems">Facebook</li>
						<li className="fListItems">Instagram</li>
						<li className="fListItems">Mail</li>
						<li className="fListItems">Twitter</li>
					</ul>

					<ul className="fList">
						<li className="fListHeaderItems">
							Chăm sóc khách hàng
						</li>

						<li className="fListItems">Hotline: 1900 6017</li>
						<li className="fListItems">
							Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm
							cả Lễ Tết)
						</li>
						<li className="fListItems">
							Email hỗ trợ: hoidap@cgv.vn
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
