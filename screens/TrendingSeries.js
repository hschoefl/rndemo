import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import SerieListItem from '../components/SerieListItem';

const TrendingSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchTrendingSeries = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/tv/week?api_key=5a6cf7a77a4a9a335350685f86911f4c&language=de',
        );
        const data = await response.json();
        setSeries(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchTrendingSeries();
  }, []);

  if (series.length === 0) {
    return (
      <View style={styles.errorView}>
        <Text style={styles.errorText}>
          Kann Trends für Serien nicht abrufen.
        </Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={series}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SerieListItem serie={item} />}
      />
    </View>
  );
};

export default TrendingSeries;

const styles = StyleSheet.create({
  errorView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
