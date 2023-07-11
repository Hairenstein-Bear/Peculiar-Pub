<!DOCTYPE html>
<html>
<head>
    <title>Peculiar Pub Add Loyalty Points</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <div class="container mt-4">
  @if(session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
  @endif
  <div class="card">
    <div class="card-header text-center font-weight-bold">
      Add Loyalty Points
    </div>
    <div class="card-body">
      <form name="add-loyalty-points-form" id="add-loyalty-points-form" method="post" action="{{url('store-form')}}">
       @csrf
        <div class="form-group">
          <label for="exampleInputEmail1">Invoice Number</label>
          <input type="text" id="points" name="points" class="form-control" required="">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
    <div><a href = "/dashboard">Return to Dashboard</a></div>
    <div><a href = "/lookup-loyalty-points">Loyalty Points History</a></div>
    <div><a href = "/redeempoints">Redeem Points</a></div>
</div>  
</body>
</html>
