import type { ImageSourcePropType } from 'react-native';

export type Category = { id?: number; title: string; image: ImageSourcePropType };

export const categories: Category[] = [
  { title: 'Popular', image: require('@/assets/images/popular.svg') },
  { id: 1, title: 'Chair', image: require('@/assets/images/chair.svg') },
  { id: 2, title: 'Table', image: require('@/assets/images/table.svg') },
  { id: 3, title: 'Armchair', image: require('@/assets/images/armchair.svg') },
  { id: 4, title: 'Bed', image: require('@/assets/images/bed.svg') },
  { id: 5, title: 'Lamp', image: require('@/assets/images/lamp.svg') },
];