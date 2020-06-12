import {MenuItem, Select} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Selector({dataList}) {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState(dataList[0].value);

    return (<Select
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{'aria-label': 'Without label'}}
    >
        {dataList.map((data) => (
            <MenuItem key={data.value} value={data.value} selected>
                {data.print}
            </MenuItem>
        ))}
    </Select>);
}
