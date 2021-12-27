import type { ParsedUrlQuery } from 'node:querystring'

export type URLParams<T> = ParsedUrlQuery & T
