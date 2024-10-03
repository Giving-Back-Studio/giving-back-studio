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

const web3GrantsData = [
  {
    id: '1',
    name: 'Ethereum Foundation Grants',
    description: 'Supporting projects that contribute to the Ethereum ecosystem.',
    link: 'https://ethereum.org/en/community/grants/',
  },
  {
    id: '2',
    name: 'Web3 Foundation Grants Program',
    description: 'Funding for building the foundation of the decentralized web.',
    link: 'https://web3.foundation/grants/',
  },
  {
    id: '3',
    name: 'Gitcoin Grants',
    description: 'Crowdfunding platform for open source projects in the Web3 space.',
    link: 'https://gitcoin.co/grants/',
  },
  {
    id: '4',
    name: 'Polygon Grants',
    description: 'Supporting developers building on the Polygon network.',
    link: 'https://polygon.technology/developers/grants',
  },
  {
    id: '5',
    name: 'Chainlink Grants Program',
    description: 'Funding for projects enhancing the Chainlink ecosystem.',
    link: 'https://chain.link/community/grants',
  },
  {
    id: '6',
    name: 'Aave Grants DAO',
    description: 'Grants for projects contributing to the Aave ecosystem.',
    link: 'https://aavegrants.org/',
  },
  {
    id: '7',
    name: 'Uniswap Grants Program',
    description: 'Supporting projects that benefit the Uniswap ecosystem.',
    link: 'https://unigrants.org/',
  },
  {
    id: '8',
    name: 'Filecoin Dev Grants',
    description: 'Funding for developers building on the Filecoin network.',
    link: 'https://filecoin.io/grants/',
  },
  {
    id: '9',
    name: 'NEAR Grants Program',
    description: 'Supporting projects building on the NEAR Protocol.',
    link: 'https://near.org/grants/',
  },
  {
    id: '10',
    name: 'Algorand Foundation Grants Program',
    description: 'Funding for projects advancing the Algorand ecosystem.',
    link: 'https://algorand.foundation/grants-program',
  },
  {
    id: '11',
    name: 'Tezos Foundation Grants',
    description: 'Supporting projects that contribute to the Tezos ecosystem.',
    link: 'https://tezos.foundation/grants/',
  },
  {
    id: '12',
    name: 'Harmony Grants',
    description: 'Funding for projects building on the Harmony blockchain.',
    link: 'https://open.harmony.one/300m-on-bounties-grants-daos',
  },
  {
    id: '13',
    name: 'Solana Foundation Grants',
    description: 'Supporting developers building on the Solana blockchain.',
    link: 'https://solana.foundation/grants',
  },
  {
    id: '14',
    name: 'Polkadot Treasury Grants',
    description: 'Funding for projects benefiting the Polkadot ecosystem.',
    link: 'https://polkadot.network/treasury/',
  },
  {
    id: '15',
    name: 'Cosmos Ecosystem Grants',
    description: 'Supporting projects building in the Cosmos ecosystem.',
    link: 'https://cosmos.network/ecosystem/funding',
  },
];


export const scrapeReFiInvestors = () => realData.refi;
export const scrapeTech4GoodJobs = () => realData.tech4good;
export const scrapePermacultureFarms = () => realData.permaculture;

export const scrapeWeb3Grants = () => web3GrantsData;
