import explporeReducer from './exploreReducer'

test ('explore reducer will show payload', ()=>{
    const action = { type: 'SET_EXPLORE', payload: 'test'}
    const returnedState = explporeReducer(undefined, action)
    expect((returnedState)).toEqual('test')
})

