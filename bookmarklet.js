javascript: (() => {
    var tinchi = document.querySelectorAll('td:nth-child(3)');
    var monhoc = document.querySelectorAll('td:nth-child(2)');
    var diem = document.querySelectorAll('td:nth-child(6)');
    var diemtren = 0, diemduoi = 0;
    for (var i = 1; i < tinchi.length; i++) {
        if (
            monhoc[i].innerText.includes('Thể dục') ||
            monhoc[i].innerText.includes('Anh văn') ||
            monhoc[i].innerText.includes('Tin học cơ sở') ||
            monhoc[i].innerText.includes('Giáo dục quốc phòng') ||
            Number(diem[i].innerText) < 5
        ) {
            continue;
        }
        diemtren += Number(tinchi[i].innerText) * Number(diem[i].innerText);
        diemduoi += Number(tinchi[i].innerText);
    }
    var xeploai = '';
    if (diemtren / diemduoi >= 9) {
        xeploai = 'Xuất xắc';
    } else if (diemtren / diemduoi >= 8 && diemtren / diemduoi < 9) {
        xeploai = 'Giỏi';
    } else if (diemtren / diemduoi >= 7 && diemtren / diemduoi < 8) {
        xeploai = 'Khá';
    } else if (diemtren / diemduoi >= 5 && diemtren / diemduoi < 7) {
        xeploai = 'Trung bình';
    } else if (diemtren / diemduoi >= 4 && diemtren / diemduoi < 5) {
        xeploai = 'Yếu';
    } else {
        xeploai = 'Kém';
    }
    alert('- Tổng số tín chỉ đã cày được : ' + diemduoi.toString() + '\n- Điểm trung bình của bạn : ' + (diemtren / diemduoi).toFixed(2).toString() + '\n- Xếp loại : ' + xeploai);
})();