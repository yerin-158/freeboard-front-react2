import React, {useEffect, useState, useRef} from "react";
import {connect} from 'react-redux';
import {changePage, clickRow, closeModal, clickWriteButton, modifyData, keywordSearch, changeShowAllContents} from "../store/modules/board/action";
import Board from "../components/Board";
import ContentsModal from "../components/ContentsModal";
import {deleteOne, post} from "../store/api/boardApi";
import Topbar from "../components/Topbar";
import TextField from '@material-ui/core/TextField';

const BoardContainer = ({pageNumber, pageSize, selectedData, isModalOpen, modalData, accountId, isWriteModal, isSearch, keyword, boardId, changePage, clickRow, closeModal, clickWriteButton, modifyData, keywordSearch, changeShowAllContents}) => {

    useEffect(() => {
        changePage(pageNumber, pageSize);
    }, [])

    const columns = [
        {title: '제목', field: 'title'},
        {title: '작성자', field: 'writer.accountId'},
        {title: '작성일시', field: 'createdAt'},
    ]

    const handleChangePageNumber = (pageNumber) => {
        console.log("handleChangePageNumber");
        changePage(pageNumber, pageSize);
    };

    const handleChangePageSize = (pageSize) => {
        console.log("handleChangePageSize");
        changePage(pageNumber, pageSize);
    };

    const handleModify = (updatedData) => {
        modifyData(modalData.id, updatedData, selectedData.slice(0));
        closeModal();
    }

    const handleDelete = () => {
        deleteOne(modalData.id)
            .then(response => {
                changePage(pageNumber, pageSize);
                closeModal();
            });
    }

    const handleWrite = (writeData) => {
        post(writeData)
            .then(response => {
                changePage(0, pageSize);
                closeModal();
            })
    }

    return (
        <div>
            <Topbar
                title="게시판"
                accountId={accountId}
            />
            <Board
                key={boardId}
                pageNumber={pageNumber}
                pageSize={pageSize}
                selectedData={selectedData}
                keywordInStore={keyword}
                handleChangePageNumber={handleChangePageNumber}
                handleChangePageSize={handleChangePageSize}
                handleWriteButtonClick={clickWriteButton}
                handleRowClick={clickRow}
                handleSearch={keywordSearch}
                handleShowAllContentsButton={changeShowAllContents}
                columns={columns}
                data={selectedData}
                accountId={accountId}
            />
            { isModalOpen ?
            <ContentsModal
                userLoggedIn={accountId}
                isModalOpen={isModalOpen}
                modalData={modalData}
                isSearch={isSearch}
                keyword={keyword}
                handleClose={closeModal}
                handleDelete={handleDelete}
                handleSave={isWriteModal? handleWrite : handleModify}
                isWriteModal={isWriteModal}
            />
            : null}
        </div>
    );
}

const mapStateToProps = state => ({
    pageNumber : state.board.pageNumber,
    pageSize : state.board.pageSize,
    selectedData : state.board.selectedData,
    isModalOpen: state.board.isModalOpen,
    modalData: state.board.modalData,
    accountId: state.main.accountId,
    isWriteModal: state.board.isWriteModal,
    isSearch: state.board.isSearch,
    keyword: state.board.keyword,
    boardId: state.board.boardId,
})

const mapDispatchToProps = dispatch => ({
    changePage : (pageNumber, pageSize) => dispatch(changePage(pageNumber, pageSize)),
    clickRow: (rowData) => dispatch(clickRow(rowData)),
    closeModal: () => dispatch(closeModal()),
    clickWriteButton: () => dispatch(clickWriteButton()),
    modifyData: (id, updatedData, allData) => dispatch(modifyData(id, updatedData, allData)),
    changeShowAllContents: (pageSize) => dispatch(changeShowAllContents(pageSize)),
    keywordSearch: (pageSize, searchType, keyword) => dispatch(keywordSearch(pageSize, searchType, keyword)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer)
