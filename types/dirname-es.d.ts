/**
 * A module for __dirname and __filename in ESM.
*/
declare module 'dirname-es' {
    interface DirFilename {
        /**
         * Gets the directory name of a path.
         * @param meta The import meta object.
         * ```typescript
         * const __dirname = dirname(import.meta)
         * ```
        */
        dirname(meta: ImportMeta): string

        /**
         * Gets the filename of a path.
         * @param meta The import meta object.
         * ```typescript
         * const __filename = filename(import.meta)
         * ```
        */
        filename(meta: ImportMeta): string
    }
    const dirnameESM: DirFilename
    export = dirnameESM
}