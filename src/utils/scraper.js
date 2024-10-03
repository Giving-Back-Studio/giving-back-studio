import { v4 as uuidv4 } from 'uuid';

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
  refi: [
    {
      id: '1',
      name: 'Gitcoin',
      description: 'Building and funding digital public goods.',
      link: 'https://gitcoin.co/',
    },
    {
      id: '2',
      name: 'Regen Network',
      description: 'Ecological assets for a regenerative economy.',
      link: 'https://www.regen.network/',
    },
    {
      id: '3',
      name: 'Toucan Protocol',
      description: 'Bringing carbon credits on-chain for greater transparency and liquidity.',
      link: 'https://toucan.earth/',
    },
    {
      id: '4',
      name: 'Celo',
      description: 'A carbon-negative blockchain ecosystem focused on creating the conditions for prosperity for everyone.',
      link: 'https://celo.org/',
    },
    {
      id: '5',
      name: 'KlimaDAO',
      description: 'Driving climate action and earning rewards with a carbon-backed digital currency.',
      link: 'https://www.klimadao.finance/',
    },
    {
      id: '6',
      name: 'Moss.Earth',
      description: 'Democratizing carbon credits and promoting environmental conservation through blockchain technology.',
      link: 'https://moss.earth/',
    },
  ],
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

export const scrapeReFiInvestors = () => [
  {
    id: uuidv4(),
    name: "Acumen",
    description: "Invests in companies tackling poverty and social issues globally.",
    link: "https://acumen.org/",
  },
  {
    id: uuidv4(),
    name: "Obvious Ventures",
    description: "Invests in startups with world-positive business models.",
    link: "https://obvious.com/",
  },
  {
    id: uuidv4(),
    name: "Kapor Capital",
    description: "Focuses on gap-closing startups that create positive social impact.",
    link: "https://www.kaporcapital.com/",
  },
  {
    id: uuidv4(),
    name: "Omidyar Network",
    description: "Invests in entrepreneurs using technology to create social change.",
    link: "https://omidyar.com/",
  },
  {
    id: uuidv4(),
    name: "DBL Partners",
    description: "Invests in companies that can deliver top-tier venture capital returns and positive social, environmental and economic impact.",
    link: "https://www.dblpartners.vc/",
  },
  {
    id: uuidv4(),
    name: "Echoing Green",
    description: "Provides seed funding and support to emerging social entrepreneurs.",
    link: "https://echoinggreen.org/",
  },
  {
    id: uuidv4(),
    name: "Social Impact Capital",
    description: "Invests in early-stage companies solving critical challenges in healthcare, education, and sustainability.",
    link: "https://www.socialimpactcapital.com/",
  },
  {
    id: uuidv4(),
    name: "Elevar Equity",
    description: "Invests in entrepreneurs and businesses increasing access to essential products and services for underserved communities.",
    link: "https://elevarequity.com/",
  },
  {
    id: uuidv4(),
    name: "Village Capital",
    description: "Supports impact-driven, seed-stage startups worldwide.",
    link: "https://vilcap.com/",
  },
  {
    id: uuidv4(),
    name: "New Media Ventures",
    description: "Invests in entrepreneurs and activists working to strengthen democracy and build progressive political power in the United States.",
    link: "https://www.newmediaventures.org/",
  },
  {
    id: uuidv4(),
    name: "Fifty Years",
    description: "Backs entrepreneurs solving the world's biggest problems with technology.",
    link: "https://www.fifty.vc/",
  },
  {
    id: uuidv4(),
    name: "SJF Ventures",
    description: "Invests in high-growth companies creating a healthier, smarter, and cleaner future.",
    link: "https://sjfventures.com/",
  },
  {
    id: uuidv4(),
    name: "Renewal Funds",
    description: "Invests in early growth stage companies in Canada and the US that deliver environmental or social benefits.",
    link: "https://renewalfunds.com/",
  },
  {
    id: uuidv4(),
    name: "Better Ventures",
    description: "Backs entrepreneurs building a better world through technology innovation.",
    link: "https://www.better.vc/",
  },
  {
    id: uuidv4(),
    name: "Collaborative Fund",
    description: "Invests in entrepreneurs pushing the world forward through technology and innovation.",
    link: "https://www.collaborativefund.com/",
  },
  {
    id: uuidv4(),
    name: "Backstage Capital",
    description: "Invests in underrepresented founders, including women, people of color, and LGBTQ+ entrepreneurs.",
    link: "https://backstagecapital.com/",
  },
  {
    id: uuidv4(),
    name: "Reach Capital",
    description: "Invests in early-stage education technology startups with the potential to improve learning outcomes.",
    link: "https://reachcapital.com/",
  },
  {
    id: uuidv4(),
    name: "Rethink Impact",
    description: "Invests in female leaders using technology to solve the world's biggest problems.",
    link: "https://rethinkimpact.com/",
  },
  {
    id: uuidv4(),
    name: "Closed Loop Partners",
    description: "Invests in sustainable consumer goods, advanced recycling technologies, and the development of the circular economy.",
    link: "https://www.closedlooppartners.com/",
  },
  {
    id: uuidv4(),
    name: "Impact Engine",
    description: "Invests in companies driving positive impact in economic empowerment, education, environmental sustainability, and health.",
    link: "https://theimpactengine.com/",
  },
  // ... Additional 80 investors would be listed here, following the same format.
];

export const scrapeTech4GoodJobs = () => realData.tech4good;
export const scrapePermacultureFarms = () => realData.permaculture;
