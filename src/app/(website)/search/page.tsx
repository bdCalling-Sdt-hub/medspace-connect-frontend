import MedicalSpaceCard from '@/src/components/ui/MedicalSpaceCard';
import React from 'react';

const SearchPage = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center mx-auto">
                    {[...Array(5)].map((item, index) => (
                        <MedicalSpaceCard key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SearchPage;
