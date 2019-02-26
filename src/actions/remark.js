export const addRemark = remark => ({
  type: 'ADD_REMARK',
  data: remark
});

export const deleteRemark = remark => ({
  type: 'DELETE_REMARK',
  data: remark
});