function DSNV() {
  this.arr = [];
  this.themNV = function (nv) {
    this.arr.push(nv);
  };
  this._timViTri = function (TaiKhoan) {
    var index = -1;

    for (var i = 0; this.arr.length; i++) {
      var nv = this.arr[i];
      if (nv.TaiKhoan === TaiKhoan) {
        index = i;
        break;
      }
    }

    return index;
  };
  this.xoaNV = function (TaiKhoan) {
    var index = this._timViTri(TaiKhoan);

    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  this.layThongTinNV = function (TaiKhoan) {
    var index = this._timViTri(TaiKhoan);

    if (index !== -1) {
      var nv = this.arr[index];
      return nv;
    }
  };
  this.capNhapNV = function (nv) {
    document.getElementById("errortk").style.display = "none";
    document.getElementById("errortk").innerHTML = "";
    var index = this._timViTri(nv.TaiKhoan);
    if (index !== -1) {
      this.arr[index] = nv;
    }
  };
}
DSNV.prototype.timKiemNV = function (keyword) {
  var mangTimKiem = [];

  for (var i = 0; i < this.arr.length; i++) {
    var nv = this.arr[i];
    var keywordLowerCase = keyword.toLowerCase();
    var loaiNVLowerCase = nv.XepLoai.toLowerCase();

    if (loaiNVLowerCase.indexOf(keywordLowerCase) !== -1) {
      mangTimKiem.push(nv);
    }
  }
  return mangTimKiem;
};
