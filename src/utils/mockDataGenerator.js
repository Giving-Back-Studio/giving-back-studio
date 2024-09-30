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

export const generateMockDatasets = () => {
  const tech4GoodJobs = generateMockData('tech4good', 100);
  const reFiInvestors = generateMockData('refi', 100);
  const permacultureFarms = generateMockData('permaculture', 100);

  return [...tech4GoodJobs, ...reFiInvestors, ...permacultureFarms];
};