// Конфигурация среды выполнения
// Umi использует файл app.tsx для расширения конфигураций нашего приложения во время выполнения.
// Этот файл полезен для настройки начального состояния с помощью плагина начального состояния и макета.
import routes from '../config/routes';
import { RunTimeLayoutConfig } from 'umi';
import HeaderOptions from './components/HeaderOptions';

export const layout: RunTimeLayoutConfig = () => {
  return {
    routes,
    rightContentRender: () => <HeaderOptions />,
    onPageChange: () => {},
  };
};
