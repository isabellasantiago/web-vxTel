import { Header } from '@/presentation/components';
import { ReactComponent as MobilePayment } from '@/presentation/assets/mobile_payment.svg'
import * as S from './style';
import { Form } from '../components/Form';



export const Page = () => {
    return (
        <S.PageContainer>
            <Header/>
            <S.PageContent>
                <S.Content>
                    <S.PContainer>
                        <S.Title>Transparência é compromisso.</S.Title>
                        <S.P>
                            Temos o compromisso de ser transparente com você! Sendo assim, criamos essa página para você calcular o custo da sua ligação!
                        </S.P>
                    </S.PContainer>
                    <Form />
                </S.Content>
                <MobilePayment 
                    style={{
                        width: '30%',
                        maxHeight: '300px',
                    }}
                />
            </S.PageContent>
        </S.PageContainer>
    )
}