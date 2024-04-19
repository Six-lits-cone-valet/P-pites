export default defineNuxtPlugin(() => {
    return {
        provide: {
            activateToaster
        },
    }
})

function activateToaster(message, type) {
    const appState = useAppState();
    appState.value.toaster = {
        show: true,
        message: message,
        type: type,
    }

    setTimeout(() => {
        appState.value.toaster.show = false;
    }, 3000);

    setTimeout(() => {
        appState.value.toaster = {
            show: false,
            message: "",
            type: ""
        };
    }, 4000);

}