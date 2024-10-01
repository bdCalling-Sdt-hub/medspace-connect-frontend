import MedicalSpaceCard from '@/src/components/ui/MedicalSpaceCard';

const MyPost = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(2)].map((item, index) => (
                <MedicalSpaceCard key={index} />
            ))}
        </div>
    );
};

export default MyPost;
