import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
// eslint-disable-next-line
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'

interface SidebarProps {
  className?: string

}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
  )
}
