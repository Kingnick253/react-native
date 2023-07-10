
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import  PopularJobCard  from '../../common/cards/popular/PopularJobCard';
import styles from './popularjobs.style';
 

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    // title section
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
      </View>
      {/* the rest of the content */}
      <View style={styles.cardsContainer}>
        
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong </Text>
        ) : (
          <FlatList 
          // test data till api is connected
            data={[1,2,3,4]}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
              />
            )}
            // Again same similar to .map in regular react
            keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium}}
              horizontal
          />
        )}



      </View>
    </View>
  )
}

export default Popularjobs