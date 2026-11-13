import api from './axios';
import {Portfolio} from "@/types/portfolio";


export const getPortfolio = async (): Promise<Portfolio> => {
    const { data } = await api.get<Portfolio>('/portfolio');

    return data;
};