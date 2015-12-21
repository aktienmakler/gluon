$( document ).ready(function() {
        var url = document.URL;
        url = url.substring(url.indexOf('luci')+5);
        var cookieName = url.substring(0,url.length-1);
        var stored=Cookies.getJSON(cookieName);

        if(stored) {
                var data = stored;
                $.each(data, function(k, v) {
                        if($("#maincontainer input[name='"+k+"']").attr("type")=="checkbox") {
                                $("#maincontainer input[name='"+k+"']").prop("checked",v);
                                cbi_d_update($("#maincontainer input[name='"+k+"']").attr('id'));
                        } else {
                                $("#maincontainer input[name='"+k+"']").val(v);
                        }
                        $("#maincontainer select[name='"+k+"']").val(v);
                });
        } else {
                var data = {};
        }

        $("ul#modemenu a, li[class^='tabmenu-item-'] a").click(function() {
                $( "#maincontainer input[name^='cbid.'], #maincontainer select[name^='cbid.']" ).each(function() {
                        if($(this).attr("type")=="checkbox") {
                                data[$(this).attr("name")] = $(this).is(':checked');
                        } else {
                                data[$(this).attr("name")] = $(this).val();
                        }
                });
                Cookies.set(cookieName, data, {expires:1});
        });
});
