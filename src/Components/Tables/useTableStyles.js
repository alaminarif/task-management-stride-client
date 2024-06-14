export const useTableStyles = () => {
  const customTableStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
        backgroundColor: 'white',
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        color: '#1DE5EC',
        fontWeight: 'bold',
        fontSize: '16px',
      },
    },
  };
  return [customTableStyles]
}
