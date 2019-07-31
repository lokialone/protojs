// const App = function (){
//     let plugins = [];
//     let request = {
//         query: {
//            id: 1 
//         }
//     };
//     let response = {
//         status: 200
//     }
    
//     function use(plugin) {
//         plugins.push(plugin);
//     }
//     function isPromise() {

//     }
//     function start() {
//        plugins.map((fn) => {
//            if (isPromise(fn)) {

//            } else {
//                Promise.resolve(fn)
//            }
//        })
//     }
//     return {
//         use,
//         start
//     }
// }

// const R = require('ramda');
// console.log(R.uniq([1, 2,3, 4, 1]));
let str = `
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">

<meta charset="utf-8">
<meta name="HandheldFriendly" content="true">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<script type="text/javascript"> 
    
    window._points=[+new Date()];

    
    function wx_main(mod){
        window._points&&(window._points[3]=+new Date());
    };

    window.wx={
    	uin:"3853095108"||"0"
    };
</script>
 
<script onerror="wx_loaderror(this)" type="text/javascript" src="https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/jserr3c252c.js"></script>
<title>微信公众平台</title> 
<link href="https://res.wx.qq.com/wxopenres/htmledition/images/favicon32f740.ico" rel="Shortcut Icon">
<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="https://res.wx.qq.com/wxopenres/htmledition/style/base/base44901c.css"/>
<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="https://res.wx.qq.com/wxopenres/htmledition/style/base/base44901c.css"/>
<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="https://res.wx.qq.com/wxopenres/htmledition/style/base/lib415a77.css"/>
<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="https://res.wx.qq.com/wxopenres/htmledition/style/base/layout_head438199.css"/>
<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="https://res.wx.qq.com/wxopenres/htmledition/style/base/layout_head438199.css"/>




        
        
<link onerror="wx_loaderror(this)" rel="stylesheet" href="https://res.wx.qq.com/wxopenres/htmledition/style/page/code/index41a88d.css">
<link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/c/=/wxopenres/htmledition/style/widget/tooltip38267d.css,/wxopenres/htmledition/style/widget/weui-slider38267d.css,/wxopenres/htmledition/style/widget/processor_bar32f740.css,/wxopenres/htmledition/style/widget/qrcheck32f740.css" />

    </head>
    <body class="zh_CN " >
        <div class="head blur_row" id="header">
            <script type="text/javascript">
    
    window._points&&(window._points[1]=+new Date());
</script>
<div class="head_box js_head_box">
    <h1 class="logo"><a href="/" title="微信公众平台 小程序"></a></h1>
    <div class="header_ctrls">
        <ul class="header_ctrls_meta top_nav">
            <li class="top_nav_item">
                                <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/" target="_blank">文档</a>
                            </li>
            <li class="top_nav_item"><a href="http://developers.weixin.qq.com/" target="_blank">社区</a></li>
        </ul>
        
        <div class="header_ctrls_meta top_tools_box">
            <a class="top_user_switch" href="javascript:;">工具</a>
            <i class="icon_arrow_right_global"></i>
            <div class="skin_pop">
                <div class="skin_pop_inner">
                    <div class="skin_pop_bd">
                        <a href="/wxamp/wxaqrcode/weappcode?simple=1&token=365585973&lang=zh_CN" class="">生成小程序码</a>
                        
                    </div>
                </div>
            </div>
        </div>

                <div class="header_ctrls_meta top_notice_box">
            <a href="javascript:void(0);" class="account_inbox_switch js_notice_box_switch">
                <i class="icon_inbox"></i>
                                <span class="icon_dot_notices js_has_unread_notice">
                    <span class="icon_dot_notices_inner">
                        1
                    </span>
                    <span class="icon_dot_notices_left"></span>
                    <span class="icon_dot_notices_right"></span>
                </span>
                            </a>
            <div class="account_message_box skin_pop js_account_notice_box"></div>
        </div>
                        <div class="header_ctrls_meta top_user_box">
                        <a class="top_user_switch" href="/wxopen/basicprofile?action=index&token=365585973&lang=zh_CN">
                <img class="user_avatar" src="https://wx.qlogo.cn/mmhead/Q3auHgzwzM4jl2bHMVMzHDkIYrQSicHR7goNTIn2GicvBH0G03AibXicJQ/0" alt="">
            </a>
            <i class="icon_arrow_right_global"></i>
            <div class="skin_pop">
                <div class="skin_pop_inner">
                    <div class="skin_pop_bd">
                        <a href="/wxopen/basicprofile?action=index&token=365585973&lang=zh_CN" title="欧尚客户管家" class="user_name">欧尚客户管家</a>
                    </div>
                    <div class="skin_pop_ft">
                        <a class="javascript:;" id="logout" href="/wxopen/walogout?lang=zh_CN&token=365585973">退出</a>
                    </div>
                </div>
                <i class="icon_skin_pop_arrow"></i>
            </div>
                    </div>
            </div>
   
</div>
        </div>
        <div id="body" class="body  blur_row">
            <div id="js_container_box" class="container_box side_l ">
                
                                <div class="col_side">
                    <div class="menu_box" id="menuBar">
                        <dl class="menu">
            <dt class="menu_title clickable menu_home">
                <a href="/wxamp/index/index?&token=365585973&lang=zh_CN"><span class="menu_name">首页</span></a>
            </dt>
                    </dl>
                <dl class="menu">
            <dt class="menu_title menu_management">
                <a href="javascript:;"><span class="menu_name">管理</span></a>
            </dt>
                        <dd class="menu_item selected">
                <a href="/wxopen/wacodepage?action=getcodepage&token=365585973&lang=zh_CN">版本管理</a>
            </dd>
                        <dd class="menu_item">
                <a href="/wxopen/authprofile?action=index&use_role=1&token=365585973&lang=zh_CN">成员管理</a>
            </dd>
                        <dd class="menu_item">
                <a href="/wxamp/manage/feedback?&token=365585973&lang=zh_CN">用户反馈</a>
            </dd>
                    </dl>
                <dl class="menu">
            <dt class="menu_title clickable menu_data">
                <a href="/wxamp/statistics/visit/behavior?&token=365585973&lang=zh_CN"><span class="menu_name">统计</span></a>
            </dt>
                    </dl>
                <dl class="menu">
            <dt class="menu_title menu_function">
                <a href="javascript:;"><span class="menu_name">功能</span></a>
            </dt>
                        <dd class="menu_item">
                <a href="/wxamp/entityshop/info?&token=365585973&lang=zh_CN">附近的小程序</a>
            </dd>
                        <dd class="menu_item">
                <a href="/wxamp/frame/pluginRedirect/pluginRedirect?action=plugin_redirect&plugin_uin=1001&token=365585973&lang=zh_CN">微信搜索</a>
            </dd>
                        <dd class="menu_item">
                <a href="/wxamp/frame/wxpay?t=wxpay/index_frame&iframe=/pay/mp_wxopen&token=365585973&lang=zh_CN">微信支付</a>
            </dd>
                        <dd class="menu_item">
                <a href="/wxamp/logistics/logistics?&token=365585973&lang=zh_CN">物流助手</a>
            </dd>
                        <dd class="menu_item">
                <a href="/wxamp/wakf?&token=365585973&lang=zh_CN">客服</a>
            </dd>
                        <dd class="menu_item">
                <a href="/wxopen/tmplmsg?action=self_list&token=365585973&lang=zh_CN">模板消息</a>
            </dd>
                        <dd class="menu_item">
                <a href="/wxopen/waplugcode?action=getcodepage&token=365585973&lang=zh_CN">小程序插件</a>
            </dd>
                        <dd class="menu_item">
                <a href="/wxopen/grade?action=result&token=365585973&lang=zh_CN">小程序评测</a>
            </dd>
                    </dl>
                <dl class="menu">
            <dt class="menu_title clickable menu_code">
                <a href="/wxamp/wxaalarm/get_jserr?&token=365585973&lang=zh_CN"><span class="menu_name">开发</span></a>
            </dt>
                    </dl>
                <dl class="menu">
            <dt class="menu_title menu_adsponsor">
                <a href="javascript:;"><span class="menu_name">推广</span></a>
            </dt>
                        <dd class="menu_item">
                <a href="/wxopen/weapp_publisher_index?&token=365585973&lang=zh_CN">流量主</a>
            </dd>
                        <dd class="menu_item">
                <a href="/promotion/advertiser_index?&token=365585973&lang=zh_CN">广告主</a>
            </dd>
                    </dl>
                <dl class="menu">
            <dt class="menu_title clickable menu_config">
                <a href="/wxopen/basicprofile?action=index&token=365585973&lang=zh_CN"><span class="menu_name">设置</span></a>
            </dt>
                    </dl>
                        
    </div>
                </div>
                                
                <div class="col_main">
                    <div class="col_main_inner">
                        <div id="_js_announcement"></div>

<script type="text/html" id="_js_announcement_tpl">
  {each announcement_list as item i}
    <div class="page_msg announcement_msg mini{if item.type === 0} with_closed{/if}">
      <div class="inner">
        <span class="msg_icon_wrp"><i class="icon_msg_mini {if item.type === 0}info{else}warn{/if}"></i></span>
        <div class="msg_content">
          <p>{=item.content}</p>
        </div>
        {if item.type === 0}
          <span class="msg_closed js_msg_close">关闭</span>
        {/if}
      </div>
    </div>
  {/each}
</script>
                        

<div class="main_hd with_extra">
    <h2>版本管理</h2>
    <div class="main_hd_extra"><a class="main_hd_opr mini_tips icon_before js_intro"><i class="icon_msg_mini ask"></i></a></div>
</div>
<div class="main_bd">

                            <div class="code_mod mod_default_box code_version_online" id="js_online_version">

        </div>
        <div class="code_mod mod_default_box code_version_test" id="js_test_version">

        </div>
        <div class="code_mod mod_default_box code_version_dev">
            <div class="mod_default_hd">
                <h4>开发版本</h4>
            </div>
            <div class="mod_default_bd">
                <div class="code_version_logs" id="js_table_container"></div>
            </div>
            <div class="table_wrp code_version_table" style="display:none;">
                <table class="table" cellspacing="0">
                    <thead class="thead">
                        <tr>
                            <th class="table_cell version">版本号</th>
                            <th class="table_cell tl nickname">开发者</th>
                            <th class="table_cell tl date">提交时间</th>
                            <th class="table_cell tl">描述</th>
                            <th class="table_cell last_child no_extra">操作</th>
                        </tr>
                    </thead>
                    <tbody class="tbody" id="js_table_container">
                    </tbody>
                </table>
            </div>
        </div>
    </div>

<script type="text/html" id="js_warning_popup_tpl">

<div class="muti-msg__content">
    <div class="page_msg default width_fixed">
        <div class="inner group">
            <span class="msg_icon_wrp">
                <i class="icon_msg info"></i>
            </span>
            <div class="msg_content">
                <h4>功能变更提醒</h4>
                <p>你好，微信小程序将不再支持如下功能：获得用户分享成功与否事件，wx.getUserInfo接口弹窗授权，wx.openSetting接口自动打开设置页。10月10日起，当你的小程序发布新版本后，上述能力将无法在新版本使用。请务必检查确认小程序已完成调整，不会影响线上服务。详见<a href="/cgi-bin/announce?action=getannouncement&announce_id=11536230584k14IW&version=&lang=zh_CN&token=365585973" target="_blank">调整说明</a></p>
            </div>
            
            
            
        </div>
    </div>
</div>
</script>

<script type="text/html" id="js_rollback_tpl">

<div class="comfirm_version_box">
    <div class="comfirm_version_hd">
        <img class="weapp_code" src="/wxopen/qrcode?action=show&type=3&token=365585973&lang=zh_CN&r={r}" alt="">
        <p>可扫描开发版体验此版本小程序功能</p>
    </div>
    <div class="comfirm_version_bd">
        <div class="frm_control_group show_value">
            <label class="frm_label">版本号</label>
            <div class="frm_controls">
                <span class="frm_input_box">{data.user_version}</span>
            </div>
        </div>
        <div class="frm_control_group show_value">
            <label class="frm_label">开发者</label>
            <div class="frm_controls">
                <span class="frm_input_box">{data.nickname}</span>
            </div>
        </div>
        <div class="frm_control_group show_value">
            <label class="frm_label">发布时间</label>
            <div class="frm_controls">
                <span class="frm_input_box">{unixFormat data.publish_timestamp 'YYYY-MM-DD HH:mm:SS'}</span>
            </div>
        </div>
        <div class="frm_control_group show_value">
            <label class="frm_label">描述</label>
            <div class="frm_controls">
                <span class="frm_input_box">{data.user_desc}</span>
            </div>
        </div>
        <div class="frm_control_group show_value">
            <label class="frm_label">服务类目信息</label>
            <div class="frm_controls">
                {each data.page_category_info as item}
                <span class="frm_input_box">{item.first_class}／{item.second_class} {if !!item.third_class} / {item.third_class} {/if}</span>
                {/each}
            </div>
        </div>
    </div>
</div>
</script>
<script type="text/html" id='js_submit_code_exp_tpl'>

<div class="server_url_content">
    <p class="tips_global">配置页面路径(可带参数)，可打开体验版特定页面并传入参数，方便体验者体验小程序功能。如：page/index/index 或 page/index/index?id=123</p>
    <div class="server_url_rich_area">
        <div class="frm_control_group">
            <label class="frm_label">页面路径(选填)</label>
            <div class="frm_controls">
                <span class='js_path_list'></span>
                <span class="frm_input_box">
                    <input type="text" class="frm_input js_path_input">
                </span>
                <p class="frm_msg fail js_path_fail">请输入路径</p>
            </div>
        </div>
    </div>
    <p class="extra_tips" {if !has_exper}style="display: none;"{/if}>当前已有其他版本选为体验版，切换当前版本为新的体验版</p>
</div>
</script>
<script type="text/html" id="js_table_tpl">
{if data.length}
{each data as item i}
<div class="code_version_log">
    <div class="code_version_log_hd">
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">版本号</label>
            <p class="simple_preview_value">
              {if (item.basic_info.version)}
              {item.basic_info.version}
              {else}
              -
              {/if}
              {if (item.basic_info.is_plugin_auto_update)}
              <i class="icon_msg_mini ask js_plugin_fast_update_sign"></i>
              {/if}
            </p>
            {if (item.basic_info.is_plugin_auto_update)}
            <p>
                <span class="status_tag succeed">免审核快速发布</span>
            </p>
            {/if}
            {if item.is_exper}
            <p data-idx="{i}" data-openid="{item.basic_info.open_id}" class="js_show_exp_version">
                <span class="status_tag info icon_after clickable {if item.basic_info.is_plugin_auto_update}js_plugin_fast_update_exp{/if}">体验版<i class="icon_code_qrcode">扫描访问体验版</i></span>
            </p>
            {/if}
        </div>
    </div>
    <div class="code_version_log_ft">

        <div class="user_status global_dropdown_switch_opr">

            {if (item.basic_info.status === 0)}
              {if (item.basic_info.is_plugin_auto_update)}
                {if !gray_info}
                <a class="btn btn_primary global_dropdown_switch_opr_btn js_plugin_fast_update"
                    data-idx="{i}"
                    data-openid="{item.basic_info.open_id}"
                    data-plugin-appid="{item.basic_info.plugin_auto_update_info.appid}"
                    data-custom-version="{item.basic_info.plugin_auto_update_info.new_custom_version}"
                    href="javascript:;"
                >快速发布</a>
                {/if}
              {else}
              <a class="btn btn_primary global_dropdown_switch_opr_btn{if ((!experience_info) || (experience_info.basic_info.status!=2)) && can_submit_check} js_submit_check{else} btn_disabled{/if}"
                  data-idx="{i}"
                  data-openid="{item.basic_info.open_id}" href="javascript:;"
                  data-version="{item.basic_info.version}" data-username="{item.basic_info.nick_name}"
                  data-time="{item.basic_info.time}"
                  data-describe="{item.basic_info.describe}"
              >提交审核</a>
              {/if}
            {else}
              {if (item.basic_info.status === 6)}
              <a class="btn btn_primary global_dropdown_switch_opr_btn btn_disabled"
                  data-idx="{i}" href="javascript:;"
              >已发布</a>
              {/if}
            {/if}

            <a class="btn btn_primary global_dropdown_switch js_drop_switch" href="javascript:;"><i class="icon_arrow_down_white"></i></a>

            <div class="skin_pop global_dropdown_switch_opr_pop js_drop_container" style='display:none;'>
            {if !item.is_exper}
                <a href="javascript:;" class='js_dev2exp_version {if item.basic_info.is_plugin_auto_update}js_plugin_fast_update_exp{/if}' data-idx="{i}" data-openid="{item.basic_info.open_id}" title="选为体验版本">选为体验版本</a>
            {else}
                <a class="js_delete_exp_version" href="javascript:;" data-idx="{i}" data-openid="{item.basic_info.open_id}" title="取消体验">取消体验</a>
                                <a class="js_edit_path_version" href="javascript:;" data-idx="{i}" data-openid="{item.basic_info.open_id}" title="修改页面路径">修改页面路径</a>
                            {/if}
            <a class="js_delete_version" data-idx="{i}" data-openid="{item.basic_info.open_id}" href="javascript:;">删除</a>
            </div>
        </div>
    </div>
    <div class="code_version_log_bd">
        {if !item.basic_info.is_plugin_auto_update}
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">开发者</label>
            <p class="simple_preview_value">{item.basic_info.nick_name}</p>
        </div>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">提交时间</label>
            <p class="simple_preview_value">{unixFormat item.basic_info.time 'YYYY-MM-DD HH:mm:SS'}</p>
        </div>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">描述</label>
            <p class="simple_preview_value">{item.basic_info.describe}</p>
        </div>
        {else}
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">基础版本号</label>
            <p class="simple_preview_value">{item.basic_info.version}</p>
        </div>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">旧插件版本</label>
            <p class="simple_preview_value">
                <div class="plugin-item__row">
                    <img src="{item.basic_info.plugin_auto_update_info.headimg_url}" alt="" class="plugin-avatar">
                    <strong class="plugin-name">{item.basic_info.plugin_auto_update_info.nickname}</strong>
                    <span class="plugin-version">{item.basic_info.plugin_auto_update_info.old_custom_version}</span>
                </div>
            </p>
        </div>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">更新插件版本</label>
            <p class="simple_preview_value">
                <div class="plugin-item__row">
                    <img src="{item.basic_info.plugin_auto_update_info.headimg_url}" alt="" class="plugin-avatar">
                    <strong class="plugin-name">{item.basic_info.plugin_auto_update_info.nickname}</strong>
                    <span class="plugin-version">{item.basic_info.plugin_auto_update_info.new_custom_version}</span>
                </div>
                <i class="icon_msg_mini ask js_plugin_fast_update_info"
                    data-update-time="{item.basic_info.plugin_auto_update_info.update_time}"
                    data-update-log="{item.basic_info.plugin_auto_update_info.update_log}"
                ></i>
            </p>
        </div>
        {/if}
    </div>
</div>
{/each}
{else}
{if !dev_user_count}
<div class="empty_tips">你尚未绑定任何开发者，请先<a href="/wxopen/authprofile?action=index&token=365585973&lang=zh_CN">绑定开发者</a></div>
{else}
<div class="empty_tips">尚未提交任何开发版本</div>
{/if}
{/if}
</script>
<script type="text/html" id='js_show_exp_version_tpl'>
<div class="exp_version_box">
    <div class="exp_version_result">
    {if isSubmit}
        <div class="page_msg small default">
            <div class="inner">
                <span class="msg_icon_wrp"><i class="icon_msg success"></i></span>
                <div class="msg_content">
                    <h4>体验版已生效</h4>
                    <p>
                        管理员体验者可扫描下方二维码即可体验体验版<br>
                        (下载保存该二维码)
                    </p>
                </div>
            </div>
        </div>
    {else}
        <p class="code_qrcode_download_tips">
            管理员体验者可扫描下方二维码即可体验体验版<br>
            (下载保存该二维码)
        </p>
    {/if}
    {if path}
        <div class="frm_control_group url_preview_area">
            <label for="" class="frm_label">路径</label>
            <div class="frm_controls frm_vertical_pt">
                <div class="url_preview" title="{path}">{path}</div>
            </div>
        </div>
    {/if}
    {if isSubmit}
        <div class="code_qrcode_download_box">
            <div class="code_qrcode">
                <div class="vm_item vm_item_default pic_code_qrcode_wrp">
                    <img class="pic_code_qrcode" src="{qrcode_url openid path}" alt="">
                    <span class="code_qrcode_program_icon" style=""></span>
                </div>
                <div class="vm_item vm_item_primary code_qrcode_text">
                    <strong class="code_qrcode_title">{nick_name}体验版</strong>
                    <a class="js_download_exp_qrcode" data-openid='{openid}' href="javascript:;">下载二维码</a>
                </div>
            </div>
        </div>
    {else}
        <div class="code_qrcode_download_box">
            <div class="code_qrcode">
                <div class="pic_code_qrcode_wrp">
                    <img class="pic_code_qrcode" src="{qrcode_url openid path}" alt="">
                    <span class="code_qrcode_program_icon" style=""></span>
                </div>
                <strong class="code_qrcode_title">{nick_name}体验版</strong>
            </div>
            <div class="code_qrcode_text">
                <a class="btn btn_primary js_download_exp_qrcode" data-openid='{openid}' href="javascript:;">下载二维码</a>
            </div>
        </div>
    {/if}
    </div>
</div>

</script>
<script type="text/html" id="js_online_version_tpl">

<div class="mod_default_hd online_version">
    <h4>线上版本</h4>
</div>
<div class="mod_default_bd default_box online_version">
    <div class="default_box_inner">
        {if online_info}
        <div class="code_version_log">
            <div class="code_version_log_hd">
                <div class="simple_preview_item">
                    <label class="simple_preview_label" for="">版本号</label>
                    <p class="simple_preview_value">{online_info.basic_info.version}</p>
                </div>
            </div>
            <div class="code_version_log_ft">
                <div class="user_status global_dropdown_switch_opr">
                    <a data-openid="{online_info.basic_info.open_id}" data-type="2" class="btn btn_primary global_dropdown_switch_opr_btn js_version_detail" href="javascript:;">详情</a>

                    <a class="btn btn_primary global_dropdown_switch js_drop_switch" href="javascript:;"><i class="icon_arrow_down_white"></i></a>

                    <div class="skin_pop global_dropdown_switch_opr_pop js_drop_container" style='display:none;'>
                        <a data-openid="" class="js_roll_back" href="javascript:;">版本回退</a>
                        <a data-openid="" class="" href="/wxopen/basicprofile?action=index&token=365585973&lang=zh_CN">暂停服务</a>
                    </div>
                </div>
            </div>
            <div class="code_version_log_bd">
                <div class="simple_preview_item">
                    <label class="simple_preview_label" for="">发布者</label>
                    <p class="simple_preview_value">{online_info.basic_info.nick_name}</p>
                </div>
                <div class="simple_preview_item"> <label class="simple_preview_label" for="">发布时间</label>
                    <p class="simple_preview_value">{unixFormat online_info.basic_info.time 'YYYY-MM-DD HH:mm:SS'}</p>
                </div>
                <div class="simple_preview_item">
                    <label class="simple_preview_label" for="">描述</label>
                    <p class="simple_preview_value">{online_info.basic_info.describe}</p>
                </div>
            </div>
        </div>
        {else}
        <div class="empty_box">
            <p class="empty_tips">
            尚未提交线上版本
            </p>
        </div>
        {/if}
        {if gray_info}
        <div class="code_version_log">
            <div class="code_version_log_hd">
                <div class="simple_preview_item">
                    <label class="simple_preview_label" for="">版本号</label>
                    <p class="simple_preview_value">{gray_info.basic_info.version}</p>
                    <p>
                        <span class="status_tag info icon_after clickable">{gray_info.gray_percent}%发布中</span>
                    </p>
                </div>
            </div>
            <div class="code_version_log_ft">
                <div class="user_status global_dropdown_switch_opr">
                    <a data-openid="{gray_info.basic_info.open_id}" data-type="3" class="btn btn_primary global_dropdown_switch_opr_btn js_version_detail" href="javascript:;">详情</a>

                    <a class="btn btn_primary global_dropdown_switch js_drop_switch" href="javascript:;"><i class="icon_arrow_down_white"></i></a>

                    <div class="skin_pop global_dropdown_switch_opr_pop js_drop_container" style='display:none;'>
                        <a data-openid="" class="js_gray_more" href="javascript:;">提升发布比例</a>
                        <a data-openid="" class="js_gray_revert" href="javascript:;">撤销发布</a>
                    </div>
                </div>
            </div>
            <div class="code_version_log_bd">
                <div class="simple_preview_item">
                    <label class="simple_preview_label" for="">发布者</label>
                    <p class="simple_preview_value">{gray_info.basic_info.nick_name}</p>
                </div>
                <div class="simple_preview_item"> <label class="simple_preview_label" for="">发布时间</label>
                    <p class="simple_preview_value">{unixFormat gray_info.basic_info.time 'YYYY-MM-DD HH:mm:SS'}</p>
                </div>
                <div class="simple_preview_item">
                    <label class="simple_preview_label" for="">描述</label>
                    <p class="simple_preview_value">{gray_info.basic_info.describe}</p>
                </div>
            </div>
        </div>
        {/if}
    </div>
</div>

</script>

<script type="text/html" id="js_test_version_tpl">
<div class="mod_default_hd test_version">
    <h4>
        审核版本
    </h4>
</div>
<div class="mod_default_bd default_box test_version">
    <div class="default_box_inner">
        {if !!experience_info && ( experience_info.basic_info.status ==2 || experience_info.basic_info.status==3 || experience_info.basic_info.status == 4 ) }
        <div class="code_version_log">
            <div class="code_version_log_hd">
                <div class="simple_preview_item">
                    <label class="simple_preview_label" for="">版本号</label>
                    <p class="simple_preview_value">{experience_info.basic_info.version}</p>
                    <p>
                        <span class="status_tag succeed">
                            {convert_code_status experience_info.basic_info.status}
                        </span>
                    </p>
                </div>
            </div>
            <div class="code_version_log_ft">
                <div class="user_status global_dropdown_switch_opr">
                    {if experience_info.basic_info.status ==3}
                    <a data-openid="{experience_info.basic_info.open_id}" class="btn btn_primary global_dropdown_switch_opr_btn js_exp_version_online" href="javascript:;">提交发布</a>

                    {/if}
                    {if experience_info.basic_info.status ==2}
                    <a data-openid="{experience_info.basic_info.open_id}" data-type="1" class="btn btn_primary global_dropdown_switch_opr_btn js_version_detail" href="javascript:;">详情</a>
                    {/if}
                    {if experience_info.basic_info.status == 4}
                    <a data-openid="{experience_info.basic_info.open_id}" class="js_exp_version_delete btn btn_primary global_dropdown_switch_opr_btn" href="javascript:;">删除</a>
                    {/if}

                    <a class="btn btn_primary global_dropdown_switch js_drop_switch" href="javascript:;"><i class="icon_arrow_down_white"></i></a>

                    <div class="skin_pop global_dropdown_switch_opr_pop js_drop_container" style='display:none;'>
                    {if experience_info.basic_info.status == 2}
                    <a data-openid="{experience_info.basic_info.open_id" class="js_undo_exp" href="javascript:;">撤回审核</a>
                    {/if}
                    {if experience_info.basic_info.status != 2}
                    <a data-openid="{experience_info.basic_info.open_id}" data-type="1" class="js_version_detail " href="javascript:;">详情</a>
                    {/if}
                    </div>
                </div>
            </div>
            <div class="code_version_log_bd">
                <div class="simple_preview_item">
                    <label class="simple_preview_label" for="">开发者</label>
                    <p class="simple_preview_value">{experience_info.basic_info.nick_name}</p>
                </div>
                <div class="simple_preview_item">
                    <label class="simple_preview_label" for="">提交审核时间</label>
                    <p class="simple_preview_value">{unixFormat experience_info.basic_info.time 'YYYY-MM-DD HH:mm:SS'}</p>
                </div>
                <div class="simple_preview_item">
                    <label class="simple_preview_label" for="">描述</label>
                    <p class="simple_preview_value">{experience_info.basic_info.describe}</p>
                </div>
            </div>
        </div>
        {else}
        <div class="empty_box">
            <p class="empty_tips">
           你暂无提交审核的版本或者版本已发布上线
            </p>
        </div>
        {/if}
    </div>
</div>
</script>

                    </div>
                </div>
            </div>
            
                                                                        
        </div>
        <script type="text/javascript">
        
        document.getElementById('body').style.minHeight = document.documentElement.clientHeight-123+"px"
        window.onresize = function() {
            document.getElementById('body').style.minHeight = document.documentElement.clientHeight-123+"px"
        }
        </script> 
        <div class="foot blur_row" id="footer">
            <ul class="links ft"> 
	   
		<li class="links_item"><a href="http://www.tencent.com/zh-cn/index.shtml" target="_blank">关于腾讯</a></li>
		<li class="links_item"><a href="/wxopen/wawiki?action=dir_list&path=introduction/index&lang=zh_CN&token=365585973" target="_blank">文档中心</a></li>
		<li class="links_item"><a href="/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9" target="_blank">辟谣中心</a></li>
		<li class="links_item"><a href="http://kf.qq.com/product/wx_xcx.html" target="_blank">客服中心</a></li>
								<li class="links_item"><a class="weui-desktop-link" href="/acct/infringement?action=getmanual&t=infringement/manual&type=1&lang=zh_CN&token=365585973" target="_blank">侵权投诉</a></li>
				<li class="links_item"><p class="copyright">Copyright &copy; 2012-2019 Tencent. All Rights Reserved.</p></li>
</ul>
<script type="text/javascript">
    
    window._points&&(window._points[2]=+new Date());
</script>
 <script language="javascript">
     if(typeof(pgvMain) == 'function')
         pgvMain({senseParam: "t"});
 </script>
        </div>
        
        <script type="text/javascript">var MODULES = {'user/submenu.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/user/submenu387f6a.js','common/wx/top.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/top46249c.js','.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/.js','user/common_template_helper.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/user/common_template_helper431c7e.js','biz_common/moment.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/moment32f740.js','user/add_admin.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/user/add_admin32f740.js','common/wx/stepPopup.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/stepPopup32f740.js','common/wx/qrcheck.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/qrcheck3c252c.js','user/unbind_user.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/user/unbind_user35d277.js','common/wx/Cgi.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/Cgi3a04a2.js','common/wx/Tips.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/Tips32f740.js','biz_web/lib/json.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/json32f740.js','common/wx/stopMultiRequest.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/stopMultiRequest32f740.js','user/tester.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/user/tester32f792.js','user/add_user.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/user/add_user45fd58.js','common/wx/popup.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/popup32f740.js','tpl/user/search.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/user/search.html32f740.js','widget/wechat_search.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/wechat_search32f740.css','user/developer.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/user/developer32f740.js','user/change_admin.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/user/change_admin418763.js','common/wx/Step.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/Step32f740.js','common/wx/dialog.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/dialog41a4e9.js','biz_web/ui/dropdown.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/ui/dropdown32f740.js','common/wx/subjectAppealDialog.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/subjectAppealDialog3bb4b4.js','common/wx/overseasList.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/overseasList467829.js','biz_common/jquery.validate.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/jquery.validate32f740.js','user/admin.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/user/admin32f740.js','user/third_party_change_admin.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/user/third_party_change_admin387f6a.js','biz_web/ui/map.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/ui/map32f740.js','biz_web/ui/input/lentips.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/ui/input/lentips32f740.js','biz_web/ui/input/targetips.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/ui/input/targetips32f740.js','biz_web/ui/jquery.scrollbar.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/ui/jquery.scrollbar32f740.js','biz_web/widget/jquery.scrollbar.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/biz_web/widget/jquery.scrollbar32f740.css','biz_web/widget/dropdown.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/biz_web/widget/dropdown3f5aae.css','tpl/biz_web/ui/dropdown.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/biz_web/ui/dropdown.html387451.js','biz_web/ui/dateRange.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/ui/dateRange32f740.js','tpl/biz_web/ui/dateRange.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/biz_web/ui/dateRange.html32f740.js','biz_web/widget/date_range.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/biz_web/widget/date_range38267d.css','tpl/biz_web/ui/timeRange.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/biz_web/ui/timeRange.html32f740.js','biz_web/ui/checkbox.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/ui/checkbox32f740.js','tpl/biz_web/ui/checkbox.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/biz_web/ui/checkbox.html32f740.js','biz_web/lib/highcharts.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/highcharts32f740.js','biz_web/lib/spin.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/spin32f740.js','biz_web/lib/video_v7.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/video_v7.js','biz_web/lib/store.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/store32f740.js','biz_web/lib/video.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/video32f740.js','biz_web/lib/uploadify.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/uploadify32f740.js','biz_web/lib/swfobject.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/swfobject32f740.js','biz_web/lib/raphael-min.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/raphael-min32f740.js','eve.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/eve.js','biz_web/lib/webuploader.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader32f740.js','biz_web/lib/webuploader/base.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/base32f740.js','biz_web/lib/webuploader/widgets/filepicker.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/filepicker32f740.js','biz_web/lib/webuploader/widgets/queue.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/queue32f740.js','biz_web/lib/webuploader/widgets/runtime.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/runtime32f740.js','biz_web/lib/webuploader/widgets/upload.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/upload32f740.js','biz_web/lib/webuploader/widgets/validator.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/validator32f740.js','biz_web/lib/webuploader/widgets/image.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/image32f740.js','biz_web/lib/webuploader/runtime/html5/blob.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/blob32f740.js','biz_web/lib/webuploader/runtime/html5/filepicker.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/filepicker32f740.js','biz_web/lib/webuploader/runtime/html5/imagemeta/exif.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/imagemeta/exif32f740.js','biz_web/lib/webuploader/runtime/html5/transport.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/transport32f740.js','biz_web/lib/webuploader/runtime/html5/image.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/image32f740.js','biz_web/lib/webuploader/runtime/flash/filepicker.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/flash/filepicker32f740.js','biz_web/lib/webuploader/runtime/flash/transport.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/flash/transport32f740.js','biz_web/lib/webuploader/runtime/flash/blob.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/flash/blob32f740.js','biz_web/lib/webuploader/runtime/flash/image.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/flash/image32f740.js','biz_web/lib/audiojs.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/audiojs32f740.js','biz_web/lib/highcharts-v4.2.1.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/highcharts-v4.2.132f740.js','biz_web/lib/highcharts-more-v4.2.4.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/highcharts-more-v4.2.432f740.js','biz_web/lib/webuploader/uploader.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/uploader32f740.js','biz_web/lib/webuploader/mediator.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/mediator32f740.js','biz_web/lib/webuploader/widgets/widget.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/widget32f740.js','biz_web/lib/webuploader/queue.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/queue32f740.js','biz_web/lib/webuploader/file.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/file32f740.js','biz_web/lib/webuploader/lib/file.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/lib/file32f740.js','biz_web/lib/webuploader/runtime/client.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/client32f740.js','biz_web/lib/webuploader/lib/filepicker.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/lib/filepicker32f740.js','biz_web/lib/webuploader/lib/image.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/lib/image32f740.js','biz_web/lib/webuploader/lib/transport.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/lib/transport32f740.js','biz_web/lib/webuploader/runtime/runtime.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/runtime32f740.js','biz_web/lib/webuploader/dollar-third.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/dollar-third32f740.js','biz_web/lib/webuploader/runtime/flash/runtime.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/flash/runtime32f740.js','biz_web/lib/webuploader/lib/blob.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/lib/blob32f740.js','biz_web/lib/webuploader/runtime/compbase.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/compbase32f740.js','biz_web/lib/webuploader/runtime/html5/runtime.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/runtime32f740.js','biz_web/lib/webuploader/runtime/html5/imagemeta.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/imagemeta32f740.js','biz_web/lib/webuploader/runtime/html5/util.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/util32f740.js','biz_web/lib/webuploader/runtime/html5/jpegencoder.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/jpegencoder32f740.js','biz_web/lib/webuploader/promise.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/promise32f740.js','biz_web/lib/webuploader/dollar-builtin.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/webuploader/dollar-builtin32f740.js','biz_web/lib/soundmanager2.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/lib/soundmanager232f740.js','biz_web/utils/Piper.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/utils/Piper32f740.js','biz_web/utils/upload.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/utils/upload3f0c5a.js','widget/upload.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/upload38267d.css','tpl/uploader.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/uploader.html32f740.js','biz_web/utils/multiupload.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/utils/multiupload32f740.js','common/wx/preview.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/preview333f44.js','tpl/biz_web/ui/multiupload.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/biz_web/ui/multiupload.html32f740.js','biz_web/utils/mplog.es.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_web/utils/mplog.es.js','entityshop/select_shop.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/select_shop330206.js','page/entityshop/dialog_select_shop.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/page/entityshop/dialog_select_shop38267d.css','common/wx/pagebar.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/pagebar32f740.js','common/wx/tooltips.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/tooltips32f740.js','tpl/entityshop/select_shop.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/entityshop/select_shop.html330206.js','entityshop/store_cgi.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/store_cgi330206.js','common/wx/tooltipsManager.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/tooltipsManager330206.js','entityshop/store_helper.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/store_helper330206.js','common/wx/sosomap/util.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/sosomap/util330206.js','entityshop/marker_mgr.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/marker_mgr330206.js','entityshop/store_marker.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/store_marker330206.js','entityshop/simple_search_map.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/simple_search_map330206.js','common/wx/sosomap/event.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/sosomap/event330206.js','common/wx/sosomap/city_select.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/sosomap/city_select330206.js','entityshop/searchResult.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/searchResult330206.js','entityshop/list_v2.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/list_v23ca104.js','common/qq/queryString.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/qq/queryString32f740.js','common/wx/popover.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/popover3f105f.js','entityshop/apply_info.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/apply_info391879.js','tpl/entityshop/marker_edit.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/entityshop/marker_edit.html330206.js','tpl/entityshop/marker_show.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/entityshop/marker_show.html330206.js','entityshop/add.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/add330206.js','common/wx/sosomap/map.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/sosomap/map35aaf3.js','tpl/entityshop/marker_show_new.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/entityshop/marker_show_new.html330206.js','tpl/entityshop/marker_drag.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/entityshop/marker_drag.html330206.js','entityshop/list.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/list330206.js','entityshop/add_v2.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/entityshop/add_v237ba88.js','tpl/entityshop/search_result.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/entityshop/search_result.html330206.js','page/entityshop/store_map.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/page/entityshop/store_map38267d.css','news/news_list.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/news/news_list32f740.js','common/qq/url.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/qq/url32f740.js','common/qq/mask.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/qq/mask32f740.js','common/qq/emoji.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/qq/emoji32f740.js','widget/emoji.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/emoji38267d.css','common/qq/Class.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/qq/Class32f740.js','common/qq/events.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/qq/events32f740.js','common/qq/jquery.plugin/serializeObject.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/qq/jquery.plugin/serializeObject32f740.js','common/qq/jquery.plugin/ZeroClipboard.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/qq/jquery.plugin/ZeroClipboard32f740.js','common/qq/jquery.plugin/tab.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/qq/jquery.plugin/tab32f740.js','tpl/tab.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/tab.html.js','widget/msg_tab.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/msg_tab38267d.css','tpl/top.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/top.html32f740.js','common/wx/cgiReport.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/cgiReport3c252c.js','common/lib/MockJax.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/MockJax32f740.js','common/wx/inputCounter.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/inputCounter32f740.js','common/wx/widgetBridge.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/widgetBridge330206.js','biz_common/jquery.ui/jquery.ui.draggable.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/jquery.ui/jquery.ui.draggable32f740.js','tpl/popup.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/popup.html32f740.js','widget/processor_bar.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/processor_bar32f740.css','tpl/step.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/step.html32f740.js','common/wx/Idcheck.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/Idcheck32f740.js','tpl/Idcheck.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/Idcheck.html387451.js','biz_common/cookie.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/cookie32f740.js','common/wx/verifycode.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/verifycode32f740.js','widget/verifycode.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/verifycode38267d.css','tpl/verifycode.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/verifycode.html449c6e.js','tpl/popover.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/popover.html32f740.js','common/wx/noticeBox.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/noticeBox409a8b.js','tpl/noticeBox.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/noticeBox.html32f740.js','common/wx/upload.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/upload32f740.js','common/wx/sosomap/searchService.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/sosomap/searchService330206.js','common/wx/sosomap/sosomap_province_data.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/sosomap/sosomap_province_data330206.js','common/wx/sosomap/citydata.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/sosomap/citydata330206.js','common/wx/silder.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/silder38267d.js','widget/weui-slider.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/weui-slider38267d.css','widget/tooltip.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/tooltip38267d.css','tpl/silder.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/silder.html38267d.js','widget/pagination.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/pagination38267d.css','tpl/pagebar.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/pagebar.html32f740.js','common/wx/region.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/region32f740.js','widget/img_preview.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/img_preview38bed0.css','tpl/preview.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/preview.html333f44.js','common/wx/monitor.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/monitor3c252c.js','widget/qrcheck.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/qrcheck32f740.css','tpl/qrcheck/qrcode.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/qrcheck/qrcode.html449c6e.js','tpl/qrcheck/popup.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/qrcheck/popup.html32f740.js','common/wx/qrcheck_msg.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/qrcheck_msg449c6e.js','tpl/dialog.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/dialog.html40be27.js','common/wx/messenger.method.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/messenger.method358271.js','common/wx/messenger.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/messenger358271.js','tpl/tooltips.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/tooltips.html32f740.js','common/wx/autocomplete.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx/autocomplete34cf04.js','common/lib/datepicker.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/datepicker32f740.js','widget/datepicker.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/datepicker38267d.css','common/lib/marked.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/marked3df955.js','common/lib/redux/redux-vComponent.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/redux/redux-vComponent32f740.js','common/lib/vComponent.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/vComponent32f740.js','common/lib/redux/redux.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/redux/redux32f740.js','common/lib/redux/immutable.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/redux/immutable32f740.js','common/lib/redux/redux-immutable/utilities/getUnexpectedInvocationParameterMessage.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/redux/redux-immutable/utilities/getUnexpectedInvocationParameterMessage32f740.js','common/lib/redux/redux-immutable/utilities/getStateName.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/redux/redux-immutable/utilities/getStateName32f740.js','common/lib/redux/redux-immutable/utilities/validateNextState.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/redux/redux-immutable/utilities/validateNextState32f740.js','common/lib/redux/redux-immutable/utilities/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/redux/redux-immutable/utilities/index32f740.js','common/lib/redux/redux-immutable/combineReducers.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/redux/redux-immutable/combineReducers32f740.js','common/lib/virtual-template.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/virtual-template32f740.js','common/lib/colorpicker.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/colorpicker32f740.js','widget/colorpicker/colorpicker.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/colorpicker/colorpicker38267d.css','common/utils/Class.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/utils/Class32f740.js','common/utils/queryString.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/utils/queryString32f740.js','common/utils/events.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/utils/events32f740.js','common/jquery.plugin/serializeObject.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/jquery.plugin/serializeObject32f740.js','third_tools/comm_tools.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/third_tools/comm_tools4268a4.js','oss/common/menu_data.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/common/menu_data461a83.js','third_tools/project_form.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/third_tools/project_form3e7e37.js','third_tools/tgit_tool.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/third_tools/tgit_tool4268a4.js','third_tools/qcloud_tool.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/third_tools/qcloud_tool4268a4.js','third_tools/tgit_manage.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/third_tools/tgit_manage4268a4.js','oss/monitor_biz.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/monitor_biz3f105f.js','oss/common/render_chart_2.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/common/render_chart_23dd0e0.js','oss/common/chart_obj.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/common/chart_obj39dd51.js','oss/common/render_chart.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/common/render_chart39dd51.js','oss/common/render_chart_3.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/common/render_chart_33e7fca.js','oss/interface.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/interface46041d.js','oss/monitor_interface.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/monitor_interface431c7e.js','oss/monitor_service.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/monitor_service3f105f.js','biz_common/utils/url/parse.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/url/parse32f740.js','oss/monitor_detail.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/monitor_detail3dd0e0.js','oss/iframe.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/iframe3dd0e0.js','oss/monitor.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/monitor4268a4.js','oss/monitor_performance.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/monitor_performance435aa8.js','oss/log_search.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/oss/log_search46041d.js','biz_common/jquery-2.1.4.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/jquery-2.1.432f740.js','biz_common/template-2.0.1-cmd.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/template-2.0.1-cmd32f740.js','biz_common/log/jserr.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/log/jserr32f740.js','biz_common/aes.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/aes32f740.js','biz_common/jquery-1.9.1.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/jquery-1.9.132f740.js','biz_common/test/respTypesTest/index.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/test/respTypesTest/index.html32f740.js','biz_common/xss.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/xss32f740.js','biz_common/app_editor/filter/common/common_filter_base.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/app_editor/filter/common/common_filter_base.js','biz_common/app_editor/filter/filterUtils.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/app_editor/filter/filterUtils.js','biz_common/app_editor/filter/img/img_base_filter.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/app_editor/filter/img/img_base_filter.js','biz_common/app_editor/filter/img/img_mobile_filter.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/app_editor/filter/img/img_mobile_filter.js','biz_common/app_editor/clear_dom.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/app_editor/clear_dom.js','biz_common/app_editor/articleUtils.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/app_editor/articleUtils.js','biz_common/app_editor/article_data_key.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/app_editor/article_data_key.js','app_editor/editor/utils.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/app_editor/editor/utils.js','biz_common/tmpl.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/tmpl32f740.js','biz_common/underscore.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/underscore32f740.js','biz_common/base64.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/base64334571.js','biz_common/ui/imgonepx.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/ui/imgonepx32f740.js','biz_common/jquery.ui/jquery.ui.sortable.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/jquery.ui/jquery.ui.sortable32f740.js','biz_common/dom/class.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/dom/class32f740.js','biz_common/dom/attr.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/dom/attr32f740.js','biz_common/dom/event.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/dom/event32f740.js','biz_common/dom/offset.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/dom/offset.js','biz_common/framework/localforage.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/framework/localforage32f740.js','promise.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/promise.js','biz_common/framework/drivers/indexeddb.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/framework/drivers/indexeddb.js','biz_common/framework/drivers/localstorage.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/framework/drivers/localstorage.js','biz_common/framework/drivers/websql.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/framework/drivers/websql.js','biz_common/virtual-template.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/virtual-template32f740.js','biz_common/utils/spin.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/spin32f740.js','biz_common/utils/emoji_panel_data.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/emoji_panel_data.js','biz_common/utils/report.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/report32f740.js','biz_common/utils/string/html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/string/html32f740.js','biz_common/utils/string/emoji.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/string/emoji32f740.js','biz_common/utils/string/jsonDeepHtmldecode.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/string/jsonDeepHtmldecode32f740.js','biz_common/utils/sha1.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/sha132f740.js','biz_common/utils/wxgspeedsdk.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/wxgspeedsdk32f740.js','biz_common/utils/huatuo.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/huatuo32f740.js','biz_common/utils/get_para_list.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/get_para_list.js','biz_common/utils/asyncJs.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/asyncJs32f740.js','biz_common/utils/cookie.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/cookie32f740.js','biz_common/utils/geolocation.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/geolocation32f740.js','biz_common/utils/format_ori_check_result.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/format_ori_check_result.js','biz_common/utils/monitor.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/monitor32f740.js','biz_common/utils/load3rdimg.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/load3rdimg.js','biz_common/utils/http.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/http32f740.js','biz_common/utils/norefererimg.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/norefererimg32f740.js','biz_common/utils/emoji_data.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/emoji_data.js','biz_common/utils/respTypes.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/utils/respTypes32f740.js','markdown/display.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/markdown/display3fb9ef.js','tpl/markdown/display.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/markdown/display.html3df955.js','appeal/result.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/appeal/result3ece4e.js','appeal/code_ban.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/appeal/code_ban3ee4ab.js','appeal/appeal.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/appeal/appeal405347.js','appeal/forbid_tmpl.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/appeal/forbid_tmpl4332f7.js','services/feedback.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/services/feedback445247.js','services/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/services/index44901c.js','plugin/config.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/config41116a.js','setting/name.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/setting/name470744.js','setting/avatar.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/setting/avatar462524.js','config/server_domain.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/server_domain453e87.js','plugin/doc.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/doc409c4d.js','plugin/details_header.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/details_header41a4e9.js','plugin/plugin_list.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/plugin_list4538af.js','plugin/code_index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/code_index45fd58.js','plugin/code_submit.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/code_submit45fd58.js','biz_common/jsencrypt.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/jsencrypt334571.js','plugin/post.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/post409c4d.js','plugin/apply_payment.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/apply_payment3f7c1c.js','plugin/apply_info.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/apply_info3c6ed4.js','plugin/detail.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/detail41116a.js','plugin/iframe.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/iframe3c405d.js','plugin/apply.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/plugin/apply3c6ed4.js','forgetpwd/weakpwd.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/forgetpwd/weakpwd32f740.js','forgetpwd/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/forgetpwd/index32f740.js','biz_common/jquery.md5.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/biz_common/jquery.md532f740.js','document/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/document/index32f740.js','register/step1_tmpl.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/step1_tmpl449c6e.js','register/model.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/model449c6e.js','register/step1.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/step1449c6e.js','register/step2.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/step2449c6e.js','common/qq/prototype.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/qq/prototype32f740.js','register/remitfail.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/remitfail44c2c5.js','register/overseas_step3.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/overseas_step3449c6e.js','register/data_bank_city.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/data_bank_city449c6e.js','register/banklist.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/banklist44c2c5.js','register/data_banks.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/data_banks449c6e.js','tpl/register/bankdialog.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/register/bankdialog.html.js','tpl/register/banklist.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/register/banklist.html.js','register/remitverify.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/remitverify449c6e.js','common/qq/jquery.plugin/zclip.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/qq/jquery.plugin/zclip32f740.js','register/step3.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/step344c2c5.js','register/mod/form_person.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/mod/form_person449c6e.js','register/mod/form_ent.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/mod/form_ent449c6e.js','register/mod/form_media.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/mod/form_media449c6e.js','register/mod/form_gov.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/mod/form_gov449c6e.js','register/mod/form_other.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/mod/form_other449c6e.js','register/mod/form_team.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/mod/form_team449c6e.js','register/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/index449c6e.js','register/base_info.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/base_info449c6e.js','common/lib/jquery.md5.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/jquery.md5.js','register/mod/mod_form_step3.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/mod/mod_form_step3449c6e.js','register/mod/mod_file_upload.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/mod/mod_file_upload449c6e.js','register/mod/mod_qrcheck.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/mod/mod_qrcheck449c6e.js','register/mod/mod_operator.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/mod/mod_operator449c6e.js','register/mod/mod_bank.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/mod/mod_bank44c2c5.js','register/active.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/register/active449c6e.js','wxpay/revenue_share_agreement.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxpay/revenue_share_agreement3e0285.js','wxpay/merchant_account.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxpay/merchant_account3f0c5a.js','wxpay/iap_order_list.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxpay/iap_order_list466eda.js','wxpay/iap_account.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxpay/iap_account3c2c0d.js','wxpay/iap_apply.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxpay/iap_apply3cbd0d.js','wxpay/iap_apply_info.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxpay/iap_apply_info466eda.js','wxpay/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxpay/index3c405d.js','promotion/ad.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/promotion/ad3dcc8b.js','promotion/promotion.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/promotion/promotion3c78c3.js','invite/game.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/invite/game391879.js','code/cat.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/code/cat32f740.js','code/game_submit.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/code/game_submit46c23a.js','code/submit.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/code/submit433364.js','code/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/code/index46c23a.js','home/login.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/home/login32f740.js','home/home.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/home/home46041d.js','config/common/minigamefreeze.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/common/minigamefreeze435a4d.js','home/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/home/index45dcd8.js','home/appeal_subject.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/home/appeal_subject39fefb.js','notice/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/notice/index440a14.js','tpl/setting/avatar.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/avatar.html45e063.js','common/lib/jquery.Jcrop.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib/jquery.Jcrop32f740.js','setting/name_dialog.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/setting/name_dialog435a4d.js','tpl/name_dialog.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/name_dialog.html3b7d28.js','widget/weui-desktop/card_profile_dialog.css': 'https://res.wx.qq.com/wxopenres/htmledition/style/widget/weui-desktop/card_profile_dialog435a4d.css','setting/abbr_duplication.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/setting/abbr_duplication435a4d.js','tpl/config/shortname_conflict_dialog.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/config/shortname_conflict_dialog.html435a4d.js','setting/name_duplication.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/setting/name_duplication435a4d.js','setting/abbreviation.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/setting/abbreviation462524.js','tpl/setting/abbriviation.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/abbriviation.html44569e.js','tpl/setting/auth.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/auth.html32f740.js','setting/app_info.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/setting/app_info45dcd8.js','setting/desc.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/setting/desc32f740.js','setting/category.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/setting/category3c252c.js','tpl/setting/name.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/name.html435a4d.js','tpl/setting/desc.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/desc.html32f740.js','config/manage_category.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/manage_category45fd58.js','tpl/setting/category.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/category.html32f740.js','setting/before_fillinfo.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/setting/before_fillinfo32f740.js','tpl/annual_fee/increment_tax_form.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/annual_fee/increment_tax_form.html32f740.js','tpl/setting/rename_popup.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/rename_popup.html32f740.js','tpl/setting/rename_agree.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/rename_agree.html32f740.js','tpl/setting/rename_qrcheck.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/rename_qrcheck.html32f740.js','tpl/setting/rename_form.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/rename_form.html32f740.js','tpl/setting/rename_result.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/rename_result.html32f740.js','tpl/setting/rename_cancel_result.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/rename_cancel_result.html32f740.js','tpl/setting/rename_confirm.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/setting/rename_confirm.html32f740.js','tpl/data/public_queryingTipsMask.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/data/public_queryingTipsMask.html331d6d.js','tpl/config/manage_category.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/config/manage_category.html3b1eb7.js','tpl/config/delAccountDialog.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/config/delAccountDialog.html449c6e.js','tpl/config/delAccountGame.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/config/delAccountGame.html435a4d.js','tpl/config/credentials_upload.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/config/credentials_upload.html39d69e.js','tpl/config/credentials.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/config/credentials.html39d69e.js','tpl/config/delAccountCancel.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/config/delAccountCancel.html435a4d.js','tpl/config/category_dropdown.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/config/category_dropdown.html41a4e9.js','tpl/wxverify/multiupload.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/wxverify/multiupload.html32f740.js','tpl/subscribe/cat_list_item.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/subscribe/cat_list_item.html3e7ac0.js','tpl/subscribe/cat_list.html.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tpl/subscribe/cat_list.html3e7ac0.js','data/event_analyse_index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/event_analyse_index34cf04.js','data/publicJs/analyse_chart.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/publicJs/analyse_chart342611.js','data/publicJs/analyse_table.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/publicJs/analyse_table33dc28.js','data/staticData/menu_data.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/staticData/menu_data46c3e4.js','data/realtime.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/realtime3a02c4.js','data/event_analyse_result.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/event_analyse_result33dc28.js','data/event_create_funnel.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/event_create_funnel4619e7.js','data/publicJs/funnel_chart.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/publicJs/funnel_chart33dc28.js','data/publicJs/funnel_table.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/publicJs/funnel_table33dc28.js','data/event_change_funnel.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/event_change_funnel4440fb.js','data/income.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/income3a02c4.js','data/staticData/index_data.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/staticData/index_data3f3fce.js','data/source.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/source4020ed.js','data/event_funnel_results.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/event_funnel_results32f740.js','data/userdata.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/userdata3f3fce.js','data/event_analyse_records.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/event_analyse_records34319c.js','data/event_list.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/event_list373859.js','data/event_funnel_index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/event_funnel_index4619e7.js','data/access.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/access3f941a.js','data/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/index3f3fce.js','data/event_detail.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/event_detail373859.js','data/event_edit.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/event_edit444b4c.js','data/event_funnel_list.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/data/event_funnel_list4619e7.js','config/game.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/game3b2dbe.js','config/config.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/config44300f.js','config/change_pwd.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/change_pwd3c252c.js','config/pwd_validate.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/pwd_validate32f740.js','config/common/delAccountDialog.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/common/delAccountDialog445208.js','config/common/delcheck.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/common/delcheck435a4d.js','config/common/api_list.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/common/api_list435a4d.js','config/common/card_with_category.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/common/card_with_category435a4d.js','config/permission.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/permission431c7e.js','config/edit_remark.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/edit_remark3c68a2.js','config/mp_account.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/mp_account3dd64c.js','config/config_services.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/config_services46ef0b.js','config/change_mail.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/change_mail3a04a2.js','config/game_config.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/game_config449480.js','config/follow.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/follow4268a4.js','config/third_auth.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/third_auth4268a4.js','config/relation.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/relation40ce26.js','config/permission_add_user.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/permission_add_user431c7e.js','config/interface.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/interface4268a4.js','config/setting_category.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/setting_category45fd58.js','config/qrcodejump.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/qrcodejump3c31ad.js','config/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/index4672f6.js','config/auth_frame.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/auth_frame3a04a2.js','config/third_tools.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/config/third_tools451c67.js','wxverify/step_proto.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/step_proto449c6e.js','wxverify/order.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/order449c6e.js','wxverify/def.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/def449c6e.js','wxverify/apply_new.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/apply_new449c6e.js','wxverify/step_pay.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/step_pay449c6e.js','wxverify/mod_stuff/mod_qrcheck.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/mod_stuff/mod_qrcheck449c6e.js','wxverify/mod_stuff/mod_mobile.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/mod_stuff/mod_mobile449c6e.js','wxverify/mod_stuff/mod_multiupload.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/mod_stuff/mod_multiupload449c6e.js','wxverify/mod_stuff/mod_handler.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/mod_stuff/mod_handler449c6e.js','wxverify/mod_stuff/data_form_rules.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/mod_stuff/data_form_rules449c6e.js','wxverify/step_invoice.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/step_invoice449c6e.js','wxverify/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/index449c6e.js','wxverify/step_stuff.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/step_stuff449c6e.js','wxverify/step_naming.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/step_naming449c6e.js','wxverify/order_new.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/order_new467829.js','wxverify/apply.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/wxverify/apply449c6e.js','violation/list.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/violation/list4268a4.js','subscribe/submenu.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/subscribe/submenu3e7ac0.js','subscribe/tmplmsg_lib.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/subscribe/tmplmsg_lib3e7ac0.js','subscribe/cat_list.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/subscribe/cat_list3e7ac0.js','subscribe/tmplmsg.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/subscribe/tmplmsg3f8db8.js','subscribe/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/subscribe/index3e7ac0.js','subscribe/tmplmsg_add.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/subscribe/tmplmsg_add3e7ac0.js','subscribe/tmplmsg_detail.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/subscribe/tmplmsg_detail3e7ac0.js','tmplmsg/submenu.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tmplmsg/submenu32f740.js','tmplmsg/lib.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tmplmsg/lib415a77.js','tmplmsg/reducer/lib.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tmplmsg/reducer/lib32f740.js','tmplmsg/select.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tmplmsg/select3306fb.js','tmplmsg/reducer/select.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tmplmsg/reducer/select418763.js','tmplmsg/reducer/mytmpl.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tmplmsg/reducer/mytmpl418763.js','tmplmsg/reducer/add.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tmplmsg/reducer/add437c35.js','tmplmsg/detail.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tmplmsg/detail32f740.js','tmplmsg/add.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tmplmsg/add32f740.js','tmplmsg/index.js': 'https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/tmplmsg/index415a77.js'};</script>
        <script type="text/javascript">
    try {
        window.wx ={
            version:"4.0.0",
            uin:"3853095108",
            data:{
                t:"365585973",
                ticket:"0bdc0cfd35913380df8af8ed913cdc43171ba788",
                lang:'zh_CN',
                param:["&token=365585973",'&lang=zh_CN'].join(""),
                uin:"3853095108",
                uin_base64:"Mzg1MzA5NTEwOA==",
                user_name:"gh_16d66417c279",
                nick_name:"欧尚客户管家",
                time:"1562748313"||new Date().getTime()/1000
            },
            path:{
                video : "https://res.wx.qq.com/wxopenres/zh_CN/htmledition/plprecorder/biz_web/video-js309240.swf",    
                audio : "https://res.wx.qq.com/wxopenres/zh_CN/htmledition/plprecorder/biz_web/audiojs309240.swf",
                uploadify : "https://res.wx.qq.com/wxopenres/zh_CN/htmledition/plprecorder/biz_web/uploadify309240.swf",
                webuploader : "https://res.wx.qq.com/wxopenres/zh_CN/htmledition/plprecorder/biz_web/webuploader309240.swf",
                zoom : "https://res.wx.qq.com/wxopenres/zh_CN/htmledition/plprecorder/biz_web/zoom309240.swf",
                zeroClipboard_new : "https://res.wx.qq.com/wxopenres/zh_CN/htmledition/plprecorder/biz_web/ZeroClipboard_new309240.swf",
                rimgcrop : "https://res.wx.qq.com/wxopenres/htmledition/images/cut-round32f740.gif"
            },
            acl:{
                setting: {
                    can_set_category_api: '1' * 1 
                }
            },
            app_service_type: '0' || 0,
            events:{}
        };
    }catch(error){
        if(error&&error.stack){
            error.stack="[tryCatch][layout_js]" + error.stack;
        }
        BJ_REPORT&&BJ_REPORT.report&&BJ_REPORT.report(error);
        var orgOnerror = window.onerror;
        window.onerror = function() {};
        setTimeout(function() {
            window.onerror = orgOnerror;
        }, 50);
        throw error;
    }
</script>
<script onerror="wx_loaderror(this)" type="text/javascript" src="https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/sea32f740.js"></script>  
<script onerror="wx_loaderror(this)" type="text/javascript" src="https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/lib32f740.js"></script>  
<script onerror="wx_loaderror(this)" type="text/javascript" src="https://res.wx.qq.com/wxopenres/zh_CN/htmledition/js/common/wx3a04a2.js"></script>
<script type="text/javascript">
if ($('#_js_announcement').length && $('#_js_announcement_tpl').length) {
    try {
                    window.wx.announcement = {
                announcement_list:[]
            };
                $.each(window.wx.announcement.announcement_list, function(i, v) {
            v.content = (function(content) { 
                var temp = document.createElement('div');
                temp.innerHTML = content.replace(/&nbsp;/g, ' ');
                return temp.innerText || temp.textContent;
            })(v.content).replace(/\f\r\t\v/g, '').replace(/\n/g, '<br>');
        });

        $('#_js_announcement').html(template.render('_js_announcement_tpl', window.wx.announcement)).click(function(e) {
            var target = $(e.target);
            if (target.hasClass('js_msg_close')) {
                target.parents('.page_msg').remove();
            }
        });
    } catch(e) {
        console.log(e);
    }
}
</script>

<script type="text/javascript">

</script>   

        
<script type="text/javascript">define('widget/tooltip.css', [], function(){return null;});
define('widget/weui-slider.css', [], function(){return null;});
define('widget/processor_bar.css', [], function(){return null;});
define('widget/qrcheck.css', [], function(){return null;});</script>
<script onerror="wx_loaderror(this)" type="text/javascript" src="https://res.wx.qq.com/c/=/wxopenres/zh_CN/htmledition/js/tpl/silder.html38267d.js,/wxopenres/zh_CN/htmledition/js/tpl/popover.html32f740.js,/wxopenres/zh_CN/htmledition/js/tpl/step.html32f740.js,/wxopenres/zh_CN/htmledition/js/tpl/tooltips.html32f740.js,/wxopenres/zh_CN/htmledition/js/tpl/dialog.html40be27.js,/wxopenres/zh_CN/htmledition/js/tpl/popup.html32f740.js,/wxopenres/zh_CN/htmledition/js/common/wx/widgetBridge330206.js,/wxopenres/zh_CN/htmledition/js/common/wx/qrcheck_msg449c6e.js,/wxopenres/zh_CN/htmledition/js/tpl/qrcheck/popup.html32f740.js,/wxopenres/zh_CN/htmledition/js/tpl/qrcheck/qrcode.html449c6e.js,/wxopenres/zh_CN/htmledition/js/common/qq/events32f740.js,/wxopenres/zh_CN/htmledition/js/common/lib/MockJax32f740.js,/wxopenres/zh_CN/htmledition/js/common/wx/cgiReport3c252c.js,/wxopenres/zh_CN/htmledition/js/common/qq/mask32f740.js" ></script>
<script onerror="wx_loaderror(this)" type="text/javascript" src="https://res.wx.qq.com/c/=/wxopenres/zh_CN/htmledition/js/common/wx/stopMultiRequest32f740.js,/wxopenres/zh_CN/htmledition/js/common/wx/silder38267d.js,/wxopenres/zh_CN/htmledition/js/common/wx/popover3f105f.js,/wxopenres/zh_CN/htmledition/js/common/wx/monitor3c252c.js,/wxopenres/zh_CN/htmledition/js/common/wx/Step32f740.js,/wxopenres/zh_CN/htmledition/js/common/wx/tooltips32f740.js,/wxopenres/zh_CN/htmledition/js/common/wx/dialog41a4e9.js,/wxopenres/zh_CN/htmledition/js/common/wx/popup32f740.js,/wxopenres/zh_CN/htmledition/js/common/wx/qrcheck3c252c.js,/wxopenres/zh_CN/htmledition/js/user/common_template_helper431c7e.js,/wxopenres/zh_CN/htmledition/js/code/index46c23a.js" ></script>
<script type="text/html" id="js_details_tpl">
<div class="simple_dialog_content">
    <div class="simple_preview_box">
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">版本号</label>
            <div class="simple_preview_value">{info.basic_info.version}</div>
        </div>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">开发者</label>
            <div class="simple_preview_value">{info.basic_info.nick_name}</div>
        </div>
        {if !info.basic_info.status}
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">发布时间</label>
            <div class="simple_preview_value">{unixFormat info.detail_info.publish_time 'YYYY-MM-DD'}</div>
        </div>
        {/if}
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">描述</label>
            <div class="simple_preview_value">{info.basic_info.describe}</div>
        </div>

        {if info.detail_info.check_data.item_list.length}
        {each info.detail_info.check_data.item_list as item i}
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">服务类目信息</label>
            <div class="simple_preview_value">{item.first_class}/{item.second_class} {if item.third_class} /{item.third_class}{/if} <p>{item.address}</p></div>
        </div>
        {/each}
        {/if}
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">提交审核时间</label>
            <div class="simple_preview_value">{unixFormat info.detail_info.summit_check_time 'YYYY-MM-DD'}</div>
        </div>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">代码提交时间</label>
            <div class="simple_preview_value">{ unixFormat info.detail_info.commit_time 'YYYY-MM-DD'}</div>
        </div>
    </div>
</div>

</script>
<script  type="text/html" id="submit_confirm_tpl">
<div>
    <div class="page_msg large default">
        <div class="inner">
            <span class="msg_icon_wrp"><i class="icon_msg info"></i></span>
            <div class="msg_content">
                <h4>确认提交审核？</h4>
                <div class="msg_desc_context">
                    <p>提交给微信团队审核前，请确保:</p>
                    <ul class="simple_tips_list">
                        <li class="simple_tips_item">
                        <div class="simple_tips_content">
                            提交的小程序功能完整，可正常打开和运行，而不是测试版或 Demo<br>
                            小程序的调试和预览可在开发者工具进行。
                            多次提交测试内容或 Demo，将受到相应处罚。
                        </div>
                        </li>
                        {if isgame}
                        <li class="simple_tips_item">
                        <div class="simple_tips_content">
                            审核不通过将会影响主体信用分。
                        </div>
                        </li>
                        {/if}
                        <li class="simple_tips_item">
                        <div class="simple_tips_content">
                            已仔细阅读<a href="https://developers.weixin.qq.com/miniprogram/product/index.html" target="_blank">《微信小程序平台运营规范》</a>和<a href="https://developers.weixin.qq.com/miniprogram/product/reject.html" target="_blank">《微信小程序平台审核常见被拒绝情形》</a>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="dialog_tool_context">
        <div id="submit_confirm_checkbox"></div>
    </div>
</div>
</script>

<script type="text/html" id="boutique_confirm_tpl">
    <div>
        <div class="page_msg large default">
            <div class="inner">
                <span class="msg_icon_wrp"><i class="icon_msg info"></i></span>
                <div class="msg_content">
                    <h4>2小时极速审核</h4>
                    <div class="msg_desc_context">
                        
                            <p>
                            你的小程序本月评测达标，可进入2小时极速审核通道，工作时间：周一到周五，9点-21点；周六周日，9点-19点。更多信息可查看
                            <a href="/wxopen/grade?action=result&token=365585973&lang=zh_CN">评测结果</a>
                            </p>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="dialog_tool_context">
            <div id="boutique_confirm_checkbox"></div>
        </div>
    </div>
</script>

<script  type="text/html" id="publish_confirm_tpl">
<div>
    <div class="page_msg large default">
        <div class="inner">
            <span class="msg_icon_wrp"><i class="icon_msg info"></i></span>
            <div class="msg_content">
                <h4>注意：</h4>
                <div class="msg_desc_context">
                    {if (nick_name!='')}
                        <p>小程序一经发布，将不支持修改名称。</p>
                        {if (name_status==1)}
                        <p>当前小程序名称：欧尚客户管家正在修改中，如果发布后名称审核失败，将不能再更改。</p>
                        {else}
                        <p>请确认小程序名称为欧尚客户管家</p>
                        {/if}
                    {else}
                        <p>当前小程序无名称，请在设置页完成名称设置后进行发布。</p>
                    {/if}

                </div>
            </div>
        </div>
    </div>
    <div class="dialog_tool_context">
        {if (nick_name!='')}
        <div id="publish_confirm_checkbox"></div>
        {/if}
    </div>
</div>
</script>
<script type="text/html" id="gray_release_tpl">

<div class="gray_release_form">
    {if old_percent == 0}
    <div class="gray_release_edit">
        <div class="frm_control_group">
            <label for="" class="frm_label">发布模式</label>
            <div class="frm_controls">
                <div class="dropdown_block">
                    <div class="js_gray_release_dp"></div>
                </div>
            </div>
        </div>
        <div class="frm_control_group js_gray_scale_container" style="display:none;">
            <label for="" class="frm_label">发布比例</label>
            <div class="frm_controls">
                <div class="js_gray_release_silder"></div>
                <p class="frm_tips">将使用此版本的用户比例</p>
            </div>
        </div>
    </div>
    {else}
    <div class="gray_release_preview">
        <div class="frm_control_group">
            <label for="" class="frm_label">当前灰度范围</label>
            <div class="frm_controls frm_vertical_pt">
                    {old_percent}%
            </div>
        </div>
        <div class="frm_control_group">
            <label for="" class="frm_label">预计全量发布时间</label>
            <div class="frm_controls frm_vertical_pt">
                    {all_gray_time_str}
            </div>
        </div>
    </div>
    <div class="frm_control_group js_gray_scale_container">
        <label for="" class="frm_label">增加灰度范围</label>
        <div class="frm_controls">
            <div class="js_gray_release_silder"></div>
            <p class="js_gray_release_silder_err frm_msg fail" style="display:none;"></p>
            <p class="frm_tips">将使用此版本的用户比例，<a href="http://kf.qq.com/faq/170829reQraq170829qqIFFb.html" target="_blank">了解更多</a></p>
        </div>
    </div>
    {/if}
</div>
</script>

<script type="text/html" id="js_gray_details_tpl">

<div class="simple_dialog_content">
    <div class="simple_preview_box">
        <h4 class="simple_preview_title">分阶段发布信息</h4>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">当前发布比例</label>
            <div class="simple_preview_value">已覆盖{info.gray_info.gray_percent}%用户</div>
        </div>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">首次发布时间</label>
            <div class="simple_preview_value">{unixFormat info.gray_info.first_gray_time 'YYYY-MM-DD'}</div>
        </div>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">最晚全量发布时间</label>
            <div class="simple_preview_value">{unixFormat info.gray_info.all_gray_time 'YYYY-MM-DD'}</div>
        </div>
    </div>
    <div class="simple_preview_box">
        <h4 class="simple_preview_title">版本信息</h4>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">版本号</label>
            <div class="simple_preview_value">{info.basic_info.version}</div>
        </div>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">开发者</label>
            <div class="simple_preview_value">{info.basic_info.nick_name}</div>
        </div>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">描述</label>
            <div class="simple_preview_value">{info.basic_info.describe}</div>
        </div>
        {if info.detail_info.check_data.item_list.length}
        {each info.detail_info.check_data.item_list as item i}
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">服务类目信息</label>
            <div class="simple_preview_value">{item.first_class}/{item.second_class} {if item.third_class} /{item.third_class}{/if} <p>{item.address}</p></div>
        </div>
        {/each}
        {/if}
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">提交审核时间</label>
            <div class="simple_preview_value">{unixFormat info.detail_info.summit_check_time 'YYYY-MM-DD'}</div>
        </div>
        <div class="simple_preview_item">
            <label class="simple_preview_label" for="">代码提交时间</label>
            <div class="simple_preview_value">{ unixFormat info.detail_info.commit_time 'YYYY-MM-DD'}</div>
        </div>

    </div>
</div>

</script>
<script type="text/javascript">
wx.cgiData = {
    is_game: '0'==4,
        data: {"develop_info":{"developer_size":29,"info_list":[{"basic_info":{"avatar":"http://wx.qlogo.cn/mmhead/Q3auHgzwzM5gJWRYfAibUYUmKotTNoZmFPuRjNhPgpibsUAln9orvFMA/0","describe":"fix 数据初始化","is_plugin_auto_update":0,"nick_name":"Hack X💛","open_id":"oxJCp5UreEGiz1wXNxHApO1rTSMo","status":0,"time":1561084631,"version":"3.2.4.dev.0","warning_api_list":[]}},{"basic_info":{"avatar":"http://wx.qlogo.cn/mmhead/QibibZSIHAnic2CBQdzFSicubiaGA1tgcFatRvWnhUuWd9Ic/0","describe":"sbc@1.5.0: git(cac45ff 3.3.0) sh(node build/build.js wx development wx188622ad824bf63b oushang)","is_plugin_auto_update":0,"nick_name":"Boltฅᶘᵒᴥᵒᶅฅฅ","open_id":"oxJCp5V3NJZMa9vxDETXQkPktO3w","status":0,"time":1562725313,"version":"3.3.0.dev","warning_api_list":[]},"is_exper":true}],"preview_info_list":[]},"experience_info":{"basic_info":{"avatar":"http://wx.qlogo.cn/mmhead/QibibZSIHAnic2CBQdzFSicubiaGA1tgcFatRvWnhUuWd9Ic/0","describe":"sbc@1.5.0: git(cac45ff 3.3.0) sh(node build/build.js wx production wx188622ad824bf63b oushang)","fail_reason":"","nick_name":"Boltฅᶘᵒᴥᵒᶅฅฅ","open_id":"oxJCp5V3NJZMa9vxDETXQkPktO3w","status":6,"time":1561632440,"version":"3.3.0","warning_api_list":[]},"qr_path":"pages/HomePage/main?id=26"},"online_info":{"basic_info":{"avatar":"http://wx.qlogo.cn/mmhead/QibibZSIHAnic2CBQdzFSicubiaGA1tgcFatRvWnhUuWd9Ic/0","describe":"sbc@1.5.0: git(cac45ff 3.3.0) sh(node build/build.js wx production wx188622ad824bf63b oushang)","nick_name":"Boltฅᶘᵒᴥᵒᶅฅฅ","open_id":"oxJCp5V3NJZMa9vxDETXQkPktO3w","time":1561703216,"version":"3.3.0","warning_api_list":[]}}},
        logo: "https://wx.qlogo.cn/mmhead/Q3auHgzwzM4jl2bHMVMzHDkIYrQSicHR7goNTIn2GicvBH0G03AibXicJQ/0",
    is_init : "true" == 'true',
    category_num : "1" * 1,
    is_boutique: "0" * 1,
    need_game_intro: "" === 'true',
    has_game_intro_checking: "" === 'true',
    b_released : "true" == 'true',
    name_status : "3",
    name_content : "欧尚客户管家",
    nick_name : "欧尚客户管家",
    currentPath: '',
    app_service_type : '0'*1,
    minigame_freeze_status:'0',
    submit_check_ban_info: {
            },
    release_ban_info: {
            },
    can_submit_check: 'true'!=='false'
};
seajs.use("code/index");
</script>

    </body>
</html>


`;

// 对象必定是以 {开头， } 结尾。其中所有出现的 {、}必然成对。
function findPlainObject(str) {
    let index = 0;
    let firstLeftIndex = 0;
    let hasFindFirstLeft = false;
    let record = 0;
    let endRight = 0;
    let isStringStart = '';
    while(index < str.length) {
        if (str[index] === '{') {
            record += 1;
            if (!hasFindFirstLeft) {
                hasFindFirstLeft = true;
                firstLeftIndex = index;
            }
        } else if (str[index] === '}'){
            record -=1;
        }

        if (hasFindFirstLeft && record === 0) {
            endRight = index;
            return {
                start:  firstLeftIndex,
                end: endRight
            }
        }
        index +=1;
    }
}

let regex = /wx.cgiData = ([\S\s]*)/;
let res = str.match(regex)[0];
let { start, end } = findPlainObject(res);
let objectString = res.slice(start, end + 1);
console.log(JSON.parse(JSON.stringify(objectString)));