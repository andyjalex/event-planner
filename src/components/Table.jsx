function Table({ data, config, keyFn }) {
    const renderHeaders = config.map((column) => {
      return <th key={column.label}
      className="p-2 text-center border-b bg-gray-100"
      >{column.label}</th>;
    });
    const renderedRows = data.map((rowData) => {
      const renderedCells = config.map((column) => {
        console.log(column)
        return (
          <td className="p-2 text-center border-b break-words " key={column.label}>
            {column.render(rowData)}
          </td>
        )
      });
      return (
        <tr key={keyFn(rowData)} className="border-b">
          {renderedCells}
        </tr>
      );
    });
    return (
      <div className="overflow-x-auto w-full">
      <table className="table-auto w-full border-spacing-2 border-collapse ">
        <thead>
          <tr>{renderHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
      </div>
    );
  }
  
  export default Table;
  