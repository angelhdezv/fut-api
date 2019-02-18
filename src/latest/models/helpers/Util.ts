import { Lang, getEnum } from "@models/helpers/Const";

/**
 * Representation of a basic tuple (key, value).
 */

class Pair
{
  key: string;
  value: any;

  constructor(key: string, value: any)
  {
    this.key = key;
    this.value = value;
  }
}

/**
 * Representation of string class with lang support.
 */

class LString
{
  static getLang = (val: string): Lang => getEnum(Lang, val, Lang.EN);

  lang: Lang;
  val: string;

  constructor(lang: Lang, val: string)
  {
    this.lang = lang;
    this.val = val;
  }
}


/**
 * Helper class for generation of common data.
 */

class Generator
{
  static baseColors = [
    "#0-8-a-", "#0-8-c-", "#0-a-a-", "#0-a-c-", "#1-7-5-", "#1-9-5-", "#1-9-3-",
    "#1-9-9-", "#1-b-7-", "#2-6-c-", "#2-8-a-", "#2-8-c-", "#3-9-3-", "#3-9-5-",
    "#3-b-7-", "#4-2-8-", "#4-4-a-", "#4-6-8-", "#4-8-a-", "#4-8-c-", "#5-b-5-",
    "#5-b-7-", "#5-b-b-", "#6-4-a-", "#6-6-8-", "#6-6-a-", "#6-6-c-", "#6-8-a-",
    "#6-8-c-", "#6-a-c-", "#8-2-c-", "#8-4-a-", "#8-6-8-", "#8-6-a-", "#8-8-a-",
    "#8-8-c-", "#8-8-f-", "#9-7-b-", "#9-7-d-", "#a-6-6-", "#a-6-8-", "#a-8-8-",
    "#a-8-a-", "#a-a-8-", "#a-a-a-", "#a-a-c-", "#b-3-5-", "#c-4-8-", "#c-6-8-",
    "#c-6-a-", "#c-6-c-", "#c-8-a-", "#c-8-c-", "#c-8-f-", "#c-a-a-", "#c-a-c-",
    "#d-3-3-", "#d-3-5-", "#d-5-3-", "#d-5-5-", "#f-5-3-", "#f-6-8-", "#f-7-1-",
    "#f-7-5-", "#f-8-8-", "#f-8-6-", "#f-9-1-", "#f-9-3-", "#f-9-5-", "#f-9-7-",
    "#f-9-9-", "#f-9-9-", "#f-a-8-", "#f-a-a-", "#f-b-8-"];


  /**
   * Get a numeric identifier between 1 and 10000000.
   */

  static getId(): number
  {
    return this.getNum(10000000) + 1
  }
  /**
   * Get a random color with pre-defined balance of color.
   */

  static getColor(): string
  {
    let base = this.baseColors[this.getNum(this.baseColors.length)];
    let A = this.getNum(2) == 0 ? "0" : "8";
    let B = this.getNum(2) == 0 ? "0" : "8";
    let C = this.getNum(2) == 0 ? "0" : "8";
    base = base.replace("-", A);
    base = base.replace("-", B);
    base = base.replace("-", C);
    return base;
  }

  /**
   * Get a random number between 0 and max.
   * @param  {number} max Max number.
   */

  static getNum(max: number): number
  {
    return Math.floor(Math.random() * max);
  }
}

export { Pair, LString, Generator };
