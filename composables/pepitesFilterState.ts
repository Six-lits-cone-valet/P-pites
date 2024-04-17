export const usePepitesFilterState = () => {
    return useState<{
        type: Object,
        category: Object,
        options: Object,
        size: Object,
    }>('pepitesFilterState',
        () => ({
            type: {},
            category: {},
            options: {
                _and: []
            },
            size: {},
        })
    );
}