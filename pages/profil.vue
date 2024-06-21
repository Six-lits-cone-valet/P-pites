<script setup>
import { ref } from 'vue';
import icons from '@/assets/icons.json';
const { $directusBaseUrl, $logout } = useNuxtApp();
const userState = useUserState();

const gender = ref(userState.gender || '');
const birthdate = ref(userState.birthdate || '');
const city = ref(userState.city || '');
const about = ref(userState.about || '');
const favouriteFood = ref(userState.favouriteFood || '');
const avatarFile = ref(null);

const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        avatarFile.value = URL.createObjectURL(file);
    }
};

const saveProfile = () => {
    // Logique pour sauvegarder le profil mis à jour
    console.log({
        gender: gender.value,
        birthdate: birthdate.value,
        city: city.value,
        about: about.value,
        favouriteFood: favouriteFood.value,
        avatarFile: avatarFile.value,
    });
};
</script>

<template>
    <PageStructure showHeader>
        <template #header>
            <h1 class="mainWidth">Mon profil</h1>
        </template>

        <template #scrollableContent>
            <div class="mainWidth">
                <form @submit.prevent="saveProfile" class="profile-form">
                    <div class="form-group">
                        <label for="firstName">Prénom</label>
                        <input type="text" id="firstName" v-model="userState.firstName" readonly>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Nom</label>
                        <input type="text" id="lastName" v-model="userState.lastName" readonly>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="userState.email" readonly>
                    </div>
                    <div class="form-group">
                        <label for="role">Rôle</label>
                        <input type="text" id="role" v-model="userState.role" readonly>
                    </div>
                    <div class="form-group">
                        <label for="avatar">Photo de profil</label>
                        <input type="file" id="avatar" @change="handleAvatarChange">
                        <img v-if="avatarFile" :src="avatarFile" alt="Avatar" class="avatar-preview">
                    </div>
                    <div class="form-group">
                        <label>Genre</label>
                        <div class="radio-group">
                            <label>
                                <input type="radio" value="male" v-model="gender.value"> Homme
                            </label>
                            <label>
                                <input type="radio" value="female" v-model="gender.value"> Femme
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="birthdate">Date de naissance</label>
                        <input type="date" id="birthdate" v-model="birthdate">
                    </div>
                    <div class="form-group">
                        <label for="city">Ville</label>
                        <input type="text" id="city" v-model="city">
                    </div>
                    <div class="form-group">
                        <label for="about">À propos de moi</label>
                        <textarea id="about" v-model="about"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="favouriteFood">Plat préféré</label>
                        <textarea id="favouriteFood" v-model="favouriteFood"></textarea>
                    </div>
                    <button type="submit" class="save-button">Enregistrer</button>
                </form>

                <div class="button pointer" @click="$logout">
                    <svg viewBox="0 0 24 24" class="icon shrink0">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.71-11.71L9.88 12l1.41 1.41L12 13.88l2.71 2.71 1.41-1.41L13.88 12l2.71-2.71-1.41-1.41L12 10.12 10.29 7.41 8.88 8.82 10.12 10l-1.41 1.41z"></path>
                    </svg>
                    Se déconnecter
                </div>
            </div>
        </template>
    </PageStructure>
</template>

<style scoped>
.profile-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.radio-group {
    display: flex;
    gap: 20px;
}

.avatar-preview {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 10px;
    object-fit: cover;
}

input[type="file"] {
    padding: 10px;
}

input, textarea, button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

button.save-button {
    background-color: var(--theme-color-account);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

button.save-button:hover {
    background-color: var(--theme-color-account-dark);
}

.button.logout {
    margin-top: 20px;
    background-color: var(--theme-color-account);
}
</style>
