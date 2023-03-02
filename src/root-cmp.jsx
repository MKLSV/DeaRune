import React from 'react'

import { AppHeader } from "./cmps/app-header";
import { Wave } from './cmps/wave';
import { AnlsAbout } from "./views/about-analysis";
import { AboutMe } from "./views/about-me";
import { Contacts } from "./views/contacts";
import { MainPage } from "./views/main-page";
import { Prices } from "./views/prices";
import { Reviews } from "./views/reviews";
import { SecondPage } from "./views/second-page";
import { ThirdPage } from "./views/third-page";


export function RootCmp() {

    return (
        <div className='app-container'>
            <AppHeader />
            <MainPage />
            <SecondPage />
            <Wave name={'wave1'} />
            <ThirdPage />
            <Wave name={'wave2'} />
            <AboutMe />
            <Wave name={'wave1'} />
            <AnlsAbout />
            <Wave name={'wave2'} />
            <Prices />
            <Wave name={'wave1'} />
            <Reviews />
            <Contacts />
        </div>
    )
}

