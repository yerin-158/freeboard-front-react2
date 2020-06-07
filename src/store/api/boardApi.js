import axios from 'axios';
import { DOMAIN } from '../../static/constant';

export async function get(pageNumber, pageSize) {
    try {
        return await axios.get(DOMAIN+'/api/boards?page='+pageNumber+'&size='+pageSize);
    } catch (error) {
        const response = { data : {
                code : error.response.status,
                message: error.message
            }};
        return response;
    }
}
