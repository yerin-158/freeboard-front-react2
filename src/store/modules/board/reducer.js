import {handleActions} from 'redux-actions'
import type from './type'
import {BOARD_PAGE_SIZE} from '../../../static/constant';

const initialState = {
    pageNumber: 0,
    pageSize: BOARD_PAGE_SIZE,
    selectedData: [],
    isModalOpen: false,
    modalData: {},
    isWriteModal: false,
}

export default handleActions({
        [type.CHANGE_PAGE]: (state, action) => ({
            ...state,
            pageNumber: action.payload.pageNumber,
            pageSize: action.payload.pageSize,
            selectedData: action.payload.selectedData
        }),
        [type.CLICK_ROW]: (state, action) => ({
            ...state,
            isModalOpen: true,
            modalData: action.payload,
        }),
        [type.CLOSE_MODAL]: (state, action) => ({
            ...state,
            isModalOpen: false,
            isWriteModal: false,
            modalData: {},
        }),
        [type.MODIFY_DATA]: (state, action) => ({
            ...state,
            selectedData: action.payload,
        }),
        [type.CLICK_WRITE_BUTTON]: (state, action) => ({
            ...state,
            isModalOpen: true,
            isWriteModal: true,
        })
    }, initialState
)
