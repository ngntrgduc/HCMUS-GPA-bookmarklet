# HCMUS-GPA-bookmarlet
Tính GPA trên Portal thông qua bookmarklet

### Cách tính GPA (Không tính học phần Giáo dục quốc phòng, Thể dục, Anh văn, Tin học cơ sở và những môn rớt)

![image](https://user-images.githubusercontent.com/47920109/170811023-856c84e6-80e2-43fe-90f7-a1f62a8d9629.png)


### Cách sử dụng
- Mở thanh bookmark/favorite bar trên trình duyệt của bạn lên bằng cách nhấn `Ctrl + Shift + B`
- Ấn [vô đây] để chuyển hướng tới trang web chứa script 
- Kéo cái nút lên thanh bookmark, đổi tên lại cho dễ nhận biết
- Đăng nhập vô Portal, vô phần Tra cứu kết quả học tập, chọn `--Tất cả--` ở phần `Năm học`
- Ấn vô cái bookmark bạn vừa kéo là xong :3


<!-- <a href="javascript: (() => {     var tinchi = document.querySelectorAll("td:nth-child(3)");     var monhoc = document.querySelectorAll("td:nth-child(2)");     var diem = document.querySelectorAll("td:nth-child(6)");     var diemtren = 0, diemduoi = 0;     for (var i = 1; i < tinchi.length; i++) {         if (             monhoc[i].innerText.includes("Thể dục") ||             monhoc[i].innerText.includes("Anh văn") ||             monhoc[i].innerText.includes("Tin học cơ sở") ||             monhoc[i].innerText.includes("Giáo dục quốc phòng") ||             Number(diem[i].innerText) < 5         ) {             continue;         }         diemtren += Number(tinchi[i].innerText) * Number(diem[i].innerText);         diemduoi += Number(tinchi[i].innerText);     }      alert("Tổng số tín chỉ đã cày được : " + diemduoi.toString()      + "\nĐiểm trung bình của bạn : " + (diemtren / diemduoi).toString()); })();">Hello</a>
 -->

### Credit
- [Source code tính GPA]() của một anh nào đó bên Khoa CNTT trường mình mà mình không biết tên :(( 
- [GPABookmarklet](https://github.com/dtrung98/GPABookmarklet): Chính cái repo này đã tạo cảm hứng để mình làm cái này (Mặc dù cái của mình nhìn không xịn bằng của anh ấy :v)
