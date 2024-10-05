'use client';

import Professional from '@/src/web-pages/home/Professional';
import RecentPost from '@/src/web-pages/home/RecentPost';
import Subscribe from '@/src/web-pages/home/Subscribe';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <RecentPost />
            <Professional />
            <Subscribe />
        </div>
    );
};

export default HomePage;
