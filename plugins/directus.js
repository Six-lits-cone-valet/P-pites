import { createDirectus, rest, authentication, readItems, readMe, createUser } from '@directus/sdk';
export default defineNuxtPlugin(() => {
    return {
        provide: {
            directus,
            directusBaseUrl,
            userLogin,
            readItems,
            getUserData,
            createUserAccount,
            logout
        },
    }
})

const directusBaseUrl = 'https://pepites.monsieuredgar.com';

const directus = createDirectus(directusBaseUrl)
    .with(rest({ credentials: 'include' }))
    .with(authentication('cookie', { credentials: 'include' }));

async function userLogin(email, password) {
    try {
        await directus.login(email, password);

        const user = await getUserData();

        loadUserData(user);
    } catch (error) {
        console.log(error);
    }
}

async function createUserAccount(firstName, lastName, email, password ) {
    try {
        const response = await directus.request(createUser({
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName
        }));

        userLogin(response.email, password);
    } catch (error) {
        console.log(error);
    }
}

async function getUserData() {
    const user = await directus.request(readMe());

    return user;
}

function loadUserData(userData) {
    const userState = useUserState();
    userState.value.userLoggedIn = true;

    const appState = useAppState();
    appState.value.showConnectionForm = false;

    appState.value.toaster = {
        show: true,
        message: 'Vous êtes connecté',
        type: 'success',
    }

    userState.value.avatarId = userData.avatar;
    userState.value.firstName = userData.first_name;
    userState.value.lastName = userData.last_name;
    userState.value.email = userData.email;
    userState.value.role = userData.role;
    userState.value.id = userData.id;
}

async function logout() {
    const appState = useAppState();
    const userState = useUserState();

    userState.value.userLoggedIn = false;
    userState.value.avatarId = null;
    userState.value.firstName = null;
    userState.value.lastName = null;
    userState.value.email = null;
    userState.value.role = null;
    userState.value.id = null;

    localStorage.removeItem('rememberMe');

    const response = await directus.logout();
    
    const router = useRouter();
    router.push('/');
}

async function autoLogin() {
    const rememberMe = localStorage.getItem('rememberMe');

    if(rememberMe) {
        const response = await directus.refresh('cookie');
        console.log(response);

        const user = await getUserData();
        loadUserData(user);
    }
    
}
autoLogin();

