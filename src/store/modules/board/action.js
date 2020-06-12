import type from './type'
import {get, update, getForSearch} from "../../api/boardApi";
import {getData} from "../../../helper/boardHelper";

export const changePage = (pageNumber, pageSize, searchType, keyword, isSearch) => dispatch => {

    const requestApi = (isSearch && keyword.trim() != "" ?
        getForSearch(pageNumber + 1, pageSize, searchType, keyword) : get(pageNumber + 1, pageSize));

    return requestApi.then(response => {
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

export const keywordSearch = (pageSize, searchType, keyword) => dispatch => {
    const pageNumber = 0;
    return getForSearch(pageNumber + 1, pageSize, searchType, keyword)
        .then(response => {
            const selectedData = getData(pageNumber, pageSize, response);
            dispatch({
                type: type.KEYWORD_SEARCH,
                payload: {
                    keyword: keyword,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    selectedData: selectedData
                }
            })
        }).catch(error => {
            /* error control */
        })
}

export const changeShowAllContents = (pageSize) => dispatch => {
    const pageNumber = 0;

    return get(pageNumber + 1, pageSize)
        .then(response => {
            const selectedData = getData(pageNumber, pageSize, response);
            dispatch({
                type: type.CHANGE_SHOWING_ALL_CONTENTS,
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

export const clickWriteButton = () => ({
    type: type.CLICK_WRITE_BUTTON,
})


export const modifyData = (id, updatedData, allData) => dispatch => {
    return update(id, updatedData)
        .then(response => {
            allData.forEach(function (element) {
                if (element.id == id) {
                    for (var key in updatedData) {
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

export const searchTypeSelectorChange = (value) => ({
    type : type.SEARCH_TYPE_SELECTOR_CHANGE,
    payload : value
})
