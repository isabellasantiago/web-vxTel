import React from 'react';
import { defaultValues } from "@/common/constants";
import { Controller, useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { SelectComponent } from "../Select";
import * as  S from './style';
import { ICost } from '@/common/interfaces/cost.interface';
import { putCost } from '@/common/helpers/functions/put-cost';

interface Props {
    setCost: React.Dispatch<React.SetStateAction<ICost>>
}

export const Form: React.FC<Props> = ({
    setCost
}) => {
    const optionsDDD = [ 
        { name: '011', value: '011' },
        { name: '016', value: '016' },
        { name: '017', value: '017' },
        { name: '018', value: '018' }
    ]

    const optionsPlan = [
        { name: 'FaleMais30', value: 30 },
        { name: 'FaleMais60', value: 60 },
        { name: 'FaleMais120', value: 120 }
    ]
    
    let toOptions: typeof optionsDDD | undefined;

    const { watch, control, handleSubmit } = useForm({
        defaultValues,
    });

    const fromInput = watch('from');    

    if(!fromInput) toOptions = undefined;
    if(fromInput === '011') toOptions = optionsDDD.slice(1);
    if(fromInput !== '011') toOptions = optionsDDD.filter(({ name }) => name === '011');

    const onSubmit = async (data: any) => {
        try {
            const response = await putCost(data)
            setCost(response);

        } catch(err){
            console.log('error', err)
        }
    }

    return(
        <S.FormStyled onSubmit={handleSubmit(onSubmit)}>
            <Controller 
                name="from"
                render={({ field }) => (
                    <SelectComponent 
                        label="Origem"
                        options={optionsDDD}
                        field={field}
                    />
                 )}
                control={control}
            />
            <Controller 
                name="to"
                render={(({ field }) => (
                    <SelectComponent 
                        label="Destino"
                        options={toOptions}
                        field={field}
                    />
                ))}
                control={control}
            />
            <Controller 
                name="plan"
                render={(({field}) => (
                    <SelectComponent 
                        label="Plano"
                        options={optionsPlan}
                        field={field}
                    />
                ))}
                control={control}
            />
            <Controller 
                name="minutes"
                render={(({field}) => (
                    <TextField id="outlined-basic" label="Minutos" type="number" {...field}/>
                ))}
                control={control}
            />
            <S.SubmitButton type="submit" value="Calcular"/>
        </S.FormStyled>
    )
}