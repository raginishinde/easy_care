$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

//  $(document).ready(function(){
    // setTimeout(function () {
     
    // }, 500); 
// });
//  var newData = '<tr><td>1</td><td>1</td><td>10</td><td>1</td><td>10</td><td>1</td><td>10</td><td>2</td><td>1</td><td><button class="btn btn-danger remove"><i class="fa fa-times" aria-hidden="true"></i></button></td></tr>'; 
// // $("#add_work_orderr").click(function(){
// // 	$('#work_order').append(html);
// // });
// $(document).on('click','.addwork',function(){
//     $('#work_order').append(newData);
// });  

// $(document).on('click','.remove',function(){
//     $(this).parents('tr').remove();
// });     

    var i = 0;
    $("#add-btn").click(function(){
    ++i;
    $("#dynamicAddRemove").append('<tr><td><input type="text" name="moreFields['+i+'][name]" class="form-control" /></td><td><input type="text" name="moreFields['+i+'][serial_no]" class="form-control" /></td><td><input type="text" name="moreFields['+i+'][decal]" class="form-control" /></td><td><input type="text" name="moreFields['+i+'][game_name]" class="form-control" /></td><td><input type="text" name="moreFields['+i+'][meter_in]" class="form-control" /></td><td><input type="text" name="moreFields['+i+'][meter_out]" class="form-control" /></td><td><input type="radio" name="moreFields['+i+'][locc]" value="1"> Y <input type="radio" name="moreFields['+i+'][locc]" value="0">N</td><td><input type="radio" name="moreFields['+i+'][res]" value="1"> Y <input type="radio" name="moreFields['+i+'][res]" value="0"> N</td><td><button type="button" class="btn btn-danger remove-tr">Remove</button></td></tr>');
    });
    
$(document).on('click', '.remove-tr', function(){  
    $(this).parents('tr').remove();
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
    $('input[name^="locc_"]').change(function() {
        // alert("hii");
        var id = $(this).attr('name').split('_')[1];
        var fileInput = $('#div11_' + id);
        
        if ($(this).val() === '1') {
            fileInput.prop('disabled', false);
        } else {
            fileInput.prop('disabled', true);
        }
    });
});

$(document).ready(function() {
    var table = $('#ticketagentlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_ticket',
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
    var table = $('#agentrequestassetlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_agent_request_asset',
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
    var table = $('#assetagentlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_agent_asset',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'item_no', name: 'item_no' },
            { data: 'model_number', name: 'model_number' },
            { data: 'order_number', name: 'order_number' },
            { data: 'image', name: 'image' },
            { data: 'location', name: 'location' },
        ]
    });
});

  $(document).ready(function() {
    var table = $('#agentnoncomplienceslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_agent_non_compliences',
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
  $('#get-data-button').change(function() {
      var selectedValue = $(this).val();
      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });
    $.ajax({
      url: baseurl + '/api/get-dataa',
        type: 'POST',
        data: { value: selectedValue },
        dataType: 'json',
        success: function(data) {
          $('#name').val(data.company_name);
          $('#company_name').val(data.company_name);
          $('#address').val(data.address);
            var names = data.company_name;
            var email = data.email;
            var session_email = $('#session_username').val();
            $.ajax({
                url: baseurl + '/api/get-agent-compliances-data',
                type: 'POST',
                data: { session_username: session_email, name: names },
                dataType: 'json',
                success: function(data) {
                    if(data.length > 0){
                        var row_id = 1;
                        
                        $.each(data, function(index, d) {
                        $('#is_updatetable').val("1");
                        $('#compliance_id_' + row_id).val(d.id);
                        $('.form-control#response_' + row_id).val(d.memo);
                        $('#loc_' + row_id).prop('checked', d.value == 1);
                        if (d.profile_image) {
                          $('#attachment_' + row_id)
                            .attr('href', 'public/images/compliances/' + d.profile_image)
                            .show(); // Show the view anchor link
                        } else {
                          $('#attachment_' + row_id).hide(); // Hide the view anchor link
                        }
                        row_id++;
                    });
                    
                    }else{
                        let data = [];
                        for (let i = 1; i <= 11; i++) {
                          data.push({ id: i });
                        }
                        $.each(data, function(index, d) {
                        $('#is_updatetable').val("0");
                        $('.form-control#response_' + d.id).val("");
                        if ($('.loc_' + d.id).val() === '1') {
                            $('.loc_' + d.id).prop('checked', true);
                        }else{
                            $('.loc_' + d.id).prop('checked', false);
                        }
                          $('#attachment_' + d.id).hide(); // Hide the view anchor link
                    });
                    }
                },
                error: function() {
                    console.log('An error occurred.');
                }
            });

        },
        error: function() {
          console.log('An error occurred.');
        }
    });
  });
});

$(document).ready(function() {
    var table = $('#ticketlist_new').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_ticket_llh',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'ht', name: 'ticket_number' },
            { data: 'name', name: 'name' },
            { data: 'subject', name: 'title' },
            { data: 'created', name: 'created' },
            { data: 'TicketType', name: 'TicketType' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ],
        order: [[4, 'desc']]  // Sort by the "created" column (index 3) in descending order
    });
});


$(document).ready(function() {
    var table = $('#work_ticket_new').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/work_ticket',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'ht', name: 'ticket_number' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#work_dashboard_ticket_new').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/dashboard',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'ht', name: 'ht' },
            { data: 'status', name: 'status' },
        ]
    });
});

$(document).ready(function() {
    var events = []; // Initialize an empty events array
    // Make an AJAX request to fetch events data from Laravel controller
    $.ajax({
        url: 'ticket-calender-agent-data', // Replace with your Laravel route URL
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
                    var urls = ['view_ticket_agent/' + event.transaction_id];
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
