'use client';
import { imageUrl } from '@/src/redux/features/api/baseApi';
import { TMessage } from '@/src/redux/features/message/messageApi';
import { useAppSelector } from '@/src/redux/hooks';
import moment from 'moment';

interface MessageListProps {
      messagesByConversationId: TMessage[];
}

const MessageList = ({ newMessage }: MessageListProps) => {
      const { user } = useAppSelector((state) => state.auth);
      console.log(newMessage);

      return (
            <div className="p-2 space-y-4">
                  {newMessage?.map((message) => {
                        const isUserMessage = message.from._id === user?.id;

                        return (
                              <div
                                    key={message._id}
                                    className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}
                              >
                                    <div>
                                          <div
                                                className={`p-3 rounded-lg ${
                                                      isUserMessage
                                                            ? 'bg-blue-500 text-white'
                                                            : 'bg-gray-200 text-gray-800'
                                                }`}
                                          >
                                                <p>{message.message}</p>
                                                <p className="text-xs text-right text-gray-400 mt-1">
                                                      {moment(message.date).isSame(moment(), 'day')
                                                            ? moment(message.date).format('hh:mm A, [today]')
                                                            : moment(message.date).format('hh:mm A, MMM Do YYYY')}
                                                </p>
                                          </div>
                                          <div>
                                                {message.data?.mediaFiles && (
                                                      <div className="flex flex-wrap gap-2 mt-2">
                                                            {message.data?.mediaFiles.map((mediaFile) => (
                                                                  <div key={mediaFile.url} className="relative">
                                                                        <img
                                                                              src={`${imageUrl}/${mediaFile}`}
                                                                              alt={mediaFile.fileType}
                                                                              className="size-24 object-cover rounded-xl"
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
