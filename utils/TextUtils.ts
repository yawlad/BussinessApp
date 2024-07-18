interface AnyObject {
  [key: string]: any;
}

export function convertKeys<T extends AnyObject>(
  obj: T,
  fromCamel: boolean
): T {
  const converterFunc = fromCamel ? camelToSnake : snakeToCamel;
  if (typeof obj !== "object" || obj === null) {
    return obj as T;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) =>
      convertKeys(item as unknown as T, fromCamel)
    ) as unknown as T;
  }

  const convertedObj = {} as T;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key as keyof T];
      const convertedKey = converterFunc(key);

      convertedObj[convertedKey as keyof T] = convertKeys(value, fromCamel);
    }
  }
  return convertedObj;
}

function camelToSnake(key: string): string {
  return key.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}

function snakeToCamel(key: string): string {
  return key.replace(/_([a-z])/g, (match) => match[1].toUpperCase());
}
