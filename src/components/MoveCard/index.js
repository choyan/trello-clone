import { ColumnContext } from 'App';
import { useContext } from 'react';

export default function MoveCard() {
  const columnContext = useContext(ColumnContext);

  const changeColumn = (e) => {
    const selectedCard = columnContext.data.selectedCard;
    columnContext.dataDispatch({
      type: 'cardEdit',
      data: {
        ...selectedCard,
        column: parseInt(e.target.value),
      },
    });
  };

  return (
    <div className="my-4">
      {columnContext.data.selectedCard?.id && (
        <div>
          <div>
            <label htmlFor="column" className="block text-sm font-medium text-gray-700">
              Choose a Column to move
            </label>
            <select
              id="column"
              name="column"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={changeColumn}
            >
              <option value="" disabled>
                Choose a column
              </option>
              {columnContext.data.columns.map((column) => (
                <option value={column.id}>{column.name}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
