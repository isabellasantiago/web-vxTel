import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ControllerRenderProps, FieldValues, RefCallBack } from 'react-hook-form';

interface OptType {
    value: any;
    name: string;
}

interface Props {
    label: string;
    options: Array<OptType> | undefined;
    field: ControllerRenderProps<FieldValues, any>
}

export const SelectComponent: React.FC<Props> = ({
    label,
    options,
    field
}) => {
    return(
        <Box sx={{ minWidth: 220}}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    label={label}
                    {...field}
                >
                {options?.map((opt) => {
                    return(<MenuItem value={opt.value} key={opt.value}>{opt.name}</MenuItem>)
                })}
                </Select>
            </FormControl>
        </Box>

    )
}