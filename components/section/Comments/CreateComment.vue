<script setup>
const { $directus, $createItem } = useNuxtApp();
const userState = useUserState();

const props = defineProps({
    pepiteId: String
})

const emit = defineEmits(['refresh']);

const commentBoxIsOpen = ref(false);

const text = ref('');

async function handleSubmit() {
    const response = await $directus.request($createItem('Comments', {
        text: text.value,
        pepite: {
            id: props.pepiteId
        },
        user: {
            id: userState.value.id
        },
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
        <button class="pointer" @click="commentBoxIsOpen = !commentBoxIsOpen" v-if="!commentBoxIsOpen">
            ajouter un commentaire
        </button>

        <form v-else class="comment">
            <div class="intro flex justifyEnd">
                <span class="pointer" @click="commentBoxIsOpen = !commentBoxIsOpen" >
                    close
                </span>
            </div>
            <div class="flex">
                <textarea v-model="text" class="grow marTop10" name="text"></textarea>
            </div>

            <div class="outro flex justifyEnd">
                <button class="pointer"  @click.prevent="handleSubmit">
                    submit
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
</style>