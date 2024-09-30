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
    {
      id: '4',
      name: 'Mozilla Foundation',
      description: 'Working to ensure the internet remains a public resource that is open and accessible to all.',
      link: 'https://foundation.mozilla.org/careers/',
    },
    {
      id: '5',
      name: 'Wikimedia Foundation',
      description: 'Supporting and growing Wikipedia and other free knowledge projects.',
      link: 'https://wikimediafoundation.org/about/jobs/',
    },
    {
      id: '6',
      name: 'DonorsChoose',
      description: 'Empowering public school teachers to request much-needed materials and experiences for their students.',
      link: 'https://www.donorschoose.org/about/careers/',
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

export const scrapeReFiInvestors = () => realData.refi;
export const scrapeTech4GoodJobs = () => realData.tech4good;
export const scrapePermacultureFarms = () => realData.permaculture;