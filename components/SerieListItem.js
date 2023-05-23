import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SerieListItem = ({serie}) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    // console.log('Item was pressed');
    navigation.navigate('SerieDetails', {tv_id: serie.id});
  };

  return (
    <Pressable onPress={onPressHandler}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${serie.poster_path}`,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{serie.name}</Text>
          <Text style={styles.overview} numberOfLines={5} ellipsizeMode="tail">
            {serie.overview}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SerieListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 150,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  imageContainer: {
    height: '100%',
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  overview: {
    marginLeft: 10,
    flex: 1,
    color: 'black',
  },
});
