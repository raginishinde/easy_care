$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

$(document).ready(function() {
    var table = $('#groupslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/groups',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#userslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_users',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'company_name', name: 'company_name' },
            { data: 'email', name: 'email' },
            { data: 'licence_no', name: 'licence_no' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#rolelist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_role',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
        ]
    });
});

$(document).ready(function() {
    var table = $('#statuslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_status',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'status_name', name: 'status_name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#prioritieslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_priorities',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#categorylist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_category',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});
$(document).ready(function() {
    var table = $('#admincompanylist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_manager_companies',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});


$(document).ready(function() {
    var table = $('#locationlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_users',
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
    var table = $('#ticketlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_ticket',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'ht', name: 'ht' },
            { data: 'name', name: 'username' },
            
            // { data: 'lastname', name: 'lastname' },
            { data: 'email', name: 'email' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#ticketlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_ticket',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'ht', name: 'ht' },
            { data: 'name', name: 'username' },
            
            // { data: 'lastname', name: 'lastname' },
            { data: 'email', name: 'email' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#ticketlist_new').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_tickets_manager',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'ht', name: 'ht' },
            { data: 'name', name: 'name' },
            { data: 'subject', name: 'subject' },
            { data: 'TicketType', name: 'TicketType' },
            { data: 'created', name: 'created' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ],
        order: [[5, 'desc']] // Sort by the 6th column (index 5) in descending order
    });
});

$(document).ready(function() {
    var table = $('#assetlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_asset',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
           
            { data: 'model_number', name: 'model_number' },
            { data: 'order_number', name: 'order_number' },
            { data: 'category', name: 'category' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});
$(document).ready(function() {
    var table = $('#supplierlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/snipe_supplier_manager',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});
$(document).ready(function() {
    var table = $('#ticketlistreassign').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_ticket_reassign',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'title', name: 'title' },
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
    var table = $('#requestlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_view_request',
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
    var table = $('#vehiclelist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_vehicle',
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
    var table = $('#vehicle_trips_list').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/vehicle_trips',
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
    var table = $('#eighthundredusers').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_eighthundred_users',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'first_name', name: 'first_name' },
            { data: 'last_name', name: 'last_name' },
            { data: 'email', name: 'email' },
        ]
    });
});

$(document).ready(function() {
    var table = $('#eighthundredactivity').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_eighthundred_activity',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'number', name: 'number' },
            { data: 'info', name: 'info' },
            { data: 'sender', name: 'sender' },
            { data: 'created_at', name: 'created_at' },
            { data: 'ended_at', name: 'ended_at' },
        ]
    });
});


$(document).ready(function() {
    var table = $('#managerusersbouncielist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_manager_bouncie_users',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
           
            { data: 'email', name: 'email' },
        
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#managercompliances').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_manager_compliances',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'address', name: 'address' },
            { data: 'rname', name: 'rname' },
            {data: 'action', name: 'action', orderable: false, searchable: false},
        ]
    });
});

$( document ).ready(function() {
    $(document).on('click', '#search', function(){
      if($('#role').val() != ""){
        var role = $('#role').val();
      }else{
        var role = "";
      }
      var params = [role];
      console.log(params);

    if ($.fn.DataTable.isDataTable('.datatable-custom')) {
        $('.datatable-custom').DataTable().clear().destroy();
    }
       
    var table = $('#managercompliances').dataTable({
        processing: true,
        serverSide: true,
        ajax: baseurl+ '/rolemanagerfilterdata/'+params, 
        columns: [
            {data: 'DT_RowIndex'},
            { data: 'name', name: 'name' },                               
            { data: 'address', name: 'address' },               
            { data: 'rname', name: 'rname' },
            {data: 'action', name: 'action', orderable: false, searchable: false},
        ]
      });
    });    
  });
  
  $(document).ready(function() {
    var table = $('#managernoncomplienceslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_admin_non_compliences',
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
    var table = $('#licencelist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_licence',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'licence_no', name: 'licence_no' },
            { data: 'licence_type', name: 'licence_type' },
            { data: 'status1', name: 'status1' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});
$(document).ready(function() {
    var table = $('#mlhlicence').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/mlh',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'company_name', name: 'company_name' },
            { data: 'contact_name', name: 'contact_name' },
            { data: 'email', name: 'email' },
            {data: 'action', name: 'action', orderable: false, searchable: false},
        ]
    });
});
$(document).ready(function() {
    var table = $('#llhlicence').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/llh',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'company_name', name: 'company_name' },
            { data: 'contact_name', name: 'contact_name' },
            { data: 'email', name: 'email' },
            {data: 'action', name: 'action', orderable: false, searchable: false},
        ]
    });
});

  $(document).ready(function() {
    $('#ticketFor').select2();
    $('#ticketFor').on('change', function() {
      var selectedValue = $(this).val();
      var selectedText = $(this).find('option:selected').text();
      //alert(selectedText);
      
      $('#CompanyUserEmail').val(selectedValue);
      $('#CompanyUserName').val(selectedText);
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
  
 $(document).ready(function() {
    var table = $('#view_assign_asset').DataTable( {
        processing: true,
        serverSide: true,
        url: baseurl + '/get_manager_assign',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'serial_no', name: 'serial_no' },
            { data: 'company_name', name: 'company_name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    } );
} );
 $(document).ready(function(){
    $('#datepicker1').on('change',function(){
        var date1 = $(this).val();
        $.ajax({
            url: baseurl + '/get-date',
            data: { date1: date1 },
            success: function(response){
                $('#datepicker2').val(response);
            }
        });
    });
});
$(document).ready(function() {
    var table = $('#mlhlicence_dash').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/dashboard_manager',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'company_name', name: 'company_name' },
            { data: 'contact_name', name: 'contact_name' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#llhlicence_dash').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/dashboard_manager',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'company_name', name: 'company_name' },
            { data: 'contact_name', name: 'contact_name' },
        ]
    });
});

$(document).ready(function() {
    var table = $('#work_manager_ticket_new').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/work_manager_ticket',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'ticket_id', name: 'ticket_id' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

// $(document).ready(function() {
//     $("#hiderow1").hide();
//     $("#hiderow").hide();
//         $("#role").change(function() {
//             var optionValue = this.value;
//             if(optionValue == '3'){
//                 $("#hiderow1").hide();
//                 $("#hiderow").show();
//                 $("#select_llh").hide();
//                 $("#select_mlh").hide();
//             }else if(optionValue == '2'){
//                 $("#hiderow").hide();
//                 $("#hiderow1").show();
//                 $("#select_llh").hide();
//                 $("#select_mlh").hide();
//             }else if(optionValue == '1'){
//                 $("#hiderow").hide();
//                 $("#hiderow1").show();
//                 $("#select_llh").hide();
//                 $("#select_mlh").hide();
//             }else if(optionValue = '6'){
//                 $("#hiderow").hide();
//                 $("#hiderow1").hide();
//                 $("#select_llh").hide();
//                 $("#select_mlh").hide();
//                 $('#select_mlh').prop("disabled", true);
//                 $('#select_llh').prop("disabled", true);
//                 $('#hiderow1').prop("disabled", true);
//                 $('#hiderow').prop("disabled", true);
//             }else if(optionValue = '4'){
//                 $("#hiderow").hide();
//                 $("#hiderow1").hide();
//                 $("#select_llh").hide();
//                 $("#select_mlh").hide();
//                 $('#select_mlh').attr("disabled", true);
//                 $('#select_llh').attr("disabled", true);
//                 $('#hiderow1').attr("disabled", true);
//                 $('#hiderow').attr("disabled", true);
//             }else if(optionValue = '5'){
//                 $("#hiderow").hide();
//                 $("#hiderow1").hide();
//                 $("#select_llh").hide();
//                 $("#select_mlh").hide();
//                 $('#select_mlh').attr("disabled", true);
//                 $('#select_llh').attr("disabled", true);
//                 $('#hiderow1').attr("disabled", true);
//                 $('#hiderow').attr("disabled", true);
//             }else{
//                 $("#hiderow").hide();
//                 $("#hiderow1").hide();
//             }
//     });
// });



$(document).ready(function() {
    $("#hiderow1").hide();
    $("#hiderow").hide();
     $("#hiderow12").hide();
        $("#role").change(function() {
            var optionValue = this.value;
            if(optionValue == '1'){
                $("#hiderow").hide();
                $("#hiderow1").show();
                $("#hiderow12").hide();
            }else if(optionValue == '2'){
                $("#hiderow").hide();
                $("#hiderow1").show();
                 $("#hiderow12").hide();
            }else if(optionValue == '3'){
                $("#hiderow1").hide();
                $("#hiderow").show();
                 $("#hiderow12").hide();
            }else if(optionValue == '4'){
                $("#hiderow").hide();
                $("#hiderow1").hide();
                 $("#hiderow12").hide();
            }else if(optionValue == '5'){
                $("#hiderow").hide();
                $("#hiderow1").hide();
                 $("#hiderow12").hide();
            }else if(optionValue == '6'){
                $("#hiderow1").hide();
                $("#hiderow").hide();
                $("#hiderow12").show();
            }
            else{
                $("#hiderow").hide();
                $("#hiderow1").hide();
                $("#hiderow12").hide();
            }
    });
});

$(document).ready(function() {
    $("#hiderow1").hide();
    $("#hiderow").hide();
    $("#hiderow12").hide();
        $("#role").change(function() {
            var optionValue = this.value;
            if(optionValue == '1'){
                $("#hiderow").hide();
                $("#hiderow1").show();
                $("#select_llh").hide();
                $("#select_mlh").hide();
                $("#select_agent_llh").hide();
                 $("#hiderow12").hide();
            }else if(optionValue == '2'){
                $("#hiderow").hide();
                $("#hiderow1").show();
                $("#select_llh").hide();
                $("#select_mlh").hide();
                $("#select_agent_llh").hide();
                $("#hiderow12").hide();
            }else if(optionValue == '3'){
                $("#hiderow1").hide();
                $("#hiderow").show();
                $("#hiderow12").hide();
                $("#select_llh").hide();
                $("#select_agent_llh").hide();
                $("#select_mlh").hide();
            }else if(optionValue == '4'){
                $("#hiderow").hide();
                $("#hiderow1").hide();
                $("#select_llh").hide();
                $("#select_mlh").hide();
                $("#hiderow12").hide();
                $("#select_agent_llh").hide();
                $('#select_mlh').attr("disabled", true);
                $('#select_llh').attr("disabled", true);
                $('#hiderow1').attr("disabled", true);
                $('#hiderow').attr("disabled", true);
            }else if(optionValue == '5'){
                $("#hiderow").hide();
                $("#hiderow1").hide();
                $("#select_llh").hide();
                $("#select_mlh").hide();
                $("#hiderow12").hide();
                $("#select_agent_llh").hide();
                $('#select_mlh').attr("disabled", true);
                $('#select_llh').attr("disabled", true);
                $('#hiderow1').attr("disabled", true);
                $('#hiderow').attr("disabled", true);
            }else if(optionValue == '6'){
                // alert(optionValue);
                $("#hiderow").hide();
                $("#hiderow1").hide();
                $("#select_llh").hide();
                $("#select_mlh").hide();
                $("#select_agent_llh").hide();
                $("#hiderow12").show();
                $('#select_mlh').attr("disabled", true);
                $('#select_llh').attr("disabled", true);
                $('#hiderow1').attr("disabled", true);
                $('#hiderow').attr("disabled", true);
            }else{
                $("#hiderow").hide();
                $("#hiderow1").hide();
                $("#hiderow12").hide();
            }
    });
});

$(document).ready(function() {
    var events = []; // Initialize an empty events array
    // Make an AJAX request to fetch events data from Laravel controller
    $.ajax({
        url: 'ticket-calender-manager-data', // Replace with your Laravel route URL
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
                    var urls = ['reply_ticket/' + event.transaction_id];
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
    $('#selectedMLH').change(function() {
      var selectedValue = $(this).val();
      populateTicketFor(selectedValue);
    });
    
    
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
  $('#get-data-button').change(function() {
      var selectedValue = $(this).val();
      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });
    $.ajax({
      url: baseurl + '/api/get-licence-data',
      
        type: 'POST',
        data: { value: selectedValue },
        dataType: 'json',
        
        success: function(data) {
          $('#company_name').val(data.company_name);
          $('#dba').val(data.dba);
        },
        error: function() {
          console.log('An error occurred.');
        }
    });
  });
});

