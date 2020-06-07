import {handleActions} from 'redux-actions'
import type from './type'
import {BOARD_PAGE_SIZE} from '../../../static/constant';

const initialState = {
    pageNumber : 0,
    pageSize : BOARD_PAGE_SIZE,
    selectedData : [{name: 'Mehmet', surname: '안녕하세요 ^^ 5-1', birthYear: 1987, birthCity: 63},
        {name: 'Zerya Betül', surname: '글 제목입니다.', birthYear: 2017, birthCity: 34},
        {name: 'Bread', surname: '게시판 테스트', birthYear: 2011, birthCity: 34},
        {name: 'Jonny', surname: 'Material-table 이용하기', birthYear: 2012, birthCity: 17},
        {name: 'Sera', surname: '페이징 처리 이용하기', birthYear: 2007, birthCity: 17},
        {name: 'Simson', surname: '테스트 데이터 5-2', birthYear: 1999, birthCity: 8},
        {name: 'Cerry', surname: '야호 ㅋㅋ!!', birthYear: 1997, birthCity: 53},
        {name: 'Zebra', surname: '잘 넘어가나요?', birthYear: 1987, birthCity: 15},
        {name: 'M.J.', surname: '오키오키 ', birthYear: 1999, birthCity: 54},
        {name: 'K.Son', surname: 'ㅋ아니..', birthYear: 2002, birthCity: 37},]
}

export default handleActions({
        [type.CHANGE_PAGE]: (state, action) => ({
            ...state,
            pageNumber: action.payload.pageNumber,
            pageSize: action.payload.pageSize,
            selectedData: action.payload.selectedData
        }),
    }, initialState
)
