var columnDefs = [
    {headerName: "ID", field: "ID"},
    {headerName: "Description", field: "DESCRIPTION"}
  ];
      
      
  // let the grid know which columns and what data to use
  var gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: {
      flex: 1,
      sortable: true,
      resizable: true,
      filter: true,
      floatingFilter: true,
    },
    components: {
      loadingRenderer: function(params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/images/loading.gif">';
        }
      },
    },
    rowBuffer: 0,
    rowSelection: 'multiple',
    rowDeselection: true,
  };
  
  // setup the grid after the page has finished loading
  document.addEventListener('DOMContentLoaded', function() {
      var gridDiv = document.querySelector('#myGrid');
      new agGrid.Grid(gridDiv, gridOptions);

  agGrid.simpleHttpRequest({url: 'http://localhost:3001/api/freds/'}).then(function(data) {
        gridOptions.api.setRowData(data);
    });      
  });