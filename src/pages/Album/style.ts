import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;


    button {
        margin: 0 0 15px 15px;
        cursor: pointer;
    }

    h1 {
        margin: 40px 15px;
        ::first-letter {
            text-transform: uppercase;
        }
    }

    .photos {
        max-width: 90vw;
        margin: auto;
        
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 25px;
    }
`

export const PhotoBox = styled.div`

    width: 200px;
    height: 200px;
    padding: 25px;

    border: solid 2px #000;

`