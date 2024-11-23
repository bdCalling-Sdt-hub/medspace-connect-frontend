import { imageUrl } from '@/src/redux/features/api/baseApi';
import { TConversation } from '@/src/redux/features/conversation/conversationApi';
import { setSelectedConversation } from '@/src/redux/features/conversation/conversationSlice';
import { useReadMessagesByUserIdMutation } from '@/src/redux/features/message/messageApi';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import moment from 'moment';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect } from 'react';

type TProps = {
      conversationData: TConversation[];
      setOpenMessage: Dispatch<SetStateAction<boolean>>;
};

const ConversationList = ({ conversationData, setOpenMessage }: TProps) => {
      const dispatch = useAppDispatch();
      const { selectedConversation } = useAppSelector((state) => state.conversation);
      const [readMessage] = useReadMessagesByUserIdMutation();

      useEffect(() => {
            const handleReadMessage = async () => {
                  try {
                        if (selectedConversation) {
                              await readMessage(selectedConversation.conversationId).unwrap();
                        }
                  } catch (error) {
                        console.log(error);
                  }
            };

            handleReadMessage();
      }, [selectedConversation, readMessage]);

      return (
            <div className="min-h-[400px] max-h-[400px] custom-scrollbar overflow-y-auto space-y-2 p-3">
                  {conversationData?.map((conversation: TConversation, index: number) => (
                        <div
                              onClick={() => {
                                    dispatch(setSelectedConversation(conversation));
                                    setOpenMessage(true);
                              }}
                              key={index}
                              className={`${
                                    conversation.read ? 'bg-white' : 'bg-gray-100'
                              } flex items-center shadow cursor-pointer transition duration-200 p-3 rounded-lg`}
                        >
                              <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                                    <Image
                                          // src={`${imageUrl}/${conversation?.profile}`}
                                          src={
                                                conversation?.profile?.startsWith('https')
                                                      ? conversation?.profile
                                                      : `${imageUrl}/${conversation?.profile}`
                                          }
                                          alt={conversation.name}
                                          width={48}
                                          height={48}
                                          className="object-cover"
                                    />
                              </div>
                              <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-primaryText">{conversation.name}</h3>
                                    <p className="text-sm text-primary">{conversation.occupation}</p>
                                    <p className="text-xs text-primaryText">
                                          {moment(conversation.conversationStarted).isSame(moment(), 'day')
                                                ? moment(conversation.conversationStarted).format('hh:mm A, [today]')
                                                : moment(conversation.conversationStarted).format(
                                                        'hh:mm A, MMM Do YYYY'
                                                  )}
                                    </p>
                              </div>
                        </div>
                  ))}
            </div>
      );
};

export default ConversationList;
