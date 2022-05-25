import { createGlobalStyle } from "styled-components";
import Footer from "../components/footer/Footer";
import Nav from "../components/Nav/Nav";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}
html {
    font-size: 62.5%;

}
body {
    font-family: system-ui;
    padding: 3rem 6rem;
}

a {
    color: inherit;
    text-decoration: none;
}
`;

const Body = styled.div`
margin: auto;

@media screen and (min-width: 700px) {
  max-width: 700px;
}
`

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Nav />
            <Body>
            {children}
            <Footer />
            </Body>
        </>
    );
};

export default Layout;