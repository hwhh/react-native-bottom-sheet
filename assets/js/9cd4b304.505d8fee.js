"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5579],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return p}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=m(o),p=r,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var m=2;m<i;m++)s[m]=o[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2388:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var n=o(3117),r=o(102),i=(o(7294),o(3905)),s=["components"],a={id:"hooks",title:"Hooks",description:"Bottom Sheet modal hooks.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/modal/hooks"},l=void 0,m={unversionedId:"modal/hooks",id:"version-2/modal/hooks",isDocsHomePage:!1,title:"Hooks",description:"Bottom Sheet modal hooks.",source:"@site/versioned_docs/version-2/modal/hooks.md",sourceDirName:"modal",slug:"/modal/hooks",permalink:"/react-native-bottom-sheet/v2/modal/hooks",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/versioned_docs/version-2/modal/hooks.md",tags:[],version:"2",frontMatter:{id:"hooks",title:"Hooks",description:"Bottom Sheet modal hooks.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/modal/hooks"},sidebar:"version-2/packages",previous:{title:"Methods",permalink:"/react-native-bottom-sheet/v2/modal/methods"}},c=[{value:"<code>useBottomSheetModal</code>",id:"usebottomsheetmodal",children:[],level:2},{value:"<code>dismiss</code>",id:"dismiss",children:[],level:2},{value:"<code>dismissAll</code>",id:"dismissall",children:[],level:2}],d={toc:c};function u(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usebottomsheetmodal"},(0,i.kt)("inlineCode",{parentName:"h2"},"useBottomSheetModal")),(0,i.kt)("p",null,"This hook provides modal functionalities only, for sheet functionalities please look at ",(0,i.kt)("a",{parentName:"p",href:"../hooks"},"Bottom Sheet Hooks"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This hook works at any component in ",(0,i.kt)("inlineCode",{parentName:"p"},"BottomSheetModalProvider"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { View, Button } from 'react-native';\nimport { useBottomSheetModal } from '@gorhom/bottom-sheet';\n\nconst SheetContent = () => {\n  const { dismiss, dismissAll } = useBottomSheetModal();\n\n  return (\n    <View>\n      <Button onPress={dismiss}>\n    </View>\n  )\n}\n")),(0,i.kt)("h2",{id:"dismiss"},(0,i.kt)("inlineCode",{parentName:"h2"},"dismiss")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type dismiss = (key: string) => void;\n")),(0,i.kt)("p",null,"Dismiss a modal by its name/key."),(0,i.kt)("h2",{id:"dismissall"},(0,i.kt)("inlineCode",{parentName:"h2"},"dismissAll")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type dismissAll = () => void;\n")),(0,i.kt)("p",null,"Dismiss all mounted/presented modals."))}u.isMDXComponent=!0}}]);