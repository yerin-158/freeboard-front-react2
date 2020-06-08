import type from './type'
import {get, update} from "../../api/boardApi";
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

export const clickRow = (rowData) => ({
    type: type.CLICK_ROW,
    payload: rowData
})

export const closeModal = () => ({
    type: type.CLOSE_MODAL,
})

export const modifyData = (id, updatedData, allData) => dispatch => {
    return update(id, updatedData)
        .then(response => {
            allData.forEach(function (element) {
                if(element.id == id){
                    for (var key in updatedData){
                        element[key] = updatedData[key];
                    }
                    return;
                }
            })

            dispatch({
                type: type.MODIFY_DATA,
                payload: allData,
            })
        }).catch(error => {
            /* error control */
        })
}
