<script setup>
const { $diretusBaseUrl } = useNuxtApp();

const props = defineProps({
    comments: Array,
    pepiteId: String,
})

</script>

<template>
    <section class="container flex column gap20">
        <div class="comment" v-for="comment in comments" :key="comment.id">

            <div class="intro flex alignCenter gap10">
                <img class="avatar" :src="`${$directusBaseUrl}/assets/${comment.user.avatar}`" alt="avatar" />

                <p class="name"> {{ comment.user.first_name }} </p>

                <p class="date"> {{ new Date(comment.date_created).toLocaleDateString () }} </p>
            </div>
            
            
            <p class="marTop20">
                {{ comment.text }}
            </p>
        </div>

        <SectionCommentsCreateComment :pepiteId="pepiteId" @refresh="$emit('refresh')" />
    </section>
</template>

<style scoped>
.container {
    width: min(100%, 600px);
    padding: 30px;
}
.comment {
    background-color: var(--gray-dimmed);
    padding: 20px;
}
.avatar {
    width: 35px;
    border-radius: 50%;
    border: 1px solid var(--gray-dimmed);
}
.name {
    font-size: 0.9rem;
    font-weight: 700;
}
.date {
    font-size: 0.8rem;
    font-weight: 600;
}
</style>