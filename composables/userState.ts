export const useUserState = () => {
    return useState<{
        userLoggedIn: boolean,
        avatarId: string,
        firstName: string,
        lastName: string,
        email: string,
        role: string,
        id: string
    }>('userState',
        () => ({
            userLoggedIn: false,
            avatarId: '',
            firstName: '',
            lastName: '',
            email: '',
            role: '',
            id: '',
        })
    );
}