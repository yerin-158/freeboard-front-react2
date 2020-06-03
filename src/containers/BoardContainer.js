import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {changePage, changePageSize} from "../store/modules/board/action";
import Board from "../components/Board";

const BoardContainer = ({pageNumber, pageSize, selectedData, changePage, changePageSize}) => {

    const columns = [
        {title: '작성자', field: 'name'},
        {title: 'Surname', field: 'surname'},
        {title: 'Birth Year', field: 'birthYear', type: 'numeric'},
        {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: {34: 'İstanbul', 63: 'Şanlıurfa'},
        },
    ]

    const data = [
        {name: 'Mehmet', surname: '안녕하세요 ^^ 5-1', birthYear: 1987, birthCity: 63},
        {name: 'Zerya Betül', surname: '글 제목입니다.', birthYear: 2017, birthCity: 34},
        {name: 'Bread', surname: '게시판 테스트', birthYear: 2011, birthCity: 34},
        {name: 'Jonny', surname: 'Material-table 이용하기', birthYear: 2012, birthCity: 17},
        {name: 'Sera', surname: '페이징 처리 이용하기', birthYear: 2007, birthCity: 17},
        {name: 'Simson', surname: '테스트 데이터 5-2', birthYear: 1999, birthCity: 8},
        {name: 'Cerry', surname: '야호 ㅋㅋ!!', birthYear: 1997, birthCity: 53},
        {name: 'Zebra', surname: '잘 넘어가나요?', birthYear: 1987, birthCity: 15},
        {name: 'M.J.', surname: '오키오키 ', birthYear: 1999, birthCity: 54},
        {name: 'K.Son', surname: 'ㅋ아니..', birthYear: 2002, birthCity: 37},
        {name: 'Json', surname: '넵 열심히 하겠습니다 5-3', birthYear: 2015, birthCity: 98},
        {name: 'Merry', surname: 'MacBook Pro 팔아요', birthYear: 2017, birthCity: 11},
        {name: 'Mehmet', surname: '안녕하세요 ^^', birthYear: 1987, birthCity: 63},
        {name: 'Zerya Betül', surname: '글 제목입니다.', birthYear: 2017, birthCity: 34},
        {name: 'Bread', surname: '게시판 테스트', birthYear: 2011, birthCity: 34},
        {name: 'Jonny', surname: 'Material-table 이용하기 5-4', birthYear: 2012, birthCity: 17},
        {name: 'Sera', surname: '페이징 처리 이용하기', birthYear: 2007, birthCity: 17},
        {name: 'Simson', surname: '테스트 데이터', birthYear: 1999, birthCity: 8},
        {name: 'Cerry', surname: '야호 ㅋㅋ!!', birthYear: 1997, birthCity: 53},
        {name: 'Zebra', surname: '잘 넘어가나요?', birthYear: 1987, birthCity: 15},
        {name: 'M.J.', surname: '오키오키 5-5', birthYear: 1999, birthCity: 54},
        {name: 'K.Son', surname: 'ㅋ아니..', birthYear: 2002, birthCity: 37},
        {name: 'Json', surname: '넵 열심히 하겠습니다', birthYear: 2015, birthCity: 98},
        {name: 'Merry', surname: 'MacBook Pro 팔아요', birthYear: 2017, birthCity: 11},
        {name: 'Mehmet', surname: '안녕하세요 ^^', birthYear: 1987, birthCity: 63},
        {name: 'Zerya Betül', surname: '글 제목입니다. 5-6', birthYear: 2017, birthCity: 34},
        {name: 'Bread', surname: '게시판 테스트', birthYear: 2011, birthCity: 34},
        {name: 'Jonny', surname: 'Material-table 이용하기', birthYear: 2012, birthCity: 17},
        {name: 'Sera', surname: '페이징 처리 이용하기', birthYear: 2007, birthCity: 17},
        {name: 'Simson', surname: '테스트 데이터', birthYear: 1999, birthCity: 8},
        {name: 'Cerry', surname: '야호 ㅋㅋ!! 5-7', birthYear: 1997, birthCity: 53},
        {name: 'Zebra', surname: '잘 넘어가나요?', birthYear: 1987, birthCity: 15},
        {name: 'M.J.', surname: '오키오키 ', birthYear: 1999, birthCity: 54},
        {name: 'K.Son', surname: 'ㅋ아니..', birthYear: 2002, birthCity: 37},
        {name: 'Json', surname: '넵 열심히 하겠습니다', birthYear: 2015, birthCity: 98},
        {name: 'Merry', surname: 'MacBook Pro 팔아요 5-8', birthYear: 2017, birthCity: 11},
        {name: 'Mehmet', surname: '안녕하세요 ^^', birthYear: 1987, birthCity: 63},
        {name: 'Zerya Betül', surname: '글 제목입니다.', birthYear: 2017, birthCity: 34},
        {name: 'Bread', surname: '게시판 테스트', birthYear: 2011, birthCity: 34},
        {name: 'Jonny', surname: 'Material-table 이용하기', birthYear: 2012, birthCity: 17},
        {name: 'Sera', surname: '페이징 처리 이용하기 5-9', birthYear: 2007, birthCity: 17},
        {name: 'Simson', surname: '테스트 데이터', birthYear: 1999, birthCity: 8},
        {name: 'Cerry', surname: '야호 ㅋㅋ!!', birthYear: 1997, birthCity: 53},
        {name: 'Zebra', surname: '잘 넘어가나요?', birthYear: 1987, birthCity: 15},
        {name: 'M.J.', surname: '오키오키 ', birthYear: 1999, birthCity: 54},
        {name: 'K.Son', surname: 'ㅋ아니.. 5-10', birthYear: 2002, birthCity: 37},
        {name: 'Json', surname: '넵 열심히 하겠습니다', birthYear: 2015, birthCity: 98},
        {name: 'Merry', surname: '마지막 데이터입니다!!!!!!!', birthYear: 2017, birthCity: 11}
    ]

    const handleData = {
        get : (pageNumber, pageSize) => {
            let prevFakeData = handleData.createPrevFakeData(pageSize * pageNumber);
            let nextFakeData = handleData.createNextFakeData(pageSize);

            if (handleData.isFirstPage(pageNumber)) {
                let realData = data.slice(pageNumber * pageSize, pageSize);
                return realData.concat(nextFakeData);
            } else if (handleData.isLastPage(pageNumber)) {
                let realData = data.slice(pageNumber * pageSize, data.length);
                return prevFakeData.concat(realData);
            } else {
                let realData = data.slice(pageNumber * pageSize, (pageNumber * pageSize) + pageSize);
                return prevFakeData.concat(realData).concat(nextFakeData);
            }
        },

        createPrevFakeData : size => {
            let fakeData = Array.apply(null, new Array(size)).map(Object.prototype.valueOf, new Object());
            return fakeData.map((currentValue, index) => handleData.setFakeData(index));
        },

        createNextFakeData : size => {
            let fakeData = Array.apply(null, new Array(size)).map(Object.prototype.valueOf, new Object());
            return fakeData.map((currentValue, index) => handleData.setFakeData(index));
        },

        setFakeData : id => {
            let fakeData = new Object();
            fakeData.tableData = {id: id};
            return fakeData;
        },

        isFirstPage : pageNumber => {
            return pageNumber == 0;
        },

        isLastPage : pageNumber => {
            return data.length <= pageNumber * pageSize + pageSize;
        }

    }

    const handleChangePage = (pageNumber) => {
        changePage(pageNumber, handleData.get(pageNumber, pageSize));
    };

    const handleChangeRowPerPage = (pageSize) => {
        changePageSize(pageSize, handleData.get(pageNumber, pageSize));
    }

    return (
        <Board
            pageNumber={pageNumber}
            pageSize={pageSize}
            selectedData={selectedData}
            handleChangePage={handleChangePage}
            handleChangeRowPerPage={handleChangeRowPerPage}
            columns={columns}
            data={selectedData}
        />
    );
}

const mapStateToProps = state => ({
    pageNumber : state.board.pageNumber,
    pageSize : state.board.pageSize,
    selectedData : state.board.selectedData
})

const mapDispatchToProps = dispatch => ({
    changePage : (pageNumber, selectedData) => dispatch(changePage(pageNumber, selectedData)),
    changePageSize : (pageSize, selectedData) => dispatch(changePageSize(pageSize, selectedData)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer)
