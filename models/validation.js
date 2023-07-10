function Validation() {
  this.kiemTraRong = function (value, errorId, mess) {
    if (value === "") {
      //show error
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";

      return false;
    }

    //Hide error
    getEle(errorId).innerHTML = "";
    getEle(errorId).style.display = "none";

    return true;
  };

  this.kiemTraChucVu = function (idSelect, errorId, mess) {
    var slcChucVu = document.getElementById(idSelect);
    if (slcChucVu.selectedIndex !== 0) {
      //true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";

      return true;
    }

    //false
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";

    return false;
  };

  this.kiemTraChuoiKiTu = function (value, errorId, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

    if (value.match(letter)) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  this.checkPattern = function (value, errorId, mess,data, letter) {
    if (value.match(data,letter)) {
      //true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";

      return true;
    }

    //false
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";

    return false;
  };
}
