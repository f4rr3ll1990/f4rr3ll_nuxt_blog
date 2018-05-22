<template>
    <section class="about container"> 
        <h2 class="about__title">Обо мне</h2>
        <p class="about__text">
            Меня зовут Михаил, я фрилансер веб-разработчик из Украины. Имею стаж работы более 2 лет.
            Занимаюсь разработкой сайтов под ключ, версткой шаблонов и дальнейшей посадкой на CMS,
            так же адаптирую сайты под мобильные устройства.
            В основном работаю с CMS OpenCart и ModX. Пишу хорошо структурированный, валидный и чистый код
            с использованием современных технологий.
        </p>
        <div class="about-time">
            <h3 class="about__subtitle">Технологии которые я использую:</h3>
            <div class="about__time row">            
                <div class="about__time-days col-sm-6">
                    <h2>На работе:</h2>
                    <ul>
                        <li>PHP 🤬</li>
                        <li>MySQL 👨🏻‍💻</li>
                        <li>Opencart 🛒</li>
                        <li>ModX Revo 🤖</li>
                        <li>JQuery 🌈</li>
                    </ul>
                </div>
                <div class="about__time-nights col-sm-6">
                    <h2>На отдыхе:</h2>
                    <ul>
                        <li>Vue 🚀</li>
                        <li>Nuxt 🛸</li>
                        <li>Firebase 🔥</li>
                        <li>Node.js 💪🏻</li>
                        <li>Express 🚇</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>
.about
    margin-top: 3em
    margin-bottom: 3em
    &__title
        text-align: center
        font-weight: 300
        font-size: 2.5em
        @media (max-width: 767px)
            font-size: 2.5em
    &__subtitle
        text-align: center
    &__text
        max-width: 60vw
        margin-left: auto
        margin-right: auto
        text-align: center
        font-weight: 400
        font-size: 1.05em
        @media (max-width: 767px)
            max-width: 90vw
    &__time
        text-align: center
        margin-top: 50px
        border-top: 1px solid rgba(0, 0, 0, 0.3)
        h3
            margin-top: 15px
        ul
            list-style: none
            li
                padding: 30px 20px
                vertical-align: middle
                text-decoration: none
                font-size: 1.3em
        &-days
            border-right: 1px solid rgba(0, 0, 0, 0.3)
            

</style>