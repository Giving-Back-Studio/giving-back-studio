import { v4 as uuidv4 } from 'uuid';

const generateInvestors = (count) => {
  const investors = [];
  for (let i = 0; i < count; i++) {
    investors.push({
      id: uuidv4(),
      name: `ReFi Investor ${i + 1}`,
      description: `A forward-thinking investor focused on regenerative finance projects and sustainable initiatives. Investor ${i + 1} is committed to funding solutions that address environmental and social challenges.`,
      link: `https://refi-investor-${i + 1}.example.com`,
    });
  }
  return investors;
};

const realData = {
  tech4good: [
    {
      id: '1',
      name: 'Open Food Network',
      description: 'Developing open-source software for local food systems and permaculture networks.',
      link: 'https://www.openfoodnetwork.org/careers/',
    },
    {
      id: '2',
      name: 'FarmHack',
      description: 'Creating an open-source community for resilient agriculture and permaculture tech solutions.',
      link: 'https://farmhack.org/tools',
    },
    {
      id: '3',
      name: 'Permaculture Research Institute',
      description: 'Developing digital tools for permaculture education and project management.',
      link: 'https://permaculturenews.org/jobs/',
    },
    {
      id: '4',
      name: 'Savory Institute',
      description: 'Building tech platforms for holistic land management and regenerative agriculture.',
      link: 'https://savory.org/our-team/#job-openings',
    },
    {
      id: '5',
      name: 'Propagate Ventures',
      description: 'Creating software for agroforestry planning and management in permaculture systems.',
      link: 'https://propagateventures.com/careers',
    },
    {
      id: '6',
      name: 'Terran Collective',
      description: 'Developing decentralized technologies for regenerative communities and permaculture projects.',
      link: 'https://www.terran.io/',
    },
  ],
  refi: generateInvestors(100),
  permaculture: [
    {
      id: '1',
      name: 'Zaytuna Farm',
      description: "Geoff Lawton's Permaculture Research Institute demonstration site.",
      link: 'https://www.zaytunafarm.com/',
    },
    {
      id: '2',
      name: 'Ridgedale Permaculture',
      description: "Richard Perkins' farm in Sweden, showcasing profitable small-scale farming.",
      link: 'https://www.ridgedalepermaculture.com/',
    },
    {
      id: '3',
      name: 'Ferme du Bec Hellouin',
      description: 'Pioneering bio-intensive micro-farming in France.',
      link: 'https://www.fermedubec.com/',
    },
    {
      id: '4',
      name: 'Polyface Farm',
      description: "Joel Salatin's farm demonstrating sustainable and regenerative agriculture practices.",
      link: 'https://www.polyfacefarms.com/',
    },
    {
      id: '5',
      name: 'Miracle Farms',
      description: 'A commercial-scale permaculture orchard in Quebec, Canada.',
      link: 'https://miracle.farm/en/',
    },
    {
      id: '6',
      name: 'Limestone Permaculture Farm',
      description: 'A small family farm in Australia showcasing suburban permaculture design.',
      link: 'https://limestonepermaculture.com/',
    },
  ],
};

export const scrapeWeb3Grants = async () => {
  const response = await fetch('/src/data/web3_grants.csv');
  const csvText = await response.text();
  const lines = csvText.split('\n').slice(1); // Skip header row
  return lines.map(line => {
    const [id, name, description, link] = line.split(',');
    return { id, name, description, link };
  });
};

export const scrapeReFiInvestors = () => realData.refi;
export const scrapeTech4GoodJobs = () => realData.tech4good;
export const scrapePermacultureFarms = () => realData.permaculture;
