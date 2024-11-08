import React from 'react';
import SentImage from '@/public/assets/sent.svg';
import AttachImage from '@/public/assets/attach.svg';
import Image from 'next/image';
import { useSentMessageMutation } from '@/src/redux/features/message/messageApi';
import { useAppSelector } from '@/src/redux/hooks';

const SentMessage = () => {
      const [sendMessage] = useSentMessageMutation();
      const [messageText, setMessageText] = React.useState<string>('');
      const [fileImage, setFileImage] = React.useState<File>();
      const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
      const { selectedConversation } = useAppSelector((state) => state.conversation);

      const handleSentMessage = async () => {
            try {
                  const formData = new FormData();
                  formData.append('message', messageText);
                  if (fileImage) {
                        formData.append('messageFiles', fileImage);
                  }
                  const res = await sendMessage({
                        id: selectedConversation!.conversationId,
                        data: formData,
                  }).unwrap();
                  // Reset fields after sending the message
                  setMessageText('');
                  setFileImage(undefined);
                  setPreviewUrl(null);
            } catch (error) {
                  console.error('Error sending message:', error);
            }
      };

      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                  setFileImage(file);
                  setPreviewUrl(URL.createObjectURL(file)); // Generate a preview URL
            }
      };

      const handleRemovePreview = () => {
            setFileImage(undefined);
            setPreviewUrl(null);
      };

      return (
            <div className="p-3">
                  <div className="flex items-center bg-gray-100 p-2 rounded-full">
                        <input
                              onChange={(e) => setMessageText(e.target.value)}
                              value={messageText}
                              type="text"
                              placeholder="Message......"
                              className="bg-gray-100 flex-grow px-4 py-2 rounded-full text-sm focus:outline-none"
                        />
                        <label className="text-blue-500 mx-1 cursor-pointer">
                              <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                              <Image
                                    className="size-[40px]"
                                    src={AttachImage.src}
                                    alt="Attach"
                                    width={24}
                                    height={24}
                              />
                        </label>
                        <button onClick={handleSentMessage}>
                              <Image className="size-[36px]" src={SentImage.src} alt="Send" width={24} height={24} />
                        </button>
                  </div>
                  {previewUrl && (
                        <div className="mt-3 relative bottom-[20%] inline-block">
                              <Image
                                    width={100}
                                    height={100}
                                    src={previewUrl}
                                    alt="Preview"
                                    className="rounded-lg w-28 h-auto"
                              />
                              <button
                                    onClick={handleRemovePreview}
                                    className="absolute top-2 right-2 p-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center"
                              >
                                    ✕
                              </button>
                        </div>
                  )}
            </div>
      );
};

export default SentMessage;
