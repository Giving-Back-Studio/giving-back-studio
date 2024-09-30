import { faker } from '@faker-js/faker';

const realLinks = {
  tech4good: [
    'https://www.idealist.org/en/jobs',
    'https://www.techjobsforgood.com/',
    'https://www.netimpact.org/careers',
    'https://jobs.b-lab.net/',
    'https://www.devex.com/jobs',
  ],
  refi: [
    'https://www.climatefinancelab.org/project/',
    'https://www.crunchbase.com/hub/regenerative-finance-refi-companies',
    'https://gitcoin.co/',
    'https://www.climatefi.org/',
    'https://www.regen.network/',
  ],
  permaculture: [
    'https://permacultureglobal.org/projects',
    'https://www.permaculture.org.uk/land',
    'https://permacultureprinciples.com/post/permaculture-farms/',
    'https://www.permaculturenews.org/category/community/',
    'https://www.regenerative.com/farms',
  ],
  socialEnterprises: [
    'https://www.socialenterprise.org.uk/directory/',
    'https://www.se-alliance.org/member-directory',
    'https://www.socialtraders.com.au/for-buyers/certified-social-enterprise-directory/',
    'https://www.buysocialcanada.com/directory',
    'https://www.socialenterprisemark.org.uk/directory/',
  ],
};

const generateMockData = (category, count) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    description: faker.company.catchPhrase(),
    link: faker.helpers.arrayElement(realLinks[category]),
    createdAt: faker.date.recent({ days: 28 }),
    category,
  }));
};

export const scrapeReFiInvestors = () => generateMockData('refi', 100);
export const scrapeTech4GoodJobs = () => generateMockData('tech4good', 100);
export const scrapePermacultureFarms = () => generateMockData('permaculture', 100);
export const scrapeSocialEnterprises = () => generateMockData('socialEnterprises', 100);