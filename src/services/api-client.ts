import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2d38b3edeed445d5a85bb082629cd458'
    }
});

class APIClient<T> {
    static get<T>(endpoint: string, arg1: { signal: AbortSignal; }) {
        throw new Error("Method not implemented.");
    }
    static delete(arg0: string) {
        throw new Error("Method not implemented.");
    }
    static post<T>(endpoint: string, entity: T) {
        throw new Error("Method not implemented.");
    }
    static patch<T extends Entity>({ arg0, entity }: { arg0: string; entity: T; }) {
        throw new Error("Method not implemented.");
    }
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getALL = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data);
    }
}

export default APIClient;