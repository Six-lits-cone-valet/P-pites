export const useAppState = () => {
    return useState<{
        userLoggedIn: boolean,

    }>('appState',
        () => ({
            userLoggedIn: false,
        })
    );
}