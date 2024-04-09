import React, {Suspense, useContext, useEffect, useState} from 'react'
import './styles/index.scss'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

const App = () => {
  const { theme } = useTheme()

  return (
        <div className={classNames('app', {}, [theme])}>
            <BrowserRouter>
                <Suspense fallback="">
                    <Navbar/>
                    <div className="content-page">
                        <Sidebar/>
                        <AppRouter/>
                    </div>
                </Suspense>
            </BrowserRouter>
        </div>
  )
}

export default App
