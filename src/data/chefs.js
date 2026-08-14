import { images } from './images';

// Demo profiles only — clearly labelled in the UI — until real Manevaa
// home chefs are onboarded.
export const chefs = [
  {
    name: 'Lakshmi',
    speciality: 'Traditional South Indian',
    dish: 'Signature: Sambar & soft idlis',
    story: "I've been cooking for my family for years. Manevaa gives me a way to share the food I love making with more people.",
    image: images.chefs.lakshmi,
  },
  {
    name: 'Anitha',
    speciality: 'Homemade North Indian',
    dish: 'Signature: Rajma with slow-cooked ghee tadka',
    story: 'Every dal I make is the one my mother taught me. Cooking for others feels like keeping that recipe alive.',
    image: images.chefs.anitha,
  },
  {
    name: 'Meena',
    speciality: 'Traditional Vegetarian',
    dish: 'Signature: Sunday-style vegetable thali',
    story: 'I cook the way I would for my own children — simple, fresh, and always with a little extra care.',
    image: images.chefs.meena,
  },
  {
    name: 'Kavya',
    speciality: 'Homemade Snacks',
    dish: 'Signature: Evening chai-time mixture',
    story: 'My kitchen always smelled like something frying for guests. Now that guest could be you.',
    image: images.chefs.kavya,
  },
];
