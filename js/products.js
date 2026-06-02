var PRODUCTS = [
  {id:1, name:'소창개껌스틱 30cm (2p)', weight:'2p', wholesale:3000, retail:5000,
   texture:'MIDDLE', texVal:2, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🦴', color:'#FAE8DC', cat:'mixed', catLabel:'혼합',
   ingredients:'철분, 비타민, 필수지방산',
   functions:['빈혈','피부','노화방지','알러지예방']},
  {id:2, name:'소창개껌스틱 20g', weight:'20g', wholesale:2400, retail:4000,
   texture:'MIDDLE', texVal:2, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🦴', color:'#FAE8DC', cat:'mixed', catLabel:'혼합',
   ingredients:'철분, 비타민, 필수지방산',
   functions:['빈혈','피부','노화방지','알러지예방']},
  {id:3, name:'상어연골', weight:'70g', wholesale:4200, retail:7000,
   texture:'HARD', texVal:3, age:[2], size:[3,4],
   emoji:'🦈', color:'#E6F1FB', cat:'bone', catLabel:'뼈·연골',
   ingredients:'콘드로이틴, 뮤코다당, 칼슘, 특수단백질',
   functions:['관절','골다공증','뼈건강','신경통']},
  {id:4, name:'리얼 오리져키', weight:'100g', wholesale:3600, retail:6000,
   texture:'MIDDLE', texVal:2, age:[1,2], size:[2,3,4],
   emoji:'🦆', color:'#FAE8DC', cat:'meat', catLabel:'육류',
   ingredients:'필수지방산, 필수아미노산, 단백질',
   functions:['알러지예방','두뇌','피부']},
  {id:5, name:'오리몸통', weight:'1p', wholesale:1500, retail:2500,
   texture:'HARD', texVal:3, age:[2], size:[2,3,4],
   emoji:'🦆', color:'#FAE8DC', cat:'meat', catLabel:'육류',
   ingredients:'단백질, 무기질, 비타민',
   functions:['다이어트','빈혈','기력']},
  {id:6, name:'단호박 츄러스 SOFT', weight:'100g', wholesale:3000, retail:5000,
   texture:'SOFT', texVal:1, age:[1,2], size:[1,2,3,4],
   emoji:'🎃', color:'#FDF3DC', cat:'veggie', catLabel:'채소',
   ingredients:'비타민A, 무기질, 베타카로틴',
   functions:['면역','피부','시력보호','감기예방']},
  {id:7, name:'황태 츄러스 SOFT', weight:'100g', wholesale:3000, retail:5000,
   texture:'SOFT', texVal:1, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🐟', color:'#E6F1FB', cat:'fish', catLabel:'수산물',
   ingredients:'아미노산, 고단백, 저지방',
   functions:['다이어트','두뇌','기력','신진대사']},
  {id:8, name:'명태포', weight:'60g', wholesale:3000, retail:5000,
   texture:'SOFT', texVal:1, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🐟', color:'#E6F1FB', cat:'fish', catLabel:'수산물',
   ingredients:'아미노산, 고단백, 저지방',
   functions:['다이어트','두뇌','기력','신진대사']},
  {id:9, name:'연어분말 팩', weight:'30g', wholesale:1800, retail:3000,
   texture:'분말', texVal:0, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🐠', color:'#E6F1FB', cat:'powder', catLabel:'분말',
   ingredients:'오메가3, 불포화지방산, 비타민D',
   functions:['두뇌','심장','뼈건강','피부']},
  {id:10, name:'황태분말(통)', weight:'70g', wholesale:6000, retail:10000,
   texture:'분말', texVal:0, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🐟', color:'#E6F1FB', cat:'powder', catLabel:'분말',
   ingredients:'아미노산, 고단백, 저지방',
   functions:['두뇌','기력','다이어트','신진대사']},
  {id:11, name:'양사골', weight:'4p', wholesale:4200, retail:7000,
   texture:'HARD', texVal:3, age:[2], size:[3,4],
   emoji:'🦷', color:'#F3E8FF', cat:'bone', catLabel:'뼈·연골',
   ingredients:'항암물질(CLA), 다이어트 성분',
   functions:['관절','다이어트','알러지예방']},
  {id:12, name:'훈련용 노즈워크 연단고', weight:'100g', wholesale:3600, retail:6000,
   texture:'SOFT', texVal:1, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🐾', color:'#F1E9DF', cat:'mixed', catLabel:'훈련용',
   ingredients:'오메가3, 불포화지방산, 비타민D',
   functions:['두뇌','심장','소화','뼈건강']},
  {id:13, name:'연어당근 SOFT (몽땅)', weight:'100g', wholesale:3000, retail:5000,
   texture:'SOFT', texVal:1, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🥕', color:'#F1E9DF', cat:'mixed', catLabel:'혼합',
   ingredients:'오메가3, 비타민A, 베타카로틴, 섬유질',
   functions:['두뇌','소화','면역','시력보호','피부']},
  {id:14, name:'리얼 소고기져키', weight:'100g', wholesale:3600, retail:6000,
   texture:'MIDDLE', texVal:2, age:[1,2], size:[2,3,4],
   emoji:'🥩', color:'#FCEBEB', cat:'meat', catLabel:'육류',
   ingredients:'철분, 비타민, 고단백, 저지방',
   functions:['빈혈','피부','다이어트','신진대사']},
  {id:15, name:'리얼 참치져키', weight:'100g', wholesale:3600, retail:6000,
   texture:'MIDDLE', texVal:2, age:[1,2], size:[2,3,4],
   emoji:'🐟', color:'#E6F1FB', cat:'fish', catLabel:'수산물',
   ingredients:'칼륨, 항염증 비타민, 고단백, 저지방',
   functions:['심장','관절','다이어트','신진대사']},
  {id:16, name:'소허파', weight:'60g × 3', wholesale:3000, retail:5000,
   texture:'SOFT', texVal:1, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🫁', color:'#FCEBEB', cat:'meat', catLabel:'육류',
   ingredients:'철분, 비타민, 고단백, 저지방',
   functions:['빈혈','피부','다이어트','신진대사']},
  {id:17, name:'소간', weight:'100g', wholesale:4200, retail:7000,
   texture:'MIDDLE', texVal:2, age:[1,2], size:[1,2,3,4],
   emoji:'🫀', color:'#FCEBEB', cat:'meat', catLabel:'육류',
   ingredients:'철분, 비타민, 고단백, 저지방',
   functions:['빈혈','피부','다이어트','신진대사']},
  {id:18, name:'돼지귀 (대용량)', weight:'300g', wholesale:8400, retail:14000,
   texture:'MIDDLE', texVal:2, age:[1,2], size:[1,2,3,4],
   emoji:'🐷', color:'#FAE8DC', cat:'meat', catLabel:'육류',
   ingredients:'콜라겐, 비타민, 고단백, 저지방',
   functions:['피부','노화방지','관절','다이어트']},
  {id:19, name:'오메가 MSM + 연어분말(통)', weight:'100g', wholesale:9600, retail:16000,
   texture:'분말', texVal:0, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🐠', color:'#E6F1FB', cat:'powder', catLabel:'분말',
   ingredients:'오메가3, 불포화지방산, 비타민D',
   functions:['두뇌','심장','관절','뼈건강']},
  {id:20, name:'소간분말(통)', weight:'70g', wholesale:4200, retail:7000,
   texture:'분말', texVal:0, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🫀', color:'#FCEBEB', cat:'powder', catLabel:'분말',
   ingredients:'철분, 고단백, 저지방, 비타민',
   functions:['빈혈','피부','다이어트','신진대사']},
  {id:21, name:'황태포', weight:'50g', wholesale:3600, retail:6000,
   texture:'SOFT', texVal:1, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🐟', color:'#E6F1FB', cat:'fish', catLabel:'수산물',
   ingredients:'필수아미노산, 고단백, 저지방',
   functions:['다이어트','두뇌','기력','신진대사']},
  {id:22, name:'황태포 (대용량)', weight:'50g × 3', wholesale:9000, retail:15000,
   texture:'SOFT', texVal:1, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🐟', color:'#E6F1FB', cat:'fish', catLabel:'수산물',
   ingredients:'필수아미노산, 고단백, 저지방',
   functions:['다이어트','두뇌','기력','신진대사']},
  {id:23, name:'저온건조 연근(통)', weight:'50g', wholesale:5400, retail:9000,
   texture:'HARD', texVal:3, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🌿', color:'#E8F5E1', cat:'veggie', catLabel:'채소',
   ingredients:'비타민C, 식이섬유, 무기질',
   functions:['소화','면역','신진대사']},
  {id:24, name:'저온건조 당근(통)', weight:'50g', wholesale:5400, retail:9000,
   texture:'HARD', texVal:3, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🥕', color:'#FDF3DC', cat:'veggie', catLabel:'채소',
   ingredients:'베타카로틴, 비타민A, 식이섬유',
   functions:['다이어트','시력보호','면역','소화']},
  {id:25, name:'저온건조 완두콩(통)', weight:'50g', wholesale:5400, retail:9000,
   texture:'HARD', texVal:3, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🫘', color:'#E8F5E1', cat:'veggie', catLabel:'채소',
   ingredients:'단백질, 식이섬유, 비타민K',
   functions:['다이어트','소화','뼈건강']},
  {id:26, name:'저온건조 청무(통)', weight:'50g', wholesale:5400, retail:9000,
   texture:'HARD', texVal:3, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🌱', color:'#E8F5E1', cat:'veggie', catLabel:'채소',
   ingredients:'비타민C, 식이섬유, 칼슘',
   functions:['소화','면역','신진대사']},
  {id:27, name:'저온건조 단호박(통)', weight:'50g', wholesale:5400, retail:9000,
   texture:'HARD', texVal:3, age:[1,2,3,4], size:[1,2,3,4],
   emoji:'🎃', color:'#FDF3DC', cat:'veggie', catLabel:'채소',
   ingredients:'비타민A, 베타카로틴, 식이섬유',
   functions:['면역','피부','시력보호','소화']},
];

