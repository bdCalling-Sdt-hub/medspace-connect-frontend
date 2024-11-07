'use client';
import { useGetTermsConditionQuery } from '@/src/redux/features/legalDocs/legalDocsApi';
import Subscribe from '@/src/web-pages/home/Subscribe';
import React from 'react';

const TermsAndCondition = () => {
      const { data: terms } = useGetTermsConditionQuery([]);

      return (
            <div>
                  <div className="container my-20 min-h-[calc(100vh-234px)]">
                        <h2 className="text-primary text-2xl font-semibold my-5">Terms & Conditions</h2>
                        <div dangerouslySetInnerHTML={{ __html: terms?.content as string }} />
                  </div>
                  <Subscribe />
            </div>
      );
};

export default TermsAndCondition;
