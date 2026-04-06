export interface ApiClient {
    get<T>(path: string): Promise<T>;
    post<T>(path: string, body?: unknown): Promise<T>;
    put<T>(path: string, body?: unknown): Promise<T>;
    delete(path: string): Promise<void>;
    upload(path: string, file: File, onProgress?: (pct: number) => void): Promise<unknown>;
}
export declare function createApiClient(baseUrl: string, token: string): ApiClient;
