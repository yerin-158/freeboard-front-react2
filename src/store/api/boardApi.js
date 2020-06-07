import axios from 'axios';
import { DOMAIN } from '../../static/constant';

export function get(pageNumber, pageSize) {
    return axios.get(DOMAIN+'/api/boards?page='+pageNumber+'&size='+pageSize);
}
