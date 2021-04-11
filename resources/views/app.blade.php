<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Open+Sans:wght@600&family=Oswald:wght@300&display=swap" rel="stylesheet">
    {{--    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />--}}
    {{--    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />--}}
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    @routes
    <script src="{{ mix('/js/app.js') }}" defer></script>

</head>
<body>
@inertia
</body>
</html>
