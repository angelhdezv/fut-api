enum Animal
{
  DOG = "DOG",
  CAT = "CAT",
  TURTLE = "TURTLE",
  OTHER = "OTHER"
}

enum Lang
{
  EN = "EN",
  ES = "ES"
};

/**
 * Get enum value base on their respective value
 * @param  {any} data Enum collection
 * @param  {string} val Enum value
 * @param  {any} def Default response (item)
 */

const getEnum = (data: any, val: string, def: any) =>
{
  if (val) val = val.toUpperCase();
  for (let d in data)
    if (data[d].toUpperCase() == val)
      return d;
  return def;
}

export { Animal, Lang, getEnum };