import type { NitroFetchOptions, NitroFetchRequest } from "nitropack"

export function useApi<
  T = unknown,
  R extends NitroFetchRequest = NitroFetchRequest,
  O extends NitroFetchOptions<R> = NitroFetchOptions<R>
>(
  request: Parameters<typeof $fetch<T, R>>[0],
  options?: Partial<Parameters<typeof $fetch<T, R>>[1]>
) {
  const config = useRuntimeConfig()

  return $fetch<T, R>(request, {
    ...options,
    baseURL: config.public.apiUrl,
    headers: {
      Accept: "application/json",
      ...options?.headers,
    },
  })
}
