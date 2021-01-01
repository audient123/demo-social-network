import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount:12},
        {id: 2, message: 'Hi, how are you?', likesCount:13},
        {id: 3, message: 'Hi, how are you?', likesCount:14},
        {id: 4, message: 'Hi, how are you?', likesCount:15},
    ]
};

it('length of posts should be incremented' , () =>{
    //test data
    let action = addPostActionCreator('it-kamasutra.com');

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts.length).toBe(5)

})

it('message of new post should be correct' , () =>{
    //test data
    let action = addPostActionCreator('it-kamasutra.com');

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts[4].message).toBe('it-kamasutra.com')

})

it('after deleting length of messages should be decrement' , () => {
    //test data
    let action = deletePost(1);

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts.length).toBe(3)
});


it(`after deleting length shouldn't be decrement if id is incorrect` , () =>{
    //test data
    let action = deletePost(1000);

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts.length).toBe(4)
});

