import axios from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export const { get } = instance;
export const { patch } = instance;
export const { post } = instance;
export const { put } = instance;
export const remove = instance.delete;
export const runInParallel = axios.all;
export default instance;
