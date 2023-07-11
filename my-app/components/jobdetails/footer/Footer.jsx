import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import { icons } from '../../../constants'
import styles from './footer.style'

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      {/* This will be a favorite button so save jobs you find */}
      <TouchableOpacity style={styles.likeBtn}> 
        <Image
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}

        
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn}
      onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}> Apply </Text>

      </TouchableOpacity>
    </View>
  )
}

export default Footer