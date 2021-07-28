/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import AlbumList from './src/components/organisms/AlbumList';
import HomeScreen from './src/components/screens/HomeScreen';
import IAlbum from './src/models/IAlbum';


 const App = () => {
  //const [albumes, setAlbumes] = useState<IAlbum[]>([]);

   return (
     <SafeAreaView> 
      {/*  <HomeScreen albumes={albumes} setAlbumes={setAlbumes} /> */}
      <HomeScreen/>
       {/* <AlbumList/> */}
     </SafeAreaView>
   );
 };


 export default App;
