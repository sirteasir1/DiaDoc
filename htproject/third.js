document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.classList.add('fade-overlay');
    overlay.textContent = 'Загрузка...'; 
    document.body.appendChild(overlay);

    window.onload = function() {
        overlay.classList.add('hidden');
        body.classList.add('loaded');
    };
});


document.addEventListener('DOMContentLoaded', function() {
    const formTitle = document.getElementById('formTitle');
    const submitBtn = document.getElementById('submitBtn');
    const toggleFormLink = document.getElementById('toggleForm');
    const toggleText = document.getElementById('toggleText');
    const nameInput = document.getElementById('name');
    const lastnameInput = document.getElementById('lastname');
    const ageInput = document.getElementById('age');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const googleLogin = document.querySelector('.google-login');
    const appleLogin = document.querySelector('.apple-login');

    let isLogin = true;

    function updateFormDisplay() {
        nameInput.style.display = isLogin ? 'none' : 'block';
        lastnameInput.style.display = isLogin ? 'none' : 'block';
        ageInput.style.display = isLogin ? 'none' : 'block';
        formTitle.textContent = isLogin ? 'Вход' : 'Регистрация';
        submitBtn.textContent = isLogin ? 'Войти' : 'Зарегистрироваться';
        toggleText.innerHTML = isLogin ? 'Нет аккаунта? <a href="#" id="toggleForm">Зарегистрироваться</a>' : 'Уже есть аккаунт? <a href="#" id="toggleForm">Войти</a>';

        const newToggleFormLink = document.getElementById('toggleForm');
        if (newToggleFormLink) {
            newToggleFormLink.addEventListener('click', toggleForm);
        }
    }

    function toggleForm(event) {
        event.preventDefault();
        isLogin = !isLogin;
        updateFormDisplay();
    }

    updateFormDisplay(); 

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        const name = nameInput.value;
        const lastname = lastnameInput.value;
        const age = ageInput.value;

        if (isLogin) {
            console.log('Попытка входа с:', email, password);
            alert('Login completed.');
            
        } else {
            console.log('Попытка регистрации с:', email, password, name, lastname, age);
            alert('Registration completed?.');
           
        }
    });

    if (toggleFormLink) {
        toggleFormLink.addEventListener('click', toggleForm);
    }

    if (googleLogin) {
        googleLogin.addEventListener('click', function() {
            alert('Переход к авторизации через Google (не реализовано).');

        });
    }

    if (appleLogin) {
        appleLogin.addEventListener('click', function() {
            alert('Переход к авторизации через Apple (не реализовано).');
            
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    
    document.body.classList.add('loaded');

    
    const fadeOverlay = document.querySelector('.fade-overlay');
    if (fadeOverlay) {
        window.addEventListener('load', function() {
            fadeOverlay.classList.add('hidden');
            setTimeout(() => {
                fadeOverlay.style.display = 'none';
            }, 600); 
        });
    }

    const formTitle = document.getElementById('formTitle');
    const submitBtn = document.getElementById('submitBtn');
    const toggleFormLink = document.getElementById('toggleForm');
    const toggleText = document.getElementById('toggleText');
    const nameInput = document.getElementById('name');
    const lastnameInput = document.getElementById('lastname');
    const ageInput = document.getElementById('age');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const googleLogin = document.querySelector('.google-login');
    const appleLogin = document.querySelector('.apple-login');

    let isLogin = true;

    function updateFormDisplay() {
        nameInput.style.display = isLogin ? 'none' : 'block';
        lastnameInput.style.display = isLogin ? 'none' : 'block';
        ageInput.style.display = isLogin ? 'none' : 'block';
        formTitle.textContent = isLogin ? 'Вход' : 'Регистрация';
        submitBtn.textContent = isLogin ? 'Войти' : 'Зарегистрироваться';
        toggleText.innerHTML = isLogin ? 'Нет аккаунта? <a href="#" id="toggleForm">Зарегистрироваться</a>' : 'Уже есть аккаунт? <a href="#" id="toggleForm">Войти</a>';

        const newToggleFormLink = document.getElementById('toggleForm');
        if (newToggleFormLink) {
            newToggleFormLink.addEventListener('click', toggleForm);
        }
    }

    function toggleForm(event) {
        event.preventDefault();
        isLogin = !isLogin;
        updateFormDisplay();
    }

    updateFormDisplay(); 

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        const name = nameInput.value;
        const lastname = lastnameInput.value;
        const age = ageInput.value;

        if (isLogin) {
            console.log('Попытка входа с:', email, password);
            window.location.href = 'first.html'; 
        } else {
            console.log('Попытка регистрации с:', email, password, name, lastname, age);
            window.location.href = 'first.html'; 
        }
    });

    if (toggleFormLink) {
        toggleFormLink.addEventListener('click', toggleForm);
    }

    if (googleLogin) {
        googleLogin.addEventListener('click', function() {
            alert('Переход к авторизации через Google');
            
        });
    }

    if (appleLogin) {
        appleLogin.addEventListener('click', function() {
            alert('Переход к авторизации через Apple (не реализовано).');
            
        });
    }
});