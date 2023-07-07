function Validation() {
  this.kiemTraChuoiKiTu = function (value, errorId, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

    if (value.match(letter)) {
      getEle(errorId).innerHTML = "";
      getELE(errorId).styel.display = "none";
      return true;
    }
    getELE(errorId).innerHTML = mess;
    getELE(errorId).styel.display = "block";
    return false;
  };
}
