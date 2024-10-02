'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { BiSend, BiSolidLeftArrow } from 'react-icons/bi';
import Image from 'next/image';
import { Button, Form, Input } from 'antd';
// import Logo from '@/assets/Logo.png';
import { LuImagePlus, LuX } from 'react-icons/lu';

const ChatBox = () => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [text, setText] = useState<string | undefined>('');
    const [form] = Form.useForm();

    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            setImage(event.target.files?.[0]);
        }
    };

    useEffect(() => {
        if (image) {
            form.setFieldsValue({ image: image });
        }
    }, [form, image]);

    const onSubmit = (values: object) => {
        console.log(values);
        form.resetFields();
        setImage(null);
    };

    return (
        <div
            className={`
                z-50
                 ${open ? ' transition-all duration-200 ' : 'z-0 transition-all duration-200'}
                fixed flex items-end justify-center bottom-20 right-10 h-[451px] w-[433px]
            `}
        >
            <div className="flex-1 overflow-hidden -z-10">
                <div
                    className={`
                        bg-white border-2 border-primary rounded-[13px]
                        ${
                            open
                                ? 'translate-x-0 transition-all duration-200 '
                                : 'translate-x-[360px] transition-all duration-200'
                        }
                    `}
                >
                    {/* head */}
                    <div className="bg-primary px-4 flex items-center justify-between h-[60px] w-full rounded-t-[9px]">
                        <svg width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z"
                                fill="#F7F7F7"
                            />
                            <g clipPath="url(#clip0_448_14422)">
                                <path
                                    d="M41.3125 30.5063C41.3125 26.2125 37.55 22.6062 32.525 21.75C32.7375 21.0437 32.8438 20.3438 32.8438 19.6375C32.8438 14.7125 27.8875 10.6875 21.7625 10.6875C15.6375 10.6875 10.6875 14.7125 10.6875 19.6375C10.6875 21.875 11.6625 23.9187 13.4875 25.5813L11.4688 30.4375L17.5938 27.9438C18.1875 28.125 18.8125 28.2688 19.4688 28.3875C19.2625 29.0688 19.1562 29.775 19.1562 30.5C19.1562 35.425 24.1063 39.45 30.2313 39.45C31.6625 39.45 33.0312 39.2563 34.4 38.8125L40.525 41.3062L38.5063 36.45C40.3375 34.7938 41.3125 32.6812 41.3125 30.5063ZM17.5938 26.6063L13.8812 28.075L15.0563 25.2625C15.0563 25.2625 11.9937 23.1938 11.9937 19.7C11.9937 15.4812 16.3625 12.025 21.7688 12.025C27.175 12.025 31.5437 15.475 31.675 19.6313C31.675 20.325 31.55 20.9625 31.3563 21.5938C30.9875 21.5625 30.6187 21.55 30.2437 21.55C25.5812 21.55 21.6062 23.8813 19.9688 27.1625C19.2188 27.1 17.5938 26.6063 17.5938 26.6063Z"
                                    fill="#0A8FDC"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_448_14422">
                                    <rect width={32} height={32} fill="white" transform="translate(10 10)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <div className="flex items-center gap-6">
                            <input onChange={handleChangeImage} id="image" type="file" className="hidden" />
                            <label
                                htmlFor="image"
                                className="w-10 h-10 cursor-pointer rounded-full bg-[#F7F7F7] flex items-center justify-center"
                            >
                                <LuImagePlus size={24} color="#0A8FDC" />
                            </label>

                            <LuX className="cursor-pointer" onClick={() => setOpen(false)} color="#F7F7F7" size={24} />
                        </div>
                    </div>

                    {/* body */}
                    <div className="h-[325px] chat overflow-y-auto bg-white">
                        {[...Array(20)].map((message, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`flex mb-3 p-2 ${
                                        index % 2 === 0 ? 'items-end justify-end' : 'items-start justify-start'
                                    }`}
                                >
                                    <div className="bg-[#E7F4FC] w-[270px] p-2 rounded-lg">
                                        <p className="text-[16px] leading-6 text-[#767676] font-normal">
                                            Hello Keven service provider
                                        </p>

                                        <p className="text-right text-[16px] leading-6 text-[#A1A1A1] font-normal">
                                            08:00pm, today
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* footer  */}
                    <div className="relative border-t-[1px] border-[#F0EFEF] p-2">
                        <div
                            style={{ display: image ? 'block' : 'none' }}
                            className="absolute left-2 -top-16 border border-primary"
                        >
                            <div className="relative w-16 h-16" onClick={() => setImage(null)}>
                                {image && <Image alt="message-image" src={URL?.createObjectURL(image)} fill />}
                            </div>
                        </div>

                        <Form form={form} onFinish={onSubmit} className="flex items-center gap-2">
                            <Form.Item style={{ marginBottom: 0 }} name={'image'}></Form.Item>

                            <Form.Item style={{ marginBottom: 0 }} className="flex-1" name={'text'}>
                                <Input
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Message...."
                                    style={{
                                        width: '100%',
                                        border: 'none',
                                        background: '#F3F3F3',
                                        borderRadius: 12,
                                        outline: 'none',
                                        boxShadow: 'none',
                                        height: 40,
                                    }}
                                    className="placeholder:text-[#A1A1A1]"
                                />
                            </Form.Item>
                            <Form.Item
                                style={{
                                    marginBottom: 0,
                                    background: '#0A8FDC',
                                    width: 40,
                                    height: 40,
                                    borderRadius: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    disabled={!text}
                                    htmlType="submit"
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        boxShadow: 'none',
                                        padding: 0,
                                        borderRadius: 0,
                                    }}
                                >
                                    <BiSend size={20} color="white" />
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>

            <div className=" flex items-center">
                <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
                    <BiSolidLeftArrow
                        size={16}
                        color="#0A8FDC"
                        className={` ${
                            open
                                ? 'translate-x-0 transition-all duration-200'
                                : 'translate-x-5 transition-all duration-200'
                        }  `}
                    />
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="w-[50px] cursor-pointer flex items-center justify-center h-[50px] rounded-full border-2 p-2 border-primary"
                >
                    <svg width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z"
                            fill="#F7F7F7"
                        />
                        <g clipPath="url(#clip0_448_14422)">
                            <path
                                d="M41.3125 30.5063C41.3125 26.2125 37.55 22.6062 32.525 21.75C32.7375 21.0437 32.8438 20.3438 32.8438 19.6375C32.8438 14.7125 27.8875 10.6875 21.7625 10.6875C15.6375 10.6875 10.6875 14.7125 10.6875 19.6375C10.6875 21.875 11.6625 23.9187 13.4875 25.5813L11.4688 30.4375L17.5938 27.9438C18.1875 28.125 18.8125 28.2688 19.4688 28.3875C19.2625 29.0688 19.1562 29.775 19.1562 30.5C19.1562 35.425 24.1063 39.45 30.2313 39.45C31.6625 39.45 33.0312 39.2563 34.4 38.8125L40.525 41.3062L38.5063 36.45C40.3375 34.7938 41.3125 32.6812 41.3125 30.5063ZM17.5938 26.6063L13.8812 28.075L15.0563 25.2625C15.0563 25.2625 11.9937 23.1938 11.9937 19.7C11.9937 15.4812 16.3625 12.025 21.7688 12.025C27.175 12.025 31.5437 15.475 31.675 19.6313C31.675 20.325 31.55 20.9625 31.3563 21.5938C30.9875 21.5625 30.6187 21.55 30.2437 21.55C25.5812 21.55 21.6062 23.8813 19.9688 27.1625C19.2188 27.1 17.5938 26.6063 17.5938 26.6063Z"
                                fill="#0A8FDC"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_448_14422">
                                <rect width={32} height={32} fill="white" transform="translate(10 10)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
