import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import {Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react'

import { Company, JobAbout,JobFooter,JobTabs, ScreenHeaderBtn, Specifics} from '../../components';
import {COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch';

const JobDetails = () => {
    // this will get the job id of the page the user is on
    const params =useSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {}
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightwhite }}>

        <Stack.Screen
            options={{
                headerStyle:{backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension="60%"
                        handlePress={() => router.back()}
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.share}
                        dimension="60%"
                       
                    />
                ),
                headerTitle:''
            }}
       />
        <>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.primary}/>
            ) : error ? (
                <Text>Something Went Wrong!! </Text>
            ) :data.length === 0 ? (
                <Text>No DATA</Text>
            ) : (
                <View style={{padding: SIZES.medium, paddingBottom: 100}}>
                    <Company
                    
                    />
                    <JobTabs
                    
                    
                    />

                </View>
            )}
            </ScrollView>
        </>

    </SafeAreaView>
  )
}

export default JobDetails;