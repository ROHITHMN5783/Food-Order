export const addtoCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});
export const RemovefromCart = (index) => ({
  type: "REMOVE_FROM_CART",
  payload: index,
});
export const EmptyCart = (item) => ({
  type: "EMPTY_CART",
  payload: item,
});
const InitialState={
    cart:[]
}
const CartReducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
return{
    ...state,
    cart:[...state.cart,action.payload]
}
case 'REMOVE_FROM_CART':
    const updatedcart=state.cart.filter((item,index)=>index!==action.payload)
    return {
        ...state,
        cart:updatedcart

    }
    case 'EMPTY_CART':
        return {
            ...state,
            cart:[]
        }
default:
    return state
        

    }
}
export default CartReducer