import { normalize, dirname as dir } from 'path'

export function filename(meta: ImportMeta) {
    return normalize(meta.url).replace('file:\\', '')
}

export function dirname(meta: ImportMeta) {
    return dir(filename(meta))
}

export default {
    filename,
    dirname,
}