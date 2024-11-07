'use client';
import React from 'react';
import { Collapse, Space } from 'antd';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa6';
import Subscribe from '@/src/web-pages/home/Subscribe';
import { useGetAllFaqQuery } from '@/src/redux/features/faq/faqApi';
import NotFoundUi from '@/src/components/shared/NotFoundUi';

const FAQPage: React.FC = () => {
      const { data: faqs } = useGetAllFaqQuery([]);

      return (
            <>
                  <div className="container mx-auto my-10 ">
                        <h2 className="text-primary text-2xl font-semibold my-4">FAQ Section</h2>
                        <div className="md:max-w-5xl mx-auto">
                              <div className="text-center my-10 space-y-4">
                                    <h1 className="text-3xl font-semibold text-[#3E3E3E]">
                                          Popular Frequently Asked Questions
                                    </h1>
                                    <p className="text-primaryText">
                                          We provide a secure and fastest renting system. Our mission is to help you
                                          quickly and safely. Do you have a question regarding our service?
                                    </p>
                              </div>

                              {faqs && faqs.length > 0 ? (
                                    <Space direction="vertical" style={{ width: '100%' }}>
                                          {faqs.map((elm, index) => (
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
                                                      <Collapse.Panel key={index} header={elm?.question}>
                                                            {elm?.answer}
                                                      </Collapse.Panel>
                                                </Collapse>
                                          ))}
                                    </Space>
                              ) : (
                                    <NotFoundUi />
                              )}
                              <br />
                        </div>
                  </div>
                  <Subscribe />
            </>
      );
};

export default FAQPage;
