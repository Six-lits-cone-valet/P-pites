<script setup>
const pepitesFilterState = usePepitesFilterState();
import icons from '@/assets/icons.json'

const emit = defineEmits(['refresh']);

const props = defineProps({
    filters: Array
})

const filteredFilters = computed(() => {
    if(!props.filters) return [];
    let uniqueValues = [...new Set(props.filters.flat())];
    return uniqueValues;
})

const selected = ref('');

function handleClick(filter) {
    if (filter === selected.value) {
        selected.value = '';
        pepitesFilterState.value.options = {};
    } else {
        selected.value = filter;
        pepitesFilterState.value.options = {
            options: {
                _in: filter
            }
        }
    }
    emit('refresh');
}

</script>

<template>
    <div class="box flex column gap5">
        <p class="filterTitle">Services</p>

        <button 
            v-for="filter in filteredFilters" :key="filter"
            class="flex alignCenter gap5"
            :class="{ 'active' : selected === filter }" 
            @click.prevent="handleClick(filter)"
        >
            <svg  viewBox="0 -960 960 960">
                <path :d="icons[filter].path" />
            </svg>

            <span>
                {{ icons[filter].text }}
            </span>
        </button>
    </div>
</template>

<style scoped>
.filterTitle {
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--theme-color);
}
button {
    background-color: var(--gray-dimmed);
    padding: 8px 16px;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
}
button.active {
    background-color: var(--success);
}
svg {
    width: 30px;
    height: 30px;
    fill: var(--gray-light);
}
</style>