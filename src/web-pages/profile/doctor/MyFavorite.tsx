import MedicalSpaceCard from '@/src/components/ui/MedicalSpaceCard';
import { useGetFavoriteQuery } from '@/src/redux/features/favourite/favouriteApi';
import { TSpace } from '@/src/redux/features/space/spaceApi';

const MyFavorite = () => {
      const { data: favoriteData } = useGetFavoriteQuery([]);

      return (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {favoriteData?.map((item: { spaceId: TSpace }, index: string) => (
                        <MedicalSpaceCard space={item.spaceId} key={index} />
                  ))}
            </div>
      );
};

export default MyFavorite;
