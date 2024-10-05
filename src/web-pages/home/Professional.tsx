'use client';

import MedicalSpaceCard from '@/src/components/ui/MedicalSpaceCard';
import { Pagination } from 'antd';
const Professional = () => {
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-secondaryText text-xl">Professional</h2>

            <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-center items-center mx-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                    return <MedicalSpaceCard key={index} />;
                })}
            </div>

            {/* pagination */}
            <div className="my-4">
                <Pagination align="center" defaultCurrent={1} total={50} />
            </div>
        </div>
    );
};

export default Professional;
