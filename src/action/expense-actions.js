import uuid from 'uuid/v1';

export const expenseCreate = (expense) => {
  expense.id = uuid();
  expense.timestamp = new Date();
  return {
    type: 'EXPENSE_CREATE',
    payload: expense
  }
};

export const expenseUpdate = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense
});

export const expensxeDelete = (expense) => ({
  type: 'EXPENSE_DELETE',
  payload: expense
})
