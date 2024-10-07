import { scrapeReFiInvestors, scrapePermacultureFarms, scrapeWeb3Grants } from './scraper';

const searchCategories = [
  { name: 'investors', keywords: ['investor', 'fund', 'capital', 'finance', 'money'] },
  { name: 'permaculture', keywords: ['farm', 'agriculture', 'permaculture', 'sustainable', 'organic'] },
  { name: 'grants', keywords: ['grant', 'funding', 'support', 'award', 'web3'] },
];

export const determineSearchCategory = (searchTerm) => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  for (const category of searchCategories) {
    if (category.keywords.some(keyword => lowerSearchTerm.includes(keyword))) {
      return category.name;
    }
  }
  return 'investors'; // Default category if no match found
};

export const performSearch = async (searchTerm) => {
  const category = determineSearchCategory(searchTerm);
  let results = [];

  switch (category) {
    case 'investors':
      results = await scrapeReFiInvestors(0, 100, searchTerm);
      break;
    case 'permaculture':
      results = await scrapePermacultureFarms(searchTerm);
      break;
    case 'grants':
      results = await scrapeWeb3Grants(searchTerm);
      break;
  }

  return { category, results };
};