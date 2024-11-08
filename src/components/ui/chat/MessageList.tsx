/* eslint-disable @next/next/no-img-element */
'use client';
import { imageUrl } from '@/src/redux/features/api/baseApi';
import { TMessage, useGetMessagesByUserIdQuery } from '@/src/redux/features/message/messageApi';
import { useAppSelector } from '@/src/redux/hooks';
import moment from 'moment';
import { useEffect, useRef } from 'react';

const MessageList = () => {
      const { user } = useAppSelector((state) => state.auth);
      const scrollRef = useRef<HTMLDivElement | null>(null);
      const { selectedConversation } = useAppSelector((state) => state.conversation);
      useGetMessagesByUserIdQuery(selectedConversation?.conversationId);

      const newMessages = useAppSelector((state) => state.message);
      useEffect(() => {
            if (scrollRef.current) {
                  scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
      }, [newMessages]);
      return (
            <div ref={scrollRef} className="p-2 space-y-3 h-[calc(400px-66px)]  my-2 overflow-y-auto custom-scrollbar">
                  {newMessages?.map((message, index) => {
                        const isUserMessage = message.from === user?.id;

                        return (
                              <div key={index} className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}>
                                    <div>
                                          <div
                                                className={`p-3 rounded-lg ${
                                                      isUserMessage
                                                            ? 'bg-primary text-white'
                                                            : 'bg-gray-200 text-gray-800'
                                                }`}
                                          >
                                                <p>{message.message}</p>
                                                <p
                                                      className={`${
                                                            isUserMessage ? 'text-white' : 'text-gray-800'
                                                      }'} text-xs text-right mt-1 `}
                                                >
                                                      {moment(message.date).isSame(moment(), 'day')
                                                            ? moment(message.date).format('hh:mm A, [today]')
                                                            : moment(message.date).format('hh:mm A, MMM Do YYYY')}
                                                </p>
                                          </div>
                                          <div>
                                                {message.data?.mediaFiles && (
                                                      <div className="flex flex-wrap gap-2 mt-2">
                                                            {message.data?.mediaFiles.map((mediaFile, index) => (
                                                                  <div key={index} className="relative">
                                                                        <img
                                                                              src={`${imageUrl}/${mediaFile}`}
                                                                              alt={mediaFile.fileType}
                                                                              className="size-[200px] object-cover rounded-xl"
                                                                        />
                                                                  </div>
                                                            ))}
                                                      </div>
                                                )}
                                          </div>
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
};

export default MessageList;
