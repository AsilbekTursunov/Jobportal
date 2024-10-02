import React from 'react'
import { View, Text, Image } from 'react-native'
 
import styles from './company.style'
import { icons } from '../../../constants'

const Company = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={styles.logoImage}
          source={{
            uri:
              data?.employer_logo !== null
                ? data.employer_logo
                : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode='cover'
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text numberOfLines={2} style={styles.jobTitle}>
          {data?.job_title}
        </Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{data?.job_publisher} / </Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} resizeMode='contain' style={styles.locationImage} />
          <Text style={styles.locationName}>{data?.job_country}</Text>
          <Text style={styles.locationName}>{data?.job_city}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company
