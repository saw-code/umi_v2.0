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
  layout: {
    navTheme: 'light',
    layout: 'mix',
    contentWidth: 'fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
    title: 'Rast CRM',
    locale: true,
    pwa: false,
    logo: 'https://belrastterminal.ru/media/image_1_2.png',
    iconfontUrl: '',
  },
  theme: {
    'primary-color': '#1895bb',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes, // файл с навигацией по страницам
  fastRefresh: {},
});
