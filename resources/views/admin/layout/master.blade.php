<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>@yield('title') - iNara Portal</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ asset('public/plugins/fontawesome-free/css/all.min.css') }}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset('public/dist/css/adminlte.min.css') }}">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="{{ asset('public/assets/css/select2.min.css') }}">
  <link rel="stylesheet" href="{{ asset('public/assets/css/style.css') }}">
   <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css"> 
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.3.2/css/buttons.dataTables.min.css">
  <!--Select multiple 
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />-->
 <link rel="shortcut icon" href="{{ asset('public/dist/img/AdminLTELogo.png') }}">
  <script type="text/javascript">
        var baseurl = '<?php echo url('/'); ?>';
  </script>
  <style>
    .select2-container--default .select2-selection--single .select2-selection__rendered {
   
    line-height: 28px !important;
}
.select2-container .select2-selection--single {
   
    height: 40px !important;
    }
    .select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 40px !important;}
  div.dataTables_wrapper div.dataTables_length select {
    width: 80px;
    display: inline-block;
}
div.dt-buttons {
    width: 100%;
    margin-bottom: 10px;
}
  /*-------------------------------------------------------------------
  :: Profile SCSS
  --------------------------------------------------------------------*/
  .upload-file input[type=file] {line-height: 2.8;color: #01222e; }
  .upload-file .upload-image {height: 150px;width: 150px;border-radius: 3px;margin: 10px 0 0;overflow: hidden; }
    .upload-file .upload-image img {
      height: 100%;width: 100%;object-fit: cover;object-position: center; }
  </style>
</head>
@include('admin.layout.header')

@include('admin.layout.sidebar')
<div class="content-wrapper">
@yield('content')
</div>
@include('admin.layout.footer')
<script src="{{ asset('public/dist/js/pages/dashboard.js') }}"></script>
</body>
</html>