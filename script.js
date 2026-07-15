/* ============ DATA CONFIG (dễ thay ảnh thật sau này) ============ */

// 21 đồ vật trong chế độ Trốn Tìm, ảnh cắt từ bảng danh sách vật thể gốc.
const hidingObjects = [
  { id: 1, name: "Máy bán nước", image: "assets/objects/obj-01.jpg" },
  { id: 2, name: "Đá", image: "assets/objects/obj-02.jpg" },
  { id: 3, name: "Biển EXIT", image: "assets/objects/obj-03.jpg" },
  { id: 4, name: "Hộp đạn", image: "assets/objects/obj-04.jpg" },
  { id: 5, name: "Thùng carton", image: "assets/objects/obj-05.jpg" },
  { id: 6, name: "Laptop", image: "assets/objects/obj-06.jpg" },
  { id: 7, name: "Ghế xếp", image: "assets/objects/obj-07.jpg" },
  { id: 8, name: "Sách", image: "assets/objects/obj-08.jpg" },
  { id: 9, name: "Bình nước trái cây", image: "assets/objects/obj-09.jpg" },
  { id: 10, name: "Ghế mây", image: "assets/objects/obj-10.jpg" },
  { id: 11, name: "Bóng rổ", image: "assets/objects/obj-11.jpg" },
  { id: 12, name: "Tượng nhân vật", image: "assets/objects/obj-12.jpg" },
  { id: 13, name: "Cây cảnh", image: "assets/objects/obj-13.jpg" },
  { id: 15, name: "Máy lọc nước", image: "assets/objects/obj-14.jpg" },
  { id: 16, name: "Bàn tròn", image: "assets/objects/obj-15.jpg" },
  { id: 17, name: "Thùng rác", image: "assets/objects/obj-16.jpg" },
  { id: 18, name: "Cây trúc", image: "assets/objects/obj-17.jpg" },
  { id: 19, name: "Màn hình máy tính", image: "assets/objects/obj-18.jpg" },
  { id: 20, name: "Thùng máy tính", image: "assets/objects/obj-19.jpg" },
  { id: 21, name: "Mũ bảo hiểm", image: "assets/objects/obj-20.jpg" },
];

// Avatar mẫu dựng sẵn. Thay "image" bằng đường dẫn ảnh thật khi có.
const presetAvatars = {
  male: [
    { id: "m1", label: "Nam 1", image: null, color: "#3B82F6" },
    { id: "m2", label: "Nam 2", image: null, color: "#0EA5E9" },
    { id: "m3", label: "Nam 3", image: null, color: "#22C55E" },
  ],
  female: [
    { id: "f1", label: "Nữ 1", image: null, color: "#EC4899" },
    { id: "f2", label: "Nữ 2", image: null, color: "#F472B6" },
    { id: "f3", label: "Nữ 3", image: null, color: "#F59E0B" },
  ]
};

const mottoOptions = [
  "NÚP KÍN NHƯ BƯNG – Chọn góc khuất, đứng im và hạn chế mọi chuyển động.",
  "HÒA MÌNH VÀO CẢNH – Biến thành đồ vật phù hợp với khu vực để không bị nghi ngờ.",
  "CHẠY LÀ THƯỢNG SÁCH – Chiến thuật liên tục di chuyển.",
  "NÚP NƠI NGUY HIỂM NHẤT – Chọn vị trí dễ thấy đến mức đối thủ không nghĩ có người trốn ở đó.",
  "NAY ĐÂY MAI ĐÓ – Thay đổi vị trí sau một thời gian cố định.",
  "ĐỒNG ĐỘI LÀ MỒI NHỬ – Một người thu hút sự chú ý để những người còn lại trốn an toàn.",
  "NHỎ MÀ CÓ VÕ – Biến thành đồ vật càng nhỏ càng dễ trốn.",
];

const FB_GROUP_URL = "https://www.facebook.com/groups/crossfirelegends";

