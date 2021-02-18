import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    position: relative;
    z-index: 2;
    height: 80px;
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
    text-transform: uppercase;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    &:last-of-type {
        margin: 0;
    }
`;
