var dsnv = new DSNV();
var validation = new Validation();

getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

function layThongTinNV() {
  var TaiKhoan = getEle("tknv").value;
  var HoTen = getEle("name").value;
  var Email = getEle("email").value;
  var MatKhau = getEle("password").value;
  var NgayLam = getEle("datepicker").value;
  var ChucVu = getEle("chucvu").value;
  var LuongCB = getEle("luongCB").value;
  var glTrongThang = getEle("gioLam").value;

  /**
   * VALIDATION
   */
  var isValid = true;
  // Tai khoan
  isValid &= validation.kiemTraRong(
    TaiKhoan,
    "errortk",
    "(*)Vui long nhap tai khoan"
  );
  //Ho ten
  isValid &= validation.kiemTraRong(
    HoTen,
    "errorname",
    "(*)Vui long nhap ho ten"
  );
  // Email
  isValid &= validation.kiemTraRong(
    Email,
    "erroremail",
    "(*)Vui long nhap email"
  );
  // Mat Khau
  isValid &= validation.kiemTraRong(
    MatKhau,
    "errorpassword",
    "(*)Vui long nhap mat khau"
  );
  // Ngay lam
  isValid &= validation.kiemTraRong(
    NgayLam,
    "errorngaylam",
    "(*)Vui long chon ngay lam"
  );
  // Luong co ban
  isValid &= validation.kiemTraRong(
    LuongCB,
    "errorluongCB",
    "(*)Vui long nhap luong co ban"
  );
  // Chuc Vu
  isValid &= validation.kiemTraChucVu(
    "chucvu",
    "errorchucvu",
    "(*)Vui long chon chuc vu"
  );
  // gio lam trong thang
  isValid &= validation.kiemTraRong(
    glTrongThang,
    "errorgioLam",
    "(*)Vui long nhap gio lam"
  );
  if (TaiKhoan === "") {
    var nv = new NhanVien(
      TaiKhoan,
      HoTen,
      Email,
      MatKhau,
      NgayLam,
      LuongCB,
      ChucVu,
      glTrongThang
    );

    return nv;
  }
  return null;
}

function renderTable(data) {
  var content = "";

  for (var i = 0; i < data.length; i++) {
    var nv = data[i];

    content += `
    <tr>
    <td>${nv.TaiKhoan}</td>
    <td>${nv.HoTen}</td>
    <td>${nv.Email}</td>
    <td>${nv.NgayLam}</td>
    <td>${nv.ChucVu}</td>
    <td>${nv.LuongCB}</td>
    <td>${nv.glTrongThang}</td>
    <td>
        <button class="btn btn-info" onclick="suaNV('${nv.TaiKhoan}')">Sửa</button>
        <button class="btn btn-danger" onclick="xoaNV('${nv.TaiKhoan}')">Xoá</button>
    </td>
</tr>
`;
  }
  getEle("tableDanhSach").innerHTML = content;
}

function xoaNV(TaiKhoan) {
  console.log(TaiKhoan);
}

function suaNV(TaiKhoan) {
  var nv = dsnv.layThongTinNV(TaiKhoan);

  if (nv) {
    getEle("tknv").value = nv.TaiKhoan;
    getEle("name").value = nv.HoTen;
    getEle("email").value = nv.Email;
    getEle("password").value = nv.MatKhau;
    getEle("datepicker").value = nv.NgayLam;
    getEle("chucvu").value = nv.ChucVu;
    getEle("luongCB").value = nv.LuongCB;
    getEle("gioLam").value = nv.glTrongThang;
  }
}

//Xoa NV
function xoaSV(TaiKhoan) {
  dsnv.xoaNV(TaiKhoan);
  renderTable(dsnv.arr);
  setLocalStorage();
}

function getLocalStorage() {
  var dataString = localStorage.getItem("DSNV");
  var dataJson = JSON.parse(dataString);
  dsnv.arr = dataJson;
  renderTable(dsnv.arr);
}

// Tim NV
function searchNV() {
  var search = getEle("txtSearch").value;
  var mangTimKiem = dsnv.timKiemNV(search);
  renderTable(mangTimKiem);
}
getEle("txtSearch").addEventListener("keyup", searchNV);

// THêm NV
function themNV() {
  var nv = layThongTinNV();
  if (nv) {
    dsnv.themNV(nv);
    // render dsnv ra ngoài table
    renderTable(dsnv.arr);
    setLocalStorage();
  }
}
function setLocalStorage() {
  var dataString = JSON.stringify(dsnv.arr);
  localStorage.setItem("DSNV", dataString);
}
