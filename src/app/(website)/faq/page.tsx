'use client';
import React from 'react';
import { Collapse, Space } from 'antd';

import { FaChevronDown, FaChevronRight } from 'react-icons/fa6';
import Subscribe from '@/src/web-pages/home/Subscribe';

const FAQPage: React.FC = () => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    const loremIpsum = `Lorem Ipsum is simply dummy text of the `;

    const collapseData = [
        { title: 'What is the process for booking a room/house ?', text: loremIpsum },
        { title: 'What is the process for booking a room/house ?', text: loremIpsum },
        { title: 'What is the process for booking a room/house ?', text: loremIpsum },
        { title: 'What is the process for booking a room/house ?', text: loremIpsum },
        { title: 'What is the process for booking a room/house ?', text: loremIpsum },
        { title: 'What is the process for booking a room/house ?', text: loremIpsum },
    ];

    return (
        <>
            <div className="container mx-auto my-5 ">
                <h2 className="text-primary text-2xl font-semibold my-4">FAQ Section</h2>
                <div className="md:max-w-5xl mx-auto">
                    <div className="text-center my-10 space-y-4">
                        <h1 className="text-3xl font-semibold  text-[#3E3E3E]">Popular Frequently Asked Questions</h1>
                        <p className="text-primaryText">
                            We provide a secure and fastest ranting system Our mission is to make. Do you have a
                            question regarding our service?
                        </p>
                    </div>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        {collapseData.map((elm, index) => (
                            <Collapse
                                style={{
                                    backgroundColor: 'white',
                                    border: 'none',
                                    boxShadow: '1px 1px 1px 2px rgba(0, 0, 0, 0.05)',
                                    padding: '8px',
                                    color: '#5C5C5C',
                                }}
                                expandIconPosition="right"
                                expandIcon={({ isActive }) =>
                                    isActive ? (
                                        <FaChevronDown
                                            className="bg-[#00809e] p-1 rounded-full m-auto"
                                            color="white"
                                            size={24}
                                        />
                                    ) : (
                                        <FaChevronRight
                                            className="bg-[#00809e] p-1 rounded-full"
                                            size={24}
                                            color="white"
                                        />
                                    )
                                }
                                key={index}
                            >
                                <Collapse.Panel key={index} header={elm.title}>
                                    {elm.text}
                                </Collapse.Panel>
                            </Collapse>
                        ))}
                    </Space>
                </div>
            </div>
            <Subscribe />
        </>
    );
};

export default FAQPage;
