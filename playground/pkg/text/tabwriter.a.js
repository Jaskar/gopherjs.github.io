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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �m��text/tabwriter	tabwriterbytesiounicode/utf8�9
$$ exports $$
pv0tabwritertext/tabwriterAlignRight!
Debug!@&DiscardEmptyColumns!Escape&!�FilterHTML!	NewWriter outputWriterioio 
Write p2nerr6  minwidthtabwidthpaddingpadchar2
flags Writer output : minwidth  tabwidth  padding  padbytes 2 
flags  buf Buffer
bytes
bytes
buf2 off runeBytes2 bootstrap�2 lastReadreadOp  .
BytesbJ  2 StringbJ    LenbJ   CapbJ   TruncatebJn  
ResetbJ   growbJn  GrowbJn  
WritebJp2nerr6 WriteStringbJs nerr6 ReadFrombJrReader Read p2nerr6  n
err6 WriteTobJw:n
err6 WriteBytebJc2 6 WriteRunebJr4nerr6 ReadbJp2nerr6 NextbJn 2 ReadBytebJ c2err6 ReadRunebJ r4sizeerr6 UnreadRunebJ  6 UnreadBytebJ  6 ReadBytesbJ
delim2line2err6 readSlicebJ
delim2line2err6 ReadStringbJ
delim2line err6  pos  cell cell size  
width  htab     endChar 2 
lines � widths   addLinebD   
resetbD   InitbDoutput:minwidthtabwidthpaddingpadchar2
flags D dumpbD   write0bDbuf2  writeNbDsrc2n  writePaddingbD
textw
cellwuseTabs   writeLinesbDpos0
line0
line1pos formatbDpos0
line0
line1pos appendbDtext2  updateWidthbD   startEscapebDch2  endEscapebD   terminateCellbDhtab   
FlushbD err6 
WritebDbuf2nerr6  StripEscape!TabIndent! D*AA=$packages["bytes"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["io"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["unicode/utf8"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D��D=$pkg.cell=$newType(0,$kindStruct,"tabwriter.cell","cell","text/tabwriter",function(size_,width_,htab_){this.$val=this;if(arguments.length===0){this.size=0;this.width=0;this.htab=false;return;}this.size=size_;this.width=width_;this.htab=htab_;});��D.init([{prop:"size",name:"size",pkg:"text/tabwriter",typ:$Int,tag:""},{prop:"width",name:"width",pkg:"text/tabwriter",typ:$Int,tag:""},{prop:"htab",name:"htab",pkg:"text/tabwriter",typ:$Bool,tag:""}]);celltext/tabwriter.cell E��E=$pkg.Writer=$newType(0,$kindStruct,"tabwriter.Writer","Writer","text/tabwriter",function(output_,minwidth_,tabwidth_,padding_,padbytes_,flags_,buf_,pos_,cell_,endChar_,lines_,widths_){this.$val=this;if(arguments.length===0){this.output=$ifaceNil;this.minwidth=0;this.tabwidth=0;this.padding=0;this.padbytes=Q.zero();this.flags=0;this.buf=new A.Buffer.ptr(M.nil,0,R.zero(),S.zero(),0);this.pos=0;this.cell=new D.ptr(0,0,false);this.endChar=0;this.lines=T.nil;this.widths=U.nil;return;}this.output=output_;this.minwidth=minwidth_;this.tabwidth=tabwidth_;this.padding=padding_;this.padbytes=padbytes_;this.flags=flags_;this.buf=buf_;this.pos=pos_;this.cell=cell_;this.endChar=endChar_;this.lines=lines_;this.widths=widths_;});�sV.methods=[{prop:"addLine",name:"addLine",pkg:"text/tabwriter",typ:$funcType([],[],false)},{prop:"reset",name:"reset",pkg:"text/tabwriter",typ:$funcType([],[],false)},{prop:"Init",name:"Init",pkg:"",typ:$funcType([B.Writer,$Int,$Int,$Int,$Uint8,$Uint],[V],false)},{prop:"dump",name:"dump",pkg:"text/tabwriter",typ:$funcType([],[],false)},{prop:"write0",name:"write0",pkg:"text/tabwriter",typ:$funcType([M],[],false)},{prop:"writeN",name:"writeN",pkg:"text/tabwriter",typ:$funcType([M,$Int],[],false)},{prop:"writePadding",name:"writePadding",pkg:"text/tabwriter",typ:$funcType([$Int,$Int,$Bool],[],false)},{prop:"writeLines",name:"writeLines",pkg:"text/tabwriter",typ:$funcType([$Int,$Int,$Int],[$Int],false)},{prop:"format",name:"format",pkg:"text/tabwriter",typ:$funcType([$Int,$Int,$Int],[$Int],false)},{prop:"append",name:"append",pkg:"text/tabwriter",typ:$funcType([M],[],false)},{prop:"updateWidth",name:"updateWidth",pkg:"text/tabwriter",typ:$funcType([],[],false)},{prop:"startEscape",name:"startEscape",pkg:"text/tabwriter",typ:$funcType([$Uint8],[],false)},{prop:"endEscape",name:"endEscape",pkg:"text/tabwriter",typ:$funcType([],[],false)},{prop:"terminateCell",name:"terminateCell",pkg:"text/tabwriter",typ:$funcType([$Bool],[$Int],false)},{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([M],[$Int,$error],false)}];�)E.init([{prop:"output",name:"output",pkg:"text/tabwriter",typ:B.Writer,tag:""},{prop:"minwidth",name:"minwidth",pkg:"text/tabwriter",typ:$Int,tag:""},{prop:"tabwidth",name:"tabwidth",pkg:"text/tabwriter",typ:$Int,tag:""},{prop:"padding",name:"padding",pkg:"text/tabwriter",typ:$Int,tag:""},{prop:"padbytes",name:"padbytes",pkg:"text/tabwriter",typ:Q,tag:""},{prop:"flags",name:"flags",pkg:"text/tabwriter",typ:$Uint,tag:""},{prop:"buf",name:"buf",pkg:"text/tabwriter",typ:A.Buffer,tag:""},{prop:"pos",name:"pos",pkg:"text/tabwriter",typ:$Int,tag:""},{prop:"cell",name:"cell",pkg:"text/tabwriter",typ:D,tag:""},{prop:"endChar",name:"endChar",pkg:"text/tabwriter",typ:$Uint8,tag:""},{prop:"lines",name:"lines",pkg:"text/tabwriter",typ:T,tag:""},{prop:"widths",name:"widths",pkg:"text/tabwriter",typ:U,tag:""}]);Writerbytes.Buffer	io.Writertext/tabwriter.Mtext/tabwriter.Qtext/tabwriter.Rtext/tabwriter.Stext/tabwriter.Ttext/tabwriter.Utext/tabwriter.Vtext/tabwriter.Writertext/tabwriter.cell F��F=$pkg.osError=$newType(0,$kindStruct,"tabwriter.osError","osError","text/tabwriter",function(err_){this.$val=this;if(arguments.length===0){this.err=$ifaceNil;return;}this.err=err_;});IF.init([{prop:"err",name:"err",pkg:"text/tabwriter",typ:$error,tag:""}]);osErrortext/tabwriter.osError MM=$sliceType($Uint8);M NN=$sliceType(D);Ntext/tabwriter.cell OO=$ptrType(N);Otext/tabwriter.N PP=$ptrType($error);P QQ=$arrayType($Uint8,8);Q RR=$arrayType($Uint8,4);R SS=$arrayType($Uint8,64);S TT=$sliceType(N);Ttext/tabwriter.N UU=$sliceType($Int);U VV=$ptrType(E);Vtext/tabwriter.Writer Gnewline Htabs Ivbar Khbar     G=new M([10]);newlinetext/tabwriter.Mtext/tabwriter.newline 1    H=new M($stringToBytes("\t\t\t\t\t\t\t\t"));tabstext/tabwriter.Mtext/tabwriter.tabs     I=new M([124]);vbartext/tabwriter.Mtext/tabwriter.vbar &    K=new M($stringToBytes("---\n"));hbartext/tabwriter.Mtext/tabwriter.hbar  (*text/tabwriter.Writer).addLine��E.ptr.prototype.addLine=function(){var $ptr,a;  ja=this;  �a.lines=$append(a.lines,new N([]));    };E.prototype.addLine=function(){return this.$val.addLine();};WriteraddLine~text/tabwriter.Ntext/tabwriter.Writertext/tabwriter.cell (*text/tabwriter.Writer).reset�,E.ptr.prototype.reset=function(){var $ptr,a;  �a=this;  �a.buf.Reset();  �a.pos=0;  �D.copy(a.cell,new D.ptr(0,0,false));  a.endChar=0;  a.lines=$subslice(a.lines,0,0);  2a.widths=$subslice(a.widths,0,0);  La.addLine();    };E.prototype.reset=function(){return this.$val.reset();};Writerreset~text/tabwriter.Writertext/tabwriter.addLine~text/tabwriter.cell (*text/tabwriter.Writer).Init�?E.ptr.prototype.Init=function(a,b,c,d,e,f){var $ptr,a,b,c,d,e,f,g,h,i,j,k;  �g=this;    if(b<0||c<0||d<0){  �$panic(new $String("negative minwidth, tabwidth, or padding"));    }  �g.output=a;  �g.minwidth=b;  �g.tabwidth=c;  g.padding=d;  h=g.padbytes;i=0;while(true){if(!(i<8)){break;}j=i;  6(k=g.padbytes,((j<0||j>=k.length)?$throwRuntimeError("index out of range"):k[j]=e));    i++;}    if(e===9){  �f=(f&~(4))>>>0;    }  �g.flags=f;  �g.reset();  �return g;    };E.prototype.Init=function(a,b,c,d,e,f){return this.$val.Init(a,b,c,d,e,f);};Writertext/tabwriter.Writertext/tabwriter.reset~ (*text/tabwriter.Writer).dump�|E.ptr.prototype.dump=function(){var $ptr,a,b,c,d,e,f,g,h,i;  a=this;  b=0;  "c=a.lines;d=0;while(true){if(!(d<c.$length)){break;}e=d;f=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  Cconsole.log("(",e,") ");  Yg=f;h=0;while(true){if(!(h<g.$length)){break;}i=$clone(((h<0||h>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+h]),D);  uconsole.log("[",$bytesToString($subslice(a.buf.Bytes(),b,(b+i.size>>0))),"]");  �b=b+(i.size)>>0;    h++;}  �console.log("\n");    d++;}  �console.log("\n");    };E.prototype.dump=function(){return this.$val.dump();};Writerdump~text/tabwriter.Writertext/tabwriter.cell (*text/tabwriter.Writer).write0�.E.ptr.prototype.write0=function(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;  �d=b.output.Write(a);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];f=c[1];    if(!((e===a.$length))&&$interfaceIsEqual(f,$ifaceNil)){   f=B.ErrShortWrite;    }    if(!($interfaceIsEqual(f,$ifaceNil))){  -$panic((g=new F.ptr(f),new g.constructor.elem(g)));    }    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:E.ptr.prototype.write0};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.write0=function(a){return this.$val.write0(a);};Writerwrite0~io.ErrShortWritetext/tabwriter.Writertext/tabwriter.osError (*text/tabwriter.Writer).writeN��E.ptr.prototype.writeN=function(a,b){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Mc=this;  ucase 1:if(!(b>a.$length)){$s=2;continue;}  �$r=c.write0(a);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �b=b-(a.$length)>>0;    $s=1;continue;case 2:  �$r=c.write0($subslice(a,0,b));$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:E.ptr.prototype.writeN};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.writeN=function(a,b){return this.$val.writeN(a,b);};WriterwriteN~text/tabwriter.Writertext/tabwriter.write0~ %(*text/tabwriter.Writer).writePadding��E.ptr.prototype.writePadding=function(a,b,c){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:   d=this;   Jif((d.padbytes[0]===9)||c){$s=1;continue;}$s=2;continue;    case 1:    if(d.tabwidth===0){   �return;    }  !b=$imul((e=(((b+d.tabwidth>>0)-1>>0))/d.tabwidth,(e===e&&e!==1/0&&e!==-1/0)?e>>0:$throwRuntimeError("integer divide by zero")),d.tabwidth);  !Tf=b-a>>0;    if(f<0){  !�$panic(new $String("internal error"));    }  !�$r=d.writeN(H,(g=(((f+d.tabwidth>>0)-1>>0))/d.tabwidth,(g===g&&g!==1/0&&g!==-1/0)?g>>0:$throwRuntimeError("integer divide by zero")));$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  !�return;    case 2:  "$r=d.writeN($subslice(new M(d.padbytes),0),b-a>>0);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:E.ptr.prototype.writePadding};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.writePadding=function(a,b,c){return this.$val.writePadding(a,b,c);};WriterwritePadding~text/tabwriter.Mtext/tabwriter.Writertext/tabwriter.tabstext/tabwriter.writeN~ #(*text/tabwriter.Writer).writeLines�AE.ptr.prototype.writeLines=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=0;  "We=this;  "�d=a;  "�f=b;case 1:if(!(f<c)){$s=2;continue;}  "�h=(g=e.lines,((f<0||f>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+f]));  #i=!((((e.flags&16)>>>0)===0));  #>j=h;k=0;case 3:if(!(k<j.$length)){$s=4;continue;}l=k;m=$clone(((k<0||k>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+k]),D);  #Zif(l>0&&!((((e.flags&32)>>>0)===0))){$s=5;continue;}$s=6;continue;    case 5:  #�$r=e.write0(I);$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 6:  #�if(m.size===0){$s=8;continue;}$s=9;continue;    case 8:  #�if(l<e.widths.$length){$s=11;continue;}$s=12;continue;    case 11:  #�$r=e.writePadding(m.width,(n=e.widths,((l<0||l>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+l])),i);$s=13;case 13:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 12:    $s=10;continue;case 9:  $Qi=false;  $eif(((e.flags&4)>>>0)===0){$s=14;continue;}$s=15;continue;    case 14:  $�$r=e.write0($subslice(e.buf.Bytes(),d,(d+m.size>>0)));$s=17;case 17:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  $�d=d+(m.size)>>0;  $�if(l<e.widths.$length){$s=18;continue;}$s=19;continue;    case 18:  $�$r=e.writePadding(m.width,(o=e.widths,((l<0||l>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+l])),false);$s=20;case 20:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 19:    $s=16;continue;case 15:  %Hif(l<e.widths.$length){$s=21;continue;}$s=22;continue;    case 21:  %e$r=e.writePadding(m.width,(p=e.widths,((l<0||l>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+l])),false);$s=23;case 23:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 22:  %�$r=e.write0($subslice(e.buf.Bytes(),d,(d+m.size>>0)));$s=24;case 24:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  %�d=d+(m.size)>>0;    case 16:    case 10:    k++;$s=3;continue;case 4:  %�if((f+1>>0)===e.lines.$length){$s=25;continue;}$s=26;continue;    case 25:  &n$r=e.write0($subslice(e.buf.Bytes(),d,(d+e.cell.size>>0)));$s=28;case 28:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  &�d=d+(e.cell.size)>>0;    $s=27;continue;case 26:  &�$r=e.write0(G);$s=29;case 29:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 27:  "�f=f+(1)>>0;    $s=1;continue;case 2:  'return d;    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.writeLines};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.writeLines=function(a,b,c){return this.$val.writeLines(a,b,c);};WriterwriteLines~text/tabwriter.Writertext/tabwriter.celltext/tabwriter.newlinetext/tabwriter.vbartext/tabwriter.write0~text/tabwriter.writePadding~ (*text/tabwriter.Writer).format�E.ptr.prototype.format=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=0;  '�e=this;  (6d=a;  (Bf=e.widths.$length;  (_g=b;case 1:if(!(g<c)){$s=2;continue;}  (�i=(h=e.lines,((g<0||g>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+g]));  (�if(f<(i.$length-1>>0)){$s=3;continue;}$s=4;continue;    case 3:  *j=e.writeLines(d,b,g);$s=5;case 5:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}d=j;  *9b=g;  *ck=e.minwidth;  *�l=true;  *�while(true){if(!(g<c)){break;}  +i=(m=e.lines,((g<0||g>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+g]));    if(f<(i.$length-1>>0)){  +^n=$clone(((f<0||f>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+f]),D);  +�o=n.width+e.padding>>0;    if(o>k){  +�k=o;    }    if(n.width>0||n.htab){  ,l=false;    }    }else{  ,8break;    }  *�g=g+(1)>>0;    }    if(l&&!((((e.flags&8)>>>0)===0))){  ,�k=0;    }  -^e.widths=$append(e.widths,k);  -�p=e.format(d,b,g);$s=6;case 6:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}d=p;  -�e.widths=$subslice(e.widths,0,(e.widths.$length-1>>0));  -�b=g;    case 4:  (|g=g+(1)>>0;    $s=1;continue;case 2:    q=e.writeLines(d,b,c);$s=7;case 7:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}d=q;$s=8;case 8:return d;    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.format};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.format=function(a,b,c){return this.$val.format(a,b,c);};Writerformat~text/tabwriter.Writertext/tabwriter.celltext/tabwriter.format~text/tabwriter.writeLines~ (*text/tabwriter.Writer).append��E.ptr.prototype.append=function(a){var $ptr,a,b;  .yb=this;  .�b.buf.Write(a);  .�b.cell.size=b.cell.size+(a.$length)>>0;    };E.prototype.append=function(a){return this.$val.append(a);};Writerappend~text/tabwriter.Writer $(*text/tabwriter.Writer).updateWidth��E.ptr.prototype.updateWidth=function(){var $ptr,a;  .�a=this;  /a.cell.width=a.cell.width+(C.RuneCount($subslice(a.buf.Bytes(),a.pos,a.buf.Len())))>>0;  /Ha.pos=a.buf.Len();    };E.prototype.updateWidth=function(){return this.$val.updateWidth();};WriterupdateWidth~text/tabwriter.Writerunicode/utf8.RuneCount $(*text/tabwriter.Writer).startEscape�E.ptr.prototype.startEscape=function(a){var $ptr,a,b,c;  0�b=this;  0�c=a;  1	if(c===255){  1b.endChar=255;  1,}else if(c===60){  18b.endChar=62;  1I}else if(c===38){  1Ub.endChar=59;    }    };E.prototype.startEscape=function(a){return this.$val.startEscape(a);};WriterstartEscape~text/tabwriter.Writer "(*text/tabwriter.Writer).endEscape��E.ptr.prototype.endEscape=function(){var $ptr,a,b;  2pa=this;  2�b=a.endChar;  2�if(b===255){  2�a.updateWidth();    if(((a.flags&2)>>>0)===0){  2�a.cell.width=a.cell.width-(2)>>0;    }  3}else if(b===62){  37}else if(b===59){  3Ca.cell.width=a.cell.width+(1)>>0;    }  3sa.pos=a.buf.Len();  3�a.endChar=0;    };E.prototype.endEscape=function(){return this.$val.endEscape();};Writer
endEscape~text/tabwriter.Writertext/tabwriter.updateWidth~ &(*text/tabwriter.Writer).terminateCell�aE.ptr.prototype.terminateCell=function(a){var $ptr,a,b,c,d;  4$b=this;  4Ob.cell.htab=a;  4cd=(c=b.lines,$indexPtr(c.$array,c.$offset+(b.lines.$length-1>>0),O));  4�d.$set($append(d.$get(),b.cell));  4�D.copy(b.cell,new D.ptr(0,0,false));  4�return d.$get().$length;    };E.prototype.terminateCell=function(a){return this.$val.terminateCell(a);};WriterterminateCell~text/tabwriter.Ntext/tabwriter.Otext/tabwriter.Writertext/tabwriter.cell text/tabwriter.handlePanicJ�J=function(a,b){var $ptr,a,b,c,d,e,f;  4�c=$recover();    if(!($interfaceIsEqual(c,$ifaceNil))){  5d=$assertType(c,F,true);e=$clone(d[0],F);f=d[1];    if(f){  59a.$set(e.err);  5Lreturn;    }  5Y$panic(new $String("tabwriter: panic during "+b));    }    };handlePanictext/tabwriter.handlePanictext/tabwriter.osError (*text/tabwriter.Writer).Flush��E.ptr.prototype.Flush=function(){var $ptr,a,b,c,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);a=[a];a[0]=$ifaceNil;  6nb=this;  6�$deferred.push([$methodVal(b,"reset"),[]]);  6�$deferred.push([J,[(a.$ptr||(a.$ptr=new P(function(){return this.$target[0];},function($v){this.$target[0]=$v;},a))),"Flush"]]);    if(b.cell.size>0){    if(!((b.endChar===0))){  7lb.endEscape();    }  7�b.terminateCell(false);    }  7�c=b.format(0,0,b.lines.$length);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}c;  7�return a[0];    }return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return a[0];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:E.ptr.prototype.Flush};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};E.prototype.Flush=function(){return this.$val.Flush();};Writertext/tabwriter.Ptext/tabwriter.Writertext/tabwriter.endEscape~text/tabwriter.format~text/tabwriter.handlePanictext/tabwriter.reset~text/tabwriter.terminateCell~ (*text/tabwriter.Writer).Write�
�E.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=[b];c=0;b[0]=$ifaceNil;  8�d=this;  8�$deferred.push([J,[(b.$ptr||(b.$ptr=new P(function(){return this.$target[0];},function($v){this.$target[0]=$v;},b))),"Write"]]);  9 c=0;  9e=a;f=0;case 1:if(!(f<e.$length)){$s=2;continue;}g=f;h=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  9"if(d.endChar===0){$s=3;continue;}$s=4;continue;    case 3:  9Ni=h;if(i===9||i===11||i===10||i===12){$s=6;continue;}if(i===255){$s=7;continue;}if(i===60||i===38){$s=8;continue;}$s=9;continue;  9]case 6:  9�d.append($subslice(a,c,g));  9�d.updateWidth();  9�c=g+1>>0;  9�j=d.terminateCell(h===9);  :if((h===10)||(h===12)){$s=10;continue;}$s=11;continue;    case 10:  :=d.addLine();  :Nif((h===12)||(j===1)){$s=12;continue;}$s=13;continue;    case 12:  ;�k=d.Flush();$s=14;case 14:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}b[0]=k;if(!($interfaceIsEqual(b[0],$ifaceNil))){$s=15;continue;}$s=16;continue;    case 15:  ;�return[c,b[0]];    case 16:  ;�if((h===12)&&!((((d.flags&32)>>>0)===0))){$s=17;continue;}$s=18;continue;    case 17:  <$r=d.write0(K);$s=19;case 19:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 18:    case 13:    case 11:    $s=9;continue;  <Bcase 7:  <td.append($subslice(a,c,g));  <�d.updateWidth();  <�c=g;    if(!((((d.flags&2)>>>0)===0))){  <�c=c+(1)>>0;    }  <�d.startEscape(255);    $s=9;continue;  =case 8:    if(!((((d.flags&1)>>>0)===0))){  =xd.append($subslice(a,c,g));  =�d.updateWidth();  =�c=g;  =�d.startEscape(h);    }    case 9:    $s=5;continue;case 4:    if(h===d.endChar){  >"l=g+1>>0;    if((h===255)&&!((((d.flags&2)>>>0)===0))){  >dl=g;    }  >�d.append($subslice(a,c,l));  >�c=g+1>>0;  >�d.endEscape();    }    case 5:    f++;$s=1;continue;case 2:  >�d.append($subslice(a,c));  ? c=a.$length;  ?return[c,b[0]];    }return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return[c,b[0]];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:E.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};E.prototype.Write=function(a){return this.$val.Write(a);};Writertext/tabwriter.Ptext/tabwriter.Writertext/tabwriter.addLine~text/tabwriter.append~text/tabwriter.endEscape~text/tabwriter.handlePanictext/tabwriter.hbartext/tabwriter.startEscape~text/tabwriter.terminateCell~text/tabwriter.updateWidth~text/tabwriter.write0~ text/tabwriter.NewWriterL��L=function(a,b,c,d,e,f){var $ptr,a,b,c,d,e,f;  ?�return new E.ptr($ifaceNil,0,0,0,Q.zero(),0,new A.Buffer.ptr(M.nil,0,R.zero(),S.zero(),0),0,new D.ptr(0,0,false),0,T.nil,U.nil).Init(a,b,c,d,e,f);    };$pkg.NewWriter=L;	NewWriterbytes.Buffertext/tabwriter.Mtext/tabwriter.Ntext/tabwriter.NewWritertext/tabwriter.Qtext/tabwriter.Rtext/tabwriter.Stext/tabwriter.Ttext/tabwriter.Utext/tabwriter.Writertext/tabwriter.cell ��{"Base":16458,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VN0yYPqRpv/goroot/src/text/tabwriter/tabwriter.go","Base":1,"Size":16456,"Lines":[0,55,109,159,160,231,297,300,368,424,427,445,446,455,464,470,486,488,489,569,594,595,669,744,817,844,847,866,900,935,999,1001,1002,1068,1121,1124,1193,1257,1325,1389,1452,1517,1587,1654,1720,1723,1795,1834,1837,1905,1969,2034,2048,2051,2119,2178,2251,2254,2319,2385,2453,2519,2585,2651,2720,2735,2738,2803,2870,2936,3002,3050,3053,3120,3189,3228,3231,3252,3270,3290,3304,3318,3332,3350,3365,3366,3384,3454,3555,3661,3783,3852,3936,3938,3939,4006,4007,4035,4062,4077,4088,4105,4120,4144,4170,4183,4185,4186,4230,4233,4314,4392,4441,4508,4590,4669,4695,4766,4816,4889,4948,4951,5004,5057,5110,5163,5216,5266,5316,5368,5369,5419,5427,5486,5543,5572,5573,5634,5695,5708,5709,5752,5783,5795,5796,5852,5886,5907,5908,5970,6031,6042,6043,6110,6169,6176,6178,6179,6261,6342,6345,6398,6464,6527,6567,6624,6682,6740,6800,6859,6888,6891,7000,7050,7101,7104,7123,7146,7169,7190,7219,7245,7248,7270,7311,7334,7337,7354,7355,7366,7367,7377,7379,7380,7420,7446,7456,7488,7510,7537,7595,7612,7616,7630,7633,7646,7648,7649,7719,7794,7816,7827,7829,7830,7868,7899,7933,7958,7961,7978,8000,8003,8005,8006,8051,8071,8087,8103,8106,8126,8128,8129,8135,8159,8197,8199,8200,8264,8303,8334,8357,8412,8416,8468,8529,8571,8584,8611,8615,8661,8670,8673,8674,8718,8757,8759,8760,8783,8784,8852,8864,8898,8919,8920,8982,9018,9019,9046,9082,9111,9130,9135,9136,9156,9174,9201,9252,9258,9270,9292,9312,9359,9406,9425,9453,9503,9510,9538,9566,9616,9623,9670,9689,9695,9700,9704,9705,9732,9798,9834,9884,9906,9917,9957,9978,9982,9985,9993,9995,9996,10062,10129,10194,10225,10228,10292,10304,10329,10372,10396,10397,10425,10471,10515,10574,10633,10692,10711,10712,10765,10805,10821,10822,10847,10894,10974,11006,11031,11061,11096,11119,11140,11186,11202,11209,11236,11268,11294,11301,11314,11325,11331,11336,11359,11360,11401,11457,11471,11476,11477,11540,11610,11662,11698,11755,11771,11775,11778,11779,11815,11855,11857,11858,11890,11929,11948,11974,11976,11977,12003,12036,12102,12123,12125,12126,12190,12260,12327,12365,12368,12449,12452,12474,12475,12498,12538,12551,12565,12586,12597,12615,12626,12644,12647,12649,12650,12724,12800,12872,12902,12905,12936,12956,12970,12988,13020,13073,13077,13109,13120,13166,13169,13190,13205,13207,13208,13279,13338,13341,13389,13409,13443,13474,13491,13510,13512,13513,13555,13586,13621,13640,13650,13654,13695,13698,13700,13701,13766,13832,13887,13924,13927,13966,14017,14051,14052,14086,14108,14130,14184,14201,14205,14230,14233,14234,14264,14294,14295,14303,14305,14306,14333,14334,14371,14420,14470,14473,14529,14563,14564,14590,14597,14623,14645,14666,14681,14713,14732,14755,14775,14804,14846,14880,14903,14920,14956,15022,15087,15153,15214,15240,15279,15293,15301,15345,15378,15400,15408,15415,15421,15422,15438,15471,15494,15514,15524,15558,15583,15589,15615,15616,15634,15669,15702,15730,15754,15775,15786,15809,15815,15820,15821,15832,15852,15876,15901,15916,15966,15993,15999,16022,16051,16069,16074,16078,16081,16082,16107,16126,16140,16148,16150,16151,16214,16271,16274,16376,16454],"Infos":null}]}
 