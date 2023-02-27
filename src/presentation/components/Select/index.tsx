import React from 'react';
import {
    FieldValues,
    UseFormRegister,
  } from "react-hook-form"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface OptType {
    value: any;
    name: string;
}

interface Props {
    label: string;
    options: Array<OptType>;
    handleChange?: () => {};
    register:  UseFormRegister<FieldValues>;
}

export const SelectComponent: React.FC<Props> = ({
    label,
    options,
    handleChange,
    register
}) => {
    return(
        <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    label={label}
                    {...register(`${label}`)}
                >
                    {options?.map((opt) => {
                        return(<MenuItem value={opt.value}>{opt.name}</MenuItem>)
                    })}
                </Select>
            </FormControl>
        </Box>

    )
}