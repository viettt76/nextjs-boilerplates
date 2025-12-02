import apiClient from './api-client';
import { LoginDto } from '@/types/auth';

const prefix = '/api/auth';

export const loginService = (data: LoginDto) => {
    return apiClient.post(`${prefix}/login`, data);
};

export const refreshTokenService = () => {
    return apiClient.post(`${prefix}/refresh`);
};
