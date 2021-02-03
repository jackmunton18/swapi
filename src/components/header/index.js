import React from 'react';
import {Container, Image, Group, Link } from './styles/header';

export default function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Image = function HeaderImage({children, ...restProps}) {
    return <Image {...restProps}>{children}</Image>
};
Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
};
Header.Link = function HeaderLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
};