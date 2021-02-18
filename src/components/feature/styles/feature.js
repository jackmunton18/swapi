import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    
`;
export const Frame = styled.div`
    margin-top: -100px;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow:hidden;
    
    & video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        height: 140%;
        width: auto;
        object-fit: cover;
        @media (min-aspect-ratio: 16/9) {
            height: auto;
            width: 140%;
        }
    }
`;