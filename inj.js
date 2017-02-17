window.returnTitle = function() {
    //$("input[name='login']").value = 'immarketing@mail.ru';
    //$("input[name='password']").value = 'iammarketer1';
    var login = document.getElementsByTagName("login");
    document.getElementsByTagName("form")[0].querySelector("input[name='login']").value='immarketing@mail.ru';
    document.getElementsByTagName("form")[0].querySelector("input[name='password']").value='iammarketer1';
    document.getElementsByTagName("form")[0].submit();
    //login[0].
    //return document.getElementsByTagName("form")[0].querySelector("input[name='login']").value;
    return 'injected ok';

    //document.querySelector("option[value='unread']:enabled")

    // document.getElementsByTagName("i")[0].querySelector("i[class='ix ix-count ix-count_red ']")
    //document.querySelector("i.ix-count_red")
    //document.querySelector("a[href='//www.avito.ru/profile/messenger']")
    // document.querySelector("i.ix-count_red").innerText
    //return $("input[name='password']").value;
    //<a title="Сообщения" class="header-services-icons__icon header-services-icons__icon_messenger" href="//www.avito.ru/profile/messenger"> <span class="header-services-icons__svg-wrapper"> <i class="ix ix-count ix-count_red ">

};

