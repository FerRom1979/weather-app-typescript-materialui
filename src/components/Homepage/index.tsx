import React from 'react';
import Header from '../Header/index';
import Search from '../search/index';
import CardWeather from '../CardWeather/index';
import CardExtendedForescast from '../ExtendedForecast/index';
import Footer from '../Footer/index';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Search />
            <CardWeather />
            <CardExtendedForescast />
            <Footer />
        </div>
    );
};

export default Homepage;
