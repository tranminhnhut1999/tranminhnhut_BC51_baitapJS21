function NhanVien(
  _TaiKhoan,
  _HoTen,
  _Email,
  _MatKhau,
  _NgayLam,
  _LuongCB,
  _ChucVu,
  _glTrongThang
) {
  this.TaiKhoan = _TaiKhoan;
  this.HoTen = _HoTen;
  this.Email = _Email;
  this.MatKhau = _MatKhau;
  this.NgayLam = _NgayLam;
  this.ChucVu = _ChucVu;
  this.LuongCB = _LuongCB;
  this.glTrongThang = _glTrongThang;
  this.XepLoai = 0;
  this.TongLuong = 0;

  this.loaiNV = function () {
    this.XepLoai = 0;
    if (0 <= this.glTrongThang && this.glTrongThang <= 160) {
      this.XepLoai = "Nhan vien trung binh";
    } else if (160 <= this.glTrongThang && this.glTrongThang <= 176) {
      this.XepLoai = "Nhan vien kha";
    } else if (176 <= this.glTrongThang && this.glTrongThang <= 192) {
      this.XepLoai = "Nhan vien gioi";
    } else {
      this.XepLoai = "Nhan vien xuat sac";
    }
    return this.XepLoai;
  };
  this.tinhTL = function () {
    this.TongLuong = 0;
    if (this.ChucVu === "Sếp") {
      this.TongLuong = parseFloat(this.LuongCB) * 3;
    } else if (this.ChucVu === "Trưởng phòng") {
      this.TongLuong = parseFloat(this.LuongCB) * 2;
    } else {
      this.TongLuong = parseFloat(this.LuongCB) * 1;
    }
    return this.TongLuong;
  };
}
