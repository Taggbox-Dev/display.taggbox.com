(this["webpackJsonpwc-taggbox"]=this["webpackJsonpwc-taggbox"]||[]).push([[3],{1628:function(e,a,t){"use strict";t.r(a);var l=t(2),n=t(3),i=t(5),o=t(4),r=t(0),d=t.n(r),c=t(77),s=t(90),m=t.n(s),u=t(68),w=t(97),p=t(91),g=t(9),k=t(7),b=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={id:e.props.activeData.id},e.onZoomStyleLoad=function(){var a=e.state.mediaClass,t=e.props.newApi;e.setState({fade:"fade-in"}),setTimeout((function(){"makeBgImg"===a&&e.setState({mediaClass:"".concat(a," ").concat(21==t.wall.Personalization.signageTheme?" zoom2x":"")})}),3e3)},e.addNetwork=function(e){var a=document.querySelector(".scrlBarComan");a&&a.setAttribute("data-network",e)},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props,t=a.mediaClass,l=a.activeData;this.setState({mediaClass:t,id:l.id},(function(){return e.onZoomStyleLoad()}))}},{key:"componentDidUpdate",value:function(e,a){var t=this;if(e.activeData.id!==a.id){var l=e.mediaClass,n=e.activeData;this.setState({mediaClass:l,id:n.id,fade:"",active:""},(function(){return t.onZoomStyleLoad()}))}}},{key:"render",value:function(){var e=this.props,a=e.activeData,t=e.typeClass,l=e.blurStyle,n=e.blurClass,i=e.columnLeftClass,o=e.columnRightClass,r=e.newApi,s=e.getVideoDuration,b=e.getVideoProgressDuration,f=(e.activeIndex,e.active),y=e.updateNewImage,v=this.state.mediaClass,h=Object(k.n)(a.networkId,r.webFilters);return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{id:'"postId'.concat(a.id),className:"feedId".concat(a.feedId," postItem item ").concat(t," flatCard animated in autoBold appliedchLimit ").concat(f)},37==r.wall.Personalization.signageTheme?d.a.createElement("div",{className:"blur-bg tb_slide_bg_color__",style:g.u?{}:{backgroundColor:0===r.wall.ThemeRule.transparent?""==r.wall.ThemeRule.backgroundColor?h.color:r.wall.ThemeRule.backgroundColor:h.color}}):null,21==r.wall.Personalization.signageTheme?d.a.createElement("div",{className:"blur-bg tb_slide_bg_img_full__",style:l}):null,d.a.createElement("div",{className:"post"},d.a.createElement("div",{className:i,style:2===a.networkId||18===a.networkId?{textAlign:"center"}:{}},(2===a.type||4===a.type)&&a.file&&d.a.createElement(d.a.Fragment,null,(2===a.networkId||18===a.networkId)&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"blur-bg tb_slide_bg_img__ ".concat(n),style:l}),d.a.createElement("img",{src:a.postFileNew,className:v,"data-link":a.link,"data-load":"0","data-network":a.networkId,"data-postid":a.id,"data-wall-id":r.wall.Wall.id,"data-item-id":a.id,"data-tb":r.wall.UserDetail.db_table,"data-stories":a.stories,"data-filter-id":a.filterId,onLoad:y,onError:function(e){return Object(k.d)(e)}})),2!==a.networkId&&18!==a.networkId&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"blur-bg tb_slide_bg_img__ ".concat(n),style:l}),d.a.createElement("div",{className:v,style:{backgroundImage:"url(".concat(a.postFileNew,")")}},a.embed))),(3===a.type||5===a.type)&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"blur-bg tb_slide_bg_img_vid__ ".concat(n),style:l}),d.a.createElement("div",{className:v,style:l},(3===a.type||5===a.type)&&d.a.createElement(d.a.Fragment,null,a.link&&(a.link.indexOf("youtube")>=0||a.link.indexOf("youtu.be")>=0)&&d.a.createElement(m.a,{url:"".concat(a.mediaUrl),height:"100%",width:"100%",controls:!0,allowFullScreen:!0,onProgress:b,onDuration:s,playing:!0,muted:!0,config:{file:{attributes:{autoPlay:!0,muted:!0}}}}),a.link&&a.link.indexOf("vimeo")>=0&&d.a.createElement(m.a,{url:"".concat(a.mediaUrl),height:"100%",width:"100%",controls:!0,allowFullScreen:!0,onProgress:b,onDuration:s,playing:!0,muted:!0,config:{file:{attributes:{autoPlay:!0,muted:!1}}}}),a.link&&a.link.indexOf("soundcloud")>=0&&d.a.createElement(c.a,{allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(a.mediaUrl),allowFullScreen:"true",style:{width:"100%!important"}}),a.link&&a.networkId&&30==a.networkId&&a.link.indexOf("vk")>=0&&d.a.createElement(c.a,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(a.mediaUrl,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":a.filterId,"data-stories":a.stories,"data-type":"video","data-network":a.networkId,"data-link":a.link,"data-activeData-id":a.id,"data-load":0}),(a.link||29==a.networkId)&&(a.mediaUrl.indexOf("onsiteupload/video")>=0||a.link.indexOf("linkedin")>=0||a.link.indexOf("twitter")>=0||a.link.indexOf("tumblr")>=0||a.link.indexOf("facebook")>=0||a.link.indexOf("instagram")>=0)&&d.a.createElement("video",{onDuration:s,onProgress:b,src:"".concat(a.mediaUrl),autoPlay:!0,muted:!0,onError:function(e){Object(k.e)(e)},"data-type":"video","data-stories":a.stories,"data-network":a.networkId,"data-filter-id":a.filterId,"data-postid":a.id,"data-link":a.link,"data-load":0,"data-tb":r.wall.UserDetail.db_table,"data-wall-id":r.wall.Wall.id,"data-item-id":a.id}))))),d.a.createElement("div",{className:o},d.a.createElement("div",{className:"postContentCard",style:{backgroundColor:r.wall.ThemeRule.cardColor}},d.a.createElement("div",{className:"postContentClasic"},null!=h.name?20===h.id||1===r.wall.ThemeRule.iconType&&21==r.wall.Personalization.signageTheme?d.a.createElement("div",{className:"postNetwork","data-network":h.name,"data-network-color":h.color},d.a.createElement("a",{target:"_blank"},d.a.createElement("i",{className:20==h.id?"tb_icon fa ".concat(h.icon):"fa ".concat(h.icon),style:{color:1==r.wall.ThemeRule.iconType?r.wall.ThemeRule.iconColor:null,fontSize:"50px"}}))):d.a.createElement("div",{className:"postNetwork"},d.a.createElement("img",{src:"".concat(g.c,"/network/").concat(a.networkId,".png")})):d.a.createElement(u.a,{network:h,font:r.wall.ThemeRule}),d.a.createElement(p.a,{item:a,newApi:r,personalization:r.wall.Personalization,themeRule:r.wall.ThemeRule,network:h,signageTheme:r.wall.Personalization.signageTheme,ownerID:r.wall.Wall.owner}),d.a.createElement("h4",null,d.a.createElement(w.a,{item:a,personalization:r.wall.Personalization,font:r.wall.ThemeRule,backgroundColor:h.color,network:h}))))))))}}]),t}(r.Component);a.default=b}}]);
//# sourceMappingURL=3.d1886774.chunk.js.map