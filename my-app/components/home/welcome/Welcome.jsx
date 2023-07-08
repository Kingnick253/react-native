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
          {/* this is the search box the user will use to navigate what kind of job they are looking for. */}
        <TextInput 
          style={styles.searchInput}
          // this value will be a new state field 
          value=''
          onChange={() => {}}
          placeholder="What are you looking for?"
          placeholderTextColor="black"
        />
       </View>

      <TouchableOpacity>
        {/* this is adding a search button icon for the user to click when they fill in the container */}
        <Image
          source={icons.search}
        />
      </TouchableOpacity>

      </View>
    </View>
  )
}

export default Welcome