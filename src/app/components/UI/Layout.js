import styled from 'styled-components';

//Styles
import GlobalStyle from '../../styles/GlobalStyle'

//Components
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

export default function Layout({children}) {

    return (
        <Wrapper>
            <GlobalStyle/>
            <Header/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;

const Main = styled.div`
    min-height: calc(100vh - 200px);
`;
