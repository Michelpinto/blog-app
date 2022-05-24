import { createGlobalStyle } from "styled-components";

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

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default Layout;