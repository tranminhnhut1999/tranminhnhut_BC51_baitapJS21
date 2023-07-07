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
      //xoá phần tử của mảng: dựa vào index và số lượng phần tử cần xoá
      this.arr.splice(index, 1);
    }
  };
  this.capNhapNV = function () {};
  this.timNV = function () {};
}
