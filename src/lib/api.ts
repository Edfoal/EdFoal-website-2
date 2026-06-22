/**
 * Generic API fetch client for production request routing.
 */
export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `API error [${response.status}]: ${errorBody || response.statusText}`
    );
  }

  return response.json() as Promise<T>;
}
