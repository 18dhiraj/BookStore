
const initialstate = {
    list: []
}
const addtocart = (state = initialstate, action)=>{


switch(action.type){
    
    case "ADD__CART":

        const { id , data} = action.payload

        return {
            ...state,
            list: [...state.list,{id:id, data:data}]
        }

        default: return state;
    }

}


export default addtocart