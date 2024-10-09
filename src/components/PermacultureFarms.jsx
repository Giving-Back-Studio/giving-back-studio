import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { scrapeFarms } from '@/utils/scraper';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Loader2, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const PermacultureFarms = ({ searchTerm }) => {
  const { ref, inView } = useInView();

  const fetchFarms = async ({ pageParam = 0 }) => {
    const limit = 20;
    const farms = await scrapeFarms(pageParam, limit, searchTerm);
    return { farms, nextPage: pageParam + 1, hasMore: farms.length === limit };
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['permacultureFarms', searchTerm],
    queryFn: fetchFarms,
    getNextPageParam: (lastPage) => lastPage.hasMore ? lastPage.nextPage : undefined,
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (status === 'loading') return <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin text-white" /></div>;
  if (status === 'error') return <div className="text-red-500">Error loading farms</div>;

  const farms = data?.pages.flatMap(page => page.farms) || [];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {farms.map((farm) => (
          <Card key={farm.id} className="bg-transparent border border-white/30 hover:bg-white/10 transition-colors relative">
            <CardHeader>
              <CardTitle className="text-lg text-white">{farm.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2 text-white">{farm.description}</p>
              <a href={farm.link} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 text-blue-300 hover:text-blue-100">
                <ExternalLink size={20} />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      {isFetchingNextPage && <div className="flex justify-center items-center h-20"><Loader2 className="w-8 h-8 animate-spin text-white" /></div>}
      <div ref={ref} className="h-10" />
    </div>
  );
};

export default PermacultureFarms;
