import React from 'react'
import { View, Text,TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'

const TabButton = ({ name, activeTab, onHandleSearchType }) => (
  <TouchableOpacity style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >

    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
)

// these are the props we have from [id].js Tabs component
const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}> 
      <FlatList
        data={tabs}
        // this renderItem property will be how we specify how each item will be rendered
        renderItem={({ item }) => (
            <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
            />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}

export default Tabs