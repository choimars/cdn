
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/DriveApp';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/DriveApp' ? typeof import('REMOTE_ALIAS_IDENTIFIER/DriveApp') :any;