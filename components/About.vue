<template>
    <section class="about container"> 
        <h2 class="about__title">About Me</h2>
        <p class="about__text">I currently work at The Learning House in Lousville, KY as a member of the Web Team. While my official title is Front End Web Designer, the title of Front End Web Developer is far more accurate based on my active responsibilities.</p>
        <div class="d-none d-sm-block">
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
        font-size: 3.5em
        @media (max-width: 767px)
            font-size: 2.5em
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