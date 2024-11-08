// Import necessary types
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import messageApi from '@/src/redux/features/message/messageApi';

// Define the MediaFile and TMessage interfaces
interface MediaFile {
      url?: string;
      fileType?: string;
}

export interface TMessage {
      _id: string;
      from: string;
      to: string;
      spaceID: string;
      conversationID: string;
      message: string;
      data: {
            mediaFiles: MediaFile[];
      };
      status: 'read' | 'unread' | 'deleted';
      date: string;
      createdAt: string;
}

const messageSlice = createSlice({
      name: 'messages',
      initialState: [] as TMessage[],
      reducers: {
            addMessage: (state, action: PayloadAction<TMessage>) => {
                  return [...state, action.payload];
            },
      },

      extraReducers: (builder) => {
            builder.addMatcher(messageApi.endpoints.getMessagesByUserId.matchFulfilled, (state, action) => {
                  return action.payload;
            });
      },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
