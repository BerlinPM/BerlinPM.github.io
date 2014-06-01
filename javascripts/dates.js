var url = "javascripts/dates.json";
$.getJSON( url, function( data ) {
  var items = [];
  $.each( data, function( index, value ) {
    items.push( "<li id='" + index + "'>" + value.date + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "date-list",
    html: items.join( "" )
  }).appendTo( "#dates" );
});
