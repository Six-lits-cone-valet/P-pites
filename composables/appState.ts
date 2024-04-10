export const useAppState = () => {
    return useState<{
        showConnectionForm: boolean,
        toaster: Object
    }>('appState',
        () => ({
            showConnectionForm: false,
            toaster: {
                show: false,
                message: '',
                type: 'success'
            }
        })
    );
}