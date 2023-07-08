import React from 'react'
import { useState } from 'react'
// components
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router';
import {icons, SIZES } from '../../../constants'
import styles from './welcome.style'

const Welcome = () => {
  // declaring router
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Testing Hello World </Text>
        <Text style={styles.welcomeMessage}>Find the Best Job for you </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
        />
       </View>
      </View>
    </View>
  )
}

export default Welcome