import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { scrapeReFiInvestors } from '@/utils/scraper';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Loader2, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ReFiInvestors = ({ searchTerm }) => {
  const { ref, inView } = useInView();

  const fetchInvestors = async ({ pageParam = 0 }) => {
    const limit = 20;
    const investors = await scrapeReFiInvestors(pageParam, limit, searchTerm);
    return { investors, nextPage: pageParam + 1, hasMore: investors.length === limit };
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['refiInvestors', searchTerm],
    queryFn: fetchInvestors,
    getNextPageParam: (lastPage) => lastPage.hasMore ? lastPage.nextPage : undefined,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (status === 'loading') return <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin text-white" /></div>;
  if (status === 'error') return <div className="text-red-500">Error loading investors</div>;

  const investors = data?.pages.flatMap(page => page.investors) || [];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {investors.map((investor) => (
          <Card key={investor.id} className="bg-white/10 hover:bg-white/20 transition-colors relative">
            <CardHeader>
              <CardTitle className="text-lg text-white">{investor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2 text-white">{investor.description}</p>
              <a href={investor.link} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 text-blue-300 hover:text-blue-100">
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

export default ReFiInvestors;