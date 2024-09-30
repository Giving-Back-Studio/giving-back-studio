const realData = {
  tech4good: [
    {
      id: '1',
      name: 'Code for America',
      description: 'Improving government services through technology and design.',
      link: 'https://www.codeforamerica.org/jobs',
    },
    {
      id: '2',
      name: 'Charity: Water',
      description: 'Bringing clean and safe drinking water to people in developing countries.',
      link: 'https://www.charitywater.org/about/jobs',
    },
    {
      id: '3',
      name: 'Khan Academy',
      description: 'Providing free world-class education for anyone, anywhere.',
      link: 'https://www.khanacademy.org/careers',
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
  ],
};

export const scrapeReFiInvestors = () => realData.refi;
export const scrapeTech4GoodJobs = () => realData.tech4good;
export const scrapePermacultureFarms = () => realData.permaculture;