var profile = {name:'', breed:'', age:'성견', size:'소형견', activity:'보통', health:[], bcs:'', weight:''};
var currentFilter = 'all';

function isMatched(p) {
  var ageMap = {'자견':1,'성견':2,'노령견':3};
  var ageVal = ageMap[profile.age]||2;
  var sizeMap = {'소형견':2,'중대형견':3,'모든견종':4};
  var sizeVal = sizeMap[profile.size]||2;
  var ageOk = p.age.indexOf(4)>-1 || p.age.indexOf(ageVal)>-1;
  var sizeOk = p.size.indexOf(4)>-1 || p.size.indexOf(sizeVal)>-1;
  var healthOk = profile.health.length===0 || profile.health.some(function(h){
    return p.functions.some(function(f){return f.indexOf(h)>-1||h.indexOf(f)>-1;});
  });
  return ageOk && sizeOk && healthOk;
}

function makeSpec(labels, pct, isPowder) {
  return '<div class="spec-row">' +
    '<div class="spec-labels">'+labels.map(function(l){return '<span>'+l+'</span>';}).join('')+'</div>' +
    '<div class="spec-track">' +
      '<div class="spec-fill" style="width:'+pct+'%"></div>' +
      '<div class="spec-dot'+(isPowder?' powder':'')+'" style="left:'+pct+'%"></div>' +
    '</div></div>';
}

