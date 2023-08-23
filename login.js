window.onload = function() {
    const form = document.querySelector('.form');
    const input_id = form.querySelector('input[name=id]');
    const input_pw = form.querySelector('input[name=pw]');
    const id_error = document.querySelector('.id_error');
    const pw_error = document.querySelector('.pw_error');
    const login_button = form.querySelector('.form__btn'); 
    
    form.addEventListener('submit', function(event) {
        id_error.style.display = input_id.value === '' ? 'block' : 'none';
        pw_error.style.display = input_pw.value === '' ? 'block' : 'none';
        
        if (input_id.value === '' || input_pw.value === '') {
            event.preventDefault(); // 폼 제출 막기
        }
    });
}