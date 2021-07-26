const intialStates = {
  columns: [
    // {
    //   name: 'Ongoing',
    // },
    // {
    //   name: 'In Review',
    // },
    // {
    //   name: 'Completed',
    // },
  ],
  cards: [
    // {
    //   name: 'Train Staff on POS',
    //   column: 'Ongoing',
    //   date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    // },
    // {
    //   name: 'Staffing Schedule',
    //   column: 'Ongoing',
    //   date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    // },
    // {
    //   name: 'Finalize the Menu',
    //   column: 'Ongoing',
    //   date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    // },
    // {
    //   name: 'Truck Signage',
    //   column: 'In Review',
    //   date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    // },
    // {
    //   name: 'Menu Testing',
    //   column: 'In Review',
    //   date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    // },
    // {
    //   name: 'Brooklyn Lunch',
    //   column: 'In Review',
    //   date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    // },
    // {
    //   name: 'File Permit Paperwork',
    //   column: 'Completed',
    //   date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    // },
    // {
    //   name: 'Finalize Insurance',
    //   column: 'Completed',
    //   date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    // },
  ],
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'addColumn':
      return { ...state, columns: state.columns.push(action.data) };
    // case ACTIONS.DECREMENT:
    //   return count - 1;
    // case ACTIONS.RESET:
    //   return 0;
    // case ACTIONS.CHANGE_COUNT:
    //   return count + action.payload.amount;
    default:
      return state;
  }
}
