export default {
  nitro: {
    preset: 'vercel-edge',
  },
  alias: {
    assets: '/<rootDir>/assets',
  },
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
  ]
};
