'use client';
import Image from 'next/image';
import React from 'react';
import Profile from '/public/assets/profile.png';
import { Button, notification } from 'antd';
import { TSpace, useUpdateSpaceMutation } from '@/src/redux/features/space/spaceApi';
import { imageUrl } from '@/src/redux/features/api/baseApi';
import moment from 'moment';
const MyPostBookingDetails = ({ space }: { space: TSpace }) => {
      const [makeOccupied] = useUpdateSpaceMutation();

      console.log(space?.status);
      const handleChangeStatus = async () => {
            try {
                  const updatedSpaceInfo = {
                        id: space?._id,
                        data: {
                              status: space?.status === 'ACTIVE' ? 'OCCUPIED' : 'ACTIVE',
                        },
                  };

                  const res = await makeOccupied(updatedSpaceInfo).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res.message,
                              placement: 'topRight',
                              duration: 5,
                        });
                  }
            } catch (error) {
                  notification.error({
                        message: 'Failed to make occupied',
                        placement: 'topRight',
                        duration: 5,
                  });
            }
      };
      return (
            <div className="bg-white drop-shadow-xl space-y-5 p-8 rounded-xl">
                  <h1 className="text-2xl text-primaryText font-semibold">{space?.title}</h1>
                  <div className="flex items-center gap-3">
                        <Image
                              height={33}
                              width={33}
                              className="rounded-full"
                              // src={`${imageUrl}/${space?.providerId?.profile}`}
                              src={
                                    space?.providerId?.profile?.startsWith('https')
                                          ? space?.providerId?.profile
                                          : `${imageUrl}/${space?.providerId?.profile}`
                              }
                              alt="profile"
                        />
                        <h2 className="text-lg text-primaryText">{space?.providerId?.name}</h2>
                  </div>
                  <div className="h-0.5 w-full bg-primaryText/20"></div>
                  <div className="flex items-center gap-2">
                        <p className="text-4xl text-primaryText">Price:</p>
                        <div className="flex items-center">
                              <p className="text-4xl text-primary"> ${space?.price}/</p>
                              <span className="block text-primary">{space?.priceType}</span>
                        </div>
                  </div>

                  <div className="h-0.5 w-full bg-primaryText/20 my-4"></div>

                  <div className="space-y-5">
                        <div className="flex items-center gap-5">
                              <p className="text-primaryText/60 w-32">Practice for</p>
                              <p className="text-primaryText">: {space?.practiceFor}</p>
                        </div>

                        <div className="flex items-center gap-5">
                              <p className="text-primaryText/60 w-32">Facilities</p>
                              <p className="text-primaryText">
                                    : {''}
                                    {space?.facilities?.map((item, index, array) => (
                                          <span key={item}>
                                                {item}
                                                {index < array.length - 1 && <span className="mx-1">/</span>}
                                          </span>
                                    ))}
                              </p>
                        </div>

                        <div className="flex items-center gap-5">
                              <p className="text-primaryText/60 w-32">Opening Date</p>
                              <p className="text-primaryText">: {moment(space?.openingDate).format('MMMM Do, YYYY')}</p>
                        </div>
                  </div>

                  <div>
                        <Button
                              onClick={handleChangeStatus}
                              shape="round"
                              className="px-6"
                              style={{
                                    height: '50px',
                                    width: '100%',
                                    backgroundColor: space?.status == 'ACTIVE' ? '#0A8FDC' : '#FBA51A',
                                    fontSize: 16,
                                    border: 'none',
                                    color: '#fff',
                              }}
                        >
                              {space?.status === 'ACTIVE' ? 'Make as  Occupied' : 'Make as Active'}
                        </Button>
                  </div>
            </div>
      );
};

export default MyPostBookingDetails;
