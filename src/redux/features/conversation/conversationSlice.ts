// features/conversationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConversation } from '@/src/redux/features/conversation/conversationApi';

interface ConversationState {
      conversations: TConversation[];
      selectedConversation: TConversation | null;
}

const initialState: ConversationState = {
      conversations: [],
      selectedConversation: null,
};

const conversationSlice = createSlice({
      name: 'conversations',
      initialState,
      reducers: {
            setConversations: (state, action: PayloadAction<TConversation[]>) => {
                  state.conversations = action.payload;
            },
            setSelectedConversation: (state, action: PayloadAction<TConversation | null>) => {
                  state.selectedConversation = action.payload;
            },
      },
});

export const { setConversations, setSelectedConversation } = conversationSlice.actions;
export default conversationSlice.reducer;
