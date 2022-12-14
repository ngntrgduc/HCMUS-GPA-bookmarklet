javascript: (() => {
    var tinchi = document.querySelectorAll('td:nth-child(3)');
    var monhoc = document.querySelectorAll('td:nth-child(2)');
    var diem = document.querySelectorAll('td:nth-child(6)');
    var tongdiem = 0, tongtinchi = 0;
    for (var i = 1; i < tinchi.length; i++) {
        if (
            monhoc[i].innerText.includes('Thể dục') ||
            monhoc[i].innerText.includes('Anh văn') ||
            monhoc[i].innerText.includes('Tin học cơ sở') ||
            monhoc[i].innerText.includes('Giáo dục quốc phòng') ||
            !Number(diem[i].innerText) ||
            Number(diem[i].innerText) < 5
        ) {
            continue;
        }
        tongdiem += Number(tinchi[i].innerText) * Number(diem[i].innerText);
        tongtinchi += Number(tinchi[i].innerText);
    }
    var xeploai = '';
    var diemtrungbinh = tongdiem / tongtinchi;
    if (diemtrungbinh >= 9) {
        xeploai = 'Xuất xắc';
    } else if (diemtrungbinh >= 8 && diemtrungbinh < 9) {
        xeploai = 'Giỏi';
    } else if (diemtrungbinh >= 7 && diemtrungbinh < 8) {
        xeploai = 'Khá';
    } else if (diemtrungbinh >= 5 && diemtrungbinh < 7) {
        xeploai = 'Trung bình';
    } else if (diemtrungbinh >= 4 && diemtrungbinh < 5) {
        xeploai = 'Yếu';
    } else {
        xeploai = 'Kém';
    }
    alert('- Điểm trung bình của bạn : ' + (diemtrungbinh).toFixed(2).toString() + '\n- Tổng số tín chỉ đã cày được : ' + tongtinchi.toString() + '\n- Xếp loại : ' + xeploai);
})();