/* ============ PLACEHOLDER IMAGE GENERATOR ============ */
// Tạo icon placeholder dạng SVG (data URI) — không gọi mạng ngoài, không lỗi CORS.
function makePlaceholderDataUri(text, seedColor){
  const short = text.length > 12 ? text.slice(0,10)+'…' : text;
  const c1 = seedColor || '#6D28D9';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="#1a1330"/>
    </linearGradient></defs>
    <rect width="200" height="200" rx="18" fill="url(#g)"/>
    <text x="100" y="112" font-family="Arial, sans-serif" font-size="30" font-weight="700"
      fill="#ffffff" text-anchor="middle" opacity="0.9">${escapeXml(initials(text))}</text>
    <text x="100" y="150" font-family="Arial, sans-serif" font-size="12" fill="#ffffff" opacity="0.6"
      text-anchor="middle">${escapeXml(short)}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
function makeAvatarPlaceholder(label, color){
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220">
    <rect width="220" height="220" fill="${color}"/>
    <circle cx="110" cy="86" r="40" fill="#ffffff" opacity="0.92"/>
    <path d="M40 210 C40 150 80 130 110 130 C140 130 180 150 180 210 Z" fill="#ffffff" opacity="0.92"/>
    <text x="110" y="205" font-family="Arial, sans-serif" font-size="16" fill="${color}" font-weight="700" text-anchor="middle"></text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
function initials(str){
  return str.split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();
}
function escapeXml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

const PALETTE = ['#8B5CF6','#0EA5E9','#22C55E','#F59E0B','#EC4899','#EF4444','#14B8A6','#A855F7'];
hidingObjects.forEach((o,i)=>{ if(!o.image) o.image = makePlaceholderDataUri(o.name, PALETTE[i % PALETTE.length]); });
[...presetAvatars.male, ...presetAvatars.female].forEach(a=>{ if(!a.image) a.image = makeAvatarPlaceholder(a.label, a.color); });

/* ============ STATE ============ */
const state = {
  name: "", uid: "", advice: "", 
  avatarMode: "upload", // 'upload' | 'preset'
  uploadedImage: null, presetAvatarId: null,
  crop: { bgSizeW: 100, bgSizeH: 100, posX: 50, posY: 50, zoom: 1 },
  objectId: null,
  mottoMode: "preset", mottoPresetIndex: null, mottoCustom: ""
};

/* ============ DOM refs ============ */
const $ = id => document.getElementById(id);
const inputName = $('inputName'), inputUid = $('inputUid'), inputAdvice = $('inputAdvice'), inputMottoCustom = $('inputMottoCustom');
const nameCounter = $('nameCounter'), uidCounter = $('uidCounter'), adviceCounter = $('adviceCounter'), mottoCounter = $('mottoCounter');

// dùng lại đúng ảnh logo base64 đã nhúng ở topbar cho logo trong ảnh xuất, tránh nhúng trùng dữ liệu
const brandLogoEl = document.querySelector('.brand-logo');
if(brandLogoEl){ $('pvLogo').src = brandLogoEl.src; }

/* ============ Section 1: name / uid ============ */
inputName.addEventListener('input', ()=>{
  state.name = inputName.value;
  nameCounter.textContent = `${state.name.length}/25`;
  clearFieldError('field-name');
  render();
});
inputUid.addEventListener('input', ()=>{
  inputUid.value = inputUid.value.replace(/[^a-zA-Z0-9]/g,'');
  state.uid = inputUid.value;
  uidCounter.textContent = `${state.uid.length}/18`;
  clearFieldError('field-uid');
  render();
});

/* ============ Section 2: avatar ============ */
const modeUploadBtn = $('modeUploadBtn'), modePresetBtn = $('modePresetBtn');
const uploadPane = $('uploadPane'), presetPane = $('presetPane');
modeUploadBtn.addEventListener('click', ()=>{
  state.avatarMode = 'upload';
  modeUploadBtn.classList.add('active'); modePresetBtn.classList.remove('active');
  uploadPane.style.display=''; presetPane.style.display='none';
  render();
});
modePresetBtn.addEventListener('click', ()=>{
  state.avatarMode = 'preset';
  modePresetBtn.classList.add('active'); modeUploadBtn.classList.remove('active');
  presetPane.style.display=''; uploadPane.style.display='none';
  render();
});

const uploadZone = $('uploadZone'), fileInput = $('fileInput'), cropArea = $('cropArea'), cropBox = $('cropBox'), zoomRange = $('zoomRange');
uploadZone.addEventListener('click', ()=> fileInput.click());
fileInput.addEventListener('change', e=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ev=>{
    state.uploadedImage = ev.target.result;
    state.avatarMode = 'upload';
    state.crop = { bgSizeW:100, bgSizeH:100, posX:50, posY:50, zoom:1 };
    cropArea.classList.add('show');
    uploadZone.style.display='none';
    const img = new Image();
    img.onload = ()=>{
      // compute cover-fit base percentages relative to square container
      const ratio = img.naturalWidth / img.naturalHeight;
      if(ratio >= 1){ state.crop.baseW = 100*ratio; state.crop.baseH = 100; }
      else { state.crop.baseW = 100; state.crop.baseH = 100/ratio; }
      applyCropBoxStyle();
    };
    img.src = state.uploadedImage;
    render();
  };
  reader.readAsDataURL(file);
});
$('clearUpload').addEventListener('click', ()=>{
  state.uploadedImage = null;
  fileInput.value = '';
  cropArea.classList.remove('show');
  uploadZone.style.display='';
  render();
});
function applyCropBoxStyle(){
  const c = state.crop;
  const w = (c.baseW||100) * c.zoom;
  const h = (c.baseH||100) * c.zoom;
  cropBox.style.backgroundImage = `url(${state.uploadedImage})`;
  cropBox.style.backgroundSize = `${w}% ${h}%`;
  cropBox.style.backgroundPosition = `${c.posX}% ${c.posY}%`;
}
zoomRange.addEventListener('input', ()=>{
  state.crop.zoom = zoomRange.value/100;
  applyCropBoxStyle();
  syncPreviewAvatarFromCrop();
});
// drag to pan
let dragging=false, dragStart={x:0,y:0}, startPos={x:50,y:50};
cropBox.addEventListener('pointerdown', e=>{
  dragging=true; cropBox.setPointerCapture(e.pointerId);
  dragStart={x:e.clientX,y:e.clientY}; startPos={x:state.crop.posX,y:state.crop.posY};
});
cropBox.addEventListener('pointermove', e=>{
  if(!dragging) return;
  const rect = cropBox.getBoundingClientRect();
  const dx = (e.clientX - dragStart.x)/rect.width*100;
  const dy = (e.clientY - dragStart.y)/rect.height*100;
  state.crop.posX = clamp(startPos.x - dx, 0, 100);
  state.crop.posY = clamp(startPos.y - dy, 0, 100);
  applyCropBoxStyle();
  syncPreviewAvatarFromCrop();
});
cropBox.addEventListener('pointerup', ()=> dragging=false);
cropBox.addEventListener('pointercancel', ()=> dragging=false);
function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }

