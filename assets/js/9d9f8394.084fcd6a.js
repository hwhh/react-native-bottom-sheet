"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9360],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9222:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],l={id:"troubleshooting",title:"Troubleshooting",description:"Bottom Sheet troubleshooting.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/troubleshooting"},s=void 0,c={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Bottom Sheet troubleshooting.",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/react-native-bottom-sheet/troubleshooting",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting",description:"Bottom Sheet troubleshooting.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/troubleshooting"},sidebar:"packages",previous:{title:"React Navigation Integration",permalink:"/react-native-bottom-sheet/react-navigation-integration"},next:{title:"FAQ",permalink:"/react-native-bottom-sheet/faq"}},u=[{value:"Pressables / Touchables are not working on Android",id:"pressables--touchables-are-not-working-on-android",children:[],level:2},{value:"Adding horizontal FlatList or ScrollView is not working properly on Android",id:"adding-horizontal-flatlist-or-scrollview-is-not-working-properly-on-android",children:[],level:2},{value:"My component gesture interaction gets conflicted with Bottom Sheet interactions ?",id:"my-component-gesture-interaction-gets-conflicted-with-bottom-sheet-interactions-",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Native Bottom Sheet. These issues may or may not be related to React Native Bottom Sheet itself."),(0,i.kt)("h2",{id:"pressables--touchables-are-not-working-on-android"},"Pressables / Touchables are not working on Android"),(0,i.kt)("p",null,"Due to wrapping the content and handle with ",(0,i.kt)("inlineCode",{parentName:"p"},"TapGestureHandler")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"PanGestureHandler"),", any gesture interaction would not function as expected."),(0,i.kt)("p",null,"To resolve this issue, please use touchables that this library provide."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  TouchableOpacity,\n  TouchableHighlight,\n  TouchableWithoutFeedback,\n} from '@gorhom/bottom-sheet';\n")),(0,i.kt)("h2",{id:"adding-horizontal-flatlist-or-scrollview-is-not-working-properly-on-android"},"Adding horizontal FlatList or ScrollView is not working properly on Android"),(0,i.kt)("p",null,"Due to wrapping the content and handle with ",(0,i.kt)("inlineCode",{parentName:"p"},"TapGestureHandler")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"PanGestureHandler"),", any gesture interaction would not function as expected."),(0,i.kt)("p",null,"To resolve this issue, please use ",(0,i.kt)("inlineCode",{parentName:"p"},"ScrollView")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"FlatList")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," provide instead ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  ScrollView,\n  FlatList\n} from 'react-native-gesture-handler';\n")),(0,i.kt)("h2",{id:"my-component-gesture-interaction-gets-conflicted-with-bottom-sheet-interactions-"},"My component gesture interaction gets conflicted with Bottom Sheet interactions ?"),(0,i.kt)("p",null,"To avoid the gesture interaction conflict between the Bottom Sheet and its content, you will need to wrap your component with ",(0,i.kt)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { NativeViewGestureHandler } from 'react-native-gesture-handler';\n\n<NativeViewGestureHandler disallowInterruption={true}>\n   <AwesomeComponent />\n</NativeViewGestureHandler>\n")))}d.isMDXComponent=!0}}]);