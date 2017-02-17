/**
 * Created by AlGO on 16.01.2017.
 */

"use strict";

var pngNO = 0;

// <input class="login-form-input" placeholder="Электронная почта" name="login" value="" autofocus="" maxlength="64" type="email">
// <input class="form-password-input login-form-input" value="" name="password" placeholder="Пароль" type="password">
// <button class="button button-origin button-origin-yellow login-form-submit" type="submit">Войти</button>



function printArgs() {
    var i, ilen;
    for (i = 0, ilen = arguments.length; i < ilen; ++i) {
        console.log("    arguments[" + i + "] = " + JSON.stringify(arguments[i]));
    }
    console.log("");
}

function _agRender() {
    var fn = 'example'+(pngNO++)+'.png';
    page.render(fn);
    printArgs('rendering['+fn+']');
}

var page = require('webpage').create();

//console.log('The default user agent is ' + page.settings.userAgent);
page.onConsoleMessage = function(msg) {
    console.log('Page title is ' + msg);
};

page.onInitialized = function() {
    console.log("page.onInitialized");
    printArgs.apply(this, arguments);
};

page.onLoadFinished = function() {
    console.log('onLoadFinished ['+page._agAction+']');
    _agRender();
};

page.onLoadStarted = function() {
    console.log("page.onLoadStarted");
    printArgs.apply(this, arguments);
};
page.onLoadFinished = function() {
    //console.log("page.onLoadFinished");
    console.log('onLoadFinished ['+page._agAction+']');
    printArgs.apply(this, arguments);
    _agRender();

    if (page._agAction === 'exit') {
        phantom.exit();
    }

    if (page._agAction === 'action'){
        // document.querySelector("i.ix-count_red").innerText
        console.log('actioning ');
        //page._agAction = 'submitted';
        var txt = page.evaluate(function() {
            return document.querySelector("i.ix-count_red").innerText;
            //$("button.login-form-submit").click();
        });
        console.log('txt '+ txt);
    }
};

page.onUrlChanged = function() {
    console.log("page.onUrlChanged");
    printArgs.apply(this, arguments);
};
page.onNavigationRequested = function() {
    /*
    console.log("page.onNavigationRequested");
    printArgs.apply(this, arguments);
    */
};
page.onRepaintRequested = function() {
    /*
    console.log("page.onRepaintRequested");
    printArgs.apply(this, arguments);
    */
};


page.open('https://www.avito.ru/profile/messenger', function(status) {
    console.log("Status: " + status);
    if(status === "success") {
        /*
        page.includeJs("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
            console.log('actioning ');
            page._agAction = 'submitted';
            page.evaluate(function() {
                $("button.login-form-submit").click();
            });
        });
        */
        page._agAction = 'submitted';
        //page.evaluateAsync(function() {
        /*
        page.evaluate(function() {
            //console.log(document.title);
            $("input[name='login']").value = 'immarketing@mail.ru';
            $("input[name='password']").value = 'iammarketer1';
            //$("button.login-form-submit").click();
        });
        */
        //printArgs('injecting',page.injectJs('inj.js'));

        page._agAction = 'action';

        if (page.injectJs('inj.js')) {
            var title = page.evaluate(function() {
                // returnTitle is a function loaded from our do.js file - see below
                return returnTitle();
            });
            console.log(title);
            _agRender();
        }

        //$("i.ix.ix-count_red").text()
        /*
        page.evaluate(function() {
            document.getElementsByTagName("form")[0].submit();
        });
        */
        //page.injectJs('inj.js');
        //_agRender();

        //page.render('example.png');
    }
    //phantom.exit();
});