function syncPreviewAvatarFromCrop(){ render(); }

// preset avatars grid
function buildPresetGrid(container, list){
  container.innerHTML='';
  list.forEach(a=>{
    const div = document.createElement('div');
    div.className = 'preset-avatar';
    div.style.backgroundImage = `url(${a.image})`;
    div.innerHTML = '<div class="tick">✓</div>';
    div.addEventListener('click', ()=>{
      state.avatarMode='preset'; state.presetAvatarId = a.id;
      document.querySelectorAll('.preset-avatar').forEach(el=>el.classList.remove('selected'));
      div.classList.add('selected');
      clearFieldError('field-avatar');
      render();
    });
    container.appendChild(div);
  });
}
buildPresetGrid($('presetMaleGrid'), presetAvatars.male);
buildPresetGrid($('presetFemaleGrid'), presetAvatars.female);

/* ============ Section 3: hiding objects ============ */
const objGrid = $('objGrid');
hidingObjects.forEach(o=>{
  const card = document.createElement('div');
  card.className='obj-card';
  card.innerHTML = `<img src="${o.image}" alt="${o.name}"><div class="oname">${o.name}</div><div class="tick">✓</div>`;
  card.addEventListener('click', ()=>{
    state.objectId = o.id;
    document.querySelectorAll('.obj-card').forEach(el=>el.classList.remove('selected'));
    card.classList.add('selected');
    $('objErr').style.display='none';
    render();
  });
  objGrid.appendChild(card);
});

/* ============ Section 4: advice ============ */
inputAdvice.addEventListener('input', ()=>{
  state.advice = inputAdvice.value;
  adviceCounter.textContent = `${state.advice.length}/100`;
  adviceCounter.classList.toggle('warn', state.advice.length >= 90);
  render();
});

