import { MenuSanPham } from "../models/MenuSanPham.js";
import { SanPham } from "../models/SanPham.js";

let menu = new MenuSanPham();
let spChinhSua = new SanPham();
menu.layLocalStorage();
menu.renderTable("tblDanhSachSP");

document.getElementById("btnThem").addEventListener("click", function () {
  document.querySelector(".modal-title").innerHTML = "Sảm Phẩm";
  let arrInput = document.querySelectorAll(
    ".modal-body input ,.modal-body select"
  );
  let sanPham = new SanPham();
  for (let input of arrInput) {
    let { id, value } = input;
    sanPham[id] = value;
  }
  sanPham.maSP = menu.mangSanPham.length + 1;

  menu.themSanPham(sanPham);
  menu.luuLocalStorage();
  console.log(menu.mangSanPham);
  menu.renderTable("tblDanhSachSP");
});


window.xoaSanPham = function (maSP) {
  menu.xoaSanPham(maSP);
  menu.luuLocalStorage();
  menu.renderTable("tblDanhSachSP");
};

window.thongTinSP = function (maSP) {
  spChinhSua = menu.layThongTinSP(maSP);
  let arrInput = document.querySelectorAll(
    ".modal-body input ,.modal-body select"
  );
  for (let input of arrInput) {
     let { id, value } = input;
    input.value = spChinhSua[id];
  }
};

document.getElementById("btnCapNhat").addEventListener("click", function () {
  let arrInput = document.querySelectorAll(
    ".modal-body input ,.modal-body select"
  );
  for (let input of arrInput) {
    let { id, value } = input;
    spChinhSua[id] = value;
  }
  menu.SuaThongTinSP(spChinhSua.maSP, spChinhSua);
  menu.luuLocalStorage();
  menu.renderTable("tblDanhSachSP");
});
