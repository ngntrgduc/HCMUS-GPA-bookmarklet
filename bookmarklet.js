javascript: (() => {
    var tinchi = document.querySelectorAll("td:nth-child(3)");
    var monhoc = document.querySelectorAll("td:nth-child(2)");
    var diem = document.querySelectorAll("td:nth-child(6)");
    var diemtren = 0, diemduoi = 0;
    for (var i = 1; i < tinchi.length; i++) {
        if (
            monhoc[i].innerText.includes("Thể dục") ||
            monhoc[i].innerText.includes("Anh văn") ||
            monhoc[i].innerText.includes("Tin học cơ sở") ||
            monhoc[i].innerText.includes("Giáo dục quốc phòng") ||
            Number(diem[i].innerText) < 5
        ) {
            continue;
        }
        diemtren += Number(tinchi[i].innerText) * Number(diem[i].innerText);
        diemduoi += Number(tinchi[i].innerText);
    }
    alert("Số tín chỉ đã cày được : " + diemduoi.toString() + "\nĐiểm trung bình của bạn : " + (diemtren / diemduoi).toString());
})();