/* ============ Section 5: motto ============ */
const mottoList = $('mottoList');
function formatMottoHTML(m){
  const parts = m.split(' – ');
  if(parts.length === 2){
    return `<span><b class="motto-lead">${parts[0]}</b> – ${parts[1]}</span>`;
  }
  return `<span>${m}</span>`;
}
mottoOptions.forEach((m,i)=>{
  const row = document.createElement('label');
  row.className='motto-opt';
  row.innerHTML = `<input type="radio" name="motto" value="${i}">${formatMottoHTML(m)}`;
  row.addEventListener('click', ()=> selectMotto(i, row));
  mottoList.appendChild(row);
});
const customRow = document.createElement('label');
customRow.className='motto-opt';
customRow.innerHTML = `<input type="radio" name="motto" value="custom"><span>✍️ Tự nhập PHONG CÁCH CHƠI</span>`;
customRow.addEventListener('click', ()=> selectMotto('custom', customRow));
mottoList.appendChild(customRow);

function selectMotto(val, rowEl){
  document.querySelectorAll('.motto-opt').forEach(el=>el.classList.remove('selected'));
  rowEl.classList.add('selected');
  rowEl.querySelector('input').checked = true;
  if(val==='custom'){
    state.mottoMode='custom'; state.mottoPresetIndex=null;
    $('mottoCustomWrap').classList.add('show');
  } else {
    state.mottoMode='preset'; state.mottoPresetIndex=val;
    $('mottoCustomWrap').classList.remove('show');
  }
  render();
}
inputMottoCustom.addEventListener('input', ()=>{
  state.mottoCustom = inputMottoCustom.value;
  mottoCounter.textContent = `${state.mottoCustom.length}/90`;
  mottoCounter.classList.toggle('warn', state.mottoCustom.length >= 78);
  render();
});

/* ============ RENDER PREVIEW ============ */
function render(){
  $('pvName').textContent = state.name.trim() ? state.name : 'Nhập tên ingame';
  $('pvUid').textContent = 'UID: ' + (state.uid.trim() ? state.uid : 'Nhập UID ingame');

  // avatar
  const pvAvatar = $('pvAvatar');
  const pvAvatarImg = $('pvAvatarImg');
  if(state.avatarMode==='upload' && state.uploadedImage){
    const c = state.crop;
    const w = (c.baseW||100) * c.zoom, h = (c.baseH||100)*c.zoom;
    const left = (100 - w) * (c.posX/100);
    const top = (100 - h) * (c.posY/100);
    pvAvatarImg.src = state.uploadedImage;
    pvAvatarImg.style.width = `${w}%`;
    pvAvatarImg.style.height = `${h}%`;
    pvAvatarImg.style.left = `${left}%`;
    pvAvatarImg.style.top = `${top}%`;
    pvAvatarImg.style.display = 'block';
  } else if(state.avatarMode==='preset' && state.presetAvatarId){
    const all = [...presetAvatars.male, ...presetAvatars.female];
    const a = all.find(x=>x.id===state.presetAvatarId);
    if(a){
      pvAvatarImg.src = a.image;
      pvAvatarImg.style.width = '100%';
      pvAvatarImg.style.height = '100%';
      pvAvatarImg.style.left = '0%';
      pvAvatarImg.style.top = '0%';
      pvAvatarImg.style.display = 'block';
    } else {
      pvAvatarImg.removeAttribute('src');
      pvAvatarImg.style.display = 'none';
    }
  } else {
    pvAvatarImg.removeAttribute('src');
    pvAvatarImg.style.display = 'none';
  }

  // object
  const obj = hidingObjects.find(o=>o.id===state.objectId);
  const pvObjImg = $('pvObjImg'), pvObjName = $('pvObjName');
  pvObjImg.src = obj ? obj.image : '';
  pvObjImg.classList.toggle('empty', !obj);
  pvObjName.classList.toggle('empty', !obj);
  pvObjName.textContent = obj ? obj.name : 'Chưa chọn';

  // advice / motto
  const adviceText = state.advice.trim() ? state.advice : 'Chia sẻ bí quyết giúp anh em trốn thật lâu.';
  let mottoText = 'Chọn câu nói thể hiện phong cách trốn của anh em.';
  if(state.mottoMode==='preset' && state.mottoPresetIndex!==null) mottoText = mottoOptions[state.mottoPresetIndex];
  if(state.mottoMode==='custom' && state.mottoCustom.trim()) mottoText = state.mottoCustom;
  setBoxText($('pvAdvice'), adviceText);
  setBoxText($('pvMotto'), mottoText);
}
function setBoxText(el, text){
  el.textContent = text;
  el.classList.remove('tier-m','tier-s');
  if(text.length > 70) el.classList.add('tier-s');
  else if(text.length > 45) el.classList.add('tier-m');
}
render();

