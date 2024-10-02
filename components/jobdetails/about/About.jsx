import React from 'react'
import { View, Text } from 'react-native'
import styles from './about.style'

const About = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>
          {data
            .replace(/•/g, '\n\n•') 
            .replace(/:/g, ':\n')
            .replace(/\s*\w+\:/g, '\n$&')}
        </Text>
      </View>
    </View>
  )
}

export default About
