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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �tZ��compress/lzwlzwbufioerrorsfmtio�-version 4

 lzw  LSB  	Order  %  MSB <%	 NewReader  Readerio  Read"p n &err r  <	order  litWidth   ReadCloser  	Close &  "  &  	 NewWriter  Writer  	Write"  & w  <     WriteCloser    &  &"  &  <
&AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["errors"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["fmt"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["io"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} ELE=$pkg.Order=$newType(4,$kindInt,"lzw.Order",true,"compress/lzw",true,null);Ordercompress/lzw.Order F�.F=$pkg.decoder=$newType(0,$kindStruct,"lzw.decoder",true,"compress/lzw",false,function(r_,bits_,nBits_,width_,read_,litWidth_,err_,clear_,eof_,hi_,overflow_,last_,suffix_,prefix_,output_,o_,toRead_){this.$val=this;if(arguments.length===0){this.r=$ifaceNil;this.bits=0;this.nBits=0;this.width=0;this.read=$throwNilPointerError;this.litWidth=0;this.err=$ifaceNil;this.clear=0;this.eof=0;this.hi=0;this.overflow=0;this.last=0;this.suffix=O.zero();this.prefix=P.zero();this.output=Q.zero();this.o=0;this.toRead=N.nil;return;}this.r=r_;this.bits=bits_;this.nBits=nBits_;this.width=width_;this.read=read_;this.litWidth=litWidth_;this.err=err_;this.clear=clear_;this.eof=eof_;this.hi=hi_;this.overflow=overflow_;this.last=last_;this.suffix=suffix_;this.prefix=prefix_;this.output=output_;this.o=o_;this.toRead=toRead_;});��R.methods=[{prop:"readLSB",name:"readLSB",pkg:"compress/lzw",typ:$funcType([],[$Uint16,$error],false)},{prop:"readMSB",name:"readMSB",pkg:"compress/lzw",typ:$funcType([],[$Uint16,$error],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"decode",name:"decode",pkg:"compress/lzw",typ:$funcType([],[],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];�F.init("compress/lzw",[{prop:"r",name:"r",anonymous:false,exported:false,typ:D.ByteReader,tag:""},{prop:"bits",name:"bits",anonymous:false,exported:false,typ:$Uint32,tag:""},{prop:"nBits",name:"nBits",anonymous:false,exported:false,typ:$Uint,tag:""},{prop:"width",name:"width",anonymous:false,exported:false,typ:$Uint,tag:""},{prop:"read",name:"read",anonymous:false,exported:false,typ:V,tag:""},{prop:"litWidth",name:"litWidth",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"err",name:"err",anonymous:false,exported:false,typ:$error,tag:""},{prop:"clear",name:"clear",anonymous:false,exported:false,typ:$Uint16,tag:""},{prop:"eof",name:"eof",anonymous:false,exported:false,typ:$Uint16,tag:""},{prop:"hi",name:"hi",anonymous:false,exported:false,typ:$Uint16,tag:""},{prop:"overflow",name:"overflow",anonymous:false,exported:false,typ:$Uint16,tag:""},{prop:"last",name:"last",anonymous:false,exported:false,typ:$Uint16,tag:""},{prop:"suffix",name:"suffix",anonymous:false,exported:false,typ:O,tag:""},{prop:"prefix",name:"prefix",anonymous:false,exported:false,typ:P,tag:""},{prop:"output",name:"output",anonymous:false,exported:false,typ:Q,tag:""},{prop:"o",name:"o",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"toRead",name:"toRead",anonymous:false,exported:false,typ:N,tag:""}]);decodercompress/lzw.Ncompress/lzw.Ocompress/lzw.Pcompress/lzw.Qcompress/lzw.Rcompress/lzw.Vcompress/lzw.decoderio.ByteReader IUI=$pkg.writer=$newType(8,$kindInterface,"lzw.writer",true,"compress/lzw",false,null);��I.init([{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[$error],false)},{prop:"WriteByte",name:"WriteByte",pkg:"",typ:$funcType([$Uint8],[$error],false)}]);writercompress/lzw.writer J��J=$pkg.errWriteCloser=$newType(0,$kindStruct,"lzw.errWriteCloser",true,"compress/lzw",false,function(err_){this.$val=this;if(arguments.length===0){this.err=$ifaceNil;return;}this.err=err_;});��W.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];bJ.init("compress/lzw",[{prop:"err",name:"err",anonymous:false,exported:false,typ:$error,tag:""}]);errWriteClosercompress/lzw.Ncompress/lzw.Wcompress/lzw.errWriteCloser K�~K=$pkg.encoder=$newType(0,$kindStruct,"lzw.encoder",true,"compress/lzw",false,function(w_,order_,write_,bits_,nBits_,width_,litWidth_,hi_,overflow_,savedCode_,err_,table_){this.$val=this;if(arguments.length===0){this.w=$ifaceNil;this.order=0;this.write=$throwNilPointerError;this.bits=0;this.nBits=0;this.width=0;this.litWidth=0;this.hi=0;this.overflow=0;this.savedCode=0;this.err=$ifaceNil;this.table=U.zero();return;}this.w=w_;this.order=order_;this.write=write_;this.bits=bits_;this.nBits=nBits_;this.width=width_;this.litWidth=litWidth_;this.hi=hi_;this.overflow=overflow_;this.savedCode=savedCode_;this.err=err_;this.table=table_;});��T.methods=[{prop:"writeLSB",name:"writeLSB",pkg:"compress/lzw",typ:$funcType([$Uint32],[$error],false)},{prop:"writeMSB",name:"writeMSB",pkg:"compress/lzw",typ:$funcType([$Uint32],[$error],false)},{prop:"incHi",name:"incHi",pkg:"compress/lzw",typ:$funcType([],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];��K.init("compress/lzw",[{prop:"w",name:"w",anonymous:false,exported:false,typ:I,tag:""},{prop:"order",name:"order",anonymous:false,exported:false,typ:E,tag:""},{prop:"write",name:"write",anonymous:false,exported:false,typ:X,tag:""},{prop:"bits",name:"bits",anonymous:false,exported:false,typ:$Uint32,tag:""},{prop:"nBits",name:"nBits",anonymous:false,exported:false,typ:$Uint,tag:""},{prop:"width",name:"width",anonymous:false,exported:false,typ:$Uint,tag:""},{prop:"litWidth",name:"litWidth",anonymous:false,exported:false,typ:$Uint,tag:""},{prop:"hi",name:"hi",anonymous:false,exported:false,typ:$Uint32,tag:""},{prop:"overflow",name:"overflow",anonymous:false,exported:false,typ:$Uint32,tag:""},{prop:"savedCode",name:"savedCode",anonymous:false,exported:false,typ:$Uint32,tag:""},{prop:"err",name:"err",anonymous:false,exported:false,typ:$error,tag:""},{prop:"table",name:"table",anonymous:false,exported:false,typ:U,tag:""}]);encodercompress/lzw.Ncompress/lzw.Ordercompress/lzw.Tcompress/lzw.Ucompress/lzw.Xcompress/lzw.encodercompress/lzw.writer NN=$sliceType($Uint8);N OO=$arrayType($Uint8,4096);O PP=$arrayType($Uint16,4096);P QQ=$arrayType($Uint8,8192);Q RR=$ptrType(F);Rcompress/lzw.decoder SS=$sliceType($emptyInterface);S TT=$ptrType(K);Tcompress/lzw.encoder UU=$arrayType($Uint32,16384);U V(V=$funcType([R],[$Uint16,$error],false);Vcompress/lzw.R WW=$ptrType(J);Wcompress/lzw.errWriteCloser X(X=$funcType([T,$Uint32],[$error],false);Xcompress/lzw.T G	errClosed LerrOutOfCodes -    G=B.New("lzw: reader/writer is closed");compress/lzw.errClosed
errors.New "    L=B.New("lzw: out of codes");compress/lzw.errOutOfCodes
errors.New (*compress/lzw.decoder).readLSB�-F.ptr.prototype.readLSB=function(){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  +case 1:if(!(a.nBits<a.width)){$s=2;continue;}  Ec=a.r.ReadByte();$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  s$s=-1;return[0,e];    }  �a.bits=(a.bits|(((f=a.nBits,f<32?(((d>>>0))<<f):0)>>>0)))>>>0;  �a.nBits=a.nBits+(8)>>>0;    $s=1;continue;case 2:  �h=((((a.bits&((((g=a.width,g<32?(1<<g):0)>>>0)-1>>>0)))>>>0)<<16>>>16));  �a.bits=(i=(a.width),i<32?(a.bits>>>i):0)>>>0;  �a.nBits=a.nBits-(a.width)>>>0;  $s=-1;return[h,$ifaceNil];    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.readLSB};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.readLSB=function(){return this.$val.readLSB();};decoderreadLSB~compress/lzw.decoder (*compress/lzw.decoder).readMSB�/F.ptr.prototype.readMSB=function(){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �case 1:if(!(a.nBits<a.width)){$s=2;continue;}  �c=a.r.ReadByte();$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  �$s=-1;return[0,e];    }  �a.bits=(a.bits|(((f=((24-a.nBits>>>0)),f<32?(((d>>>0))<<f):0)>>>0)))>>>0;  a.nBits=a.nBits+(8)>>>0;    $s=1;continue;case 2:  -h=((((g=((32-a.width>>>0)),g<32?(a.bits>>>g):0)>>>0)<<16>>>16));  Wa.bits=(i=(a.width),i<32?(a.bits<<i):0)>>>0;  ka.nBits=a.nBits-(a.width)>>>0;  $s=-1;return[h,$ifaceNil];    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.readMSB};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.readMSB=function(){return this.$val.readMSB();};decoderreadMSB~compress/lzw.decoder (*compress/lzw.decoder).Read�F.ptr.prototype.Read=function(a){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �case 1:    if(b.toRead.$length>0){  �c=$copySlice(a,b.toRead);   b.toRead=$subslice(b.toRead,c);  $s=-1;return[c,$ifaceNil];    }    if(!($interfaceIsEqual(b.err,$ifaceNil))){  D$s=-1;return[0,b.err];    }  Z$r=b.decode();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=1;continue;case 2:    $s=-1;return[0,$ifaceNil];}return;}if($f===undefined){$f={$blk:F.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.Read=function(a){return this.$val.Read(a);};decodercompress/lzw.decodercompress/lzw.decode~ (*compress/lzw.decoder).decode��F.ptr.prototype.decode=function(){var $ptr,a,aa,ab,ac,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  ~case 1:  �c=a.read(a);$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];    if(!($interfaceIsEqual(e,$ifaceNil))){    if($interfaceIsEqual(e,D.EOF)){  �e=D.ErrUnexpectedEOF;    }  �a.err=e;  �$s=2;continue;    }    if(d<a.clear){  G(f=a.output,g=a.o,((g<0||g>=f.length)?($throwRuntimeError("index out of range"),undefined):f[g]=((d<<24>>>24))));  fa.o=a.o+(1)>>0;    if(!((a.last===65535))){  �(h=a.suffix,i=a.hi,((i<0||i>=h.length)?($throwRuntimeError("index out of range"),undefined):h[i]=((d<<24>>>24))));  �(j=a.prefix,k=a.hi,((k<0||k>=j.length)?($throwRuntimeError("index out of range"),undefined):j[k]=a.last));    }    }else if((d===a.clear)){  a.width=1+((a.litWidth>>>0))>>>0;  9a.hi=a.eof;  Ia.overflow=(l=a.width,l<32?(1<<l):0)<<16>>>16;  fa.last=65535;  �$s=1;continue;    }else if((d===a.eof)){  �a.err=D.EOF;  �$s=2;continue s;    }else if(d<=a.hi){  �m=d;n=8191;o=m;p=n;    if((d===a.hi)&&!((a.last===65535))){  �o=a.last;  while(true){if(!(o>=a.clear)){break;}  %o=(q=a.prefix,((o<0||o>=q.length)?($throwRuntimeError("index out of range"),undefined):q[o]));    }  ?(r=a.output,((p<0||p>=r.length)?($throwRuntimeError("index out of range"),undefined):r[p]=((o<<24>>>24))));  Zp=p-(1)>>0;  bo=a.last;    }  �while(true){if(!(o>=a.clear)){break;}  �(t=a.output,((p<0||p>=t.length)?($throwRuntimeError("index out of range"),undefined):t[p]=(s=a.suffix,((o<0||o>=s.length)?($throwRuntimeError("index out of range"),undefined):s[o]))));  �p=p-(1)>>0;  �o=(u=a.prefix,((o<0||o>=u.length)?($throwRuntimeError("index out of range"),undefined):u[o]));    }  (v=a.output,((p<0||p>=v.length)?($throwRuntimeError("index out of range"),undefined):v[p]=((o<<24>>>24))));  &a.o=a.o+($copySlice($subslice(new N(a.output),a.o),$subslice(new N(a.output),p)))>>0;    if(!((a.last===65535))){  �(w=a.suffix,x=a.hi,((x<0||x>=w.length)?($throwRuntimeError("index out of range"),undefined):w[x]=((o<<24>>>24))));  �(y=a.prefix,z=a.hi,((z<0||z>=y.length)?($throwRuntimeError("index out of range"),undefined):y[z]=a.last));    }    }else{  �a.err=B.New("lzw: invalid code");  $s=2;continue s;    }  'aa=d;ab=a.hi+1<<16>>>16;a.last=aa;a.hi=ab;    if(a.hi>=a.overflow){    if(a.width===12){  }a.last=65535;  Ha.hi=a.hi-(1)<<16>>>16;    }else{  _a.width=a.width+(1)>>>0;  ma.overflow=(ac=(1),ac<32?(a.overflow<<ac):0)<<16>>>16;    }    }    if(a.o>=4096){  �$s=2;continue;    }    $s=1;continue;case 2:  �a.toRead=$subslice(new N(a.output),0,a.o);  �a.o=0;    $s=-1;return;}return;}if($f===undefined){$f={$blk:F.ptr.prototype.decode};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.decode=function(){return this.$val.decode();};decoderdecode~compress/lzw.Ncompress/lzw.decoder
errors.Newio.EOFio.ErrUnexpectedEOF (*compress/lzw.decoder).Close��F.ptr.prototype.Close=function(){var $ptr,a;a=this;  Qa.err=G;  �return $ifaceNil;    };F.prototype.Close=function(){return this.$val.Close();};decodercompress/lzw.decodercompress/lzw.errClosed compress/lzw.NewReaderH��H=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �d=new F.ptr($ifaceNil,0,0,0,$throwNilPointerError,0,$ifaceNil,0,0,0,0,0,O.zero(),P.zero(),Q.zero(),0,N.nil);    e=b;    if(e===(0)){  �d.read=$methodExpr(R,"readLSB");    }else if(e===(1)){  d.read=$methodExpr(R,"readMSB");    }else{  =d.err=B.New("lzw: unknown order");  h$s=-1;return d;    }  uif(c<2||8<c){$s=1;continue;}$s=2;continue;    case 1:  �f=C.Errorf("lzw: litWidth %d out of range",new S([new $Int(c)]));$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}d.err=f;  �$s=-1;return d;    case 2:  �g=$assertType(a,D.ByteReader,true);h=g[0];i=g[1];    if(i){  d.r=h;    }else{  "d.r=A.NewReader(a);    }  ?d.litWidth=c;  Vd.width=1+((c>>>0))>>>0;  td.clear=(j=((c>>>0)),j<32?(1<<j):0)<<16>>>16;  �k=d.clear+1<<16>>>16;l=d.clear+1<<16>>>16;d.eof=k;d.hi=l;  �d.overflow=(m=d.width,m<32?(1<<m):0)<<16>>>16;  �d.last=65535;   $s=-1;return d;    }return;}if($f===undefined){$f={$blk:H};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewReader=H;	NewReaderbufio.NewReadercompress/lzw.Ncompress/lzw.NewReadercompress/lzw.Ocompress/lzw.Pcompress/lzw.Qcompress/lzw.Rcompress/lzw.Scompress/lzw.decodercompress/lzw.readLSB~compress/lzw.readMSB~
errors.New
fmt.Errorfio.ByteReader $(*compress/lzw.errWriteCloser).Write��J.ptr.prototype.Write=function(a){var $ptr,a,b;b=this;  �return[0,b.err];    };J.prototype.Write=function(a){return this.$val.Write(a);};errWriteClosercompress/lzw.errWriteCloser $(*compress/lzw.errWriteCloser).Close��J.ptr.prototype.Close=function(){var $ptr,a;a=this;  7return a.err;    };J.prototype.Close=function(){return this.$val.Close();};errWriteClosercompress/lzw.errWriteCloser  (*compress/lzw.encoder).writeLSB��K.ptr.prototype.writeLSB=function(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  &b.bits=(b.bits|(((c=b.nBits,c<32?(a<<c):0)>>>0)))>>>0;  &1b.nBits=b.nBits+(b.width)>>>0;  &Ecase 1:if(!(b.nBits>=8)){$s=2;continue;}  &]d=b.w.WriteByte(((b.bits<<24>>>24)));$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;    if(!($interfaceIsEqual(e,$ifaceNil))){  &�$s=-1;return e;    }  &�b.bits=(f=(8),f<32?(b.bits>>>f):0)>>>0;  &�b.nBits=b.nBits-(8)>>>0;    $s=1;continue;case 2:  &�$s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.writeLSB};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.writeLSB=function(a){return this.$val.writeLSB(a);};encoder	writeLSB~compress/lzw.encoder  (*compress/lzw.encoder).writeMSB��K.ptr.prototype.writeMSB=function(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  'Eb.bits=(b.bits|(((c=(((32-b.width>>>0)-b.nBits>>>0)),c<32?(a<<c):0)>>>0)))>>>0;  'nb.nBits=b.nBits+(b.width)>>>0;  '�case 1:if(!(b.nBits>=8)){$s=2;continue;}  '�d=b.w.WriteByte((((b.bits>>>24>>>0)<<24>>>24)));$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;    if(!($interfaceIsEqual(e,$ifaceNil))){  '�$s=-1;return e;    }  '�b.bits=(f=(8),f<32?(b.bits<<f):0)>>>0;  '�b.nBits=b.nBits-(8)>>>0;    $s=1;continue;case 2:  ($s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.writeMSB};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.writeMSB=function(a){return this.$val.writeMSB(a);};encoder	writeMSB~compress/lzw.encoder (*compress/lzw.encoder).incHi��K.ptr.prototype.incHi=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  )�a.hi=a.hi+(1)>>>0;    if(a.hi===a.overflow){  )�a.width=a.width+(1)>>>0;  )�a.overflow=(b=(1),b<32?(a.overflow<<b):0)>>>0;    }  )�if(a.hi===4095){$s=1;continue;}$s=2;continue;    case 1:  *d=(c=a.litWidth,c<32?(1<<c):0)>>>0;  *4e=a.write(a,d);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;    if(!($interfaceIsEqual(f,$ifaceNil))){  *^$s=-1;return f;    }  *oa.width=a.litWidth+1>>>0;  *�a.hi=d+1>>>0;  *�a.overflow=d<<1>>>0;  *�g=a.table;h=0;while(true){if(!(h<16384)){break;}i=h;  *�(j=a.table,((i<0||i>=j.length)?($throwRuntimeError("index out of range"),undefined):j[i]=0));    h++;}  *�$s=-1;return L;    case 2:  +$s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.incHi};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.incHi=function(){return this.$val.incHi();};encoderincHi~compress/lzw.encodercompress/lzw.errOutOfCodes (*compress/lzw.encoder).Write�CK.ptr.prototype.Write=function(a){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;ai=$f.ai;aj=$f.aj;ak=$f.ak;al=$f.al;am=$f.am;an=$f.an;ao=$f.ao;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;    if(!($interfaceIsEqual(d.err,$ifaceNil))){    e=0;f=d.err;b=e;c=f;$s=-1;return[b,c];    }    if(a.$length===0){    g=0;h=$ifaceNil;b=g;c=h;$s=-1;return[b,c];    }  +�j=((((i=d.litWidth,i<32?(1<<i):0)<<24>>>24)-1<<24>>>24));    if(!((j===255))){  ,$k=a;l=0;while(true){if(!(l<k.$length)){break;}m=((l<0||l>=k.$length)?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+l]);    if(m>j){  ,Qd.err=B.New("lzw: input byte too large for the litWidth");    n=0;o=d.err;b=n;c=o;$s=-1;return[b,c];    }    l++;}    }  ,�b=a.$length;  ,�p=d.savedCode;    if(p===4294967295){  -"q=(((0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0])>>>0));r=$subslice(a,1);p=q;a=r;    }  -Js=a;t=0;case 1:if(!(t<s.$length)){$s=2;continue;}u=((t<0||t>=s.$length)?($throwRuntimeError("index out of range"),undefined):s.$array[s.$offset+t]);  -bv=((u>>>0));  -yw=((p<<8>>>0)|v)>>>0;  -�x=(((((w>>>12>>>0)^w)>>>0))&16383)>>>0;  .(y=x;z=(aa=d.table,((x<0||x>=aa.length)?($throwRuntimeError("index out of range"),undefined):aa[x]));ab=y;ac=z;case 3:if(!(!((ac===0)))){$s=4;continue;}    if(w===(ac>>>12>>>0)){  .sp=(ac&4095)>>>0;  .�t++;$s=1;continue s;    }  .�ab=(((ab+1>>>0))&16383)>>>0;  .�ac=(ad=d.table,((ab<0||ab>=ad.length)?($throwRuntimeError("index out of range"),undefined):ad[ab]));    $s=3;continue;case 4:  /8ae=d.write(d,p);$s=5;case 5:if($c){$c=false;ae=ae.$blk();}if(ae&&ae.$blk!==undefined){break s;}d.err=ae;    if(!($interfaceIsEqual(d.err,$ifaceNil))){    af=0;ag=d.err;b=af;c=ag;$s=-1;return[b,c];    }  /zp=v;  0!ah=d.incHi();$s=6;case 6:if($c){$c=false;ah=ah.$blk();}if(ah&&ah.$blk!==undefined){break s;}ai=ah;    if(!($interfaceIsEqual(ai,$ifaceNil))){    if($interfaceIsEqual(ai,L)){  0dt++;$s=1;continue;    }  0ud.err=ai;    aj=0;ak=d.err;b=aj;c=ak;$s=-1;return[b,c];    }  0�while(true){    if((al=d.table,((x<0||x>=al.length)?($throwRuntimeError("index out of range"),undefined):al[x]))===0){  1(am=d.table,((x<0||x>=am.length)?($throwRuntimeError("index out of range"),undefined):am[x]=((((w<<12>>>0))|d.hi)>>>0)));  1;break;    }  1Ix=(((x+1>>>0))&16383)>>>0;    }    t++;$s=1;continue;case 2:  1od.savedCode=p;    an=b;ao=$ifaceNil;b=an;c=ao;$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.ai=ai;$f.aj=aj;$f.ak=ak;$f.al=al;$f.am=am;$f.an=an;$f.ao=ao;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.Write=function(a){return this.$val.Write(a);};encodercompress/lzw.encodercompress/lzw.errOutOfCodescompress/lzw.incHi~
errors.New (*compress/lzw.encoder).Close�>K.ptr.prototype.Close=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;    if(!($interfaceIsEqual(a.err,$ifaceNil))){    if($interfaceIsEqual(a.err,G)){  2U$s=-1;return $ifaceNil;    }  2f$s=-1;return a.err;    }  2�a.err=G;  2�if(!((a.savedCode===4294967295))){$s=1;continue;}$s=2;continue;    case 1:  3b=a.write(a,a.savedCode);$s=3;case 3:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;    if(!($interfaceIsEqual(c,$ifaceNil))){  36$s=-1;return c;    }  3Jd=a.incHi();$s=4;case 4:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;    if(!($interfaceIsEqual(e,$ifaceNil))&&!($interfaceIsEqual(e,L))){  3�$s=-1;return e;    }    case 2:  3�g=((f=a.litWidth,f<32?(1<<f):0)>>>0)+1>>>0;  3�h=a.write(a,g);$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}i=h;    if(!($interfaceIsEqual(i,$ifaceNil))){  3�$s=-1;return i;    }  4$if(a.nBits>0){$s=6;continue;}$s=7;continue;    case 6:    if(a.order===1){  4Na.bits=(j=(24),j<32?(a.bits>>>j):0)>>>0;    }  4ek=a.w.WriteByte(((a.bits<<24>>>24)));$s=8;case 8:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=k;    if(!($interfaceIsEqual(l,$ifaceNil))){  4�$s=-1;return l;    }    case 7:  4�m=a.w.Flush();$s=9;case 9:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}$s=-1;return m;    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.Close=function(){return this.$val.Close();};encodercompress/lzw.encodercompress/lzw.errClosedcompress/lzw.errOutOfCodescompress/lzw.incHi~ compress/lzw.NewWriterM��M=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  6|d=$throwNilPointerError;    e=b;    if(e===(0)){  6�d=$methodExpr(T,"writeLSB");    }else if(e===(1)){  6�d=$methodExpr(T,"writeMSB");    }else{  7$s=-1;return new J.ptr(B.New("lzw: unknown order"));    }  7Jif(c<2||8<c){$s=1;continue;}$s=2;continue;    case 1:  7nf=C.Errorf("lzw: litWidth %d out of range",new S([new $Int(c)]));$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$s=-1;return new J.ptr(f);    case 2:  7�g=$assertType(a,I,true);h=g[0];i=g[1];    if(!i){  7�h=A.NewWriter(a);    }  7�j=((c>>>0));  8$s=-1;return new K.ptr(h,b,d,0,0,1+j>>>0,j,((k=j,k<32?(1<<k):0)>>>0)+1>>>0,(l=((j+1>>>0)),l<32?(1<<l):0)>>>0,4294967295,$ifaceNil,U.zero());    }return;}if($f===undefined){$f={$blk:M};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewWriter=M;	NewWriterbufio.NewWritercompress/lzw.NewWritercompress/lzw.Scompress/lzw.Tcompress/lzw.Ucompress/lzw.encodercompress/lzw.errWriteClosercompress/lzw.writeLSB~compress/lzw.writeMSB~compress/lzw.writer
errors.New
fmt.Errorf ��{"Base":14551,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/compress/lzw/reader.go","Base":1,"Size":7434,"Lines":[0,55,109,159,160,231,300,356,359,427,500,559,562,637,702,721,733,734,801,834,835,844,853,863,870,876,878,879,938,953,954,962,1038,1056,1127,1145,1150,1152,1153,1161,1186,1215,1251,1253,1254,1324,1354,1376,1400,1417,1432,1447,1510,1585,1601,1602,1653,1696,1767,1824,1828,1901,1924,1928,1992,1996,2021,2091,2130,2131,2202,2246,2301,2374,2414,2443,2473,2474,2517,2581,2651,2724,2756,2813,2872,2904,2946,2990,2992,2993,3067,3113,3138,3165,3183,3200,3204,3237,3252,3255,3298,3318,3338,3356,3358,3359,3432,3478,3503,3530,3548,3565,3569,3609,3624,3627,3669,3689,3709,3727,3729,3730,3778,3785,3810,3836,3863,3880,3884,3904,3923,3927,3940,3943,3945,3946,4011,4061,4112,4141,4214,4220,4227,4252,4270,4292,4322,4327,4342,4351,4355,4366,4389,4419,4450,4459,4496,4537,4570,4598,4603,4627,4661,4677,4706,4737,4749,4771,4789,4803,4824,4857,4910,4982,5059,5113,5128,5151,5172,5178,5205,5213,5228,5233,5299,5321,5351,5359,5379,5384,5410,5455,5492,5533,5563,5591,5596,5607,5650,5664,5668,5698,5724,5752,5784,5850,5918,5955,5966,5978,5992,6013,6018,6022,6048,6057,6061,6064,6090,6117,6126,6128,6129,6188,6189,6223,6274,6286,6288,6289,6331,6405,6452,6514,6588,6609,6682,6744,6772,6843,6862,6878,6889,6919,6930,6960,6970,7013,7024,7027,7062,7126,7137,7140,7178,7189,7199,7226,7229,7252,7282,7321,7357,7392,7421,7422,7432],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/compress/lzw/writer.go","Base":7436,"Size":7114,"Lines":[0,55,109,159,160,172,173,182,191,201,208,214,216,217,262,286,301,316,318,319,396,425,436,438,439,493,510,512,513,554,568,570,571,579,651,692,717,742,819,898,923,950,1021,1084,1102,1104,1105,1135,1157,1215,1225,1283,1332,1345,1381,1395,1407,1419,1471,1486,1540,1603,1624,1698,1762,1780,1855,1909,1920,1994,2067,2138,2172,2197,2199,2200,2271,2316,2340,2360,2380,2435,2449,2453,2468,2483,2486,2498,2500,2501,2571,2616,2657,2677,2697,2758,2772,2776,2791,2806,2809,2821,2823,2824,2902,2961,3013,3014,3087,3161,3205,3239,3247,3272,3284,3303,3306,3328,3363,3407,3421,3425,3452,3471,3497,3524,3553,3557,3580,3583,3595,3597,3598,3673,3728,3747,3765,3768,3786,3802,3805,3862,3886,3905,3974,3994,3999,4003,4006,4018,4039,4065,4116,4148,4151,4157,4180,4203,4230,4303,4336,4374,4430,4451,4474,4492,4497,4524,4542,4546,4619,4647,4693,4712,4716,4733,4807,4880,4918,4948,4961,4966,4982,5001,5005,5078,5086,5124,5163,5173,5178,5211,5215,5218,5238,5253,5255,5256,5335,5367,5401,5420,5446,5460,5464,5479,5482,5535,5554,5588,5621,5671,5685,5689,5749,5763,5767,5770,5794,5828,5869,5882,5885,5911,5929,5951,5968,5972,6027,6041,6045,6048,6068,6070,6071,6114,6188,6263,6284,6357,6435,6507,6547,6563,6574,6604,6615,6645,6655,6714,6717,6752,6832,6835,6857,6867,6893,6896,6918,6936,6953,6973,6993,7014,7031,7055,7083,7109,7112],"Infos":null}]}
 