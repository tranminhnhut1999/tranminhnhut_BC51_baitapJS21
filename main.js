var dsnv = new DSNV();

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
  var LuongCB = getEle("luongCB").value;
  var ChucVu = getEle("chucvu").value;
  var glTrongThang = getEle("gioLam").value;

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
    <td>${nv.LuongCB}</td>
    <td>${nv.ChucVu}</td>
    <td>${nv.glTrongThang}</td>
    <td>
        <button class="btn btn-info" onclick="suaSV('${nv.TaiKhoan}')">Sửa</button>
        <button class="btn btn-danger" onclick="xoaSV('${nv.TaiKhoan}')">Xoá</button>
    </td>
</tr>
`;
  }
  getEle("tableDanhSach").innerHTML = content;
}

function xoaNV(TaiKhoan) {
  console.log(TaiKhoan);
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
// THêm NV
function themNV() {
  var nv = layThongTinNV();

  dsnv.themNV(nv);
  // render dsnv ra ngoài table
  renderTable(dsnv.arr);
  setLocalStorage();
}
function setLocalStorage() {
  var dataString = JSON.stringify(dsnv.arr);
  localStorage.setItem("DSNV", dataString);
}
