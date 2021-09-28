const {
  ITEMS_LIST_FAIL,
  ITEMS_LIST_REQUEST,
  ITEMS_LIST_SUCCESS,
  ITEM_DETAILS_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_ADD_FAIL,
  ITEM_ADD_SUCCESS,
  ITEM_ADD_REQUEST,
}=require( "../constants/itemconstants");

export const itemslistReducer = (
  state = { loadind: true, items: [] },
  action
) => {
  switch (action.type) {
    case ITEMS_LIST_REQUEST:
      return { loadind: true };
    case ITEMS_LIST_SUCCESS:
      return {
        loading: false,
        items: action.payload,
      };
    case ITEMS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const itmedetailsReducer = (
  state = { loading: true, item: {} },
  action
) => {
  switch (action.type) {
    case ITEM_DETAILS_REQUEST:
      return { loading: true };
    case ITEM_DETAILS_SUCCESS:
      return { loading: false, item: action.payload };
    case ITEM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const itemRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case ITEM_ADD_REQUEST:
      return { loading: true };
    case ITEM_ADD_SUCCESS:
      return { loading: false, item: action.payload };
    case ITEM_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};