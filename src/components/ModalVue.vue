<template>
    <div id="myModal" class="comment__modal" v-show="isVisible">

        <div class="modal-content">
            <div class="comment__title">
                <p>{{ $t('message.error') }}</p>
                <span @click="closeModal" class="close">×</span>
            </div>
            <div class="modal__line"></div>
            <div class="comment__radio">
                <div class="feedback">
                    <input type="radio" name="unical" id="feedback_2">
                    <label for="feedback_2">
                        {{ $t('message.errorsAvailable') }}
                    </label>
                </div>
                <div class="feedback">
                    <input type="radio" name="unical" id="feedback_3">
                    <label for="feedback_3">
                        {{ $t('message.spellingMistakes') }}
                    </label>
                </div>
                <div class="feedback">
                    <input type="radio" name="unical" id="feedback_4">
                    <label for="feedback_4">
                        {{ $t('message.transliterationErrors') }}
                    </label>
                </div>
                <div class="feedback">
                    <input type="radio" name="unical" id="feedback_5">
                    <label for="feedback_5">
                        {{ $t('message.exceptionErrors') }}
                    </label>
                </div>
                <div class="feedback">
                    <input @click="feedbackOpen" type="radio" name="unical" id="feedback_6">
                    <label for="feedback_6">
                        {{ $t('message.other') }}
                    </label>
                </div>
                <div v-show="feedbackInp" class="feedback__comment" style="display: flex;">
                    <label>
                        {{ $t('message.detailedError') }}
                    </label>
                    <textarea style="resize: none;" id="" rows="5"></textarea>
                    <label>
                        {{ $t('message.contact') }}
                    </label>
                    <input type="text" :placeholder="$t('message.contactInfo') ">
                </div>
            </div>
            <div class="modal__line-footer"></div>
            <div class="comment__footer">
                <button @click="closeModal" class="comment__footer-close">
                    {{ $t('message.close') }}
                </button>
                <button @click="thankYou" class="comment__footer-send">
                    {{ $t('message.send') }}
                </button>
            </div>
            <div v-if="thankYouMessage" class="thank-you">
                {{ $t('message.thankYou') }}
            </div>
        </div>

    </div>
</template>

<script setup>

import { ref } from 'vue';

const thankYouMessage = ref(false)

function thankYou() {
    thankYouMessage.value = true;
    setTimeout(() => {
        closeModal();
    }, 2000);
}

const props = defineProps({
    isVisible: Boolean
});
const emit = defineEmits(['update:isVisible']);

function closeModal() {
    emit('update:isVisible', false);
}

const feedbackInp = ref(false)

function feedbackOpen() {
    feedbackInp.value = true
}

</script>

<style lang="scss" scoped>

.thank-you {
    color: #FFF;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-top: 20px;
}

.comment {

    // .comment__modal

    &__modal {
        // display: none !important;
        position: fixed;
        z-index: 1;
        padding-top: 40px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(1.8px);
    }

    // .comment__title

    &__title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        color: #FFF;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        margin-bottom: 16px;

        span {
            cursor: pointer;
        }
    }

    // .comment__radio

    &__radio {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    // .comment__footer

    &__footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
    }

    // .comment__footer-close

    &__footer-close,
    &__footer-send {
        text-align: center;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        border-radius: 4px;
        padding: 6px 12px;
    }

    &__footer-close {
        color: #FF5E5E;
        background: rgba(255, 94, 94, 0.15);
    }

    &__footer-send {
        color: #3AC977;
        background: rgba(58, 201, 119, 0.1);
    }

    &__footer-close:hover {
        background: #1E1E1E;
        transition: 0.3s;
    }

    &__footer-send:hover {
        background: #1E1E1E;
        transition: 0.3s;
    }
}

.modal__line {
    width: 100%;
    border: 1px solid #4E4E4E;

    &-footer {
        width: 100%;
        border: 1px solid #4E4E4E;
        margin-top: 20px;
    }
}

.modal-content {
    margin: 0 auto;
    max-width: 360px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid #4E4E4E;
    background: #2B2B2B;
    padding: 24px;
}

.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.feedback {

    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6470588235);
    align-items: center;
    display: flex;
    gap: 8px;


    input {
        appearance: none;
        border-radius: 50%;
        width: 16px;
        height: 16px;

        border: 2px solid #999;
        transition: 0.2s all linear;
        margin-right: 5px;
    }

    input:checked {
        border: 5px solid rgb(179, 179, 179);
    }

    // .feedback__comment

    &__comment {
        display: none;
        flex-direction: column;
        justify-content: center;
        margin-top: 12px;
        gap: 10px;

        label {
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6470588235);
        }

        textarea {
            padding: 10px 12px;
            border-radius: 6px;
            background: #171717;
            color: #ffffffb1;
            font-family: Montserrat;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 20.8px;
        }

        input {
            padding: 10px 12px;
            border-radius: 6px;
            background: #171717;
            color: #ffffffb1;
            font-family: Montserrat;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 20.8px;
        }
    }
}

</style>