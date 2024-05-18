<template>
    <div class="info container">
        <div class="info__line">
            <div class="line"></div>
        </div>
        <div class="about__container">
            <div class="about__title">MR TARJIMON loyihasi</div>
            <p>-- MRTarjimon.uz sayti orqali siz so‘zlarni o‘zbek kirill yozuvidan o‘zbek lotin yozuviga
                o‘tkazishingiz
                mumkin.</p>
            <p>
                -- MRTarjimon.uz — foydalanuvchilarga berilgan matnni kirilldan lotinga va aksincha o‘girish
                xizmatini
                taklif etadi.
            </p>
            <p>
                -- Loyihani rivojlantirish bo‘yicha taklif va fikrlaringizni <a class="support"
                    href="t.me/mrtarjimon_bot">Telegramga</a>
                yozing.
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
        <!-- <svg class="file" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1351 900"
            fill="none">
            <path
                d="M415.485 67.3828H42C20.9794 67.3828 3.90652 84.362 3.79078 105.382L0.221447 753.663C0.0993427 775.84 18.0434 793.883 40.2208 793.883H1310.5C1332.59 793.883 1350.5 775.974 1350.5 753.883V40.8828C1350.5 18.7914 1332.59 0.882812 1310.5 0.882812H497.015C481.197 0.882812 466.865 10.2039 460.451 24.6628L452.049 43.6028C445.635 58.0617 431.303 67.3828 415.485 67.3828Z"
                fill="url(#paint0_linear_444_9983)"></path>
            <defs>
                <linearGradient id="paint0_linear_444_9983" x1="1365.98" y1="23.0295" x2="-246.118" y2="456.641"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#242424"></stop>
                    <stop offset="1" stop-color="#242426"></stop>
                </linearGradient>
            </defs>
        </svg> -->
        <div class="info__bot">
            <h2>Telegram Bot</h2>
            <p>Matningizni muvaffaqiyatli va qulay tarjima qilish uchun
                loyihammizning telegram botini tavsiya qilamiz
            </p>
            <p>-- Matnni kerakli alifboga(kiril, lotin) o‘girish imkoni bor. 🆎</p>
            <p>-- Audioni matnga o'tkazish 🔊🔁📄</p>
            <p>-- @MRTarjimon_bot nafaqat tekstlarni, balki quyidagi
                fayllarni ham avtomatik lotindan krillga yoki krilldan lotinga
                o'girish funksiyalariga ega: 📂 .dock; .xls; .pptx; .pdf
            </p>
            <a class="telegram-btn" href="https://t.me/mrtarjimon_bot">
                <img src="../img/telegram-logo.svg" alt="telegram icon">
                Telegram Bot
            </a>
        </div>
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

.file {
    margin: 0 auto;
}

.container {
    max-width: 390px;
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

</style>