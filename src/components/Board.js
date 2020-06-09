import React, {useEffect} from 'react';
import MaterialTable, {MTableToolbar} from 'material-table';
import {Button, Grid} from "@material-ui/core";

import {forwardRef} from 'react';
import {useHistory} from "react-router-dom";
import {logoutApi} from "../store/api/userApi";

import {BOARD_PAGE_SIZE} from '../static/constant';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {clickRow} from "../store/modules/board/action";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};


export default function Board({pageNumber, pageSize, selectedData, columns, data, accountId, handleChangePageNumber, handleChangePageSize, handleRowClick, handleWriteButtonClick}) {
    const history = useHistory();

    return (
        <MaterialTable
            onChangePage={handleChangePageNumber}
            onChangeRowsPerPage={handleChangePageSize}
            icons={tableIcons}
            title={"게시판" + (typeof accountId != 'undefined' && accountId != null ? " (login user : " + accountId + ")" : "")}
            columns={columns}
            data={selectedData}
            options={{
                paginationType: "stepped",
                pageSize: BOARD_PAGE_SIZE
            }}
            onRowClick={(event, rowData) => {
                handleRowClick(rowData);
            }}
            components={{
                Toolbar: props => (
                    <div>
                        <MTableToolbar {...props} />
                        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                            {typeof accountId != 'undefined' && accountId != null ?
                                <Grid>
                                    <Button color="primary" onClick={() => handleWriteButtonClick()}>글쓰기</Button>
                                    <Button onClick={async () => {
                                        await logoutApi();
                                        history.push("/")
                                    }}>로그아웃</Button>
                                </Grid>
                                :
                                <Grid>
                                    <Button color="secondary" onClick={() => history.push("/")}>로그인하기</Button>
                                </Grid>
                            }
                        </Grid>
                    </div>
                )
            }}
        />
    );
}
