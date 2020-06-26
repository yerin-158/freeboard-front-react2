import axios from "axios";
import {DOMAIN} from "../../static/constant";

export function getComments(boardId){
    return axios.get(DOMAIN+'/api/comments?boardId='+boardId);
}

export function addComment(contents, boardId){
    return axios.post(DOMAIN+'/api/comments?boardId='+boardId, {contents: contents});
}
