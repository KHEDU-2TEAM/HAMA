
// showDetailPopupWithData 함수 정의
function showDetailPopupWithData(index) {

  // 클릭된 버튼에 따라 데이터를 가져옵니다. 여기서는 하나의 예시 데이터를 사용합니다.
        const detailContents = [
          {
            detail_cate1: "기타",
            detail_cate2: "서류작업",
            detail_pay: "200,000",
            detail_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a, nostrum cupiditate nemo totam consectetur qui quas neque impedit fuga repellat aperiam ullam nulla repudiandae veniam. Quod totam vitae voluptates."
          },
          // 다른 데이터 항목들을 필요에 따라 추가할 수 있습니다.
        ]


    //   if (index !== -1) {
    //     const $dialog = document.createElement('dialog');
    //     $dialog.setAttribute('id', 'detailPopup');
        
    //     // index를 사용하여 해당 버튼에 맞는 데이터를 가져옵니다.
    //     $dialog.innerHTML =
    //       `<div class="wrap_box">
    //         <div class="detail_title">
    //             <span><h2>견적서 조회2</h2> </span>
    //         </div>
    //         <div class="detail_content">
    //             <div class="detail_content_1">
    //                 <span id="content_1_1">서비스 분류2</span>
    //                 <span id="content_1_2">${detailContents[i].detail_cate1} > <span id="content_1_2_2">${detailContents[i].detail_cate2}</span></span>
    //             </div>  <!-- detail_content_2 삭제-->
    //             <div class="detail_content_3">
    //                 <span id="content_3_1">예상 비용</span>
    //                 <span id="content_3_2">총 
    //                     <span id="content_3_3">${detailContents[i].detail_pay}</span> 원</span>
    //             </div>
    //             <div class="detail_content_4">
    //                 <span id="content_4_1">상세 설명</span>
    //                 <span id="content_4_2">${detailContents[i].detail_description}
    //                 </span>
    //             </div>
    //         </div>
    //         <div class="detail_button">
    //             <button class="btn-confirm">확인</button>
    //         </div>
    //     </div>`;

    //     const $btnConfirm = $dialog.querySelector('.btn-confirm');
    //     $btnConfirm.addEventListener('click', e => {
    //       $dialog.close();
    //     });

    //     // dialog요소가 있으면 추가 없으면 기존 dialog 대체
    //     if (!document.getElementById('detailPopup')) {
    //       document.body.append($dialog);
    //     } else {
    //       document.body.replaceChild($dialog, document.querySelector('dialog'));
    //     }
    //     $dialog.showModal();
    //   }
    // };
  