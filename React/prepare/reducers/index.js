// const initialState = {
//     name: 'silano',
//     age:23,
//     password:'geunggeung',
// };

const initialState={
    user:{
        isLoggedIn: false,
        user:null,
        signUpData:{},
        loginData:{},
    },
    post:{
        mainPosts:[],
    }
};

// login 액션
const login=()=>{
    return{
        type:'LOG_IN',
        data,
    }
}

// 비동기 action creator
// 동적생성기? 액션을 만들어주는함수 action creator
const changeNickname=(data)=>{
    return{
        type: 'CHANGE_NICKNAME',
        data,
    }
};

changeNickname('boogicho');
// > {
//     type: 'CHANGE_NICKNAME',
//     data: 'boogicho',
// }

// action은 객체라서 값을 수정못하는데 그때그때 action을 만들어냄
store.dispatch(changeNickname('mighty tak'))

// const changeNickname={
//     type: 'CHANGE_NICKNAME',
//     data: 'geung',
// }

// (이전상태,액션) => 다음상태
const rootReducer = (state=initialState,action) => {
    switch(action.type){
        case 'LOG_IN':
        return{
            ...state,
            user:{
                ...state.user,
                isLoggedIn: true,
                user: action.data,
            },
        };

    }
};

export default rootReducer;