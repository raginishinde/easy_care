
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

$(document).ready(function(){
    $('#filediv').hide();
    
    $('input[type=file]').change(function(e){
      //$in=$(this);
      var $in = e.target.files[0].name;
       $('#selected_file').html($in);
       $('.write_msg').val(''); 
       $('.write_msg').attr('readonly','true'); 
       $('#filediv').show();
    });

    $('#remove').click(function(e){
        $('input[type=file]').val("");
        $('#selected_file').html("");
        $('.write_msg').removeAttr('readonly');                
        $('#filediv').hide();
    });

    $(".type_msg").hide();

    $('#search-bar').keyup(function(){ 
        var query = $(this).val();
        var url = baseurl + "/getmsgUsers";
        if(query != '')
        {
         var _token = $('input[name="_token"]').val();
         $.ajax({
          url: url,
          method:"POST",
          data:{query:query, _token:_token},
          success:function(data){
                $('#userList').fadeIn();  
                $('#userList').html(data);
          }
         });
        }
    });

    $(document).on('click', '.search_li', function(){  
        $('#search-bar').val($(this).text());  
        $('#userList').fadeOut();  
        
        $('.chat_list').removeClass("activediv");
        $('.name').removeClass("activename");
        
        $(".mesgs").show();
        event.preventDefault();
        var id = $(this).attr('data-id');
        $("div[data-id="+id+"]").addClass("activediv");
        $("div[data-id="+id+"]").find('h5').addClass("activename");
        $(".msg_send_btn").attr("data-id",id);
        $(".type_msg").show();
        load_msgs(id);
        $('#search-bar').val("");
    });  

    /*$(document).on('click','.chat_list', function(event){
        var id = $(this).attr('data-id');
        $('#msg_send_btn').attr('data-id', id);   
    }); */

    $(document).on('click','.chat_list', function(event){
        $('.chat_list').removeClass("activediv");
        $('.name').removeClass("activename");
        $(".mesgs").show();
        $("#userList").hide();
        $('#search-bar').val('');         
        //alert();
        event.preventDefault();
        $(this).addClass("activediv");
        $(this).find('h5').addClass("activename");
        var id = $(this).attr('data-id');
        $(".msg_send_btn").attr("data-id",id);
        $(".type_msg").show();
        $('#dot_'+id).css({'display':'none'});
        
        load_msgs(id);            
    });

    //function load_msgs(id,page)
    function load_msgs(id)
    
    {
        //alert('hiii');
        $('.write_msg').removeAttr('readonly');                
           var get_id = $(".get-id").val(); 
          // alert(get_id);
        $.ajax({
            method: "POST",
            dataType: "json",
            url: baseurl + "/api/get-message",
           // data: {'id': id,'page':page},
           data: {'id': id,'get_id' : get_id},
            success: function(data){
                $('.msg_history').empty();
                $('.msg_history').append(data); 
                $('.msg_history').scrollTop($('.msg_history')[0].scrollHeight);     
            }
        });
    }

    $(document).on('click','.msg_send_btn', function(event){
    // $('#msg-form').submit(function(event) {
        event.preventDefault();
        var text = $(".write_msg").val();
        var get_id = $(".get-id").val();
        let trimStr = text.trim();
        //var file = $('input[type=file]').val();
        if(trimStr == ""){
            bootbox.alert("Please type message.");
            return false;
        }     
        else{
            // //alert('rrr');
            // let form_data = new FormData();
            // //$('div').find('.active_chat').removeClass("active_chat");
             $('.mask').show();
            
            
            var id = $(this).attr('data-id');            
            var form_data = new FormData();
            form_data.append("id", id);
            form_data.append("text", text);
            form_data.append("get_id", get_id);
            
            //console.log(form_data);
                
            $.ajax({

                method: "POST",

                dataType: "json",

                url: baseurl + "/api/send-message",

                contentType: false,

                cache: false,

                processData: false,

                data: form_data,

                success: function(data){
                   $('.mask').hide();

                    $(".write_msg").val("");
                    
                    $('.write_msg').removeAttr('readonly');                
                    $('#filediv').hide();
                    //$('.msg_history').empty();
                    // $('.msg_history').append(data);      
                    load_msgs(id);
                }
            });
        }                           
    });
});

