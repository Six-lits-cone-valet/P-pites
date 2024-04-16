import { 
    createDirectus, 
    rest, 
    authentication, 
    readItems, 
    readItem,
    readMe, 
    createUser,
    createItem,
    updateItem,
    deleteItem
} from '@directus/sdk';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            directus,
            directusBaseUrl,
            userLogin,
            readItems,
            readItem,
            getUserData,
            createUserAccount,
            logout,
            createItem,
            updateItem,
            deleteItem
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
        const appState = useAppState();
        appState.value.toaster = {
            show: true,
            message: error.errors[0].message,
            type: 'error',
        }
        
        console.log(error);
    }
}

async function createUserAccount(userData ) {

    try {
        const response = await directus.request(createUser(userData));

        if(!response.errors) {
            userLogin(response.email, userData.password);
        }

    } catch (error) {
        const appState = useAppState();
        appState.value.toaster = {
            show: true,
            message: error.errors[0].message,
            type: 'error',
        }
        console.log(error)
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

    userState.value.avatarFileId = userData.frontEndAvatar;
    userState.value.firstName = userData.first_name;
    userState.value.lastName = userData.last_name;
    userState.value.email = userData.email;
    userState.value.role = userData.role;
    userState.value.id = userData.id;
}

async function logout() {
    const userState = useUserState();

    userState.value.userLoggedIn = false;
    userState.value.avatarId = null;
    userState.value.firstName = null;
    userState.value.lastName = null;
    userState.value.email = null;
    userState.value.role = null;
    userState.value.id = null;

    localStorage.removeItem('rememberMe');

    await directus.logout();
    
    const router = useRouter();
    router.push('/');
}

async function autoLogin() {
    const rememberMe = localStorage.getItem('rememberMe');

    if(rememberMe) {
        const response = await directus.refresh('cookie');

        const user = await getUserData();
        loadUserData(user);
    }
    
}

autoLogin();

