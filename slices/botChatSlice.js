import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedBotChat: null,
}

const botChatSlice = createSlice({
    name: 'botChat',
    initialState,
    reducers: {
        selectBotChat: (state, action) => {
            state.selectedBotChat = action.payload
        }
    }
})

const { actions, reducer } = botChatSlice

export default reducer

export const {
    selectBotChat
} = actions