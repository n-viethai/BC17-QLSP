import { DANH_SACH_SAN_PHAM } from "../../util/Setting.js";


export class MenuSanPham {
  mangSanPham = [];
  constructor() {}

  themSanPham = function (sp) {
    this.mangSanPham.push(sp);
  };

  luuLocalStorage = function () {
    localStorage.setItem(DANH_SACH_SAN_PHAM, JSON.stringify(this.mangSanPham));
  };

  layLocalStorage = function () {
    this.mangSanPham = JSON.parse(localStorage.getItem(DANH_SACH_SAN_PHAM));
  };

  renderTable = function (id) {
    let sum = "";
    this.mangSanPham.map(function (sp, i) {
      let tagTr = `
            <tr>
                <td>${i + 1}</td>
                <td>${sp.TenSP}</td>
                <td>${sp.GiaSP}</td>
                <td><img width ="100px" src="${sp.HinhSP}"/></td>
                <td>${sp.loaiSP}</td>
                <td>
                  <button onclick="xoaSanPham(${i})" class="btn btn-danger">Xóa</button>
                  <button class="btn btn-info" onclick="thongTinSP(${i})" data-toggle="modal" data-target="#myModal">Sửa</button>
                </td>
            </tr>
        `;
      sum = sum + tagTr;
    });
    document.getElementById(id).innerHTML = sum;
  };
  xoaSanPham = function (i) {
    this.mangSanPham.splice(i, 1);
  };
  layThongTinSP = function (index) {
    for (let key in this.mangSanPham) {
      if (key == index) {
        return this.mangSanPham[key];
      }
    }
  };
  SuaThongTinSP = function (index) {
    for (let key in this.mangSanPham) {
      if (key == index) {
        return this.mangSanPham[key];
      }
    }
  };
  SanPhamMoi = function (sanPhamMoi, index) {
    let monAnCu = this.layThongTinSP(index);
    if (monAnCu) {
      for (let key in monAnCu) {
        monAnCu[key] = sanPhamMoi[key];
      }
    }
  };
}
