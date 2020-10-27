
var columnDefs = [
    {headerName: "Timestamp", field: "LOGTIMESTAMP"},
    {headerName: "Logger Name", field: "LOGGERNAME"},
    {headerName: "Level", field: "LOGLEVEL", minWidth:120},
//    {headerName: "Log Marker", field: "LOGMARKER"},
    {headerName: "Log Location", field: "LOGLOCATION"},    
    {headerName: "Log Message", field: "LOGMESSAGE"}
//    {headerName: "Log User", field: "LOGUSER"},        
//    {headerName: "Log ID", field: "LOGID"}
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
          return '<h2>Loading...</h2>';
        }
      },
    },
    rowBuffer: 0,
    rowSelection: 'single',
    rowDeselection: true,
  };
  
  function autoSizeAll(skipHeader) {
    var allColumnIds = [];
    gridOptions.columnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
  
    gridOptions.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  // setup the grid after the page has finished loading
  document.addEventListener('DOMContentLoaded', function() {
      var gridDiv = document.querySelector('#myGrid');

      new agGrid.Grid(gridDiv, gridOptions);

  agGrid.simpleHttpRequest({url: 'http://localhost:3001/api/logTable/'}).then(function(data) {
        gridOptions.api.setRowData(data);
        autoSizeAll(true);
    });      
  });