// variable
const contentBox = document.getElementById("content-box"); 
const detailBox = document.getElementById("schedule-detail");
const detailBtn = document.getElementById("detail-btn");
const btnBox = document.getElementById("btn-box");

let contentBoxWidth = 350;


// func
function toggleDetailBox() {
    if (detailBtn.classList[0] == "close") {  // 닫힌 상태에서 열기
        contentBox.style.right = 0;  // 상세 페이지 숨기긴
        btnBox.style.right = 0;  // 버튼 옮기기

        detailBtn.classList.remove("close");
        detailBtn.classList.add("open");
    } 
    else if (detailBtn.classList[0] == "open") {  // 열린 상태에서 닫기
        contentBox.style.right = contentBoxWidth * -1 + "px";
        btnBox.style.right = contentBoxWidth * -1 + "px";

        detailBtn.classList.remove("open");
        detailBtn.classList.add("close");
    }
}


// event
detailBtn.addEventListener("click", toggleDetailBox); 