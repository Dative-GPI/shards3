import type { Plugin } from 'vite';
declare function FoundationSharedAutoImport({ skipShared, skipCore, skipAdmin, skipExtension }?: {
    skipShared?: boolean;
    skipCore?: boolean;
    skipAdmin?: boolean;
    skipExtension?: boolean;
}): Plugin[];
export default FoundationSharedAutoImport;
