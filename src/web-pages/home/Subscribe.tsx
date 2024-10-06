'use client';
import { Button } from 'antd';
import SubscribePng from '@/public/assets/subscribe.png';

const Subscribe = () => {
    return (
        <div>
            <div
                className="bg-cover bg-center relative h-full md:max-h-[144px] py-5 px-2"
                style={{ backgroundImage: `url(${SubscribePng.src})` }}
            >
                <div className="absolute inset-0 bg-black opacity-65"></div>

                <div className="relative z-10 mx-auto text-center">
                    <div className="container mx-auto text-start grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-lg md:text-xl font-semibold text-[#EEEEEE] mb-2 md:mb-4">
                                Subscribe To Our Email Alerts
                            </h2>

                            <p className="text-sm md:text-base text-[#E6E6E6] mb-4 md:mb-6">
                                Subscribe and stay updated on the latest news & special deals!
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full md:max-w-xs py-3 md:py-4 bg-[#E9E9E9] px-6 md:px-8 rounded-full border-none focus:outline-none"
                            />

                            <Button
                                shape="round"
                                className="px-6 w-full md:w-[130px]"
                                style={{
                                    height: '54px',
                                    backgroundColor: '#0A8FDC',
                                    fontWeight: '500',
                                    border: 'none',
                                    color: '#fff',
                                }}
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
