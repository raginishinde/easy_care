$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

$(document).ready(function() {
    var table = $('#locationlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_snipe_mlh_location',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'address', name: 'address' },
            { data: 'city', name: 'city' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#ticketlist_mlh_new').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_mlh_tickets',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'ht', name: 'ht' },
            { data: 'name', name: 'name' },
            { data: 'subject', name: 'subject' },
            { data: 'created', name: 'created' },
            { data: 'TicketType', name: 'TicketType' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ],
        order: [[4, 'desc']] // Sort by the fourth column (created) in descending order
    });
});


$(document).ready(function() {
    var table = $('#ticketlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_mlh_ticket',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'title', name: 'title' },
            { data: 'image', name: 'image' },
            { data: 'content', name: 'content' },
            { data: 'status', name: 'status' },
            { data: 'category', name: 'category' },
            { data: 'priority', name: 'priority' },
            { data: 'assigned_to', name: 'assigned_to' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#assetlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_mlh_asset',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'item_no', name: 'item_no' },
            { data: 'model_number', name: 'model_number' },
            { data: 'order_number', name: 'order_number' },
            { data: 'image', name: 'image' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#mlhuserslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_mlh_users',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'firstName', name: 'firstName' },
            { data: 'lastName', name: 'lastName' },
            { data: 'email', name: 'email' },
            { data: 'username', name: 'username' },
        ]
    });
});

$(document).ready(function() {
    var table = $('#llhcompanyslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_llh_companys',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'company_name', name: 'company_name' },
            { data: 'email', name: 'email' },
            { data: 'contact_name', name: 'contact_name' },
            { data: 'phone', name: 'phone' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});
$(document).ready(function() {
    var table = $('#mlhcategorylist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_mlh_category',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});
 $(document).ready(function() {
    var table = $('#assignasset').DataTable( {
        processing: true,
        serverSide: true,
        url: baseurl + '/get_assets_mlh',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'model_number', name: 'model_number' },
            { data: 'order_number', name: 'order_number' },
            { data: 'category', name: 'category' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    } );
} );

$(document).ready(function() {
    var table = $('#view_assign_asset').DataTable( {
        processing: true,
        serverSide: true,
        url: baseurl + '/view_assign_asset_mlh',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'serial_no', name: 'serial_no' },
            { data: 'company_name', name: 'company_name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    } );
} );
$(document).ready(function() {
    var table = $('#supplierlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/mlh_snipe_supplier',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#mlhcompanylist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/mlh_companies',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
        ]
    });
});

$(document).ready(function() {
    var events = []; // Initialize an empty events array
    // Make an AJAX request to fetch events data from Laravel controller
    $.ajax({
        url: 'ticket-calender-mlh-data', // Replace with your Laravel route URL
        type: 'GET',
        success: function(response) {
            events = response; // Assign the fetched events data to the events array
            
            // Initialize the fullCalendar plugin with the updated events array
            $('#calendar').fullCalendar({
                navLinks: true,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                defaultView: 'month',
                eventRender: function(event, element) {
                    var transaction_id = event.transaction_id;
                    var urls = ['view_ticket_mlh/' + event.transaction_id];
                    var transactionLinks = urls.map(function(url) {
                        return '<a href="' + url + '" target="_blank">' + transaction_id + '</a>';
                    }).join('<br>');
                    element.find('.fc-title').html(event.title + '<br>' + transactionLinks);

                    element.addClass('event-color-' + event.color);
                    element.find('.fc-time').remove(); // Remove the time portion
                },
                events: events.map(function(event, index) {
                    return {
                        title: event.title,
                        start: moment(event.start_date),
                        end: moment(event.end_date).add(1, 'day'),
                        transaction_id: event.transaction_id,
                        color: event.color,
                        _id: index + 1
                    };
                })
            });
        },
        error: function(xhr, status, error) {
            // Handle error if the AJAX request fails
            console.error(error);
        }
    });
});

  $(document).ready(function() {

        // Event listener for changes in the selectedMLH select

      var selectedValue = $("#selectedMLH").val();
      populateTicketFor(selectedValue);

    
    
            // Function to populate the ticketFor select based on the selectedMLH value
function populateTicketFor(selectedValue) {
  // Clear previous options
  $('#ticketFor').empty();


  // Add the default option
  $('#ticketFor').append('<option value="">Select LLH Company</option>');
  
  // Make an AJAX request to fetch the options for ticketFor
  $.ajax({
    url: 'api/llh-of-mlh', // Replace with your API endpoint
    method: 'POST',
    data: { value: selectedValue },
    success: function(response) {
      // Iterate through the response and append options to the ticketFor select
      response.forEach(function(option) {
        $('#ticketFor').append('<option value="' + option.value + '">' + option.label + '</option>');
      });
    },
    error: function(error) {
      console.error('Error fetching ticketFor options:', error);
    }
  });
}
  });
  
    $(document).ready(function() {
    $('#ticketFor').select2();
    $('#ticketFor').on('change', function() {
      var selectedValue = $(this).val();
      var selectedText = $(this).find('option:selected').text();
      //alert(selectedText);
      
      $('#email').val(selectedValue);
      $('#name').val(selectedText);
      $('#companyFullDetails').val("companyFullDetails");
          
    //   alert(selectedValue);
    //   $.ajaxSetup({
    //     headers: {
    //       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //     }
    //   });
    //   $.ajax({
    //     url: baseurl + '/api/get-llh-mlh-company-name',
    //     type: 'POST',
    //     data: { value: selectedValue, text: selectedText },
    //     dataType: 'json',
    //     success: function(data) {
    //       $('#CompanyUserEmail').val(data.Email);
    //       $('#CompanyUserName').val(data.Text);
    //       $('#companyFullDetails').val(data.companyFullDetails);
    //       console.log(data.Text);
    //     },
    //     error: function() {
    //       console.log('An error occurred.');
    //     }
    //   });
    });
  });