'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Provider store={store}>
                <AntdRegistry>
                    <ConfigProvider
                        theme={{
                            token: {
                                fontFamily: 'Poppins',
                            },
                            components: {
                                Form: {
                                    marginLG: 15,
                                },
                            },
                        }}
                    >
                        {children}
                    </ConfigProvider>
                </AntdRegistry>
            </Provider>
        </div>
    );
};

export default Providers;
