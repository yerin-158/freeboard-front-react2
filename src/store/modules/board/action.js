import type from './type'
import {get} from "../../api/boardApi";
import {getData} from "../../../helper/boardHelper";

export const changePage = (pageNumber, pageSize) => dispatch => {

    return get(pageNumber+1, pageSize)
        .then(response => {
            const selectedData = getData(pageNumber, pageSize, response);
            dispatch({
                type: type.CHANGE_PAGE,
                payload: {
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    selectedData: selectedData
                }
            })
        }).catch(error => {
            /* error control */
        })
}
