import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

//horizontal kulallnarak yatay olarak aldık ve scroll gızledık
function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;//200 veya daha fazla verı yuklemesı ıcın bu yontem daha iyi

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
