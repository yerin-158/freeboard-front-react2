import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {changePage, clickRow, closeModal, clickWriteButton, modifyData} from "../store/modules/board/action";
import Board from "../components/Board";
import ContentsModal from "../components/ContentsModal";
import {deleteOne, post} from "../store/api/boardApi";
import main from "../store/modules/main/reducer";

const BoardContainer = ({pageNumber, pageSize, selectedData, isModalOpen, modalData, accountId, isWriteModal, changePage, clickRow, closeModal, clickWriteButton, modifyData}) => {

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
            <Board
                pageNumber={pageNumber}
                pageSize={pageSize}
                selectedData={selectedData}
                handleChangePageNumber={handleChangePageNumber}
                handleChangePageSize={handleChangePageSize}
                handleWriteButtonClick={clickWriteButton}
                handleRowClick={clickRow}
                columns={columns}
                data={selectedData}
                accountId={accountId}
            />
            { isModalOpen ?
            <ContentsModal
                userLoggedIn={accountId}
                isModalOpen={isModalOpen}
                modalData={modalData}
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
    isWriteModal: state.board.isWriteModal
})

const mapDispatchToProps = dispatch => ({
    changePage : (pageNumber, pageSize) => dispatch(changePage(pageNumber, pageSize)),
    clickRow: (rowData) => dispatch(clickRow(rowData)),
    closeModal: () => dispatch(closeModal()),
    clickWriteButton: () => dispatch(clickWriteButton()),
    modifyData: (id, updatedData, allData) => dispatch(modifyData(id, updatedData, allData)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer)
