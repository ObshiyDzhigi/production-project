type Mods = Record<string, boolean | string> // Это специальный класс который обознчает что в качестве ключа string,а в качестве значения boolean ли string
// Record это обычный обьект,но с ограниченным количеством значений
export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean), // При помощи entries мы можем получить доступ как к ключам так и к значениям обьекта,по итогу она возвращает массив
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className)
  ].join(' ')
}
