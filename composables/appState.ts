export const useAppState = () => {
    return useState<{
        showConnectionForm: boolean,
        showMenu: boolean,
        toaster: Object
    }>('appState',
        () => ({
            showConnectionForm: false,
            showMenu: false,
            toaster: {
                show: false,
                message: '',
                type: 'success'
            }
        })
    );
}