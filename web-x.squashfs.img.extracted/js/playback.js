!function(a){var b="EventType",c={A:"#D51111",F:"#00FFF7",M:"#DAE613",R:"#42D017"},d=webApp.DeviceType.contains("TPC")&&webApp.CHANNEL_NUMBER>1?[0,1]:[0];define(function(require,e,f){function g(a){var b=a.match(/(\/[^\/]*)/g).pop().slice(1),c=b.substring(0,b.lastIndexOf(".")+1)+L.$("#pla_format input:checked").val();return c}function h(b){var c,d=L.$("#pla_play_tip"),e=L.$("[btn-for=onPlay]");16===b?c="8X":8===b?c="6X":b>1?c=b+"X":b>0&&1>b?c="1/"+1/b+"X":1===b?c="Play":-1===b?c="Pause":(0===b||-2===b)&&(c="Stop",F.timeslider("value",a.pad(Q,2)+"000000")),W=b,d.text(tl(c)),e.toggleClass("pause",1===b).attr("title",tl(1===b?"Pause":"Play")),L.disabled("[btn-for=onEnlarge]",0===b||-2===b),L.disabled("[btn-for=onCutRegion]",0===b||-2===b),L.disabled("[btn-for=onSlow],[btn-for=onFast]",-1===b||0===b||-2==b),L.disabled("[btn-for=onNextFrame]",0===b||-2===b)}function i(a){z.DownloadByFile(a,"PlaybackRecord",g(a.FilePath)).done(function(b){b&&(i.flag=a,W=-2,V=!0,L.$("#ply_eventtype_select").addClass("ui-button-disabled"),L.disabled('[btn-for="onSearch"],#pla_all,#pla_typechks :checkbox,#pla_format :radio',!0),a.Process=0,E.table("refresh"),z.addEvent("DownloadPos",function(b){a.Process!==b&&(a.Process=b,E.table("refresh")),100===b&&setTimeout(j,1e3)}),z.addEvent("DownLoadError",function(){j(),t(tl("w_noSupportMp4"))}))})}function j(){i.flag&&(z.StopDownload(g(i.flag.FilePath)),V=!1,L.$("#ply_eventtype_select").removeClass("ui-button-disabled"),W=0,L.disabled('[btn-for="onSearch"],#pla_all,#pla_typechks :checkbox,#pla_format :radio',!1),delete i.flag.Process,E.table("refresh"),z.addEvent("DownloadPos",null),z.addEvent("DownLoadError",null),i.flag=null)}function k(b,c){if(-2===W)return E.table("selectRow",-1),t(tl("w_Can not play record file when download file"));var d=b.StartTime;c&&(d=b.StartTime.split(" ")[0]+" "+c),z.state("partialEnlarged")&&z.state("partialEnlarged",!1),z.PlaybackByFile(b,P,Q,d).done(function(c){c?(L.$('[btn-for="onSwitchSound"]').hasClass("play-bottom-iconbg-disabled")||z.PlayOpenSound(P),F.timeslider("value",a.pad(Q,2)+d.split(" ")[1].split(":").join("")),h(1),E.find("tbody tr[data-index="+b._index+"]").removeClass("error")):(E.find("tbody tr[data-index="+b._index+"]").addClass("error"),setTimeout(function(){E.table("selectRow",(E.table("getSelectedRow")+1)%U.length)},1e3))})}function l(){-2!==W&&0!==W&&(-1!==webApp.DeviceType.indexOf("TPC")?z.StopAllPlayBack().done(function(a){a&&(z.SetVisibleVideoWnd(1,0),J.table("selectRow",-1))}):(z.StopPlayBack(P),E.table("selectRow",-1).mouseleave(),z.state("partialEnlarged")&&z.state("partialEnlarged",!1)),h(0))}function m(){X=setInterval(function(){E.table("selectRow",(E.table("getSelectedRow")+1)%U.length)},3e3),L.$("[btn-for=onPlay]").addClass("pause").attr("title",tl("Pause"))}function n(){X&&(clearInterval(X),L.$("[btn-for=onPlay]").removeClass("pause").attr("title",tl("Play")))}function o(a){function b(a,b){e===Y&&(Math.abs(a-Video.rate)>=1e-4&&(Video.rate=a,s()),D.attr("src",b))}var c=isDDNS()?"http://"+location.hostname+":"+getDDNSMessage().devwebport:"",d=c+"/RPC_Loadfile"+a.FilePath,e=++Y;if(void 0===a.ImageRate){var f=new Image;f.src=d,f.onload=function(){a.ImageRate=f.width/f.height,b(a.ImageRate,d)}}else b(a.ImageRate,d)}function p(b){var c=++Z,d=a.extend(!0,{Channel:Q,Types:[H.val()],Events:"*"},b);x.WorkDirectory.getBitmapEx(I.val(),d).done(function(a){if(c===Z)for(var b=a.toString(2),e=b.length;--e;)"1"===b.charAt(b.length-e-1)&&G.calendar("mark",new Date(d.Year,d.Month-1,e))})}function q(b){var c=[],d=[],e=L.$("#pla_recordtype .ui-custom-select-content").empty();if(L.$("#pla_recordtype .ui-custom-select-inputbox").text(""),L.$("#pla_typechks :checkbox:checked:visible").each(function(f,g){var h=L.$(g).prop("id");switch(h){case"pla_normal":a('<li class="ui-custom-select-item" t="w_General"></li>').data("Flags",["Timing"]).appendTo(e),c.push("Timing"),d.push(tl("w_General"));break;case"pla_motion":a('<li class="ui-custom-select-item" t="w_Event"></li>').data("Flags",["Event"]).data("filter","A").appendTo(e),c.push("Event"),d.push(tl("w_Event")),b&&b.EventTypes&&a.isArray(b.EventTypes.M)&&a.each(b.EventTypes.M,function(b,c){a('<li class="ui-custom-select-item" t="'+c+'"></li>').data("Flags",["Event"]).data("Events",[c]).appendTo(e)});break;case"pla_alarm":a('<li class="ui-custom-select-item" t="w_Alarm"></li>').data("Flags",["Event"]).data("filter","M").appendTo(e),c.push("Event"),d.push(tl("w_Alarm"));break;case"pla_manual":a('<li class="ui-custom-select-item" t="w_Manual"></li>').data("Flags",["Manual"]).appendTo(e),c.push("Manual"),d.push(tl("w_Manual"))}}),c.length>1){var f=a('<li class="ui-custom-select-item">'+d.join(", ")+"</li>").data("Flags",c);-1!==a.inArray(tl("w_Event"),d)&&-1===a.inArray(tl("w_Alarm"),d)?f.data("filter","A"):-1!==a.inArray(tl("w_Alarm"),d)&&-1===a.inArray(tl("w_Event"),d)&&f.data("filter","M"),f.prependTo(e)}var g=e.translation().children(":first").addClass("ui-custom-select-item-current");g.length?g.click():G.calendar("select"),b&&b.Support?L.$("#pla_recordtype").show():L.$("#pla_recordtype").hide()}function r(c){function d(){x.MediaFileFind.findNextFile(e,S).done(function(c){$===e&&c.infos&&(a.each(c.infos,function(a,c){if(-1!==webApp.DeviceType.indexOf("TPC")){var d=c.FilePath.split("[");c[b]=d&&d[1].slice(0,1)}else{var d=c.FilePath.match(/\[[A-Z]\]/)||["[R]"];c[b]=d&&d[0].charAt(1)}c[b]!==T&&E.table("add",c,-1)}),"jpg"!==f&&F.timeslider("data",U),c.found===S&&d())})}var e,f=H.val(),g=a.extend(!0,{Channel:Q,Dirs:[L.$("#pla_dataSrc").val()],Types:[f],Order:"Ascent",Redundant:"Exclusion",Events:null},c);U.length=0,E.table("option","currentPage",1),E.table("dataSource",U),F.timeslider("data",U),D.attr("src","/image/black.png"),"jpg"===f?n():l(),0!==$&&(x.MediaFileFind.close($),x.MediaFileFind.destroy($),$=0),void 0!==c&&x.MediaFileFind.create().done(function(a){$=e=a,x.MediaFileFind.findFile(e,g).done(function(){$===e&&d()})})}function s(){var a=Math.max(document.documentElement.clientWidth-30-15-210,750),b=Math.max(document.documentElement.clientHeight-56-52-121,390),c={width:a,height:b};return K.hasFishEye?z.SetShowMode(1):a/Video.rate<b?(c.width=a,c.height=a/Video.rate):(c.width=b*Video.rate,c.height=b),C.css(c),D.css(c),"jpg"===H.val()||_||z.cover(C),L.$(".playback-right-container").height(c.height),-1!==webApp.DeviceType.indexOf("TPC")&&J.table("setHeight",Math.min(370,c.height-215)),E.table("setHeight",Math.min(370,c.height-215)),!1}function t(b){z.hide(),_=!0,a.alert(b,function(){_=!1,"jpg"!==H.val()&&z.cover(C)})}function u(b,c){z.hide(),_=!0,a.confirm(tl("Ok"),b,function(){a.isFunction(c)&&c(),_=!1,"jpg"!==H.val()&&z.cover(C)},function(){_=!1,"jpg"!==H.val()&&z.cover(C)})}function v(){var a;if(z.GetLocalRecordFileList(0).done(function(b){a=b}),R=[],a){a=JSON.decode(a).RecordFileList;for(var b=0;b<a.length;b++)R.push({localfile:a[b]});J.table("dataSource",R)}}function w(a){z.state("partialEnlarged")&&z.state("partialEnlarged",!1);for(var b=[],c=a.localfile.split(".")[0].split(""),d=c.getLast(),e=c.erase(d).join(""),f=0;f<R.length;f++)-1!==R[f].localfile.split(".")[0].indexOf(e)&&b.push(R[f].localfile);b.length>1?z.SetVisibleVideoWnd(2,0):z.SetVisibleVideoWnd(1,0);var g={RecordFileList:b};z.PlaybackByFile(JSON.encode(g),P,Q,null,"local").done(function(b){b?(L.$('[btn-for="onSwitchSound"]').hasClass("play-bottom-iconbg-disabled")||z.PlayOpenSound(P),h(1),J.find("tbody tr[data-index="+a._index+"]").removeClass("error")):(J.find("tbody tr[data-index="+a._index+"]").addClass("error"),setTimeout(function(){J.table("selectRow",(J.table("getSelectedRow")+1)%R.length)},1e3))})}var x=require("jsCore/rpc"),y=require("jsCore/ability"),z=require("jsCore/plugin"),A=require("jsCore/rpcLogin"),B=require("jsCore/pageBase");require("widget/js/dui.timeslider"),require("widget/js/dui.slider"),require("widget/js/dui.calendar");var C,D,E,F,G,H,I,J,K=require("fisheye"),L=null,M=".playback",N=null,O=null,P=0,Q=0,R=[],S=13,T=null,U=[],V=!1,W=0;f.exports=B.extend({init:function(){L=this,N=y.get("QueryDatabase"),C=L.$("#pla_video"),H=L.$("[sel-for=onChangeType]"),I=L.$("[sel-for=onChangeSrc]"),D=L.$("#pla_pic").on("click",function(a){var b=L.$(a.target),c=b.width(),d=b.offset().left,e=a.clientX,f=E.table("getSelectedRow");f=c/2>e-d?--f<0?f+U.length:f:++f%U.length,E.table("selectRow",f)}),-1!==webApp.DeviceType.indexOf("TPC")&&(L.$(".not-tpc").remove(),webApp.CHANNEL_NUMBER>1&&L.$("#pb_fileChannel").removeClass("fn-hide"),1===webApp.CHANNEL_NUMBER&&L.$("#pb_fileChannel").remove()),L.$(".playback-sound-slider").slider({min:0,max:100,value:50,snap:!1,prompt:!1,icons:!1,change:function(a,b){z.PlaySetVolume(P,b.value-100)}}),y.is("DSPConflict").done(function(a){a||!webApp.IsIPCIntel&&!webApp.IsSDIntel||L.$("[btn-for=onIVS]").show()}),F=L.$("#pla_timeslider").timeslider({typeKey:b,typeColors:c,channels:d,complete:function(b,c,d){-1===d?l():(F.data("time",a.pad(b.getHours(),2)+":"+a.pad(b.getMinutes(),2)+":"+a.pad(b.getSeconds(),2)),E.table("selectRow",d),F.data("time",null))}}),E=L.$("#pla_records").table({height:200,pageSize:S,pageable:!0,columns:[{width:"18%",render:function(a){return a._index+1}},{t:"w_BeginTime",width:"29%",render:function(a){return a.StartTime.split(" ")[1]}},{t:"File Type",width:"23%",render:function(a){return'<i class="type-color" style="background-color:'+c[a[b]]+'"></i>'}},{width:"10%",action:"download",render:function(b){return a.isNumeric(b.Process)?'<a data-action="download" class="i-stopdown"></a>':'<a data-action="download" class="i-download"></a>'},handle:function(b,c){var d=a(c.target),e=d.hasClass("i-stopdown");if(c.stopPropagation(),!A.chkAuthority("Backup"))return t(tl("No right!"));if("jpg"===H.val())d.attr({target:"_download",href:"/RPC_Loadfile"+b.FilePath});else if(e)j();else{if(-2===W)return t(tl("w_Another record file is being downloaded"));if(0!==W)return t(tl("playingNoDownloadRecord"));i(b)}}},{width:"20%",render:function(b){return a.isNumeric(b.Process)?b.Process+"%":""}}],onRowSelect:function(a,b){"jpg"===b.data.Type?o(b.data):k(b.data,F.data("time"))},onRowEnter:function(a,b){L.$("#pla_detail_begin").text(b.data.StartTime),L.$("#pla_detail_end").text(b.data.EndTime),L.$("#pla_detail_size").text((b.data.Length/1024).round()+"(KB)")}}).on("mouseleave",function(){var a=E.table("getSelectedRow");-1!==a?(L.$("#pla_detail_begin").text(U[a].StartTime),L.$("#pla_detail_end").text(U[a].EndTime),L.$("#pla_detail_size").text((U[a].Length/1024).round()+"(KB)")):(L.$("#pla_detail_begin").text(""),L.$("#pla_detail_end").text(""),L.$("#pla_detail_size").text(""))}),E.table("widget").children(":first").off("click","tbody tr").on("dblclick","tbody tr",function(b){return"download"===L.$(b.target).attr("data-action")||"general"!==z.type&&"nacl"!==z.type||E.table("selectRow",a(b.currentTarget).attr("data-index")-0),!1}),J=L.$("#pla_localfiles").table({pageSize:S,pageable:!0,columns:[{width:"13%",render:function(a){return a._index+1}},{title:"文件名",width:"87%",render:function(a){return'<span class="playback-localfile" id="li_localfile'+a._index+'">'+a.localfile+"</span>"}}],onRowSelect:function(a,b){w(b.data)}}),J.off("click","tbody tr").on("click","tbody tr",function(b){return P=a(b.currentTarget).attr("data-index")-0,J.find("tbody tr").removeClass("error"),J.find("tbody tr[data-index="+P+"]").addClass("error"),!1}),J.table("widget").children(":first").off("click","tbody tr").on("dblclick","tbody tr",function(b){return J.table("selectRow",a(b.currentTarget).attr("data-index")-0),!1}),L.$("#pla_begin").timefield().timefield("value","00:00:00").find("input").on("blur",function(a){2===L.$(a.target).data("index")&&L.$("#pla_end").find("input:eq(0)").select();var b=L.$("#pla_begin").timefield("value").split(":"),c=L.$("#pla_end").timefield("value").split(":");3600*b[0]+60*b[1]+1*b[2]>3600*c[0]+60*c[1]+1*c[2]&&L.$("#pla_end").timefield("value",b.join(":"))}),L.$("#pla_end").timefield().timefield("value","23:59:59").find("input").on("blur",function(){var a=L.$("#pla_begin").timefield("value").split(":"),b=L.$("#pla_end").timefield("value").split(":");3600*a[0]+60*a[1]+1*a[2]>3600*b[0]+60*b[1]+1*b[2]&&L.$("#pla_begin").timefield("value",b.join(":"))}),G=L.$("#pla_calendar").calendar({maxYear:2037,minYear:2e3,change:function(a,b){p({Year:b.year,Month:b.month})},select:function(b,c){var d=c.year+"-"+a.pad(c.month,2)+"-"+a.pad(c.day,2)+" ",e=L.$("#pla_recordtype .ui-custom-select-item-current");if(e.length){T=e.data("filter");var f={StartTime:d+L.$("#pla_begin").timefield("value"),EndTime:d+L.$("#pla_end").timefield("value"),Events:e.data("Events")};-1===webApp.DeviceType.indexOf("TPC")&&(f.Flags=e.data("Flags")),r(f)}else r()}}),L.$("#pla_recordtype").on("click",".ui-custom-select-input",function(b){if(V)return!1;var c=L.$(b.currentTarget).toggleClass("ui-custom-select-input-current");return c.hasClass("ui-custom-select-input-current")?(a(document).on("click"+M,function(){a(document).off("click"+M),c.toggleClass("ui-custom-select-input-current"),c.next().hide()}),c.next().show()):(a(document).off("click"+M),c.next().hide()),!1}),L.$("#pla_recordtype").on("click",".ui-custom-select-item",function(a){var b=L.$(a.currentTarget);return b.addClass("ui-custom-select-item-current").siblings().removeClass("ui-custom-select-item-current"),b.parent().hide().prev().removeClass("ui-custom-select-input-current").find(".ui-custom-select-inputbox").text(b.text()),j(),G.calendar("select"),!1}),L.$("#pla_all,#pla_typechks :checkbox").prop("checked",!0),y.get("RecordCaps").done(function(b){b&&a.isArray(b.Format)&&(H.empty(),a.each(b.Format,function(a,b){H.append('<option value="'+b+'" t="'+b+'"></option>')}),H.append('<option value="jpg" t="jpg"></option>')),H.translation()}),O=x.Storage.getDeviceAllInfo().done(function(b){a.isArray(b)&&b.length>1?(I.empty(),a.each(b,function(a,b){b.Detail&&b.Detail[0]&&I.append("<option value="+b.Detail[0].Path+" t=w_sd+"+(a+1)+"></option>")})):a.isArray(b)&&1===b.length&&b[0].Detail&&b[0].Detail[0]&&b[0].Detail[0].Path&&I.empty().append("<option value="+b[0].Detail[0].Path+' t="w_sd"></option>').translation()}).always(function(){-1!==webApp.DeviceType.indexOf("TPC")&&I.append('<option value="local" t="local"></option>').translation()}),L.$("[btn-for=onCutRegion]").on({mouseover:function(a){var b=L.$(a.target);return 0===W||-2===W?b.attr("title",""):void(b.hasClass("playback-cut-begin-time")?b.addClass("playback-cut-begin-time-hover").attr("title",tl("w_selectStartTime")):b.addClass("playback-cut-end-time-hover").attr("title",tl("w_selectEndTime")))},mouseout:function(a){L.$(a.target).removeClass("playback-cut-begin-time-hover").removeClass("playback-cut-end-time-hover")}}),L.$("#pla_cut_time span:eq(0),#pla_cut_time span:eq(2)").text("00:00:00"),L.$("#pla_cut_time").show(),L.$("#pla_cut_status").hide(),L.$("#pla_percent").width(0),L.$("[btn-for=onCut]").on("mouseover",function(a){var b=L.$(a.target);b.hasClass("playback-cut-download-cancel")?b.attr("title",tl("w_Cancel")):b.attr("title",tl("w_Download"))}).removeClass("playback-cut-download-cancel"),L.$("#pb_fileChannel input").on("click",function(b){Q=~~a(b.target).val(),G.calendar("select")}),y.get("VideoInputCaps").done(function(a){a&&a.FishEye&&K.bind(L)}),L.render(),x.MagicBox.getSerialNo().done(function(a){L.$("#pla_nfs_path")[0].value+=a}),L.render()},render:function(){a(window).off("resize"+M),a(window).on("resize"+M,s),s(),z.state("recordVideo")&&z.state("recordVideo",!1),L.$("#pla_begin").timefield("value","00:00:00"),L.$("#pla_end").timefield("value","23:59:59"),a.when(O,y.get("RecordCaps")).always(function(){H.change(),"jpg"!==H.val()&&L.$('[btn-for="onTimeMode"][data-for="24"]').click()}),z.cover(C,function(){z.close(!0),z.SetModuleMode(3),-1!==webApp.DeviceType.indexOf("TPC")&&z.SetVisibleVideoWnd(1,0),a.browser.ie8&&L.$("[btn-for=onToRecord]").focus()}),"jpg"===H.val()&&z.hide(),"local"===I.val()&&L.$(".not-jpg.not-forLocal").hide(),("qt"===z.type||"vlc"===z.type)&&a("#video").find("qt").hide(),z.addEvent("PlaybackRecordfileFailed",function(){var a=E.table("getSelectedRow");E.find("tbody tr[data-index="+a+"]").addClass("error"),E.table("selectRow",(a+1)%U.length)}),z.addEvent("CurPlayTime",function(a){F.timeslider("value",a)}),z.addEvent("PlayBackOneFileEnd",function(){if("local"===I.val()){var a=J.table("getSelectedRow");J.find("tbody tr[data-index="+a+"]").removeClass("current"),z.cover(C,function(){z.close(!0),-1!==webApp.DeviceType.indexOf("TPC")&&z.SetVisibleVideoWnd(1,0)})}else E.table("selectRow",(E.table("getSelectedRow")+1)%U.length)}),z.addEvent("ResolutionChangePlayBack",s),z.addEvent("FeInstallMode",function(a){K.playbackHasFe(a)}),K.hasFishEye&&z.addEvent("StateChangedPlayBack",function(){K.fitMode>0&&K.reBackFisheye()})},leave:function(){a(window).off("resize"+M),"qt"===z.type||"vlc"===z.type?a("#video").find("qt").show():z.hide(),z.addEvent("PlaybackRecordfileFailed",null),z.addEvent("CurPlayTime",null),z.addEvent("PlayBackOneFileEnd",null),z.addEvent("ResolutionChangePlayBack",null),z.addEvent("FeInstallMode",null),z.addEvent("StateChangedPlayBack",null),a("[btn-for=onIVS]").hasClass("play-bottom-iconbg-current")&&(a("[btn-for=onIVS]").removeClass("play-bottom-iconbg-current"),z.SetIVSEnable(!1)),n(),l(),j(),K.fitMode>0&&K.closeFisheEye()},destory:function(){a(window).off("resize"+M),n(),l(),j(),-2===W&&(z.StopDownload(L.$("[btn-for=onCut]").data("savename")),W=0),F.timeslider("destroy")},onToRecord:function(){L.$("#pla_page1").hide(),L.$("#pla_page2").show(),E.table("setHeight",Math.min(370,L.$(".playback-right-container").height()-215))},onToCalendar:function(){L.$("#pla_page2").hide(),L.$("#pla_page1").show(),j()},onTimeMode:function(a){var b=L.$(a.currentTarget),c=60*b.attr("data-for");b.addClass("ui-button-current").siblings().removeClass("ui-button-current"),F.timeslider("total",c)},onSwitchSound:function(a){var b="play-bottom-iconbg-disabled",c=L.$(a.currentTarget);c.hasClass(b)?z.PlayOpenSound(P).done(function(){c.removeClass(b).attr("t","title::w_sound").parent().translation(),L.$(".playback-sound-slider").slider("enable")}):z.PlayStopSound(P).done(function(){c.addClass(b).attr("t","title::Quite").parent().translation(),L.$(".playback-sound-slider").slider("disable")})},onSearch:function(){G.calendar("select")},onChangeSrc:function(){"local"===I.val()?(L.$("#playBack_filelist").show(),L.$(".not-forLocal").hide(),H.prop("disabled",!0),L.$("#pb_fileChannel").addClass("fn-hide"),v()):(L.$("#playBack_filelist").hide(),L.$(".not-forLocal").show(),H.prop("disabled",!1),G.calendar("select"),L.$("#pb_fileChannel").removeClass("fn-hide")),l()},onChangeType:function(b){0!==$&&(x.MediaFileFind.close($),x.MediaFileFind.destroy($),$=0);var c=L.$(b.target).val();L.$("#pla_type_tip").attr("t","jpg"===c?"w_SnapType":"Record Type").parent().translation(),"jpg"===c?(L.$(".not-jpg").hide(),L.$("#pla_type_tip").addClass("fn-padl100"),L.$("#pla_format").hide(),-1!==webApp.DeviceType.indexOf("TPC")&&I.prop("disabled",!0),D.show(),z.hide(),l()):(L.$(".not-jpg").show("fast",function(){F.timeslider("total",60*L.$(".ui-button-current[btn-for=onTimeMode]").attr("data-for"))}),L.$("#pla_type_tip").removeClass("fn-padl100"),I.prop("disabled",!1),y.get("RecordCaps").done(function(b){b&&-1!==a.inArray("mp4",b.Format)?L.$("#pla_format").hide():L.$("#pla_format").show()}),D.hide(),z.cover(C,function(){z.SetModuleMode(3),a.browser.ie8&&L.$("[btn-for=onToRecord]").focus()}),n()),G.calendar("clearmark");var d=G.calendar("getDay");p({Year:d.year,Month:d.month}),L.$("#pla_all").prop("checked",L.$("#pla_typechks :checkbox:checked:visible").length===L.$("#pla_typechks :checkbox:visible").length),N.done(q)},onPlay:function(a){var b=L.$(a.currentTarget),c=H.val(),d=b.hasClass("pause");"jpg"===c&&U.length?d?n():m():1===W?z.PausePlayBack(P).done(function(a){a&&h(-1)}):0!==W&&-2!==W?z.ResumePlayBack(P).done(function(a){a&&h(1)}):"local"===I.val()?J.table("selectRow",P):E.table("selectRow",-1===E.table("getSelectedRow")?0:E.table("getSelectedRow"))},onStop:function(){l()},onNextFrame:function(){z.PlayPreFrame(P).done(function(a){a&&h(-1)})},onSlow:function(){W===1/16?z.ResumePlayBack(P).done(function(a){a&&h(1)}):z.SlowPlayBack(P).done(function(a){a&&h(W/2)})},onFast:function(){16===W?z.ResumePlayBack(P).done(function(a){a&&h(1)}):z.FastPlayBack(P).done(function(a){a&&h(2*W)})},onTypeAll:function(a){L.$("#pla_typechks :checkbox").prop("checked",L.$(a.target).prop("checked")),L._filterFile()},onTypeNormal:function(){L.$("#pla_all").prop("checked",L.$("#pla_typechks :checkbox:checked:visible").length===L.$("#pla_typechks :checkbox:visible").length),L._filterFile()},onTypeEvent:function(){L.$("#pla_all").prop("checked",L.$("#pla_typechks :checkbox:checked:visible").length===L.$("#pla_typechks :checkbox:visible").length),L._filterFile()},onTypeAlarm:function(){L.$("#pla_all").prop("checked",L.$("#pla_typechks :checkbox:checked:visible").length===L.$("#pla_typechks :checkbox:visible").length),L._filterFile()},onTypeManual:function(){L.$("#pla_all").prop("checked",L.$("#pla_typechks :checkbox:checked:visible").length===L.$("#pla_typechks :checkbox:visible").length),L._filterFile()},_filterFile:function(){if(-1!==webApp.DeviceType.indexOf("TPC")){var b=[];E.table("dataSource",b),a("#pla_all").prop("checked")?(E.table("dataSource",U),F.timeslider("data",U)):(a.each(U,function(a,c){L.$("#pla_normal").prop("checked")&&"R"===c.EventType?b.push(c):L.$("#pla_motion").prop("checked")&&"M"===c.EventType?b.push(c):L.$("#pla_alarm").prop("checked")&&"A"===c.EventType?b.push(c):L.$("#pla_manual").prop("checked")&&"F"===c.EventType&&b.push(c)}),E.table("dataSource",b),F.timeslider("data",b))}else N.done(q)},onCutRegion:function(b){var c=L.$(b.target),d=L.$("#pla_cut_time span").eq(0),e=L.$("#pla_cut_time span").eq(2),f=d.text(),g=e.text(),h=F.timeslider("value")[Q],i=a.pad(h.getHours(),2)+":"+a.pad(h.getMinutes(),2)+":"+a.pad(h.getSeconds(),2);L.$("#pla_cut_time").show(),L.$("#pla_cut_status").hide(),L.$("#pla_percent").width(0),c.hasClass("playback-cut-begin-time")?(c.removeClass("playback-cut-begin-time playback-cut-begin-time-hover").addClass("playback-cut-end-time playback-cut-end-time-hover").attr("title",tl("w_selectEndTime")),f=i):(c.removeClass("playback-cut-end-time playback-cut-end-time-hover").addClass("playback-cut-begin-time playback-cut-begin-time-hover").attr("title",tl("w_selectStartTime")),g=i);var j=f.split(":"),k=g.split(":");if(23==j[0]&&59==j[1]&&j[2]>=54)g="23:59:59";else if(3600*k[0]-3600*j[0]+60*k[1]-60*j[1]+1*k[2]-1*j[2]<5){var l=new Date("2000/1/1 "+f).addSeconds(5);g=a.pad(l.getHours(),2)+":"+a.pad(l.getMinutes(),2)+":"+a.pad(l.getSeconds(),2)}d.text(f),e.text(g)},onCut:function(b){function c(){var a=k.replace(/[-:\s]/g,"")+"-"+m.replace(/[-:\s]/g,"")+"."+L.$("#pla_format input:checked").val();z.DownloadByTime(n,k,m,"VideoClips",a).done(function(b){b?(W=-2,d.data("savename",a).addClass("playback-cut-download-cancel").attr("title",tl("w_Cancel")),e.hide(),f.show().text(tl("w_downloading")),z.addEvent("DownloadPos",function(a){g.width(148*a/100),100===a?(W=0,d.removeClass("playback-cut-download-cancel").attr("title",tl("w_Download")),f.text(tl("Download Completely!")),z.addEvent("DownloadPos",null)):f.text(tl("w_downloading")+"  "+a+"%")}),z.addEvent("DownLoadError",function(){L.$("[btn-for=onCut]").click(),t(tl("w_noSupportMp4"))})):t(tl("w_No Write Right"))})}var d=L.$(b.target),e=L.$("#pla_cut_time"),f=L.$("#pla_cut_status"),g=L.$("#pla_percent"),h=d.hasClass("playback-cut-download-cancel");if(!A.chkAuthority("Backup"))return t(tl("No right!"));if(h)z.StopDownload(d.data("savename")),e.show(),f.hide(),g.width(0),W=0,d.removeClass("playback-cut-download-cancel"),z.addEvent("DownLoadError",null);else{if(-2===W)return t(tl("w_Another record file is being downloaded"));if(!e.is(":visible"))return;var i=G.calendar("getDay"),j=i.year+"-"+a.pad(i.month,2)+"-"+a.pad(i.day,2)+" ",k=j+e.children(":first").text(),m=j+e.children(":last").text();if(k===m)return t(tl("w_Start time and end time could not be the same time"));var n=a.grep(U,function(a){return a.StartTime<m&&a.EndTime>k});if(0===n.length)return t(tl("w_The time period has no record file"));0!==W?u(tl("Can't download file and playback in the Same time, Close the Player?"),function(){l(),c()}):c()}},onSnap:function(){z.CatchPicture(6,"PlaybackSnapshot")},onEnlarge:function(a){y.is("DSPConflict").done(function(b){z.partialEnlarged(L.$(a.target)).done(function(){z.state("partialEnlarged")?(z.addEvent("RButtonDown",function(a){b||!webApp.IsIPCIntel&&!webApp.IsSDIntel||L.$("[btn-for=onIVS]").show().hasClass("play-bottom-iconbg-current")&&z.SetIVSEnable(!0),0===a&&z.state("partialEnlarged",!1)}),b||!webApp.IsIPCIntel&&!webApp.IsSDIntel||L.$("[btn-for=onIVS]").hide().hasClass("play-bottom-iconbg-current")&&z.SetIVSEnable(!1),K.reFishEye()):(z.addEvent("RButtonDown",null),b||!webApp.IsIPCIntel&&!webApp.IsSDIntel||L.$("[btn-for=onIVS]").show().hasClass("play-bottom-iconbg-current")&&z.SetIVSEnable(!0).done(function(a){a||L.$("[btn-for=onIVS]").removeClass("play-bottom-iconbg-current")}))})})},onIVS:function(a){var b=L.$(a.currentTarget);z.SetIVSEnable(!b.hasClass("play-bottom-iconbg-current")).done(function(a){a&&b.toggleClass("play-bottom-iconbg-current")})}});var X=null,Y=0,Z=0,$=0,_=!1}),define("fisheye",function(require,b,c){var d=null;c.exports={hasFishEye:!1,me:null,fitMode:0,showMode:0,oldFitMode:0,MountModeArr:["CeilMode","WallMode","FloorMode","WallMode"],bind:function(a){me=a,d=this,me.$("#onFishEye").on("click",function(){me.$("#playback-fisheye-mode").show()}),me.$("#playback-fisheye-fitMode").delegate("li","click",this.onFitModeChange),me.$("#playback-fisheye-playMode").delegate("li","click",this.onPlayModeChange),me.$("#playback-fisheye-mode").on("mouseleave",function(){me.$("#playback-fisheye-mode").hide()}),this.hasFishEye=!0},onFitModeChange:function(b){var c=a(b.target);c.siblings(".current").removeClass("current"),c.addClass("current"),d.fitMode=c.attr("data-for")-0;var e=c.attr("id").split("_");d.showPlayModeByFitMode(e[1]),plugin.SetFeInstallMode(d.fitMode),me.$("#playback-fisheye-playMode li[data-for= "+d.showMode+"]").click()},onPlayModeChange:function(b){var c=a(b.target);c.siblings(".current").removeClass("current"),c.addClass("current");var e=c.attr("data-for")-0;d.showMode=e,e>0&&(me.$("[btn-for = onIVS]").hasClass("play-bottom-iconbg-current")&&me.$("[btn-for = onIVS]").click(),plugin.state("partialEnlarged")&&plugin.state("partialEnlarged",!1)),plugin.SetFeShowMode(e)},showPlayModeByFitMode:function(b){a("#playback-fisheye-playMode li").each(function(c,d){a(d).attr("support-for").indexOf(b)>-1?a(d).show():a(d).hide()})},playbackHasFe:function(a){if(d)if(a>0){d.showMode=0;var b=d.oldFitMode;d.oldFitMode=d.fitMode=a;var c=d.MountModeArr[a-1];d.showPlayModeByFitMode(c),4==a&&me.$("#playback-fisheye-fitMode").hide(),me.$("#onFishEye").show(),a!=b&&me.$("#playback_"+c).click()}else d.fitMode=a,d.closeFisheEye()},closeFisheEye:function(){me.$("#onFishEye").hide(),me.$("#playback-fisheye-mode").hide(),plugin.ControlFe(!1)},reFishEye:function(){d.fitMode>0&&me.$("#playback-fisheye-playMode li:first").click()},reBackFisheye:function(){d.oldFitMode!=d.fitMode&&(d.showMode=0),me.$("#playback-fisheye-fitMode li[data-for = "+d.oldFitMode+"]").click()}}})}(jQuery);