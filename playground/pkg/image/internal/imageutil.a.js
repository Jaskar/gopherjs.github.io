����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �.���image/internal/imageutil	imageutilimage�uversion 4

 imageutil 	 DrawYCbCr  RGBA	image Pix  Stride  Rect Rectangle Min 	Point X  Y  Add@p @q @   Div@ k @   Eq@ @     In@ >r     Mod@ >( @   Mul@ " @   String@      Sub@ @ @    Max@ " >( @ >   At>( x y  	Color	colorimage/color   ( g b a    Bounds>(  >   	Canon>(  >   ColorModel>(   	Model  ConvertBc B    Dx>(     Dy>(     	Empty>(      |S>( >s     &>( >X     	Inset>( n >   Intersect>( >X >   Overlaps>( >X     Size>(  @   .>(      0>( @ >   	Union>( >X >    4< 6 8 B   F<  >   J<  D   Opaque<      PixOffset< 6 8    RGBAAt< 6 8   R  G  B  A  FP  ( @ B D     Set< 6 8 BP    SetRGBA< 6 8 FP    SubImage< >(  	Image  46 8 B  F >  J D   dst  >(   	YCbCr   Cb  Cr  YStride  CStride  SubsampleRatio %YCbCrSubsampleRatio .LX       >  4J 6 8 B   FJ  >   COffsetJ 6 8    JJ  D   fJ      xJ >( H   YCbCrAtJ 6 8  ~   �  �  NP          YOffsetJ 6 8   src  @sp   ok  AA=$packages["image"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} "image/internal/imageutil.DrawYCbCrB�!QB=function(a,b,c,d){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,c,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,d,da,db,dc,dd,de,df,dg,dh,di,dj,dk,dl,dm,dn,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;e=false;  Mf=$imul(((b.Min.X-a.Rect.Min.X>>0)),4);  sg=$imul(((b.Max.X-a.Rect.Min.X>>0)),4);  �h=b.Min.Y-a.Rect.Min.Y>>0;  �i=b.Max.Y-a.Rect.Min.Y>>0;    j=c.SubsampleRatio;    if(j===(0)){   k=h;l=d.Y;m=k;n=l;while(true){if(!(!((m===i)))){break;}  So=$subslice(a.Pix,($imul(m,a.Stride)));  up=($imul(((n-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  �q=($imul(((n-c.Rect.Min.Y>>0)),c.CStride))+((d.X-c.Rect.Min.X>>0))>>0;   r=f;while(true){if(!(!((r===g)))){break;}  �t=$imul((((s=c.Y,((p<0||p>=s.$length)?($throwRuntimeError("index out of range"),undefined):s.$array[s.$offset+p]))>>0)),65793);  �v=(((u=c.Cb,((q<0||q>=u.$length)?($throwRuntimeError("index out of range"),undefined):u.$array[u.$offset+q]))>>0))-128>>0;  �x=(((w=c.Cr,((q<0||q>=w.$length)?($throwRuntimeError("index out of range"),undefined):w.$array[w.$offset+q]))>>0))-128>>0;  
�y=t+($imul(91881,x))>>0;    if(((((y>>>0))&4278190080)>>>0)===0){  
�y=(y>>$min((16),31))>>0;    }else{  
�y=~((y>>31>>0))>>0;    }  
�z=(t-($imul(22554,v))>>0)-($imul(46802,x))>>0;    if(((((z>>>0))&4278190080)>>>0)===0){  Ez=(z>>$min((16),31))>>0;    }else{  `z=~((z>>31>>0))>>0;    }  zaa=t+($imul(116130,v))>>0;    if(((((aa>>>0))&4278190080)>>>0)===0){  �aa=(aa>>$min((16),31))>>0;    }else{  �aa=~((aa>>31>>0))>>0;    }  Aab=$subslice(o,r,(r+4>>0),o.$length);  g(0>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+0]=((y<<24>>>24)));  ~(1>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+1]=((z<<24>>>24)));  �(2>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+2]=((aa<<24>>>24)));  �(3>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+3]=255);  ac=r+4>>0;ad=p+1>>0;ae=q+1>>0;r=ac;p=ad;q=ae;}  <af=m+1>>0;ag=n+1>>0;m=af;n=ag;}    }else if(j===(1)){  �ah=h;ai=d.Y;aj=ah;ak=ai;while(true){if(!(!((aj===i)))){break;}  !al=$subslice(a.Pix,($imul(aj,a.Stride)));  Cam=($imul(((ak-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  �ao=($imul(((ak-c.Rect.Min.Y>>0)),c.CStride))-(an=c.Rect.Min.X/2,(an===an&&an!==1/0&&an!==-1/0)?an>>0:$throwRuntimeError("integer divide by zero"))>>0;  �ap=f;aq=d.X;ar=ap;as=aq;while(true){if(!(!((ar===g)))){break;}  	au=ao+(at=as/2,(at===at&&at!==1/0&&at!==-1/0)?at>>0:$throwRuntimeError("integer divide by zero"))>>0;  naw=$imul((((av=c.Y,((am<0||am>=av.$length)?($throwRuntimeError("index out of range"),undefined):av.$array[av.$offset+am]))>>0)),65793);  �ay=(((ax=c.Cb,((au<0||au>=ax.$length)?($throwRuntimeError("index out of range"),undefined):ax.$array[ax.$offset+au]))>>0))-128>>0;  �ba=(((az=c.Cr,((au<0||au>=az.$length)?($throwRuntimeError("index out of range"),undefined):az.$array[az.$offset+au]))>>0))-128>>0;  wbb=aw+($imul(91881,ba))>>0;    if(((((bb>>>0))&4278190080)>>>0)===0){  �bb=(bb>>$min((16),31))>>0;    }else{  �bb=~((bb>>31>>0))>>0;    }  �bc=(aw-($imul(22554,ay))>>0)-($imul(46802,ba))>>0;    if(((((bc>>>0))&4278190080)>>>0)===0){  2bc=(bc>>$min((16),31))>>0;    }else{  Mbc=~((bc>>31>>0))>>0;    }  gbd=aw+($imul(116130,ay))>>0;    if(((((bd>>>0))&4278190080)>>>0)===0){  �bd=(bd>>$min((16),31))>>0;    }else{  �bd=~((bd>>31>>0))>>0;    }  .be=$subslice(al,ar,(ar+4>>0),al.$length);  T(0>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+0]=((bb<<24>>>24)));  k(1>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+1]=((bc<<24>>>24)));  �(2>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+2]=((bd<<24>>>24)));  �(3>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+3]=255);  �bf=ar+4>>0;bg=as+1>>0;bh=am+1>>0;ar=bf;as=bg;am=bh;}  
bi=aj+1>>0;bj=ak+1>>0;aj=bi;ak=bj;}    }else if(j===(2)){  �bk=h;bl=d.Y;bm=bk;bn=bl;while(true){if(!(!((bm===i)))){break;}  bo=$subslice(a.Pix,($imul(bm,a.Stride)));  0bp=($imul(((bn-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  tbt=($imul((((bq=bn/2,(bq===bq&&bq!==1/0&&bq!==-1/0)?bq>>0:$throwRuntimeError("integer divide by zero"))-(br=c.Rect.Min.Y/2,(br===br&&br!==1/0&&br!==-1/0)?br>>0:$throwRuntimeError("integer divide by zero"))>>0)),c.CStride))-(bs=c.Rect.Min.X/2,(bs===bs&&bs!==1/0&&bs!==-1/0)?bs>>0:$throwRuntimeError("integer divide by zero"))>>0;  �bu=f;bv=d.X;bw=bu;bx=bv;while(true){if(!(!((bw===g)))){break;}  �bz=bt+(by=bx/2,(by===by&&by!==1/0&&by!==-1/0)?by>>0:$throwRuntimeError("integer divide by zero"))>>0;  _cb=$imul((((ca=c.Y,((bp<0||bp>=ca.$length)?($throwRuntimeError("index out of range"),undefined):ca.$array[ca.$offset+bp]))>>0)),65793);  �cd=(((cc=c.Cb,((bz<0||bz>=cc.$length)?($throwRuntimeError("index out of range"),undefined):cc.$array[cc.$offset+bz]))>>0))-128>>0;  �cf=(((ce=c.Cr,((bz<0||bz>=ce.$length)?($throwRuntimeError("index out of range"),undefined):ce.$array[ce.$offset+bz]))>>0))-128>>0;  hcg=cb+($imul(91881,cf))>>0;    if(((((cg>>>0))&4278190080)>>>0)===0){  �cg=(cg>>$min((16),31))>>0;    }else{  �cg=~((cg>>31>>0))>>0;    }  �ch=(cb-($imul(22554,cd))>>0)-($imul(46802,cf))>>0;    if(((((ch>>>0))&4278190080)>>>0)===0){  #ch=(ch>>$min((16),31))>>0;    }else{  >ch=~((ch>>31>>0))>>0;    }  Xci=cb+($imul(116130,cd))>>0;    if(((((ci>>>0))&4278190080)>>>0)===0){  �ci=(ci>>$min((16),31))>>0;    }else{  �ci=~((ci>>31>>0))>>0;    }  cj=$subslice(bo,bw,(bw+4>>0),bo.$length);  E(0>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+0]=((cg<<24>>>24)));  \(1>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+1]=((ch<<24>>>24)));  s(2>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+2]=((ci<<24>>>24)));  �(3>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+3]=255);  �ck=bw+4>>0;cl=bx+1>>0;cm=bp+1>>0;bw=ck;bx=cl;bp=cm;}  �cn=bm+1>>0;co=bn+1>>0;bm=cn;bn=co;}    }else if(j===(3)){  �cp=h;cq=d.Y;cr=cp;cs=cq;while(true){if(!(!((cr===i)))){break;}  �ct=$subslice(a.Pix,($imul(cr,a.Stride)));  !cu=($imul(((cs-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  ecx=($imul((((cv=cs/2,(cv===cv&&cv!==1/0&&cv!==-1/0)?cv>>0:$throwRuntimeError("integer divide by zero"))-(cw=c.Rect.Min.Y/2,(cw===cw&&cw!==1/0&&cw!==-1/0)?cw>>0:$throwRuntimeError("integer divide by zero"))>>0)),c.CStride))+((d.X-c.Rect.Min.X>>0))>>0;  �cy=f;while(true){if(!(!((cy===g)))){break;}  1da=$imul((((cz=c.Y,((cu<0||cu>=cz.$length)?($throwRuntimeError("index out of range"),undefined):cz.$array[cz.$offset+cu]))>>0)),65793);  Wdc=(((db=c.Cb,((cx<0||cx>=db.$length)?($throwRuntimeError("index out of range"),undefined):db.$array[db.$offset+cx]))>>0))-128>>0;  zde=(((dd=c.Cr,((cx<0||cx>=dd.$length)?($throwRuntimeError("index out of range"),undefined):dd.$array[dd.$offset+cx]))>>0))-128>>0;  :df=da+($imul(91881,de))>>0;    if(((((df>>>0))&4278190080)>>>0)===0){  wdf=(df>>$min((16),31))>>0;    }else{  �df=~((df>>31>>0))>>0;    }  �dg=(da-($imul(22554,dc))>>0)-($imul(46802,de))>>0;    if(((((dg>>>0))&4278190080)>>>0)===0){  �dg=(dg>>$min((16),31))>>0;    }else{  dg=~((dg>>31>>0))>>0;    }  *dh=da+($imul(116130,dc))>>0;    if(((((dh>>>0))&4278190080)>>>0)===0){  hdh=(dh>>$min((16),31))>>0;    }else{  �dh=~((dh>>31>>0))>>0;    }  �di=$subslice(ct,cy,(cy+4>>0),ct.$length);  (0>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+0]=((df<<24>>>24)));  .(1>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+1]=((dg<<24>>>24)));  E(2>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+2]=((dh<<24>>>24)));  \(3>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+3]=255);  �dj=cy+4>>0;dk=cu+1>>0;dl=cx+1>>0;cy=dj;cu=dk;cx=dl;}  �dm=cr+1>>0;dn=cs+1>>0;cr=dm;cs=dn;}    }else{    e=false;return e;    }    e=true;return e;    };$pkg.DrawYCbCr=B;	DrawYCbCr"image/internal/imageutil.DrawYCbCr ��{"Base":7840,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/image/internal/imageutil/imageutil.go","Base":1,"Size":276,"Lines":[0,55,109,159,160,188,189,258],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/image/internal/imageutil/impl.go","Base":278,"Size":7561,"Lines":[0,46,47,65,66,75,84,86,87,164,236,300,303,375,448,481,578,654,731,791,795,869,942,1012,1089,1097,1101,1200,1204,1278,1333,1334,1372,1410,1442,1474,1503,1504,1540,1594,1628,1695,1696,1763,1818,1819,1895,1933,1968,2003,2004,2052,2059,2095,2113,2130,2158,2183,2192,2199,2245,2302,2351,2416,2441,2476,2490,2503,2523,2529,2530,2567,2602,2616,2629,2649,2655,2656,2682,2717,2731,2744,2764,2770,2771,2855,2893,2916,2939,2962,2980,2985,2989,2990,3026,3080,3114,3181,3182,3246,3311,3335,3336,3412,3450,3485,3520,3521,3569,3576,3612,3630,3647,3675,3700,3709,3716,3762,3819,3868,3933,3958,3993,4007,4020,4040,4046,4047,4084,4119,4133,4146,4166,4172,4173,4199,4234,4248,4261,4281,4287,4288,4372,4410,4433,4456,4479,4497,4502,4506,4507,4543,4597,4631,4698,4699,4767,4832,4856,4857,4933,4971,5006,5041,5042,5090,5097,5133,5151,5168,5196,5221,5230,5237,5283,5340,5389,5454,5479,5514,5528,5541,5561,5567,5568,5605,5640,5654,5667,5687,5693,5694,5720,5755,5769,5782,5802,5808,5809,5893,5931,5954,5977,6000,6018,6023,6027,6028,6064,6118,6152,6219,6220,6291,6346,6347,6423,6461,6496,6531,6532,6580,6587,6623,6641,6658,6686,6711,6720,6727,6773,6830,6879,6944,6969,7004,7018,7031,7051,7057,7058,7095,7130,7144,7157,7177,7183,7184,7210,7245,7259,7272,7292,7298,7299,7383,7421,7444,7467,7490,7508,7513,7517,7518,7528,7543,7546,7559],"Infos":null}]}
 