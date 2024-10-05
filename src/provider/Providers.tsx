'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { AntdRegistry } from '@ant-design/nextjs-registry';
const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Provider store={store}>
                <AntdRegistry>{children}</AntdRegistry>
            </Provider>
        </div>
    );
};

export default Providers;
