import { dirname as dir } from 'path'
import { fileURLToPath } from 'url'

export function filename(meta: ImportMeta) {
    return fileURLToPath(meta.url)
}

export function dirname(meta: ImportMeta) {
    return dir(filename(meta))
}

export default {
    filename,
    dirname,
}