import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'
import { TouchableOpacity } from 'react-native'

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.btn(item, activeTab)}
            onPress={() => setActiveTab(item)}
          >
            <Text style={styles.btnText(item, activeTab)}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        horizontal
      />
    </View>
  )
}

export default Tabs
