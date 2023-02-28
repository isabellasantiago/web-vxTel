import React, { useState } from 'react';
import { Header } from '@/presentation/components';
import { ReactComponent as MobilePayment } from '@/presentation/assets/mobile_payment.svg'
import * as S from './style';
import { Form } from '../components/Form';
import { ICost } from '@/domain/interfaces/cost.interface';
import { useWindowSize } from '@/domain/interfaces/hooks/useWindowSize';



export const Page = () => {
    const [cost, setCost] = useState<ICost>({
        priceWithoutPlan: 1000,
        priceWithPlan: 1000,
    })
    const { width } = useWindowSize();

    const handleClickRecalculate = () => {
        setCost({
            priceWithoutPlan: 0,
            priceWithPlan: 0
        })
    }

    const mobile = (
        <>
            <S.Content>
                    <S.PContainer>
                        <S.Title>Transparência é compromisso.</S.Title>
                        <S.P>
                            Temos o compromisso de ser transparente com você! <br/>Sendo assim, criamos essa página para você calcular o custo da sua ligação!
                        </S.P>
                    </S.PContainer>
                    <S.FormContainer>
                        {cost.priceWithPlan !== 0 ? (
                            <S.ResultContainer>
                                <S.ResultTitle>Com FaleMais</S.ResultTitle>
                                <S.Result>{`R$ ${cost.priceWithPlan}`}</S.Result>
                                <S.ResultTitle>Sem FaleMais</S.ResultTitle>
                                <S.Result>{`R$ ${cost.priceWithoutPlan}`}</S.Result>
                                <S.RecalculateBtn onClick={handleClickRecalculate}>Recalcular</S.RecalculateBtn>
                            </S.ResultContainer>
                        ) : (
                            <Form
                                setCost={setCost}
                            />
                        )}
                    </S.FormContainer>
            </S.Content>
        </>
    )

    const others = (
        <>
            <S.Content>
                <S.PContainer>
                    <S.Title>Transparência é compromisso.</S.Title>
                    <S.P>
                        Temos o compromisso de ser transparente com você! <br/>Sendo assim, criamos essa página para você calcular o custo da sua ligação!
                    </S.P>
                </S.PContainer>
                    <S.FormContainer>
                        <Form
                            setCost={setCost}
                        />
                        <S.ResultContainer>
                            <S.ResultTitle>Com FaleMais</S.ResultTitle>
                            <S.Result>{`R$ ${cost.priceWithPlan}`}</S.Result>
                            <S.ResultTitle>Sem FaleMais</S.ResultTitle>
                            <S.Result>{`R$ ${cost.priceWithoutPlan}`}</S.Result>
                        </S.ResultContainer>
                    </S.FormContainer>
                </S.Content>
                {width < 450 ? null : (<MobilePayment 
                    style={{
                        width: '30%',
                        maxHeight: '300px',
                    }}
                />)}
        </>
    )

    return (
        <S.PageContainer>
            <Header/>
            <S.PageContent width={width}>
                {width > 680 ? others : mobile}
            </S.PageContent>
        </S.PageContainer>
    )
}