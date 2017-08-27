const APP_ROOT = '~/www-data/react/initializers/server/index.js';
const API_ROOT = '~/www-data/react-blog-server/index.js';

module.exports = {
  apps: [
    {
      name: 'blog client',
      script: APP_ROOT,
      env: {
        'NODE_ENV': 'development'
      },
      env_production: {
        'NODE_ENV': 'production'
      }
    },
    {
      name: 'blog server',
      script: API_ROOT
    }
  ]
};