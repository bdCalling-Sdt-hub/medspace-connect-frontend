import MedicalSpaceCard from '@/src/components/ui/MedicalSpaceCard';

const MyInterest = () => {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {[...Array(1)].map((item, index) => (
                <MedicalSpaceCard key={index} />
            ))}
        </div>
    );
};

export default MyInterest;
