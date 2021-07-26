import { useContext, useState } from 'react';
import { ColumnContext } from 'context';

export default function ModalColumnEdit({ changeModalEditColumnState, columnData }) {
  const [columnName, setColumnName] = useState(columnData.name);
  const columnContext = useContext(ColumnContext);

  const changeColumnName = (e) => {
    setColumnName(e.target.value);
  };

  const updateColumn = () => {
    columnContext.dataDispatch({
      type: 'columnEdit',
      data: {
        id: columnData.id,
        name: columnName,
      },
    });
    setColumnName('');
    changeModalEditColumnState(false);
  };

  return (
    <div className="relative px-6 py-8 text-gray-900">
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => changeModalEditColumnState(false)}
      >
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z" />
        </svg>
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Column Name
        </label>
        <div className="mt-1">
          <input
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            id="name"
            name="name"
            type="text"
            defaultValue={columnData.name}
            onChange={changeColumnName}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="px-2.5 py-1.5 mt-2 bg-blue-500 text-white rounded-md"
          type="submit"
          onClick={updateColumn}
        >
          Save Column
        </button>
      </div>
    </div>
  );
}
