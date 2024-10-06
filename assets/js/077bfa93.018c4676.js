"use strict";(self.webpackChunkstm_32_documentaion=self.webpackChunkstm_32_documentaion||[]).push([[728],{7460:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=n(4848),t=n(8453);const i={},o="ServoMotor",l={id:"ServoMotor/ServoMotor",title:"ServoMotor",description:"Docs",source:"@site/docs/ServoMotor/ServoMotor.md",sourceDirName:"ServoMotor",slug:"/ServoMotor/",permalink:"/stm32docs/docs/ServoMotor/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ServoMotor/ServoMotor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PWM",permalink:"/stm32docs/docs/PWM_LED/"},next:{title:"Code",permalink:"/stm32docs/docs/ServoMotor/Code"}},c={},h=[{value:"Specifications:",id:"specifications",level:2},{value:"Circuit Diagram",id:"circuit-diagram",level:2},{value:"Theory",id:"theory",level:2},{value:"Setting the Pulse Value:",id:"setting-the-pulse-value",level:4},{value:"Working",id:"working",level:2},{value:"Code Working",id:"code-working",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"servomotor",children:"ServoMotor"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://controllerstech.com/servo-motor-with-stm32/",children:"Docs"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"specifications",children:"Specifications:"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Angle:"})," 0 to 180 degrees"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Pinout:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Black/Brown"})," ",(0,r.jsx)(s.strong,{children:"ground"})," wire"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Red"})," ",(0,r.jsx)(s.strong,{children:"power"})," wire (around 5V)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Yellow"})," or White ",(0,r.jsx)(s.strong,{children:"PWM"})," wire"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"circuit-diagram",children:"Circuit Diagram"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Image",src:n(6285).A+"",width:"1495",height:"905"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Yellow"})," or White PWM wire from motor connects to the pin ",(0,r.jsx)(s.code,{children:"PA0"})," of the STM32."]}),"\n",(0,r.jsxs)(s.li,{children:["This is ",(0,r.jsx)(s.code,{children:"TIM2 CH1"}),", which we have configured as the PWM out pin"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"theory",children:"Theory"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Image",src:n(9716).A+"",width:"374",height:"107"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Out of these parameters, the ",(0,r.jsx)(s.strong,{children:"Timer Clock will remain constant at 45MHz"})," throughout the project."]}),"\n",(0,r.jsxs)(s.li,{children:["We want to generate the PWM signal with the ",(0,r.jsx)(s.strong,{children:"Frequency of 50Hz"})]}),"\n",(0,r.jsx)(s.li,{children:"To do so, I am setting the Prescaler and ARR values as shown below."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Image",src:n(9606).A+"",width:"362",height:"105"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Pres"})," and ",(0,r.jsx)(s.strong,{children:"ARR"})," input values must be 1 less than the actual values."]}),"\n",(0,r.jsx)(s.li,{children:"This is because the library add a 1 to this value at the register level, so we must keep it 1 less than the value we want to pass."}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"setting-the-pulse-value",children:"Setting the Pulse Value:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The servo motor responds for the pulse width of ",(0,r.jsx)(s.strong,{children:"0.5ms to 2.5ms"})]}),"\n",(0,r.jsxs)(s.li,{children:["Also the pulse period is ",(0,r.jsx)(s.strong,{children:"20ms"}),", so in terms of Duty%, the pulse width for the extreme ends can be calculated as shown below."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Image",src:n(8623).A+"",width:"625",height:"141"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Now keeping the above duty cycles in mind, our choice of ARR affects the variations available for the pulse width.\r\n",(0,r.jsx)(s.strong,{children:"For Example-"})," Let\u2019s assume we choose the ",(0,r.jsx)(s.strong,{children:"ARR"})," of ",(0,r.jsx)(s.code,{children:"1000"})," and ",(0,r.jsx)(s.strong,{children:"Prescalar"})," value as ",(0,r.jsx)(s.code,{children:"900-1"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Image",src:n(5761).A+"",width:"601",height:"95"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"To generate a duty cycle of 2.5%, we need to set the value 25 to the Compare Register (CCR)"}),"\n",(0,r.jsx)(s.li,{children:"Similarly to generate a duty cycle of 12.5%, we need to set the value 125 to the Compare Register (CCR)"}),"\n",(0,r.jsxs)(s.li,{children:["This will give us only ",(0,r.jsx)(s.code,{children:"100 steps"})," (125 \u2013 25) of variations between the extreme positions"]}),"\n",(0,r.jsx)(s.li,{children:"Each step will result in a large variation in the Angular Displacement of the motor."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Here in the project I chose the ARR value of 10000. The Compare Register value depends on the ARR, so the values for the Duty cycles are as follows:"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Image",src:n(1405).A+"",width:"621",height:"82"})}),"\n",(0,r.jsxs)(s.p,{children:["This set up will result in ",(0,r.jsx)(s.code,{children:"1000 steps (1250 \u2013 250) of variations between the extreme ends"}),"\r\nWe will have more variations for the Angular Displacement"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"working",children:"Working"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Regular servos can go from 0\xb0 to 180\xb0 depending on the width of the pulse signal."}),"\n",(0,r.jsx)(s.li,{children:"Basically you need to keep the pulse (+5v) high  for a particular amount of time."}),"\n",(0,r.jsx)(s.li,{children:"Some of the important timings are mentioned below."}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"0.5"})," milliseconds pulse width   corresponds to ",(0,r.jsx)(s.strong,{children:"0\xb0"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"1.5"})," milliseconds pulse width corresponds to ",(0,r.jsx)(s.strong,{children:"90\xb0"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"2.5"})," milliseconds pulse width corresponds to ",(0,r.jsx)(s.strong,{children:"180\xb0"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Image",src:n(2681).A+"",width:"484",height:"247"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"#Note:"})," The period of the PWM signal must be 20ms (frequency: 50 Hz)"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"code-working",children:"Code Working"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"We will start the timer in PWM mode, using Timer 2 with Channel 1 to generate the PWM signal"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-c",children:"HAL_TIM_PWM_Start(&htim2, TIM_CHANNEL_1);\r\n\r\nwhile (1)\r\n  {\r\n\t  htim2.Instance->CCR1 = 250;  // duty cycle is .5 ms\r\n\t  HAL_Delay(2000);\r\n\t  htim2.Instance->CCR1 = 750;  // duty cycle is 1.5 ms\r\n\t  HAL_Delay(2000);\r\n\t  htim2.Instance->CCR1 = 1250;  // duty cycle is 2.5 ms\r\n\t  HAL_Delay(2000);\r\n  }\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["In the while loop we will set the compare register to ",(0,r.jsx)(s.code,{children:"250"}),". This will correspond to a rotation of ",(0,r.jsx)(s.code,{children:"0\xb0"})]}),"\n",(0,r.jsxs)(s.li,{children:["Then after a delay of 2 seconds, set the compare register to ",(0,r.jsx)(s.code,{children:"750"}),". This will correspond to a rotation of ",(0,r.jsx)(s.code,{children:"90\xb0"})]}),"\n",(0,r.jsxs)(s.li,{children:["Again after a delay of 2 seconds, set the compare register to ",(0,r.jsx)(s.code,{children:"1250"}),". This will correspond to a rotation of ",(0,r.jsx)(s.code,{children:"180\xb0"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"0\xb0"})," = 250"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"180\xb0"})," = 1250"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"PerDeg:"}),"\r\n= (1250-250)/180\r\n= 5.55"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"For X Degrees:"}),"\r\n= 250 + (X * PerDeg)"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"Example:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"X = 90\xb0"}),"\n",(0,r.jsx)(s.li,{children:"Pulse = 250 + (90 * 5.55)\r\n= 750"}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2681:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/1-84d4bf08cceb78839463c45984bc57bc.png"},1405:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/10-a8905d78da2b7cb15853e6faceb44f30.png"},9716:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/4-56e1c120f4562de7eecda0e6905c16f3.png"},9606:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/6-3ea9c6abbb4a78ec243d0769eaf2f9a7.png"},8623:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/7-6a15c4ba1f46f7a454208bb7b086b726.png"},5761:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/9-92300aca6da2759aac73da6352a941af.png"},6285:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/circuit-31143059b67418b70f71ef4cf83788f2.png"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var r=n(6540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);