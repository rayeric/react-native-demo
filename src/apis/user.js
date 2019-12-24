import { request } from '../utils/request';

export const login = (data) => request.post('/login', data);

export const register = (data) => request.post('/register', data);

export const uploadAvatar = (data) => request.upload('/upload', data);

export const getUserInfo = () => request.get('/getUserInfo');

export const updateUserInfo = (data) => request.post('/updateUserInfo', data);
