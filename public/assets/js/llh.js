$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

$(document).ready(function() {
    $('input[name^="loc_"]').change(function() {
        var id = $(this).attr('name').split('_')[1];
        var fileInput = $('#div1_' + id);
        
        if ($(this).val() === '1') {
            fileInput.prop('disabled', false);
        } else {
            fileInput.prop('disabled', true);
        }
    });
});

$(document).ready(function() {
    var table = $('#llhlocationlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/snipe_llh_location',
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
    var table = $('#ticketlist_llh').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_ticket_llh',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'title', name: 'title' },
            { data: 'image', name: 'image' },
            { data: 'content', name: 'content' },
            { data: 'status', name: 'status' },
            { data: 'category', name: 'category' },

            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#ticketlist_llh_new').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_ticket_llh',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'ht', name: 'ticket_number' },
            { data: 'subject', name: 'subject' },
            { data: 'created', name: 'created' },
            { data: 'TicketType', name: 'TicketType' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action' },
        ],
        order: [[3, 'desc']] // Sort by the 'created' column in descending order (column index 3)
    });
});


$(document).ready(function() {
    var table = $('#table123').dataTable();
});

$(document).ready(function() {
    var table = $('#requestassetlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_llh_request_asset',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'qty', name: 'qty' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});
$(document).ready(function() {
    var table = $('#llhuserslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_llh_users',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'firstName', name: 'firstName' },
            { data: 'lastName', name: 'lastName' },
            { data: 'email', name: 'email' },
            { data: 'username', name: 'username' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#vehiclellhlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_llh_vehicle',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'nickName', name: 'nickName' },
            { data: 'standardEngine', name: 'standardEngine' },
            { data: 'imei', name: 'imei' },
            {data: 'action', name: 'action', orderable: false, searchable: false},
        ]
    });
});


$(document).ready(function() {
    var table = $('#vehicle_llh_trips_list').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/vehicle_llh_trips',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'transactionId', name: 'transactionId' },
            { data: 'startTime', name: 'startTime' },
            { data: 'startOdometer', name: 'startOdometer' },
            {data: 'action', name: 'action', orderable: false, searchable: false},
        ]
    });
});

$(document).ready(function() {
    $("#hiderow1").hide();
    $("#hiderow").hide();
        $("#role").change(function() {
            var optionValue = this.value;
            if(optionValue == '3'){
                $("#hiderow1").hide();
                $("#hiderow").show();
                $("#select_llh").hide();
                $("#select_mlh").hide();
            }else if(optionValue == '2'){
                $("#hiderow").hide();
                $("#hiderow1").show();
                $("#select_llh").hide();
                $("#select_mlh").hide();
            }else if(optionValue == '1'){
                $("#hiderow").hide();
                $("#hiderow1").show();
                $("#select_llh").hide();
                $("#select_mlh").hide();
            }else if(optionValue = '6'){
                $("#hiderow").hide();
                $("#hiderow1").hide();
                $("#select_llh").hide();
                $("#select_mlh").hide();
                $('#select_mlh').attr("disabled", true);
                $('#select_llh').attr("disabled", true);
                $('#hiderow1').attr("disabled", true);
                $('#hiderow').attr("disabled", true);
            }else if(optionValue = '4'){
                $("#hiderow").hide();
                $("#hiderow1").hide();
                $("#select_llh").hide();
                $("#select_mlh").hide();
                $('#select_mlh').attr("disabled", true);
                $('#select_llh').attr("disabled", true);
                $('#hiderow1').attr("disabled", true);
                $('#hiderow').attr("disabled", true);
            }else if(optionValue = '5'){
                $("#hiderow").hide();
                $("#hiderow1").hide();
                $("#select_llh").hide();
                $("#select_mlh").hide();
                $('#select_mlh').attr("disabled", true);
                $('#select_llh').attr("disabled", true);
                $('#hiderow1').attr("disabled", true);
                $('#hiderow').attr("disabled", true);
            }else{
                $("#hiderow").hide();
                $("#hiderow1").hide();
            }
    });
});

var selectedValuesTest = $(this).attr("class");
$(document).ready(function() {
  $("#e1").select2({
    multiple: true,
  });
  $('#e1').val(selectedValuesTest).trigger('change');
});

  $(document).ready(function() {
    var table = $('#llhnoncomplienceslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_llh_non_compliences',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'address', name: 'address' },
            { data: 'vname', name: 'vname' },
            { data: 'value', name: 'value' },
        ]
    });
});
 $(document).ready(function() {
    var table = $('#assetllhlist').DataTable( {
        processing: true,
        serverSide: true,
        url: baseurl + '/get_llh_assets',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'serial_no', name: 'serial_no' },
            { data: 'fullName', name: 'fullName' },
        ]
    } );
} );

 $(document).ready(function() {
    var table = $('#dashboardassetllhlist').DataTable( {
        processing: true,
        serverSide: true,
        url: baseurl + '/dashboard',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'serial_no', name: 'serial_no' },
        ]
    } );
} );

$(document).ready(function() {
    var events = []; // Initialize an empty events array
    // Make an AJAX request to fetch events data from Laravel controller
    $.ajax({
        url: 'ticket-calender-llh-data', // Replace with your Laravel route URL
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
                    var urls = ['view_ticket_llh/' + event.transaction_id];
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
