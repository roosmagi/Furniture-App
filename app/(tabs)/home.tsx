import { CategoryBox } from '@/components/CategoryBox';
import { Header } from '@/components/Header';
import { ProductHomeItem } from '@/components/ProductHomeItem';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [keyword, setKeyword] = useState('');

  const filteredProducts = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = selectedCategoryId ? p.category === selectedCategoryId : true;
      if (!matchesCategory) return false;
      if (!normalizedKeyword) return true;
      const name = String(p.title ?? '').toLowerCase();
      return name.includes(normalizedKeyword);
    });
  }, [selectedCategoryId, keyword]);

  return (
    <View style={styles.container}>
      <Header
        title="Find All You Need"
        leftAction="search"
        rightAction="none"
        enableSearch
        keyword={keyword}
        onKeywordChange={setKeyword}
      />

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