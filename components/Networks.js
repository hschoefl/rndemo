import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const Networks = ({networks}) => {
  return (
    <View style={styles.networkContainer}>
      {networks.map((network, index) => {
        // console.log(network.logo_path);
        if (index > 3) {
          return;
        } else {
          return (
            <Image
              key={network.id}
              style={styles.logo}
              source={{
                uri: `https://image.tmdb.org/t/p/original${network.logo_path}`,
              }}
            />
          );
        }
      })}
    </View>
  );
};

export default Networks;

const styles = StyleSheet.create({
  networkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  logo: {
    width: 75,
    height: 50,
    resizeMode: 'contain',
  },
});
