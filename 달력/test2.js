// 변수 checkboxes = .checkbox 전체다
const checkboxes = document.querySelectorAll('.checkbox');
const maplesRadios = document.querySelectorAll('.maples');
// 변수 checkboxes를 반복한다 ,  checkbox의 이벤트가 바뀔때 만약 checkbox
// 의 체크된 속성이면 다른 체크박스를 체크하지않는다
checkboxes.forEach(radio => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      uncheckOtherCheckboxes(checkbox);
    }
  });
});
// 함수 uncheckOtherCheckboxes는 checkedCheckbox매개변수를 같는다
// 변수 checkboxes를 반복한다 만약 체크박스가 매개변수랑 다르면 
// 체크박스의 체크는 false다
function uncheckOtherCheckboxes(checkedCheckbox) {
  checkboxes.forEach(checkbox => {
    if (checkbox !== checkedCheckbox) {
      checkbox.checked = false;
    }
  });
}
