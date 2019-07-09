<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <base href="/">
        <title>Laravel</title>       
    </head>
    <body>
        <app-root></app-root>
        <!-- Bootstrap -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>  
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script>  
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>  
        <!-- Script Angular -->
        <script src="{{ asset('js/runtime-es2015.js') }}" type="module"></script>
        <script src="{{ asset('js/polyfills-es2015.js') }}" type="module"></script>
        <script src="{{ asset('js/runtime-es5.js') }}" nomodule></script>
        <script src="{{ asset('js/polyfills-es5.js') }}" nomodule></script>
        <script src="{{ asset('js/styles-es2015.js') }}" type="module"></script>
        <script src="{{ asset('js/styles-es5.js') }}" nomodule></script>
        <script src="{{ asset('js/vendor-es2015.js') }}" type="module"></script>
        <script src="{{ asset('js/main-es2015.js') }}" type="module"></script>
        <script src="{{ asset('js/vendor-es5.js') }}" nomodule></script>
        <script src="{{ asset('js/main-es5.js') }}" nomodule></script>
    </body>
</html>
