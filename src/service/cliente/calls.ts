import { api } from '../api';
import { Cliente } from './types'

const get = () =>api.get(`cliente`);
const getById = (id?:number) =>api.get(`cliente/${id}`);
const post = (payload:Cliente) => api.post('cliente',{ payload })
const put = (id:number, payload:Cliente) => api.put(`cliente/${id}`,{payload})
const remove = (id:number) => api.delete(`cliente/${id}`)

export const cliente = { get, getById, post, put, remove}

