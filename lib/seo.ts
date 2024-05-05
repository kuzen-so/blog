export const seo = {
  title: 'Kuzen • Scholar | 开发者、设计师',
  description:
    '我叫 Kuzen，一名开发者，设计师，细节控,我对开发和设计怀有热爱🔥，喜欢创新和探索新事物，期盼与大家有深度的交流📮',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
