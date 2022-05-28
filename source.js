// tinh diem trung binh hcmus, vao trang diem va paste vao console.
// khong tinh anh van, quoc phong, the duc, tin hoc co so va nhung mon rot


var tinchi = document.querySelectorAll("td:nth-child(3)");
var monhoc = document.querySelectorAll("td:nth-child(2)");
var diem = document.querySelectorAll("td:nth-child(6)");
var diemtren = 0,
  diemduoi = 0;
for (var i = 1; i < tinchi.length; i++) {
  if (
    monhoc[i].innerText.includes("Thể dục") ||
    monhoc[i].innerText.includes("Anh văn") ||
    monhoc[i].innerText.includes("Giáo dục") ||
    monhoc[i].innerText.includes("Tin học cơ sở") ||
    Number(diem[i].innerText) < 5
  ) {
    continue;
  }
  diemtren += Number(tinchi[i].innerText) * Number(diem[i].innerText);
  diemduoi += Number(tinchi[i].innerText);
}
console.log("Tong tin chi : " + diemduoi);
console.log("Diem trung binh : " + diemtren / diemduoi);