import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Gallery = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg'}} />
        <Image style={styles.image} source={{uri: 'https://i.blogs.es/5432d4/thumb-1920-985300/840_560.jpeg'}} />
        <Image style={styles.image} source={{uri: 'https://cdn.akamai.steamstatic.com/steam/apps/381990/capsule_616x353.jpg?t=1682711381'}} />
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: 'https://media.vandal.net/m/1-2023/202312017362844_1.jpg'}} />
        <Image style={styles.image} source={{uri: 'https://i.blogs.es/ea7e11/valorantlaunch/840_560.jpeg'}} />
        <Image style={styles.image} source={{uri: 'https://cdn.shopify.com/s/files/1/0444/8636/1241/products/WkgJ8OLvEkfoZmY65B8cudKYw8Aylp1y_png.jpg?v=1621368989'}} />
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/capsule_616x353.jpg?t=1682651227'}} />
        <Image style={styles.image} source={{uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/774171/capsule_616x353.jpg?t=1679558716'}} />
        <Image style={styles.image} source={{uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Hades.png'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    aspectRatio: 1,
    resizeMode: 'cover',
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default Gallery;
