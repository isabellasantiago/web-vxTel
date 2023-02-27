import { defaultValues } from "@/constants";
import { useForm } from "react-hook-form";
import * as  S from './style';




export const Form = () => {
    const { register } = useForm({
        defaultValues,
    })

    return(
        <S.FormStyled>

        </S.FormStyled>
    )
}