import {createAction} from "redux-actions";
import type from './type'

export const changePage = createAction(
    type.CHANGE_PAGE,
    (pageNumber, selectedData) => ({
        pageNumber, selectedData
    })
)

export const changePageSize = createAction(
    type.CHANGE_PAGE_SIZE,
    (pageSize, selectedData) => ({
        pageSize, selectedData
    })
)
