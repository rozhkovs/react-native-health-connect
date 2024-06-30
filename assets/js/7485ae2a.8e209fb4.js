"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2,title:"Get started"},r=void 0,l={unversionedId:"get-started",id:"get-started",title:"Get started",description:"Requirements",source:"@site/docs/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/react-native-health-connect/docs/get-started",draft:!1,editUrl:"https://github.com/matinzd/react-native-health-connect/tree/main/docs/docs/get-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Get started"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/react-native-health-connect/docs/intro"},next:{title:"Permissions",permalink:"/react-native-health-connect/docs/permissions"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Expo installation",id:"expo-installation",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"Make sure you have React Native version 0.71 or higher installed to use v2 of React Native Health Connect."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.google.android.apps.healthdata&hl=en&gl=US"},"Health Connect")," needs to be installed on the user's device. Starting from Android 14 (Upside Down Cake), Health Connect is part of the Android Framework. Read more ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/health-and-fitness/guides/health-connect/develop/get-started#step-1"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"Health Connect API requires ",(0,i.kt)("inlineCode",{parentName:"li"},"minSdkVersion=26")," (Android Oreo / 8.0)."),(0,i.kt)("li",{parentName:"ul"},"If you are planning to release your app on Google Play, you will need to submit a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/forms/d/1LFjbq1MOCZySpP5eIVkoyzXTanpcGTYQH26lKcrQUJo/viewform?edit_requested=true"},"declaration form"),". Approval can take up to 7 days."),(0,i.kt)("li",{parentName:"ul"},"Approval does not grant you immediate access to Health Connect. A whitelist must propagate to the Health Connect servers, which take an additional 5-7 business days. The whitelist is updated every Monday according to Google Fit AHP support.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Health Connect does not appear on the Home screen by default. To open Health Connect, go to Settings > Apps > Health Connect, or add Health Connect to your Quick Settings menu.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Health Connect requires the user to have screen lock enabled with a PIN, pattern, or password so that the health data being stored within Health connect is protected from malicious parties while the device is locked. Please go to Settings > Security > Screen lock to set a screen lock.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install react-native-health-connect, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-health-connect\n")),(0,i.kt)("p",null,"If you are using React Native CLI template, for version 2 onwards, please add the following code into your ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity.kt")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"onCreate")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'package com.healthconnectexample\n\n+ import android.os.Bundle\nimport com.facebook.react.ReactActivity\nimport com.facebook.react.ReactActivityDelegate\nimport com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled\nimport com.facebook.react.defaults.DefaultReactActivityDelegate\n+ import dev.matinzd.healthconnect.permissions.HealthConnectPermissionDelegate\n\nclass MainActivity : ReactActivity() {\n  /**\n   * Returns the name of the main component registered from JavaScript. This is used to schedule\n   * rendering of the component.\n   */\n  override fun getMainComponentName(): String = "HealthConnectExample"\n\n+ override fun onCreate(savedInstanceState: Bundle?) {\n+   super.onCreate(savedInstanceState)\n+   // In order to handle permission contract results, we need to set the permission delegate.\n+   HealthConnectPermissionDelegate.setPermissionDelegate(this)\n+ }\n\n  /**\n   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]\n   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]\n   */\n  override fun createReactActivityDelegate(): ReactActivityDelegate =\n    DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)\n}\n\n')),(0,i.kt)("p",null,"You also need to setup permissions in your ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file. For more information, check ",(0,i.kt)("a",{parentName:"p",href:"https://matinzd.github.io/react-native-health-connect/docs/permissions"},"here"),"."),(0,i.kt)("h2",{id:"expo-installation"},"Expo installation"),(0,i.kt)("p",null,"This package cannot be used in the ",(0,i.kt)("a",{parentName:"p",href:"https://expo.io/client"},"Expo Go")," app, but it can be used with custom managed apps.\nJust add the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.io/guides/config-plugins/"},"config plugin")," to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/config/app/#plugins"},(0,i.kt)("inlineCode",{parentName:"a"},"plugins"))," array of your ",(0,i.kt)("inlineCode",{parentName:"p"},"app.json")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"app.config.js"),":"),(0,i.kt)("p",null,"First install the package with yarn, npm, or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.io/workflow/expo-cli/#expo-install"},(0,i.kt)("inlineCode",{parentName:"a"},"expo install")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install expo-health-connect expo-build-properties --save-dev\n")),(0,i.kt)("p",null,"Then add the prebuild ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.io/guides/config-plugins/"},"config plugin")," to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/config/app/#plugins"},(0,i.kt)("inlineCode",{parentName:"a"},"plugins"))," array of your ",(0,i.kt)("inlineCode",{parentName:"p"},"app.json")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"app.config.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "plugins": ["expo-health-connect"]\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Edit your app.json again and add this")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    ...\n    "plugins": [\n      [\n        "expo-build-properties",\n        {\n          "android": {\n            "compileSdkVersion": 34,\n            "targetSdkVersion": 34,\n            "minSdkVersion": 26\n          },\n        }\n      ]\n    ]\n   ...\n  }\n}\n')),(0,i.kt)("p",null,"Then rebuild the native app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"expo prebuild"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This will apply the config plugin using ",(0,i.kt)("a",{parentName:"li",href:"https://expo.fyi/prebuilding"},"prebuilding"),"."))),(0,i.kt)("li",{parentName:"ul"},"Rebuild the app",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn android")," -- Build on Android.")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If the project doesn't build correctly with ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn android"),", please file an issue and try setting the project up manually.")),(0,i.kt)("p",null,"Finally create a new EAS development build"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eas build --profile development --platform android")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"A quick example at a glance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  initialize,\n  requestPermission,\n  readRecords,\n} from 'react-native-health-connect';\n\nconst readSampleData = async () => {\n  // initialize the client\n  const isInitialized = await initialize();\n\n  // request permissions\n  const grantedPermissions = await requestPermission([\n    { accessType: 'read', recordType: 'ActiveCaloriesBurned' },\n  ]);\n\n  // check if granted\n\n  const result = await readRecords('ActiveCaloriesBurned', {\n    timeRangeFilter: {\n      operator: 'between',\n      startTime: '2023-01-09T12:00:00.405Z',\n      endTime: '2023-01-09T23:53:15.405Z',\n    },\n  });\n  // {\n  //   result: [\n  //     {\n  //       startTime: '2023-01-09T12:00:00.405Z',\n  //       endTime: '2023-01-09T23:53:15.405Z',\n  //       energy: {\n  //         inCalories: 15000000,\n  //         inJoules: 62760000.00989097,\n  //         inKilojoules: 62760.00000989097,\n  //         inKilocalories: 15000,\n  //       },\n  //       metadata: {\n  //         id: '239a8cfd-990d-42fc-bffc-c494b829e8e1',\n  //         lastModifiedTime: '2023-01-17T21:06:23.335Z',\n  //         clientRecordId: null,\n  //         dataOrigin: 'com.healthconnectexample',\n  //         clientRecordVersion: 0,\n  //         device: 0,\n  //       },\n  //     },\n  //   ],\n  // }\n};\n")))}d.isMDXComponent=!0}}]);