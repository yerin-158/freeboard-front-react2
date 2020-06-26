import axios from "axios";
import {DOMAIN} from "../../static/constant";

export function getComments(boardId){
    return axios.get(DOMAIN+'/api/comments?boardId='+boardId);
}

