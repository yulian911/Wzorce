
interface ErrorState{
    msg:any[],
    status:null |string ,
    id:any,
}

enum ErorrActionTypes{
   GET_ERROR ='GET_ERROR',
 CLEAR_ERROR ='CLEAR_ERROR'
}
interface getErorrAction{
    type:ErorrActionTypes.GET_ERROR,
    payload:any

}
interface cleanErorrAction{
    type:ErorrActionTypes.CLEAR_ERROR,
    payload:any[]

}
export type ErrorAction = getErorrAction|cleanErorrAction



export const initialState:ErrorState ={
    msg:[] ,
    status:null,
    id:null,
}



export const errorReducer =(state=initialState,action:ErrorAction):ErrorState=>{
    switch(action.type){
        case ErorrActionTypes.GET_ERROR:
            return{
                msg:action.payload.msg ,
                status:action.payload ,
                id:action.payload,
            }
            case ErorrActionTypes.CLEAR_ERROR:
            return{
                msg:[] ,
                status:null ,
                id:null,
            }
        default:
            return state
    }
}