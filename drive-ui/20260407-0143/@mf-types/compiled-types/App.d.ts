import './index.css';
export interface AppProps {
    token: string;
    baseUrl?: string;
    basePath?: string;
}
export declare const useBasePath: () => string;
export declare function App({ token, baseUrl, basePath }: AppProps): import("react/jsx-runtime").JSX.Element;
