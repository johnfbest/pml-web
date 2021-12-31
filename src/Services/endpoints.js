import axios from 'axios';

const WEB_SERVER = 'http://localhost:8000';

const routes = {
    libraryList: WEB_SERVER + '/collections/library/list',
    libraryItem: WEB_SERVER + '/collections/library/item'
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