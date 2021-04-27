$( document ).ready(function() {
    console.log( "ready!" );

    var details = [];
    var url = `https://covid-19-hospital-data.el.r.appspot.com/area/Delhi`;
  


    $.get( url, function( data ) {
        var values = data.values;
        var head;
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
        // mak?eTable(details);
        // let rows = [];
        // values.forEach((element, index) => {
        //   let row = "";
        //   element.forEach(ele => {
        //     row += "<td>" + ele + "</td>";
        //   });
        //   rows += "<tr>" + row + "</tr>";

        // });
        // console.log(rows);
        // $("#tablecont").html(rows);
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
        ]    
      } );
        // alert( "Load was performed." );
      });

      
});