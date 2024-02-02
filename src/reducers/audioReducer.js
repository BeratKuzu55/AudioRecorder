function reducer(state, action) {
    switch (action.type){
      case 'SET_AUDIOARR' :
        return {
          ...state , 
          AudioARR : [
            ...state.AudioARR ,
            action.value
          ]
        }
      case 'SET_ISRECORDING':
        return {
          ...state , 
          isRecording : action.value
        }
    }
  }

  export default reducer;