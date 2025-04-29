// Тохиромжтой HTML элементүүдийг сонгох
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const adminBtn = document.getElementById('adminBtn');
const loginBtn = document.getElementById('loginBtn');

// Навигаци
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

// Админ нэвтрэх
function showAdminSection() {
    const password = prompt('Нууц үгээ оруулна уу');
    if (password === 'admin123') {
        document.getElementById('adminSection').style.display = 'block';
    } else {
        alert('Нууц үг буруу байна!');
    }
}

// Админ хэсэгээс гарах
function exitAdmin() {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById('home').classList.add('active');
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('editSection').style.display = 'none';
    document.getElementById('adminPassword').value = ''; // Нууц үг арилгах
}

// Админ нэвтрэх хэсэгт нэвтрэх
adminBtn.addEventListener('click', showAdminSection);

// Хэрэглэгчийн нэр болон нууц үгийг шалгах (login хэсэг)
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "admin.html"; // Шилжих
    } else {
        alert("Хэрэглэгчийн нэр эсвэл нууц үг буруу байна.");
    }
}

// Админ хэсэгт нэвтрэх гэж оролдсон хэрэглэгчийн логин шалгалт
if (localStorage.getItem("isLoggedIn") === "true") {
    document.getElementById("adminSection").style.display = "block";
} else {
    document.getElementById("loginSection").style.display = "block"; // Амжилтгүй орж ирвэл нэвтрэх хэсэг
}

// Админ хэсэг хадгалах (change intro, phone, email)
function saveInfo() {
    document.getElementById('introText').textContent = document.getElementById('introInput').value;
    document.getElementById('emailText').textContent = document.getElementById('emailInput').value;
    document.getElementById('phoneText').textContent = document.getElementById('phoneInput').value;

    alert('Амжилттай хадгалагдлаа!');
    showSection('home'); // Хуудас руу шилжих
}
