import React from 'react';
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
    onChange?: () => {};
    register?: () => {};
}

export const SelectComponent: React.FC<Props> = ({
    label,
    options,
    onChange
}) => {
    return(
        <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel></InputLabel>
            </FormControl>

        </Box>

    )
}