(this["webpackJsonpexpansion-lead"]=this["webpackJsonpexpansion-lead"]||[]).push([[0],{183:function(e,t,a){},185:function(e,t,a){},188:function(e){e.exports=JSON.parse('[{"label":"Less than $1 million","value":1},{"label":"$1 million to $5 million","value":2},{"label":"$5 million to $10 million","value":3},{"label":"$10 million to $25 million","value":4},{"label":"$25 million to $50 million","value":5},{"label":"$50 million to $100 million","value":6},{"label":"$100 million to $500 million","value":7},{"label":"$500 million to $1 billion","value":8},{"label":"Greater than $1 billion","value":9}]')},189:function(e){e.exports=JSON.parse('[{"value":1,"label":"Architect"},{"value":2,"label":"Building owner"},{"value":3,"label":"Commercial"},{"value":4,"label":"Commercial / industrial"},{"value":5,"label":"Concrete"},{"value":6,"label":"Construction manager"},{"value":7,"label":"Design/build"},{"value":8,"label":"Earthwork/excavating"},{"value":9,"label":"Electrical/teledata"},{"value":10,"label":"Engineer"},{"value":11,"label":"Finishing contractor"},{"value":12,"label":"General contractor"},{"value":13,"label":"Government - federal"},{"value":14,"label":"Government - state & local"},{"value":15,"label":"HVAC / ductwork -"},{"value":16,"label":"Heavy/highway contractor"},{"value":17,"label":"Home builder - custom"},{"value":18,"label":"Home builder - production"},{"value":19,"label":"Industrial"},{"value":20,"label":"Landscaping"},{"value":21,"label":"Masonry / Stone"},{"value":22,"label":"Mechanical/HVAC"},{"value":23,"label":"Other specialty contractor"},{"value":24,"label":"Paving"},{"value":25,"label":"Piping"},{"value":26,"label":"Piping & HVAC / ductwork"},{"value":27,"label":"Plumbing"},{"value":28,"label":"Real estate developer"},{"value":29,"label":"Residential"},{"value":30,"label":"Residential remodeling"},{"value":31,"label":"Roo"},{"value":32,"label":"Solar"},{"value":33,"label":"Utility contractor"},{"value":34,"label":"commercial"},{"value":35,"label":"fi"},{"value":36,"label":"ng & siding"},{"value":37,"label":"residential"},{"value":38,"label":"rm"}]')},196:function(e,t,a){},295:function(e,t){},337:function(e,t,a){},338:function(e,t,a){},339:function(e,t,a){},340:function(e,t,a){},341:function(e,t,a){},342:function(e,t,a){},343:function(e,t,a){},344:function(e,t,a){},345:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(20),o=a.n(s),r=a(43),l=(a(194),a(195),a(196),a(185)),c=a.n(l),d=a(29),h=a(8),m=a(84),u=a.n(m),b={firstname:{type:"input",fieldName:"First Name",value:"",validate:function(e){return e.length>0},statusMsg:"First Name can't be empty."},lastname:{type:"input",fieldName:"Last Name",value:"",validate:function(e){return e.length>0},statusMsg:"Last Name can't be empty."},email:{type:"input",fieldName:"Email",value:"",validate:function(e){return e.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)},statusMsg:"Please enter a valid Email."},phone:{type:"input",fieldName:"Phone",value:"",validate:function(e){return e.length>0},statusMsg:"Please enter a Phone number."},comments:{type:"textarea",fieldName:"Comments",value:"",validate:function(e){return e.length>0},statusMsg:"Please enter a Comment."}},E=a(1);function p(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],s=(new Date).getFullYear(),o=function(){console.log("successfully submitted")},r=function(){return n(!1)};return Object(E.jsxs)("div",{className:u.a.footer,children:[Object(E.jsxs)("ul",{className:u.a["list-wrapper"],children:[Object(E.jsx)("li",{children:Object(E.jsx)("a",{className:"gdm-link-dark",href:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/leads-expansion",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MAINSITE_ROOT_URL,"/legal/privacy-policy"),children:"Legal"})}),Object(E.jsx)("li",{children:Object(E.jsx)("button",{className:"gdm-link-dark gdm-btn-override",onClick:function(){return n(!0)},children:"Contact Your Advisor"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{className:"gdm-link-dark",href:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/leads-expansion",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MAINSITE_ROOT_URL,"/enterprise_software_definition"),children:"What is Enterprise Software?"})})]}),Object(E.jsxs)("div",{className:"gdm-paragraph-sm gdm-color-steel gdm-m-top-sm",children:["Copyright \xa9 ",s," Gartner Digital Markets. All Rights Reserved."]}),Object(E.jsx)(h.Modal,{open:a,onClosed:function(){return n(!1)},className:u.a["modal-container"],children:function(e){return Object(E.jsxs)("div",{children:[Object(E.jsxs)(h.Modal.Header,{children:[Object(E.jsx)("h2",{className:"gdm-subtitle",children:"Contact Your Marketing Advisor"}),Object(E.jsx)(h.Modal.Close,{onClick:e})]}),Object(E.jsx)(h.Modal.Body,{children:T(o,r)})]})}})]})}var T=function(e,t){return Object(E.jsx)(h.Form,{initialInputsData:b,className:"gdm-p-none",onSubmit:function(a,i,n,s){n(!0),new Promise((function(e){setTimeout((function(){e({status:200,msg:"Sucessfully submitted form."})}),4e3)})).then((function(t){s(),e(),i({status:"success",msg:t.msg})})).catch((function(e){i({status:"error",msg:e.msg})})).finally((function(){t(),n(!1)}))},render:function(e,t,a,i,s,o,r,l){return Object(E.jsxs)(n.a.Fragment,{children:[Object.keys(s).map((function(e){return Object(E.jsx)(h.InputField,{status:o[e],className:"gdm-w-24",render:function(a,i){return Object(E.jsxs)(n.a.Fragment,{children:[Object(E.jsx)(h.InputField.Label,{children:s[e].fieldName}),"input"===s[e].type?Object(E.jsx)(h.InputField.Input,{status:i,id:a,value:s[e].value,name:e,onChange:t,disabled:l}):Object(E.jsx)(h.TextArea,{value:s[e].value,onChange:t,rows:"4"}),Object(E.jsx)(h.InputField.AlertMessage,{status:i,children:s[e].statusMsg})]})}},e)})),Object(E.jsx)("div",{className:"gdm-m-top-sm",children:Object(E.jsx)(h.Button,{className:"gdm-m-none gdm-m-top-sm",variant:"primary",type:"submit",onClick:e,disabled:r||l,children:"Submit"})})]})}})},O=a(16),N=[{match:function(e){return"/vp"===e},path:"/vp",name:"Dashboard"},{basePath:"/vp/insights",match:function(e){return e.match(/\/insights/)},path:"/vp/insights/clicks",name:"Insights"},{match:function(e){return e.match(/\/(listings|products)/)},path:"/vp/listings",name:"Listings"},{match:function(e){return e.match(/\/ppl/)},path:"/vp/ppl/bids",name:"PPL"},{match:function(e){return e.match(/\/leads/)},path:"/leads",name:"Leads"},{match:function(e){return e.match(/\/reviews/)&&!e.match(/\/reviews_/)},path:"/vp/reviews",name:"Reviews"},{match:function(e){return e.match(/\/resources/)},path:"/vp/resources",name:"Resources"},{match:function(e){return e.match(/\/bidding/)},path:"/vp/bidding",name:"Bidding"}],g=a.p+"static/media/gartner_logo_white.51410628.svg",S=a(59),j=a.n(S);function f(){var e=Object(O.g)().pathname;return Object(E.jsx)("header",{className:j.a.navWrapper,children:Object(E.jsxs)("nav",{className:j.a.navInnerWrapper,children:[Object(E.jsx)("div",{className:j.a["logo-wrapper"],children:Object(E.jsx)(r.b,{to:"/",children:Object(E.jsx)("img",{src:g,className:j.a["app-logo"],alt:"Gartner Logo"})})}),Object(E.jsx)("div",{className:j.a["account-wrapper"]}),Object(E.jsx)(h.Nav,{className:"gdm-m-bottom-sm gdm-m-top-xl",children:N.map((function(t){var a=t.match,i=t.path,n=t.name,s=t.subNav;return Object(E.jsxs)(h.Nav.Item,{className:"gdm-color-light",active:a(e),children:[Object(E.jsx)(r.b,{to:i,children:n}),s&&Object(E.jsx)(h.Nav.Dropdown,{children:s.map((function(e){var t=e.path,a=e.name;return Object(E.jsx)(h.Nav.SubItem,{children:Object(E.jsx)(r.b,{to:t,children:a})},t)}))})]},i)}))})]})})}var _=a(57),v=a(72),w=a(187),y=(a(337),[{value:1,label:"Main Search"},{value:2,label:"Enterprise Search"},{value:3,label:"Low Hanging Fruit"},{value:4,label:"Volume Search"}]),A=function(){var e=Object(i.useState)(),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(E.jsxs)("div",{className:"search-list-wrapper",children:[Object(E.jsx)("span",{className:"gdm-label",children:"Select Saved Search"}),Object(E.jsx)("div",{className:"search-list",children:Object(E.jsx)(h.List,{placeholder:"saved search list",isClearable:!0,onChange:function(e){return n(e)},value:a,options:y})})]})},D=(a(338),[{marketId:1,name:"Construction"},{marketId:2,name:"Project Management"},{marketId:3,name:"Field Service"},{marketId:4,name:"Punch List"}]),I=function(){var e=Object(i.useState)(D[0]),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(E.jsxs)("div",{className:"gdm-m-bottom-md gdm-z-index-dropdown expansion-header-wrapper",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{"data-cy":"vendor-name",className:"gdm-title gdm-m-bottom-md",children:"Expansion Leads"}),Object(E.jsxs)(h.Dropdown,{selectCallback:function(e){return n(e)},selected:a,render:function(e){return Object(E.jsx)(h.Dropdown.Selected,{children:e?e.name:"Select Market"})},displayValue:"name",list:D,children:[Object(E.jsx)("label",{className:"gdm-label",children:"Search your markets by name"}),Object(E.jsx)(h.Dropdown.Search,{autoComplete:"off"}),Object(E.jsx)(h.Dropdown.List,{render:function(e){return Object(E.jsx)(h.Dropdown.ListItem,{"data-cy":"dropdown-list-item-".concat(e.name),item:e,children:e.name},e.marketId)}})]})]}),Object(E.jsx)(A,{})]})},C=(a(339),function(e){var t=e.children,a=Object(i.useState)(!1),n=Object(d.a)(a,2),s=n[0],o=n[1];return Object(E.jsx)("div",{className:"gdm-relative",children:Object(E.jsxs)(h.Accordion,{isOpen:s,style:"table",children:[Object(E.jsxs)(h.Accordion.Header,{children:[Object(E.jsx)(h.Accordion.ToggleButton,{onClick:function(){return o((function(e){return!e}))},children:Object(E.jsx)("label",{className:"gdm-label",children:"Select Market Filters"})}),Object(E.jsx)(h.Button,{variant:"secondary",small:!0,onClick:function(){return console.log("click")},className:"save-filter-btn",children:"Save This Search"}),Object(E.jsx)(h.Accordion.Summary,{children:Object(E.jsx)("label",{className:"gdm-label title-summary",style:{color:"green"},children:"Expansion Lead Volume: 32"})})]}),Object(E.jsx)(h.Accordion.Content,{children:t})]})})}),R=a(38),x=a(71),U=function(e){var t=e.targetId,a=e.description;return Object(E.jsx)(h.ToolTip,{targetId:t,trigger:Object(E.jsx)("span",{className:"gdm-icon gdm-icon-xs gdm-icon-info"}),children:a})},L=Object(i.createContext)(),k=(a(340),function(e){var t=e.id,a=e.filterLabel,n=e.filterList,s=e.placeholder,o=e.tooltip,r=void 0!==o&&o,l=Object(i.useContext)(L)||{},c=l.filters,m=l.setFilters,u=Object(i.useState)(),b=Object(d.a)(u,2),p=b[0],T=b[1];return Object(i.useEffect)((function(){if(p)m(Object(x.a)(Object(x.a)({},c),{},Object(R.a)({},t,p.label)));else{var e=Object(x.a)({},c);delete e[t],m(Object(x.a)({},e))}}),[p]),Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{id:t,children:Object(E.jsxs)("span",{id:a,className:"gdm-label",children:[a,"\xa0",r&&Object(E.jsx)(U,{targetId:a,description:a})]})}),Object(E.jsx)("div",{className:"filter-list-wrapper gdm-m-top-sm",children:Object(E.jsx)(h.List,{placeholder:s,isClearable:!0,onChange:function(e){return T(e)},value:p,options:n})})]})}),M=a(188),H=a(189),B=(a(183),function(){var e=[{filterLabel:"Size (Annual Revenue)",placeholder:"size...",filterList:M,id:"size"},{filterLabel:"Segments",placeholder:"segments",filterList:H,id:"segment"}];return Object(E.jsxs)("div",{className:"filter-wrapper",children:[Object(E.jsx)("p",{className:"gdm-m-top-sm",children:Object(E.jsx)("span",{className:"gdm-label",children:"Demographics"})}),Object(E.jsx)("div",{className:"filter-lists gdm-m-top-sm",children:e.map((function(e){return Object(E.jsx)("div",{className:"filter-lists-item",children:Object(E.jsx)(k,{id:e.id,filterLabel:e.filterLabel,placeholder:e.placeholder,filterList:e.filterList})},e.id)}))})]})}),G=[{value:1,label:"Does not offer"},{value:2,label:"Offered within suite"},{value:3,label:"Best-of-breed"},{value:4,label:"Offered through partner"}],V=function(){var e=[{id:"bidManagement",filterLabel:"Bid Management",placeholder:"bid management...",filterList:G},{id:"projectScheduling",filterLabel:"Project Scheduling",placeholder:"project scheduling...",filterList:G},{id:"projectManagement",filterLabel:"Project Management",placeholder:"project management...",filterList:G}],t=[{id:"takeOff",filterLabel:"Takeoff",placeholder:"bid management...",filterList:G},{id:"estimating",filterLabel:"Estimating",placeholder:"estimating...",filterList:G},{id:"accounting",filterLabel:"Accounting",placeholder:"accounting...",filterList:G}];return Object(E.jsxs)("div",{className:"filter-wrapper gdm-m-top-sm",children:[Object(E.jsx)("div",{id:"functionality",className:"gdm-m-top-sm",children:Object(E.jsxs)("span",{className:"gdm-label",children:["Functionality\xa0",Object(E.jsx)(U,{targetId:"functionality",description:"Functionality"})]})}),[e,t].map((function(e,t){return Object(E.jsx)("div",{className:"filter-lists gdm-m-top-sm",children:e.map((function(e){return Object(E.jsx)("div",{className:"filter-lists-item",children:Object(E.jsx)(k,{id:e.id,filterLabel:e.filterLabel,placeholder:e.placeholder,filterList:e.filterList,tooltip:!0})},e.id)}))},t)}))]})},P="SET_SAVED_FILTER",Z=[{LEAD_CLOSE_MATCH_ID:4222615,CONVERSION_ID:9317263,STATUS:"pending",VENDOR_ID:37,VENDOR:"HCSS",INDUSTRY:"Construction",AMOUNT:50,DATE_MADE_DT:"2021-01-27 05:19:24.000 +0000",SEGMENT:"Heavy/highway contractor",SUBSEGMENT:"",SIZE:"$1 million to $5 million",COUNTRY:"United States",JOB_TITLE:"Project manager",INTRO:"This is a general contactor that primarily does demolition work and some site work as well.",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:" He uses Google Earth, and he gets his blueprints digitally.",EVALUATING_BECAUSE:"Vladimir has been doing his takeoff by hand and with Google, and the whole process takes longer than he would like it too. He also feels like he is missing out on opportunities to do bids on particular projects because he doesn't have the tools to measure it correctly. He wants a program that will not only speed his process up but also give him accurate readings for his bids.",SEGMENTS:"A program that will measure the blueprints on screen and accurately calculate how much material he will be working with. He would like the program to be able to do grid charts and some markup capabilities.",SEARCH:"Vladimir just started this research process today.",BUDGET:"He is open to seeing systems that are $1k/user.",CONTACT_NOTES:"Vladimir will make the finial decision. He was really nice and went with the flow of the conversation. Vladimir was a little concerned with pricing, but he wanted to see his options to see what he gets at the cost we discussed. I also explained the demo process to him, and he was open to talking to the vendors.",FOLLOWUP_NOTES:" You can reach him between 7am-5pm PST ",SIZEBAND_NOTE:"A little under $5 million ",SIZEBAND3_NOTE:"",SIZEBAND2_NOTE:"40 employees ",STANDARDIZED_TIMEFRAME:"less_than_3_months"},{LEAD_CLOSE_MATCH_ID:4222618,CONVERSION_ID:9317263,STATUS:"pending",VENDOR_ID:23545,VENDOR:"InSite Software",INDUSTRY:"Construction",AMOUNT:50,DATE_MADE_DT:"2021-01-27 05:19:30.000 +0000",SEGMENT:"Heavy/highway contractor",SUBSEGMENT:"",SIZE:"$1 million to $5 million",COUNTRY:"United States",JOB_TITLE:"Project manager",INTRO:"This is a general contactor that primarily does demolition work and some site work as well.",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:" He uses Google Earth, and he gets his blueprints digitally.",EVALUATING_BECAUSE:"Vladimir has been doing his takeoff by hand and with Google, and the whole process takes longer than he would like it too. He also feels like he is missing out on opportunities to do bids on particular projects because he doesn't have the tools to measure it correctly. He wants a program that will not only speed his process up but also give him accurate readings for his bids.",SEGMENTS:"A program that will measure the blueprints on screen and accurately calculate how much material he will be working with. He would like the program to be able to do grid charts and some markup capabilities.",SEARCH:"Vladimir just started this research process today.",BUDGET:"He is open to seeing systems that are $1k/user.",CONTACT_NOTES:"Vladimir will make the finial decision. He was really nice and went with the flow of the conversation. Vladimir was a little concerned with pricing, but he wanted to see his options to see what he gets at the cost we discussed. I also explained the demo process to him, and he was open to talking to the vendors.",FOLLOWUP_NOTES:" You can reach him between 7am-5pm PST ",SIZEBAND_NOTE:"A little under $5 million ",SIZEBAND3_NOTE:"",SIZEBAND2_NOTE:"40 employees ",STANDARDIZED_TIMEFRAME:"less_than_3_months"},{LEAD_CLOSE_MATCH_ID:4267273,CONVERSION_ID:9399241,STATUS:"pending",VENDOR_ID:959,VENDOR:"JobNimbus",INDUSTRY:"Construction",AMOUNT:25,DATE_MADE_DT:"2021-02-23 03:19:10.000 +0000",SEGMENT:"Residential remodeling",SUBSEGMENT:"",SIZE:"Less than $1 million",COUNTRY:"United States",JOB_TITLE:"Owner",INTRO:"JL is an independent prime contractor who handles residential remodeling. He also does some lite commercial remodels such as storefronts. ",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:"Right now he does his estimating manually. ",EVALUATING_BECAUSE:"He would like to be able to reduce the amount of time it takes him to do his estimates down to an hour. ",SEGMENTS:"He is looking for an affordable estimating program that allows him to enter in his numbers and give him an idea of costs so he can be more accurate in his estimating. He plans on expanding throughout this year ",SEARCH:"None, this was his first time talking with someone about it ",BUDGET:"$60-$200/month ",CONTACT_NOTES:"JL is the Owner. He was really nice and easy-going and joked around a bit ",FOLLOWUP_NOTES:"Any time is fine. We missed him the first few times we called, but I left a voicemail and he called me back. ",SIZEBAND_NOTE:"",SIZEBAND3_NOTE:"",SIZEBAND2_NOTE:"",STANDARDIZED_TIMEFRAME:"less_than_30_days"},{LEAD_CLOSE_MATCH_ID:4269928,CONVERSION_ID:9405673,STATUS:"pending",VENDOR_ID:2600,VENDOR:"STACK Construction Technologies",INDUSTRY:"Construction",AMOUNT:25,DATE_MADE_DT:"2021-02-24 02:37:39.000 +0000",SEGMENT:"Other specialty contractor",SUBSEGMENT:"Commercial",SIZE:"Less than $1 million",COUNTRY:"United States",JOB_TITLE:"Dive Supervisor",INTRO:"This is a commercial specialty contracting diving company. They do all kinds of repairs and work. ",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:"They don't have any specific system in place. They use QuickBooks, and he believes it is the Desktop version. ",EVALUATING_BECAUSE:"He is looking around because they feel as though they need help making the bidding process easier as well and having a database of their clients to stay organized. ",SEGMENTS:"This system needs to be able to do the estimating, project management and customer management. He needs to be able to have this system help him calculate the estimate cost of materials and labor needed for each specific job. He also needs this system to be able to manage the over all projects they have and be able to see what's happening and when. Another feature he wanted was to be able to have a CRM of their clients and be able to have their contact information and any past interaction made. ",SEARCH:"He has looked at MyCRM.com and ProEst Estimating ",BUDGET:"He is willing to review systems up to $100 a month ",CONTACT_NOTES:"He was great to talk to. He knew what they were need features wise and had started to do some research on systems. He is open-minded on systems and willing to review whatever is the best fit for this company. He had been tasked with research and the POC for this company at the moment and the owner will make the final decision. ",FOLLOWUP_NOTES:"He is available anytime between 7 a.m. and 3 p.m. on work days. I was able to reach him around 2:20 p.m. CST on the first call. He is very interested in the live demo process. ",SIZEBAND_NOTE:"",SIZEBAND3_NOTE:"They would need five users ",SIZEBAND2_NOTE:"The company total has about 20 employees. ",STANDARDIZED_TIMEFRAME:"less_than_3_months"},{LEAD_CLOSE_MATCH_ID:4063965,CONVERSION_ID:9042666,STATUS:"pending",VENDOR_ID:68169,VENDOR:"Autodesk, Inc. ",INDUSTRY:"Construction",AMOUNT:25,DATE_MADE_DT:"2020-10-23 03:45:34.000 +0000",SEGMENT:"Electrical/teledata",SUBSEGMENT:"Residential",SIZE:"Less than $1 million",COUNTRY:"United States",JOB_TITLE:"Owner",INTRO:"Joe works individually doing small residential electrical work and some low voltage data. ",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:"He uses pen and paper or comes up with costs off the top of his head. ",EVALUATING_BECAUSE:"He wants a system to make his estimating easier, less time consuming and more accurate. ",SEGMENTS:"His only need is estimating to be able to determine his material and labor costs needed for a project while he is on a site, so he can easily generate a summary of the costs for the client. He has a Mac computer and prefers something he can access on his iPad on the job. ",SEARCH:"None. ",BUDGET:"$100/month with $300 set up or $1,500-$3,000/user upfront. ",CONTACT_NOTES:"Joe is easy to talk to. ",FOLLOWUP_NOTES:"After 4pm any day CST ",SIZEBAND_NOTE:"$75,000 ",SIZEBAND3_NOTE:"",SIZEBAND2_NOTE:" ",STANDARDIZED_TIMEFRAME:"3_to_6_months"},{LEAD_CLOSE_MATCH_ID:4070202,CONVERSION_ID:9048348,STATUS:"pending",VENDOR_ID:132,VENDOR:"B2W Software",INDUSTRY:"Construction",AMOUNT:25,DATE_MADE_DT:"2020-10-27 20:10:26.000 +0000",SEGMENT:"Landscaping",SUBSEGMENT:"Commercial",SIZE:"Less than $1 million",COUNTRY:"United States",JOB_TITLE:"Quality Control Inspector",INTRO:"This is for a commercial landscaping and irrigation contractor ",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:"manual methods ",EVALUATING_BECAUSE:"They get jobs but do not know what the going price is. They want to be more accurate and not have to spend time figuring out the cost by hand ",SEGMENTS:"They need estimating to price labor and materials of jobs they are bidding or doing in the future. They need a template for quoting. They receive digital blueprints. They do not need takeoff ",SEARCH:"None ",BUDGET:"$2K/user/month  ",CONTACT_NOTES:"The owner knows Preppie is conducting this research. He is in the first stage of looking. He is not tech savvy ",FOLLOWUP_NOTES:"The best time to call him is around 6pm-7pm CST. He is responsive and called me right back  ",SIZEBAND_NOTE:"Under $1M/year ",SIZEBAND3_NOTE:"3 users ",SIZEBAND2_NOTE:"10 employees ",STANDARDIZED_TIMEFRAME:"less_than_30_days"},{LEAD_CLOSE_MATCH_ID:4070922,CONVERSION_ID:9049632,STATUS:"pending",VENDOR_ID:68169,VENDOR:"Autodesk, Inc. ",INDUSTRY:"Construction",AMOUNT:25,DATE_MADE_DT:"2020-10-27 23:17:38.000 +0000",SEGMENT:"Other specialty contractor",SUBSEGMENT:"Residential",SIZE:"Less than $1 million",COUNTRY:"United States",JOB_TITLE:"Owner",INTRO:"This is for a specialty contractor. They do mostly residential demolition work ",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:"A price sheet and manual methods ",EVALUATING_BECAUSE:"They want to be more accurate when bidding jobs. They want to win more bids to grow the business. ",SEGMENTS:"They need estimating to price labor and materials of jobs they are bidding or doing in the future. They need templates for submitting formal quotes. ",SEARCH:"None ",BUDGET:"$100/month  ",CONTACT_NOTES:"Juan is polite and appreciative. He is succinct and hard to get more helpful information. He is in the beginning of his research. ",FOLLOWUP_NOTES:"The best time to call him is mid-afternoon. He is responsive and called me right back ",SIZEBAND_NOTE:"Under $1M/year ",SIZEBAND3_NOTE:"1 users ",SIZEBAND2_NOTE:"They will hire three more ",STANDARDIZED_TIMEFRAME:"less_than_30_days"},{LEAD_CLOSE_MATCH_ID:4078377,CONVERSION_ID:9064947,STATUS:"pending",VENDOR_ID:40329,VENDOR:"Esticom",INDUSTRY:"Construction",AMOUNT:25,DATE_MADE_DT:"2020-10-30 21:19:46.000 +0000",SEGMENT:"Finishing contractor",SUBSEGMENT:"Commercial",SIZE:"Less than $1 million",COUNTRY:"United States",JOB_TITLE:"Owner",INTRO:"This is a newer contracting company less than a year old. Right now they work on residential remodeling, however they would like to start expanding into commercial finishing projects such as painting and interior finishing and would like the software to help them with that. ",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:"He uses a pen and paper to do his estimating and has a desktop version of Quickbooks. ",EVALUATING_BECAUSE:"He wants to become more updated with technology. We joked that people give him a hard time for being a millennial but not very computer savvy. He also dislikes his Quickbooks and does not use it much. He wants to become efficient with estimating so he can start bidding on commercial jobs. ",SEGMENTS:"He would like estimating to be able to calculate his material and labor costs in order to do his bidding. He would also like CRM to be able to keep in contact with his clients and manage their information. Communication with subs would be nice to have to be able to have an overview of the projects and share it with them. He was inquiring about what systems could import information from Procore or integrate with other systems. ",SEARCH:"He has spoken with BuildExact and is familiar with Procore from a previous company. He is also familiar with Rakken. He liked Procore but felt they were too expensive for his current needs. ",BUDGET:"$100/month ",CONTACT_NOTES:"Brian is the Owner. He is young and easy to talk with. ",FOLLOWUP_NOTES:"Today, any time before ",SIZEBAND_NOTE:"$200,000 currently ",SIZEBAND3_NOTE:"1-2  at the most ",SIZEBAND2_NOTE:"1-2 employees and 8-9 subs on the average project. ",STANDARDIZED_TIMEFRAME:"less_than_3_months"},{LEAD_CLOSE_MATCH_ID:4079220,CONVERSION_ID:9066504,STATUS:"pending",VENDOR_ID:40329,VENDOR:"Esticom",INDUSTRY:"Construction",AMOUNT:25,DATE_MADE_DT:"2020-10-30 22:58:06.000 +0000",SEGMENT:"Mechanical/HVAC",SUBSEGMENT:"HVAC / ductwork - commercial",SIZE:"Less than $1 million",COUNTRY:"United States",JOB_TITLE:"Owner",INTRO:"This business specializes in commercial and residential HVAC projects. They currently take on more residential work. ",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:"They are just using paper for estimating. ",EVALUATING_BECAUSE:"They want to make sure they are not underbidding on their projects. Miguel said he knows for a fact that they have lost out on potential revenue for using their manual methods. They need to make sure they are very accurate with their bidding process and also to make sure they are being competitive. ",SEGMENTS:"He is just looking for a system that would give them the ability to generate accurate and professional-looking bids based on the estimated material and labor costs of a project. He also said they would like an updated costs material database in the system. ",SEARCH:"ServiceTitian and CostEstimator ",BUDGET:"Screened for up to $900/user/year with potential set up fees. ",CONTACT_NOTES:"Miguel was easy to speak with and seems eager to find them a good solution. He will be reviewing his information with his father who is the main owner of the company before a decision is made. ",FOLLOWUP_NOTES:"Miguel said if you can reach him on the weekends it would be best. If not he said during the weekdays he is usually free from 12:00 pm - 12:30 pm PST which is usually during his lunch. ",SIZEBAND_NOTE:"",SIZEBAND3_NOTE:"",SIZEBAND2_NOTE:"2",STANDARDIZED_TIMEFRAME:"less_than_30_days"},{LEAD_CLOSE_MATCH_ID:4334941,CONVERSION_ID:9496420,STATUS:"pending",VENDOR_ID:57,VENDOR:"Viewpoint",INDUSTRY:"Construction",AMOUNT:85,DATE_MADE_DT:"2021-03-24 23:11:55.000 +0000",SEGMENT:"Earthwork/excavating",SUBSEGMENT:"Commercial",SIZE:"$5 million to $10 million",COUNTRY:"United States",JOB_TITLE:"Project Coordinator",INTRO:"This is a general commercial contractor that is a full service construction company. They also build bridges, underground utility piping, and commercial site development. They do all their earthwork site development in house and need an earthwork take off system for this construction phase. ",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:"PlanSwift for their 2D take off needs, Procore for project management, and Paydirt by Trimble for 3D take off. ",EVALUATING_BECAUSE:"Justin says they use a digitizer with Paydirt, and he is tired of being this old school. Its antiquated and he knows there are more technological advancements when using onscreen systems. His boss is super old school but is allowing him to switch up the program they use. They are a general construction company that take on a variety of different projects but because they typically don't sub out the earthwork process, they want to ensure they have a viable program that specific to dirt take off. ",SEGMENTS:"Justin needs to measure blueprints to determine material quantities and needs 3D take off functionality for cuts, fills, digs, and cross-sectional areas. He has access to digital blueprints. ",SEARCH:"Nothing ",BUDGET:"Justin is open to $3k/year and $5k/user ",CONTACT_NOTES:"Justin is the project coordinator and was very friendly. He is open to evaluating and doing demo's on most products in the market so that they can determine the best fit. He was checking out InSite online and really liked their functionality, but is open to weighing other products against theirs. ",FOLLOWUP_NOTES:"Justin can be contacted at anytime during regular business hours. If he doesn't answer, just be sure to leave a message. ",SIZEBAND_NOTE:"$5 million",SIZEBAND3_NOTE:"2 users ",SIZEBAND2_NOTE:"As many as 25 employees ",STANDARDIZED_TIMEFRAME:"less_than_30_days"},{LEAD_CLOSE_MATCH_ID:4334944,CONVERSION_ID:9496420,STATUS:"declined",VENDOR_ID:1511,VENDOR:"RedTeam Software, LLC",INDUSTRY:"Construction",AMOUNT:85,DATE_MADE_DT:"2021-03-24 23:12:05.000 +0000",SEGMENT:"Earthwork/excavating",SUBSEGMENT:"Commercial",SIZE:"$5 million to $10 million",COUNTRY:"United States",JOB_TITLE:"Project Coordinator",INTRO:"This is a general commercial contractor that is a full service construction company. They also build bridges, underground utility piping, and commercial site development. They do all their earthwork site development in house and need an earthwork take off system for this construction phase. ",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:"PlanSwift for their 2D take off needs, Procore for project management, and Paydirt by Trimble for 3D take off. ",EVALUATING_BECAUSE:"Justin says they use a digitizer with Paydirt, and he is tired of being this old school. Its antiquated and he knows there are more technological advancements when using onscreen systems. His boss is super old school but is allowing him to switch up the program they use. They are a general construction company that take on a variety of different projects but because they typically don't sub out the earthwork process, they want to ensure they have a viable program that specific to dirt take off. ",SEGMENTS:"Justin needs to measure blueprints to determine material quantities and needs 3D take off functionality for cuts, fills, digs, and cross-sectional areas. He has access to digital blueprints. ",SEARCH:"Nothing ",BUDGET:"Justin is open to $3k/year and $5k/user ",CONTACT_NOTES:"Justin is the project coordinator and was very friendly. He is open to evaluating and doing demo's on most products in the market so that they can determine the best fit. He was checking out InSite online and really liked their functionality, but is open to weighing other products against theirs. ",FOLLOWUP_NOTES:"Justin can be contacted at anytime during regular business hours. If he doesn't answer, just be sure to leave a message. ",SIZEBAND_NOTE:"$5 million",SIZEBAND3_NOTE:"2 users ",SIZEBAND2_NOTE:"As many as 25 employees ",STANDARDIZED_TIMEFRAME:"less_than_30_days"},{LEAD_CLOSE_MATCH_ID:4335640,CONVERSION_ID:9496732,STATUS:"pending",VENDOR_ID:30,VENDOR:"Procore Technologies",INDUSTRY:"Construction",AMOUNT:85,DATE_MADE_DT:"2021-03-25 00:36:56.000 +0000",SEGMENT:"Home builder - custom",SUBSEGMENT:"",SIZE:"$5 million to $10 million",COUNTRY:"United States",JOB_TITLE:"Owner",INTRO:"They do residential and commercial buildings. Most of their work is higher end homes. They sub out construction work.",CURRENTLY_USING:"",CURRENTLY_USING_NOTES:"He is currently using UDA (ConstructionOnline) and doing his accounting separately. ",EVALUATING_BECAUSE:"UDA gave them a free upgrade to V.12, but now their two accounts on UDA won't communicate. This has led to multiple issues of having to manually transfer data from one account/device to the other. He would have to pay more for an add-on to fix this and would rather find another program. ",SEGMENTS:"They need estimating as well as project scheduling. They use Gantt charts. They also need the program to compare actual cost to estimated cost (job costing). ",SEARCH:"None so far ",BUDGET:"He would like to cap his rate at $150/month ",CONTACT_NOTES:"He is the owner. He wants something user friendly and where multiple users accounts will easily communicate and update with each other in the system. He has not done webinar demos before but is willing to now. ",FOLLOWUP_NOTES:"The best way to reach him is to just give the office a shot and try to reach him when you can. He is sometimes on the go, but will answer if he's in the office. I reached him at 2:00pm CST midweek ",SIZEBAND_NOTE:"$6 million ",SIZEBAND3_NOTE:"2 users",SIZEBAND2_NOTE:"4 employees",STANDARDIZED_TIMEFRAME:"less_than_30_days"}],$="SET_FILTERED_LEADS",F="SET_DEFAULT_LEADS",Y=(a(341),function(){var e=Object(i.useState)({}),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(_.b)();Object(i.useEffect)((function(){var e;s((e=a,function(t){t({type:P,payload:e})}))}),[a]);return Object(E.jsx)("div",{children:Object(E.jsx)(L.Provider,{value:{filters:a,setFilters:n},children:Object(E.jsxs)(C,{children:[Object(E.jsx)(B,{}),Object(E.jsxs)("div",{className:"functionality-button-wrapper",children:[Object(E.jsx)(V,{}),Object(E.jsxs)("div",{className:"buttons",children:[Object(E.jsx)("p",{children:Object(E.jsx)(h.Button,{variant:"primary",onClick:function(){if(0!==Object.keys(a).length){var e,t=Z.filter((function(e){return a&&a.size&&a.segment?e.SIZE.toLowerCase()===a.size.toLowerCase()&&e.SEGMENT.toLowerCase()===a.segment.toLowerCase():a&&a.segment?e.SEGMENT.toLowerCase()===a.segment.toLowerCase():a&&a.size?e.SIZE.toLowerCase()===a.size.toLowerCase():void 0}));s((e=t,function(t){t({type:$,payload:e})}))}else s((function(e){e({type:F})}))},children:"Update Leads"})}),Object(E.jsx)("p",{className:"reset-button-wrapper",children:Object(E.jsx)(h.Button,{variant:"quarternary",onClick:function(){return console.log("click")},children:"Reset All Filter"})})]})]})]})})})}),J=a.p+"static/media/cart-plus.7d691e25.svg";function W(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var z=function(e){var t=e.lead;return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"gdm-text-left",children:Object(E.jsx)("input",{type:"checkbox"})}),Object(E.jsx)("td",{children:W(1,8)}),Object(E.jsx)("td",{className:"gdm-text-left",children:t.SIZE}),Object(E.jsx)("td",{className:"gdm-text-left",children:t.SEGMENT}),Object(E.jsx)("td",{className:"gdm-text-left",children:t.COUNTRY}),Object(E.jsx)("td",{children:W(1,8)}),Object(E.jsxs)("td",{children:["$",t.AMOUNT]}),Object(E.jsx)("td",{children:Object(E.jsx)("a",{href:"#",children:"Lead Details"})}),Object(E.jsx)("td",{children:Object(E.jsx)("img",{src:J})})]})},q=function(e){var t=e.leadsData;return Object(E.jsx)("div",{children:Object(E.jsx)("table",{className:"gdm-table gdm-table-alternating gdm-table-inputs gdm-text-center gdm-w-24",children:Object(E.jsxs)("tbody",{children:[Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"gdm-w-1 gdm-text-left"}),Object(E.jsx)("th",{className:"gdm-w-1 gdm-text-left",children:"Days Left"}),Object(E.jsx)("th",{className:"gdm-w-5 gdm-text-left",children:"Size"}),Object(E.jsx)("th",{className:"gdm-w-3 gdm-text-left",children:"Segment"}),Object(E.jsx)("th",{className:"gdm-w-3 gdm-text-left",children:"Location"}),Object(E.jsx)("th",{className:"gdm-w-2",children:"Spots Left"}),Object(E.jsx)("th",{className:"gdm-w-2",children:"Price"}),Object(E.jsx)("th",{className:"gdm-w-2",children:"Leads Details"}),Object(E.jsx)("th",{className:"gdm-w-2",children:"Add To Cart"})]}),t.map((function(e,t){return Object(E.jsx)(z,{lead:e},t)}))]})})})},K=(a(342),function(){var e=Object(_.c)((function(e){return e.filteredLeads}));return Object(E.jsxs)("div",{className:"gdm-m-top-lg border-top",children:[Object(E.jsx)("p",{className:"gdm-subtitle",children:"All Expansion Leads for Construction"}),Object(E.jsx)(q,{leadsData:e})]})}),Q={savedFilters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return t.payload;default:return e}},filteredLeads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return t.payload;case F:return Z;default:return e}}},X=(a(343),Object(v.a)(w.a)),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.c,te=function(){var e={savedFilters:{},filteredLeads:Z},t=Object(v.d)(Object(v.b)(Q),e,ee(X));return Object(E.jsx)(_.a,{store:t,children:Object(E.jsx)("div",{className:"app-wrapper",id:"app-anchor",children:Object(E.jsxs)("div",{className:"gdm-relative",children:[Object(E.jsx)(I,{}),Object(E.jsx)(Y,{}),Object(E.jsx)(K,{})]})})})};function ae(){return Object(E.jsxs)(O.d,{children:[Object(E.jsx)(O.b,{exact:!0,path:"/",children:"DASHBOARD"}),Object(E.jsx)(O.b,{path:"/about",children:"ABOUT"}),Object(E.jsx)(O.b,{exact:!0,path:"/insights",children:"INSIGHTS"}),Object(E.jsx)(O.b,{path:"/listings",children:"LISTINGS"}),Object(E.jsx)(O.b,{path:"/ppl",children:"PPL"}),Object(E.jsx)(O.b,{path:"/products/*",children:"LISTINGS"}),Object(E.jsx)(O.b,{path:"/leads",children:Object(E.jsx)(te,{})}),Object(E.jsx)(O.b,{path:"/reviews",children:"REVIEWS"}),Object(E.jsx)(O.b,{path:"/resources",children:"RESOURCES"}),Object(E.jsx)(O.b,{path:"/bidding",children:"BIDDING"})]})}var ie=function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)(f,{}),Object(E.jsxs)("main",{className:c.a.main,children:[Object(E.jsx)(ae,{}),Object(E.jsx)(O.a,{to:"/leads"})]}),Object(E.jsx)(p,{})]})};a(344);o.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(r.a,{children:Object(E.jsx)(ie,{})})}),document.getElementById("root"))},59:function(e,t,a){e.exports={navWrapper:"nav_navWrapper__3Vc0R",navInnerWrapper:"nav_navInnerWrapper__1rTjD","logo-wrapper":"nav_logo-wrapper__2nBSv","app-logo":"nav_app-logo__FQ3sh","account-wrapper":"nav_account-wrapper__10Mtq"}},84:function(e,t,a){e.exports={footer:"footer_footer__EQtlF","list-wrapper":"footer_list-wrapper__1qX9Y","modal-container":"footer_modal-container__6LVio"}}},[[345,1,2]]]);
//# sourceMappingURL=main.823d9eab.chunk.js.map