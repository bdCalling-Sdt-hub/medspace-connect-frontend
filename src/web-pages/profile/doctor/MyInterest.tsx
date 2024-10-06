import CustomSlider from '@/src/app/(website)/details/[id]/CustomSlider';
import Modal from '@/src/components/ui/Modal';
import { useState } from 'react';
import Image from 'next/image';
import Profile from '@/public/assets/profile.png';
import Card from '@/public/assets/card.png';
import { IoLocationOutline } from 'react-icons/io5';
import MyInterestDetails from '@/src/components/ui/MyInterestDetails';

const MyInterest = () => {
    const [modal, setModal] = useState(false);

    const body = (
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-7 p-2">
                <CustomSlider />
                <div className="my-4 space-y-5">
                    <h1 className="text-3xl text-[#333333]">Description</h1>
                    <p className="text-primaryText">
                        amet, ex Ut adipiscing sodales. massa placerat. Sed eget fringilla gravida nisi Donec eu eu
                        tempor nulla, nulla, leo. faucibus tortor. Donec libero, elementum tincidunt id tincidunt dui
                        faucibus turpis consectetur amet, nibh luctus nibh lacus, ex hendrerit fringilla fringilla est.
                        lacus Nunc tincidunt dignissim, id nec Lorem dui Sed nibh id elementum non tincidunt
                    </p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-5 space-y-4 p-2">
                <MyInterestDetails />
            </div>
        </div>
    );
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {[...Array(1)].map((item, index) => (
                <div key={index} className=" bg-white  max-w-[360px] mx-auto rounded-xl  drop-shadow-md ">
                    {/* Image Section */}
                    <div onClick={() => setModal(true)} className="p-3 ">
                        <Image
                            height={219}
                            width={344}
                            className=" object-cover cursor-pointer"
                            src={Card}
                            alt="Doctor's Practice Room"
                        />

                        {/* Card Body */}
                        <div className="p-4">
                            {/* Price and Favorite */}
                            <div className="flex justify-between items-center mb-2">
                                <p className="flex items-center">
                                    <span className="text-2xl font-semibold text-primary">$500/</span>
                                    <span className="text-primary">mon</span>
                                </p>
                            </div>

                            <div className="flex items-center gap-5">
                                <Image height={33} width={33} className=" rounded-full" src={Profile} alt="Doctor" />
                                <h3 className="text-xl font-semibold text-headerText">Doctors Practice Room</h3>
                            </div>

                            {/* Description Section */}
                            <div className="flex items-center mt-3 text-primaryText">
                                <IoLocationOutline size={24} />
                                <p className=" ml-2 text-sm">55/A, b park road, Abcd area, city</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <Modal width={1140} open={modal} setOpen={setModal} key={'post'} body={body} />
        </div>
    );
};

export default MyInterest;
