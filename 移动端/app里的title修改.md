
vue项目可以使用 https://www.npmjs.com/package/vue-wechat-title

var $body = $('body');

  document.title = 'the title you want to set';

  var $iframe = $("<iframe style='display:none;' src='/favicon.ico'></iframe>");

  $iframe.on('load',function() {

    setTimeout(function() {

      $iframe.off('load').remove();

    }, 0);

  }).appendTo($body);


原理比较简单，之前是因为微信浏览器首次加载页面初始化title后，就再也不监听 document.title的change事件。而这里修改title之后，给页面加上一个内容为空的iframe，随后立即删除这个iframe，这时候会刷新title。但是，在iframe加载和删除的时候，iOS页面会有几毫秒的闪动（有灰色的框），Android直接有灰色的框出现在页面不消失，所以，一开始加载iframe的时候，就将该iframe的样式设置为：display: none;这样就解决了这个问题，同时因为display：none这个设置，iframe是脱离文本流的，那么加载和删除这个iframe都不会改变文本流，也不会触发页面渲染.

