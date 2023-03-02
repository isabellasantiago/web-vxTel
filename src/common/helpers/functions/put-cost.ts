
import axios from 'axios';
import { CostInput } from '@/common/interfaces/costInput.interface';

const nodeEnv = import.meta.env.VITE_NODE_API


const baseUrl = `http://localhost:${nodeEnv}/finalCost`

export const putCost = async (input: CostInput) => {
    const { data } = await axios.put(baseUrl, input);
    return data;
}