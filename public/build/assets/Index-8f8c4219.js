import{h as l,k as Y,e as J,o as B,c as U,b as e,s as K,q as k,a as g,u as v,w as Q,j as d,v as N,t as i,z as C,A as u,F as X,B as Z}from"./app-256f0b1e.js";import{S as ee}from"./sweetalert2.all-39490200.js";import{P as m,D as x,c as te,s as _,a as E}from"./dataTables.select-d90ab369.js";import{L as D}from"./vue3-datepicker-3bd480a6.js";const oe={className:"flex justify-center"},se={className:"w-full"},le={className:"bg-blue-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},ae={className:"flex justify-around items-center"},re=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),ne=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),de=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),ie={class:"flex justify-center my-3"},ue={class:"w-full"},ce={class:"bg-gray-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},me={class:"flex justify-between items-center"},fe=e("label",{for:"datepicker",class:"block text-sm font-medium text-gray-700 mr-3"},"Selecciona una fecha",-1),be={class:"flex items-center"},pe=e("button",{type:"button",class:"ml-2 px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue-300"}," Botón ",-1),ge={class:"flex justify-center my-3"},ve={class:"w-full"},xe={class:"bg-gray-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},_e={class:"flex justify-between items-center"},ye=e("label",{for:"startDate",class:"block text-sm font-medium text-gray-700 mr-3"},"Desde",-1),he=e("label",{for:"endDate",class:"block text-sm font-medium text-gray-700 ml-4 mr-3"},"Hasta",-1),we={className:"border px-10 py-5  border-primary-400 rounded-md   mt-3"},ke={className:"md:col-span-12 lg:col-span-12 col-span-12"},Ne={class:"overflow-x-auto my-5"},Ce=e("thead",null,[e("tr",null,[e("th",{class:"px-4 py-2"},"Id"),e("th",{class:"px-4 py-2"},"codigo_sede"),e("th",{class:"px-4 py-2"},"Codigo de Plataforma"),e("th",{class:"px-4 py-2"},"codigo_cliente")])],-1),De={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},je={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-full overflow-y-auto"},Ae={class:"flex items-center justify-between p-4 border-b"},Me={class:"text-xl font-semibold text-gray-900"},Re=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Te=e("span",{class:"sr-only"},"Cerrar Modal",-1),Se=[Re,Te],Ve={class:"p-4 space-y-4 overflow-y-auto"},Be={className:"my-2"},Ue={className:"text-xl font-thin mb-4"},Ee={className:"mb-4"},Ie=e("label",{for:"plataforma",className:"block mb-1"},"PLATAFORMA",-1),Pe=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),Oe={className:"mb-4"},$e=e("label",{for:"plataforma",className:"block mb-1"},"PLATAFORMA",-1),Fe=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),Le={className:"mb-4"},ze=e("label",{for:"plataforma",className:"block mb-1"},"PLATAFORMA",-1),qe=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),Ge={class:"flex items-center justify-end p-4 border-t"},He=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Aceptar",-1),We={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},Ye={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-full overflow-y-auto"},Je={class:"flex items-center justify-between p-4 border-b"},Ke={class:"text-xl font-semibold text-gray-900"},Qe=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Xe=e("span",{class:"sr-only"},"Cerrar Modal",-1),Ze=[Qe,Xe],et={class:"p-4 space-y-4 overflow-y-auto"},tt={className:"my-2"},ot={className:"text-xl font-thin mb-4"},st={className:"mb-4"},lt=e("label",{for:"plataforma",className:"block mb-1"},"PLATAFORMA",-1),at=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),rt={className:"mb-4"},nt=e("label",{for:"plataforma",className:"block mb-1"},"CODIGO PLATAFORMA",-1),dt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),it={className:"mb-4"},ut=e("label",{for:"plataforma",className:"block mb-1"},"CODIGO CLIENTE",-1),ct=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),mt={class:"flex items-center justify-end p-4 border-t"},ft=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Aceptar",-1),bt={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},pt={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-screen-70 overflow-y-auto"},gt={class:"flex items-center justify-between p-4 border-b"},vt={class:"text-xl font-semibold text-gray-900"},xt=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),_t=e("span",{class:"sr-only"},"Cerrar Modal",-1),yt=[xt,_t],ht={class:"p-4 space-y-4 overflow-y-auto"},wt={class:"my-2"},kt={class:"text-xl font-thin mb-4"},Nt=e("div",{class:"mb-4"},[e("label",{for:"documento",class:"block text-sm font-medium text-gray-700"},"Subir documento"),e("input",{type:"file",id:"documento",name:"documento",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})],-1),Ct={class:"flex items-center justify-end p-4 border-t"},Dt=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Subir Documento",-1),Tt={__name:"Index",props:{datos:Array},setup(j){m.use(x),m.use(x);const I=j,n=l(),A=l([]),M=l([]),P=l([]);l(!1);const c=l(!1),R=l(""),f=l(!1),b=l(""),y=l(!1),T=l(new Date),h=l(new Date),w=l(new Date),p=l(!1),O=s=>{modalTitleUpload.value=s,p.value=!0,console.log("mensjae de exito")};Y(()=>{P.value=I.datos}),J(()=>{n.value.dt.on("deselect",z),n.value.dt.on("deselect",S)});const r=l({id:"",codigo_cliente:"",codigo_sede:"",codigo_plataforma:""}),a=l({id:"",codigo_cliente:"",codigo_sede:"",codigo_plataforma:""});m.use(x),m.use(x),A.value=[{data:null,render:function(s,t,o,V){return V.row+1}},{data:"codigo_sede"},{data:"codigo_plataforma"},{data:"codigo_cliente"}],M.value=[{title:"Plataforma Tienda",extend:"excelHtml5",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-500 text-white px-4 py-2 rounded my-2 hover:bg-green-600 focus:outline-none"},{title:"Plataforma Tienda",extend:"print",text:'<i class="fa-solid fa-print"></i> PRINT',className:"bg-gray-800 text-white px-4 py-2 rounded my-2 hover:bg-gray-900 focus:outline-none"},{title:"Plataforma Tienda",extend:"copy",text:'<i class="fa-solid fa-copy"></i> COPY',className:"bg-gray-400 text-white px-4 py-2 rounded my-2 hover:bg-gray-500 focus:outline-none"}];const $=()=>{const s=n.value.dt.rows({selected:!0}).data().toArray();if(s.length>0){const t=s[0].id,o=s[0].plataforma;ee.mixin({buttonStyling:!0}).fire({title:"¿Está seguro de querer borrar el registro "+o+":"+t+"?",icon:"question",showCancelButton:!0,confirmButtonText:'<i class="fa fa-solid fa-check"></i> Sí, borrar',cancelButtonText:'<i class="fa fa-solid fa-times"></i> Cancelar'}).then(W=>{W.isConfirmed&&te(o,"https://reportes.kingtech.pe/platformstore"+t,"")})}else _("Debe seleccionar una fila antes de poder borrarla","error")},F=s=>{R.value=s,c.value=!0,console.log("mensjae de exito")},L=s=>{if(n.value.dt.rows({selected:!0}).count()===0){_("Debe seleccionar una fila antes de editar","error");return}const o=n.value.dt.rows({selected:!0}).data().toArray()[0];if(!o){_("No se encontraron datos para la fila seleccionada","error");return}a.value.codigo_sede=o.codigo_sede,a.value.codigo_plataforma=o.codigo_plataforma,a.value.codigo_cliente=o.codigo_cliente,console.log(plataforma),b.value=s,f.value=!0},S=s=>{const t=n.value.dt.rows({selected:!0}).count();y.value=t>0},z=s=>{const t=n.value.dt.rows({selected:!0}).count();y.value=t>0},q=()=>{const s=n.value.dt.rows({selected:!0}).data().toArray();if(s.length>0){const t=s[0];a.value.codigo_sede=t.codigo_sede,a.value.codigo_plataforma=t.codigo_plataforma,a.value.codigo_cliente=t.codigo_cliente,console.log(a),E("PUT",a.value,"https://reportes.kingtech.pe/platformstore/"+id,"")}else _("debe selccionar uan fila antes de poder editarla","error")},G=()=>{r.value.id,r.value.plataforma,E("POST",r.value,"https://reportes.kingtech.pe/platformstore",""),console.log(r),c.value=!1},H=()=>{const s=new FormData;s.append("file",fileInput.value.files[0]),Z.post("/api/importar-clientes",s,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log("Archivo importado correctamente:",t.data.message)}).catch(t=>{console.error("Error al importar archivo:",t)})};return(s,t)=>(B(),U(X,null,[e("div",oe,[e("div",se,[e("div",le,[e("div",ae,[y.value?K("",!0):(B(),U("button",{key:0,"data-modal-target":"default-modal",onClick:t[0]||(t[0]=o=>F("Crear")),"data-modal-toggle":"default-modal",className:"block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"}," Crear Registro ")),e("button",{onClick:t[1]||(t[1]=o=>L("Editar")),className:" btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[re,k("Editar Registro ")]),e("button",{onClick:t[2]||(t[2]=o=>O("Subir Documento en Excel")),className:" btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[ne,k("Subir Excel ")]),e("button",{onClick:t[3]||(t[3]=o=>$()),className:"btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[de,k(" Borrar Registro ")])])])])]),e("div",ie,[e("div",ue,[e("div",ce,[e("div",me,[fe,e("div",be,[g(v(D),{modelValue:T.value,"onUpdate:modelValue":t[4]||(t[4]=o=>T.value=o),id:"datepicker",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),pe])])])])]),e("div",ge,[e("div",ve,[e("div",xe,[e("div",_e,[ye,g(v(D),{modelValue:h.value,"onUpdate:modelValue":t[5]||(t[5]=o=>h.value=o),id:"startDate",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),he,g(v(D),{modelValue:w.value,"onUpdate:modelValue":t[6]||(t[6]=o=>w.value=o),id:"endDate",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),e("button",{type:"button",class:"ml-4 px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue-300",onClick:t[7]||(t[7]=o=>s.filterByDates(h.value,w.value))}," Filtrar ")])])])]),e("div",we,[e("div",ke,[e("div",Ne,[g(v(m),{data:j.datos,columns:A.value,ref_key:"table",ref:n,class:"display",options:{select:!0,responsive:!0,autoWidth:!1,dom:"Bfrtip",buttons:M.value,pageLength:10},onSelect:S},{default:Q(()=>[Ce]),_:1},8,["data","columns","options"])])])]),d(e("div",De,[e("div",je,[e("div",Ae,[e("h3",Me,i(b.value),1),e("button",{onClick:t[8]||(t[8]=o=>f.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},Se)]),e("div",Ve,[e("form",{onSubmit:C(q,["prevent"]),classNaem:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[e("div",Be,[e("h2",Ue,i(b.value),1)]),e("div",Ee,[Ie,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[9]||(t[9]=o=>a.value.codigo_sede=o)},null,512),[[u,a.value.codigo_sede]]),Pe]),e("div",Oe,[$e,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[10]||(t[10]=o=>a.value.codigo_plataforma=o)},null,512),[[u,a.value.codigo_plataforma]]),Fe]),e("div",Le,[ze,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[11]||(t[11]=o=>a.value.codigo_cliente=o)},null,512),[[u,a.value.codigo_cliente]]),qe]),e("div",Ge,[He,e("button",{onClick:t[12]||(t[12]=o=>f.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 px-5 py-2.5"},"Rechazar")])],32)])])],512),[[N,f.value]]),d(e("div",We,[e("div",Ye,[e("div",Je,[e("h3",Ke,i(R.value),1),e("button",{onClick:t[13]||(t[13]=o=>c.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},Ze)]),e("div",et,[e("form",{onSubmit:C(G,["prevent"]),classNaem:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[e("div",tt,[e("h2",ot,i(b.value),1)]),e("div",st,[lt,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[14]||(t[14]=o=>r.value.codigo_sede=o)},null,512),[[u,r.value.codigo_sede]]),at]),e("div",rt,[nt,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[15]||(t[15]=o=>r.value.codigo_plataforma=o)},null,512),[[u,r.value.codigo_plataforma]]),dt]),e("div",it,[ut,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[16]||(t[16]=o=>r.value.codigo_cliente=o)},null,512),[[u,r.value.codigo_cliente]]),ct]),e("div",mt,[ft,e("button",{onClick:t[17]||(t[17]=o=>c.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 px-5 py-2.5"},"Rechazar")])],32)])])],512),[[N,c.value]]),d(e("div",bt,[e("div",pt,[e("div",gt,[e("h3",vt,i(s.modalTitleUpload),1),e("button",{onClick:t[18]||(t[18]=o=>p.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},yt)]),e("div",ht,[e("form",{onSubmit:C(H,["prevent"]),enctype:"multipart/form-data",class:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[e("div",wt,[e("h2",kt,i(s.modalTitleUpload),1)]),Nt,e("div",Ct,[Dt,e("button",{onClick:t[19]||(t[19]=o=>p.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 px-5 py-2.5"},"Rechazar")])],32)])])],512),[[N,p.value]])],64))}};export{Tt as default};
