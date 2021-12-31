import axios from 'axios';

const WEB_SERVER = window.location.hostname;

const routes = {
    libraryList: WEB_SERVER + '/collections/library/list',
    libraryItem: WEB_SERVER + '/collections/library/item',
    browse: WEB_SERVER + '/collections/browse',
    search: WEB_SERVER + '/collections/search',
}

export const getLibraryList = async _=> {
    console.log('getting list');
    let response = await axios.get(routes.libraryList);
    return response.data;
}

export const getLibraryItem = async id => {
    console.log('getting item');
    let response = await axios.get(`${ routes.libraryItem }?id=${ id }`);
    return response.data;
}

export const searchForItems = async terms => {
    let query = {};
    terms.forEach( t => query[t.type] = t.value);

    let params = {
        collection: 'library',
        params: {
            query,
            options: {
                sort: { Title: 1 }
            }
        }
    };

    let response = await axios.post(routes.search, params);
    console.log(response);
    return response.data;
}

export const getBrowseList = async letter => {
    let params = {
        collection: 'library',
        letter
    };

    let response = await axios.post(routes.browse, params);
    return response.data;
}
