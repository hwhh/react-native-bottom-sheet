"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4786],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(n),s=r,h=c["".concat(p,".").concat(s)]||c[s]||u[s]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1176:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],i={id:"bottomsheetbackdrop",title:"BottomSheetBackdrop",description:"a pre-built BottomSheet backdrop implementation with configurable props.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetbackdrop"},p=void 0,d={unversionedId:"components/bottomsheetbackdrop",id:"components/bottomsheetbackdrop",isDocsHomePage:!1,title:"BottomSheetBackdrop",description:"a pre-built BottomSheet backdrop implementation with configurable props.",source:"@site/docs/components/bottomsheetbackdrop.md",sourceDirName:"components",slug:"/components/bottomsheetbackdrop",permalink:"/react-native-bottom-sheet/components/bottomsheetbackdrop",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/components/bottomsheetbackdrop.md",tags:[],version:"current",frontMatter:{id:"bottomsheetbackdrop",title:"BottomSheetBackdrop",description:"a pre-built BottomSheet backdrop implementation with configurable props.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetbackdrop"},sidebar:"packages",previous:{title:"BottomSheetVirtualizedList",permalink:"/react-native-bottom-sheet/components/bottomsheetvirtualizedlist"},next:{title:"BottomSheetFooter",permalink:"/react-native-bottom-sheet/components/bottomsheetfooter"}},m=[{value:"Props",id:"props",children:[{value:"<code>animatedIndex</code>",id:"animatedindex",children:[],level:3},{value:"<code>animatedPosition</code>",id:"animatedposition",children:[],level:3},{value:"<code>opacity</code>",id:"opacity",children:[],level:3},{value:"<code>appearsOnIndex</code>",id:"appearsonindex",children:[],level:3},{value:"<code>disappearsOnIndex</code>",id:"disappearsonindex",children:[],level:3},{value:"<code>enableTouchThrough</code>",id:"enabletouchthrough",children:[],level:3},{value:"<code>pressBehavior</code>",id:"pressbehavior",children:[],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A pre-built BottomSheet backdrop implementation with configurable props."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("p",null,"Inherits ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewProps")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native"),"."),(0,o.kt)("h3",{id:"animatedindex"},(0,o.kt)("inlineCode",{parentName:"h3"},"animatedIndex")),(0,o.kt)("p",null,"Current sheet position index."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Animated.SharedValue<number",">"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"YES")))),(0,o.kt)("h3",{id:"animatedposition"},(0,o.kt)("inlineCode",{parentName:"h3"},"animatedPosition")),(0,o.kt)("p",null,"Current sheet position."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Animated.SharedValue<number",">"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"YES")))),(0,o.kt)("h3",{id:"opacity"},(0,o.kt)("inlineCode",{parentName:"h3"},"opacity")),(0,o.kt)("p",null,"Backdrop opacity."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"0.5"),(0,o.kt)("td",{parentName:"tr",align:null},"NO")))),(0,o.kt)("h3",{id:"appearsonindex"},(0,o.kt)("inlineCode",{parentName:"h3"},"appearsOnIndex")),(0,o.kt)("p",null,"Snap point index when backdrop will appears on."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"NO")))),(0,o.kt)("h3",{id:"disappearsonindex"},(0,o.kt)("inlineCode",{parentName:"h3"},"disappearsOnIndex")),(0,o.kt)("p",null,"Snap point index when backdrop will disappears on."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"NO")))),(0,o.kt)("h3",{id:"enabletouchthrough"},(0,o.kt)("inlineCode",{parentName:"h3"},"enableTouchThrough")),(0,o.kt)("p",null,"Enable touch through backdrop component."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"NO")))),(0,o.kt)("h3",{id:"pressbehavior"},(0,o.kt)("inlineCode",{parentName:"h3"},"pressBehavior")),(0,o.kt)("p",null,"What should happen when user press backdrop?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),": do nothing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"close"),": close the sheet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"collapse"),": collapse the sheet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"N"),": snap point index.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"BackdropPressBehavior")," ","|"," number"),(0,o.kt)("td",{parentName:"tr",align:null},"'close'"),(0,o.kt)("td",{parentName:"tr",align:null},"NO")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useCallback, useMemo, useRef } from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\nimport BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';\n\nconst App = () => {\n  // ref\n  const bottomSheetRef = useRef<BottomSheet>(null);\n\n  // variables\n  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);\n\n  // callbacks\n  const handleSheetChanges = useCallback((index: number) => {\n    console.log('handleSheetChanges', index);\n  }, []);\n\n  // renders\n  const renderBackdrop = useCallback(\n    props => (\n      <BottomSheetBackdrop\n        {...props}\n        disappearsOnIndex={1}\n        appearsOnIndex={2}\n      />\n    ),\n    []\n  );\n  return (\n    <View style={styles.container}>\n      <BottomSheet\n        ref={bottomSheetRef}\n        index={1}\n        snapPoints={snapPoints}\n        backdropComponent={renderBackdrop}\n        onChange={handleSheetChanges}\n      >\n        <View style={styles.contentContainer}>\n          <Text>Awesome \ud83c\udf89</Text>\n        </View>\n      </BottomSheet>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n    backgroundColor: 'grey',\n  },\n  contentContainer: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n\nexport default App;\n")))}c.isMDXComponent=!0}}]);