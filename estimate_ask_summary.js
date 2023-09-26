// estimate_ask_summary.js 파일 내용
document.addEventListener("DOMContentLoaded", function () {
  // DOM이 로드될 때 실행됩니다.

  // "견적 요청서 요약"을 가리키는 요소를 찾습니다.
  const summaryElement = document.querySelector(".title__postlist_ask_hama_summary");

  // 요소가 존재하면 내용을 추가합니다.
  if (summaryElement) {
    summaryElement.innerHTML = `
        <div class="summary_wrap">
          <div class="summary1 category">
            <div id="summary1_1">기타 > </div>
            <div id="summary1_2"> &nbsp;서류작성</div>
          </div>
          <div class="summary2 date">
            <div id="summary2_1">견적 요청일</div>
            <div id="summary2_2">2023. 08. 22.</div>
          </div>
          <div class="summary3 deadLine">
            <div id="summary3_1"><i class="fa-solid fa-hourglass-half"></i> 마감까지 2일 19시간 남았어요</div>
          </div>
          <div class="summary4 btns">
            <button class="summary4_1">견적 요청서</button>
            <button class="DLBtn">요청 마감</button>
          </div>
        </div>
      `;

    // 내 견적요청서 버튼
    const $myBtn = document.querySelector(".summary4_1");

    // "내 요청서 보기" 버튼에 대한 클릭 이벤트 리스너 등록
    $myBtn.addEventListener('click', e => {
      console.log('내 요청서 보기')
      const $detailPopup = document.getElementById('detailPopup');
      const $dialog = document.createElement('dialog');
      $dialog.setAttribute('id', 'detailPopup');

      // 프로필 사진 동적으로 배치
      const profileData = [
        { id: 1, name: "사용자 1", image: "img/루루팡.png" },
        // { id: 2, name: "사용자 2", image: "img/다른이미지.png" }
      ];

      // 이미지 요소를 동적으로 생성하고 설정
      const profileImageElement = document.createElement('img');
      profileImageElement.id = 'my_grid1_1'; // 이미지의 ID 설정
      profileImageElement.alt = '프로필 이미지'; // 이미지의 대체 텍스트 설정

      // 이미지를 설정할 사용자의 인덱스를 선택할 변수 i를 정의
      const i = 0; // 예제에서는 두 번째 사용자 (인덱스 1)의 이미지를 설정

      // i에 따라 해당 사용자의 이미지를 설정
      profileImageElement.src = profileData[i].image;

      // 회원 DB에 따라 내용 입력
      const myContents = [
        {
          my_nickname: "월급루루팡루루피"
          , my_hope: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a, nostrum cupiditate nemo totam consectetur qui quas neque impedit fuga repellat aperiam ullam nulla repudiandae veniam. Quod totam vitae voluptates."
          , my_category: "기타 > 서류작업"
          , my_location: "울산 남구"
          , my_date: "2023.09.11"
        }
      ];
      $dialog.innerHTML =
        `<div class="estimate_ask_my_wrap">
      <h3 class="my_h3">내 견적 요청서</h3>
      <div class="estimate_ask_my_content">
          <div class="my_grid1 my_photo">
              <img id="my_grid1_1" src="">
          </div>
          <div class="my_grid2 my_nickname">
              <div id="my_grid2_1">${myContents[i].my_nickname}</div>
          </div>
          <div class="my_grid3 my_hope">
              <div id="my_grid3_1">희망사항</div>
              <div id="my_grid3_2">
                  ${myContents[i].my_hope}
              </div>
          </div>
          <div class="my_grid4 my_category">
              <div id="my_grid4_1">분&nbsp;&nbsp;야</div>
              <div id="my_grid4_2">${myContents[i].my_category}</div>
          </div>
          <div class="my_grid5 my_location">
              <div id="my_grid5_1">지&nbsp;&nbsp;역</div>
              <div id="my_grid5_2">${myContents[i].my_location}</div>
          </div>
          <div class="my_grid6 my_date">
              <div id="my_grid6_1">견적 요청일</div>
              <div id="my_grid6_2">${myContents[i].my_date}</div>
          </div>
      </div>
      <div class="modifyBtn">
          <a href="./test.html"> 수정</a> 
      </div>
  </div>`;

      // 동적으로 생성한 프로필 이미지 요소를 my_grid1 my_photo 요소에 추가
      const myPhotoElement = $dialog.querySelector('.my_grid1.my_photo');
      myPhotoElement.appendChild(profileImageElement);

      // 팝업을 띄우고 모달 백그라운드를 클릭했을 때 팝업을 닫도록 이벤트 리스너 추가
      document.body.addEventListener('click', closeMy);

      // 팝업을 닫는 함수
      function closeMy(event) {
        // 팝업 외부를 클릭하고, 팝업 요소가 열려 있는 경우 팝업을 닫음
        if (event.target === $dialog && $dialog.open) {
          $dialog.close();
          document.body.removeEventListener('click', closePopupOnClickOutside);
        }
      }

      // 모달창 중앙으로 정렬
      $dialog.style.position = 'fixed';
      $dialog.style.top = '50%';
      $dialog.style.left = '50%';
      $dialog.style.transform = 'translate(-50%, -50%)'; // 중앙 정렬

      // "수정 하기" 버튼에 대한 클릭 이벤트 리스너 등록
      const $modifyBtn = $dialog.querySelector(".modifyBtn");
      $modifyBtn.addEventListener('click', e => {
        console.log('수정하기');
        // 수정 화면으로 이동하는 로직
        const targetURL = "test.html";
        window.location.href = targetURL;
      });

      // dialog 요소가 있으면 추가 없으면 기존 dialog 대체
      if (!document.getElementById('detailPopup')) {
        document.body.append($dialog);
      } else {
        document.body.replaceChild($dialog, document.querySelector('dialog'));
      }
      $dialog.showModal();
    });

    // 요청 마감 버튼
    const $DLBtn = document.querySelector(".DLBtn");

    // 모달 요소
    const modal = document.getElementById("myModal");

    // 요청 마감 버튼 클릭 시 모달 열기
    $DLBtn.addEventListener("click", e => {
      console.log('마감');
      modal.style.display = "block";
    });

    // 모달 안의 버튼들
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    // "네" 버튼을 클릭할 때의 동작
    yesBtn.addEventListener("click", function () {
      const summary3_1 = document.getElementById("summary3_1");
      summary3_1.textContent = "요청이 마감된 견적서입니다";
      summary3_1.style.color = "#ccc";
      modal.style.display = "none";

      // '요청마감' 버튼 비활성화
      $DLBtn.disabled = true;
      $DLBtn.style.backgroundColor = "#eee";
      $DLBtn.style.color = "black";
      $DLBtn.style.cursor= "default";

    });

    // "아니요" 버튼을 클릭할 때의 동작
    noBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

  }
});


