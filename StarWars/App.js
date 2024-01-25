import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 FlatList,
 TouchableHighlight
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Container from './Container'
import People from './People'

cons links = [
  {title:'People'},
  {title:'Films'},
  {title:'StarShips'},
  {title:'Vehicles'},
  {title:'Species'},
  {title:'Planets'},
]