function wlCommonInit() {
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst
	 * Server is required. This API should be called only once, before any other
	 * WL.Client methods that communicate with the MobileFirst Server. Don't
	 * forget to specify and implement onSuccess and onFailure callback
	 * functions for WL.Client.connect(), e.g:
	 * 
	 * WL.Client.connect({ onSuccess: onConnectSuccess, onFailure:
	 * onConnectFailure });
	 * 
	 */

	// Common initialization code goes here
}
function chuyenTrang() {
	alert("Thoát ứng dụng thành công!!!")
	window.location = "index.html";

}
function chuyenLogout() {
	alert("Đăng xuất thành công!!!")
	window.location = "index.html";

}
function chuyenKH() {
	window.location = "index.html#KhachHang";

}
function chuyenHD() {
	window.location = "index.html#HoaDon";

}
function chuyenDT() {
	window.location = "index.html#DoanhThu";

}
function chuyenDK() {
	window.location = "index.html#main#dangKy";

}
function chuyenSP() {
	window.location = "index.html#SanPham";

}
function closeUD() {
	window.close();
	return "Bạn Có Chắc Chắn Muốn Đóng Ứng Dụng Của Chúng Tôi?";
}
