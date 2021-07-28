import styled from '@emotion/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Image } from 'react-native'
import IPhotos from '../../../models/IPhotos'

export interface PhotoListItemProps {
    photoL: IPhotos;
}

const PhotoListItem: React.FC<PhotoListItemProps> = ({photoL}) => {
    const {albumId,id, title, thumbnailUrl} = photoL
    return (
        <Container>
            
            <Text>
            {id}-{title} {"\n"}
            <Image style={stylesImage.image} source={{uri: thumbnailUrl}}/></Text>
           
        </Container>
    )
} 

export default PhotoListItem

const Container  = styled.View`
    display: flex;
    flex-direction: row;
`
const stylesImage = StyleSheet.create({
    image: {
        width: 100,
        height: 100,


    }
})
