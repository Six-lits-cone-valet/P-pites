export const usePepitesFilterState = () => {
    return useState<{
        type: Object,
        category: Object,
        options: Object,
    }>('pepitesFilterState',
        () => ({
            type: {},
            category: {},
            options: {}
        })
    );
}