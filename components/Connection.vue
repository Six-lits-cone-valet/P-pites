<script setup>
import icons from '@/assets/icons';
const { $directus, $userLogin, $createUserAccount } = useNuxtApp();
const appState = useAppState();

const selectedFormType = ref('connection');

const selectedAvararId = ref(null);

function handleAvarSelection(avatarId) {
    console.log(avatarId)
    selectedAvararId.value = avatarId;
}

async function handleSubmit(e) {
    if(selectedFormType.value === 'inscription') {
        if( !formIValid(e.target)) return;

        const userData = {
            first_name: e.target.firstName.value,
            last_name: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value,
            frontEndAvatar: selectedAvararId.value
        }


        console.log(userData)
        await $createUserAccount(userData);
    } else {
        await $userLogin(e.target.email.value, e.target.password.value);
    }
    if(e.target.rememberMe.checked) {
        localStorage.setItem('rememberMe', true);
    }
}

function formIValid(form) {
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const avatarId = selectedAvararId.value;

    if (selectedFormType.value === 'inscription') {
        if (!firstName || firstName.length < 1 || firstName.length > 50) {
            console.log('Invalid first name');
            return;
        }

        if (!lastName || lastName.length < 1 || lastName.length > 50) {
            console.log('Invalid last name');
            return;
        }
    }

    if (!email || !validateEmail(email) || email.length > 255) {
        console.log('Invalid email');
        return;
    }

    if (!password) {
        console.log('Invalid password');
        return;
    }

    if (!avatarId) {
        console.log('Invalid avatar');
        return;
    }

    return true;

}

function validateEmail(email) {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

</script>

<template>
    <div class="backdrop centered" v-if="appState.showConnectionForm" @click="appState.showConnectionForm = false">
        <form @submit.prevent="handleSubmit" class="flex column" @click.stop>
            <div class="flex justifyEnd" @click.stop>
                <svg  viewBox="0 -960 960 960" class="icon close pointer" @click="appState.showConnectionForm = false">
                    <path :d="icons.close.path" />
                </svg>
            </div>

            <fieldset class="flex gap5">
                <input type="radio" id="connection" name="formType" value="connection" class="invisible" v-model="selectedFormType">
                <label for="connection" class="formType pointer">
                    Connexion
                </label>

                <input type="radio" id="inscription" name="formType" value="inscription" class="invisible" v-model="selectedFormType">
                <label for="inscription" class="formType pointer">
                    Inscription
                </label>
            </fieldset>

            <div v-if="selectedFormType === 'inscription'">
                <label class="invisible" for="connectionFirstName">Prénom</label>
                <input id="connectionFirstName" type="text" name="firstName" placeholder="Prénom" @click.stop>

                <label class="invisible" for="connectionName">Nom</label>
                <input id="connectionName" type="text" name="lastName" placeholder="Nom" @click.stop>
            </div>

            <label class="invisible" for="connectionEmail">email</label>
            <input id="connectionEmail" type="text" name="email" placeholder="Email" @click.stop>

            <label class="invisible" for="connectionPassword">mot de passe</label>
            <input id="connectionPassword" type="password" name="password" placeholder="Mot de passe" @click.stop>

            <fieldset class="flex gap10 marTop20">
                <input type="checkbox" name="rememberMe" id="rememberMe">
                <label for="rememberMe">Rester connecter</label>
            </fieldset>

            <div  v-if="selectedFormType === 'inscription'">
                <AuthenticationAvatar @selection="handleAvarSelection" :activeAvatarId="selectedAvararId"/>
            </div>

            <input class="submitButton go pointer" type="submit" value="Go" @click.stop>
        </form>
    </div>
  </template>
  
<style scoped>
.backdrop {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.636);
}

form {
    width: min(300px, 90vw);
    background-color: var(--dark);
    padding: 20px;
    padding-top: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px black;
}
.icon.close {
    width: 48px;
    height: 48px;
    padding: 8px;
    fill: var(--gray-light);
}

input[type="radio"] + label {
    flex-grow: 1;
    background-color: var(--theme-color-user);
    filter: brightness(0.4);
    display: grid;
    place-items: center;
    padding: 10px 0;
    border-radius: 5px;
}

input[type="radio"]:checked + label {
    filter: brightness(1);
    background-color: var(--theme-color-pepite);
}

/* text fields */
input[type="text"],
input[type="password"] {
    font-size: 1.125rem;
    font-weight: 600;
    background-color: var(--darker);
    padding: 10px 20px;
    border-radius: 5px;
    outline: solid 2px var(--theme-color-light);
    margin-top: 20px;
}

.invisible {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

/* remember me */
input[type="checkbox"] {
    width: 20px;
    height: 20px;
    background-color: var(--darker);
    display: grid;
    place-items: center;
}

input[type="checkbox"]:checked::after {
    content: '✔';
    font-size: 1rem;
    color: var(--theme-color-city);
}

input.go {
    align-self: center;
    background-color: var(--theme-color-pepite);
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 20px;
}
</style>