import { v4 as uuidv4 } from 'uuid';

const directoryData = [
  {
    category: "Aligned Investors",
    items: [
      {
        id: uuidv4(),
        name: "Blue Horizon",
        website: "https://bluehorizon.com",
        description: "Focuses on sustainable food systems and invests in companies that promote health and wellness.",
        tags: ["#SustainableInvesting", "#FoodSystems", "#Health"]
      },
      {
        id: uuidv4(),
        name: "Chrysalix Venture Capital",
        website: "https://chrysalix.com",
        description: "Invests in resource efficiency and cleantech innovations that address climate change.",
        tags: ["#Cleantech", "#ClimateChange", "#ResourceEfficiency"]
      },
      {
        id: uuidv4(),
        name: "RSF Social Finance",
        website: "https://rsfsocialfinance.org",
        description: "Provides financial services to social enterprises focused on social justice and environmental sustainability.",
        tags: ["#SocialFinance", "#EnvironmentalSustainability", "#SocialJustice"]
      },
      {
        id: uuidv4(),
        name: "Impact Engine",
        website: "https://impactengine.com",
        description: "Invests in for-profit companies that create measurable social or environmental impact.",
        tags: ["#ImpactInvesting", "#SocialEnterprise", "#EnvironmentalImpact"]
      },
      {
        id: uuidv4(),
        name: "The Rise Fund",
        website: "https://therisefund.com",
        description: "A global fund that invests in companies driving positive social and environmental outcomes.",
        tags: ["#GlobalImpact", "#SocialOutcomes", "#Investment"]
      },
      {
        id: uuidv4(),
        name: "SJF Ventures",
        website: "https://sjfventures.com",
        description: "Focuses on sustainable growth companies in energy, transportation, and food sectors.",
        tags: ["#SustainableGrowth", "#Energy", "#Transportation"]
      },
      {
        id: uuidv4(),
        name: "Toniic",
        website: "https://toniic.com",
        description: "A global community of impact investors dedicated to advancing the field of impact investing.",
        tags: ["#ImpactInvesting", "#Community", "#GlobalNetwork"]
      },
      {
        id: uuidv4(),
        name: "Echoing Green",
        website: "https://echoinggreen.org",
        description: "Provides seed funding and support to social entrepreneurs around the world.",
        tags: ["#SeedFunding", "#SocialEntrepreneurs", "#GlobalSupport"]
      },
      {
        id: uuidv4(),
        name: "Elemental Excelerator",
        website: "https://elementalexcelerator.com",
        description: "Invests in startups that address climate change through innovative solutions.",
        tags: ["#ClimateInnovation", "#Startups", "#Sustainability"]
      },
      {
        id: uuidv4(),
        name: "Capria Ventures",
        website: "https://capria.vc",
        description: "Invests in emerging market fund managers focused on impact investing.",
        tags: ["#EmergingMarkets", "#FundManagers", "#ImpactInvesting"]
      }
    ]
  },
  {
    category: "Permaculture Farms",
    items: [
      {
        id: uuidv4(),
        name: "The Permaculture Research Institute",
        website: "http://permaculturenews.org",
        description: "Provides education and resources for permaculture practices worldwide.",
        tags: ["#PermacultureEducation", "#SustainableFarming"]
      },
      {
        id: uuidv4(),
        name: "Greenwood Permaculture",
        website: "http://greenwoodpermaculture.com",
        description: "Offers permaculture design courses and consultation services for sustainable living.",
        tags: ["#PermacultureDesign", "#SustainableLiving"]
      },
      {
        id: uuidv4(),
        name: "Earthship Biotecture",
        website: "http://earthshipglobal.com",
        description: "Designs sustainable homes using natural and recycled materials with permaculture principles.",
        tags: ["#SustainableArchitecture", "#Earthship"]
      },
      {
        id: uuidv4(),
        name: "The Farm at South Mountain",
        website: "http://thefarmatsouthmountain.com",
        description: "A working farm that promotes permaculture practices and local food systems.",
        tags: ["#LocalFoodSystems", "#CommunityFarming"]
      },
      {
        id: uuidv4(),
        name: "Permanently Sustainable",
        website: "http://permanentlysustainable.com",
        description: "Focuses on creating permaculture-based solutions for urban environments.",
        tags: ["#UrbanPermaculture", "#Sustainability"]
      },
      {
        id: uuidv4(),
        name: "Zaytuna Farm",
        website: "http://zaytunafarm.com",
        description: "A demonstration site for permaculture design principles located in Australia.",
        tags: ["#DemonstrationFarm", "#PermacultureDesign"]
      },
      {
        id: uuidv4(),
        name: "Oakhurst Farm",
        website: "http://oakhurstfarm.net",
        description: "A community-supported agriculture (CSA) farm utilizing permaculture techniques.",
        tags: ["#CSA", "#CommunitySupportedAgriculture"]
      },
      {
        id: uuidv4(),
        name: "Sustainable Harvest International",
        website: "http://sustainableharvest.org",
        description: "Works with farmers in Central America to implement permaculture practices for sustainability.",
        tags: ["#CentralAmerica", "#Sustainability", "#Farmers"]
      },
      {
        id: uuidv4(),
        name: "Garden City",
        website: "http://gardencity.org",
        description: "Utilizes permaculture practices to create community gardens in urban areas.",
        tags: ["#CommunityGardens", "#UrbanFarming"]
      },
      {
        id: uuidv4(),
        name: "Ridgedale Farm",
        website: "http://ridgedalepermaculture.com",
        description: "Focuses on regenerative agriculture and permaculture design.",
        tags: ["#RegenerativeAgriculture", "#PermacultureDesign"]
      }
    ]
  },
  {
    category: "Public Good Grants",
    items: [
      {
        id: uuidv4(),
        name: "The Ford Foundation",
        website: "http://fordfoundation.org",
        description: "Offers grants to support social justice initiatives globally.",
        tags: ["#SocialJustice", "#Grants"]
      },
      {
        id: uuidv4(),
        name: "The Rockefeller Foundation",
        website: "http://rockefellerfoundation.org",
        description: "Focuses on health equity and economic development through grant funding.",
        tags: ["#HealthEquity", "#EconomicDevelopment"]
      },
      {
        id: uuidv4(),
        name: "The Gates Foundation",
        website: "http://gatesfoundation.org",
        description: "Provides grants for global health and education initiatives.",
        tags: ["#GlobalHealth", "#Education"]
      },
      {
        id: uuidv4(),
        name: "The Open Society Foundations",
        website: "http://opensocietyfoundations.org",
        description: "Supports initiatives promoting democracy and human rights worldwide.",
        tags: ["#Democracy", "#HumanRights"]
      },
      {
        id: uuidv4(),
        name: "The Kresge Foundation",
        website: "http://kresge.org",
        description: "Funds projects aimed at improving health outcomes and community development.",
        tags: ["#CommunityDevelopment", "#HealthOutcomes"]
      },
      {
        id: uuidv4(),
        name: "The Wal-Mart Foundation",
        website: "http://walmartfoundation.org",
        description: "Offers grants focusing on hunger relief and community development.",
        tags: ["#HungerRelief", "#CommunityDevelopment"]
      },
      {
        id: uuidv4(),
        name: "The Surdna Foundation",
        website: "http://surdna.org",
        description: "Supports social justice initiatives through grant funding across various sectors.",
        tags: ["#SocialJustice", "#Grants"]
      },
      {
        id: uuidv4(),
        name: "The Packard Foundation",
        website: "http://packard.org",
        description: "Focuses on reproductive health and rights through grant-making.",
        tags: ["#ReproductiveHealth", "#Rights"]
      },
      {
        id: uuidv4(),
        name: "The Robert Wood Johnson Foundation",
        website: "http://rwjf.org",
        description: "Provides grants to improve health care access and quality in the U.S.",
        tags: ["#HealthCareAccess", "#QualityCare"]
      },
      {
        id: uuidv4(),
        name: "The California Endowment",
        website: "http://calendow.org",
        description: "Focuses on improving the health of Californians through grant funding.",
        tags: ["#HealthImprovement", "#California"]
      }
    ]
  }
];

