import { CategoryBox } from '@/components/CategoryBox';
import { ProductHomeItem } from '@/components/ProductHomeItem';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { Image } from 'expo-image';
import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    if (!selectedCategoryId) return products;
    return products.filter((p) => p.category === selectedCategoryId);
  }, [selectedCategoryId]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/search.svg')}
          style={styles.searchIcon}
        />
        <Text style={styles.headerText}>Find All You Need</Text>
      </View>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item, index) => String(item.id ?? `popular-${index}`)}
        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        renderItem={({ item }) => (
          <CategoryBox
            item={item}
            selected={(item.id ?? null) === selectedCategoryId}
            onPress={() => setSelectedCategoryId(item.id ?? null)}
          />
        )}
      />

      <FlatList
      data={filteredProducts}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.content}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <ProductHomeItem item={item} />}
      ListFooterComponent={<View style={{ height: 24 }} />}
      showsVerticalScrollIndicator={false}
    />  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    gap: 16,
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: '#4F63AC',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#303030',
  },
  listContent: {
    paddingHorizontal: 16,
    marginTop: 16,
    paddingBottom: 10,
  },
  listSeparator: {
    width: 20,
  },
  categoryList: {
    marginBottom: 12,
  },
  row: {
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  content: {
    paddingTop: 8,
    backgroundColor: '#fff',
  },

});