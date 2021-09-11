import ChuyenXe from "./ChuyenXe.js";
export default class ChuyenXeNgoaiThanh extends ChuyenXe {
  constructor(_chuyenXe, _maSoTX, _maSoChuyenXe, _soTuyen) {
    super(_chuyenXe, _maSoTX, _maSoChuyenXe);
    this.soTuyen = _soTuyen;
  }
  tinhDoanhThu() {
    console.log("Doanh so chuyen xe ngoai thanh");
  }
}
