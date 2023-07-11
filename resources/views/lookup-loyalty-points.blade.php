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
      Loyalty Point History
    </div>
    <div class="card-body">
        <p>Total Available Loyalty Points: {{ $loyaltyTotal }} </p>
    </div>
  </div>
    <div><a href = "/dashboard">Return to Dashboard</a></div>
    <div><a href = "/add-loyalty-points-form">Add Loyalty Points</a></div>
    <div><a href = "/redeempoints">Redeem Points</a></div>
</div>  
</body>
</html>