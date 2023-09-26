/* 마우스 클릭에 따라 메뉴버튼 css 변화 */
document.addEventListener("DOMContentLoaded", function () {
    const wrapMenuBtn = document.getElementById("wrapMenuBtn");
    const wrapMenu = document.getElementById("wrapMenu");

    wrapMenu.style.display = "none"; // 초기에 숨겨진 상태로 설정

    wrapMenuBtn.addEventListener("click", function () {
        if (wrapMenu.style.display === "none") {
            wrapMenu.style.display = "block"; // 버튼을 누르면 보이게 설정
            wrapMenuBtn.style.color = "#0056b3"; // 배경 색상을 변경
        } else {
            wrapMenu.style.display = "none"; // 다시 버튼을 누르면 숨김
            wrapMenuBtn.style.color = "#00B0FA";
        }
    });
});

// writer 프로필
document.addEventListener("DOMContentLoaded", function () {
    // 제목 요소 가져오기
    const titleElement = document.querySelector(".content_title");

    // 게시글 제목 설정 (inner HTML 사용)
    titleElement.innerHTML = "대학 전공 원서 번역 해주실 분 찾아요";
});

document.addEventListener("DOMContentLoaded", function () {
    // 작성자 닉네임 요소 가져오기
    const writerNickElement = document.getElementById("writerNick");

    // 업로드 날짜 요소 가져오기
    const uploadDateElement = document.getElementById("uploadDate");

    // 작성자 닉네임 설정
    writerNickElement.innerHTML = "월급루루팡루루피";

    // 업로드 날짜 설정
    uploadDateElement.innerHTML = "2023-09-25"; // 업로드 날짜를 원하는 형식으로 수정
});