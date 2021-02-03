import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 120px;
    margin-right: 40px;
`;
export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Link = styled.a`
    color: white;
    cursor: pointer;
    margin-right: 20px;
    &:last-of-type {
        margin: 0;
    }
`;