/* ============ Field error helpers ============ */
function setFieldError(id){ $(id).classList.add('invalid'); }
function clearFieldError(id){ $(id).classList.remove('invalid'); }
function scrollTo(id){ $(id).scrollIntoView({behavior:'smooth', block:'center'}); }

/* ============ Scroll to preview button ============ */
$('btnScrollPreview').addEventListener('click', ()=>{
  $('previewCol').scrollIntoView({behavior:'smooth', block:'start'});
});

/* ============ VALIDATE + GENERATE ============ */
let isGenerating = false;
function validateAndGenerate(){
  if(isGenerating) return;
  clearFieldError('field-name'); clearFieldError('field-uid'); clearFieldError('field-avatar');
  $('objErr').style.display='none';

  if(!state.name.trim()){ setFieldError('field-name'); scrollTo('field-name'); toast('Nhập tên ingame trước nhé!'); return; }
  if(!state.uid.trim()){ setFieldError('field-uid'); scrollTo('field-uid'); toast('Nhập UID ingame trước nhé!'); return; }
  const hasAvatar = (state.avatarMode==='upload' && state.uploadedImage) || (state.avatarMode==='preset' && state.presetAvatarId);
  if(!hasAvatar){ setFieldError('field-avatar'); scrollTo('field-avatar'); toast('Chọn hoặc tải ảnh đại diện trước nhé!'); return; }
  if(!state.objectId){ $('objErr').style.display='block'; scrollTo('field-object'); toast('Chọn 1 đồ vật muốn hóa thân nhé!'); return; }

  generateImage();
}
$('btnGenerate').addEventListener('click', validateAndGenerate);
$('btnGenerateBottom').addEventListener('click', validateAndGenerate);

let lastCanvas = null;
function generateImage(){
  isGenerating = true;
  setGenLoading(true);
  $('previewCol').scrollIntoView({behavior:'smooth', block:'start'});

  const el = $('exportCard');
  const targetWidth = 1350;

  waitForAssetsReady(el).then(()=>{
    const scale = Math.max(2.5, targetWidth / el.offsetWidth);
    return html2canvas(el, { scale: scale, useCORS: true, allowTaint: false, backgroundColor: null });
  }).then(canvas=>{
    lastCanvas = canvas;
    $('resultActions').classList.add('show');
    isGenerating = false;
    setGenLoading(false);
    toast('Đã tạo ảnh xong! Kéo xuống để tải về nhé 🎉');
    $('resultActions').scrollIntoView({behavior:'smooth', block:'center'});
  }).catch(err=>{
    isGenerating = false;
    setGenLoading(false);
    toast('Có lỗi khi tạo ảnh, thử lại nhé!');
    console.error(err);
  });
}
async function waitForAssetsReady(container){
  if(document.fonts && document.fonts.ready){
    try{ await document.fonts.ready; }catch(e){}
  }
  const imgs = [...container.querySelectorAll('img')].filter(img=>img.getAttribute('src'));
  await Promise.all(imgs.map(img=>{
    if(img.complete && img.naturalWidth > 0) return Promise.resolve();
    if(img.decode){ return img.decode().catch(()=>new Promise(res=>{ img.onload=res; img.onerror=res; })); }
    return new Promise(res=>{ img.onload=res; img.onerror=res; });
  }));
  // 1 khung hình để trình duyệt hoàn tất reflow trước khi chụp
  await new Promise(res=> requestAnimationFrame(()=> requestAnimationFrame(res)));
}
function setGenLoading(loading){
  const btns = [$('btnGenerate'), $('btnGenerateBottom')];
  btns.forEach(b=>{
    b.disabled = loading;
    b.innerHTML = loading ? '<span class="spinner"></span> Đang tạo ảnh...' : '🎮 TẠO ẢNH';
  });
}

