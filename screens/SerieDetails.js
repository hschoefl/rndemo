import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Networks from '../components/Networks';

const SerieDetails = ({route, navigation}) => {
  const tv_id = route.params.tv_id;
  const [serieDetails, setSerieDetails] = useState();

  useLayoutEffect(() => {
    if (serieDetails) {
      navigation.setOptions({
        title: serieDetails.name,
      });
    }
  }, [serieDetails, navigation]);

  useEffect(() => {
    const fetchSerieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${tv_id}?api_key=5a6cf7a77a4a9a335350685f86911f4c&language=de`,
      );

      const data = await response.json();

      if (data) {
        setSerieDetails(data);
        console.log(data);
      }
    };

    fetchSerieDetails();
  }, [tv_id]);

  // if state is not "ready" render something else
  if (!serieDetails) {
    return (
      <View>
        <Text>Fetching Details</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>{serieDetails.name}</Text>
      <Networks networks={serieDetails.networks} />
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${serieDetails.backdrop_path}`,
        }}
      />
      <Text style={styles.overview}>{serieDetails.overview}</Text>
    </ScrollView>
  );
};

export default SerieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 32,
    color: 'black',
  },
  image: {
    width: '95%',
    height: 200,
    resizeMode: 'contain',
  },
  overview: {
    textAlign: 'left',
    fontSize: 18,
    padding: 4,
  },
});
