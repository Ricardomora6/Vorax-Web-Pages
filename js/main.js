/* ===== CONFIGURACIÓN EDITABLE ===== */
var VIDEOS={hero:'',heroMobile:'',statement:''}; /* ej: hero:'assets/videos/hero.mp4' */
var WA='5215529946456';
var WA_TXT='Hola, estoy interesado en desarrollar una página web con VORAX.';
var DATA={
 services:[['Sitios web empresariales','Presencia sólida para empresas que quieren inspirar confianza.','linear-gradient(135deg,#fff,#555)'],['Tiendas digitales','Catálogos y pedidos con una experiencia de compra propia.','repeating-linear-gradient(90deg,#fff 0 8px,transparent 8px 16px)'],['Landing pages','Una sola página, un solo objetivo: convertir.','radial-gradient(circle,#fff,transparent 70%)'],['Páginas para restaurantes','Menús interactivos y apetito visual.','conic-gradient(from 90deg,#fff,#333,#fff)'],['Catálogos digitales','Productos y servicios claros, ordenados y atractivos.','repeating-linear-gradient(0deg,#fff 0 4px,transparent 4px 12px)'],['Portafolios profesionales','Tu trabajo, presentado como merece verse.','linear-gradient(90deg,#fff 50%,#333 50%)'],['Marcas personales','Tu nombre convertido en una marca reconocible.','radial-gradient(circle at 20% 80%,#fff,transparent 60%)'],['Sistemas web personalizados','Herramientas a la medida de tus procesos.','repeating-linear-gradient(45deg,#fff 0 3px,transparent 3px 10px)'],['Experiencias interactivas','Animación y movimiento al servicio de tu marca.','conic-gradient(#fff,#222,#fff,#222,#fff)']],
 projects:[
  {n:'Aurelio GT',c:'Automotriz de lujo',d:'Catálogo de vehículos con fichas técnicas y cita de manejo.',bg:'#0a0a0b',fg:'#f2f2f2',ac:'#d7263d',f:"'Syne',sans-serif",w:800,tag:'Gran Turismo',h:'Potencia con precisión.',b:'Agendar prueba',r:['Serie GT','Edición Noir','Servicio']},
  {n:'Fuego & Sal',c:'Restaurante premium',d:'Menú interactivo y reservaciones con ambiente propio.',bg:'#1a0f0a',fg:'#f3e6d3',ac:'#e48a3b',f:"'Instrument Serif',serif",w:400,ct:'none',tag:'Cocina de brasa',h:'Una mesa, una historia.',b:'Reservar mesa',r:['Menú de temporada','Carta de vinos','Eventos']},
  {n:'Maison Noor',c:'Moda',d:'Colecciones y lookbook con estética editorial.',bg:'#ece6dd',fg:'#161616',ac:'#161616',f:"'Instrument Serif',serif",w:400,ct:'none',tag:'Colección otoño',h:'Vestir es una forma de pensar.',b:'Ver colección',r:['Nueva temporada','Esenciales','Lookbook']},
  {n:'Altura Residencial',c:'Inmobiliaria',d:'Fichas de propiedades con recorrido visual y contacto directo.',bg:'#0d1a2c',fg:'#e8eef7',ac:'#6db3ff',f:"'Inter',sans-serif",w:500,ct:'none',cr:'2px',tag:'Desarrollos',h:'Encuentra el lugar que te espera.',b:'Ver propiedades',r:['Departamentos','Casas','Terrenos']},
  {n:'Nexora Labs',c:'Empresa tecnológica',d:'Presentación de servicios digitales y soluciones empresariales.',bg:'#05070d',fg:'#dff7f0',ac:'#00e5b0',f:"ui-monospace,'SF Mono',Menlo,monospace",w:700,tag:'// soluciones',h:'Ingeniería que escala.',b:'Hablar con un experto',r:['Plataformas','Automatización','Datos']},
  {n:'Essenza Atelier',c:'Productos exclusivos',d:'Vitrina digital para piezas de edición limitada.',bg:'#0c1f19',fg:'#f2e6c9',ac:'#e7c987',f:"'Instrument Serif',serif",w:400,ct:'none',cr:'40px',tag:'Edición limitada',h:'Lo exclusivo se nota.',b:'Descubrir piezas',r:['Colección I','Colección II','Por encargo']}],
 diff:[['Diseño personalizado','Cada pixel responde a tu marca.'],['Identidad propia','Tu negocio no se parecerá a nadie más.'],['Adaptable a dispositivos','Pensado en móvil, no sólo reducido.'],['Experiencia de usuario','Que tu cliente sepa siempre qué hacer.'],['Navegación intuitiva','Estructura clara, sin fricción.'],['Optimización','Rápido, ligero y listo para buscadores.'],['Desarrollo profesional','Código limpio, ordenado y mantenible.'],['Atención personalizada','Hablas con quien construye tu proyecto.']],
 steps:[['Análisis del negocio','Conocemos tu negocio, tu público y lo que quieres lograr.'],['Planeación estratégica','Definimos estructura, funciones y el camino del visitante.'],['Diseño de identidad digital','Creamos el lenguaje visual que te distingue.'],['Desarrollo y programación','Construimos la experiencia con animación y funcionalidad.'],['Optimización y pruebas','Verificamos velocidad, navegación y adaptación a cada pantalla.'],['Publicación del sitio','Lanzamos tu proyecto y te orientamos para su uso.']]
};
/* ===== FIN CONFIGURACIÓN ===== */
var $=function(s,r){return (r||document).querySelector(s)};
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var waURL='https://wa.me/'+WA+'?text=';
$('#wa').href=waURL+encodeURIComponent(WA_TXT);
/* render */
$('#sv').innerHTML=DATA.services.map(function(s,i){return '<div class="s" style="--g:'+s[2]+'"><span class="n">0'+(i+1)+'</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p><div class="v"></div></div>'}).join('');
$('#pj').innerHTML=DATA.projects.map(function(p,i){return '<button class="c" data-cur="VER" data-i="'+i+'" style="--cb:'+p.bg+';--cf:'+p.fg+';--ca:'+p.ac+';--cfn:'+p.f+';--cw:'+p.w+';--ct:'+(p.ct||'uppercase')+'"><div class="t"><span>'+p.c+'</span><span>0'+(i+1)+'</span></div><div><div class="nm">'+p.n+'</div><p class="ds">'+p.d+'</p><span class="go">Explorar demostración →</span></div></button>'}).join('');
$('#df').innerHTML=DATA.diff.map(function(d,i){return '<div><i>0'+(i+1)+'</i><p><b>'+d[0]+'</b><span style="display:block">'+d[1]+'</span></p></div>'}).join('');
$('#tl').insertAdjacentHTML('beforeend',DATA.steps.map(function(s,i){return '<div class="st" data-n="0'+(i+1)+'"><small>ETAPA 0'+(i+1)+'</small><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join(''));
/* modal */
var dg=$('#dg'),pv=$('#pv'),lenis=null;
function openP(i){var p=DATA.projects[i];pv.style.cssText='--cb:'+p.bg+';--cf:'+p.fg+';--ca:'+p.ac+';--cfn:'+p.f+';--cw:'+p.w+';--ct:'+(p.ct||'uppercase')+';--cr:'+(p.cr||'0');pv.innerHTML='<nav><span>'+p.n+'</span><span>'+p.r.join(' · ')+'</span></nav><div class="tg">'+p.tag+'</div><h4>'+p.h+'</h4><p>'+p.d+'</p><span class="b">'+p.b+'</span><div class="r">'+p.r.map(function(x){return '<div>'+x+'</div>'}).join('')+'</div>';$('#dgu').textContent=p.n.toLowerCase().replace(/[^a-z]+/g,'')+'.concepto';pv.scrollTop=0;dg.showModal();if(lenis)lenis.stop()}
function closeP(){dg.close()}
dg.addEventListener('close',function(){if(lenis)lenis.start()});
$('#dgc').onclick=closeP;dg.addEventListener('click',function(e){if(e.target===dg)closeP()});
$('#pj').addEventListener('click',function(e){var c=e.target.closest('.c');if(c)openP(+c.dataset.i)});
/* menu */
var mb=$('#mb'),mn=$('#mn');
function tgl(o){mn.classList.toggle('o',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú')}
mb.onclick=function(){tgl(!mn.classList.contains('o'))};
document.addEventListener('keydown',function(e){if(e.key==='Escape')tgl(false)});
/* form */
$('#fm').addEventListener('submit',function(e){e.preventDefault();var f=e.target,t='Hola, soy '+f.n.value+' de '+f.b.value+'. Me interesa: '+f.t.value+'.'+(f.m.value?' Mi idea: '+f.m.value:'');window.open(waURL+encodeURIComponent(t),'_blank','noopener')});
/* anchors */
document.addEventListener('click',function(e){var a=e.target.closest('a[href^="#"]');if(!a||a.getAttribute('href')==='#')return;var t=$(a.getAttribute('href'));if(!t)return;e.preventDefault();tgl(false);if(lenis)lenis.scrollTo(t,{offset:0,duration:1.4});else t.scrollIntoView({behavior:RM?'auto':'smooth'})});
/* motion */
function split(el){var t=el.textContent.trim().split(/\s+/);el.innerHTML=t.map(function(w){return '<span class="w"><i>'+w+'</i></span>'}).join(' ');return el.querySelectorAll('i')}
function splitH(h){h.setAttribute('aria-label',h.textContent.trim());var o='';h.childNodes.forEach(function(n){var e=n.nodeType===1,t=n.textContent.trim().split(/\s+/).filter(Boolean).map(function(w){return '<span class="w" aria-hidden="true"><i>'+w+'</i></span>'}).join(' ');var g=e?n.tagName.toLowerCase():'';o+=(e?'<'+g+'>'+t+'</'+g+'>':t)+' '});h.innerHTML=o;return h.querySelectorAll('i')}
function vid(v,src){if(!src||RM||(navigator.connection&&navigator.connection.saveData))return;v.addEventListener('canplay',function(){v.classList.add('ok');v.play().catch(function(){})},{once:true});v.src=src;v.load()}
vid($('#hv'),innerWidth<700&&VIDEOS.heroMobile?VIDEOS.heroMobile:VIDEOS.hero);vid($('#dv'),VIDEOS.statement);
function boot(){
 var ld=$('#ld');
 if(RM||!window.gsap||!window.ScrollTrigger){document.documentElement.classList.add('noj');return}
 gsap.registerPlugin(ScrollTrigger);
 try{lenis=new Lenis({duration:1.15,smoothWheel:true});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(function(t){lenis.raf(t*1000)});gsap.ticker.lagSmoothing(0)}catch(e){lenis=null}
 /* loader */
 var lb=$('#ld b');lb.innerHTML='VORAX'.split('').map(function(c){return '<span>'+c+'</span>'}).join('');
 var h1w=[].concat([].slice.call(split($('h1 .l1'))),[].slice.call(split($('h1 .l2 em'))),[].slice.call(split($('h1 .l2b'))));
 gsap.set(h1w,{yPercent:115,rotate:4});gsap.set(['.eye','.sub','.cta a','.scr'],{opacity:0,y:30});
 var tl=gsap.timeline({defaults:{ease:'power4.out'}});
 tl.to('#ld b span',{y:0,opacity:1,duration:.9,stagger:.09})
   .to('#ld small',{opacity:1,duration:.4},'<.3')
   .to('#ld b span',{y:'-110%',opacity:0,duration:.7,stagger:.05,ease:'power3.in'},'+=.35')
   .to('#ld',{yPercent:-100,duration:.9,ease:'power4.inOut'},'-=.2')
   .to('.eye',{opacity:1,y:0,duration:.8},'-=.3')
   .to(h1w,{yPercent:0,rotate:0,duration:1.2,stagger:.06},'-=.7')
   .to(['.sub','.cta a','.scr'],{opacity:1,y:0,duration:.9,stagger:.12},'-=.7')
   .set('#ld',{display:'none'});
 /* reveals */
 gsap.utils.toArray('[data-r]:not(h2)').forEach(function(el){gsap.from(el,{y:50,opacity:0,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%'}})});
 gsap.utils.toArray('section h2:not(#dh)').forEach(function(h){var ws=splitH(h);gsap.from(ws,{yPercent:115,rotate:3,duration:1.2,stagger:.07,ease:'power4.out',scrollTrigger:{trigger:h,start:'top 88%'}})});
 var dw=splitH($('#dh'));gsap.to(dw,{opacity:1,stagger:.12,ease:'none',scrollTrigger:{trigger:'#dh',start:'top 75%',end:'bottom 40%',scrub:true}});
 gsap.fromTo('.rings',{scale:.7},{scale:1.2,ease:'none',scrollTrigger:{trigger:'#declaracion',start:'top bottom',end:'bottom top',scrub:true}});
 gsap.from('.sig',{y:40,opacity:0,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:'.sig',start:'top 92%'}});
 gsap.fromTo('.ghost',{yPercent:30},{yPercent:-5,ease:'none',scrollTrigger:{trigger:'#contacto',start:'top bottom',end:'bottom bottom',scrub:true}});
 ['#servicios','#proceso','#contacto'].forEach(function(id){gsap.fromTo(id,{clipPath:'inset(9% 4% 0% 4% round 44px)'},{clipPath:'inset(0% 0% 0% 0% round 0px)',ease:'none',scrollTrigger:{trigger:id,start:'top 100%',end:'top 30%',scrub:true}})});
 gsap.utils.toArray('.st').forEach(function(s){gsap.fromTo(s,{'--o':0},{'--o':1,scrollTrigger:{trigger:s,start:'top bottom',end:'bottom top',scrub:true}})});
 var mqa=$('.mq div');mqa.style.animation='none';var mq=gsap.to(mqa,{xPercent:-50,duration:38,ease:'none',repeat:-1});
 if(lenis)lenis.on('scroll',function(e){mq.timeScale(1+Math.min(Math.abs(e.velocity),25)*.7);gsap.to(mq,{timeScale:1,duration:1.4,overwrite:true})});
 /* filosofia scrub */
 var ws=split($('#ph'));gsap.to(ws,{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:'#ph',start:'top 80%',end:'bottom 45%',scrub:true}});
 /* servicios */
 gsap.utils.toArray('.s').forEach(function(s){gsap.from(s,{y:60,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:s,start:'top 92%'}})});
 gsap.from('.c',{y:90,opacity:0,duration:1.1,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:'#pj',start:'top 85%'}});
 gsap.from('.df div',{opacity:0,y:40,stagger:.07,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'#df',start:'top 85%'}});
 /* proceso */
 gsap.to('.tl .fl',{scaleY:1,ease:'none',scrollTrigger:{trigger:'#tl',start:'top 60%',end:'bottom 70%',scrub:true}});
 gsap.utils.toArray('.st').forEach(function(s){ScrollTrigger.create({trigger:s,start:'top 62%',onEnter:function(){s.classList.add('on')},onLeaveBack:function(){s.classList.remove('on')}});gsap.from(s.children,{y:40,opacity:0,stagger:.1,duration:.9,ease:'power3.out',scrollTrigger:{trigger:s,start:'top 85%'}})});
 gsap.from('.pr',{scale:.8,opacity:0,duration:1.4,ease:'power4.out',scrollTrigger:{trigger:'.pr',start:'top 85%'}});
 /* progress */
 gsap.to('#pg',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:.3}});
 /* hero parallax + marquee speed */
 gsap.to('#inicio h1',{yPercent:-12,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom top',scrub:true}});
 /* desktop-only: cursor, magnetic, tilt */
 if(matchMedia('(hover:hover) and (pointer:fine)').matches){
  document.documentElement.classList.add('cx');
  var cu=$('#cu'),cd=$('#cd'),cl=cu.firstChild,qx=gsap.quickTo(cu,'x',{duration:.55,ease:'power3'}),qy=gsap.quickTo(cu,'y',{duration:.55,ease:'power3'}),px=gsap.quickTo(cd,'x',{duration:.08}),py=gsap.quickTo(cd,'y',{duration:.08});
  addEventListener('mousemove',function(e){cu.style.opacity=cd.style.opacity=1;qx(e.clientX);qy(e.clientY);px(e.clientX);py(e.clientY);gsap.to('#cv',{x:(e.clientX/innerWidth-.5)*-30,y:(e.clientY/innerHeight-.5)*-30,duration:1.2,overwrite:'auto'})});
  document.addEventListener('mouseover',function(e){var t=e.target.closest('[data-cur],a,button,.s');if(!t){cu.className='';cl.textContent='';return}var l=t.dataset.cur;cu.className=l?'t':'h';cl.textContent=l||''});
  document.addEventListener('mousedown',function(){gsap.to(cu,{scale:.8,duration:.2})});document.addEventListener('mouseup',function(){gsap.to(cu,{scale:1,duration:.5,ease:'elastic.out(1,.5)'})});
  document.querySelectorAll('.mg').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.25,y:(e.clientY-r.top-r.height/2)*.35,duration:.4})});b.addEventListener('mouseleave',function(){gsap.to(b,{x:0,y:0,duration:.7,ease:'elastic.out(1,.4)'})})});
  document.querySelectorAll('.c').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');gsap.to(c,{rotateY:(x-.5)*8,rotateX:(.5-y)*8,transformPerspective:900,duration:.5})});c.addEventListener('mouseleave',function(){gsap.to(c,{rotateX:0,rotateY:0,duration:.8})})});
 }
}
/* particles */
function particles(){
 var cv=$('#cv'),x=cv.getContext('2d'),W,H,P=[],m={x:-999,y:-999},run=true,dpr=Math.min(devicePixelRatio||1,2);
 function size(){W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);var n=Math.round(Math.min(90,W*H/16000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.4+.4,z:Math.random()*.8+.2})}
 size();addEventListener('resize',size);
 var hero=$('#inicio');hero.addEventListener('mousemove',function(e){var r=cv.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top;hero.style.setProperty('--sx',m.x+'px');hero.style.setProperty('--sy',m.y+'px')});hero.addEventListener('mouseleave',function(){m.x=m.y=-999});
 new IntersectionObserver(function(en){run=en[0].isIntersecting;if(run&&!RM)f()}).observe(hero);
 function draw(){x.clearRect(0,0,W,H);for(var i=0;i<P.length;i++){var a=P[i];if(!RM){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1}
  var dx=a.x-m.x,dy=a.y-m.y,d=Math.hypot(dx,dy);if(d<140){a.x+=dx/d*1.2;a.y+=dy/d*1.2}
  x.fillStyle='rgba(217,222,229,'+(.2+a.z*.6)+')';x.beginPath();x.arc(a.x,a.y,a.r*(.6+a.z),0,6.3);x.fill();
  for(var j=i+1;j<P.length;j++){var b=P[j],l=Math.hypot(a.x-b.x,a.y-b.y);if(l<110){x.strokeStyle='rgba(200,169,107,'+(.22*(1-l/110))+')';x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}}}
 function f(){if(!run||RM)return;draw();requestAnimationFrame(f)}
 draw();if(!RM)f();
}
particles();
if(document.readyState==='complete')boot();else addEventListener('load',boot);
