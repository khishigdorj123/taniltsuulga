const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const adminBtn = document.getElementById('adminBtn');

function showSection(id) {
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        showSection(target);
    });
});

adminBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('admin');
});

// Admin Login
function checkPassword() {
    const password = document.getElementById('adminPassword').value;
    if (password === 'admin123') {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('editSection').style.display = 'block';

        // Өмнөх утгуудыг дүүргэх
        document.getElementById('introInput').value = document.getElementById('introText').textContent;
        document.getElementById('emailInput').value = document.getElementById('emailText').textContent;
        document.getElementById('phoneInput').value = document.getElementById('phoneText').textContent;
    } else {
        alert('Нууц үг буруу байна!');
    }
}

// Хадгалах
function saveInfo() {
    document.getElementById('introText').textContent = document.getElementById('introInput').value;
    document.getElementById('emailText').textContent = document.getElementById('emailInput').value;
    document.getElementById('phoneText').textContent = document.getElementById('phoneInput').value;

    alert('Амжилттай хадгалагдлаа!');
    showSection('home');
}
