import { defineConfig } from 'umi';
import routes from './routes'

// Этот файл при создании проекта находился в корне проекта и назывался config.ts
// Этот файл содержит конфигурация для Umi и его плагинов
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
