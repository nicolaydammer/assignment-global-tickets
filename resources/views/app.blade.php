<!DOCTYPE html>
<html>
<head>
    @csrf
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @viteReactRefresh
    @vite('resources/js/App.jsx')
    @vite('resources/sass/app.scss')
    @inertiaHead
</head>
<body>
@inertia
</body>
</html>
