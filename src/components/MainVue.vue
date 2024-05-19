<template>
  <div class="main container">
    <div class="main__input">
      <textarea v-model="inputText" placeholder="Bu yerga matn kiriting"></textarea>
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
          <div class="like-btn">
            <i class='bx bx-like'></i>
          </div>
          <div class="dislike-btn" @click="openModal">
            <i class='bx bx-dislike'></i>
          </div>
        </div>
        <ModalVue :isVisible="modalVisible" @update:isVisible="modalVisible = $event" />
        <div class="copy-btn" @click="copyText">
          <lord-icon src="https://cdn.lordicon.com/xpgofwru.json" trigger="hover" colors="primary:#b4b4b4" style="
            width:25px;height:25px">
          </lord-icon>
        </div>
      </div>
    </div>

    <div class="main__bottom">
      <div class="translate-btn">
        <p>Lotin</p>
        <i class='bx bx-transfer-alt bx-rotate-180'></i>
        <p>Kiril</p>
      </div>
      <!-- <a class="telegram-btn" href="https://t.me/mrtarjimon_bot">
        <img src="../img/telegram-logo.svg" alt="telegram icon">
        Telegram Bot
      </a> -->
    </div>
  </div>
</template>

<script setup lang="js">

import { ref, watch } from 'vue';
import axios from 'axios';
import ModalVue from './ModalVue.vue'
import { debounce } from 'lodash';

components: {
  ModalVue
}

let inputText = ref('');
let lastInputText = ref('');
let copied = ref(false);
let modalVisible = ref(false);
const apiText = ref('');

const props = defineProps(['isVisible']);
const emit = defineEmits(['update:isVisible']);

// translate api
const translateText = async () => {
  try {
    const response = await axios.post("https://libretranslate.com/translate", {
      q: inputText.value,
      source: "auto",
      target: "en",
      format: "text"
    }, {
      headers: { "Content-Type": "application/json" }
    });
    apiText.value = response.data.translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    apiText.value = 'Tarjima qilishda xatolik!';
  }
}

// Debounce funksiyasi orqali translateText funksiyasini chaqirish
const debouncedTranslateText = debounce(translateText, 500); // 500 ms debouncing

watch(inputText, debouncedTranslateText);

// delete function
function clearText() {
  lastInputText.value = inputText.value;
  inputText.value = '';
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
    navigator.clipboard.writeText(inputText.value).then(() => {
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
  modalVisible.value = true;
}

</script>

<style lang="scss" scoped>

.main {

  // .main__input

  &__input {
    border: 1px solid #444;
    background: #242424;
    border-radius: 11px;
    max-width: 390px;
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
    max-width: 390px;
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

.container {
  max-width: 390px;
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

.load, .delete {
  width: 35px;
  height: 35px;
  padding: 5px;
  border-radius: 6px;
  background: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;

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
}

.status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.like-btn, .dislike-btn,
.copy-btn {
  width: 35px;
  height: 35px;
  padding: 5px;
  border-radius: 6px;
  background: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bx {}

.bx-like, .bx-dislike {
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