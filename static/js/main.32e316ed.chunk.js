(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{161:function(e,t){},163:function(e,t){},196:function(e,t){},197:function(e,t){},244:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);var a,i,r=n(1),s=n.n(r),c=n(123),o=n.n(c),l=n(18),u=n(14),h=n(22),m=n(17),d=function(e){var t=e.split("-"),n=new Date(Number(t[0]),Number(t[1])-1,Number(t[2])),a=new Date(n.getFullYear(),n.getMonth()+1,1);a.setDate(a.getDate()-1);var i=p(a.getMonth()),r=a.getFullYear(),s=a.getDate();return"".concat(r,"-").concat(i,"-").concat(s)},p=function(e){var t=Number(e);return(t+1<10?"0".concat(t+1):t+1).toString()},f=function(e){return e[0].toUpperCase()+e.substring(1)},y=function(e){var t=e.split("-");return"".concat(t[1],"/").concat(t[2],"/").concat(t[0])},g=n(6),b=n(7);!function(e){e.FINANCE="finance",e.OPERATING="operating"}(a||(a={})),function(e){e.Annual="annual",e.SemiAnnual="semiannual",e.Quarterly="quarterly",e.Monthly="monthly"}(i||(i={}));var v,j,O,D,x=n(41),P=n(40),S=function(e,t){return Number(e.toFixed(t))},B=function(e,t){var n=e.getMonth()+t-1,a=e.getFullYear();return 11===n?new Date(a+1,0,1):new Date(a,n+1,1)},w=function(e,t,n,a){var r=B(new Date(t),e),s=n;return 0===e?r=new Date(t):a===i.Annual?e%12!==0&&(s=0):a===i.SemiAnnual?e%6!==0&&(s=0):a===i.Quarterly&&e%3!==0&&(s=0),{nextMonth:r,monthlyPayment:s}},k=function(){function e(t,n,a,i,r,s,c,o,l){Object(g.a)(this,e),this.date=t,this.payment=n,this.principal=a,this.beginningBalance=i,this.interestRate=r,this.interestExpense=s,this.interestPayment=c,this.endingBalance=o,this.prepaid=l,this.shortTermBalance=void 0,this.longTermBalance=void 0,this.date=t,this.beginningBalance=i,this.interestExpense=r,this.interestExpense=s,this.payment=n,this.principal=a,this.endingBalance=o}return Object(b.a)(e,[{key:"getMonthlyData",value:function(){return{date:this.date,beginningBalance:this.beginningBalance,payment:this.payment,interestExpense:this.interestExpense,interestPayment:this.interestPayment,principal:this.principal,endingBalance:this.endingBalance,shortTermBalance:this.shortTermBalance,longTermBalance:this.longTermBalance}}}]),e}(),N=function(e,t,n,a,i,r,s,c){if(0===r){var o=t;if(i){var l=(e-t)*n,u=E(e,l,o,0);return new k(a,t,S(o,2),S(e,2),0,S(l,2),S(0,2),S(u,2),i)}var h=e*n,m=E(e,h,o,0);return new k(a,t,S(o,2),S(e,2),0,S(h,2),S(0,2),S(m,2),i)}var d=c[r-1].getMonthlyData(),p=d.interestExpense,f=d.endingBalance;if(i){var y=(f-t)*n,g=t-p,b=p;r===s-1&&(y=0);var v=E(f,y,g,b);return new k(a,t,S(g,2),S(f,2),0,S(y,2),S(b,2),S(v,2),i)}var j=f*n,O=f+j-t-0;return new k(a,t,S(t,2),S(f,2),0,S(j,2),S(0,2),S(O,2),i)},E=function(e,t,n,a){return e+t-n-a},L=function(e){var t=Object(l.a)(e),n=0,a=0;t.sort((function(e,t){return new Date(e.date).valueOf()-new Date(t.date).valueOf()}));for(var i=0;i<t.length;i++){if(i<t.length-12){for(var r=0;r<12;r++)n+=t[r+i].principal;a=t[i].endingBalance-n,t[i].shortTermBalance=S(n,2),t[i].longTermBalance=S(a,2)}else t[i].shortTermBalance=S(t[i].endingBalance,2),t[i].longTermBalance=0;n=0,a=0}return t},C=function(e,t,n,a){for(var i=[],r=Object(l.a)(e),s=0;s<r.length;s++){var c=new Date(r[s].month),o=r[s].payment,u=n/12;i.push(N(t,o,u,c,a,s,r.length,i))}return i=L(i)},R=function(){function e(t,n,a){Object(g.a)(this,e),this.date=t,this.beginningBalance=n,this.depreciation=a,this.endingBalance=void 0,this.beginningBalance=n,this.depreciation=a;var i=this.beginningBalance-this.depreciation;this.endingBalance=S(i,2),this.date=t}return Object(b.a)(e,[{key:"getMonthlyData",value:function(){return{date:this.date,beginningBalance:this.beginningBalance,depreciation:this.depreciation,endingBalance:this.endingBalance}}}]),e}(),A=function(e,t){for(var n=e.startDate,i=e.life,r=e.startingBalance,s=e.monthlyDepreciation,c=e.liabilitySchedule,o=e.classification,l=[],u=0;u<i;u++){var h=s;if(0===u){o===a.OPERATING&&(h=t-c[u].interestExpense);var m=new R(n,r,h);l.push(m)}else{var d=l[u-1].getMonthlyData().endingBalance;o===a.OPERATING&&(h=t-c[u].interestExpense);var p=B(n,u),f=new R(p,d,h);l.push(f)}}return l},T=function(){function e(){Object(g.a)(this,e),this.startDate=void 0,this.monthlyDepreciation=void 0,this.monthlyTransactions=void 0,this.startingBalance=void 0,this.life=void 0}return Object(b.a)(e,[{key:"setProperties",value:function(e,t,n){this.startDate=new Date(e),this.startingBalance=S(t,2),this.life=n}},{key:"setPropertiesFromJSON",value:function(e){var t=e[0],n=t.date,a=t.beginningBalance,i=e.length;this.setProperties(n,a,i),this.setMonthlyTransactionsFromJSON(e)}},{key:"getStartingBalance",value:function(){return this.startingBalance}},{key:"getLife",value:function(){return this.life}},{key:"getMonthlyTransactions",value:function(){return this.monthlyTransactions}},{key:"getAssetData",value:function(){return this.monthlyTransactions.map((function(e){var t=e.getMonthlyData(),n=t.date,a=t.beginningBalance,i=t.depreciation,r=t.endingBalance;return r<1?{date:n.toLocaleDateString(),beginningBalance:a,depreciation:S(r+i,2),endingBalance:r-r}:{date:n.toLocaleDateString(),beginningBalance:a,depreciation:i,endingBalance:r}}))}},{key:"setMonthlyDepreciation",value:function(e){this.monthlyDepreciation=S(e,2)}},{key:"setMonthlyTransactions",value:function(e){this.monthlyTransactions=e(this.startDate,this.life,this.startingBalance,this.monthlyDepreciation)}},{key:"setMonthlyTransactionsFromJSON",value:function(e){this.monthlyTransactions=e.map((function(e){return new R(new Date(e.date),e.beginningBalance,e.depreciation)}))}}]),e}(),I=function(e){Object(x.a)(n,e);var t=Object(P.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"setPropertiesFinance",value:function(e,t,n,a,i){if(a){var r=12*i;this.setProperties(e,t,r),this.calculateDepreciationWithEconomicLife(r)}else this.setProperties(e,t,n),this.calculateDepreciation();this.setMonthlyTransactions(this.calculateMonthlySchedule)}},{key:"calculateDepreciationWithEconomicLife",value:function(e){var t=this.getStartingBalance()/e;this.setMonthlyDepreciation(t)}},{key:"calculateDepreciation",value:function(){var e=this.getStartingBalance()/this.getLife();this.setMonthlyDepreciation(e)}},{key:"calculateMonthlySchedule",value:function(e,t,n,i){var r={startDate:e,life:t,startingBalance:n,monthlyDepreciation:i,classification:a.FINANCE};return A(r)}}]),n}(T),q=function(e){Object(x.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).straightLineRent=void 0,e}return Object(b.a)(n,[{key:"setPropertiesOperating",value:function(e,t,n,a,i,r,s){var c=t-n-a+i;this.setProperties(e,c,r),this.setMonthlyTransactions(this.calculateMonthlySchedule(s,a,n,i))}},{key:"calculateMonthlySchedule",value:function(e,t,n,i){var r=this,s=e.reduce((function(e,t){return e+t.payment}),0);return function(c,o,l){r.straightLineRent=(s-t-n+i)/o;var u={startDate:c,life:o,startingBalance:l,liabilitySchedule:e,totalPayments:s,classification:a.OPERATING};return A(u,r.straightLineRent)}}}]),n}(T),F=function(){function e(){Object(g.a)(this,e),this.startDate=void 0,this.monthlyTransactions=void 0,this.payment=void 0,this.paymentStream=void 0,this.interestRate=void 0,this.startingBalance=void 0,this.life=void 0,this.prepaid=void 0}return Object(b.a)(e,[{key:"setProperties",value:function(e,t,n,i,r,s,c,o){a.OPERATING,this.startingBalance=r,this.startDate=new Date(e),this.paymentStream=n,this.payment=t,this.interestRate=i,this.life=s,this.prepaid=c,this.monthlyTransactions=this.calculateMonthlySchedule()}},{key:"setPropertiesJSON",value:function(e,t,n,a,i){}},{key:"calculateMonthlySchedule",value:function(){return C(this.paymentStream,this.startingBalance,this.interestRate,this.prepaid)}},{key:"getLiabilityData",value:function(){return this.monthlyTransactions.map((function(e){var t=e.getMonthlyData(),n=t.date,a=t.beginningBalance,i=t.payment,r=t.interestExpense,s=t.interestPayment,c=t.principal,o=t.endingBalance,l=t.shortTermBalance,u=t.longTermBalance;return{date:n.toLocaleDateString(),beginningBalance:a,payment:i,interestExpense:r,interestPayment:s,principal:c,endingBalance:o,shortTermBalance:l,longTermBalance:u}}))}}]),e}(),M=function(){function e(t){Object(g.a)(this,e),this.payment=void 0,this.frequency=void 0,this.startDate=void 0,this.endDate=void 0,this.payments=void 0;var n=t.payment,a=t.frequency,i=t.startDate,r=t.endDate;this.payment=n,this.frequency=a,this.startDate=new Date(i),this.endDate=new Date(r);var s=12*(this.endDate.getFullYear()-this.startDate.getFullYear())+(this.endDate.getMonth()-this.startDate.getMonth())+1;this.payments=s<=0?0:s}return Object(b.a)(e,[{key:"getPaymentInformation",value:function(){return{payment:this.payment,frequency:this.frequency,startDate:this.startDate.toLocaleDateString(),endDate:this.endDate.toLocaleDateString(),payments:this.payments}}},{key:"sumPayments",value:function(){return this.payment*this.payments}},{key:"getPayments",value:function(){return this.payments}}]),e}(),V=function(){function e(t){Object(g.a)(this,e),this.payments=void 0,this.payments=t}return Object(b.a)(e,[{key:"sumAllPayments",value:function(){var e=0;return this.payments.forEach((function(t){e+=t.sumPayments()})),e}},{key:"paymentInformation",value:function(){return this.payments.map((function(e){return e.getPaymentInformation()}))}},{key:"quantityOfPayments",value:function(){return this.payments.reduce((function(e,t){return e+t.getPayments()}),0)}},{key:"paymentStream",value:function(){for(var e=[],t=0;t<this.payments.length;t++)for(var n=this.payments[t].getPaymentInformation().startDate,a=this.payments[t].getPaymentInformation().payments,i=0;i<a;i++){var r=this.payments[t].getPaymentInformation(),s=r.payment,c=r.frequency,o=w(i,n,s,c),l=o.nextMonth,u=o.monthlyPayment;e.push({month:l,payment:u,frequency:c})}return e}}]),e}(),J=function(){function e(){Object(g.a)(this,e),this.name=void 0,this.description=void 0,this.classification=void 0,this.interestRate=void 0,this.payments=void 0,this.prepaid=void 0,this.liability=void 0,this.asset=void 0,this.totalPayments=void 0,this.paymentStream=void 0,this.quantityOfPayments=void 0,this.presentValue=void 0,this.startDate=void 0,this.endDate=void 0,this.deferredRent=void 0,this.leaseIncentive=void 0,this.initialDirectCosts=void 0,this.useEconomicLife=void 0,this.economicLife=void 0,this.name="",this.description="",this.totalPayments=0,this.quantityOfPayments=0,this.presentValue=0,this.startDate="",this.endDate="",this.interestRate=0,this.prepaid=!1}return Object(b.a)(e,[{key:"setProperties",value:function(e,t,n,i,r,s,c,o,l,u,h){this.name=e,this.description=t,this.classification=n,this.payments=r,this.totalPayments=this.getSumOfPayments(),this.interestRate=i/100,this.prepaid=s,this.quantityOfPayments=this.getQuantityOfPayments(),this.deferredRent=c,this.leaseIncentive=o,this.initialDirectCosts=l,this.useEconomicLife=u,this.economicLife=h;var m=this.payments.paymentInformation().sort((function(e,t){return new Date(e.startDate).valueOf()-new Date(t.startDate).valueOf()}));this.startDate=m[0].startDate,this.endDate=m[m.length-1].endDate,this.paymentStream=this.getPaymentStream(),this.presentValue=this.calculatePresentValue(),this.liability=new F,this.liability.setProperties(this.startDate,this.getSumOfPayments(),this.paymentStream,this.interestRate,this.presentValue,this.quantityOfPayments,this.prepaid,this.classification);var d=this.liability.getLiabilityData()[0].beginningBalance;if(this.classification===a.FINANCE)this.asset=new I,this.asset.setPropertiesFinance(this.startDate,d,this.paymentStream.length,this.useEconomicLife,this.economicLife);else{if(this.classification!==a.OPERATING)throw new Error("Lease must be classified as either an operating or finance");this.asset=new q,this.asset.setPropertiesOperating(this.startDate,d,this.deferredRent,this.leaseIncentive,this.initialDirectCosts,this.paymentStream.length,this.getLiabilitySchedule())}}},{key:"setPropertiesFromJSON",value:function(e){var t=e.lease,n=e.prepaid,r=e.description,s=e.classification,c=e.interestRate,o=e.payments,l=e.asset,u=e.liability,h="operating"===s?a.OPERATING:a.FINANCE,m=o.map((function(e){var t;return t="annual"===e.frequency?i.Annual:"semiannual"===e.frequency?i.SemiAnnual:"quarterly"===e.frequency?i.Quarterly:i.Monthly,new M({payment:e.payment,frequency:t,startDate:new Date(e.startDate).toLocaleDateString(),endDate:new Date(e.endDate).toLocaleDateString()})})),d=new V(m);this.name=t,this.description=r,this.classification=h,this.interestRate=c,this.payments=d,this.prepaid=n,this.totalPayments=this.getSumOfPayments(),this.quantityOfPayments=this.getQuantityOfPayments();var p=this.payments.paymentInformation().sort((function(e,t){return new Date(e.startDate).valueOf()-new Date(t.startDate).valueOf()}));if(this.startDate=p[0].startDate,this.endDate=p[p.length-1].endDate,this.paymentStream=this.getPaymentStream(),this.liability=new F,this.liability.setPropertiesJSON(u,this.paymentStream,this.interestRate,u.length,this.prepaid),this.classification===a.FINANCE)this.asset=new I,this.asset.setPropertiesFromJSON(l);else{if(this.classification!==a.OPERATING)throw new Error("Lease must be classified as either an operating or finance");this.asset=new q,this.asset.setPropertiesFromJSON(l)}this.presentValue=this.liability.getLiabilityData()[0].beginningBalance}},{key:"getPayments",value:function(){return this.payments.paymentInformation()}},{key:"getLeaseInformation",value:function(){return{lease:this.name,prepaid:this.prepaid,description:this.description,classification:this.classification,interestRate:this.interestRate,totalPayments:this.totalPayments,quantityOfPayments:this.quantityOfPayments,presentValue:this.presentValue,startDate:this.startDate,endDate:this.endDate}}},{key:"getAllLeaseInformation",value:function(){return{lease:this.name,prepaid:this.prepaid,description:this.description,classification:this.classification,interestRate:this.interestRate,totalPayments:this.totalPayments,quantityOfPayments:this.quantityOfPayments,presentValue:this.presentValue,startDate:this.startDate,endDate:this.endDate,payments:this.getPayments(),asset:this.getAssetSchedule(),liability:this.getLiabilitySchedule()}}},{key:"getCurrentMonth",value:function(e){var t=this.getAssetSchedule().filter((function(t){return new Date(e).valueOf()===new Date(t.date).valueOf()})),n=this.getLiabilitySchedule().filter((function(t){return new Date(e).valueOf()===new Date(t.date).valueOf()}));return{lease:this.name,schedules:{asset:t,liability:n}}}},{key:"getSumOfPayments",value:function(){return this.payments.sumAllPayments()}},{key:"getQuantityOfPayments",value:function(){return this.payments.quantityOfPayments()}},{key:"getPaymentStream",value:function(){return this.payments.paymentStream()}},{key:"getAssetSchedule",value:function(){return this.asset.getAssetData()}},{key:"getLiabilitySchedule",value:function(){return this.liability.getLiabilityData()}},{key:"calculatePresentValue",value:function(){var e=this.paymentStream.map((function(e){return{payment:e.payment,frequency:e.frequency}})),t=this.correctPaymentStreamForPVCalc(e),n=this.calcPresentValue(this.interestRate,this.prepaid);return t.reduce(n,0)}},{key:"presentValueInterestRate",value:function(e,t){var n=e;return t===i.Monthly?n=e/12:t===i.Quarterly?n=e/4:t===i.SemiAnnual&&(n=e/2),n}},{key:"correctPaymentStreamForPVCalc",value:function(e){return e.filter((function(e){return 0!==e.payment}))}},{key:"calcPresentValue",value:function(e,t){var n=this;return function(a,i,r){var s=i.payment,c=i.frequency,o=n.presentValueInterestRate(e,c);return t?0===r?s:a+s/Math.pow(1+o,r):a+s/Math.pow(1+o,r+1)}}}]),e}(),Y=function(e,t){var n=t.name,r=t.description,s=t.interestRate,c=t.deferredRent,o=t.leaseIncentive,l=t.initialDirectCosts,u=t.economicLife,h=function(e){return e.map((function(e){var t=e.amount,n=e.frequency,a=e.startDate,r=e.endDate,s=y(a),c=y(r);return new M({payment:t,frequency:"monthly"===n?i.Monthly:"quarterly"===n?i.Quarterly:"semiannual"===n?i.SemiAnnual:i.Annual,startDate:s,endDate:c})}))}(e),m=new V(h),d=new J,p="operating"===t.classification?a.OPERATING:a.FINANCE,f="true"===t.prepaid,g="true"===t.useEconomicLife;return d.setProperties(n,r,p,s,m,f,Number(c),Number(o),Number(l),g,Number(u)),d},G=n(0),Q=function(e){var t=e.onChange,n=e.onClickAdd,a=e.onClickDelete,i=e.paymentsArr,s=Object(r.useState)(""),c=Object(u.a)(s,2),o=c[0],f=c[1],y=function(e){var n,a=e.currentTarget,r=a.name,s=a.id,c=a.value,o=s.split(" ")[1];if(f(""),"startDate"===r)n=function(e){var t=e.split("-"),n=new Date(Number(t[0]),Number(t[1])-1,Number(t[2])),a=p(n.getMonth()),i=n.getFullYear();return"".concat(i,"-").concat(a,"-").concat("01")}(c);else if("endDate"===r){if(n=d(c),!function(e,t){var n=new Date(e);return new Date(t).valueOf()>n.valueOf()}(i[o].startDate,n))return f("End date must be after start date"),void(n="")}else n="amount"===r?Number(c):c;var u=i[o],y=Object(m.a)(Object(m.a)({},u),{},Object(h.a)({},r,n)),g=Object(l.a)(i);g[o]=y,t(g)};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("div",{children:[Object(G.jsx)("button",{onClick:n,children:"Add Payment"}),Object(G.jsx)("button",{onClick:a,children:"Delete Payment"})]}),""!==o?Object(G.jsx)("p",{children:o}):null,Object(G.jsxs)("table",{children:[Object(G.jsx)("thead",{children:Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Start Date"}),Object(G.jsx)("th",{children:"End Date"}),Object(G.jsx)("th",{children:"Frequency"}),Object(G.jsx)("th",{children:"Amount"})]})}),Object(G.jsx)("tbody",{children:i.map((function(e,t){return Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{children:Object(G.jsx)("input",{type:"date",name:"startDate",id:"payment ".concat(t),value:e.startDate,onChange:y,min:e.min})}),Object(G.jsx)("td",{children:Object(G.jsx)("input",{type:"date",name:"endDate",id:"payment ".concat(t),value:e.endDate,onChange:y,min:d(e.min)})}),Object(G.jsx)("td",{children:Object(G.jsxs)("select",{name:"frequency",id:"payment ".concat(t),onChange:y,children:[Object(G.jsx)("option",{value:"monthly",children:"Monthly"}),Object(G.jsx)("option",{value:"quarterly",children:"Quarterly"}),Object(G.jsx)("option",{value:"semiAnnual",children:"Semi Annual"}),Object(G.jsx)("option",{value:"annual",children:"Annual"})]})}),Object(G.jsx)("td",{children:Object(G.jsx)("input",{type:"number",name:"amount",id:"payment ".concat(t),value:e.amount,onChange:y})})]},t)}))})]})]})},z=n(67),U=n.n(z),W=U.a.ExcelFile,Z=U.a.ExcelFile.ExcelSheet,H=function(e){var t=e.lease,n=e.fileName;return Object(G.jsx)(W,{filename:n,element:Object(G.jsx)("button",{children:"Download Schedules"}),children:Object(G.jsx)(Z,{dataSet:t,name:"Organization"})})},K=function(e){var t=e.config,n=t.label,a=t.type,i=t.name,r=t.id,s=t.value,c=t.onChange,o=t.options,l=t.show,u=t.required;return void 0===l||l?a===D.Select?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("label",{htmlFor:r,children:n}),Object(G.jsx)("select",{name:i,id:r,value:s,onChange:c,children:o.map((function(e,t){return Object(G.jsx)("option",{value:e.value,children:e.text},"".concat(e,"-").concat(t))}))})]}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("label",{htmlFor:r,children:n}),Object(G.jsx)("input",{type:a,name:i,id:r,value:s,onChange:c,required:u})]}):null},X=n(32),$=n(33),_=$.a.table(v||(v=Object(X.a)(["\n  border-collapse: collapse;\n  width: 50%;\n  margin-bottom: 5rem;\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);\n  overflow: auto;\n\n  tr {\n    background: #f7f9f9;\n  }\n  td {\n    vertical-align: bottom;\n    text-align: center;\n    padding: 2rem;\n    padding-bottom: 0.5rem;\n    padding-top: 0.5rem;\n  }\n\n  th {\n    vertical-align: bottom;\n    text-align: center;\n    padding-bottom: 0;\n    background-color: #2ecc71;\n    color: #ffffff;\n  }\n"]))),ee=$.a.tbody(j||(j=Object(X.a)(["\n  /* tr:hover {\n    background-color: #f5f5f5;\n    cursor: pointer;\n  } */\n"]))),te=function(e){var t,n=e.data,a=(t=n,Object(G.jsx)(ee,{children:t.map((function(e,t){return Object(G.jsx)("tr",{children:Object.keys(e).map((function(t){return"number"===typeof e[t]?Object(G.jsx)("td",{children:new Intl.NumberFormat("en-US",{minimumFractionDigits:2}).format(e[t])},t):Object(G.jsx)("td",{children:e[t]},t)}))},"".concat(e,"-").concat(t))}))})),i=function(e){var t=Object.keys(e[0]),n=[];return t.map((function(e){return e.split(/(?=[A-Z])/)})).forEach((function(e){for(var t="",a=0;a<e.length;a++)t=t+" "+f(e[a]);n.push(t)})),Object(G.jsx)("thead",{children:Object(G.jsx)("tr",{children:n.map((function(e,t){return Object(G.jsx)("th",{children:e},"".concat(e,"-").concat(t))}))})})}(n);return Object(G.jsxs)(_,{children:[i,a]})},ne=$.a.form(O||(O=Object(X.a)(["\n  font-family: inherit;\n  border: thin solid lightgrey;\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);\n  max-width: 50rem;\n  box-sizing: border-box;\n  border-radius: 10px;\n\n  h1 {\n    text-align: center;\n    border-bottom: 1px solid black;\n    margin: 0;\n    margin-bottom: 1rem;\n    background-color: #2ecc71;\n    background-size: 100% 100%;\n    color: white;\n    padding-bottom: 1rem;\n  }\n\n  .input-container {\n    width: 75%;\n    margin: auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .payments-container {\n    width: 75%;\n    margin: auto;\n    display: flex;\n    margin-top: 1rem;\n    flex-direction: column;\n  }\n\n  .payments-container > div {\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .input-container > input,\n  .input-container > label,\n  .input-container > select {\n    margin-top: 0.5rem;\n    width: 50%;\n    font: inherit;\n    padding: 2px 2px;\n    box-sizing: border-box;\n  }\n\n  input,\n  select {\n    border: 1px solid grey;\n    border-radius: 4px;\n    text-align: right;\n  }\n\n  input:focus,\n  select:focus {\n    background: #55efc4;\n  }\n\n  input[type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  button {\n    display: block;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    border-radius: 10px;\n    border: none;\n    text-align: center;\n    text-decoration: none;\n    color: white;\n    background-color: #2ecc71;\n    font-size: 14px;\n    padding: 10px;\n    padding-left: 16px;\n    padding-right: 16px;\n    cursor: pointer;\n  }\n\n  button:hover {\n    background-color: #81ecec;\n  }\n\n  button[type='submit'] {\n    margin: auto;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  @media (min-width: 40rem) {\n    margin: auto;\n    margin-top: 2.5rem;\n    width: 40rem;\n  }\n"])));n(244);!function(e){e.Select="select",e.Text="text",e.Number="number"}(D||(D={}));var ae={name:"",description:"",classification:"operating",prepaid:"true",interestRate:0,deferredRent:0,leaseIncentive:0,initialDirectCosts:0,useEconomicLife:"false",economicLife:0},ie=function(){var e=Object(r.useState)({lease:"",description:"",classification:"",interestRate:0,totalPayments:0,quantityOfPayments:0,presentValue:0,prepaid:!0,startDate:"",endDate:"",payments:[],asset:[],liability:[]}),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)([]),s=Object(u.a)(i,2),c=s[0],o=s[1],d=function(e){var t=Object(r.useState)(e),n=Object(u.a)(t,2),a=n[0],i=n[1];return[a,function(e){var t=e.currentTarget,n=t.id,r=t.value;i(Object(m.a)(Object(m.a)({},a),{},Object(h.a)({},n,r)))}]}(ae),y=Object(u.a)(d,2),g=y[0],b=y[1],v=Object(r.useState)([{startDate:"",endDate:"",frequency:"monthly",amount:0,min:""}]),j=Object(u.a)(v,2),O=j[0],x=j[1];Object(r.useEffect)((function(){if(""!==n.lease){var e=function(e){var t,n=Object(m.a)({},e),a=n.asset.map((function(e){return[e.date,e.beginningBalance,e.depreciation,e.endingBalance]})),i=n.liability.map((function(e){return[e.date,e.beginningBalance,e.payment,e.interestExpense,e.interestPayment,e.principal,e.endingBalance,e.shortTermBalance,e.longTermBalance]}));return[{columns:[""],data:[["Name: ",f(n.lease)],["Description: ",f(n.description)],["Classificatoin: ",f(n.classification)],["Prepaid",n.prepaid],["Discount Rate: ",(t=n.interestRate,t.toLocaleString("en-US",{maximumFractionDigits:2,style:"percent"}))],["Total Payments: ",n.totalPayments],["Present Value: ",n.presentValue],["Start Date: ",n.startDate],["End Date: ",n.endDate]]},{ySteps:5,columns:["Asset Schedule"],data:[[""]]},{ySteps:-1,columns:["Date","Beginning Balance","Depreciation","Ending Balance"],data:a},{ySteps:-a.length-2,xSteps:6,columns:["Liability Schedule"],data:[[""]]},{ySteps:-1,xSteps:6,columns:["Date","Beginning Balance","Payment","Interest Expense","Interest Payment","Principal","Ending Balance","Short Term Balance","Long Term Balance"],data:i}]}(n);o(e)}}),[n]),Object(r.useEffect)((function(){}),[g]);var P=[{label:"Name:",type:D.Text,name:"name",id:"name",value:g.name,onChange:b,required:!0},{label:"Description:",type:D.Text,name:"description",id:"description",value:g.description,onChange:b,required:!0},{label:"Classification:",type:D.Select,name:"classification",id:"classification",value:g.classification,onChange:b,options:[{text:"Operating",value:"operating"},{text:"Finance",value:"finance"}]},{label:"Use Economic Life:",type:D.Select,name:"useEconomicLife",id:"useEconomicLife",value:g.useEconomicLife,onChange:b,options:[{text:"Yes",value:"true"},{text:"No",value:"false"}],show:"finance"===g.classification},{label:"Economic Life (years):",type:D.Number,name:"economicLife",id:"economicLife",value:g.economicLife,onChange:b,show:"true"===g.useEconomicLife&&"finance"===g.classification},{label:"Prepaid:",type:D.Select,name:"prepaid",id:"prepaid",value:g.prepaid,onChange:b,options:[{text:"Yes",value:"true"},{text:"No",value:"false"}],required:!0},{label:"Interest Rate:",type:D.Number,name:"interestRate",id:"interestRate",value:g.interestRate,onChange:b,required:!0},{label:"Deferred Rent:",type:D.Number,name:"deferredRent",id:"deferredRent",value:g.deferredRent,onChange:b},{label:"Lease Incentive:",type:D.Number,name:"leaseIncentive",id:"leaseIncentive",value:g.leaseIncentive,onChange:b},{label:"Initial Direct Costs:",type:D.Number,name:"initialDirectCosts",id:"initialDirectCosts",value:g.initialDirectCosts,onChange:b}];return Object(G.jsxs)("div",{className:"App",children:[Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(ne,{onSubmit:function(e){e.preventDefault();var t=Y(O,g);a(t.getAllLeaseInformation())},children:[Object(G.jsx)("h1",{children:"Create a Lease"}),P.map((function(e,t){return Object(G.jsx)("div",{className:"input-container",children:Object(G.jsx)(K,{config:e})},"".concat(e,"-").concat(t))})),Object(G.jsx)("div",{className:"payments-container",children:Object(G.jsx)(Q,{onChange:function(e){x(e)},onClickAdd:function(e){e.preventDefault();var t=Object(l.a)(O),n=function(e){var t=new Date(e),n=new Date(t.getFullYear(),t.getMonth()+1,1),a=p(n.getMonth());return"".concat(n.getFullYear(),"-").concat(a,"-").concat("01")}(t[t.length-1].endDate);t.push({startDate:n,endDate:"",frequency:"monthly",amount:0,min:n}),x(t)},onClickDelete:function(e){if(e.preventDefault(),1!==O.length){var t=Object(l.a)(O);t.pop(),x(t)}},paymentsArr:O})}),Object(G.jsx)("button",{type:"submit",children:"Create Lease"})]}),0!==n.asset.length?Object(G.jsx)(H,{lease:c,fileName:g.name}):null]}),Object(G.jsxs)("div",{className:"schedule-container",children:[Object(G.jsx)("div",{children:0!==n.liability.length?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("h3",{children:"Liabilty Schedule"}),Object(G.jsx)(te,{data:n.liability})]}):null}),Object(G.jsx)("div",{children:0!==n.asset.length?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("h3",{children:"Asset Schedule"}),Object(G.jsx)(te,{data:n.asset})]}):null})]})]})};o.a.render(Object(G.jsx)(s.a.StrictMode,{children:Object(G.jsx)(ie,{})}),document.getElementById("root"))}},[[245,1,2]]]);
//# sourceMappingURL=main.32e316ed.chunk.js.map