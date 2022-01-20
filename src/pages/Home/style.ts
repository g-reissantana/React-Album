import styled from 'styled-components'

export const Container = styled.div`

    min-height: 100vh;

`

export const Box = styled.div`
    width: 80vw;
    height: 80px;

    margin: 15px auto;

    border: solid 2px #020202;

    a {
        width: 100%;
        height: 100%;

        display: flex;  
        align-items: center;

        padding-left: 10px;

        color: rgba(0, 0, 0, .8);

        transition: 500ms;
        :hover {
            color: #f2f2f2;
            background: rgba(0, 0, 0, .8);
        }
    }


    h1 {
        ::first-letter {
            text-transform: uppercase;
        }
    }
`