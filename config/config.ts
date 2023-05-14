import { defineConfig } from 'umi';
import routes from './routes'

// Этот файл при создании проекта находился в корне проекта и назывался config.ts
// Этот файл содержит конфигурация для Umi и его плагинов

export default defineConfig({
  locale: {
    default: 'en-US', // язык приложения по умолчанию.
    antd: true, // включить интернационализацию компонентов Ant Design.
    baseNavigator: true, // включить определение языка браузера.
    baseSeparator: '-', // разделитель, используемый в многоязычных файлах
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes, // файл с навигацией по страницам
  fastRefresh: {},
});
