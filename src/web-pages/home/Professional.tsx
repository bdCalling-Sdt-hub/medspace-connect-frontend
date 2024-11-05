'use client';

import MedicalSpaceCard from '@/src/components/ui/MedicalSpaceCard';
import { useGetAllSpaceQuery } from '@/src/redux/features/space/spaceApi';
import { Pagination } from 'antd';
import { useState } from 'react';
const Professional = () => {
      const [limit, setLimit] = useState(6);
      const [page, setPage] = useState(1);
      const { data: spaceResponse } = useGetAllSpaceQuery([
            { name: 'page', value: page },
            { name: 'limit', value: limit },
      ]);

      return (
            <div className="container mx-auto my-10">
                  <h2 className="text-secondaryText text-xl mx-2">Professional</h2>

                  <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 justify-center items-center mx-auto">
                        {spaceResponse?.data?.map((item, index) => {
                              return <MedicalSpaceCard space={item} key={index} />;
                        })}
                  </div>

                  {/* pagination */}
                  <div className="my-4">
                        <Pagination
                              onChange={(value) => setPage(value)}
                              align="center"
                              defaultCurrent={1}
                              pageSize={limit}
                              total={spaceResponse?.meta?.total}
                        />
                  </div>
            </div>
      );
};

export default Professional;
