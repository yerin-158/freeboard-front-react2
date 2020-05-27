import axios from 'axios';


export async function login(accountId, password) {
    const prev = '/freeboard02';
    debugger;

    try {
        const response = await  axios.post(prev+'/api/users?type=LOGIN',
            {accountId: accountId, password: password});
        return response;
    } catch (error) {

    }

}
