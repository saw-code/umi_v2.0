import {Customer} from '@/types/customer';
import {Opportunity} from '@/types/opportunity';
import {ProColumns} from '@ant-design/pro-table';
import {Tag} from 'antd';
import {FormattedMessage, history} from 'umi';

const columns: ProColumns<Opportunity>[] = [
  {
    title: <FormattedMessage id="table.opportunity.topic"/>,
    dataIndex: 'topic',
    width: 300,
  },
  {
    title: <FormattedMessage id="table.opportunity.budget"/>,
    dataIndex: 'budget',
    render: (node) => <>{`$ ${node}`}</>,
  },
  {
    title: <FormattedMessage id="table.opportunity.status"/>,
    dataIndex: 'status',
    valueType: 'select',
    hideInDescriptions: true,
    filters: true,
    onFilter: true,
    valueEnum: {
      0: {
        text: (
          <Tag color="#8d79f2" key={0}>
            <FormattedMessage id="step.propose"/>
          </Tag>
        ),
      },
      1: {
        text: (
          <Tag color="#c7f279" key={0}>
            <FormattedMessage id="step.develop"/>
          </Tag>
        ),
      },
      2: {
        text: (
          <Tag color="#e379f2" key={0}>
            <FormattedMessage id="step.qualify"/>
          </Tag>
        ),
      },
      3: {
        text: (
          <Tag color="#79f2e3" key={0}>
            <FormattedMessage id="step.close"/>
          </Tag>
        ),
      },
    },
  },
  {
    title: <FormattedMessage id="table.opportunity.customer"/>,
    dataIndex: 'customer',
    render: (node) => <>{node && (node as Customer).name}</>,
    editable: false,
  },
  {
    title: <FormattedMessage id="table.customer.email"/>,
    dataIndex: 'customer',
    hideInTable: true,
    render: (node) => <>{node && (node as Customer).email}</>,
    editable: false,
  },
  {
    title: <FormattedMessage id="table.customer.phone"/>,
    dataIndex: 'customer',
    hideInTable: true,
    render: (node) => <>{node && (node as Customer).phone}</>,
    editable: false,
  },
  {
    title: <FormattedMessage id="table.customer.company"/>,
    dataIndex: 'customer',
    hideInTable: true,
    render: (node) => <>{node && (node as Customer).company}</>,
    editable: false,
  },
];

export default columns;
