<!DOCTYPE html>
<html lang="mn">
<head>
    <meta charset="UTF-8">
    <title>Миний Танилцуулга</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">Баттулга Хишигдорж</div>
            <nav>
                <ul>
                    <li><a href="#" class="nav-link" data-target="home">Нүүр</a></li>
                    <li><a href="#" class="nav-link" data-target="about">Танилцуулга</a></li>
                    <li><a href="#" class="nav-link" data-target="skills">Ур чадвар</a></li>
                    <li><a href="#" class="nav-link" data-target="contact">Холбоо барих</a></li>
                    <li><a href="#" id="adminBtn">Админ</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home" class="section active">
        <div class="hero-content">
            <h1>Сайн байна уу?</h1>
            <p id="introText">Намайг Хишигдорж гэдэг. Би вэб хөгжүүлэлт, программ хангамж сонирхдог оюутан.</p>
        </div>
    </section>

    <section id="about" class="section">
        <h2>Танилцуулга</h2>
        <p id="aboutText">Би программ хангамжийн чиглэлээр суралцдаг бөгөөд веб хөгжүүлэлт, UI/UX дизайн, мэдээллийн системд сонирхолтой.</p>
    </section>

    <section id="skills" class="section">
        <h2>Ур чадвар</h2>
        <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>PHP & MySQL</li>
            <li>Laravel, WordPress</li>
            <li>Bootstrap, UI/UX дизайн</li>
        </ul>
    </section>

    <section id="contact" class="section">
        <h2>Холбоо барих</h2>
        <p id="emailText">battulga@example.com</p>
        <p id="phoneText">88888888</p>
    </section>

    <!-- Админ хэсэг -->
    <section id="admin" class="section">
        <h2>Админ хэсэг</h2>
        <div id="loginSection">
            <input type="password" id="adminPassword" placeholder="Нууц үг..." />
            <button onclick="checkPassword()">Нэвтрэх</button>
        </div>
        <div id="editSection" style="display:none;">
            <textarea id="introInput" placeholder="Танилцуулга..."></textarea>
            <input type="text" id="emailInput" placeholder="Имэйл хаяг..." />
            <input type="text" id="phoneInput" placeholder="Утасны дугаар..." />
            <button onclick="saveInfo()">Хадгалах</button>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>© 2025 Баттулга Хишигдорж. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
