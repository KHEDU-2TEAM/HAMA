const serviceButton = document.getElementById("serviceButton"); //서비스 카테고리 버튼
const serviceModal = document.getElementById("serviceModal");   //서비스 카테고리 모달창
const areaButton = document.getElementById("areaButton");       //지역 카테고리 버튼
const areaModal = document.getElementById("areaModal");         //지역 카테고리 모달창

const cleaning = document.getElementById("cleaning");   //서비스 > 청소 / 이사
const lesson = document.getElementById("lesson");       //서비스 > 레슨
const design = document.getElementById("design");       //서비스 > 디자인 / 개발
const helper = document.getElementById("helper");       //서비스 > 심부름 / 도우미
const animal = document.getElementById("animal");       //서비스 > 반려동물
const etc = document.getElementById("etc");             //서비스 > 기타
const busan = document.getElementById("busan");         //지역 > 부산
const ulsan = document.getElementById("ulsan");         //지역 > 울산
const gyeongnam = document.getElementById("gyeongnam"); //지역 > 경남
const seoul = document.getElementById("seoul");         //지역 > 서울
const daegu = document.getElementById("daegu");         //지역 > 대구
const gwangju = document.getElementById("gwangju"); //지역 > 광주
const jeju = document.getElementById("jeju"); //지역 > 제주

const service_subcatContainer = document.getElementById("service_subcat");  //서비스 하위 카테고리 모달
const area_subcatContainer = document.getElementById("area_subcat");        //지역 하위 카테고리 모달

serviceButton.addEventListener("click", () => {
    serviceModal.style.display = "block";
    areaModal.style.display = "none";               //서비스 모달 열 때 지역 모달 닫기
    service_subcatContainer.style.display = "none"  //서비스 모달 열 때 서비스 세부 모달 닫기
    area_subcatContainer.style.display = "none"     //서비스 모달 열 때 지역 세부 모달 닫기
});

areaButton.addEventListener("click", () => {
    serviceModal.style.display = "none";
    areaModal.style.display = "block";              //지역 모달 열 때 서비스 모달 닫기
    service_subcatContainer.style.display = "none"  //지역 모달 열 때 서비스 세부 모달 닫기
    area_subcatContainer.style.display = "none"     //지역 모달 열 때 지역 세부 모달 닫기
});

// 클릭한 서비스 카테고리를 저장할 변수
let selectedServiceCategory = "";

// 클릭한 지역 카테고리를 저장할 변수
let selectedAreaCategory = "";

cleaning.addEventListener("click", () => {
    // 청소 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedServiceCategory = "청소/이사";
    showservice_subcat(["가정집 청소", "사무실 청소", "홈 / 리빙", "포장 이사", "배수구 청소", "그 외"]);
    serviceModal.style.display = "none";
});

lesson.addEventListener("click", () => {
    // 레슨 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedServiceCategory = "레슨";
    showservice_subcat(["개인 PT", "골프 레슨", "수학 과외", "영어 과외", "악기 레슨", "그 외"]);
    serviceModal.style.display = "none";
});

design.addEventListener("click", () => {
    // 디자인 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedServiceCategory = "디자인";
    showservice_subcat(["일러스트 디자인", "웹 디자인", "소프트웨어 개발", "간판 디자인", "AI 개발", "그 외"]);
    serviceModal.style.display = "none";
});

helper.addEventListener("click", () => {
    // 심부름 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedServiceCategory = "심부름";
    showservice_subcat(["가사 도우미", "배달 심부름", "세탁 도우미", "벌레 잡기", "줄 서기 대행", "그 외"]);
    serviceModal.style.display = "none";
});

animal.addEventListener("click", () => {
    // 심부름 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedServiceCategory = "반려동물";
    showservice_subcat(["산책", "사진", "목욕", "미용", "호텔", "그 외"]);
    serviceModal.style.display = "none";
});

etc.addEventListener("click", () => {
    // 심부름 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedServiceCategory = "기타 등등";
    showservice_subcat(["대여, 대관", "공예 제작", "법률 도움", "금융 도움", "서류 작성", "그 외"]);
    serviceModal.style.display = "none";
});

busan.addEventListener("click", () => {
    // 부산 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedAreaCategory = "부산광역시";
    areaModal.style.display = "none";
    showarea_subcat(["전체", "영도구", "부산진구", "동래구", "해운대구", "사하구", "금정구", "강서구", "연제구", "수영구", "사상구"]);
});

ulsan.addEventListener("click", () => {
    // 울산 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedAreaCategory = "울산광역시";
    areaModal.style.display = "none";
    showarea_subcat(["전체", "중구", "남구", "동구", "북구", "울주군"]);
});

gyeongnam.addEventListener("click", () => {
    // 경남 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedAreaCategory = "경상남도";
    areaModal.style.display = "none";
    showarea_subcat(["창원시", "진주시", "통영시", "사천시", "김해시", "밀양시", "거제시", "양산시"]);
});

