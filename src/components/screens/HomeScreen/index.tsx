//import { Props } from '@react-native-community/checkbox/dist/CheckBox.android'
import React, {useState} from 'react'
import { View, Text } from 'react-native'
import IAlbum from '../../../models/IAlbum'
import IPhotos from '../../../models/IPhotos'
import AlbumDetails from '../../organisms/AlbumDetails'
import AlbumList from '../../organisms/AlbumList'

    const HomeScreen: React.FC = ()  => {
        
      const [selecteAlbum, setSelectedAlbum] = useState<IAlbum | null>(null);  
     
    return (
        <View>
            {selecteAlbum ? (
            <AlbumDetails 
            selectedAlbum={selecteAlbum}
            setSelectedAlbum={setSelectedAlbum} 
            /> 
            ) : ( 
            <AlbumList setSelectedAlbum={setSelectedAlbum}
            />
            )}
        </View>
    )
}

export default HomeScreen
