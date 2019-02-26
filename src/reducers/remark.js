const remarks = (state = ['1','2'], action) => {
  switch (action.type) {
    case 'ADD_REMARK':
      return [
        ...state,
        action.data
      ];
    case 'DELETE_REMARK':
      return state.filter(item => item !== action.data);
    default:
      return state;
  }
};

export default remarks;