<template>
    <div class="footer-main-div">
        <footer class="footer">
            <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
            </div>
            <ul class="social-icon">
                <li class="social-icon__item">
                    <a class="social-icon__link" href="#">
                        <i class="bi bi-facebook"></i>
                    </a>
                </li>
                <li class="social-icon__item">
                    <a class="social-icon__link" href="#">
                        <i class="bi bi-twitter"></i>
                    </a>
                </li>
                <li class="social-icon__item">
                    <a class="social-icon__link" href="#">
                        <i class="bi bi-pinterest"></i>
                    </a>
                </li>
                <li class="social-icon__item">
                    <a class="social-icon__link" href="#">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </li>
                <li class="social-icon__item">
                    <a class="social-icon__link" href="#">
                        <i class="bi bi-instagram"></i>
                    </a>
                </li>
            </ul>
            <ul class="menu">
                <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Users</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Tasks</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Companies</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Courses</a></li>

            </ul>
            <p>&copy;2024 Peek International | All Rights Reserved</p>
        </footer>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-main-div {
    display: flex;
    background: #273a52;
    justify-content: center;
    padding: 15px;
}

footer {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

.social-icon,
.menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
}

.social-icon__item,
.menu__item {
    list-style: none;
}

.social-icon__link {
    font-size: 2rem;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
}

.social-icon__link:hover {
    transform: translateY(-10px);
}

.menu__link {
    font-size: 1rem;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
    text-decoration: none;
    opacity: 0.75;
    font-weight: 300;
}

.menu__link:hover {
    opacity: 1;
}

.footer p {
    color: #fff;
    margin: 15px 0 10px 0;
    font-size: 0.6rem;
    font-weight: 300;
}
</style>