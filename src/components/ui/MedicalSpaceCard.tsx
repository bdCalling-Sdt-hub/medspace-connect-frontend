'use client';
import { TSpace } from '@/src/redux/features/space/spaceApi';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { imageUrl } from '@/src/redux/features/api/baseApi';
import {
      useAddFavoriteMutation,
      useGetFavoriteQuery,
      useRemoveFavoriteMutation,
} from '@/src/redux/features/favourite/favouriteApi';
import { notification } from 'antd';
import { useAppSelector } from '@/src/redux/hooks';

const MedicalSpaceCard = ({ space }: { space: TSpace }) => {
      const [addFavorite] = useAddFavoriteMutation();
      const [removeFavorite] = useRemoveFavoriteMutation();
      const { user } = useAppSelector((state) => state.auth);
      const { data: favoriteData } = useGetFavoriteQuery(undefined, {
            skip: !user,
      });

      // Check if this space is already a favorite
      const isFavorite = favoriteData?.some((favorite: any) => favorite?.spaceId?._id === space?._id);

      const handleFavoriteClick = async (event: React.MouseEvent<HTMLDivElement>) => {
            event.preventDefault();

            if (!user) {
                  notification.error({
                        message: 'Please login to add favorite',
                  });
                  return;
            }

            try {
                  if (isFavorite) {
                        // Remove from favorites
                        const res = await removeFavorite(space._id).unwrap();

                        if (res.success) {
                              notification.success({
                                    message: res.message,
                                    placement: 'topRight',
                                    duration: 5,
                              });
                        }
                  } else {
                        const res = await addFavorite({
                              spaceId: space._id,
                        }).unwrap();

                        if (res.success) {
                              notification.success({
                                    message: res.message,
                                    placement: 'topRight',
                                    duration: 5,
                              });
                        }
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.message || 'Failed to update favorite',
                  });
            }
      };

      return (
            <Link
                  href={`details/${space?._id}`}
                  className="bg-white h-full max-w-[360px] mx-auto rounded-xl drop-shadow-md block"
                  style={{ height: '400px' }} // Adjust the height as needed
            >
                  {/* Image Section */}
                  <div className="p-3 h-full flex flex-col">
                        <Image
                              height={219}
                              width={344}
                              className="object-cover"
                              src={`${imageUrl}/${space?.spaceImages[0]}`}
                              alt="Doctor's Practice Room"
                              style={{ height: '200px' }} // Fixed height for image
                        />

                        {/* Card Body */}
                        <div className="p-4 flex flex-col justify-between flex-grow">
                              {/* Price and Favorite */}
                              <div className="flex justify-between items-center mb-2">
                                    <p className="flex items-center">
                                          <span className="text-2xl font-semibold text-primary">${space?.price}/</span>
                                          <span className="text-primary">{space?.priceType}</span>
                                    </p>
                                    <div onClick={handleFavoriteClick} className="cursor-pointer">
                                          {isFavorite ? (
                                                <AiFillHeart className="text-yellow-400 text-2xl" />
                                          ) : (
                                                <AiOutlineHeart className="text-yellow-400 text-2xl" />
                                          )}
                                    </div>
                              </div>

                              {/* Title and Image */}
                              <div className="flex items-center gap-5">
                                    <Image
                                          height={33}
                                          width={33}
                                          className="rounded-full"
                                          src={
                                                space?.providerId?.profile?.startsWith('https')
                                                      ? space?.providerId?.profile
                                                      : `${imageUrl}/${space?.providerId?.profile}`
                                          }
                                          alt="Doctor"
                                    />
                                    <h3 className="text-xl font-semibold text-headerText line-clamp-2 max-h-[56px] overflow-hidden">
                                          {space?.title}
                                    </h3>
                              </div>

                              {/* Description Section */}
                              <div className="flex items-center mt-3 text-primaryText">
                                    <IoLocationOutline size={24} />
                                    <p className="ml-2 text-sm line-clamp-1">{space?.location}</p>
                              </div>
                        </div>
                  </div>
            </Link>
      );
};

export default MedicalSpaceCard;
