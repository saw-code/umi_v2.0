// excel.js
import React, { useState } from 'react';
import { Button, message } from 'antd';
import * as XLSX from 'xlsx';
import styles from './index.less';
import Icon from '@ant-design/icons';
import Table from '@ant-design/pro-table/es/Table';

function Excel() {
  const [data, setData] = useState([]);
  // @ts-ignore
  const onImportExcel = (file) => {
    // Получить загруженный объект файла
    const { files } = file.target;
    // Чтение файла через объект FileReader
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      try {
        // @ts-ignore
        const { result } = event.target;
        // Читаем весь объект таблицы Excel в двоичном потоке
        const workbook = XLSX.read(result, { type: 'binary' });
        // Сохраняем полученные данные
        // @ts-ignore
        // export let data = [];
        // проходим каждый лист для чтения (здесь по умолчанию читается только первый лист)
        for (const sheet in workbook.Sheets) {
          // esline-disable-next-line
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            // Используем метод sheet_to_json для преобразования Excel в данные JSON
            // @ts-ignore
            setData(
              data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet])),
            );
            //break; // Если берется только первая таблица, раскомментировать эту строку
          }
        }
        // Окончательно полученные и отформатированные данные json
        message.success('Успешная загрузка!');
      } catch (e) {
        // Соответствующие запросы о неправильном типе ошибки файла могут быть брошены сюда
        message.error('Неверный тип файла!');
      }
    };
    // Открыть файл в двоичном режиме
    fileReader.readAsBinaryString(files[0]);
  };
  console.log(data);

  const columns = [
    {
      title: 'Выпуск разрешен',
      dataIndex: 'Выпуск разрешен',
      key: 'Выпуск разрешен',
    },
    {
      title: 'Дата ДО-1',
      dataIndex: 'Дата ДО-1',
      key: 'Дата ДО-1',
    },
    {
      title: 'Дата закрытия транзита',
      dataIndex: 'Дата закрытия транзита',
      key: 'Дата закрытия транзита',
    },
    {
      title: 'Дата помещения на СВХ',
      dataIndex: 'Дата помещения на СВХ',
      key: 'Дата помещения на СВХ',
    },
    {
      title: 'Дата прибытия',
      dataIndex: 'Дата прибытия',
      key: 'Дата прибытия',
    },
    {
      title: 'Заявка на досмотр',
      dataIndex: 'Заявка на досмотр',
      key: 'Заявка на досмотр',
    },
    {
      title: 'Номер',
      dataIndex: 'Номер',
      key: 'Номер',
    },
    {
      title: 'Номер вагона',
      dataIndex: 'Номер вагона',
      key: 'Номер вагона',
    },
    {
      title: 'ПТД',
      dataIndex: 'ПТД',
      key: 'ПТД',
    },
    {
      title: 'Поезд',
      dataIndex: 'Поезд',
      key: 'Поезд',
    },
    {
      title: 'Станция отправления',
      dataIndex: 'Станция отправления',
      key: 'Станция отправления',
    },
    {
      title: 'Суммарный вес товара по ЖДН',
      dataIndex: 'Суммарный вес товара по ЖДН',
      key: 'Суммарный вес товара по ЖДН',
    },
    {
      title: 'Таможенная тара',
      dataIndex: 'Таможенная тара',
      key: 'Таможенная тара',
    },
    {
      title: 'Тип прибытия',
      dataIndex: 'Тип прибытия',
      key: 'Тип прибытия',
    },
    {
      title: 'Транзит закрыт',
      dataIndex: 'Транзит закрыт',
      key: 'Транзит закрыт',
    },
    {
      title: 'Фит-Вет Документы',
      dataIndex: 'Фит-Вет Документы',
      key: 'Фит-Вет Документы',
    },
    {
      title: 'Экспедитор',
      dataIndex: 'Экспедитор',
      key: 'Экспедитор',
    },
  ];

  // @ts-ignore
  const totalWidth = columns.reduce(
    (acc, column) => acc + (column.width || 150),
    0,
  );

  return (
    <div style={{ marginTop: 100 }}>
      <Button className={styles['upload-wrap']}>
        <Icon type="upload" />
        <label htmlFor="file">Загрузить</label>
        <input
          className={styles['file-uploader']}
          type="file"
          accept=".xlsx, .xls"
          onChange={onImportExcel}
        />
      </Button>
      <p className={styles['upload-tip']}>
        {' '}
        Поддержка файлов формата .xlsx, .xls{' '}
      </p>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: totalWidth }}
        search={false}
      />
    </div>
  );
}

export default Excel;