seoul.addEventListener("click", () => {
    // 서울 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedAreaCategory = "서울특별시";
    areaModal.style.display = "none";
    showarea_subcat(["전체", "종로구", "용산구", "성동구", "광진구", "동대문구", "성북구", "도봉구", "노원구", "은평구"]);
});

daegu.addEventListener("click", () => {
    // 대구 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedAreaCategory = "대구광역시";
    areaModal.style.display = "none";
    showarea_subcat(["전체", "중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군", "군위군"]);
});

gwangju.addEventListener("click", () => {
    // 광주 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedAreaCategory = "광주광역시";
    areaModal.style.display = "none";
    showarea_subcat(["전체", "동구", "서구", "남구", "북구", "광산구"]);
});

jeju.addEventListener("click", () => {
    // 제주 카테고리를 클릭했을 때 수행할 동작을 추가
    selectedAreaCategory = "제주도";
    areaModal.style.display = "none";
    showarea_subcat(["전체", "제주시", "서귀포시"]);
});

// 세부 카테고리를 표시하는 함수
function showservice_subcat(service_subcat) {
    // serviceButton.innerHTML = `${selectedServiceCategory}`;
    service_subcatContainer.innerHTML = "<h3>세부 카테고리</h3>";
    const ul = document.createElement("ul");
    service_subcat.forEach((ser_subcategory) => {
        const li = document.createElement("li");
        li.textContent = `${ser_subcategory}`;
        // li 항목 하나하나를 클릭하면 모달 닫김 & 밖 화면 정상화
        li.addEventListener("click", () => {
            const firstTwoLetters = selectedServiceCategory.slice(0, 10); // 대분류의 앞의 두 글자 추출
            selectedServiceCategory = `${firstTwoLetters}`;
            serviceButton.innerHTML = `${selectedServiceCategory}`;
            serviceModal.style.display = "none";
            service_subcatContainer.style.display = "none";
            layerWrapEle.classList.remove('active');
            serviceButton.classList.remove('active');
            serviceButton.style.border = "2px solid rgb(0, 146, 250)"; // 원하는 배경색으로 변경
        });
        ul.appendChild(li);
    });
    service_subcatContainer.appendChild(ul);
    // 서비스 세부 모달이 열리면 서비스 모달 닫기
    service_subcatContainer.style.display = "block";
}

function showarea_subcat(area_subcat) {
    area_subcatContainer.innerHTML = "<h3>세부 카테고리</h3>";
    const ul = document.createElement("ul");
    area_subcat.forEach((area_subcategory) => {
        const li = document.createElement("li");
        li.textContent = `${area_subcategory}`;
        // li 항목 하나하나를 클릭하면 모달 닫김 & 밖 화면 정상화
        li.addEventListener("click", () => {
            // 클릭한 지역 세부 카테고리를 selectedAreaCategory에 저장
            const firstTwoLetters = selectedAreaCategory.slice(0, 2); // 대분류의 앞의 두 글자 추출
            selectedAreaCategory = `${firstTwoLetters}/${area_subcategory}`;
            areaButton.innerHTML = `${selectedAreaCategory}`;
            areaModal.style.display = "none";
            area_subcatContainer.style.display = "none";
            layerWrapEle.classList.remove('active');
            areaButton.classList.remove('active');
            areaButton.style.border = "2px solid rgb(0, 146, 250)";
        });
        ul.appendChild(li);
    });
    area_subcatContainer.appendChild(ul);
    // 지역 세부 모달이 열리면 지역 모달 닫기
    area_subcatContainer.style.display = "block";
}

//모달창이 열릴 때 모달창을 제외한 배경색을 회색으로 주기
let btnEle1 = document.querySelector('.service_category');
let btnEle2 = document.querySelector('.area_category');
//배경색을 주기위한 전체화면 박스
let layerWrapEle = document.querySelector('.layer_wrap__category');

// 서비스 모달창이 열릴 때 박스에 효과주기
btnEle1.addEventListener('click', e => {
    layerWrapEle.classList.add('active');
    serviceButton.classList.add('active');
});

// 지역 모달창이 열릴 때 박스에 효과주기
btnEle2.addEventListener('click', e => {
    layerWrapEle.classList.add('active');
    areaButton.classList.add('active');
});

// 외부 박스를 클릭했을 때 박스 효과 리셋
layerWrapEle.addEventListener('click', e => {
    if (e.target === layerWrapEle) {
        layerWrapEle.classList.remove('active');
        serviceButton.classList.remove('active');
        areaButton.classList.remove('active');
    }
});

// 모달 외부 클릭 시 모달 닫기
window.addEventListener("click", (e) => {
    layerWrapEle.addEventListener('click', e => {
        serviceModal.style.display = "none";
        areaModal.style.display = "none";
        service_subcatContainer.style.display = "none";
        area_subcatContainer.style.display = "none";
    })
});