import axios from 'axios';

const GOT_query = axios.create({
    baseURL: 'https://www.anapioficeandfire.com/api',
    withCredentials: false,
    headers: {
        Accept : 'application/json',
        'Content-Type' : 'application/json',
        }
    }
);

export default {
    getHouses(perPage, page){
        return GOT_query.get('/houses?pageSize=' + perPage + '&page=' + page);
    },
    getHouse(id){
        return GOT_query.get('/houses/'+id);
    }
}
