import apiClient from './api-client';

const prefix = '/api/users';

export const getMyInfo = () => {
    return apiClient.get(`${prefix}/me`);
};
