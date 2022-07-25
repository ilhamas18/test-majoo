import { Types } from "../action/homeAction"

const initialState = {
  datas: [],
  loading: false,
  error: []
}

export default function HomeReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_DATA:
      return { ...state, datas: payload };
    case Types.ADD_DATA:
      return { ...state, datas: [...state.datas, payload] };
    case Types.EDIT_DATA:
      const editIndex = state.datas.findIndex(el => +el.id == +payload.id);
      return { ...state, ...state.datas[editIndex] = payload};
    case Types.FINISH_DATA:
      const finishIndex = state.datas.findIndex(el => +el.id == +payload.id);
      return { ...state, ...state.datas[finishIndex] = payload};
    case Types.DELETE_DATA:
      const index = state.datas.findIndex(el => +el.id == +payload);
      return { ...state, ...state.datas.splice(index, 1)}
    case Types.LOADING:
      return { ...state, loading: payload };
    case Types.ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}