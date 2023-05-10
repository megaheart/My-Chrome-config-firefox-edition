"use strict";
class SubjectClass {
    constructor(_classId, _classType, _name, _subjectId, _credit) {
        this.credit = _credit;
        this.classId = _classId;
        this.name = _name;
        this.subjectId = _subjectId;
        this.classType = _classType;
    }
}
class LearningTime {
    constructor(_class, _time, _dayOfWeek, _weeks, _place) {
        this.class = _class;
        this.time = _time;
        this.dayOfWeek = _dayOfWeek;
        this.weeks = _weeks;
        this.place = _place;
    }
}
var subjectClassDictionary = {};
document.querySelectorAll("#ctl00_ctl00_contentPane_MainPanel_MainContent_gvRegisteredList_DXMainTable>tbody>tr.dxgvDataRow_Mulberry").forEach(element => {
    let infosElements = element.querySelectorAll("td.dxgv");
    let execrisesClassId = infosElements[0].innerHTML;
    let theoryClassId = infosElements[1].innerHTML;
    if (theoryClassId === execrisesClassId) {
        subjectClassDictionary[theoryClassId] = new SubjectClass(theoryClassId, "LT + BT", infosElements[2].innerHTML, infosElements[3].innerHTML, infosElements[9].innerHTML);
    }
    else {
        subjectClassDictionary[theoryClassId] = new SubjectClass(theoryClassId, "LT", infosElements[2].innerHTML, infosElements[3].innerHTML, infosElements[9].innerHTML);
        subjectClassDictionary[execrisesClassId] = new SubjectClass(execrisesClassId, "BT", infosElements[2].innerHTML, infosElements[3].innerHTML, infosElements[9].innerHTML);
    }
});
var timetable = [];
document.querySelectorAll("#ctl00_ctl00_contentPane_MainPanel_MainContent_gvTimeTable_DXMainTable>tbody>tr.dxgvDataRow_Mulberry").forEach(element => {
    let infosElements = element.querySelectorAll("td.dxgv");
    timetable.push(new LearningTime(subjectClassDictionary[infosElements[4].innerHTML], infosElements[1].innerHTML, infosElements[0].innerHTML, infosElements[2].innerHTML, infosElements[3].innerHTML));
});
var output = "<html><head><style>body {background: black;}table{font-family:'Trebuchet MS',Arial,Helvetica,sans-serif;border-collapse:collapse;width:800px;margin:15px auto;background:white}table td,table th{border:1px solid #ddd;padding:8px}table tr:nth-child(even){background-color:#f2f2f2}table tr:hover{background-color:#ddd}table th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4caf50;color:white}table>tbody>tr>td:first-child,table>tbody>tr>td:nth-child(5),table>tbody>tr>td:nth-child(6),table>tbody>tr>td:nth-child(7){text-align: center;}</style></head><body><table><tbody><tr><th>Thứ</th><th>Thời gian</th><th>Tuần học</th><th>Môn</th><th>Mã môn</th><th>Lớp học</th><th>Mã lớp</th></tr>";
timetable.forEach(element => {
    let row = "<tr>";
    row += "<td>" + element.dayOfWeek + "</td>";
    row += "<td>" + element.time + "</td>";
    row += "<td>" + element.weeks + "</td>";
    row += "<td>" + element.class.name + "</td>";
    row += "<td>" + element.class.subjectId + "</td>";
    row += "<td>" + element.place + "</td>";
    row += "<td>" + element.class.classId + "</td>";
    row += "</tr>";
    output += row;
});
output += "</tbody></table></body></html>";
var downloadBtn = document.createElement("a");
downloadBtn.href = 'data:text/html; charset=utf8, ' + encodeURIComponent(output);
downloadBtn.download = 'tkb HUST HK xxxx-nn.html';
downloadBtn.setAttribute("style", "cursor:pointer;margin-left: 20px;");
downloadBtn.append("Download Timetable");
document.querySelector(".MainContentTitle>h3").appendChild(downloadBtn);
console.log("Export HUST Timetable is running.");
//# sourceMappingURL=export_hust_timetable.js.map