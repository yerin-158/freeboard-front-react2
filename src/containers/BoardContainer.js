import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {changePage, clickRow, closeModal, modifyData} from "../store/modules/board/action";
import Board from "../components/Board";
import ContentsModal from "../components/ContentsModal";
import main from "../store/modules/main/reducer";

const BoardContainer = ({pageNumber, pageSize, selectedData, isModalOpen, modalData, accountId, changePage, clickRow, closeModal, modifyData}) => {

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

    return (
        <div>
            <Board
                pageNumber={pageNumber}
                pageSize={pageSize}
                selectedData={selectedData}
                handleChangePageNumber={handleChangePageNumber}
                handleChangePageSize={handleChangePageSize}
                handleRowClick={clickRow}
                columns={columns}
                data={selectedData}
                accountId={accountId}
            />
            { isModalOpen ?
            <ContentsModal
                isModalOpen={isModalOpen}
                modalData={modalData}
                handleClose={closeModal}
                handleModify={handleModify}
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
    accountId: state.main.accountId
})

const mapDispatchToProps = dispatch => ({
    changePage : (pageNumber, pageSize) => dispatch(changePage(pageNumber, pageSize)),
    clickRow: (rowData) => dispatch(clickRow(rowData)),
    closeModal: () => dispatch(closeModal()),
    modifyData: (id, updatedData, allData) => dispatch(modifyData(id, updatedData, allData)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer)
