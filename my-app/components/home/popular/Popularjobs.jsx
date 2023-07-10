import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Flatlist, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { COLOR, SIZES } from '../../../constants';
import { PopularJobCard } from '../../common/cards/popular/PopularJobCard';
 
import styles from './popularjobs.style'

const Popularjobs = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Popularjobs