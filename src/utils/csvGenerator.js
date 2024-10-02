import { scrapeReFiInvestors, scrapeTech4GoodJobs, scrapePermacultureFarms } from './scraper';

const generateCSV = async () => {
  const investors = await scrapeReFiInvestors();
  const jobs = await scrapeTech4GoodJobs();
  const farms = await scrapePermacultureFarms();

  const allListings = [
    ...investors.map(i => ({ ...i, type: 'Investor' })),
    ...jobs.map(j => ({ ...j, type: 'Tech4Good Job' })),
    ...farms.map(f => ({ ...f, type: 'Permaculture Farm' }))
  ];

  const headers = ['Type', 'Name', 'Description', 'Link'];
  const csvContent = [
    headers.join(','),
    ...allListings.map(listing => 
      [
        listing.type,
        `"${listing.name.replace(/"/g, '""')}"`,
        `"${listing.description.replace(/"/g, '""')}"`,
        listing.link
      ].join(',')
    )
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'directory_listings.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default generateCSV;