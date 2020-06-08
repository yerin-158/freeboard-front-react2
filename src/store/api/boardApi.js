import axios from 'axios';
import { DOMAIN } from '../../static/constant';

export function get(pageNumber, pageSize) {
    return axios.get(DOMAIN+'/api/boards?page='+pageNumber+'&size='+pageSize);
}

export function update(id, updatedData) {
    return axios.put(DOMAIN+'/api/boards/'+id, updatedData);
}
