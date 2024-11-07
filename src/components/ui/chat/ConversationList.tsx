import { imageUrl } from '@/src/redux/features/api/baseApi';
import { TConversation } from '@/src/redux/features/conversation/conversationApi';
import moment from 'moment';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

type TProps = {
      conversationData: TConversation[];
      setSelectedConversation: Dispatch<SetStateAction<TConversation | null>>;
      setOpenMessage: Dispatch<SetStateAction<boolean>>;
      handleReadMessage: () => void;
};

const ConversationList = ({ conversationData, setSelectedConversation, setOpenMessage, handleReadMessage }: TProps) => {
      return (
            <div className="min-h-[400px] max-h-[400px] custom-scrollbar  overflow-y-auto space-y-2 p-3">
                  {conversationData?.map((conversation: TConversation, index: number) => {
                        return (
                              <div
                                    onClick={() => {
                                          setOpenMessage(true);
                                          setSelectedConversation(conversation);
                                          handleReadMessage();
                                    }}
                                    key={index}
                                    className="flex items-center shadow cursor-pointer bg-[#E9E9E9] hover:bg-[#FDFDFD] transition duration-200 p-3 rounded-lg"
                              >
                                    <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                                          <Image
                                                src={`${imageUrl}/${conversation?.profile}`}
                                                alt={conversation.name}
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                          />
                                    </div>
                                    <div className="flex-1">
                                          <h3 className="text-lg font-semibold text-primaryText">
                                                {conversation.name}
                                          </h3>
                                          <p className="text-sm text-primary">{conversation.occupation}</p>

                                          <p className="text-xs text-primaryText">
                                                {moment(conversation.conversationStarted).isSame(moment(), 'day')
                                                      ? moment(conversation.conversationStarted).format(
                                                              'hh:mm A, [today]'
                                                        )
                                                      : moment(conversation.conversationStarted).format(
                                                              'hh:mm A, MMM Do YYYY'
                                                        )}
                                          </p>
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
};

export default ConversationList;
