!function(a){var b,c,d,e;define(function(require,a,f){b=require("jsCore/pageBase"),c=require("jsCore/rpc"),d=require("jsCore/ability"),require("jsCore/modules/eventHandler"),e=require("jsCore/modules/timeSection"),f.exports=require("jsCore/pageTab"),f.exports.prototype.ala_pir=d.is("AlarmPir"),f.exports.prototype.ala_Link=d.is("AlarmPir").then(function(a){return!a||1!==webApp.ALARM_IN_NUMBER}),f.exports.prototype.ala_flash=d.is("Flash"),f.exports.prototype.ala_wireless=d.get("WirelessAlarm").then(function(a){return a&&a.Support}),f.exports.prototype.ala_emergency=d.get("WirelessAlarm").then(function(a){return a&&a.Support}),f.exports.prototype.ala_audioDetect=d.get("AudioFileManager").then(function(a){return a&&a.Support&&webApp.AUDIO_IN_NUMBER})}),define("ala_pir",function(require,f,g){var h,i,j=null,k=0,l=webApp.ALARM_IN_NUMBER-1;g.exports=b.extend({init:function(){j=this,i=j.$("#ala_pirDejitter").numberfield({max:100,min:0,allowDecimal:!1,allowNegative:!1}),webApp.EventCaps?c.EventManager.getEventLink("Alarm").done(function(b){var c=b.name,d=a.extend({},webApp.DefaultEvent),e=webApp.EventCaps;"default"===c[k][0]?d=e:c[k].each(function(a){d[a]=!0,"AlarmOutEnable"===a?d.AlarmOutLatch=e.AlarmOutLatch:"DejitterEnable"===a?d.DejitterRange=e.DejitterRange:"RecordEnable"===a&&(d.RecordLatch=e.RecordLatch)}),j.$("#ala_pirEventHandler").eventHandler(d)}).fail(function(){j.$("#ala_pirEventHandler").eventHandler()}):j.$("#ala_pirEventHandler").eventHandler(),j.render()},render:function(){j._getConfig()},_getConfig:function(a){c.ConfigManager.getConfig("Alarm").done(function(b){h=b,j._renderValue(),a&&j.tip("success","Operateingsuccess")}).fail(function(){a&&j.tip("error","Operateingfailure")})},_renderValue:function(){var a=h[l];j.$("#ala_pirEnable").prop("checked",a.Enable),i.numberfield("value",a.EventHandler.Dejitter),j.$("#ala_pirEventHandler").eventHandler("set",a.EventHandler)},onWorkPeriod:function(){e.open(h[l].EventHandler.TimeSection).done(function(a){h[l].EventHandler.TimeSection=a})},onRefresh:function(){j._getConfig(!0)},onDefault:function(){c.ConfigManager.getDefault("Alarm").done(function(a){d.is("AlarmPir").done(function(){h[l]=a[l]}),j._renderValue(),j.tip("success","Defaultsuccess")}).fail(function(){j.tip("error","Defaultfailure")})},onSave:function(){var a=h[l];a.Enable=j.$("#ala_pirEnable").prop("checked"),a.EventHandler=j.$("#ala_pirEventHandler").eventHandler("get"),a.EventHandler.Dejitter=i.numberfield("value"),c.ConfigManager.setConfig("Alarm",h).done(function(){j.tip("success","Succeed in saving configure")}).fail(function(){j.tip("error","Saving failure")})}})}),define("ala_Link",function(require,f,g){var h,i,j,k=null,l=0,m=0;g.exports=b.extend({init:function(){k=this,i=k.$('[sel-for="onSelAlarmIn"]'),j=k.$("#ala_LinkDejitter").numberfield({max:100,min:0,allowDecimal:!1,allowNegative:!1}),webApp.EventCaps?c.EventManager.getEventLink("Alarm").done(function(b){var c=b.name,d=a.extend({},webApp.DefaultEvent),e=webApp.EventCaps;"default"===c[m][0]?d=e:c[m].each(function(a){d[a]=!0,"AlarmOutEnable"===a?d.AlarmOutLatch=e.AlarmOutLatch:"DejitterEnable"===a?d.DejitterRange=e.DejitterRange:"RecordEnable"===a&&(d.RecordLatch=e.RecordLatch)}),k.$("#ala_LinkEventHandler").eventHandler(d)}).fail(function(){k.$("#ala_LinkEventHandler").eventHandler()}):k.$("#ala_LinkEventHandler").eventHandler(),k.render()},render:function(){i.empty(),d.is("AlarmPir").done(function(b){for(var c=b?webApp.ALARM_IN_NUMBER-1:webApp.ALARM_IN_NUMBER,d=0;c>d;d++)a("<option value="+d+"></option>").text(tl("w_Alarm")+(d+1)).appendTo(i);l=i.val(),k._getConfig()})},_getConfig:function(a){c.ConfigManager.getConfig("Alarm").done(function(b){h=b,k._renderValue(),a&&k.tip("success","Operateingsuccess")}).fail(function(){a&&k.tip("error","Operateingfailure")})},_renderValue:function(){var a=h[l];k.$("#ala_LinkEnable").prop("checked",a.Enable),j.numberfield("value",a.EventHandler.Dejitter),k.$("#ala_LinkSensorModel").val(a.SensorType),k.$("#ala_LinkEventHandler").eventHandler("set",a.EventHandler)},onWorkPeriod:function(){e.open(h[l].EventHandler.TimeSection).done(function(a){h[l].EventHandler.TimeSection=a})},onSelAlarmIn:function(){k._saveTempJson(),l=i.val(),k._renderValue()},onRefresh:function(){k._getConfig(!0)},onDefault:function(){c.ConfigManager.getDefault("Alarm").done(function(a){d.is("AlarmPir").done(function(b){for(var c=b?webApp.ALARM_IN_NUMBER-1:webApp.ALARM_IN_NUMBER,d=0;c>d;d++)h[d]=a[d];k._renderValue(),k.tip("success","Defaultsuccess")})}).fail(function(){k.tip("error","Defaultfailure")})},_saveTempJson:function(){var a=h[l];a.Enable=k.$("#ala_LinkEnable").prop("checked"),a.EventHandler=k.$("#ala_LinkEventHandler").eventHandler("get"),a.EventHandler.Dejitter=j.numberfield("value"),a.SensorType=k.$("#ala_LinkSensorModel").val()},onSave:function(){k._saveTempJson(),c.ConfigManager.setConfig("Alarm",h).done(function(){k.tip("success","Succeed in saving configure")}).fail(function(){k.tip("error","Saving failure")})}})}),define("ala_flash",function(require,d,e){function f(a){return a.find("input:checked").length===a.find("input").length}function g(b,c){var d=b.prop("checked");c.find("input").each(function(b,c){a(c).prop("checked",d)})}require("widget/js/dui.slider");var h,i,j,k,l,m,n=null;e.exports=b.extend({init:function(){n=this,j=n.$("#ala_falseEnable"),k=n.$("#ala_flashWeek"),l=n.$("#ala_flashAllWeek"),n.$("#ala_flashBrightness").slider({min:0,max:100,prompt:!1,change:function(a,b){m.Brightness=b.value},complete:function(a,b){m.Brightness=b.value}}),l.on("click",function(){g(l,k)}),k.on("click",function(){l.prop("checked",f(k))}),h=n.$("#ala_flashTime0").timefield(),i=n.$("#ala_flashTime1").timefield(),j.on("click",function(){n._onFlashEnable()}),n.render()},render:function(){n._getConfig()},_getConfig:function(a){c.ConfigManager.getConfig("FlashLight").done(function(b){m=b,n._renderValue(),a&&n.tip("success","Operateingsuccess")}).fail(function(){a&&n.tip("error","Operateingfailure")})},_renderValue:function(){m.Enable?j.addClass("alarmconfig-flashbtn-on"):j.removeClass("alarmconfig-flashbtn-on"),n.$("#ala_flashBrightness").slider("value",m.Brightness);var b,c=k.find("input");n.$("#ala_flashPeriod").prop("checked",!0);for(var d=0;7>d;d++){var e=m.TimeSection[d],g=a.trim(e[0]).split(" ");getBitEx(g[0],0)?(b=g[1].split("-"),a(c[d]).prop("checked",!0),n.$("#ala_flashPeriod").prop("checked",!0)):a(c[d]).prop("checked",!1)}l.prop("checked",f(k)),i.timefield("value",b[0]),i.timefield("value",b[1])},_onFlashEnable:function(){m.Enable=!0,j.hasClass("alarmconfig-flashbtn-on")&&(m.Enable=!1),j.toggleClass("alarmconfig-flashbtn-on"),c.ConfigManager.setConfig("FlashLight",m).done(function(){})},onRefresh:function(){n._getConfig(!0)},onDefault:function(){c.ConfigManager.getDefault("FlashLight").done(function(a){m=a,n._renderValue(),n.tip("success","Defaultsuccess")}).fail(function(){n.tip("error","Defaultfailure")})},onSave:function(){var b=h.timefield("value"),d=i.timefield("value"),e=n.$("#ala_flashPeriod").prop("checked");k.find("input").each(function(c,f){m.TimeSection[c][0]=(a(f).prop("checked")&&e?"1 ":"0 ")+b+"-"+d}),c.ConfigManager.setConfig("FlashLight",m).done(function(){n.tip("success","Succeed in saving configure")}).fail(function(){n.tip("error","Saving failure")})}})}),define("ala_wireless",function(require,d,f){var g,h,i,j=null,k=0,l=0;f.exports=b.extend({init:function(){j=this,i=j.$("#ala_wireDejitter").numberfield({max:100,min:0,allowDecimal:!1,allowNegative:!1}),webApp.EventCaps?c.EventManager.getEventLink("ExAlarm").done(function(b){var c=b.name,d=a.extend({},webApp.DefaultEvent),e=webApp.EventCaps;"default"===c[k][0]?d=e:c[k].each(function(a){d[a]=!0,"AlarmOutEnable"===a?d.AlarmOutLatch=e.AlarmOutLatch:"DejitterEnable"===a?d.DejitterRange=e.DejitterRange:"RecordEnable"===a&&(d.RecordLatch=e.RecordLatch)}),j.$("#ala_wireEventHandler").eventHandler(d)}).fail(function(){j.$("#ala_wireEventHandler").eventHandler()}):j.$("#ala_wireEventHandler").eventHandler(),h=j.$("#ala_wireName"),j._initWireName(),j.render()},_initWireName:function(){h.empty();for(var b=0;b<webApp.ALARM_IN_NUMBER;b++)a("<option value="+b+"></option>").text(b+1).appendTo(h);l=h.val()},render:function(){j._getConfig()},_getConfig:function(a){c.ConfigManager.getConfig("ExAlarm").done(function(b){g=b,j._renderValue(),a&&j.tip("success","Operateingsuccess")}).fail(function(){a&&j.tip("error","Operateingfailure")})},_renderValue:function(){var a=g[l];j.$("#ala_wireEnable").prop("checked",a.Enable),j.$("#ala_wireCustomName").val(a.Name),i.numberfield("value",a.EventHandler.Dejitter),j.$("#ala_wireEventHandler").eventHandler("set",a.EventHandler)},onWorkPeriod:function(){e.open(g[l].EventHandler.TimeSection).done(function(a){g[l].EventHandler.TimeSection=a})},onSelWireName:function(){j._saveTempJson(),l=h.val(),j._renderValue()},onRefresh:function(){j._getConfig(!0)},onDefault:function(){c.ConfigManager.getDefault("ExAlarm").done(function(a){g=a,j._renderValue(),j.tip("success","Defaultsuccess")}).fail(function(){j.tip("error","Defaultfailure")})},_saveTempJson:function(){var a=g[l];a.Enable=j.$("#ala_wireEnable").prop("checked"),a.Name=j.$("#ala_wireCustomName").val(),a.EventHandler=j.$("#ala_wireEventHandler").eventHandler("get"),a.EventHandler.Dejitter=i.numberfield("value")},onSave:function(){j._saveTempJson(),c.ConfigManager.setConfig("ExAlarm",g).done(function(){j.tip("success","Succeed in saving configure")}).fail(function(){j.tip("error","Saving failure")})}})}),define("ala_audioDetect",function(require,d,f){var g,h,i=null,j=0;require("widget/js/dui.slider"),f.exports=b.extend({init:function(){i=this,i.$("#ala_audioThreshold").slider({min:0,max:100,change:function(a,b){g[0].MinVolume=b.value},complete:function(a,b){g[0].MinVolume=b.value}}),h=i.$("#ala_audioDejitter").numberfield({max:100,min:0,allowDecimal:!1,allowNegative:!1}),webApp.EventCaps?c.EventManager.getEventLink("AudioDetect").done(function(b){var c=b.name,d=a.extend({},webApp.DefaultEvent),e=webApp.EventCaps;"default"===c[j][0]?d=e:c[j].each(function(a){d[a]=!0,"AlarmOutEnable"===a?d.AlarmOutLatch=e.AlarmOutLatch:"DejitterEnable"===a?d.DejitterRange=e.DejitterRange:"RecordEnable"===a&&(d.RecordLatch=e.RecordLatch)}),i.$("#ala_audioEventHandler").eventHandler(d)}).fail(function(){i.$("#ala_audioEventHandler").eventHandler()}):i.$("#ala_audioEventHandler").eventHandler(),i.render()},render:function(){i._getConfig()},_getConfig:function(a){c.ConfigManager.getConfig("AudioDetect").done(function(b){g=b,i._renderValue(),a&&i.tip("success","Operateingsuccess")}).fail(function(){a&&i.tip("error","Operateingfailure")})},_renderValue:function(){var a=g[0];i.$("#ala_audioEnable").prop("checked",a.Enable),i.$("#ala_audioThreshold").slider("value",a.MinVolume),h.numberfield("value",a.EventHandler.Dejitter),i.$("#ala_audioEventHandler").eventHandler("set",a.EventHandler)},onWorkPeriod:function(){e.open(g[0].EventHandler.TimeSection).done(function(a){g[0].EventHandler.TimeSection=a})},onRefresh:function(){i._getConfig(!0)},onDefault:function(){c.ConfigManager.getDefault("AudioDetect").done(function(a){g=a,i._renderValue(),i.tip("success","Defaultsuccess")}).fail(function(){i.tip("error","Defaultfailure")})},onSave:function(){var a=g[0];a.Enable=i.$("#ala_audioEnable").prop("checked"),a.EventHandler=i.$("#ala_audioEventHandler").eventHandler("get"),a.EventHandler.Dejitter=h.numberfield("value"),c.ConfigManager.setConfig("AudioDetect",g).done(function(){i.tip("success","Succeed in saving configure")}).fail(function(){i.tip("error","Saving failure")})}})}),define("ala_emergency",function(require,d,e){var f,g=null,h=0;e.exports=b.extend({init:function(){g=this,webApp.EventCaps?c.EventManager.getEventLink("RemoteCtrl.EventHandlerList").done(function(b){var c=b.name,d=a.extend({},webApp.DefaultEvent),e=webApp.EventCaps;"default"===c[h][0]?d=e:c[h].each(function(a){d[a]=!0,"AlarmOutEnable"===a?d.AlarmOutLatch=e.AlarmOutLatch:"DejitterEnable"===a?d.DejitterRange=e.DejitterRange:"RecordEnable"===a&&(d.RecordLatch=e.RecordLatch)}),g.$("#ala_emerEventHandler").eventHandler(d)}).fail(function(){g.$("#ala_emerEventHandler").eventHandler()}):g.$("#ala_emerEventHandler").eventHandler(),g.render()},render:function(){g._getConfig()},_getConfig:function(a){c.ConfigManager.getConfig("RemoteCtrl.EventHandlerList").done(function(b){f=b,g._renderValue(),a&&g.tip("success","Operateingsuccess")}).fail(function(){a&&g.tip("error","Operateingfailure")})},_renderValue:function(){g.$("#ala_emerEventHandler").eventHandler("set",f[0].EventHandler)},onRefresh:function(){g._getConfig(!0)},onDefault:function(){c.ConfigManager.getDefault("RemoteCtrl.EventHandlerList").done(function(a){f=a,g._renderValue(),g.tip("success","Defaultsuccess")}).fail(function(){g.tip("error","Defaultfailure")})},onSave:function(){f[0].EventHandler=g.$("#ala_emerEventHandler").eventHandler("get"),c.ConfigManager.setConfig("RemoteCtrl.EventHandlerList",f).done(function(){g.tip("success","Succeed in saving configure")}).fail(function(){g.tip("error","Saving failure")})}})})}(jQuery);