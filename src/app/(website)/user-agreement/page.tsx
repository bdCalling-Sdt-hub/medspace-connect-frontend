'use client';
import { useGetUserAgreementQuery } from '@/src/redux/features/legalDocs/legalDocsApi';
import Subscribe from '@/src/web-pages/home/Subscribe';
import React from 'react';

const UserAgreement = () => {
      const { data: agreement } = useGetUserAgreementQuery([]);
      return (
            <div>
                  <div className="container my-20 min-h-[calc(100vh-234px)]">
                        <div dangerouslySetInnerHTML={{ __html: agreement?.content as string }} />
                  </div>
                  <Subscribe />
            </div>
      );
};

export default UserAgreement;
