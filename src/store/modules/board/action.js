import type from './type'
import {get} from "../../api/boardApi";

export const changePage = (pageNumber, pageSize) => dispatch => {
    var testData = [{name: 'Mehmet', surname: '안녕하세요 ^^ 5-1', birthYear: 1987, birthCity: 63},
        {name: 'Zerya Betül', surname: '글 제목입니다.', birthYear: 2017, birthCity: 34},
        {name: 'Bread', surname: '게시판 테스트', birthYear: 2011, birthCity: 34},
        {name: 'Jonny', surname: 'Material-table 이용하기', birthYear: 2012, birthCity: 17},
        {name: 'Sera', surname: '페이징 처리 이용하기', birthYear: 2007, birthCity: 17}];

    return get(pageNumber, pageSize)
        .then(response => {
            const selectedData = testData.concat(response.data.contents).concat(testData);
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
