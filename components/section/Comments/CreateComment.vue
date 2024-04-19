<script setup>
import icons from '@/assets/icons';
const { $directus, $createItem } = useNuxtApp();
const userState = useUserState();

const props = defineProps({
    pepiteId: Number
})

const emit = defineEmits(['refresh']);

const commentBoxIsOpen = ref(false);

const text = ref('');

async function handleSubmit() {
    const response = await $directus.request($createItem('Comments', {
        text: text.value,
        pepite: {
            id: props.pepiteId
        }
    }))

    if(response) {
        emit('refresh');
        text.value = '';
        commentBoxIsOpen.value = false;
    }
}
</script>

<template>
    <div v-if="userState.userLoggedIn">
        <div class="flex justifyEnd" v-if="!commentBoxIsOpen">
            <button class="pointer" @click="commentBoxIsOpen = !commentBoxIsOpen">
                <svg viewBox="0 -960 960 960">
                    <path :d="icons.addComment.path"/>
                </svg>
            </button>
        </div>

        <form v-else class="comment">
            <div class="intro flex justifyEnd">
                <button class="pointer" @click="commentBoxIsOpen = !commentBoxIsOpen">
                    <svg viewBox="0 -960 960 960">
                        <path :d="icons.close.path"/>
                    </svg>
                </button>
            </div>

            <div class="flex">
                <textarea v-model="text" class="grow marTop10" name="text"></textarea>
            </div>

            <div class="outro flex justifyEnd">
                <button class="publier pointer"  @click.prevent="handleSubmit">
                    publier
                </button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.comment {
    background-color: var(--gray-dimmed);
    padding: 20px;
}
textarea {
    font-weight: 600;
    background-color: #ffffff0a;
    padding: 10px;
}
svg {
    width: 48px;
    height: 48px;
    padding: 6px;
    fill: var(--gray-light);
}
.publier {
    background-color: var(--gray-dimmed);
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 10px;
}
</style>