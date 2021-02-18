import React from 'react';
import {Container, Title, Carousel, Item, ItemText, ItemMeta, ItemMetaClose} from './styles/browse';

export default function Browse({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Browse.Title = function BrowseTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
}
Browse.Carousel = function BrowseCarousel({children, ...restProps}) {
    return <Carousel {...restProps}>{children}</Carousel>;
}
Browse.Item = function BrowseItem({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>;
}
Browse.ItemText = function BrowseItemText({children, ...restProps}) {
    return <ItemText {...restProps}>{children}</ItemText>;
}
Browse.ItemMeta = function BrowseItemMeta({children, ...restProps}) {
    return <ItemMeta {...restProps}>{children}</ItemMeta>;
}
Browse.ItemMetaClose = function BrowseItemMetaClose({...restProps}) {
    return <ItemMetaClose {...restProps}></ItemMetaClose>;
}