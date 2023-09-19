// 이메일 중복확인 클릭 -> 메일전송 메세지
document.addEventListener("DOMContentLoaded", function () {
    const emailCheckBtn = document.getElementById("emailCheck");
    emailCheckBtn.addEventListener("click", () => {
        console.log("인증메일 발송");
    });
});

function isValidEmail(email) {
    // 간단한 이메일 유효성 검사를 수행합니다.
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
// 체크 박스 클릭 이벤트 처리 함수
function toggleCheckbox(checkbox) {
    const icon = checkbox.querySelector(".fa-regular");
    if (icon.classList.contains("fa-square")) {
        icon.classList.remove("fa-square");
        icon.classList.add("fa-square-check");
    } else {
        icon.classList.remove("fa-square-check");
        icon.classList.add("fa-square");
    }
}
// 전체 동의 체크 박스 클릭 이벤트 처리 함수
function toggleAllCheckboxes(checkbox) {
    const allCheckbox = checkbox.querySelector(".fa-regular");
    const eachCheckboxes = document.querySelectorAll(".each .fa-regular")
    if (allCheckbox.classList.contains("fa-square")) {
        allCheckbox.classList.remove("fa-square");
        allCheckbox.classList.add("fa-square-check")
        eachCheckboxes.forEach(function (icon) {
            icon.classList.remove("fa-square");
            icon.classList.add("fa-square-check");
        });
    } else {
        allCheckbox.classList.remove("fa-square-check");
        allCheckbox.classList.add("fa-square")
        eachCheckboxes.forEach(function (icon) {
            icon.classList.remove("fa-square-check");
            icon.classList.add("fa-square");
        });
    }
}
// 초기 상태에서 회원가입 버튼 비활성화
signUpBtn.disabled = true;

