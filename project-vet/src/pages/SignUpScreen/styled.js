import styled from "styled-components"

export const ScreenContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 100px;
    margin-top: 10vh;;
`

export const LogoImage = styled.img `
    width: 70vw;
    max-width: 350px;
`

export const TextField = styled.input `
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    max-width: 80rem;
    width: 100%;
    padding: 0.7rem,;
    font-size: 1.4rem;
    margin: 1rem auto;
    border-radius: 8px;
`

export const Button = styled.button `
    border-radius: 4rem;
    box-shadow: none;
    padding: 1rem 2.8rem;
    font-weight: 600;
    width: 102%;
    transition: 0.3s ease;
    :hover{
        box-shadow: 0 0 1.6rem;
    }
`