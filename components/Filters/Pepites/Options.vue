<script setup>
const pepitesFilterState = usePepitesFilterState();
import icons from '@/assets/icons.json'

const emit = defineEmits(['refresh']);

const options = [
    {
        text: "A emporter",
        value: "toGo"
    },
    {
        text: "Sur place",
        value: "eatIn"
    },
    {
        text: "Livraison",
        value: "delivery"
    }
]

const selected = ref('');

function handleClick(option) {

    if (selected.value === option) {
        selected.value = '';
        pepitesFilterState.value.options = {};
    } else {
        selected.value = option;
        pepitesFilterState.value.options = {
            options: {
                _contains: option
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
            v-for="option in options" :key="option.value"
            class="flex alignCenter gap5"
            :class="{ 'active' : selected === option.value }" 
            @click.prevent="handleClick(option.value)"
        >
            <svg  viewBox="0 -960 960 960">
                <path :d="icons[option.value].path" />
            </svg>

            <span>
                {{ icons[option.value].text }}
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