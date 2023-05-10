"use strict";
var markConverter = {
    "X": 0,
    "R": 0,
    "I": 0,
    "F": 0,
    "F+": 0.5,
    "D": 1,
    "D+": 1.5,
    "C": 2,
    "C+": 2.5,
    "B": 3,
    "B+": 3.5,
    "A": 4,
    "A+": 4
};
var displayer = document.createElement("a");
displayer.addEventListener("click", function () {
    let sum = 0;
    let course = 0;
    let table = document.querySelector("table#ctl00_ctl00_contentPane_MainPanel_MainContent_gvCourseMarks_DXMainTable");
    if (table) {
        table.querySelectorAll(".dxgvDataRow").forEach(function (e) {
            let c = +e.children[3].textContent;
            if (c != 0 && !isNaN(c)) {
                course += c;
                sum += markConverter[e.children[7].textContent.trim()] * c;
            }
        });
    }
    alert("CPA: " + (sum / course));
});
displayer.textContent = "Calculate CPA";
displayer.setAttribute("style", "cursor:pointer;margin-left: 20px;");
document.querySelector(".MainContentTitle>h3").appendChild(displayer);
//# sourceMappingURL=cpa_calculation.js.map