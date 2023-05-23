/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TrendingMovies from './screens/TrendingMovies';
import TrendingSeries from './screens/TrendingSeries';
import Radio from './screens/Radio';
import SerieDetails from './screens/SerieDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TrendingSeries"
        component={TrendingSeries}
        options={{
          // headerShown: false,
          title: 'Trendige Serien',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="tv" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TrendingMovies"
        component={TrendingMovies}
        options={{
          title: 'Trendige Filme',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="movie-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Radio"
        component={Radio}
        options={{
          title: 'Radio Test',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="radio" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SerieDetails" component={SerieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
