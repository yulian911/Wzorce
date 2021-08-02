
export interface AuthState{
    userName:null|any
    userEmail:null| any
}
const initialState ={

    userName:null,
    userEmail:null,

}

export enum AuthActionTypes{
    SET_ACTION_USER='SET_ACTION_USER',
    SET_USER_LOGOUT="SET_USER_LOGOUT"
}
 interface setUserAction{
    type:AuthActionTypes.SET_ACTION_USER
    payload:any
}
interface setUserLogoutAction{
    type:AuthActionTypes.SET_USER_LOGOUT
    payload:any
}
export type AuthAction =setUserAction|setUserLogoutAction

export const authReducer =(state=initialState,action:AuthAction):AuthState=>{
            switch(action.type){
                case AuthActionTypes.SET_ACTION_USER:
                    return{
                        userName:action.payload.userName,
                        userEmail:action.payload.userEmail
                    }
                    case AuthActionTypes.SET_USER_LOGOUT:
                        return{
                            userName:null,
                            userEmail:null,
                        }
                    default:
                        return state
            }

}













// import { USER_LOADING,
//  USER_LOADED,
//  AUTH_ERROR,
//  LOGIN_SUCCES,
// LOGIN_FAUL,
//  REGISTER_SUCCESS,
//  REGISTER_FAUL, } from "../action/types"



// enum AuthActionTypes{
//     USER_LOADING,
//     USER_LOADED,
//     AUTH_ERROR,
//     LOGIN_SUCCES,
//    LOGIN_FAUL,
//     REGISTER_SUCCESS,
//     REGISTER_FAUL,
// }
// interface loadingAuthAction{
//     type:AuthActionTypes.USER_LOADING
// }
// interface loadedAuthAction{
//     type:AuthActionTypes.USER_LOADING
// }
// interface errorAuthAction{
//     type:AuthActionTypes.USER_LOADING
// }
// interface loginSuccessAuthAction{
//     type:AuthActionTypes.USER_LOADING
// }
// interface loginFaulAuthAction{
//     type:AuthActionTypes.USER_LOADING
// }
// interface registerSuccessAuthAction{
//     type:AuthActionTypes.USER_LOADING
// }
// interface registerFaulAuthAction{
//     type:AuthActionTypes.USER_LOADING
// }
// export type AuthAction = registerFaulAuthAction|registerSuccessAuthAction|loginFaulAuthAction|loginSuccessAuthAction|errorAuthAction|loadedAuthAction|loadingAuthAction


// const initialState

// export const authReducer =(state =initialState ,action:AuthAction):=>{

// }