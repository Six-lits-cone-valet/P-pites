// This file uses the Directus SDK to connect to the Directus 
// API and fetch data from the Directus database. 

import { createDirectus, rest, readItems, authentication } from '@directus/sdk';

export { directusBaseUrl, directusGetItems };

const directusBaseUrl = 'https://pepites.monsieuredgar.com/';

const directus = createDirectus(directusBaseUrl).with(authentication('json')).with(rest());

const directusGetItems = async (collection, queryParams) => {
    const items = await directus.request(
        readItems(collection, queryParams)
    )
    return items;
}

