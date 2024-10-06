"use strict";(self.webpackChunkstm_32_documentaion=self.webpackChunkstm_32_documentaion||[]).push([[144],{7257:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var s=i(4848),o=i(8453);const l={},r="Basics: SerialMonitor",t={id:"Basics/Serial",title:"Basics: SerialMonitor",description:'Task: Cofigure Serial Communication to print "Hello World!" with a delay of 1sec',source:"@site/docs/Basics/Serial.md",sourceDirName:"Basics",slug:"/Basics/Serial",permalink:"/stm32docs/docs/Basics/Serial",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Basics/Serial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basics: ButtonLED",permalink:"/stm32docs/docs/Basics/ButtonLED"},next:{title:"DigitalSensors",permalink:"/stm32docs/docs/IR_LED/"}},d={},c=[{value:"Step 1: Create a STM32 Project &quot;Serial&quot;",id:"step-1-create-a-stm32-project-serial",level:3},{value:"Step 2: Configure Serial Communication &amp; GPIO pins:",id:"step-2-configure-serial-communication--gpio-pins",level:3},{value:"Under <code>Categories</code> in <code>Pinout &amp; Configuration</code> Tab",id:"under-categories-in-pinout--configuration-tab",level:4},{value:"Under USART2 Mode and Configuration Tab",id:"under-usart2-mode-and-configuration-tab",level:4},{value:"Configure GPIO pins <code>PA2</code> and <code>PA3</code> as TX and RX",id:"configure-gpio-pins-pa2-and-pa3-as-tx-and-rx",level:4},{value:"GPIO Pin Details:",id:"gpio-pin-details",level:4},{value:"Step 3: Code Snippet for Serial",id:"step-3-code-snippet-for-serial",level:3},{value:"Place the following code under &#39;/* USER CODE BEGIN PV */&#39; inside the main loop:",id:"place-the-following-code-under--user-code-begin-pv--inside-the-main-loop",level:4},{value:"Place the following code under &#39;while(1)&#39; inside the main loop:",id:"place-the-following-code-under-while1-inside-the-main-loop",level:4},{value:"Step 4: Configuring the Serial Monitor",id:"step-4-configuring-the-serial-monitor",level:3},{value:"Connect the Nucleo Board to PC",id:"connect-the-nucleo-board-to-pc",level:4},{value:"Run the Code",id:"run-the-code",level:4},{value:"Console:",id:"console",level:4}];function a(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"basics-serialmonitor",children:"Basics: SerialMonitor"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'Task: Cofigure Serial Communication to print "Hello World!" with a delay of 1sec'})}),"\n",(0,s.jsx)(n.h3,{id:"step-1-create-a-stm32-project-serial",children:'Step 1: Create a STM32 Project "Serial"'}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-2-configure-serial-communication--gpio-pins",children:"Step 2: Configure Serial Communication & GPIO pins:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.h4,{id:"under-categories-in-pinout--configuration-tab",children:["Under ",(0,s.jsx)(n.code,{children:"Categories"})," in ",(0,s.jsx)(n.code,{children:"Pinout & Configuration"})," Tab"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Select Connectivity --\x3e USART2"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"under-usart2-mode-and-configuration-tab",children:"Under USART2 Mode and Configuration Tab"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Set the ",(0,s.jsx)(n.code,{children:"Baud Rate"})," in ",(0,s.jsx)(n.code,{children:"Parameter Settings"}),"\r\n(",(0,s.jsx)(n.code,{children:"115200"})," by default)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.h4,{id:"configure-gpio-pins-pa2-and-pa3-as-tx-and-rx",children:["Configure GPIO pins ",(0,s.jsx)(n.code,{children:"PA2"})," and ",(0,s.jsx)(n.code,{children:"PA3"})," as TX and RX"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Image",src:i(5501).A+"",width:"1206",height:"499"})}),"\n",(0,s.jsx)(n.h4,{id:"gpio-pin-details",children:"GPIO Pin Details:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PA2"})," as ",(0,s.jsx)(n.code,{children:"USART_TX"})," (Port A, GPIO Pin 2)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PA3"})," as ",(0,s.jsx)(n.code,{children:"USART_RX"})," (Port A, GPIO Pin 3)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"(Already configured when initialized the pheripherals in default configuration)"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-3-code-snippet-for-serial",children:"Step 3: Code Snippet for Serial"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"place-the-following-code-under--user-code-begin-pv--inside-the-main-loop",children:"Place the following code under '/* USER CODE BEGIN PV */' inside the main loop:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'uint8_t tx_buffer[] = "Hello World!\\n\\r";\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"place-the-following-code-under-while1-inside-the-main-loop",children:"Place the following code under 'while(1)' inside the main loop:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"HAL_UART_Transmit(&huart2, tx_buffer, sizeof(tx_buffer), 10);\r\nHAL_Delay(1000);\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-4-configuring-the-serial-monitor",children:"Step 4: Configuring the Serial Monitor"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"connect-the-nucleo-board-to-pc",children:"Connect the Nucleo Board to PC"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"run-the-code",children:"Run the Code"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"console",children:"Console:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.code,{children:"'Open Console'"})," button at the bottom"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Image",src:i(4543).A+"",width:"315",height:"209"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.code,{children:"'Command Shell Console'"})," option"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the prompt which opens:\r\n",(0,s.jsx)(n.img,{alt:"Image",src:i(742).A+"",width:"524",height:"554"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Select Connection type as ",(0,s.jsx)(n.code,{children:"'SerialPort'"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"'New'"})," button under Connection name"]}),"\n",(0,s.jsxs)(n.li,{children:["Another prompt opens:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Select the respective ",(0,s.jsx)(n.code,{children:"'BaudRate'"})," and ",(0,s.jsx)(n.code,{children:"'SerialPort'"})]}),"\n",(0,s.jsx)(n.li,{children:"Click Finish and Click Ok"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4543:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2-d9216587b9479b430999f642b947f89b.png"},742:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3-651e53386537e180d46172f3033d8613.png"},5501:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/serial-5f9d6bb308736852e0221145da37ce16.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var s=i(6540);const o={},l=s.createContext(o);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);