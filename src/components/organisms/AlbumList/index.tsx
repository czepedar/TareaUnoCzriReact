import React, {useEffect, useState} from 'react'
import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios'
import IAlbum from '../../../models/IAlbum';
import IPhotos from '../../../models/IPhotos';
import AlbumListItem from '../../molecules/AlbumListItem';


export interface AlbumListProps {
  setSelectedAlbum: React.Dispatch<React.SetStateAction<IAlbum | null>>;
}

const AlbumList: React.FC<AlbumListProps> = ({setSelectedAlbum}) => {
    const[albums, setAlbums] = useState<IAlbum[]>([]);
    const fetchData = async () => {
      try {
        const albumResponse = await axios.get(
          'https://jsonplaceholder.typicode.com/albums',

        );

        const photoResponse = await axios.get(
          'https://jsonplaceholder.typicode.com/photos',

        );

        const albums = (albumResponse.data as IAlbum[]).map((album) => ({
          ...album,
          photos: (photoResponse.data as IPhotos[]).filter(
            photo => photo.albumId === album.id)
        })); 

        //console.log(albums)
        setAlbums(albums)
      }catch (error) {
        console.error(error)
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <View>
        {albums.length > 0 ? (
          <FlatList
          data={albums}
          renderItem={({item, index}) => (
          <AlbumListItem 
          key={item.id} 
          album={item} 
          index={index}
          setSelectedAlbum={setSelectedAlbum}
          />)}
          />
        ) : (
          
          <ActivityIndicator  color="#000"/>
          
        )}
      </View>
    );
  }        
      
export default AlbumList
