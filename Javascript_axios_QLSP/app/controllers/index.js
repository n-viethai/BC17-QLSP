import { MenuSanPham } from "../models/MenuSanPham.js";
import { SanPham } from "../models/SanPham.js";

let menu = new MenuSanPham();
menu.layLocalStorage();
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

  menu.themSanPham(sanPham);
  menu.luuLocalStorage();
  console.log(menu.mangSanPham);
  menu.renderTable("tblDanhSachSP");
});

menu.renderTable("tblDanhSachSP");

window.xoaSanPham = function (i) {
  menu.xoaSanPham(i);
  menu.luuLocalStorage();
  menu.renderTable("tblDanhSachSP");
};
window.thongTinSP = function (index) {
  let laythongtin = menu.layThongTinSP(index);
  let arrInput = document.querySelectorAll(
    ".modal-body input ,.modal-body select"
  );
  for (let input of arrInput) {
    let { id, value } = input;
    input.value = laythongtin[id];
  }
};

document.getElementById("btnCapNhat").addEventListener("click", function () {
  let arrInput = document.querySelectorAll(
    ".modal-body input ,.modal-body select"
  );
  let sanPhamMoi = new SanPham();
  for (let input of arrInput) {
    let { id, value } = input;
    sanPhamMoi[id] = value;
  }
  console.log(sanPhamMoi);
  menu.SanPhamMoi(sanPhamMoi);
  menu.renderTable("tblDanhSachSP");
});
