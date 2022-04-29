export function isJSON(str: string): boolean {
  try {
    const object = JSON.parse(str);

    if (object && typeof object === 'object') {
      return true;
    }
  } catch (error) {
    return false;
  }

  return true;
}
