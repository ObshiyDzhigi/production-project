import React, { type FC, type ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContent } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT // Получаем значение из local storage по ключу который хранится в переменной LOCAL_STORAGE_THEME_KEY,и так как local storage возвращает данный в виде строк то нужно явно привести это значение к типу Theme;
const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => { // Определение { children: ReactNode } в типе пропсов компонента означает, что компонент ожидает принимать дочерние элементы (children) любого типа, который является подтипом ReactNode.33
//
//     ReactNode - это тип, предоставляемый React, который представляет собой любой узел React, который может быть отрендерен: компоненты React, строки, числа, массивы элементов и т.д. Включая null и undefined.
//
//     Такое определение пропсов { children: ReactNode } позволяет компоненту принимать и рендерить любые дочерние элементы, включая компоненты, текстовые узлы и другие React-элементы. Это дает большую гибкость и позволяет использовать компонент в различных контекстах и с разными типами содержимого.
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  // Так как на каждый рендер компонента обьект будут инициализироваться заново,обьект будет каждый раз новый,аждый раз ссылка на него будет новая,и именно для этого мы используем useMemo,так как он позволяет нам мемоизировать значение какого либо обьекта,массива и каждый раз не создавать новый а возвращать уже существующий(если из массива зависимостей ничего не изменилось)
  return (
        <ThemeContent.Provider value={defaultProps}>
            {children}
        </ThemeContent.Provider>
  )
}

export default ThemeProvider
