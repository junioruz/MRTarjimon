<template>
    <div class="info container">
        <div class="info__line">
            <div class="line"></div>
        </div>
        <div class="about__container">
            <div class="about__title">MRTarjimon{{ $t('message.projectTitle') }}</div>
            <p>-- MRTarjimon.uz {{ $t('message.aboutProject') }}</p>
            <p>
                -- MRTarjimon.uz — {{ $t('message.suggestions') }}
            </p>
            <p>
                -- {{ $t('message.suggestions') }}
            </p>
        </div>
        <div class="info__vector">
            <svg class="about__svg" xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 367 237"
                fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20 -5.5V53C20 80.6142 42.3858 103 70 103H296.5C335.16 103 366.5 134.34 366.5 173V236.5H346.5V173C346.5 145.386 324.114 123 296.5 123H70C31.3401 123 0 91.6599 0 53L0 -5.5H20Z"
                    fill="#242426"></path>
            </svg>
        </div>
        <div class="info__bot">
            <h2>Telegram Bot</h2>
            <p>{{ $t('message.telegramBotRecommendation') }}
            </p>
            <p>-- {{ $t('message.changeText') }}</p>
            <p>-- {{ $t('message.convertAudio') }}</p>
            <p>-- {{ $t('message.autoConvertFiles') }}
            </p>
            <a class="telegram-btn" href="https://t.me/mrtarjimon_bot">
                <img src="../img/telegram-logo.svg" alt="telegram icon">
                Telegram Bot
            </a>
        </div>

        <div class="line" style="margin-top: 60px;"></div>

        <footer class="footer">
            <div class="footer__info">
                <p style="margin: 0 auto;">© MR Tarjimon, 2024</p>
                <div class="footer__social">
                    <a href="https://github.com">
                        <img src="../img/github.png" alt="">
                    </a>
                    <a href="https://linkedin.com">
                        <img src="../img/linkedin.png" alt="">
                    </a>
                    <a href="https://twitter.com">
                        <img src="../img/twitter.png" alt="">
                    </a>
                </div>
            </div>
        </footer>

    </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>

.telegram-btn {
    display: flex;
    padding: 12px;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background: #1f1f1f;
    border-radius: 14px;
    cursor: pointer;
    margin-top: 32px;

    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;

    img {
        width: 30px;
        height: 30px;
    }
}

.info__bot {
    border-radius: 12px;
    width: 100%;
    background: #242424;
    padding: 20px;

    h2 {
        color: #B3B3B3;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px;
        margin-bottom: 20px;
    }
}

.info {
    position: relative;
    
}

@media only screen and (min-width:1000px) {
    .info {
        max-width: 90%;
    }
}

.file {
    margin: 0 auto;
}

.container {
    // max-width: 390px;
    padding: 0px 25px;
    margin: 0 auto;

    p {
        color: #B3B3B3;
        text-align: left;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        margin-bottom: 12px;
    }
}

.info__line {
    margin-top: 50px;
}

.line {
    margin: 0 auto;
    width: 100%;
    display: flex;
    height: 1px;
    background: #4D4D4D;
}

.about {

    // .about__container

    &__container {
        border-radius: 12px;
        margin-top: 40px;
        width: 100%;
        background: #242424;
        padding: 20px;
    }

    // .about__title

    &__title {
        color: #B3B3B3;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px;
        margin-bottom: 20px;
    }
}

.support {
    color: #B3B3B3;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    font-weight: bold;
}

.info__vector {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
}

.footer {

    // .footer__info

    &__info {
        display: flex;
        width: 66.5%;
        margin: 0 auto;
        flex-direction: column;
        text-align: center;
        margin-top: 50px;
        padding-bottom: 50px;
        gap: 15px;

        p {
            color: #B3B3B3;
            font-family: Montserrat;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 30.8px;
        }
    }

    &__link {
        display: flex;
        width: 66.5%;
        margin: 0 auto;
        margin-top: 70px;
        justify-content: space-around;
        align-items: center;

        a {
            color: #B3B3B3;
            text-align: left;
            font-family: Montserrat;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 30.8px;
        }

        a:hover {
            color: #FFF;
            transition: 0.3s;
        }
    }

    &__line {
        margin: 0 auto;
        margin-top: 150px;
        width: 66.5%;
        display: flex;
        height: 1px;
        background: #4D4D4D;
    }

    &__social {
        display: flex;
        justify-content: center;
        gap: 32px;
    }
}

</style>