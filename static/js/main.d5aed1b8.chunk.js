(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{134:function(t,e,n){},135:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(0),r=n.n(c),i=n(10),s=n.n(i),o=(n(97),n(7)),l=n.n(o),u=n(12),d=n(14),j=n(170),b=n(172),p=n(56),m=n(173),h=n(174),O=n(175),x=n(15),f=n(28),g=n(13),v=n(167),y=n(18),w=Object(v.a)((function(t){return{appBar:Object(g.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(g.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(g.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(y.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(y.b)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(g.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),k=function(t){var e=t.totalItems,n=w(),c=Object(x.f)();return Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(a.jsxs)(b.a,{children:[Object(a.jsxs)(p.a,{component:f.b,to:"/",variant:"h6",className:n.title,color:"inherit",children:[Object(a.jsx)("img",{className:n.image,src:"https://www.designfreelogoonline.com/wp-content/uploads/2016/07/000749-online-store-logos-design-free-online-E-commerce-cart-logo-maker-02.png",height:"25px",alt:"logo"}),"E-Commerce"]}),Object(a.jsx)("div",{className:n.grow}),"/"===c.pathname&&Object(a.jsx)("div",{className:n.button,children:Object(a.jsx)(m.a,{component:f.b,to:"/cart","aria-label":"Show cart item",color:"inherit",children:Object(a.jsx)(h.a,{badgeContent:e,color:"secondary",children:Object(a.jsx)(O.a,{})})})})]})})})},C=n(181),_=n(176),S=n(177),N=n(178),T=n(179),E=n(180),B=Object(v.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),R=function(t){var e=t.product,n=t.onAddToCart,c=B();return Object(a.jsxs)(_.a,{className:c.root,children:[Object(a.jsx)(S.a,{className:c.media,image:e.media.source,title:e.name}),Object(a.jsxs)(N.a,{children:[Object(a.jsxs)("div",{className:c.cardContent,children:[Object(a.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(a.jsx)(p.a,{variant:"h5",color:"textSecondary",component:"p",children:e.price.formatted_with_symbol})]}),Object(a.jsx)(p.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(a.jsx)(T.a,{doubleSpacing:!0,className:c.cardActions,children:Object(a.jsx)(m.a,{"aria-label":"Add to Cart",onClick:function(){return n(e.id,1)},children:Object(a.jsx)(E.a,{})})})]})},A=Object(v.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),P=function(t){var e=t.products,n=t.onAddToCart,c=A();return Object(a.jsxs)("main",{className:c.content,children:[Object(a.jsx)("div",{className:c.toolbar}),Object(a.jsx)(C.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(a.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(a.jsx)(R,{product:t,onAddToCart:n})},t.id)}))})]})},I=n(182),L=n(183),D=Object(v.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),F=function(t){var e=t.item,n=t.handleUpdateQty,c=t.handleRemoveFromCart,r=D();return Object(a.jsxs)(_.a,{className:"cart-item",children:[Object(a.jsx)(S.a,{image:e.media.source,alt:e.name,className:r.media}),Object(a.jsxs)(N.a,{className:r.cardContent,children:[Object(a.jsx)(p.a,{variant:"h4",children:e.name}),Object(a.jsx)(p.a,{variant:"h5",children:e.line_total.formatted_with_symbol})]}),Object(a.jsxs)(T.a,{className:r.cardActions,children:[Object(a.jsxs)("div",{className:r.buttons,children:[Object(a.jsx)(I.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity-1)},children:"-"}),Object(a.jsxs)(p.a,{children:["\xa0",e.quantity,"\xa0"]}),Object(a.jsx)(I.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity+1)},children:"+"})]}),Object(a.jsx)(I.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return c(e.id)},children:"Remove"})]})]})},W=Object(v.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(g.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(g.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),U=function(t){var e=t.cart,n=t.handleUpdateQty,c=t.handleEmptyCart,r=t.handleRemoveFromCart,i=W(),s=function(){return Object(a.jsx)(p.a,{variant:"subtitle1",children:" You have no item in your shopping cart."})},o=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(a.jsx)(C.a,{item:!0,xs:12,sm:4,children:Object(a.jsx)(F,{item:t,handleUpdateQty:n,handleRemoveFromCart:r})},t.id)}))}),Object(a.jsxs)("div",{className:i.cardDetails,children:[Object(a.jsxs)(p.a,{variant:"h5",children:["Subtotal: ",e.subtotal.formatted_with_symbol]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(I.a,{className:i.emptyButton,size:"large",type:"button",color:"secondary",variant:"contained",onClick:c,children:"Empty Cart"}),Object(a.jsx)(I.a,{className:i.checkoutButton,size:"large",type:"button",color:"primary",variant:"contained",component:f.b,to:"/checkout",children:"Check Out"})]})]})]})};return e.line_items?Object(a.jsxs)(L.a,{children:[Object(a.jsx)("div",{className:i.toolbar}),Object(a.jsx)(p.a,{className:i.title,variant:"h6",gutterBottom:!0,children:"Your Shopping Cart"}),e.line_items.length?Object(a.jsx)(o,{}):Object(a.jsx)(s,{})]}):"Loading"},q=n(81),z=n(196),K=n(190),Q=n(192),G=n(48),H=n(195),M=n(191),Y=n(187),J=n(44),V=n(193),X=function(t){var e=t.name,n=t.label,c=(t.required,Object(J.d)().control);return Object(a.jsx)(C.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(J.a,{as:V.a,control:c,fullWidth:!0,name:e,label:n,required:!0})})},Z=n(78),$=new(n.n(Z).a)("pk_2108042d5adfab13fbdbecc44c6ad516756e6f974e6b7",!0),tt=function(t){var e=t.checkoutToken,n=t.next,r=Object(c.useState)([]),i=Object(d.a)(r,2),s=i[0],o=i[1],j=Object(c.useState)(""),b=Object(d.a)(j,2),m=b[0],h=b[1],O=Object(c.useState)([]),x=Object(d.a)(O,2),g=x[0],v=x[1],y=Object(c.useState)(""),w=Object(d.a)(y,2),k=w[0],_=w[1],S=Object(c.useState)([]),N=Object(d.a)(S,2),T=N[0],E=N[1],B=Object(c.useState)(""),R=Object(d.a)(B,2),A=R[0],P=R[1],L=Object(J.c)(),D=Object.entries(s).map((function(t){var e=Object(d.a)(t,2);return{id:e[0],label:e[1]}})),F=Object.entries(g).map((function(t){var e=Object(d.a)(t,2);return{id:e[0],label:e[1]}})),W=T.map((function(t){return{id:t.id,label:"".concat(t.description," - (").concat(t.price.formatted_with_symbol,")")}})),U=function(){var t=Object(u.a)(l.a.mark((function t(e){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.services.localeListShippingCountries(e);case 2:n=t.sent,a=n.countries,o(a),h(Object.keys(a)[0]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=function(){var t=Object(u.a)(l.a.mark((function t(e){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.services.localeListSubdivisions(e);case 2:n=t.sent,a=n.subdivisions,v(a),_(Object.keys(a)[0]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(u.a)(l.a.mark((function t(e,n){var a,c,r=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.length>2&&void 0!==r[2]?r[2]:null,t.next=3,$.checkout.getShippingOptions(e,{country:n,region:a});case 3:c=t.sent,E(c),P(c[0].id);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){U(e.id)}),[]),Object(c.useEffect)((function(){m&&q(m)}),[m]),Object(c.useEffect)((function(){k&&z(e.id,m,k)}),[k]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(a.jsx)(J.b,Object(G.a)(Object(G.a)({},L),{},{children:Object(a.jsxs)("form",{onSubmit:L.handleSubmit((function(t){return n(Object(G.a)(Object(G.a)({},t),{},{shippingCountry:m,shippingSubdivision:k,shippingOption:A}))})),children:[Object(a.jsxs)(C.a,{container:!0,spacing:3,children:[Object(a.jsx)(X,{name:"firstName",label:"First Name"}),Object(a.jsx)(X,{name:"lastName",label:"Last Name"}),Object(a.jsx)(X,{name:"address1",label:"Address"}),Object(a.jsx)(X,{name:"email",label:"Email"}),Object(a.jsx)(X,{name:"city",label:"City"}),Object(a.jsx)(X,{name:"zip",label:"Postal Code"}),Object(a.jsxs)(C.a,{xs:12,sm:6,children:[Object(a.jsx)(H.a,{children:"Shipping Country"}),Object(a.jsx)(M.a,{value:m,fullWidth:!0,onChange:function(t){return h(t.target.value)},children:D.map((function(t){return Object(a.jsx)(Y.a,{value:t.id,children:t.label},t.id)}))})]}),Object(a.jsxs)(C.a,{xs:12,sm:6,children:[Object(a.jsx)(H.a,{children:"Shipping Subdivision"}),Object(a.jsx)(M.a,{value:k,fullWidth:!0,onChange:function(t){return _(t.target.value)},children:F.map((function(t){return Object(a.jsx)(Y.a,{value:t.id,children:t.label},t.id)}))})]}),Object(a.jsxs)(C.a,{xs:12,sm:6,children:[Object(a.jsx)(H.a,{children:"Shipping Option"}),Object(a.jsx)(M.a,{value:A,fullWidth:!0,onChange:function(t){return P(t.target.value)},children:W.map((function(t){return Object(a.jsx)(Y.a,{value:t.id,children:t.label},t.id)}))})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsx)(I.a,{component:f.b,variant:"outlined",to:"/cart",children:"Back to Cart"}),Object(a.jsx)(I.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},et=n(189),nt=n(49),at=n(79),ct=n(186),rt=n(136),it=n(188),st=function(t){var e=t.checkoutToken;return Object(a.jsxs)("div",{children:[Object(a.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(a.jsxs)(ct.a,{disablePadding:!0,children:[e.live.line_items.map((function(t){return Object(a.jsxs)(rt.a,{style:{padding:"10px 0"},children:[Object(a.jsx)(it.a,{primary:t.name,secondary:"Quantity: ".concat(t.quantity)}),Object(a.jsx)(p.a,{variant:"body2",children:t.line_total.formatted_with_symbol})]},t.name)})),Object(a.jsxs)(rt.a,{style:{padding:"10px 0"},children:[Object(a.jsx)(it.a,{primary:"Total"}),Object(a.jsx)(p.a,{variant:"subtitle1",style:{fontWeight:700},children:e.live.subtotal.formatted_with_symbol})]})]})]})},ot=Object(at.a)(Object({NODE_ENV:"production",PUBLIC_URL:"/e-commerce",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_PUBLIC_KEY:"pk_2108042d5adfab13fbdbecc44c6ad516756e6f974e6b7"}).REACT_APP_STRIPE_PUBLIC_KEY),lt=function(t){var e=t.checkoutToken,n=t.nextStep,c=t.backStep,r=t.shippingData,i=t.onCaptureCheckout,s=function(){var t=Object(u.a)(l.a.mark((function t(a,c,s){var o,u,d,j,b;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),s&&c){t.next=3;break}return t.abrupt("return");case 3:return o=c.getElement(nt.CardElement),t.next=6,s.createPaymentMethod({type:"card",card:o});case 6:u=t.sent,d=u.error,j=u.paymentMethod,d?console.log("[error]",d):(b={line_items:e.live.line_items,customer:{firstname:r.firstName,lastname:r.lastName,email:r.email},shipping:{name:"International",street:r.address1,town_city:r.city,county_state:r.shippingSubdivision,postal_zip_code:r.zip,country:r.shippingCountry},fulfillment:{shipping_method:r.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:j.id}}},i(e.id,b),n());case 10:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(st,{checkoutToken:e}),Object(a.jsx)(et.a,{}),Object(a.jsx)(p.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(a.jsx)(nt.Elements,{stripe:ot,children:Object(a.jsx)(nt.ElementsConsumer,{children:function(t){var n=t.elements,r=t.stripe;return Object(a.jsxs)("form",{onSubmit:function(t){return s(t,n,r)},children:[Object(a.jsx)(nt.CardElement,{}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsx)(I.a,{variant:"outlined",onClick:c,children:"Back"}),Object(a.jsxs)(I.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay ",e.live.subtotal.formatted_with_symbol]})]})]})}})})]})},ut=Object(v.a)((function(t){var e;return{appBar:{position:"relative"},toolbar:t.mixins.toolbar,layout:Object(g.a)({marginTop:"5%",width:"auto",marginLeft:t.spacing(2),marginRight:t.spacing(2)},t.breakpoints.up(600+2*t.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(e={marginTop:t.spacing(3),marginBottom:t.spacing(3),padding:t.spacing(2)},Object(g.a)(e,t.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(g.a)(e,t.breakpoints.up(600+2*t.spacing(3)),{marginTop:t.spacing(6),marginBottom:t.spacing(6),padding:t.spacing(3)}),e),stepper:{padding:t.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:t.spacing(3),marginLeft:t.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),dt=["Shipping Address","Payment Details"],jt=function(t){var e=t.cart,n=ut(),r=Object(c.useState)(0),i=Object(d.a)(r,2),s=i[0],o=i[1],j=Object(c.useState)(),b=Object(d.a)(j,2),m=b[0],h=b[1],O=Object(c.useState)(""),x=Object(d.a)(O,2),f=(x[0],x[1]);Object(c.useEffect)((function(){(function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.checkout.generateToken(e.id,{type:"cart"});case 3:n=t.sent,h(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[e]);var g=function(){return Object(a.jsx)("div",{children:"Confirmation"})},v=function(t){f(t),o((function(t){return t+1}))},y=function(){return 0===s?Object(a.jsx)(tt,{checkoutToken:m,next:v}):Object(a.jsx)(lt,{checkoutToken:m})};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:n.toolbar}),Object(a.jsx)("main",{className:n.layout,children:Object(a.jsxs)(q.a,{className:n.paper,children:[Object(a.jsx)(p.a,{variant:"h4",align:"center",children:"Checkout"}),Object(a.jsx)(z.a,{activeStep:s,className:n.stepper,children:dt.map((function(t){return Object(a.jsx)(K.a,{children:Object(a.jsx)(Q.a,{children:t})},t)}))}),s===dt.length?Object(a.jsx)(g,{}):m&&Object(a.jsx)(y,{})]})})]})};n(134);var bt=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],r=e[1],i=Object(c.useState)({}),s=Object(d.a)(i,2),o=s[0],j=s[1],b=function(){var t=Object(u.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.products.list();case 2:e=t.sent,n=e.data,r(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=j,t.next=3,$.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(u.a)(l.a.mark((function t(e,n){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.cart.add(e,n);case 2:a=t.sent,c=a.cart,j(c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=Object(u.a)(l.a.mark((function t(e,n){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.cart.update(e,{quantity:n});case 2:a=t.sent,c=a.cart,j(c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(u.a)(l.a.mark((function t(e){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.cart.remove(e);case 2:n=t.sent,a=n.cart,j(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(u.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.cart.empty();case 2:e=t.sent,n=e.cart,j(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){b(),p()}),[]),console.log(o),Object(a.jsx)(f.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(k,{totalItems:o.total_items}),Object(a.jsxs)(x.c,{children:[Object(a.jsx)(x.a,{exact:!0,path:"/",children:Object(a.jsx)(P,{products:n,onAddToCart:m})}),Object(a.jsx)(x.a,{exact:!0,path:"/cart",children:Object(a.jsx)(U,{cart:o,handleUpdateQty:h,handleRemoveFromCart:O,handleEmptyCart:g})}),Object(a.jsx)(x.a,{exact:!0,path:"/checkout",children:Object(a.jsx)(jt,{cart:o})})]})]})})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(bt,{})}),document.getElementById("root"))},97:function(t,e,n){}},[[135,1,2]]]);
//# sourceMappingURL=main.d5aed1b8.chunk.js.map