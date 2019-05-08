<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>VISUM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-site-verification" content="BgCQrm1D8g_faxRDk1XRX-07q3LaHkp5i_TjgWa7Lho" />
        <meta name="google-site-verification" content="uskkYIxr816AeIq4aNJYy947MEzH1qblHtDrMNA12TI" />
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        @if(config('app.env') == 'local')
            <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
        @else
            <link rel="icon" type="image/png" href="{{ secure_asset('favicon.png') }}" />
        @endif
        <style>
            .pre_loading {
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                animation: show 3s;
                background-color: #dae0e6;
            }
            @keyframes show {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
            .spinner {
                margin: 100px auto 0;
                width: 70px;
                text-align: center;
            }

            .spinner > div {
                width: 18px;
                height: 18px;
                background-color: #333;

                border-radius: 100%;
                display: inline-block;
                -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
                animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            }

            .spinner .bounce1 {
                -webkit-animation-delay: -0.32s;
                animation-delay: -0.32s;
            }

            .spinner .bounce2 {
                -webkit-animation-delay: -0.16s;
                animation-delay: -0.16s;
            }

            @-webkit-keyframes sk-bouncedelay {
                0%, 80%, 100% { -webkit-transform: scale(0) }
                40% { -webkit-transform: scale(1.0) }
            }

            @keyframes sk-bouncedelay {
                0%, 80%, 100% { 
                    -webkit-transform: scale(0);
                    transform: scale(0);
            } 40% { 
                -webkit-transform: scale(1.0);
                transform: scale(1.0);
            }
            }
        </style>
    </head>
    <body>
        <div id="app">
            <div class="pre_loading">
                    <div class="spinner">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                    </div>
            </div>
        </div>
    @if(config('app.env') == 'local')
        <script src="http://localhost:35729/livereload.js"></script>
        <script src="{{ asset('js/app.js') }}"></script>
    @else
        <script src="{{ secure_asset('js/app.js') }}"></script>
    @endif
    </body>
</html>
