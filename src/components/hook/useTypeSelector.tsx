import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store/redux/rootRedux";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
