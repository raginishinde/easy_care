$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});


$(document).ready(function() {
    var table = $('#viewlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_user',
        //  url: baseurl + "/userlogin",
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'f_name', name: 'f_name' },
            { data: 'l_name', name: 'l_name' },
            { data: 'email', name: 'email' },
            { data: 'contact', name: 'contact' },
            { data: 'role', name: 'role' },
            { data: 'status', name: 'status' },
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
            { data: 'category_name', name: 'category_name' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
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
            { data: 'company_name', name: 'company_name' },
            { data: 'licence_no', name: 'licence_no' },
            { data: 'licence_type', name: 'licence_type' },
            { data: 'status1', name: 'status1' },
            { data: 'status', name: 'status' },
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
            { data: 'firstName', name: 'firstName' },
            { data: 'lastName', name: 'lastName' },
            { data: 'email', name: 'email' },
            { data: 'username', name: 'username' },

        ]
    });
});

$(document).ready(function() {
    var table = $('#roleslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_users',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'username', name: 'username' },
            { data: 'firstName', name: 'firstName' },
            { data: 'lastName', name: 'lastName' },
            { data: 'email', name: 'email' },
            { data: 'role', name: 'role' },
        ]
    });
});

$(document).ready(function() {
    var table = $('#userlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_users',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'username', name: 'username' },
            { data: 'first_name', name: 'first_name' },
            { data: 'last_name', name: 'last_name' },
            { data: 'email', name: 'email' },
            { data: 'avatar', name: 'avatar' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#locationadminlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/snipe_admin_location',
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
    var table = $('#assetadminlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_admin_asset',
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
        url: baseurl + '/snipe_supplier',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#consumablelist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_users',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'model_number', name: 'model_number' },
            { data: 'order_number', name: 'order_number' },
            { data: 'remaining', name: 'remaining' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#adminticketslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_tickets',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'title', name: 'title' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#adminstatuslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_admin_status',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'status_name', name: 'status_name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#adminprioritieslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_admin_priorities',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#admincategorylist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_admin_category',
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
        url: baseurl + '/view_admin_companies',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#adminticketlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_admin_ticket',
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
    var table = $('#adminticketlistreassign').dataTable({
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
    var table = $('#adminuserslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_admin_users',
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
    var table = $('#adminusersbouncielist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_admin_bouncie_users',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'firstName', name: 'firstName' },
            { data: 'lastName', name: 'lastName' },
            { data: 'email', name: 'email' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#admingroupslist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/admin_groups',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).ready(function() {
    var table = $('#adminrequestlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_admin_view_request',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'qty', name: 'qty' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
});

$(document).on('click', '.delete_admin_users', function() {
    var id = $(this).attr('data-id');
    // alert(id);
    bootbox.confirm({
        message: "Do you want to delete this users?",
        buttons: {
            confirm: {
                label: 'Ok',
                className: 'btn btn-info'
            },
            cancel: {
                label: 'Cancel',
                className: 'btn-secondary'
            }
        },
        callback: function(result) {
            if (result) {
                $.ajax({
                    type: 'get',
                    url: baseurl + '/delete_admin_users/'+id,
                    data: {
                        id: id,
                        _token: $('meta[name="csrf-token"]').attr('content'),
                    },
                    dataType: 'json',
                    success: function(data) {
                        window.location.reload();
                    },
                });
            }
        }
    });
});

$(document).ready(function() {
    var table = $('#vehicleadminlist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_admin_vehicle',
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


// $(document).ready(function() {
//     var table = $('#vehicle_admin_trips_list').dataTable({
//         processing: true,
//         serverSide: true,
//         url: baseurl + '/vehicle_admin_trips',
//         columns: [
//             { data: 'DT_RowIndex', name: 'DT_RowIndex' },
//             { data: 'transactionId', name: 'transactionId' },
//             { data: 'startTime', name: 'startTime' },
//             { data: 'startOdometer', name: 'startOdometer' },
//             {data: 'action', name: 'action', orderable: false, searchable: false},
//         ]
//     });
// });

$(document).ready(function() {
    var table = $('#adminrolelist').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_admin_role',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
        ]
    });
});

$(document).ready(function() {
    var table = $('#eighthundredusers').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_eighthundred_admin_users',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'first_name', name: 'first_name' },
            { data: 'last_name', name: 'last_name' },
            { data: 'email', name: 'email' },
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
    var table = $('#mlhlicence_dash1').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/dashboard',
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
        url: baseurl + '/dashboard',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'company_name', name: 'company_name' },
            { data: 'contact_name', name: 'contact_name' },
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
    var table = $('#eighthundredactivity').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_eighthundred_admin_activity',
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
    $(document).on('change','#aioConceptName' ,function(){
        //alert();
  var val = $('#aioConceptName option:selected').val();
 // alert(val);
 // var text = $('#aioConceptName option:selected').text();
 // alert(hiii);
  $('.result').text(val);
  //alert('.result');
})


// $(document).ready(function() {
//     // alert();
//     $(".select1").change(function(){
//         // alert();
//         $(this).find("option:selected").each(function(){
//         var optionValue = $(this).attr("class");
//         alert(optionValue);
//     if(optionValue != "Master_License_Holders"){
//         $("#location").prop("disabled",false);
//         $("#hiderow").show();
//     } else {
//         $("#hiderow").hide();
//         $("#location").prop("disabled",true);
//     }
   
// });        
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
            }
            // else if(optionValue == '6'){
            //     $("#hiderow1").hide();
            //     $("#hiderow").hide();
            //     $("#hiderow12").show();
            // }
            else{
                $("#hiderow").hide();
                $("#hiderow1").hide();
                $("#hiderow12").hide();
            }
    });
});



// $(document).ready(function(){
   
//     $(".select1").change(function(){
//         $(this).find("option:selected").each(function(){
//             var optionValue = $(this).attr("class");
//             if(optionValue){
//                 $(".box").not("." + optionValue).hide();
//                 $("." + optionValue).show();
//             } else{
//                 $(".box").hide();
//             }
//         });
//     }).change();
// });

var selectedValuesTest = $(this).attr("class");
$(document).ready(function() {
  $("#e1").select2({
    multiple: true,
  });
  $('#e1').val(selectedValuesTest).trigger('change');
});

$(document).ready(function() {
    var table = $('#admincompliances').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/view_admin_compliances',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'address', name: 'address' },
            { data: 'rname', name: 'rname' },
            {data: 'action', name: 'action', orderable: false, searchable: false},
        ]
    });
});
$(document).ready(function() {
    var table = $('#view_assign_asset').DataTable( {
        processing: true,
        serverSide: true,
        url: baseurl + '/get_admin_reassign',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'serial_no', name: 'serial_no' },
            { data: 'company_name', name: 'company_name' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    } );
} );
$( document ).ready(function() {
    $(document).on('click', '#search', function(){
      if($('#role').val() != ""){
        // var role = $('#role').val();
        var role = $("#role option:selected").val();
        // alert(role);die();
      }else{
        var role = "";
      }
      var params = [role];
      console.log(params);

    if ($.fn.DataTable.isDataTable('.datatable-custom')) {
        $('.datatable-custom').DataTable().clear().destroy();
    }
       
    var table = $('#admincompliances').dataTable({
        processing: true,
        serverSide: true,
        ajax: baseurl+ '/rolefilterdata/'+params, 
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
    var table = $('#adminoncomplienceslist').dataTable({
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
                $("#hide_agent_row1").hide();
            }else if(optionValue == '2'){
                $("#hiderow").hide();
                $("#hiderow1").show();
                $("#select_llh").hide();
                $("#select_mlh").hide();
                $("#select_agent_llh").hide();
                 $("#hiderow12").hide();
                $("#hide_agent_row1").hide();
            }else if(optionValue == '3'){
                $("#hiderow1").hide();
                $("#hiderow").show();
                $("#hiderow12").hide();
                $("#select_llh").hide();
                $("#select_agent_llh").hide();
                $("#select_mlh").hide();
                $("#hide_agent_row1").hide();
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
                $("#hiderow12").hide();
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
    var table = $('#ticketlist_new').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/get_ticket',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'TicketNumber', name: 'TicketNumber' },
            { data: 'email', name: 'email' },
            { data: 'subject', name: 'subject' },
            { data: 'TicketType', name: 'TicketType' },
            { data: 'assignedTo', name: 'assignedTo' },
            { data: 'created', name: 'created' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ],
        order: [[6, 'desc']] // Sort by the 6th column (index 5) in descending order
    });
});

$(document).ready(function() {
    var table = $('#work_admin_ticket_new').dataTable({
        processing: true,
        serverSide: true,
        url: baseurl + '/work_admin_ticket',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'ticket_id', name: 'ticket_id' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
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


 
  $(document).ready(function() {

  // required elements
  var imgPopup = $('.img-popup');
  var imgCont  = $('.container__img-holder');
  var popupImage = $('.img-popup img');
  var closeBtn = $('.close-btn');

  // handle events
  imgCont.on('click', function() {
    var img_src = $(this).children('img').attr('src');
    imgPopup.children('img').attr('src', img_src);
    imgPopup.addClass('opened');
  });

  $(imgPopup, closeBtn).on('click', function() {
    imgPopup.removeClass('opened');
    imgPopup.children('img').attr('src', '');
  });

  popupImage.on('click', function(e) {
    e.stopPropagation();
  });
  
});

$(document).ready(function() {
    var events = []; // Initialize an empty events array
    // Make an AJAX request to fetch events data from Laravel controller
    $.ajax({
        url: 'ticket-calender-admin-data', // Replace with your Laravel route URL
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
                    var urls = ['view_ticket_admin/' + event.transaction_id];
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
