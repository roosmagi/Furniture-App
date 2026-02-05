import type { ImageSourcePropType } from 'react-native';

export type Category = { id?: number; title: string; image: ImageSourcePropType };

export const categories: Category[] = [
  { title: 'Popular', image: require('@/assets/icons/popular.svg') },
  { id: 1, title: 'Chair', image: require('@/assets/icons/chair.svg') },
  { id: 2, title: 'Table', image: require('@/assets/icons/table.svg') },
  { id: 3, title: 'Armchair', image: require('@/assets/icons/armchair.svg') },
  { id: 4, title: 'Bed', image: require('@/assets/icons/bed.svg') },
  { id: 5, title: 'Lamp', image: require('@/assets/icons/lamp.svg') },
];