import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native'

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hooks/useFetch' 
import Tabs from '../../components/jobdetails/tabs/Tabs'
import Footer from '../../components/jobdetails/footer/Footer'
const tabs = ['About', 'Qualifications', 'Responsibilities']

const JobDetails = () => {
  const [refreshing, setRefreshing] = useState(false)
  const [activeTab, setActiveTab] = useState('About')
  const params = useGlobalSearchParams()
  const router = useRouter() 
  const { data, isLoading, error, refetch } = useFetch('job-details', {
    job_id: params.id,
  })

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    refetch()
    setRefreshing(false)
  }, [])
  const displayTabContent = () => {
    switch (activeTab) {
      case 'About':
        return <JobAbout data={data[0]?.job_description ?? 'N/A'} />
      case 'Qualifications':
        return (
          <Specifics
            title={'Qualifications'}
            point={data[0]?.job_highlights?.Qualifications ?? ['N/A']}
          />
        )
      case 'Responsibilities':
        return (
          <Specifics
            title={'Responsibilities'}
            point={data[0]?.job_highlights?.Responsibilities ?? ['N/A']}
          />
        )
      default:
        break
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension='60%'
                handlePress={() => router.back()}
              />
            ),
            headerRight: () => <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />,
            headerTitle: '',
          }}
        />
        <ScrollView
          tyle={{ flex: 1, backgroundColor: COLORS.lightWhite }}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Somethisng wen twrong</Text>
          ) : data.length == 0 ? (
            <Text>No Data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company data={data[0]} />
              <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <Footer url={data[0] ?? 'https://careers.google.com/jobs/results/'} />
      </>
    </SafeAreaView>
  )
}

export default JobDetails
