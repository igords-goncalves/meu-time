export const readDataCache = <T>(cacheKey: string): T | null => {
  const raw = localStorage.getItem(cacheKey);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (
      Array.isArray(parsed) &&
      parsed.every(item => typeof item === 'object' && item !== null)
    ) {
      return parsed as T;
    }
    return parsed as T;
  } catch {
    localStorage.removeItem(cacheKey);
    return null;
  }
};
