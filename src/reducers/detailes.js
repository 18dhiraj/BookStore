const initialstate = {
    list: []
}


const detailes = (state = initialstate, action)=>{

    switch (action.type) {
        case "DETAILES":

        const { id , data} = action.payload

        return{

            ...state,
            list : [{id:id, data:data}]

        }

        default: return state
        
    }

}

export default detailes