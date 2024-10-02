import Image from 'next/image';
import Profile from '/public/assets/profile.png';
import ProfileCover from '/public/assets/cover-profile.png';
import { Button } from 'antd';
import { CiLogin } from 'react-icons/ci';
import Link from 'next/link';
const NotificationDropdown = () => {
    return (
        <div className="w-[263px] min-h-[226px] mx-auto bg-white shadow-md overflow-hidden ml-5">
            {/* Profile Header with Background */}

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

export default NotificationDropdown;