/* ============ Download / Facebook ============ */
function isIOSDevice(){
  // iPhone/iPad/iPod, kể cả iPadOS 13+ (báo UA giống macOS nhưng có cảm ứng)
  return /iP(hone|od|ad)/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function downloadCanvasImage(canvas, filename){
  const supportsDownloadAttr = (() => {
    const a = document.createElement('a');
    return typeof a.download !== 'undefined';
  })();

  // Trên iOS (Safari, Chrome, Firefox... đều dùng chung engine WebKit),
  // thuộc tính "download" không hoạt động đáng tin cậy -> mở ảnh ở tab mới
  // để người dùng tự nhấn giữ và chọn "Lưu vào Photos" / "Save Image".
  if(isIOSDevice() || !supportsDownloadAttr){
    // Mở tab ngay trong lúc xử lý click (đồng bộ) để tránh bị chặn popup,
    // rồi gán ảnh vào sau khi có blob.
    const newTab = window.open('', '_blank');
    canvas.toBlob((blob)=>{
      if(!blob){
        if(newTab) newTab.close();
        toast('Có lỗi khi tạo ảnh, thử lại nhé!');
        return;
      }
      const url = URL.createObjectURL(blob);
      if(newTab && !newTab.closed){
        newTab.location.href = url;
      } else {
        // Popup bị chặn -> fallback mở ngay tại tab hiện tại
        window.location.href = url;
      }
      toast('Nhấn giữ vào ảnh và chọn "Lưu vào Photos" / "Save Image" nhé!');
    }, 'image/png', 1.0);
    return;
  }

  // Desktop & Android: dùng toBlob + createObjectURL (ổn định hơn toDataURL)
  canvas.toBlob((blob)=>{
    if(!blob){
      toast('Có lỗi khi tạo ảnh, thử lại nhé!');
      return;
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = filename;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(()=> URL.revokeObjectURL(url), 4000);
  }, 'image/png', 1.0);
}

$('btnDownload').addEventListener('click', ()=>{
  if(!lastCanvas) return;
  const slug = slugify(state.name || 'nguoi-choi');
  downloadCanvasImage(lastCanvas, `tron-co-nay-du-thang-chua-${slug}.png`);
});
$('btnFacebook').addEventListener('click', ()=>{
  window.open(FB_GROUP_URL, '_blank');
});
function slugify(str){
  const map = {'à':'a','á':'a','ạ':'a','ả':'a','ã':'a','â':'a','ầ':'a','ấ':'a','ậ':'a','ẩ':'a','ẫ':'a','ă':'a','ằ':'a','ắ':'a','ặ':'a','ẳ':'a','ẵ':'a','è':'e','é':'e','ẹ':'e','ẻ':'e','ẽ':'e','ê':'e','ề':'e','ế':'e','ệ':'e','ể':'e','ễ':'e','ì':'i','í':'i','ị':'i','ỉ':'i','ĩ':'i','ò':'o','ó':'o','ọ':'o','ỏ':'o','õ':'o','ô':'o','ồ':'o','ố':'o','ộ':'o','ổ':'o','ỗ':'o','ơ':'o','ờ':'o','ớ':'o','ợ':'o','ở':'o','ỡ':'o','ù':'u','ú':'u','ụ':'u','ủ':'u','ũ':'u','ư':'u','ừ':'u','ứ':'u','ự':'u','ử':'u','ữ':'u','ỳ':'y','ý':'y','ỵ':'y','ỷ':'y','ỹ':'y','đ':'d'};
  let s = str.toLowerCase().split('').map(ch=>map[ch]||ch).join('');
  return s.replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') || 'nguoi-choi';
}

/* ============ Reset ============ */
$('btnReset').addEventListener('click', ()=> $('resetModal').classList.add('show'));
$('cancelReset').addEventListener('click', ()=> $('resetModal').classList.remove('show'));
$('confirmReset').addEventListener('click', ()=>{
  location.reload();
});

/* ============ Toast ============ */
let toastTimer=null;
function toast(msg){
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 2600);
}