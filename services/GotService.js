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
    getHouses(){
        return GOT_query.get('/houses');
    },
    getHouse(id){
        return GOT_query.get('/houses/'+id);
    }
}
