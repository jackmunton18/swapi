import React from 'react';
import { Container, Frame } from './styles/feature';

export default function Feature ({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Feature.Frame = function FeatureFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}