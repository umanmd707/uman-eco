/* UMAN-ECO v2.1 — academic carbon footprint tracker.
   No live integrations or verification. Uses browser-local storage only. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  if (!$('tracker')) return;
  const STORE = 'uman_eco_v21_monthly_tracker';
  const TARGET_STORE = 'uman_eco_v21_monthly_target';
  const FMT = (n, d=1) => Number(n).toLocaleString('en-US', { minimumFractionDigits:d, maximumFractionDigits:d });
  const USD = n => Number(n).toLocaleString('en-US', {style:'currency', currency:'USD', maximumFractionDigits:0});
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const persist = () => {try { localStorage.setItem(STORE,JSON.stringify(records)); } catch(e) { message('Browser storage unavailable: data may not persist.'); }};
  const noCsvFormula = v => { const s=String(v ?? ''); return '"'+(/^[=+\-@]/.test(s) ? "'" : '') + s.replace(/"/g,'""') + '"'; };
  const csv = lines => lines.map(line=>line.map(noCsvFormula).join(',')).join('\r\n')+'\r\n';
  const saveText = (filename,content,type='text/csv') => {const url=URL.createObjectURL(new Blob([content],{type:type+';charset=utf-8'})); const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),900);};
  function seed() {
    const months=['2025-11','2025-12',...Array.from({length:10},(_,i)=>`2026-${String(i+1).padStart(2,'0')}`)];
    return months.flatMap((period,i) => {
      const platform=31800*(1-0.016*i)*(1+([1,6].includes(i)?0.017:0));
      const analytics=21800*(1-0.009*i)*(1+([3,8].includes(i)?0.025:0));
      return [
        {period,businessUnit:'Cloud Platforms',facilityKwh:Number(platform.toFixed(2)),factorKg:Number((.355-(i%4)*.009).toFixed(3)),priceUsd:.12,source:'Synthetic / demonstration'},
        {period,businessUnit:'AI & Analytics',facilityKwh:Number(analytics.toFixed(2)),factorKg:Number((.33+((i+1)%4)*.006).toFixed(3)),priceUsd:.15,source:'Synthetic / demonstration'}
      ];
    });
  }
  const validate = (item) => {
    if(!item || typeof item!=='object') return null;
    const period=String(item.period??'').trim();
    if(!/^(20\d\d|2100)-(0[1-9]|1[0-2])$/.test(period))return null;
    const businessUnit=String(item.businessUnit??'').trim();
    if(!businessUnit||businessUnit.length>60)return null;
    const num=(name,max)=>{const v=item[name];if(v===null||v===undefined||String(v).trim()==='')return null;const n=Number(v);return Number.isFinite(n)&&n>=0&&n<=max?n:null;};
    const facilityKwh=num('facilityKwh',1e9),factorKg=num('factorKg',3),priceUsd=num('priceUsd',50);
    if([facilityKwh,factorKg,priceUsd].some(x=>x===null))return null;
    return {period,businessUnit,facilityKwh,factorKg,priceUsd,source:String(item.source||'User-provided / unverified').trim().slice(0,70)};
  };
  const key = item => item.period+'|'+item.businessUnit.toLocaleLowerCase('en-US');
  const validateAll = items => {
    if(!Array.isArray(items)||items.length<1||items.length>1000) return null;
    const values=items.map(validate); if(values.some(x=>!x))return null;
    if(new Set(values.map(key)).size!==values.length)return null;
    return values;
  };
  let records;
  try { records=validateAll(JSON.parse(localStorage.getItem(STORE))) || seed(); }
  catch(e) { records=seed(); }
  let editingIndex = null;
  let target=20;
  try {let t=Number(localStorage.getItem(TARGET_STORE));if(Number.isFinite(t)&&t>=1&&t<=80)target=t;}catch(e){}
  $('trackTarget').value=target;
  const emission = item => item.facilityKwh*item.factorKg/1000;
  const cost = item => item.facilityKwh*item.priceUsd;
  function message(text) { $('trackFormStatus').textContent=text; }
  function unitsSelect() {
    const selector=$('trackUnit'); const chosen=selector.value || 'all';
    const names=[...new Set(records.map(r=>r.businessUnit))].sort((a,b)=>a.localeCompare(b));
    selector.innerHTML='<option value="all">All business units</option>'+names.map(name=>`<option value="${escapeHTML(name)}">${escapeHTML(name)}</option>`).join('');
    selector.value=names.includes(chosen)?chosen:'all';
  }
  function selection() {
    const unit=$('trackUnit').value;
    return records.filter(r=>unit==='all'||r.businessUnit===unit);
  }
  function byMonth(items){
    const map=new Map();
    for(const r of items){let x=map.get(r.period);if(!x){x={period:r.period,kwh:0,t:0,cost:0,count:0};map.set(r.period,x);}
      x.kwh+=r.facilityKwh;x.t+=emission(r);x.cost+=cost(r);x.count++;
    }
    return [...map.values()].sort((a,b)=>a.period.localeCompare(b.period));
  }
  const avg = (items,field) => items.reduce((s,r)=>s+r[field],0)/items.length;
  const stat = (label,value,desc,extra='') => `<div class="stat"><div class="statlabel">${escapeHTML(label)}</div><div class="statnum ${extra}">${escapeHTML(value)}</div><div class="statsmall">${escapeHTML(desc)}</div></div>`;
  function trendChart(months,field,targetLine) {
    if(months.length===0)return '<div class="empty">No observations to display.</div>';
    const w=860,h=270,pL=65,pR=26,pT=29,pB=46;
    const plotW=w-pL-pR,plotH=h-pT-pB;
    const values=months.map(m=>m[field]);
    const hi=Math.max(...values,targetLine||0,0.001)*1.16;
    const X=i=>pL+(months.length===1?plotW/2:i*plotW/(months.length-1));
    const Y=v=>pT+plotH*(1-v/hi);
    const coord=n=>Number(n).toFixed(1);
    let grid='';
    for(let i=0;i<=4;i++){const v=hi*i/4,y=Y(v);grid+=`<line x1="${pL}" y1="${coord(y)}" x2="${w-pR}" y2="${coord(y)}" stroke="#365449" stroke-width="1"/><text x="${pL-10}" y="${coord(y+4)}" text-anchor="end" font-size="12" fill="#b4cac0">${escapeHTML(FMT(v,v<10?1:0))}</text>`;}
    const nodes=months.map((m,i)=>{if(months.length>7&&i%2===1&&i!==months.length-1)return '';return `<text x="${coord(X(i))}" y="${h-15}" font-size="11" text-anchor="middle" fill="#b4cac0">${escapeHTML(m.period.slice(2))}</text>`;}).join('');
    const path=months.map((m,i)=>(i?'L':'M')+coord(X(i))+' '+coord(Y(m[field]))).join(' ');
    const points=months.map((m,i)=>`<circle cx="${coord(X(i))}" cy="${coord(Y(m[field]))}" r="${months.length>24?3:5}" fill="#7dd8ce" stroke="#071917" stroke-width="1"><title>${escapeHTML(m.period+': '+FMT(m[field],2))}</title></circle>`).join('');
    const targetSvg=field==='t'&&Number.isFinite(targetLine)&&targetLine>=0?`<line x1="${pL}" y1="${coord(Y(targetLine))}" x2="${w-pR}" y2="${coord(Y(targetLine))}" stroke="#b5ed8e" stroke-width="2" stroke-dasharray="7 6"/>`:'';
    const unit=field==='t'?'tCO₂e':field==='kwh'?'kWh':'USD';
    return `<div class="trend-legend"><span><i class="legend-dot"></i>Monthly ${escapeHTML(unit)}</span>${targetSvg?'<span><i class="legend-line"></i>Emissions target</span>':''}</div><svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Monthly trend of ${escapeHTML(unit)} for ${months.length} periods"><rect width="${w}" height="${h}" rx="12" fill="#0b231c"/>${grid}${targetSvg}<path d="${path}" fill="none" stroke="#7dd8ce" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>${points}${nodes}</svg>`;
  }
  function drawTable(items) {
    const view=items.map(item=>({item,index:records.indexOf(item)})).sort((a,b)=>b.item.period.localeCompare(a.item.period)||a.item.businessUnit.localeCompare(b.item.businessUnit));
    $('trackRows').innerHTML=view.map(({item:r,index})=>`<tr><td>${escapeHTML(r.period)}</td><td><b>${escapeHTML(r.businessUnit)}</b></td><td>${FMT(r.facilityKwh,0)}</td><td>${FMT(r.factorKg,3)}</td><td>${FMT(emission(r),2)}</td><td>${USD(cost(r))}</td><td><span class="badge">${escapeHTML(r.source)}</span></td><td><div class="tracker-actions"><button type="button" data-track-action="edit" data-index="${index}" aria-label="Edit ${escapeHTML(r.period)} ${escapeHTML(r.businessUnit)}">Edit</button><button type="button" class="del" data-track-action="delete" data-index="${index}" aria-label="Delete ${escapeHTML(r.period)} ${escapeHTML(r.businessUnit)}">Delete</button></div></td></tr>`).join('')||'<tr><td colspan="8" class="empty">No observations match this selection.</td></tr>';
  }
  function render() {
    unitsSelect();
    const items=selection();const months=byMonth(items);
    const totalKwh=items.reduce((s,r)=>s+r.facilityKwh,0);const totalT=items.reduce((s,r)=>s+emission(r),0);
    const fullWindow=months.length>=6;
    const baseline=months.length?avg(months.slice(0,Math.min(3,months.length)),'t'):0;
    const current=months.length?avg(months.slice(-Math.min(3,months.length)),'t'):0;
    const change=baseline>0?(1-current/baseline)*100:null;
    target=Math.max(1,Math.min(80,Number($('trackTarget').value)||20));
    const desired=baseline*(1-target/100);
    $('trackStats').innerHTML=stat('Reporting periods',String(months.length),'Distinct months')+stat('Total electricity',FMT(totalKwh/1000,1)+' MWh','Selected period / unit')+stat('Modeled emissions',FMT(totalT,2)+' t','Operational CO₂e total','highlight')+stat('Recent vs baseline',fullWindow&&change!==null?(change>=0?'−':'+')+FMT(Math.abs(change),1)+'%':'—',fullWindow?'Comparison of 3-month averages':'Requires at least 6 months',fullWindow&&change>=0?'positive':'');
    const field={carbon:'t',energy:'kwh',cost:'cost'}[$('trackMeasure').value]||'t';
    $('trackChart').innerHTML=trendChart(months,field,fullWindow?desired:null);
    $('trackSummary').textContent=months.length?`${months[0].period} to ${months[months.length-1].period} · ${months.length} monthly periods · selected business-unit scope: ${$('trackUnit').selectedOptions[0]?.text||'All'}. Values are estimates from assumed or user-entered factors.`:'Import or add observations to begin.';
    if(fullWindow&&baseline>0){const reached=change>=target;
      const progress=Math.max(0,Math.min(100,change/target*100));
      $('trackProgress').innerHTML=`<div class="progress-number">${FMT(change,1)}% ${change>=0?'lower':'reduction*'}</div><p class="progress-note">Recent 3-month average: <strong>${FMT(current,2)} tCO₂e/month</strong><br>Baseline 3-month average: <strong>${FMT(baseline,2)} tCO₂e/month</strong></p><div class="progress-shell" role="progressbar" aria-valuenow="${Math.round(progress)}" aria-valuemin="0" aria-valuemax="100" aria-label="Progress toward emissions target"><div class="progress-fill" style="width:${progress}%"></div></div><p class="progress-note">Target: ${target}% lower than the baseline (${FMT(desired,2)} tCO₂e/month). <strong>${reached?'Modeled target reached.':'Modeled target not yet reached.'}</strong></p><p class="fine">${change<0?'*Recent modeled emissions are above the baseline; reduction is negative.':'Observed difference is not proof of causal impact.'}</p>`;
    }else{
      $('trackProgress').innerHTML='<div class="empty">At least six distinct monthly periods with a non-zero baseline are needed for the first-three versus latest-three comparison. Monthly values can still be plotted.</div>';
    }
    drawTable(items);
    const teaser=$('overviewTrackerTeaser');
    if(teaser)teaser.textContent=`${months.length} sample reporting periods · ${FMT(totalT,1)} tCO₂e modeled over the selected period · no verified meter data.`;
  }
  function clearEditor() {
    editingIndex=null;$('trackForm').reset();$('obsPeriod').value='2026-11';$('trackFormHeading').textContent='Add or update an observation';$('trackSaveBtn').textContent='Save observation';message('');
  }
  $('trackUnit').addEventListener('change',render);
  $('trackMeasure').addEventListener('change',render);
  $('trackTarget').addEventListener('input',()=>{const t=Number($('trackTarget').value);if(Number.isFinite(t)&&t>=1&&t<=80){try{localStorage.setItem(TARGET_STORE,String(t))}catch(e){}render();}});
  $('trackRows').addEventListener('click',event=>{
    const button=event.target.closest('button[data-track-action]');if(!button)return;
    const index=Number(button.dataset.index),r=records[index];if(!r)return;
    if(button.dataset.trackAction==='delete'){
      if(records.length===1){message('At least one observation is required. Use Restore sample to reset.');return;}
      if(!confirm(`Delete ${r.period} — ${r.businessUnit} from this browser?`))return;
      records.splice(index,1);editingIndex=null;persist();render();message('Observation deleted from this browser only.');return;
    }
    editingIndex=index;
    $('obsPeriod').value=r.period;$('obsUnit').value=r.businessUnit;$('obsKwh').value=r.facilityKwh;$('obsFactor').value=r.factorKg;$('obsPrice').value=r.priceUsd;
    $('obsSource').value=['Illustrative / assumed','User-provided / unverified'].includes(r.source)?r.source:'User-provided / unverified';
    $('trackFormHeading').textContent='Edit an observation';$('trackSaveBtn').textContent='Update observation';
    $('trackForm').scrollIntoView({behavior:'smooth',block:'start'});$('obsPeriod').focus({preventScroll:true});message('Editing locally stored entry.');
  });
  $('trackForm').addEventListener('submit',event=>{
    event.preventDefault();
    const r=validate({period:$('obsPeriod').value,businessUnit:$('obsUnit').value,facilityKwh:$('obsKwh').value,factorKg:$('obsFactor').value,priceUsd:$('obsPrice').value,source:$('obsSource').value});
    if(!r){message('Check the reporting month and all required numeric fields.');return;}
    const duplicate=records.findIndex((v,i)=>i!==editingIndex&&key(v)===key(r));
    if(duplicate>=0){message('A record already exists for this month and business unit. Edit it instead.');return;}
    if(editingIndex===null && records.length>=1000){message('Maximum 1,000 observations. Export or delete records before adding more.');return;}
    if(editingIndex===null)records.push(r);else records[editingIndex]=r;
    persist();render();clearEditor();message('Observation saved locally. Estimates are unverified.');
  });
  $('trackCancelBtn').addEventListener('click',clearEditor);
  $('trackExportBtn').addEventListener('click',()=>{
    const headers=['period','businessUnit','facilityKwh','factorKg','priceUsd','source','estimatedTco2e','estimatedElectricityCostUsd'];
    const lines=[headers,...records.map(r=>[r.period,r.businessUnit,r.facilityKwh,r.factorKg,r.priceUsd,r.source,Number(emission(r).toFixed(6)),Number(cost(r).toFixed(2))])];
    saveText('UMAN-ECO-v2.1-monthly-carbon-tracker.csv',csv(lines));message('CSV exported. No third-party data processing was involved.');
  });
  $('trackResetBtn').addEventListener('click',()=>{
    if(!confirm('Replace all locally saved tracker observations with the synthetic sample?'))return;
    records=seed();editingIndex=null;persist();clearEditor();$('trackUnit').value='all';render();message('Synthetic sample restored.');
  });
  $('trackImportBtn').addEventListener('click',()=>$('trackFile').click());
  function parseCsv(str){
    const rows=[];let row=[],part='',quoted=false;
    for(let i=0;i<str.length;i++){
      const ch=str[i];
      if(ch==='"'){if(quoted&&str[i+1]==='"'){part+='"';i++;}else quoted=!quoted;}
      else if(ch===','&&!quoted){row.push(part);part='';}
      else if((ch==='\n'||ch==='\r')&&!quoted){if(ch==='\r'&&str[i+1]==='\n')i++;row.push(part);if(row.some(v=>v.trim()))rows.push(row);row=[];part='';}
      else part+=ch;
    }
    if(quoted)throw Error('Unterminated CSV quoted field.');
    if(row.length||part){row.push(part);rows.push(row);}
    if(rows.length<2)throw Error('CSV must include headings and at least one record.');
    const names=rows.shift().map(n=>n.trim().replace(/^\uFEFF/,''));
    const required=['period','businessUnit','facilityKwh','factorKg','priceUsd','source'];
    if(required.some(name=>!names.includes(name)))throw Error('CSV is missing one or more required headings: '+required.join(', '));
    return rows.map(line=>Object.fromEntries(names.map((name,i)=>[name,line[i]??''])));
  }
  $('trackFile').addEventListener('change',async event=>{
    const file=event.target.files?.[0];if(!file)return;
    try{
      if(file.size>1*1024*1024)throw Error('Maximum tracker dataset is 1 MiB.');
      const text=await file.text();
      const data=file.name.toLowerCase().endsWith('.json')?JSON.parse(text):parseCsv(text);
      const parsed=validateAll(data);
      if(!parsed)throw Error('Invalid values, duplicate month/unit pairs, or more than 1,000 entries.');
      if(!confirm(`Replace the ${records.length} current observations with ${parsed.length} imported observations (browser only)?`))return;
      records=parsed;editingIndex=null;persist();clearEditor();render();message(`${records.length} observations imported and marked unverified.`);
    }catch(err){message('Import unsuccessful: '+err.message);}finally{event.target.value='';}
  });
  unitsSelect();render();
})();
