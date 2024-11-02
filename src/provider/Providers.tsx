'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
const Providers = ({ children }: { children: ReactNode }) => {
      return (
            <div>
                  <Provider store={store}>
                        <PersistGate persistor={persistor}>
                              <AntdRegistry>
                                    <ConfigProvider
                                          theme={{
                                                token: {
                                                      fontFamily: '',
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
                        </PersistGate>
                  </Provider>
            </div>
      );
};

export default Providers;
