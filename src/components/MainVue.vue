<template>
  <div class="main container">
    <div class="main__container">
      <div class="main__input">
        <textarea v-model="inputText" :placeholder="$t('message.placeholder')"></textarea>
        <div class="input-bottom">
          <div class="load" @click="restoreText">
            <lord-icon src="https://cdn.lordicon.com/dafdkyyt.json" trigger="hover" colors="primary:#b4b4b4"
              style="width:25px;height:25px">
            </lord-icon>
          </div>
          <div class="delete" @click="clearText">
            <lord-icon src="https://cdn.lordicon.com/wpyrrmcq.json" trigger="hover" colors="primary:#b4b4b4"
              style="width:24px;height:24px">
            </lord-icon>
          </div>
        </div>
      </div>

      <div class="main__text">
        <div :class="{ 'translateText': true, 'faded': copied }">{{ apiText }}</div>
        <div class="main__btn">
          <div class="status">
            <div :class="{ 'like-btn': true }">
              <i @click="likeActivF" :class="{ 'bx bx-like': true, 'bxs-like': likStatus }"></i>
              <!-- {{ likeCount }} -->
            </div>
            <div class="dislike-btn" @click="openModal">
              <i @click="dislikeActiv" :class="{ 'bx bx-dislike': true, 'bxs-dislike': dislikeStatus }"></i>
            </div>
          </div>
          <ModalVue :isVisible="modalVisible" @update:isVisible="modalVisible = $event" />
          <div class="copy-btn" @click="copyText">
            {{ $t('message.copy') }}
            <lord-icon src="https://cdn.lordicon.com/xpgofwru.json" trigger="hover" colors="primary:#b4b4b4" style="
            width:25px;height:25px">
            </lord-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="main__bottom">
      <div class="translate-btn">
        <p>{{ latin }}</p>
        <i class='bx bx-transfer-alt bx-rotate-180'></i>
        <p>{{ cyrl }}</p>
      </div>
      <!-- <a class="telegram-btn" href="https://t.me/mrtarjimon_bot">
        <img src="../img/telegram-logo.svg" alt="telegram icon">
        Telegram Bot
      </a> -->
    </div>
  </div>
</template>

<script setup lang="js">

import { ref, watch, onMounted } from 'vue';
import axios from 'axios';
import ModalVue from './ModalVue.vue'
import { debounce } from 'lodash';
import { createI18n } from 'vue-i18n';
import confetti from "https://esm.run/canvas-confetti@1";

components: {
  ModalVue
}

let inputText = ref('');
let lastInputText = ref('');
let copied = ref(false);
let modalVisible = ref(false);
const apiText = ref('');
let copy = ref('nusxa olish')
const likStatus = ref(false)
const dislikeStatus = ref(false)
let likeCount = ref(0)
let latin = ref('Lotin')
let cyrl = ref('Kiril')
let translateWord = ref('')

onMounted(() => {
  likeCount.value = Number(localStorage.getItem('likes')) || 0;
});

function likeActivF() {
  apiText.value ? likStatus.value = !likStatus.value : likStatus.value
  const rect = event.target.getBoundingClientRect();

  if (dislikeStatus.value) {
    dislikeStatus.value = !dislikeStatus.value;
  }

  const origin = {
    x: (rect.left + rect.right) / 2 / window.innerWidth,
    y: (rect.top + rect.bottom) / 2 / window.innerHeight
  };

  if (likStatus.value) {
    likeCount.value++
    confetti({
      particleCount: 100,
      angle: 90,        // Chiqish burchagi, vertikal
      spread: 70,
      origin: origin
    });
  } else {
    likeCount.value = likeCount.value > 0 ? likeCount.value - 1 : likeCount.value
  }
}

function dislikeActiv() {
  likeCount.value = likeCount.value > 0 ? likeCount.value - 1 : likeCount.value;
  apiText.value ? dislikeStatus.value = !dislikeStatus.value : false
  if (likStatus.value) {
    likStatus.value = !likStatus.value
  }
}

const props = defineProps(['isVisible']);
const emit = defineEmits(['update:isVisible']);

// translate api
const sendRequest = async () => {
  if (inputText.value) {

    translateWord.value = inputText.value[0]

    // kiril yoki lotin alifbosiga tekshirish
    if (translateWord.value.charCodeAt() >= 65 && translateWord.value.charCodeAt() <= 90 || translateWord.value.charCodeAt() >= 97 && translateWord.value.charCodeAt() <= 122) {

    } else {
      let word1 = null
      word1 = cyrl.value
      cyrl.value = latin.value
      latin.value = word1
    }

    try {
      const response = await axios.post('http://128.140.72.180:8070/latin', {
        word: inputText.value
      });
      apiText.value = response.data.result;
    } catch (error) {
      console.error('API so`rovda xatolik: ', error);
      apiText.value = 'Xatolik yuz berdi';
    }
  } else {
    apiText.value = ''
  }
};

