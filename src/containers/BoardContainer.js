import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {changePage} from "../store/modules/board/action";
import Board from "../components/Board";

const BoardContainer = ({pageNumber, pageSize, selectedData, changePage}) => {
    useEffect(() => {
        changePage(pageNumber, pageSize);
    }, [])

    const columns = [
        {title: '제목', field: 'title'},
        {title: '작성자', field: 'writer.accountId'},
        {title: '작성일시', field: 'createdAt'},
    ]

    const handleChangePageNumber = (pageNumber) => {
        changePage(pageNumber, pageSize);
    };

    const handleChangePageSize = (pageSize) => {
        changePage(pageNumber, pageSize);
    };

    return (
        <Board
            pageNumber={pageNumber}
            pageSize={pageSize}
            selectedData={selectedData}
            handleChangePageNumber={handleChangePageNumber}
            handleChangePageSize={handleChangePageSize}
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
    changePage : (pageNumber, pageSize) => dispatch(changePage(pageNumber, pageSize)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer)
