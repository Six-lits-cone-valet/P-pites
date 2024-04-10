export default defineNuxtRouteMiddleware(
    (to, from) => {
        const userState = useUserState();
        const appState = useAppState();

        if (to.name  === 'profil' && !userState.value.userLoggedIn) {
            appState.value.showConnectionForm = true;
            
            return navigateTo('/')
        }
    }
)