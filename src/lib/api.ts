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
    let errorMessage = `Request failed with status ${response.status} (${response.statusText})`;

    try {
      const errorJson = await response.json();
      if (errorJson && typeof errorJson.message === "string") {
        errorMessage = errorJson.message;
      }
    } catch {
      // Fallback: If response is not JSON (e.g. HTML stack trace), do NOT leak raw body to client
    }

    throw new Error(errorMessage);
  }

  return response.json() as Promise<T>;
}
