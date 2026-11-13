'use client';

import { useQuery } from '@tanstack/react-query';
import { getPortfolio } from '@/lib/api/portfolioApi';

export const usePortfolio = () => {
    return useQuery({
        queryKey: ['portfolio'],
        queryFn: getPortfolio,
    });
};