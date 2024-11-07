import React from 'react';
import SentImage from '@/public/assets/sent.svg';
import AttachImage from '@/public/assets/attach.svg';
import Image from 'next/image';
import { useSentMessageMutation } from '@/src/redux/features/message/messageApi';
import { TConversation } from '@/src/redux/features/conversation/conversationApi';
const SentMessage = ({ selectedConversation }: { selectedConversation: TConversation }) => {
      const [sendMessage] = useSentMessageMutation();
      const [messageText, setMessageText] = React.useState<string>('');

      const handleSentMessage = async () => {
            try {
                  const formData = new FormData();
                  formData.append('message', messageText);

                  const res = await sendMessage({
                        id: selectedConversation.conversationId,
                        data: formData,
                  }).unwrap();
            } catch (error) {
                  console.error('Error sending message:', error);
            }
      };

      return (
            <div className="p-3">
                  <div className="flex items-center   bg-gray-100 p-2 rounded-full">
                        <input
                              onChange={(e) => setMessageText(e.target.value)}
                              value={messageText}
                              type="text"
                              placeholder="Message......"
                              className="bg-gray-100 flex-grow px-4 py-2 rounded-full text-sm focus:outline-none"
                        />
                        <button className="text-blue-500 mx-1">
                              {/* Image icon (placeholder for an image upload icon) */}
                              <Image src={AttachImage.src} alt="" width={500} className="size-[40px]" height={500} />
                        </button>
                        <button onClick={handleSentMessage}>
                              <Image src={SentImage.src} alt="" width={500} className="size-[40px]" height={500} />
                        </button>
                  </div>
            </div>
      );
};

export default SentMessage;
