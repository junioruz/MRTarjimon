// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        message: {
            placeholder: "Enter your text here",
            copy: "Copy",
            projectTitle: " project",
            aboutProject: "Through the MRTarjimon.uz site, you can convert words from Uzbek Cyrillic to Uzbek Latin script.",
            suggestions: "Write to Telegram with suggestions and comments on improving the project.",
            errorsAvailable: "Errors available",
            spellingMistakes: "Spelling mistakes",
            transliterationErrors: "Transliteration errors",
            exceptionErrors: "Exception errors",
            other: "Other...",
            detailedError: "If possible, write in detail about the error:",
            contact: "How can we contact you?",
            close: "Close",
            send: "Send",
            contactInfo: "Phone, email, or Telegram",
            thankYou: "Thank you for your feedback! 🙌",
            telegramBotRecommendation: "We recommend our project's Telegram bot for successful and convenient translation",
            changeText: "Ability to change the text to the required alphabet (Cyrillic, Latin) 🆎",
            error: "What is the error in the service?",
            convertAudio: "Convert audio 🔊🔁📄",
            autoConvertFiles: "@MRTarjimon_bot not only texts, but also automatically converts the following files from Latin to Cyrillic or vice versa: 📂 .doc; .xls; .pptx; .pdf"
        }
    },
    ru: {
        message: {
            placeholder: "Введите текст здесь",
            copy: "Копировать",
            projectTitle: "Проект ",
            aboutProject: "Через сайт MRTarjimon.uz вы можете преобразовывать слова из узбекской кириллицы в узбекскую латиницу.",
            suggestions: "Пишите в Telegram с предложениями и комментариями по улучшению проекта.",
            errorsAvailable: "Доступные ошибки",
            spellingMistakes: "Орфографические ошибки",
            transliterationErrors: "Ошибки транслитерации",
            error: "Какая ошибка в сервисе?",
            exceptionErrors: "Исключения ошибок",
            other: "Другое...",
            detailedError: "Если возможно, подробно напишите об ошибке:",
            contact: "Как с вами связаться?",
            close: "Закрыть",
            send: "Отправить",
            thankYou: "Спасибо за ваш отзыв! 🙌",
            telegramBotRecommendation: "Мы рекомендуем бот Telegram нашего проекта для успешного и удобного перевода",
            contactInfo: "Телефон, электронная почта или Telegram",
            changeText: "Возможность изменить текст на нужный алфавит (кириллица, латиница) 🆎",
            convertAudio: "Преобразовать аудио 🔊🔁📄",
            autoConvertFiles: "@MRTarjimon_bot не только тексты, но и автоматически преобразует следующие файлы из латиницы в кириллицу или наоборот: 📂 .doc; .xls; .pptx; .pdf"
        }
    },
    uzCyrl: {
        message: {
            placeholder: "Матн киритинг",
            copy: "Нусха олиш",
            projectTitle: " лойиҳаси",
            aboutProject: "MRTarjimon.uz сайти орқали сиз сўзларни ўзбек кирил ёзувидан ўзбек лотин ёзувига ўтказишингиз мумкин.",
            suggestions: "Лойиҳани ривожлантириш бўйича таклиф ва фикрларингизни Telegram орқали ёзинг.",
            errorsAvailable: "Хатоликлар мавжуд",
            spellingMistakes: "Имловий хатолар",
            transliterationErrors: "Транслитерация хатолари",
            exceptionErrors: "Истиснолардаги хатолар",
            error: "Хизматда қандай хатолик?",
            other: "Бошқа...",
            detailedError: "Иложи борича хато ҳақида батафсил ёзинг:",
            contact: "Сиз билан қандай боғланиш мумкин?",
            close: "Ёпиш",
            send: "Юбориш",
            contactInfo: "Телефон, э-майл ёки Телеграм",
            thankYou: "Фикрингиз учун раҳмат! 🙌",
            telegramBotRecommendation: "Матнларингизни муваффақиятли ва қулай таржима қилиш учун лойиҳамизнинг телеграм ботини тавсия қиламиз",
            changeText: "Матнни керакли алифбога (кирил, лотин) ўзгартириш имконияти бор. 🆎",
            convertAudio: "Аудиони матнга ўтказиш 🔊🔁📄",
            autoConvertFiles: "@MRTarjimon_bot фақат матнларни эмас, балки қуйидаги файлларни ҳам автоматик равишда лотиндан кирилга ёки кирилдан лотинга ўгириш функцияларига эга: 📂 .doc; .xls; .pptx; .pdf"
        }
    },
    uzLatn: {
        message: {
            placeholder: "Matn kiriting",
            copy: "Nusxa olish",
            projectTitle: " loyihasi",
            aboutProject: " sayti orqali siz so‘zlarni o‘zbek kirill yozuvidan o‘zbek lotin yozuviga o‘tkazishingiz mumkin.",
            suggestions: "Loyihani rivojlantirish bo‘yicha taklif va fikrlaringizni Telegramga yozing.",
            error: "Xizmatda qanday xatolik?",
            errorsAvailable: "Mavjud xatolar",
            spellingMistakes: "Imloviy xatolar",
            transliterationErrors: "Transliteratsiya xatolari",
            exceptionErrors: "Istisno xatolari",
            other: "Boshqa...",
            detailedError: "Imkoni bo‘lsa xatolik haqida batafsil yozing:",
            contact: "Siz bilan qanday bog‘lanish mumkin?",
            close: "Yopish",
            send: "Yuborish",
            contactInfo: "Telefon, e-mail yoki Telegram",
            thankYou: "Fikringiz uchun rahmat! 🙌",
            telegramBotRecommendation: "Matnlaringizni muvaffaqiyatli va qulay tarjima qilish uchun loyihaning telegram botini tavsiya qilamiz",
            changeText: "Matnni kerakli alifboga (kiril, lotin) o‘girish imkoni bor. 🆎",
            convertAudio: "Audioni matnga o'tkazish 🔊🔁📄",
            autoConvertFiles: "@MRTarjimon_bot nafaqat tekstlarni, balki quyidagi fayllarni ham avtomatik lotindan krillga yoki krilldan lotinga o‘girish funksiyalariga ega: 📂 .doc; .xls; .pptx; .pdf"
        }
    }
};

const i18n = createI18n({
    locale: 'uzLatn', // default language
    fallbackLocale: 'uzLatn', // used when the requested language is not available
    messages,
});

export default i18n;