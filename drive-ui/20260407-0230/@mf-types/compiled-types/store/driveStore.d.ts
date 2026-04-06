import { type ApiClient } from '../api/client';
export interface DriveFolder {
    id: string;
    name: string;
    parent_id: string | null;
    created_at: number;
    updated_at: number;
}
export interface DriveFile {
    id: string;
    name: string;
    size: number;
    mime_type: string;
    folder_id: string | null;
    created_at: number;
    updated_at: number;
}
interface DriveState {
    client: ApiClient | null;
    currentFolderId: string | null;
    homeFolderId: string | null;
    folders: DriveFolder[];
    files: DriveFile[];
    isLoading: boolean;
    error: string | null;
    selectedIds: Set<string>;
    init: (baseUrl: string, token: string) => void;
    loadFolder: (folderId: string | null) => Promise<void>;
    createFolder: (name: string, parentId: string | null) => Promise<void>;
    deleteFolder: (id: string) => Promise<void>;
    uploadFile: (file: File, folderId: string | null, onProgress?: (pct: number) => void) => Promise<void>;
    deleteFile: (id: string) => Promise<void>;
    selectItem: (id: string, multi?: boolean) => void;
    clearSelection: () => void;
}
export declare const useDriveStore: import("zustand").UseBoundStore<import("zustand").StoreApi<DriveState>>;
export {};
