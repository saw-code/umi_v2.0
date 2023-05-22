import * as faker from 'faker';
import { Response } from 'express';

export default {
  '/api/analytics/top/opportunity': (_: any, res: Response) =>
    res.send({
      data: [
        { name: faker.commerce.productName(), revenue: 15000 },
        { name: faker.commerce.productName(), revenue: 30000 },
        { name: faker.commerce.productName(), revenue: 40000 },
        { name: faker.commerce.productName(), revenue: 50000 },
      ],
      success: true,
    }),

  '/api/analytics/leads/source': (_: any, res: Response) =>
    res.send({
      data: [
        { source: 'Social Media', count: 40, percent: 0.4 },
        { source: 'Email Marketing', count: 21, percent: 0.21 },
        { source: 'Campaigns', count: 17, percent: 0.17 },
        { source: 'Landing Page', count: 13, percent: 0.13 },
        { source: 'Events', count: 9, percent: 0.09 },
      ],
      success: true,
    }),
};
