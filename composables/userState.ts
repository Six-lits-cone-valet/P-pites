export const useUserState = () => {
    return useState<{
        userLoggedIn: boolean,
        avatarFileId: string,
        firstName: string,
        lastName: string,
        email: string,
        role: string,
        id: string
    }>('userState',
        () => ({
            userLoggedIn: false,
            avatarFileId: '',
            firstName: '',
            lastName: '',
            email: '',
            role: '',
            id: '',
        })
    );
}