javascript: (() => {
    const credits = document.querySelectorAll('td:nth-child(3)');
    const courses = document.querySelectorAll('td:nth-child(2)');
    const grades = document.querySelectorAll('td:nth-child(6)');

    let totalGrades = 0;
    let totalCredits = 0;
    let totalCourses = 0;
    let totalFourScaleGrades = 0;
    const courseData = {};
    
    function getFourScaleGrade(grade) {
        if (grade >= 9) return 4;
        if (grade < 3) return 0;
        return 1 + (grade - 3)/2;
    }

    for (let i = 1; i < credits.length; i++) {
        const grade = Number(grades[i].innerText);
        const courseName = courses[i].innerText;
        if (
            courseName.includes('Thể dục') ||
            courseName.includes('Anh văn') ||
            courseName.includes('Tin học cơ sở') ||
            courseName.includes('Giáo dục quốc phòng') ||
            !grade || grade < 5
        ) { continue; }
        
        const credit = Number(credits[i].innerText);
        courseData[courseName] = [credit, grade];
    }

    Object.values(courseData).forEach(([credit, grade]) => {
        totalGrades += credit * grade;
        totalFourScaleGrades += credit * getFourScaleGrade(grade);
        totalCredits += credit;
        totalCourses += 1;
    });

    const GPA = totalGrades / totalCredits;
    const fourScaleGPA = totalFourScaleGrades / totalCredits;
    let type = '';
    if      (GPA >= 9)            { type = 'Xuất xắc';   }
    else if (GPA >= 8 && GPA < 9) { type = 'Giỏi';       }
    else if (GPA >= 7 && GPA < 8) { type = 'Khá';        }
    else if (GPA >= 5 && GPA < 7) { type = 'Trung bình'; }
    else if (GPA >= 4 && GPA < 5) { type = 'Yếu';        }
    else                          { type = 'Kém';        }
    
    alert(
        '- Điểm trung bình của bạn : ' + (GPA).toFixed(2) + 
        ' (' + ((fourScaleGPA).toFixed(2)) + '/4)' + '\n' + 
        '- Tổng số tín chỉ đã cày được : ' + totalCredits + '\n' + 
        '- Xếp loại : ' + type
    );
})();