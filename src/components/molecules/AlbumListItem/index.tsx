import styled from '@emotion/native'
import React from 'react'
import { FC } from 'react'
import { View, Text } from 'react-native'
import IAlbum from '../../../models/IAlbum'

export interface AlbumListItemProps{
    album: IAlbum;
    index: number;
    setSelectedAlbum: React.Dispatch<React.SetStateAction<IAlbum | null>>;
}

const AlbumListItem: FC<AlbumListItemProps> = ({
    album, 
    index,
    setSelectedAlbum}) => {

    const onPress = () => {
        setSelectedAlbum(album)
    }

    return (
        <ItemContainer onPress={onPress}>
            <Text>
                <Text>{++index}-{album.title}</Text>
            </Text>
        </ItemContainer>
    )
}

const ItemContainer = styled.TouchableOpacity`
background-color: #00aae4;
border-radius: 09px;
padding: 8px 12px;
margin: 1px 0;
`

export default AlbumListItem