// const debouncedTranslateText = debounce(sendRequest, 500);

watch(() => inputText.value, sendRequest);

// delete function
function clearText() {
  lastInputText.value = inputText.value;
  inputText.value = ''
  likStatus.value = false
  dislikeStatus.value = false
  likeCount.value > 0 ? likeCount.value = likeCount.value - 1 : likeCount.value
}

// load function
function restoreText() {
  if (lastInputText.value) {
    inputText.value = lastInputText.value;
  }
}

// nusxa olish
function copyText() {
  if (inputText.value) {
    navigator.clipboard.writeText(apiText.value).then(() => {
      copied.value = true;
      setTimeout(() => { copied.value = false; }, 300);
      // alert('Matndan nusxa olindi');
    }).catch(err => {
      console.error('Nusxalashda xatolik yuz berdi: ', err);
      alert('Xatolik: Matnni nusxalab bo`lmadi.');
    });
  } else {
    alert('Matn kiritilmagan');
  }
}

// open modal
function openModal() {
  dislikeStatus.value ? modalVisible.value = true : modalVisible.value = false
}

</script>

<style lang="scss" scoped>
.main {
  // .main__input

  &__input {
    border: 1px solid #444;
    background: #242424;
    border-radius: 11px;
    max-width: 100%;
    height: 200px;
    position: relative;

    textarea {
      overflow-y: scroll;
      background: none;
      padding: 10px 10px;
      color: #FFF;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      border-radius: 8px;
      width: 100%;
      height: 185px;
      resize: none;
    }
  }

  // .main__text

  &__text {
    border: 1px solid #444;
    background: #242424;
    border-radius: 11px;
    max-width: 100%;
    height: 200px;
    position: relative;
    margin-top: 16px;
    position: relative;
  }

  // .main__btn

  &__btn {
    position: absolute;
    bottom: 8px;
    left: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // .main__bottom

  &__bottom {
    margin-top: 25px;
  }
}

@media only screen and (min-width: 1000px) {

  .container {
      max-width: 90%;
    }

  .main__container {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 20px;
  }

  .main__input,
  .main__text {
    height: 400px;
  }

  .main__text {
    margin-top: 0px;
  }

  .main__input>textarea {
    overflow: hidden;
    height: 85%;
    overflow-y: auto;
  }

  .main__text>.translateText {
    overflow: hidden;
    height: 85%;
    overflow-y: auto;
  }
}

.container {
  max-width: 90%;
  padding: 0px 25px;
  margin: 0 auto;
}

.input-bottom {
  position: absolute;
  right: 10px;
  bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.load,
.delete {
  width: 35px;
  height: 35px;
  padding: 5px;
  border-radius: 6px;
  background: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  lord-icon {
    width: 25px;
    height: 25px;
  }
}

.translateText {
  overflow-y: scroll;
  background: none;
  padding: 10px 10px;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 8px;
  width: 100%;
  height: 185px;
  resize: none;
  display: flex;
  flex-wrap: wrap;
}

.status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.like-btn,
.dislike-btn,
.copy-btn {
  color: #ffffff76;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  gap: 3px;
  padding: 5px;
  border-radius: 6px;
  background: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.like-btn,
.dislike-btn,
.copy-btn:active {
  transform: scale(1.0);
}

.like-activ {
  background: #729856d3;
}

.bx {}

.bx-like,
.bx-dislike {
  font-size: 24px;
  color: #b4b4b4;
}

.copy-btn:active {
  background: #1f1f1f;
}

.translate-btn {
  display: flex;
  align-items: center;
  gap: 26px;
  justify-content: center;
  // padding: 16px;
  color: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.5px;
  text-transform: capitalize;
  // border-radius: 6px;
  // background: rgba(13, 153, 255, 0.1);

  border-radius: 12px;
  width: 100%;
  background: #242424;
  padding: 20px;
}

.bx-transfer-alt {}

.bx-rotate-180 {}

.telegram-btn {
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: #5AB8FF;
  border: 5px solid #95D1FF;
  border-radius: 14px;
  cursor: pointer;
  margin-top: 12px;

  color: #FFF;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;

  img {
    width: 30px;
    height: 30px;
  }
}

.faded {
  opacity: 0.3;
}
</style>