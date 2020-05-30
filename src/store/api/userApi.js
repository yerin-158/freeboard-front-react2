import axios from 'axios';
import { DOMAIN } from '../../static/constracts';


export async function login(accountId, password) {
    try {
        const response = await axios.post(DOMAIN+'/api/users?type=LOGIN',
            {accountId: accountId, password: password});
        return response;
    } catch (error) {

    }

}
