import React from 'react'
import { useState } from 'react'
// components
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router';
import {icons, SIZES } from '../../../constants'
import styles from './welcome.style'

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  // declaring router
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time")

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
      {/* added styling to the button with and empty callback function, will add more later on. */}
      <TouchableOpacity style={styles.searchBtn} onPress={() => {}}> 
        {/* this is adding a search button icon for the user to click when they fill in the container */}
        <Image
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
      </View>
      {/* for the Flatlist  */}
      <View style={styles.tabsContainer}>
        <FlatList
          data ={jobTypes}
          renderItem={( { item }) =>(
            <TouchableOpacity
            style={styles.tab(activeJobType, item)}
            // this is going to change the state of the activeJobType when clicked.
            onPress={() => {setActiveJobType(item);
              // adding the router push will send the item they pressed to the search page
              router.push(`/search/${item}`)
            }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
        
      </View>

    </View>
  )
}

export default Welcome