function pct(val, min, max){ return Math.round((val-min)/(max-min)*100); }

var FILTER_MAP = {
  '관절': ['관절','골다공증','뼈건강','신경통'],
  '피부': ['피부','모질','노화방지','알러지예방'],
  '다이어트': ['다이어트','저지방'],
  '빈혈': ['빈혈','기력'],
  '두뇌': ['두뇌'],
  '면역': ['면역','감기예방','시력보호'],
};

function filterMatch(p, f) {
  if(f==='all') return true;
  if(f==='SOFT') return p.texture==='SOFT';
  if(f==='MIDDLE') return p.texture==='MIDDLE';
  if(f==='HARD') return p.texture==='HARD';
  if(f==='분말') return p.texture==='분말';
  var keys = FILTER_MAP[f]||[f];
  return p.functions.some(function(fn){ return keys.some(function(k){return fn.indexOf(k)>-1||k.indexOf(fn)>-1;}); });
}

function renderCards() {
  var grid = document.getElementById('productsGrid');
  var matched = 0, visible = 0;
  grid.innerHTML = PRODUCTS.map(function(p){
    var isMatch = isMatched(p);
    if(isMatch) matched++;
    var show = filterMatch(p, currentFilter);
    if(show) visible++;
    var texPct = p.texture==='분말' ? 0 : pct(p.texVal,1,3);
    var agePct = p.age.indexOf(4)>-1 ? 100 : pct(Math.max.apply(null,p.age),1,4);
    var sizePct = p.size.indexOf(4)>-1 ? 100 : pct(Math.max.apply(null,p.size),1,4);
    var isPowder = p.texture==='분말';
    var mClass = p.margin>=35?'margin-good':p.margin>=20?'margin-mid':'margin-low';
    var hlFns = p.functions.slice(0,3).map(function(f){
      var isHL = profile.health.length>0 && profile.health.some(function(h){return f.indexOf(h)>-1||h.indexOf(f)>-1;});
      return '<span class="tag-chip'+(isHL?' highlight':'')+'">'+f+'</span>';
    }).join('');
    return '<div class="product-card'+(isMatch?' matched':'')+(show?'':' hidden')+'">' +
      '<div class="card-img" style="background:'+p.color+';">' +
        '<span>'+p.emoji+'</span>' +
        (isMatch?'<div class="match-badge">✦ 추천</div>':'')+
        '<span class="cat-badge cat-'+p.cat+'">'+p.catLabel+'</span>'+
      '</div>'+
      '<div class="card-body">'+
        '<div class="card-name">'+p.name+'</div>'+
        '<div class="card-weight">'+p.weight+'</div>'+
        '<div class="specs">'+
          (isPowder
            ? '<div class="spec-row"><div class="spec-labels"><span>분말형 제품</span></div><div class="spec-track"><div class="spec-dot powder" style="left:0%;top:50%;transform:translate(-50%,-50%);position:relative;display:inline-block;margin-left:2px;"></div></div></div>'
            : makeSpec(['SOFT','MIDDLE','HARD'], texPct, false)
          )+
          makeSpec(['자견','성견','노령견','전연령'], agePct, false)+
          makeSpec(['초소형','소형견','중대형','모든견종'], sizePct, false)+
        '</div>'+
        '<div class="tag-row">'+hlFns+'</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  }).join('');
  document.getElementById('filterCount').textContent = visible+'개 제품';
  var banner = document.getElementById('matchBanner');
  if(matched>0 && profile.health.length>0){ document.getElementById('matchCount').textContent=matched; banner.classList.add('show'); }
  else banner.classList.remove('show');
  document.getElementById('emptyState').style.display = visible===0?'block':'none';
}

function setFilter(val, el) {
  currentFilter = val;
  document.querySelectorAll('.filter-btn').forEach(function(b){b.classList.remove('active');});
  el.classList.add('active');
  renderCards();
}

function parseParams() {
  var p = new URLSearchParams(window.location.search);
  if(p.get('name'))   profile.name     = p.get('name');
  if(p.get('breed'))  profile.breed    = p.get('breed');
  if(p.get('age'))    profile.age      = p.get('age');
  if(p.get('size'))   profile.size     = p.get('size');
  if(p.get('act'))    profile.activity = p.get('act');
  if(p.get('health')) profile.health   = p.get('health').split(',').filter(Boolean);
  if(p.get('bcs'))    profile.bcs      = p.get('bcs');
  if(p.get('weight')) profile.weight   = p.get('weight');
  if(profile.bcs==='과체중'||profile.bcs==='비만'){
    if(profile.health.indexOf('다이어트')===-1) profile.health.push('다이어트');
  }
}

function updatePersonaBar() {
  var hasName = profile.name && profile.name!=='우리 강아지';
  if(hasName){ document.getElementById('pName').textContent=profile.name; document.getElementById('pNameTag').style.display='flex'; }
  document.getElementById('pBreed').textContent  = (profile.breed?profile.breed+' · ':'')+profile.size;
  document.getElementById('pAge').textContent    = profile.age;
  document.getElementById('pAct').textContent    = profile.activity;
  document.getElementById('pHealth').textContent = profile.health.length?profile.health.join(' · '):'없음';
  if(profile.bcs&&profile.bcs!=='이상적'){ document.getElementById('pBcs').textContent=profile.bcs; document.getElementById('pBcsTag').style.display='flex'; }
  var displayName = hasName?profile.name:'내 강아지';
  document.getElementById('heroTitle').innerHTML = '<em>'+displayName+'</em>에게 딱 맞는<br>간식 루틴';
  if(profile.breed) document.getElementById('heroDesc').textContent = profile.breed+' · '+profile.age+' 기준으로 맞춤 추천해 드립니다.';
}

parseParams();
updatePersonaBar();
renderCards();
