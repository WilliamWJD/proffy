import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function loadFavorites() {
    const response = await AsyncStorage.getItem('favorites');
    if (response) {
      const favoritedTeachers = JSON.parse(response);
      setFavorites(favoritedTeachers);
    }
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {favorites.map((item: Teacher) => {
          return <TeacherItem key={item.id} teacher={item} favorited />;
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;
