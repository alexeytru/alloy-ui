YUI.add("aui-button-item-deprecated",function(e,t){var n=e.Lang,r=n.isString,i=e.getClassName,t="buttonitem",s="boundingBox",o="button",u="contentBox",a=".",f="handler",l="icon",c="iconNode",h="label",p="labelNode",d="only",v="reset",m="state",g="submit",y="title",b="type",w=i(t),E=i(t,l),S=i(t,h),x=i(t,l,h),T=i(t,l,d),N=i(t,h,d),C=i(l),k=new RegExp(C+"-([a-zA-Z0-9-]+)"),L='<button type="{0}"></button>',A='<span class="'+[E,C].join(" ")+'"></span>',O='<span class="'+S+'"></span>',M=e.Component.create({NAME:t,AUGMENTS:[e.WidgetChild],ATTRS:{activeState:{value:!1},classNames:{},defaultState:{},handler:{lazyAdd:!1,value:null},hoverState:{},icon:{value:""},iconNode:{valueFn:function(){return e.Node.create(A)}},id:{valueFn:function(){return e.guid()}},label:{value:""},labelNode:{valueFn:function(){return e.Node.create(O)}},title:{setter:"_setTitle",value:!1},type:{validator:function(e){return e===o||e===g||e===v},value:o}},HTML_PARSER:{iconNode:function(e){return e.one(a+E)},labelNode:function(e){return e.one(a+S)},icon:function(e){var t=e.one(a+E);if(t){this.set(c,t);var n=t.attr("class"),r=n.match(k);return r&&r[1]}},label:function(e){var t=e.one(a+S);if(t)return this.set(p,t),t.text()}},constructor:function(e){var t=this,i="button";e&&(r(e)?e={icon:e}:e.type&&(i=e.type)),t.BOUNDING_TEMPLATE=n.sub(L,[i]),M.superclass.constructor.call(t,e)},UI_ATTRS:[f,l,h,y,b],prototype:{BOUNDING_TEMPLATE:L,CONTENT_TEMPLATE:null,renderUI:function(){var e=this;e._renderStates(),e._renderIconNode(),e._renderLabelNode()},syncUI:function(){var e=this,t=e.get("icon"),n=e.get("label"),r=e.get("title");t&&e._uiSetIcon(t),n&&e._uiSetLabel(n),r&&e._uiSetTitle(r)},_renderIconNode:function(){var e=this;e.get(u).append(e.get(c))},_renderLabelNode:function(){var e=this;e.get(u).append(e.get(p))},_getState:function(e,t){var r=this,i=r.get(e),s=i;return t&&(i=t.get(e),n.isUndefined(i)||(s=i)),s},_renderStates:function(t){var n=this,r=n.get("parent"),i=n._getState("activeState",r),s=n._getState("classNames",r),o=n._getState("defaultState",r),u=n._getState("hoverState",r);n.plug(e.Plugin.StateInteraction,{activeState:i,classNames:s,defaultState:o,hoverState:u})},_setTitle:function(e){var t=this;return e===null?e=t.get("label"):e===!1&&(e=""),String(e)},_syncChildrenStates:function(){var e=this,t=e.get("icon"),n=e.get("label"),r=t&&n,i=!t&&n,o=t&&!n,u=e.get(s);u.toggleClass(x,r),u.toggleClass(T,o),u.toggleClass(N,i)},_uiSetDisabled:function(t){var n=this,r=n.get(s);t?r.attr("disabled","disabled"):r.removeAttribute("disabled"),e.ButtonItem.superclass._uiSetDisabled.apply(n,arguments)},_uiSetHandler:function(t){var r=this,i=t,s=r.get("parent"),o=s&&s._DEFAULT_CONTEXT||r._DEFAULT_CONTEXT||r,u="click",a=r,f;if(n.isObject(i)){var l=i;i=l.fn||i,o=l.context||o,u=l.type||u,f=l.args}if(n.isFunction(i)){var c=r._interactionHandle;c&&c.detach();var h=e.rbind.apply(e,[i,o,a].concat(f||[]));r._interactionHandle=r.on(u,function(){r.get("disabled")||h.apply(this,arguments)})}},_uiSetIcon:function(e){var t=this,n=t.get(c),r="show";e||(r="hide"),e=i(l,e),n.replaceClass(t._iconPrevVal,e),n[r](),t._syncChildrenStates(),t._iconPrevVal=e},_uiSetLabel:function(e){var t=this,n=t.get(p),r="show";e||(r="hide"),n.text(e),n[r](),t._syncChildrenStates()},_uiSetTitle:function(e){var t=this,n=t.get(s);n.setAttribute(y,e)},_uiSetType:function(e){var t=this,n=t.get(s);n.setAttribute(b,e)}}});e.ButtonItem=M},"3.0.3-deprecated.35",{requires:["aui-base-deprecated","aui-state-interaction-deprecated","widget-child"],skinnable:!0});
