<script setup>
const pepitesFilterState = usePepitesFilterState();

const emit = defineEmits(['refresh']);
const sizes = [
    {
        text: "Petit",
        value: "small"
    },
    {
        text: "Moyen",
        value: "medium"
    },
    {
        text: "Grand",
        value: "large"
    }
]

const selected = ref('');

function handleClick(size) {
    if (size === selected.value) {
        selected.value = '';
        pepitesFilterState.value.size = {};
    } else {
        selected.value = size;
        pepitesFilterState.value.size = {
            size: {
                _eq: size
            }
        }
    }
    emit('refresh');
}

</script>

<template>
    <div class="box flex column gap5">
        <p class="filterTitle">Taille</p>
        <button 
            v-for="size in sizes" :key="size.value"
            :class="{ 'active' : selected === size.value }" 
            @click.prevent="handleClick(size.value)"
        >
            {{ size.text }}
        </button>
    </div>
</template>

<style scoped>
.filterTitle {
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--theme-color);
    margin-bottom: 10px;
}
button {
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--gray-dimmed);
    padding: 8px 16px;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
    user-select: none;
}
button.active {
    background-color: var(--success);
}
</style>