import React from 'react'
import { View, Text,TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'

const TabButton = ({name, activeTab, onHandleSearchType}) => (
  <TouchableOpacity>
    <Text>{name}</Text>
  </TouchableOpacity>
)

// these are the props we have from [id].js Tabs component
const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}> 
      <FlatList
        data={tabs}
        // this renderItem property will be how we specify how each item will be rendered
        renderItem={() => (
            <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
            />
        )}
      />
    </View>
  )
}

export default Tabs