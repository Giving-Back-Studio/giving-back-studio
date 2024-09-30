import axios from 'axios';
import cheerio from 'cheerio';

const scrapeReFiInvestors = async () => {
  try {
    const response = await axios.get('https://www.crunchbase.com/hub/impact-investing-companies');
    const $ = cheerio.load(response.data);
    const investors = [];

    $('.component--grid-entity-card').each((index, element) => {
      const name = $(element).find('.component--grid-entity-card-title').text().trim();
      const description = $(element).find('.component--grid-entity-card-description').text().trim();
      const link = 'https://www.crunchbase.com' + $(element).find('a').attr('href');
      
      investors.push({ id: index, name, description, link, category: 'refi' });
    });

    return investors;
  } catch (error) {
    console.error('Error scraping ReFi investors:', error);
    return [];
  }
};

const scrapeTech4GoodJobs = async () => {
  try {
    const response = await axios.get('https://www.idealist.org/en/jobs?q=tech4good');
    const $ = cheerio.load(response.data);
    const jobs = [];

    $('.search-result').each((index, element) => {
      const name = $(element).find('.search-result__title').text().trim();
      const description = $(element).find('.search-result__description').text().trim();
      const link = 'https://www.idealist.org' + $(element).find('a').attr('href');
      
      jobs.push({ id: index, name, description, link, category: 'tech4good' });
    });

    return jobs;
  } catch (error) {
    console.error('Error scraping Tech4Good jobs:', error);
    return [];
  }
};

const scrapePermacultureFarms = async () => {
  try {
    const response = await axios.get('https://permacultureglobal.org/projects');
    const $ = cheerio.load(response.data);
    const farms = [];

    $('.project').each((index, element) => {
      const name = $(element).find('.project-name').text().trim();
      const description = $(element).find('.project-description').text().trim();
      const link = 'https://permacultureglobal.org' + $(element).find('a').attr('href');
      
      farms.push({ id: index, name, description, link, category: 'permaculture' });
    });

    return farms;
  } catch (error) {
    console.error('Error scraping Permaculture farms:', error);
    return [];
  }
};

export { scrapeReFiInvestors, scrapeTech4GoodJobs, scrapePermacultureFarms };