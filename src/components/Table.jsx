function Table({ data, config, keyFn }) {
  console.log(data)
    const renderHeaders = config.map((column) => {
      return <th key={column.label}>{column.label}</th>;
    });
    const renderedRows = data.map((rowData) => {
      const renderedCells = config.map((column) => {
        console.log(column)
        return (
          <td className="p-2 text-center " key={column.label}>
            {column.render(rowData)}
          </td>
        );
      });
      return (
        <tr key={keyFn(rowData)} className="border-b">
          {renderedCells}
        </tr>
      );
    });
    return (
      <table className="table-auto border-spacing-2">
        <thead>
          <tr>{renderHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    );
  }
  
  export default Table;
  