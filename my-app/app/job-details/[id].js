import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import {Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react'

import { Company, JobAbout,JobFooter,JobTabs, ScreenHeaderBtn, Specifics} from '../../components';
import {COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch';
// Array containning each tab option
const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
    // this will get the job id of the page the user is on
    const params =useSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })

    const [refreshing, setRefreshing] = useState(false);
    // this state will update the tab the user is on.
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const onRefresh = () => {}
    const displayTabContent = () =>{
        // this is switch case is where all the information for the each tab will be come from
        switch (activeTab) {
            case "Qualifications":
                return <Specifics
                    title="Qualifications"
                    // ?? if it doesnt have either highlights or qualifications then na will display
                    points={data[0].job_highlights?.Qualifications ?? ['N/A']}
                />
            case "About":
                return <JobAbout
                    info={data[0].job_description ?? "No information Provided :("}

                />
            case "Responsibilities":
                return <Specifics
                    title="Responsibilities"
                    // ?? if it doesnt have either highlights or qualifications then na will display
                    points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
                />
              
            default:
                break;
        }
    }
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
                    {/* Company data being printed on the page */}
                    <Company
                        companyLogo={data[0].employer_logo}
                        jobTitle={data[0].job_title}
                        companyName={data[0].employer_Name}
                        Location={data[0].job_country}
                    />
                    <JobTabs
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}

                    />
                    {displayTabContent()}
                </View>
            )}
            </ScrollView>
        </>

    </SafeAreaView>
  )
}

export default JobDetails;