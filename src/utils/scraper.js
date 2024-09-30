import { faker } from '@faker-js/faker';

const generateMockData = (category, count) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    description: faker.company.catchPhrase(),
    link: faker.internet.url(),
    createdAt: faker.date.recent({ days: 28 }),
    category,
  }));
};

export const scrapeReFiInvestors = () => generateMockData('refi', 100);
export const scrapeTech4GoodJobs = () => generateMockData('tech4good', 100);
export const scrapePermacultureFarms = () => generateMockData('permaculture', 100);