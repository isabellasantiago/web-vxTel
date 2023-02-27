import { useForm } from "react-hook-form";
import * as  S from './style';


const defaultValues = {
    plan: 0,
    from: '011',
    to: '016',
    minutes: 0,
}


export const Form = () => {
    const { register } = useForm({
        defaultValues,
    })

    return(
        <S.FormStyled>

        </S.FormStyled>
    )
}