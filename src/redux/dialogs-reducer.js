const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {

    dialogs: [
        {id: 1, name: 'Petya'},
        {id: 2, name: 'Vasya'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Katya'},
        {id: 5, name: 'Dasha'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hey'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer;