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
    if(localStorage.getItem(DANH_SACH_SAN_PHAM)) {
      this.mangSanPham = JSON.parse(localStorage.getItem(DANH_SACH_SAN_PHAM));
    }
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
                  <button class="btn btn-info" onclick="thongTinSP(${sp.maSP})" data-toggle="modal" data-target="#myModal">Sửa</button>
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
  layThongTinSP = function (maSP) {
    console.log(maSP);
    const index = this.mangSanPham.findIndex(sp => sp.maSP == maSP)
    if(index !== -1) {
      return this.mangSanPham[index];
    }
    return null;     
  };
  SuaThongTinSP = function (maSP, spChinhSua) {
    const index = this.mangSanPham.findIndex(sp => sp.maSP === maSP);
    this.mangSanPham[index] = spChinhSua;
  };
}
