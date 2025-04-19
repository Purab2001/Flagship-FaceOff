import React from 'react';
import Hero from '../components/Hero';
import PhonesContainer from '../components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <Hero></Hero>
            <PhonesContainer phones = {data}></PhonesContainer>
        </div>
    );
};

export default Home;