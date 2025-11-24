import styled from "styled-components"

export const ScreenContainer = styled.div `
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100vw;
   margin-top: 100px;
   margin-top: 10vh;
`

export const LogoImage = styled.img `
    width: 70vw;
    max-width: 350px;
`

export const Button = styled.button `
    border-radius: 4rem;
    box-shadow: none;
    padding: 1rem 2.8rem;
    font-weight: 600;
    transition: 0.3s ease;
    :hover{
        box-shadow: 0 0 1.6rem;
    }
`