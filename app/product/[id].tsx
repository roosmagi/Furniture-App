import { Colors } from '@/constants/Colors';
import { products } from '@/data/products';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === Number(id));
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>No product was found</Text>
      </View>
    );
  }

  const allImages = product.images || [product.image];

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Image
          source={require('@/assets/icons/arrow2.svg')}
          style={styles.backIcon}
          contentFit="contain"
        />
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={allImages[selectedImageIndex]}
            style={styles.mainImage}
            contentFit="cover"
          />
        </View>

        {allImages.length > 1 && (
          <View style={styles.thumbnailContainer}>
            {allImages.map((img, index) => (
              <Pressable
                key={index}
                onPress={() => setSelectedImageIndex(index)}
                style={[
                  styles.thumbnail,
                  selectedImageIndex === index && styles.thumbnailSelected,
                ]}
              >
                <Image
                  source={img}
                  style={styles.thumbnailImage}
                  contentFit="cover"
                />
              </Pressable>
            ))}
          </View>
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>

          <View style={styles.section}>
            <Text style={styles.description}>
              {product.description}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.favoriteButton}
          onPress={() => setIsFavorite((prev) => !prev)}
        >
          <Image
            source={
              isFavorite
                ? require('@/assets/icons/favorites-solid.svg')
                : require('@/assets/icons/favorites.svg')
            }
            style={styles.favoriteIcon}
            contentFit="contain"
          />
        </Pressable>
        <Pressable style={styles.contactButton}>
          <Text style={styles.contactText}>Contact Seller</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 18,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 18,
    height: 18,
  },
  imageContainer: {
    width: '100%',
    height: 400,
    backgroundColor: '#F5F5F5',
    marginBottom: 16,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginBottom: 20,
    gap: 12,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  thumbnailSelected: {
    borderColor: Colors.primary || '#4F63AC',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    paddingHorizontal: 18,
    paddingBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#303030',
    marginBottom: 12,
    fontFamily: 'Gelasio',
  },
  price: {
    fontSize: 30,
    fontWeight: '700',
    color: '#303030',
    marginBottom: 24,
    fontFamily: 'Nunito_sans',
  },
  section: {
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: '#606060',
    lineHeight: 22,
    fontFamily: 'Nunito_sans',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 18,
    backgroundColor: '#fff',
    gap: 12,
  },
  favoriteButton: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteIcon: {
    width: 24,
    height: 24,
  },
  contactButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#4F63AC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Nunito_sans',
  },
});
