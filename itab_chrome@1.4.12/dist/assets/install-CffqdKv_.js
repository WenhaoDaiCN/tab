import{_ as t,C as e,e as o,t as i,c as n,d as s,f as r,n as a,g as l,h,j as d,k as p,l as u,m as f,o as g,p as c,q as y,r as m,Z as _,R as x,s as v,v as w,w as T,x as C,y as b,z as S,A as M,B as I,D,E as k,F as z,G as O,I as B,J as A,K as H,L as R,M as P,N as L,O as X,P as Y,Q as W,S as V,T as E,U as N,V as F,W as U,u as j,X as G,Y as Z,$ as Q,a0 as q,a1 as J}from"./install-DOZUvoqa.js";const K=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=o.type,t}return t(o,e),o.type="tooltip",o.dependencies=["axisPointer"],o.defaultOption={z:60,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",renderMode:"auto",confine:null,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"#fff",shadowBlur:10,shadowColor:"rgba(0, 0, 0, .2)",shadowOffsetX:1,shadowOffsetY:2,borderRadius:4,borderWidth:1,padding:null,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#666",fontSize:14}},o}(e);function $(t){var e=t.get("confine");return null!=e?!!e:"richText"===t.get("renderMode")}function tt(t){if(o.domSupported)for(var e=document.documentElement.style,i=0,n=t.length;i<n;i++)if(t[i]in e)return t[i]}var et=tt(["transform","webkitTransform","OTransform","MozTransform","msTransform"]);function ot(t,e){if(!t)return e;e=i(e,!0);var o=t.indexOf(e);return(t=-1===o?e:"-"+t.slice(0,o)+"-"+e).toLowerCase()}var it=ot(tt(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),"transition"),nt=ot(et,"transform"),st="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+(o.transform3dSupported?"will-change:transform;":"");function rt(t,e,i){var n=t.toFixed(0)+"px",s=e.toFixed(0)+"px";if(!o.transformSupported)return i?"top:"+s+";left:"+n+";":[["top",s],["left",n]];var r=o.transform3dSupported,a="translate"+(r?"3d":"")+"("+n+","+s+(r?",0":"")+")";return i?"top:0;left:0;"+nt+":"+a+";":[["top",0],["left",0],[et,a]]}function at(t,e,n){var s=[],r=t.get("transitionDuration"),a=t.get("backgroundColor"),l=t.get("shadowBlur"),h=t.get("shadowColor"),p=t.get("shadowOffsetX"),u=t.get("shadowOffsetY"),c=t.getModel("textStyle"),y=f(t,"html"),m=p+"px "+u+"px "+l+"px "+h;return s.push("box-shadow:"+m),e&&r&&s.push(function(t,e){var i="cubic-bezier(0.23,1,0.32,1)",n=" "+t/2+"s "+i,s="opacity"+n+",visibility"+n;return e||(n=" "+t+"s "+i,s+=o.transformSupported?","+nt+n:",left"+n+",top"+n),it+":"+s}(r,n)),a&&s.push("background-color:"+a),d(["width","color","radius"],(function(e){var o="border-"+e,n=i(o),r=t.get(n);null!=r&&s.push(o+":"+r+("color"===e?"":"px"))})),s.push(function(t){var e=[],o=t.get("fontSize"),i=t.getTextColor();i&&e.push("color:"+i),e.push("font:"+t.getFont()),o&&e.push("line-height:"+Math.round(3*o/2)+"px");var n=t.get("textShadowColor"),s=t.get("textShadowBlur")||0,r=t.get("textShadowOffsetX")||0,a=t.get("textShadowOffsetY")||0;return n&&s&&e.push("text-shadow:"+r+"px "+a+"px "+s+"px "+n),d(["decoration","align"],(function(o){var i=t.get(o);i&&e.push("text-"+o+":"+i)})),e.join(";")}(c)),null!=y&&s.push("padding:"+g(y).join("px ")+"px"),s.join(";")+";"}function lt(t,e,o,i,n){var s=e&&e.painter;if(o){var r=s&&s.getViewportRoot();r&&c(t,r,o,i,n)}else{t[0]=i,t[1]=n;var a=s&&s.getViewportRootOffset();a&&(t[0]+=a.offsetLeft,t[1]+=a.offsetTop)}t[2]=t[0]/e.getWidth(),t[3]=t[1]/e.getHeight()}const ht=function(){function t(t,e){if(this._show=!1,this._styleCoord=[0,0,0,0],this._enterable=!0,this._alwaysShowContent=!1,this._firstShow=!0,this._longHide=!0,o.wxa)return null;var i=document.createElement("div");i.domBelongToZr=!0,this.el=i;var l=this._zr=t.getZr(),h=e.appendTo,d=h&&(n(h)?document.querySelector(h):s(h)?h:r(h)&&h(t.getDom()));lt(this._styleCoord,l,d,t.getWidth()/2,t.getHeight()/2),(d||t.getDom()).appendChild(i),this._api=t,this._container=d;var p=this;i.onmouseenter=function(){p._enterable&&(clearTimeout(p._hideTimeout),p._show=!0),p._inContent=!0},i.onmousemove=function(t){if(t=t||window.event,!p._enterable){var e=l.handler,o=l.painter.getViewportRoot();a(o,t,!0),e.dispatch("mousemove",t)}},i.onmouseleave=function(){p._inContent=!1,p._enterable&&p._show&&p.hideLater(p._hideDelay)}}return t.prototype.update=function(t){if(!this._container){var e=this._api.getDom(),o=(s="position",(r=(n=e).currentStyle||document.defaultView&&document.defaultView.getComputedStyle(n))?s?r[s]:r:null),i=e.style;"absolute"!==i.position&&"absolute"!==o&&(i.position="relative")}var n,s,r,a=t.get("alwaysShowContent");a&&this._moveIfResized(),this._alwaysShowContent=a,this.el.className=t.get("className")||""},t.prototype.show=function(t,e){clearTimeout(this._hideTimeout),clearTimeout(this._longHideTimeout);var o=this.el,i=o.style,n=this._styleCoord;o.innerHTML?i.cssText=st+at(t,!this._firstShow,this._longHide)+rt(n[0],n[1],!0)+"border-color:"+l(e)+";"+(t.get("extraCssText")||"")+";pointer-events:"+(this._enterable?"auto":"none"):i.display="none",this._show=!0,this._firstShow=!1,this._longHide=!1},t.prototype.setContent=function(t,e,o,i,r){var a=this.el;if(null!=t){var d="";if(n(r)&&"item"===o.get("trigger")&&!$(o)&&(d=function(t,e,o){if(!n(o)||"inside"===o)return"";var i=t.get("backgroundColor"),s=t.get("borderWidth");e=l(e);var r,a,h="left"===(r=o)?"right":"right"===r?"left":"top"===r?"bottom":"top",d=Math.max(1.5*Math.round(s),6),p="",f=nt+":";u(["left","right"],h)>-1?(p+="top:50%",f+="translateY(-50%) rotate("+(a="left"===h?-225:-45)+"deg)"):(p+="left:50%",f+="translateX(-50%) rotate("+(a="top"===h?225:45)+"deg)");var g=a*Math.PI/180,c=d+s,y=c*Math.abs(Math.cos(g))+c*Math.abs(Math.sin(g)),m=e+" solid "+s+"px;";return'<div style="'+["position:absolute;width:"+d+"px;height:"+d+"px;z-index:-1;",(p+=";"+h+":-"+Math.round(100*((y-Math.SQRT2*s)/2+Math.SQRT2*s-(y-c)/2))/100+"px")+";"+f+";","border-bottom:"+m,"border-right:"+m,"background-color:"+i+";"].join("")+'"></div>'}(o,i,r)),n(t))a.innerHTML=t+d;else if(t){a.innerHTML="",h(t)||(t=[t]);for(var p=0;p<t.length;p++)s(t[p])&&t[p].parentNode!==a&&a.appendChild(t[p]);if(d&&a.childNodes.length){var f=document.createElement("div");f.innerHTML=d,a.appendChild(f)}}}else a.innerHTML=""},t.prototype.setEnterable=function(t){this._enterable=t},t.prototype.getSize=function(){var t=this.el;return[t.offsetWidth,t.offsetHeight]},t.prototype.moveTo=function(t,e){var o=this._styleCoord;if(lt(o,this._zr,this._container,t,e),null!=o[0]&&null!=o[1]){var i=this.el.style,n=rt(o[0],o[1]);d(n,(function(t){i[t[0]]=t[1]}))}},t.prototype._moveIfResized=function(){var t=this._styleCoord[2],e=this._styleCoord[3];this.moveTo(t*this._zr.getWidth(),e*this._zr.getHeight())},t.prototype.hide=function(){var t=this,e=this.el.style;e.visibility="hidden",e.opacity="0",o.transform3dSupported&&(e.willChange=""),this._show=!1,this._longHideTimeout=setTimeout((function(){return t._longHide=!0}),500)},t.prototype.hideLater=function(t){!this._show||this._inContent&&this._enterable||this._alwaysShowContent||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(p(this.hide,this),t)):this.hide())},t.prototype.isShow=function(){return this._show},t.prototype.dispose=function(){clearTimeout(this._hideTimeout),clearTimeout(this._longHideTimeout);var t=this.el.parentNode;t&&t.removeChild(this.el),this.el=this._container=null},t}();var dt=function(){function t(t){this._show=!1,this._styleCoord=[0,0,0,0],this._alwaysShowContent=!1,this._enterable=!0,this._zr=t.getZr(),ft(this._styleCoord,this._zr,t.getWidth()/2,t.getHeight()/2)}return t.prototype.update=function(t){var e=t.get("alwaysShowContent");e&&this._moveIfResized(),this._alwaysShowContent=e},t.prototype.show=function(){this._hideTimeout&&clearTimeout(this._hideTimeout),this.el.show(),this._show=!0},t.prototype.setContent=function(t,e,o,i,n){var s=this;y(t)&&m(""),this.el&&this._zr.remove(this.el);var r=o.getModel("textStyle");this.el=new _({style:{rich:e.richTextStyles,text:t,lineHeight:22,borderWidth:1,borderColor:i,textShadowColor:r.get("textShadowColor"),fill:o.get(["textStyle","color"]),padding:f(o,"richText"),verticalAlign:"top",align:"left"},z:o.get("z")}),d(["backgroundColor","borderRadius","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"],(function(t){s.el.style[t]=o.get(t)})),d(["textShadowBlur","textShadowOffsetX","textShadowOffsetY"],(function(t){s.el.style[t]=r.get(t)||0})),this._zr.add(this.el);var a=this;this.el.on("mouseover",(function(){a._enterable&&(clearTimeout(a._hideTimeout),a._show=!0),a._inContent=!0})),this.el.on("mouseout",(function(){a._enterable&&a._show&&a.hideLater(a._hideDelay),a._inContent=!1}))},t.prototype.setEnterable=function(t){this._enterable=t},t.prototype.getSize=function(){var t=this.el,e=this.el.getBoundingRect(),o=ut(t.style);return[e.width+o.left+o.right,e.height+o.top+o.bottom]},t.prototype.moveTo=function(t,e){var o=this.el;if(o){var i=this._styleCoord;ft(i,this._zr,t,e),t=i[0],e=i[1];var n=o.style,s=pt(n.borderWidth||0),r=ut(n);o.x=t+s+r.left,o.y=e+s+r.top,o.markRedraw()}},t.prototype._moveIfResized=function(){var t=this._styleCoord[2],e=this._styleCoord[3];this.moveTo(t*this._zr.getWidth(),e*this._zr.getHeight())},t.prototype.hide=function(){this.el&&this.el.hide(),this._show=!1},t.prototype.hideLater=function(t){!this._show||this._inContent&&this._enterable||this._alwaysShowContent||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(p(this.hide,this),t)):this.hide())},t.prototype.isShow=function(){return this._show},t.prototype.dispose=function(){this._zr.remove(this.el)},t}();function pt(t){return Math.max(0,t)}function ut(t){var e=pt(t.shadowBlur||0),o=pt(t.shadowOffsetX||0),i=pt(t.shadowOffsetY||0);return{left:pt(e-o),right:pt(e+o),top:pt(e-i),bottom:pt(e+i)}}function ft(t,e,o,i){t[0]=o,t[1]=i,t[2]=t[0]/e.getWidth(),t[3]=t[1]/e.getHeight()}var gt=new x({shape:{x:-1,y:-1,width:2,height:2}});function ct(t,e,o){var i,s=e.ecModel;o?(i=new E(o,s,s),i=new E(e.option,i,s)):i=e;for(var r=t.length-1;r>=0;r--){var a=t[r];a&&(a instanceof E&&(a=a.get("tooltip",!0)),n(a)&&(a={formatter:a}),a&&(i=new E(a,i,s)))}return i}function yt(t,e){return t.dispatchAction||p(e.dispatchAction,e)}function mt(t){return"center"===t||"middle"===t}const _t=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=i.type,t}return t(i,e),i.prototype.init=function(t,e){if(!o.node&&e.getDom()){var i=t.getComponent("tooltip"),n=this._renderMode=v(i.get("renderMode"));this._tooltipContent="richText"===n?new dt(e):new ht(e,{appendTo:i.get("appendToBody",!0)?"body":i.get("appendTo",!0)})}},i.prototype.render=function(t,e,i){if(!o.node&&i.getDom()){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=i;var n=this._tooltipContent;n.update(t),n.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow(),"richText"!==this._renderMode&&t.get("transitionDuration")?w(this,"_updatePosition",50,"fixRate"):T(this,"_updatePosition")}},i.prototype._initGlobalListener=function(){var t=this._tooltipModel.get("triggerOn");C("itemTooltip",this._api,p((function(e,o,i){"none"!==t&&(t.indexOf(e)>=0?this._tryShow(o,i):"leave"===e&&this._hide(i))}),this))},i.prototype._keepShow=function(){var t=this._tooltipModel,e=this._ecModel,o=this._api,i=t.get("triggerOn");if(null!=this._lastX&&null!=this._lastY&&"none"!==i&&"click"!==i){var n=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout((function(){!o.isDisposed()&&n.manuallyShowTip(t,e,o,{x:n._lastX,y:n._lastY,dataByCoordSys:n._lastDataByCoordSys})}))}},i.prototype.manuallyShowTip=function(t,e,i,n){if(n.from!==this.uid&&!o.node&&i.getDom()){var s=yt(n,i);this._ticket="";var r=n.dataByCoordSys,a=function(t,e,o){var i=N(t).queryOptionMap,n=i.keys()[0];if(!n||"series"===n)return;var s=F(e,n,i.get(n),{useDefault:!1,enableAll:!1,enableNone:!1}),r=s.models[0];if(!r)return;var a,l=o.getViewOfComponentModel(r);if(l.group.traverse((function(e){var o=b(e).tooltipConfig;if(o&&o.name===t.name)return a=e,!0})),a)return{componentMainType:n,componentIndex:r.componentIndex,el:a}}(n,e,i);if(a){var l=a.el.getBoundingRect().clone();l.applyTransform(a.el.transform),this._tryShow({offsetX:l.x+l.width/2,offsetY:l.y+l.height/2,target:a.el,position:n.position,positionDefault:"bottom"},s)}else if(n.tooltip&&null!=n.x&&null!=n.y){var h=gt;h.x=n.x,h.y=n.y,h.update(),b(h).tooltipConfig={name:null,option:n.tooltip},this._tryShow({offsetX:n.x,offsetY:n.y,target:h},s)}else if(r)this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,dataByCoordSys:r,tooltipOption:n.tooltipOption},s);else if(null!=n.seriesIndex){if(this._manuallyAxisShowTip(t,e,i,n))return;var d=S(n,e),p=d.point[0],u=d.point[1];null!=p&&null!=u&&this._tryShow({offsetX:p,offsetY:u,target:d.el,position:n.position,positionDefault:"bottom"},s)}else null!=n.x&&null!=n.y&&(i.dispatchAction({type:"updateAxisPointer",x:n.x,y:n.y}),this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,target:i.getZr().findHover(n.x,n.y).target},s))}},i.prototype.manuallyHideTip=function(t,e,o,i){var n=this._tooltipContent;this._tooltipModel&&n.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=this._lastDataByCoordSys=null,i.from!==this.uid&&this._hide(yt(i,o))},i.prototype._manuallyAxisShowTip=function(t,e,o,i){var n=i.seriesIndex,s=i.dataIndex,r=e.getComponent("axisPointer").coordSysAxesInfo;if(null!=n&&null!=s&&null!=r){var a=e.getSeriesByIndex(n);if(a)if("axis"===ct([a.getData().getItemModel(s),a,(a.coordinateSystem||{}).model],this._tooltipModel).get("trigger"))return o.dispatchAction({type:"updateAxisPointer",seriesIndex:n,dataIndex:s,position:i.position}),!0}},i.prototype._tryShow=function(t,e){var o=t.target;if(this._tooltipModel){this._lastX=t.offsetX,this._lastY=t.offsetY;var i=t.dataByCoordSys;if(i&&i.length)this._showAxisTooltip(i,t);else if(o){var n,s;if("legend"===b(o).ssrType)return;this._lastDataByCoordSys=null,M(o,(function(t){return null!=b(t).dataIndex?(n=t,!0):null!=b(t).tooltipConfig?(s=t,!0):void 0}),!0),n?this._showSeriesItemTooltip(t,n,e):s?this._showComponentItemTooltip(t,s,e):this._hide(e)}else this._lastDataByCoordSys=null,this._hide(e)}},i.prototype._showOrMove=function(t,e){var o=t.get("showDelay");e=p(e,this),clearTimeout(this._showTimout),o>0?this._showTimout=setTimeout(e,o):e()},i.prototype._showAxisTooltip=function(t,e){var o=this._ecModel,i=this._tooltipModel,n=[e.offsetX,e.offsetY],s=ct([e.tooltipOption],i),r=this._renderMode,a=[],h=I("section",{blocks:[],noHeader:!0}),p=[],u=new U;d(t,(function(t){d(t.dataByAxis,(function(t){var e=o.getComponent(t.axisDim+"Axis",t.axisIndex),n=t.value;if(e&&null!=n){var s=D(n,e.axis,o,t.seriesDataIndices,t.valueLabelOpt),f=I("section",{header:s,noHeader:!k(s),sortBlocks:!0,blocks:[]});h.blocks.push(f),d(t.seriesDataIndices,(function(h){var d=o.getSeriesByIndex(h.seriesIndex),g=h.dataIndexInside,c=d.getDataParams(g);if(!(c.dataIndex<0)){c.axisDim=t.axisDim,c.axisIndex=t.axisIndex,c.axisType=t.axisType,c.axisId=t.axisId,c.axisValue=z(e.axis,{value:n}),c.axisValueLabel=s,c.marker=u.makeTooltipMarker("item",l(c.color),r);var y=O(d.formatTooltip(g,!0,null)),m=y.frag;if(m){var _=ct([d],i).get("valueFormatter");f.blocks.push(_?B({valueFormatter:_},m):m)}y.text&&p.push(y.text),a.push(c)}}))}}))})),h.blocks.reverse(),p.reverse();var f=e.position,g=s.get("order"),c=A(h,u,r,g,o.get("useUTC"),s.get("textStyle"));c&&p.unshift(c);var y="richText"===r?"\n\n":"<br/>",m=p.join(y);this._showOrMove(s,(function(){this._updateContentNotChangedOnAxis(t,a)?this._updatePosition(s,f,n[0],n[1],this._tooltipContent,a):this._showTooltipContent(s,m,a,Math.random()+"",n[0],n[1],f,null,u)}))},i.prototype._showSeriesItemTooltip=function(t,e,o){var i=this._ecModel,n=b(e),s=n.seriesIndex,r=i.getSeriesByIndex(s),a=n.dataModel||r,h=n.dataIndex,d=n.dataType,p=a.getData(d),u=this._renderMode,f=t.positionDefault,g=ct([p.getItemModel(h),a,r&&(r.coordinateSystem||{}).model],this._tooltipModel,f?{position:f}:null),c=g.get("trigger");if(null==c||"item"===c){var y=a.getDataParams(h,d),m=new U;y.marker=m.makeTooltipMarker("item",l(y.color),u);var _=O(a.formatTooltip(h,!1,d)),x=g.get("order"),v=g.get("valueFormatter"),w=_.frag,T=w?A(v?B({valueFormatter:v},w):w,m,u,x,i.get("useUTC"),g.get("textStyle")):_.text,C="item_"+a.name+"_"+h;this._showOrMove(g,(function(){this._showTooltipContent(g,T,y,C,t.offsetX,t.offsetY,t.position,t.target,m)})),o({type:"showTip",dataIndexInside:h,dataIndex:p.getRawIndex(h),seriesIndex:s,from:this.uid})}},i.prototype._showComponentItemTooltip=function(t,e,o){var i="html"===this._renderMode,s=b(e),r=s.tooltipConfig.option||{},a=r.encodeHTMLContent;if(n(r)){r={content:r,formatter:r},a=!0}a&&i&&r.content&&((r=H(r)).content=R(r.content));var l=[r],h=this._ecModel.getComponent(s.componentMainType,s.componentIndex);h&&l.push(h),l.push({formatter:r.content});var d=t.positionDefault,p=ct(l,this._tooltipModel,d?{position:d}:null),u=p.get("content"),f=Math.random()+"",g=new U;this._showOrMove(p,(function(){var o=H(p.get("formatterParams")||{});this._showTooltipContent(p,u,o,f,t.offsetX,t.offsetY,t.position,e,g)})),o({type:"showTip",from:this.uid})},i.prototype._showTooltipContent=function(t,e,o,i,s,a,l,d,u){if(this._ticket="",t.get("showContent")&&t.get("show")){var f=this._tooltipContent;f.setEnterable(t.get("enterable"));var g=t.get("formatter");l=l||t.get("position");var c=e,y=this._getNearestPoint([s,a],o,t.get("trigger"),t.get("borderColor")).color;if(g)if(n(g)){var m=t.ecModel.get("useUTC"),_=h(o)?o[0]:o;c=g,_&&_.axisType&&_.axisType.indexOf("time")>=0&&(c=P(_.axisValue,c,m)),c=L(c,o,!0)}else if(r(g)){var x=p((function(e,i){e===this._ticket&&(f.setContent(i,u,t,y,l),this._updatePosition(t,l,s,a,f,o,d))}),this);this._ticket=i,c=g(o,i,x)}else c=g;f.setContent(c,u,t,y,l),f.show(t,y),this._updatePosition(t,l,s,a,f,o,d)}},i.prototype._getNearestPoint=function(t,e,o,i){return"axis"===o||h(e)?{color:i||("html"===this._renderMode?"#fff":"none")}:h(e)?void 0:{color:i||e.color||e.borderColor}},i.prototype._updatePosition=function(t,e,o,i,s,a,l){var d=this._api.getWidth(),p=this._api.getHeight();e=e||t.get("position");var u=s.getSize(),f=t.get("align"),g=t.get("verticalAlign"),c=l&&l.getBoundingRect().clone();if(l&&c.applyTransform(l.transform),r(e)&&(e=e([o,i],a,s.el,c,{viewSize:[d,p],contentSize:u.slice()})),h(e))o=X(e[0],d),i=X(e[1],p);else if(y(e)){var m=e;m.width=u[0],m.height=u[1];var _=Y(m,{width:d,height:p});o=_.x,i=_.y,f=null,g=null}else if(n(e)&&l){var x=function(t,e,o,i){var n=o[0],s=o[1],r=Math.ceil(Math.SQRT2*i)+8,a=0,l=0,h=e.width,d=e.height;switch(t){case"inside":a=e.x+h/2-n/2,l=e.y+d/2-s/2;break;case"top":a=e.x+h/2-n/2,l=e.y-s-r;break;case"bottom":a=e.x+h/2-n/2,l=e.y+d+r;break;case"left":a=e.x-n-r,l=e.y+d/2-s/2;break;case"right":a=e.x+h+r,l=e.y+d/2-s/2}return[a,l]}(e,c,u,t.get("borderWidth"));o=x[0],i=x[1]}else{x=function(t,e,o,i,n,s,r){var a=o.getSize(),l=a[0],h=a[1];null!=s&&(t+l+s+2>i?t-=l+s:t+=s);null!=r&&(e+h+r>n?e-=h+r:e+=r);return[t,e]}(o,i,s,d,p,f?null:20,g?null:20);o=x[0],i=x[1]}if(f&&(o-=mt(f)?u[0]/2:"right"===f?u[0]:0),g&&(i-=mt(g)?u[1]/2:"bottom"===g?u[1]:0),$(t)){x=function(t,e,o,i,n){var s=o.getSize(),r=s[0],a=s[1];return t=Math.min(t+r,i)-r,e=Math.min(e+a,n)-a,t=Math.max(t,0),e=Math.max(e,0),[t,e]}(o,i,s,d,p);o=x[0],i=x[1]}s.moveTo(o,i)},i.prototype._updateContentNotChangedOnAxis=function(t,e){var o=this._lastDataByCoordSys,i=this._cbParamsList,n=!!o&&o.length===t.length;return n&&d(o,(function(o,s){var r=o.dataByAxis||[],a=(t[s]||{}).dataByAxis||[];(n=n&&r.length===a.length)&&d(r,(function(t,o){var s=a[o]||{},r=t.seriesDataIndices||[],l=s.seriesDataIndices||[];(n=n&&t.value===s.value&&t.axisType===s.axisType&&t.axisId===s.axisId&&r.length===l.length)&&d(r,(function(t,e){var o=l[e];n=n&&t.seriesIndex===o.seriesIndex&&t.dataIndex===o.dataIndex})),i&&d(t.seriesDataIndices,(function(t){var o=t.seriesIndex,s=e[o],r=i[o];s&&r&&r.data!==s.data&&(n=!1)}))}))})),this._lastDataByCoordSys=t,this._cbParamsList=e,!!n},i.prototype._hide=function(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid})},i.prototype.dispose=function(t,e){!o.node&&e.getDom()&&(T(this,"_updatePosition"),this._tooltipContent.dispose(),W("itemTooltip",e))},i.type="tooltip",i}(V);function xt(t){j(G),t.registerComponentModel(K),t.registerComponentView(_t),t.registerAction({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},Z),t.registerAction({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},Z)}var vt=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=o.type,t.layoutMode={type:"box",ignoreSize:!0},t}return t(o,e),o.type="title",o.defaultOption={z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bold",color:"#464646"},subtextStyle:{fontSize:12,color:"#6E7079"}},o}(e),wt=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=o.type,t}return t(o,e),o.prototype.render=function(t,e,o){if(this.group.removeAll(),t.get("show")){var i=this.group,n=t.getModel("textStyle"),s=t.getModel("subtextStyle"),r=t.get("textAlign"),a=Q(t.get("textBaseline"),t.get("textVerticalAlign")),l=new _({style:q(n,{text:t.get("text"),fill:n.getTextColor()},{disableBox:!0}),z2:10}),h=l.getBoundingRect(),d=t.get("subtext"),p=new _({style:q(s,{text:d,fill:s.getTextColor(),y:h.height+t.get("itemGap"),verticalAlign:"top"},{disableBox:!0}),z2:10}),u=t.get("link"),f=t.get("sublink"),g=t.get("triggerEvent",!0);l.silent=!u&&!g,p.silent=!f&&!g,u&&l.on("click",(function(){J(u,"_"+t.get("target"))})),f&&p.on("click",(function(){J(f,"_"+t.get("subtarget"))})),b(l).eventData=b(p).eventData=g?{componentType:"title",componentIndex:t.componentIndex}:null,i.add(l),d&&i.add(p);var c=i.getBoundingRect(),y=t.getBoxLayoutParams();y.width=c.width,y.height=c.height;var m=Y(y,{width:o.getWidth(),height:o.getHeight()},t.get("padding"));r||("middle"===(r=t.get("left")||t.get("right"))&&(r="center"),"right"===r?m.x+=m.width:"center"===r&&(m.x+=m.width/2)),a||("center"===(a=t.get("top")||t.get("bottom"))&&(a="middle"),"bottom"===a?m.y+=m.height:"middle"===a&&(m.y+=m.height/2),a=a||"top"),i.x=m.x,i.y=m.y,i.markRedraw();var v={align:r,verticalAlign:a};l.setStyle(v),p.setStyle(v),c=i.getBoundingRect();var w=m.margin,T=t.getItemStyle(["color","opacity"]);T.fill=t.get("backgroundColor");var C=new x({shape:{x:c.x-w[3],y:c.y-w[0],width:c.width+w[1]+w[3],height:c.height+w[0]+w[2],r:t.get("borderRadius")},style:T,subPixelOptimize:!0,silent:!0});i.add(C)}},o.type="title",o}(V);function Tt(t){t.registerComponentModel(vt),t.registerComponentView(wt)}export{xt as a,Tt as i};
