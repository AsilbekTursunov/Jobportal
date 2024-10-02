import React from 'react'
import { View, Text, Image, Linking } from 'react-native'

import styles from './footer.style'
import { TouchableOpacity } from 'react-native'
import { icons } from '../../../constants'

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image source={icons.heartOutline} resizeMode='contain' style={styles.likeBtnImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyBtnText} onPress={() => Linking.openURL(url?.job_apply_link)}>
          Apply Job
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer
 
