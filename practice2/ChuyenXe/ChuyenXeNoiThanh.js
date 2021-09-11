import ChuyenXe from "./ChuyenXe.js";

export default class ChuyenXeNoiThanh extends ChuyenXe {
  constructor(_chuyenXe, _maSoTX, _maSoChuyenXe, _noiDen) {
    super(_chuyenXe, _maSoTX, _maSoChuyenXe);
    this.noiDen = _noiDen;
  }
  tinhDoanhThu() {
    console.log("Doanh So chuyen xe noi thanh");
  }
  tinhSoNgayDiDuoc() {
    console.log("So ngay di duoc");
  }
}
