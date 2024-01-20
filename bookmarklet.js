javascript: (() => {
    var credits = document.querySelectorAll('td:nth-child(3)');
    var courses = document.querySelectorAll('td:nth-child(2)');
    var grades = document.querySelectorAll('td:nth-child(6)');
    var grade = 0;
    var credit = 0;
    var totalGrades = 0;
    var totalCredits = 0;
    var totalCourses = 0;
    var fourPointScale = 0;
    var courseName = '';
    var data = {};
    
    function getFourPointScale(grade) {
        if (grade >= 9) return 4;
        if (grade < 3)  return 0;

        if (Number.isInteger(grade))
            return (Number(grade)-1)/2;

        grade = grade.toString().split('.');
        return (Number(grade[0])-1)/2 + Number(grade[1])*0.05;
    }

    for (var i = 1; i < credits.length; i++) {
        grade = Number(grades[i].innerText);
        courseName = courses[i].innerText;
        if (
            courseName.includes('Thể dục') ||
            courseName.includes('Anh văn') ||
            courseName.includes('Tin học cơ sở') ||
            courseName.includes('Giáo dục quốc phòng') ||
            !grade || grade < 5
        ) { continue; }
        
        credit = Number(credits[i].innerText);
        data[courseName] = [credit, grade];
    }

    Object.keys(data).forEach((course) => {
        credit = data[course][0];
        grade = data[course][1];
        totalGrades += credit * grade;
        totalCredits += credit;
        totalCourses += 1;
        fourPointScale += getFourPointScale(grade);
    });

    var type = '';
    var average = totalGrades / totalCredits;
    if      (average >= 9)                { type = 'Xuất xắc';   }
    else if (average >= 8 && average < 9) { type = 'Giỏi';       }
    else if (average >= 7 && average < 8) { type = 'Khá';        }
    else if (average >= 5 && average < 7) { type = 'Trung bình'; }
    else if (average >= 4 && average < 5) { type = 'Yếu';        }
    else                                  { type = 'Kém';        }
    
    alert(
        '- Điểm trung bình của bạn : ' + (average).toPrecision(5) + 
        ' (' + ((fourPointScale/totalCourses).toPrecision(2)) + '/4)' + '\n' + 
        '- Tổng số tín chỉ đã cày được : ' + totalCredits + '\n' + 
        '- Xếp loại : ' + type
    );
})();
