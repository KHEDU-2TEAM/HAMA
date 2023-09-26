const detailBtns = document.querySelectorAll(".button.detailBtn");     // "견적서 상세보기" 버튼들
const popup = document.getElementById("popup");                 // 팝업 창
const popupContent = document.querySelector(".popup-content");  // 팝업 내용
/* 
// 팝업 창에 견적서 내용을 표시하는 함수
function openPopup(post) {
  popupContent.innerHTML = `
        <h2>${post.nickname}님의 견적서 상세보기</h2>
        <p>${post.content}</p>
        <!-- 여기에 추가적인 견적서 정보를 표시할 수 있습니다. -->
    `;
  popup.style.display = "block";  // 팝업 창 표시
} */

// --------------------------------------
const postList = document.getElementById("postList");

// 견적서 목록 데이터
const posts = [
  {
    nickname: "스탠리 킴"
    , content: "안녕하세요 ! 한국어/영어 통번역 전문가 스탠리 킴 입니다. 다수의 통번역 저서 보유하고 있습니다. 채팅 주세요 ^^"
    , image: "/img/스탠리.png"
  },
  {
    nickname: "하마 후보1"
    , content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos non veritatis aut ipsa mollitia quos sit nam soluta incidunt rerum dignissimos odio delectus sed blanditiis sint veniam! Modi, impedit."
    , image: "img/image.png"
  },
  {
    nickname: "하마 후보2"
    , content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos non veritatis aut ipsa mollitia quos sit nam soluta incidunt rerum dignissimos odio delectus sed blanditiis sint veniam! Modi, impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos non veritatis aut ipsa mollitia quos sit nam soluta incidunt rerum dignissimos odio delectus sed blanditiis sint veniam! Modi, impedit."
    , image: "img/image.png"
  },
];

// 페이지가 로드될 때 견적서 목록을 화면에 표시합니다.
displayPosts();

/* // 요청서 개요 보기
// const msgList = document.getElementById("msgList");
const msgHama = [
  {
    category: "기타 > 서류작성"
    , introduce: `안녕하세요 ! 한국어/영어 통번역 전문가 스탠리 킴 입니다. 
              다수의 통번역 저서 보유하고 있습니다. 
              원하시는 날짜와 비용으로 조율 가능합니다.`
    , pay: "총 비용 200,000원"
    , detail: "바로 작업 가능합니다. 제 포트폴리오 확인해 보시고 연락주세요."
  },
  {
    category: "대분류 > 중분류"
    , introduce: `하마를 소개하세요`
    , pay: "예상 비용을 입력하세요"
    , detail: "상세 견적내용을 입력하세요"
  },
]; */

// 가상의 주소와 날짜 데이터
const userAddress = "서울시 강남구";
const userDate = "2023-08-24";

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts);
    }, 1000);
  });
}

// 견적서 목록을 화면에 표시하는 함수
async function displayPosts() {
  const fetchedPosts = await fetchPosts();

  // "견적서 상세보기" 버튼에 대한 클릭 이벤트 리스너 등록
  detailBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
      console.log("상세보기");
    });
  });

  // 각 견적서 아이템 생성 및 이벤트 리스너 등록
  fetchedPosts.forEach((post, index) => {
    const postItem = document.createElement("li");
    postItem.classList.add("post");
    postItem.innerHTML = `<img src="${post.image}" alt="프로필 사진">
      <div class="post-content">
        <h3>${post.nickname}</h3>
        <p class="post-text">${post.content}</p>
        <div class="user-info">
          <p>위치 ${userAddress}</p>
          <p>희망일 ${userDate}</p>
        </div> 
      </div>
      <div class="buttons">
        <button class="button detailBtn">견적서 상세보기</button>
        <button class="button chattingBtn">채팅 하기</button>
      </div>`;


    // "견적서 상세보기" 버튼에 대한 클릭 이벤트 리스너 등록
    postItem.querySelector('.detailBtn').addEventListener('click', () => {
      // 견적서 상세보기 이동하는 로직
      console.log('상세보기');

      // 클릭된 버튼에 따라 데이터를 가져옵니다. 여기서는 하나의 예시 데이터를 사용합니다.
      const detailContents = [
        {
          detail_cate1: "기타",
          detail_cate2: "서류작업",
          detail_pay: "200,000",
          detail_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a, nostrum cupiditate nemo totam consectetur qui quas neque impedit fuga repellat aperiam ullam nulla repudiandae veniam. Quod totam vitae voluptates."
        },
        {
          detail_cate1: "detail_cate1",
          detail_cate2: "detail_cate2",
          detail_pay: "detail_pay",
          detail_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a, nostrum cupiditate nemo totam consectetur qui quas neque impedit fuga repellat aperiam ullam nulla repudiandae veniam. Quod totam vitae voluptates."
        },
        // 다른 데이터 항목들을 필요에 따라 추가할 수 있습니다.
      ]


      if (index !== -1) {
        const $dialog = document.createElement('dialog');
        $dialog.setAttribute('id', 'detailPopup');

        // index를 사용하여 해당 버튼에 맞는 데이터를 가져옵니다.
        $dialog.innerHTML =
          `<div class="wrap_box">
            <div class="detail_title">
                <span><h2>견적서 조회</h2> </span>
            </div>
            <div class="detail_content">
                <div class="detail_content_1">
                    <span id="content_1_1">서비스 분류</span>
                    <span id="content_1_2">${detailContents[index].detail_cate1} > <span id="content_1_2_2">${detailContents[index].detail_cate2}</span></span>
                </div>  <!-- detail_content_2 삭제-->
                <div class="detail_content_3">
                    <span id="content_3_1">예상 비용</span>
                    <span id="content_3_2">총 
                        <span id="content_3_3">${detailContents[index].detail_pay}</span> 원</span>
                </div>
                <div class="detail_content_4">
                    <span id="content_4_1">상세 설명</span>
                    <span id="content_4_2">${detailContents[index].detail_description}
                    </span>
                </div>
            </div>
            <div class="detail_button">
                <button class="btn-confirm">확인</button>
            </div>
        </div>`;

        const $btnConfirm = $dialog.querySelector('.btn-confirm');
        $btnConfirm.addEventListener('click', e => {
          $dialog.close();
        });

        // dialog요소가 있으면 추가 없으면 기존 dialog 대체
        if (!document.getElementById('detailPopup')) {
          document.body.append($dialog);
        } else {
          document.body.replaceChild($dialog, document.querySelector('dialog'));
        }
        $dialog.showModal();
      }
    }
    );

    // "채팅 하기" 버튼에 대한 클릭 이벤트 리스너 등록
    postItem.querySelector('.chattingBtn').addEventListener('click', () => {
      // 채팅 화면으로 이동하는 로직
      const targetURL = "test.html";
      window.location.href = targetURL;
    }
    );

    // 생성한 견적서 아이템을 페이지에 추가
    postList.append(postItem);

  });
}
/* 
// 견적서 목록을 가져오는 비동기 함수
function fetchPosts() {
  return new Promise((resolve, reject) => {
    // 데이터를 비동기적으로 가져오는 비즈니스 로직
    setTimeout(() => {
      resolve(posts);
    }, 1000);
  });
} */




