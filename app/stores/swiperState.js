const initialState = {
	hasNextPreBtn:false,
}

function SwiperState(state = initialState,action) {
    switch(action.type) {
    	case "hasNextPreBtn":
    	 return {
    	 	hasNextPreBtn:true
    	 }
    	 break;
    	default:
    	 return {
    	 	hasNextPreBtn:state.hasNextPreBtn
    	 }
    	 break;
    }

}

export {
	SwiperState
};