<script setup>
const pepitesFilterState = usePepitesFilterState();

const emit = defineEmits(['refresh']);
defineProps({
    filters: Array
})

const selected = ref('');

function handleClick(type) {
    if (type === selected.value) {
        selected.value = '';
        pepitesFilterState.value.type = {};
    } else {
        selected.value = type;
        pepitesFilterState.value.type = {
            type: {
                value: {
                    _eq: type
                }
            }
        }
    }
    emit('refresh');
}

</script>

<template>
    <div class="box ">
        <p class="filterTitle">Type</p>
        <button 
            v-for="filter in filters" :key="filter.id"
            :class="{ 'active' : selected === filter.value }" 
            @click.prevent="handleClick(filter.value)"
        >
            {{ filter.text }}
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