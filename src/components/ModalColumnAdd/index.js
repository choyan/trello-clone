import { useContext, useState } from 'react';
import { ColumnContext } from 'App';

export default function ModalColumnAdd({ changeModalCreateColumnState }) {
  const [columnName, setColumnName] = useState('');
  const columnContext = useContext(ColumnContext);

  const changeColumnName = (e) => {
    setColumnName(e.target.value);
  };

  const saveColumn = () => {
    columnContext.dataDispatch({
      type: 'columnAdd',
      data: {
        id: Date.now(),
        name: columnName,
      },
    });
    setColumnName('');
    changeModalCreateColumnState(false);
  };

  return (
    <div className="text-gray-900">
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
            value={columnName}
            onChange={changeColumnName}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="px-2.5 py-1.5 mt-2 bg-blue-500 text-white rounded-md"
          type="submit"
          onClick={saveColumn}
        >
          Save Column
        </button>
      </div>
    </div>
  );
}
