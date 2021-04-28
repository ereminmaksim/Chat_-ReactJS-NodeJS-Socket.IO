export default (state, action) => {
    switch (action.type) {
        case 'JOINED':
            return {
                ...state,
                joined: true,
                roomId: action.payload.roomId,
                userName: action.payload.userName,

            };
        // Следить за потоком
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload
            };
        // сохранение сообщений
        case 'SET_DATA':
            return {
                ...state,
                users: action.payload.users,
                messages: action.payload.messages
            };
        //Отправка сообщений
        case 'NEW_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };

        default:
            return state;
    }
};
