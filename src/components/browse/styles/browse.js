import styled from 'styled-components/macro';


export const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
`;
export const Title = styled.h1`
    text-transform:uppercase;
`;
export const Carousel = styled.div`
    display: flex;
    align-items: flex-start;
    overflow: auto;
    flex:1;
    padding-bottom: 10px;
`;
export const Item = styled.div`
    border-radius: 5px;
    cursor: pointer;    
    background: url(${({ cat, src }) => (src ? `../images/${cat}/${src - 1}.jpg` : '../images/misc/no-img.jpg')});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 392px;
    height: 216px;
    flex-shrink:0;
    margin-right: 10px;
    cursor: pointer;
    transition: all .2s ease-out;
    box-sizing: border-box;
    padding: 20px;
    text-transform: uppercase;
    display: flex;
    align-items: flex-end;

    &:hover {
        transform: scale(.95);
    }

    &:last-of-type {
        margin:0;
    }

    @media (max-width: 992px) {
        width: 196px;
        height: 108px;
    }
`;
export const ItemText = styled.p`
    font-size: 20px;
`;
export const ItemMeta = styled.div`
    position: fixed;
    top: 50%;
    background: black;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    width: 400px;
    max-width: 90vw;
`;
export const ItemMetaClose = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    &:hover {
        font-weight: bold;
    }
`;