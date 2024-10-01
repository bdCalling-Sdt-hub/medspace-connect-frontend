import Image from 'next/image';
import Profile from '/public/assets/profile.png';
import ProfileCover from '/public/assets/cover-profile.png';
import { Button } from 'antd';
import { CiLogin } from 'react-icons/ci';
import Link from 'next/link';
const ProfileDropdown = () => {
    return (
        <div className="w-[263px] min-h-[226px] mx-auto bg-white shadow-md overflow-hidden ml-5">
            {/* Profile Header with Background */}
            <div className="h-24">
                <Image height={200} width={500} className="h-fit object-cover" src={ProfileCover} alt="profile" />
            </div>

            {/* Profile Avatar */}
            <div className="flex justify-center -mt-20">
                <Image
                    height={63}
                    width={63}
                    className=" rounded-full border-4 border-white"
                    src={Profile}
                    alt="profile"
                />
            </div>

            {/* Profile Details */}
            <div className="text-center mt-2">
                <h2 className="text-xl font-semibold text-gray-800">MD. Asadujjaman</h2>
            </div>

            {/* View Profile Button */}
            <div className="text-center mt-4">
                <Link href={'/profile'}>
                    <Button
                        style={{
                            border: 'none',
                            height: 30,
                            backgroundColor: '#0A8FDC',
                            color: '#fff',
                            borderRadius: 32,
                            padding: '4px 12px',
                        }}
                    >
                        View Profile
                    </Button>
                </Link>
            </div>

            {/* Divider */}
            <hr className="my-4" />

            {/* Log Out Section */}
            <div className="flex justify-start cursor-pointer items-center px-6 py-2">
                <CiLogin className="text-xl text-gray-500 mr-2" />

                <span className="text-gray-600 text-md font-medium ">Log Out</span>
            </div>
        </div>
    );
};

export default ProfileDropdown;
