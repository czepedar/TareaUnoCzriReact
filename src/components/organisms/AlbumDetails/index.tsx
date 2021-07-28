
import styled from '@emotion/native'
import React from 'react'
import { Text,Button } from 'react-native'
import IAlbum from '../../../models/IAlbum'
import IPhotos from '../../../models/IPhotos'
import PhotoListItem from '../../molecules/PhotoListItem'

export interface AlbumDetailsProps{
    selectedAlbum: IAlbum;
    setSelectedAlbum: React.Dispatch<React.SetStateAction<IAlbum | null>>
}


const AlbumDetails: React.FC<AlbumDetailsProps> = ({
    selectedAlbum,
    setSelectedAlbum}) => {

        const {id, title, photos} = selectedAlbum

    const onBackPress = () => {
        setSelectedAlbum(null);
    };

    return (

        <Container>
             <CustomText>Titulo Album:</CustomText>
             <Text>{title}</Text>

             <CustomText>Detalle Album:</CustomText>
            {photos && (
                <AlbList 
                data={photos}
                renderItem={({item}) => <PhotoListItem photoL={item as IPhotos}  />}
            />
            )}
            <Button title="Regresar" onPress={onBackPress}/>
        </Container>
    )
}

const Container = styled.View`
    padding: 12px;
    height: 100%;
`

const AlbList = styled.FlatList`
    padding: 2px
`

const CustomText = styled.Text`
    font-size: 18px
`

export default AlbumDetails

