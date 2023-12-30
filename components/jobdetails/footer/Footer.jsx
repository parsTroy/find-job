import React from 'react'
import { View, Text, Pressable, Image, Linking } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'

// CREATE AND IMPLEMENT FUNCTIONALITY OF LIKE BUTTON (WITH LOCAL STORAGE REACT-NATIVE)

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </Pressable>

      <Pressable style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply</Text>
      </Pressable>
    </View>
  )
}

export default Footer