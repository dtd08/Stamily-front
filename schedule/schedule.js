// variable
const scheduleBox = document.getElementById("schedule-detail");
const contentBox = document.getElementById("content-box"); 
const detailBtn = document.getElementById("detail-btn");
const btnBox = document.getElementById("btn-box");

let btnWidth = 40;
let contentBoxWidth = 350;

// func
function toggleDetailBox() {
    if (detailBtn.classList[0] == "close") {  // 닫힌 상태에서 열기
        scheduleBox.style.width = contentBoxWidth + "px";

        detailBtn.classList.remove("close");
        detailBtn.classList.add("open");
    } 
    else if (detailBtn.classList[0] == "open") {  // 열린 상태에서 닫기
        scheduleBox.style.width = btnWidth + "px";  // 상세 페이지 숨기기

        detailBtn.classList.remove("open");
        detailBtn.classList.add("close");
    }
}


// event
detailBtn.addEventListener("click", toggleDetailBox); 