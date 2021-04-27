$(document).ready(function () {
  console.log("ready!");

  var details = [];
  // var url = `https://covid-19-hospital-data.el.r.appspot.com/area/Delhi`;
  var url = `https://covidmapindia.org/area/Delhi`;

  $.get( url, function( data ) {
      var values;
      var head;
      if ( typeof data['values'] === 'object' ) {
        console.log("i am here");
        values = data.values;
        values.forEach((element, index) => {
          if ( index == 0 ) {
            head=element;
          } else {
            let d = {};
            element.forEach((ele,ind) => {
              d[head[ind]] = ele
            })
            details.push(d);
          }
        });
      } else {
         details = data;
      }
      
      $.fn.dataTable.ext.errMode = 'none';
      $('#example').DataTable( {
        data: details,
        columns: [
          { data: "Location" },
          { data: 'Name' },
          { data: 'Type' },
          { data: "Available beds"},
          { data: "Beds last updated"},
          { data: "Available ICU beds"},
          { data: "ICU beds last updated"},
          { data: "Available ventilators"},
          { data: "Ventilators last updated"},
          { data: "ICU without ventilator"},
          { data: "ICU without ventilator last updated"},
          { data: "Oxygen availability"},
          { data: "Verification source"},
          { data: "Phone"},
          { data: "Comments"},
      ],
      // "order": [[ 6, "dsc" ]]
    } );
      // alert( "Load was performed." );
    });

  
});
