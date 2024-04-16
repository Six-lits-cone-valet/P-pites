export const usePepitesFilterState = () => {
    return useState<{
        type: Object
    }>('pepitesFilterState',
        () => ({
            type: {},
        })
    );
}