export const scrapeAlignedInvestors = (searchTerm = '') => {
  const investors = directoryData.find(category => category.category === "Aligned Investors").items;
  if (searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return investors.filter(investor => 
      investor.name.toLowerCase().includes(lowerSearchTerm) ||
      investor.description.toLowerCase().includes(lowerSearchTerm) ||
      investor.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
    );
  }
  return investors;
};

export const scrapePermacultureFarms = (searchTerm = '') => {
  const farms = directoryData.find(category => category.category === "Permaculture Farms").items;
  if (searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return farms.filter(farm => 
      farm.name.toLowerCase().includes(lowerSearchTerm) ||
      farm.description.toLowerCase().includes(lowerSearchTerm) ||
      farm.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
    );
  }
  return farms;
};

export const scrapePublicGoodGrants = (searchTerm = '') => {
  const grants = directoryData.find(category => category.category === "Public Good Grants").items;
  if (searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return grants.filter(grant => 
      grant.name.toLowerCase().includes(lowerSearchTerm) ||
      grant.description.toLowerCase().includes(lowerSearchTerm) ||
      grant.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
    );
  }
  return grants;
};

// Keep existing scrapeWeb3Grants function
export const scrapeWeb3Grants = async (searchTerm = '') => {
  try {
    const response = await fetch('/src/data/web3_grants.csv');
    if (!response.ok) {
      throw new Error('Failed to fetch CSV file');
    }
    const csvText = await response.text();
    const lines = csvText.split('\n').slice(1); // Skip header row
    const grants = lines.map(line => {
      const [id, name, description, link] = line.split(',');
      return { id, name, description, link };
    });

    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      return grants.filter(grant => 
        grant.name.toLowerCase().includes(lowerSearchTerm) ||
        grant.description.toLowerCase().includes(lowerSearchTerm)
      );
    }

    return grants;
  } catch (error) {
    console.error('Error fetching Web3 grants:', error);
    return [];
  }
};

export const generateCSV = () => {
  const allListings = [
    ...scrapeAlignedInvestors(),
    ...scrapePermacultureFarms(),
    ...scrapePublicGoodGrants(),
    ...scrapeWeb3Grants()
  ];

  const headers = ['Category', 'Name', 'Website', 'Description', 'Tags'];
  const csvContent = [
    headers.join(','),
    ...allListings.map(listing => 
      [
        listing.category,
        `"${listing.name.replace(/"/g, '""')}"`,
        listing.website,
        `"${listing.description.replace(/"/g, '""')}"`,
        listing.tags.join(';')
      ].join(',')
    )
  ].join('\n');

  return csvContent;
};
