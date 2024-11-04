import MedicalSpaceCard from '@/src/components/ui/MedicalSpaceCard';
import { TUser } from '@/src/redux/features/user/userApi';
type TProps = {
      myProfile: TUser;
};
const MyFavorite = ({ myProfile }: TProps) => {
      return (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {[...Array(3)].map((item, index) => (
                        <MedicalSpaceCard key={index} />
                  ))}
            </div>
      );
};

export default MyFavorite;
