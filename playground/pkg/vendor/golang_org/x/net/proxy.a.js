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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ��1��vendor/golang_org/x/net/proxyproxyerrorsionetnet/urlosstrconvstrings�Pversion 4

 	proxy  Auth  User   Password    Dialer   Dial network   addr   Connnet  	Close &  LocalAddr  Addr  Network    String     Read"b n &err  RemoteAddr B  SetDeadline Timetime. wall  ext
  loc Location name   zone : 8   offset  	isDST     tx zoneTrans when
  	index  	isstd   	isutc     cacheStart
  cacheEnd
  cacheZoneH  Fl      firstZoneUsedFR      getFR  F   lookupFR 
sec 
 8 <  > 
	start 
end   lookupFirstZoneFR     lookupNameFR  8 
unix <  >  ok   d AddDt  Duration
 	HoursLd     MinutesLp     NanosecondsLp  
   	RoundLp Lm L   SecondsLp     Lp      TruncateLp Lx L  p D   AddDateDj 	years months days D   	AfterDj Du     AppendFormatDj ""  layout "   BeforeDj D�     	ClockDj  hour min Z   DateDj  year  	Month Nx     	month day   DayDj     	EqualDj D�     FormatDj  �     GobDecodeDj "data &   GobEncodeDj  " &   HourDj     ISOWeekDj  � week   InDj F4 D   IsZeroDj      	LocalDj  D   6Dj  F   MarshalBinaryDj  " &   MarshalJSONDj  " &   MarshalTextDj  " &   MinuteDj     �Dj  N   NanosecondDj     vDj Lp D   SecondDj     Dj      SubDj D� L   ||Dj Lp D   UTCDj  D   UnixDj  
   UnixNanoDj  
   UnmarshalBinaryDj "� &   UnmarshalJSONDj "� &   UnmarshalTextDj "� &   WeekdayDj   � Pp        YearDj     YearDayDj     ZoneDj   8 <   absDj     addSecDj 
p    dateDj  full � N� � yday   locabsDj   8 < �   monoDj  
   nsecDj     ZDj  
   setLocDj F4    setMonoDj 
x    stripMonoDj     unixSecDj  
  j &  SetReadDeadlineDj &  SetWriteDeadlineDj &  	Write"" |S && c  &&   Direct  direct   R       @ &  	 FromEnvironment  > 	 FromURL  URLurlnet/url Scheme   Opaque    Userinfo username   password   passwordSet   V�        V�      UsernameV�       Host   Path   RawPath   ForceQuery   RawQuery   Fragment   EscapedPathT�      HostnameT�      	IsAbsT�      �T�  "text &&   	ParseT�  ref T &   PortT�      	QueryT�   Values  
 hXv  key  	value    DelX�  �    EncodeX�      GetX�  �     SetX�  �  �      RequestURIT�      ResolveReferenceT� T� T   T�      �T� "� &   setPathT�  p &  �  >forward  > & 	 NewPerHost >defaultDialer  >bypass   PerHost  def >  � >  bypassNetworks  	IPNet IP �"  DefaultMask^ip   IPMask" Size`x  ones bits   `x        �^� ^x     IsGlobalUnicast^�      1IsInterfaceLocalMulticast^�      'IsLinkLocalMulticast^�      #IsLinkLocalUnicast^�      IsLoopback^�      IsMulticast^�      IsUnspecified^�      �^�  " &   Mask^� `mask ^   ^�      To16^�  ^   To4^�  ^   �^� "� &   matchAddrFamily^� ^�      �`  Contains\|S ^�     \|S      \|S       bypassIPs ^  bypassZones    bypassHosts    AddFromStringZ�   s     AddHostZ�   host     	AddIPZ�  ^�     AddNetworkZ�  \     AddZoneZ�   :     Z�        @�  &&    dialerForRequest Z�   �  >   Z	 #RegisterDialerType  scheme  T > > & f   	 SOCKS5       <auth  >�  > & )CC=$packages["errors"];a    $r=C.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["io"];a    $r=F.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["net"];a    $r=A.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["net/url"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["os"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["strconv"];a    $r=G.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["strings"];a    $r=B.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} H��H=$pkg.direct=$newType(0,$kindStruct,"proxy.direct",true,"vendor/golang_org/x/net/proxy",false,function(){this.$val=this;if(arguments.length===0){return;}});dH.methods=[{prop:"Dial",name:"Dial",pkg:"",typ:$funcType([$String,$String],[A.Conn,$error],false)}];H.init("",[]);directnet.Conn$vendor/golang_org/x/net/proxy.direct I�I=$pkg.PerHost=$newType(0,$kindStruct,"proxy.PerHost",true,"vendor/golang_org/x/net/proxy",true,function(def_,bypass_,bypassNetworks_,bypassIPs_,bypassZones_,bypassHosts_){this.$val=this;if(arguments.length===0){this.def=$ifaceNil;this.bypass=$ifaceNil;this.bypassNetworks=V.nil;this.bypassIPs=W.nil;this.bypassZones=T.nil;this.bypassHosts=T.nil;return;}this.def=def_;this.bypass=bypass_;this.bypassNetworks=bypassNetworks_;this.bypassIPs=bypassIPs_;this.bypassZones=bypassZones_;this.bypassHosts=bypassHosts_;});�PAA.methods=[{prop:"Dial",name:"Dial",pkg:"",typ:$funcType([$String,$String],[A.Conn,$error],false)},{prop:"dialerForRequest",name:"dialerForRequest",pkg:"vendor/golang_org/x/net/proxy",typ:$funcType([$String],[K],false)},{prop:"AddFromString",name:"AddFromString",pkg:"",typ:$funcType([$String],[],false)},{prop:"AddIP",name:"AddIP",pkg:"",typ:$funcType([A.IP],[],false)},{prop:"AddNetwork",name:"AddNetwork",pkg:"",typ:$funcType([U],[],false)},{prop:"AddZone",name:"AddZone",pkg:"",typ:$funcType([$String],[],false)},{prop:"AddHost",name:"AddHost",pkg:"",typ:$funcType([$String],[],false)}];�
I.init("vendor/golang_org/x/net/proxy",[{prop:"def",name:"def",anonymous:false,exported:false,typ:K,tag:""},{prop:"bypass",name:"bypass",anonymous:false,exported:false,typ:K,tag:""},{prop:"bypassNetworks",name:"bypassNetworks",anonymous:false,exported:false,typ:V,tag:""},{prop:"bypassIPs",name:"bypassIPs",anonymous:false,exported:false,typ:W,tag:""},{prop:"bypassZones",name:"bypassZones",anonymous:false,exported:false,typ:T,tag:""},{prop:"bypassHosts",name:"bypassHosts",anonymous:false,exported:false,typ:T,tag:""}]);PerHost	net.Connnet.IP vendor/golang_org/x/net/proxy.AA$vendor/golang_org/x/net/proxy.Dialer%vendor/golang_org/x/net/proxy.PerHostvendor/golang_org/x/net/proxy.Tvendor/golang_org/x/net/proxy.Uvendor/golang_org/x/net/proxy.Vvendor/golang_org/x/net/proxy.W KgK=$pkg.Dialer=$newType(8,$kindInterface,"proxy.Dialer",true,"vendor/golang_org/x/net/proxy",true,null);bK.init([{prop:"Dial",name:"Dial",pkg:"",typ:$funcType([$String,$String],[A.Conn,$error],false)}]);Dialernet.Conn$vendor/golang_org/x/net/proxy.Dialer L��L=$pkg.Auth=$newType(0,$kindStruct,"proxy.Auth",true,"vendor/golang_org/x/net/proxy",true,function(User_,Password_){this.$val=this;if(arguments.length===0){this.User="";this.Password="";return;}this.User=User_;this.Password=Password_;});��L.init("",[{prop:"User",name:"User",anonymous:false,exported:true,typ:$String,tag:""},{prop:"Password",name:"Password",anonymous:false,exported:true,typ:$String,tag:""}]);Auth"vendor/golang_org/x/net/proxy.Auth R�zR=$pkg.socks5=$newType(0,$kindStruct,"proxy.socks5",true,"vendor/golang_org/x/net/proxy",false,function(user_,password_,network_,addr_,forward_){this.$val=this;if(arguments.length===0){this.user="";this.password="";this.network="";this.addr="";this.forward=$ifaceNil;return;}this.user=user_;this.password=password_;this.network=network_;this.addr=addr_;this.forward=forward_;});��AB.methods=[{prop:"Dial",name:"Dial",pkg:"",typ:$funcType([$String,$String],[A.Conn,$error],false)},{prop:"connect",name:"connect",pkg:"vendor/golang_org/x/net/proxy",typ:$funcType([A.Conn,$String],[$error],false)}];��R.init("vendor/golang_org/x/net/proxy",[{prop:"user",name:"user",anonymous:false,exported:false,typ:$String,tag:""},{prop:"password",name:"password",anonymous:false,exported:false,typ:$String,tag:""},{prop:"network",name:"network",anonymous:false,exported:false,typ:$String,tag:""},{prop:"addr",name:"addr",anonymous:false,exported:false,typ:$String,tag:""},{prop:"forward",name:"forward",anonymous:false,exported:false,typ:K,tag:""}]);socks5net.Conn vendor/golang_org/x/net/proxy.AB$vendor/golang_org/x/net/proxy.Dialer$vendor/golang_org/x/net/proxy.socks5 TT=$sliceType($String);T UU=$ptrType(A.IPNet);U	net.IPNet VV=$sliceType(U);Vvendor/golang_org/x/net/proxy.U WW=$sliceType(A.IP);Wnet.IP XX=$ptrType(L);X"vendor/golang_org/x/net/proxy.Auth YY=$ptrType(D.Userinfo);Ynet/url.Userinfo ZZ=$sliceType($Uint8);Z AAAA=$ptrType(I);AA%vendor/golang_org/x/net/proxy.PerHost ABAB=$ptrType(R);AB$vendor/golang_org/x/net/proxy.socks5 Direct NN=false;proxySchemes*vendor/golang_org/x/net/proxy.proxySchemes Ssocks5Errors     $pkg.Direct=new H.ptr();Direct$vendor/golang_org/x/net/proxy.Direct$vendor/golang_org/x/net/proxy.direct ��    S=new T(["","general failure","connection forbidden","network unreachable","host unreachable","connection refused","TTL expired","command not supported","address type not supported"]);socks5Errorsvendor/golang_org/x/net/proxy.T*vendor/golang_org/x/net/proxy.socks5Errors +(vendor/golang_org/x/net/proxy.direct).Dial��H.ptr.prototype.Dial=function(a,b){var $ptr,a,b;  xreturn A.Dial(a,b);    };H.prototype.Dial=function(a,b){return this.$val.Dial(a,b);};directnet.Dial$vendor/golang_org/x/net/proxy.direct (vendor/golang_org/x/net/proxy.NewPerHostJiJ=function(a,b){var $ptr,a,b;  freturn new I.ptr(a,b,V.nil,W.nil,T.nil,T.nil);    };$pkg.NewPerHost=J;
NewPerHostnet.IP	net.IPNet(vendor/golang_org/x/net/proxy.NewPerHost%vendor/golang_org/x/net/proxy.PerHostvendor/golang_org/x/net/proxy.Tvendor/golang_org/x/net/proxy.Uvendor/golang_org/x/net/proxy.Vvendor/golang_org/x/net/proxy.W -(*vendor/golang_org/x/net/proxy.PerHost).Dial��I.ptr.prototype.Dial=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=$ifaceNil;d=$ifaceNil;e=this;  Ug=A.SplitHostPort(b);$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;h=f[0];d=f[2];    if(!($interfaceIsEqual(d,$ifaceNil))){    i=$ifaceNil;j=d;c=i;d=j;$s=-1;return[c,d];    }    l=e.dialerForRequest(h).Dial(a,b);$s=2;case 2:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;c=k[0];d=k[1];$s=-1;return[c,d];    }return;}if($f===undefined){$f={$blk:I.ptr.prototype.Dial};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.Dial=function(a,b){return this.$val.Dial(a,b);};PerHostnet.SplitHostPort%vendor/golang_org/x/net/proxy.PerHost/vendor/golang_org/x/net/proxy.dialerForRequest~ 9(*vendor/golang_org/x/net/proxy.PerHost).dialerForRequest��I.ptr.prototype.dialerForRequest=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=this;  c=A.ParseIP(a);    if(!(c===A.IP.nil)){  @d=b.bypassNetworks;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);    if(f.Contains(c)){  �return b.bypass;    }    e++;}  �g=b.bypassIPs;h=0;while(true){if(!(h<g.$length)){break;}i=((h<0||h>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+h]);    if(i.Equal(c)){  �return b.bypass;    }    h++;}   return b.def;    }  j=b.bypassZones;k=0;while(true){if(!(k<j.$length)){break;}l=((k<0||k>=j.$length)?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+k]);    if(B.HasSuffix(a,l)){  _return b.bypass;    }    if(a===$substring(l,1)){  �return b.bypass;    }    k++;}  �m=b.bypassHosts;n=0;while(true){if(!(n<m.$length)){break;}o=((n<0||n>=m.$length)?($throwRuntimeError("index out of range"),undefined):m.$array[m.$offset+n]);    if(o===a){  0return b.bypass;    }    n++;}  Hreturn b.def;    };I.prototype.dialerForRequest=function(a){return this.$val.dialerForRequest(a);};PerHostdialerForRequest~net.IPnet.ParseIPstrings.HasSuffix%vendor/golang_org/x/net/proxy.PerHost 6(*vendor/golang_org/x/net/proxy.PerHost).AddFromString�I.ptr.prototype.AddFromString=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  	�c=B.Split(a,",");  	�d=c;e=0;case 1:if(!(e<d.$length)){$s=2;continue;}f=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  	�g=B.TrimSpace(f);$s=3;case 3:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;    if(f.length===0){  
'e++;$s=1;continue;    }    if(B.Contains(f,"/")){  
�h=A.ParseCIDR(f);i=h[1];j=h[2];    if($interfaceIsEqual(j,$ifaceNil)){  
�b.AddNetwork(i);    }  
�e++;$s=1;continue;    }  
�k=A.ParseIP(f);    if(!(k===A.IP.nil)){   b.AddIP(k);  /e++;$s=1;continue;    }    if(B.HasPrefix(f,"*.")){  db.AddZone($substring(f,1));  {e++;$s=1;continue;    }  �b.AddHost(f);    e++;$s=1;continue;case 2:    $s=-1;return;}return;}if($f===undefined){$f={$blk:I.ptr.prototype.AddFromString};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.AddFromString=function(a){return this.$val.AddFromString(a);};PerHostnet.IPnet.ParseCIDRnet.ParseIPstrings.Containsstrings.HasPrefixstrings.Splitstrings.TrimSpace%vendor/golang_org/x/net/proxy.PerHost .(*vendor/golang_org/x/net/proxy.PerHost).AddIP��I.ptr.prototype.AddIP=function(a){var $ptr,a,b;b=this;  �b.bypassIPs=$append(b.bypassIPs,a);    };I.prototype.AddIP=function(a){return this.$val.AddIP(a);};PerHost%vendor/golang_org/x/net/proxy.PerHost 3(*vendor/golang_org/x/net/proxy.PerHost).AddNetwork��I.ptr.prototype.AddNetwork=function(a){var $ptr,a,b;b=this;  �b.bypassNetworks=$append(b.bypassNetworks,a);    };I.prototype.AddNetwork=function(a){return this.$val.AddNetwork(a);};PerHost%vendor/golang_org/x/net/proxy.PerHost 0(*vendor/golang_org/x/net/proxy.PerHost).AddZone�"I.ptr.prototype.AddZone=function(a){var $ptr,a,b;b=this;    if(B.HasSuffix(a,".")){  �a=$substring(a,0,(a.length-1>>0));    }    if(!B.HasPrefix(a,".")){  �a="."+a;    }  b.bypassZones=$append(b.bypassZones,a);    };I.prototype.AddZone=function(a){return this.$val.AddZone(a);};PerHoststrings.HasPrefixstrings.HasSuffix%vendor/golang_org/x/net/proxy.PerHost 0(*vendor/golang_org/x/net/proxy.PerHost).AddHost��I.ptr.prototype.AddHost=function(a){var $ptr,a,b;b=this;    if(B.HasSuffix(a,".")){  �a=$substring(a,0,(a.length-1>>0));    }  �b.bypassHosts=$append(b.bypassHosts,a);    };I.prototype.AddHost=function(a){return this.$val.AddHost(a);};PerHoststrings.HasSuffix%vendor/golang_org/x/net/proxy.PerHost -vendor/golang_org/x/net/proxy.FromEnvironmentM��M=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  'a=E.Getenv("all_proxy");$s=1;case 1:if($c){$c=false;a=a.$blk();}if(a&&a.$blk!==undefined){break s;}b=a;    if(b.length===0){  e$s=-1;return new $pkg.Direct.constructor.elem($pkg.Direct);    }  xd=D.Parse(b);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];f=c[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  �$s=-1;return new $pkg.Direct.constructor.elem($pkg.Direct);    }  �h=P(e,new $pkg.Direct.constructor.elem($pkg.Direct));$s=3;case 3:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;i=g[0];f=g[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  �$s=-1;return new $pkg.Direct.constructor.elem($pkg.Direct);    }  j=E.Getenv("no_proxy");$s=4;case 4:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=j;    if(k.length===0){  K$s=-1;return i;    }  ]l=J(i,new $pkg.Direct.constructor.elem($pkg.Direct));  �$r=l.AddFromString(k);$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �$s=-1;return l;    }return;}if($f===undefined){$f={$blk:M};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};$pkg.FromEnvironment=M;FromEnvironmentnet/url.Parse	os.Getenv$vendor/golang_org/x/net/proxy.Direct-vendor/golang_org/x/net/proxy.FromEnvironment%vendor/golang_org/x/net/proxy.FromURL(vendor/golang_org/x/net/proxy.NewPerHost 0vendor/golang_org/x/net/proxy.RegisterDialerTypeO��O=function(a,b){var $ptr,a,b,c;    if(N===false){  �N={};    }  �c=a;(N||$throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(c)]={k:c,v:b};    };$pkg.RegisterDialerType=O;RegisterDialerType0vendor/golang_org/x/net/proxy.RegisterDialerType*vendor/golang_org/x/net/proxy.proxySchemes %vendor/golang_org/x/net/proxy.FromURLP��P=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �c=X.nil;    if(!(a.User===Y.nil)){  �c=new L.ptr("","");  �c.User=a.User.Username();  �d=a.User.Password();e=d[0];f=d[1];    if(f){  c.Password=e;    }    }    g=a.Scheme;    if(g===("socks5")){  [$s=-1;return Q("tcp",a.Host,c,b);    }  �if(!(N===false)){$s=1;continue;}$s=2;continue;    case 1:  h=(i=N[$String.keyFor(a.Scheme)],i!==undefined?[i.v,true]:[$throwNilPointerError,false]);j=h[0];k=h[1];  if(k){$s=3;continue;}$s=4;continue;    case 3:  Al=j(a,b);$s=5;case 5:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}$s=-1;return l;    case 4:    case 2:  _$s=-1;return[$ifaceNil,C.New("proxy: unknown scheme: "+a.Scheme)];    }return;}if($f===undefined){$f={$blk:P};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};$pkg.FromURL=P;FromURL
errors.Newnet/url.Userinfo"vendor/golang_org/x/net/proxy.Auth%vendor/golang_org/x/net/proxy.FromURL$vendor/golang_org/x/net/proxy.SOCKS5vendor/golang_org/x/net/proxy.Xvendor/golang_org/x/net/proxy.Y*vendor/golang_org/x/net/proxy.proxySchemes $vendor/golang_org/x/net/proxy.SOCKS5Q��Q=function(a,b,c,d){var $ptr,a,b,c,d,e;  Ue=new R.ptr("","",a,b,d);    if(!(c===X.nil)){  �e.user=c.User;  �e.password=c.Password;    }  �return[e,$ifaceNil];    };$pkg.SOCKS5=Q;SOCKS5$vendor/golang_org/x/net/proxy.SOCKS5vendor/golang_org/x/net/proxy.X$vendor/golang_org/x/net/proxy.socks5 ,(*vendor/golang_org/x/net/proxy.socks5).Dial�R.ptr.prototype.Dial=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;    d=a;    if(d===("tcp")||d===("tcp6")||d===("tcp4")){    }else{  �$s=-1;return[$ifaceNil,C.New("proxy: no support for SOCKS5 proxy connections of type "+a)];    }  f=c.forward.Dial(c.network,c.addr);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];h=e[1];    if(!($interfaceIsEqual(h,$ifaceNil))){  O$s=-1;return[$ifaceNil,h];    }  fi=c.connect(g,b);$s=2;case 2:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}j=i;  cif(!($interfaceIsEqual(j,$ifaceNil))){$s=3;continue;}$s=4;continue;    case 3:  �k=g.Close();$s=5;case 5:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}k;  �$s=-1;return[$ifaceNil,j];    case 4:  �$s=-1;return[g,$ifaceNil];    }return;}if($f===undefined){$f={$blk:R.ptr.prototype.Dial};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};R.prototype.Dial=function(a,b){return this.$val.Dial(a,b);};socks5
errors.New&vendor/golang_org/x/net/proxy.connect~$vendor/golang_org/x/net/proxy.socks5 /(*vendor/golang_org/x/net/proxy.socks5).connect�%4R.ptr.prototype.connect=function(a,b){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;ai=$f.ai;aj=$f.aj;ak=$f.ak;al=$f.al;am=$f.am;an=$f.an;ao=$f.ao;ap=$f.ap;aq=$f.aq;ar=$f.ar;as=$f.as;at=$f.at;au=$f.au;av=$f.av;aw=$f.aw;ax=$f.ax;ay=$f.ay;az=$f.az;b=$f.b;ba=$f.ba;bb=$f.bb;bc=$f.bc;bd=$f.bd;be=$f.be;bf=$f.bf;bg=$f.bg;bh=$f.bh;bi=$f.bi;bj=$f.bj;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;   �e=A.SplitHostPort(b);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];h=d[2];    if(!($interfaceIsEqual(h,$ifaceNil))){  !
$s=-1;return h;    }  !i=G.Atoi(g);j=i[0];h=i[1];    if(!($interfaceIsEqual(h,$ifaceNil))){  !P$s=-1;return C.New("proxy: failed to parse port number: "+g);    }    if(j<1||j>65535){  !�$s=-1;return C.New("proxy: port number out of range: "+g);    }  "%k=$makeSlice(Z,0,(6+f.length>>0));  "Kk=$append(k,5);    if(c.user.length>0&&c.user.length<256&&c.password.length<256){  "�k=$append(k,2,0,2);    }else{  #k=$append(k,1,0);    }  #Rm=a.Write(k);$s=2;case 2:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}l=m;n=l[1];  #Oif(!($interfaceIsEqual(n,$ifaceNil))){$s=3;continue;}$s=4;continue;    case 3:  #|o=n.Error();$s=5;case 5:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}p=C.New("proxy: failed to write greeting to SOCKS5 proxy at "+c.addr+": "+o);$s=6;case 6:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}$s=-1;return p;    case 4:  #�r=F.ReadFull(a,$subslice(k,0,2));$s=7;case 7:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}q=r;s=q[1];  #�if(!($interfaceIsEqual(s,$ifaceNil))){$s=8;continue;}$s=9;continue;    case 8:  $ t=s.Error();$s=10;case 10:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}u=C.New("proxy: failed to read greeting from SOCKS5 proxy at "+c.addr+": "+t);$s=11;case 11:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}$s=-1;return u;    case 9:    if(!(((0>=k.$length?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+0])===5))){  $�$s=-1;return C.New("proxy: SOCKS5 proxy at "+c.addr+" has unexpected version "+G.Itoa((((0>=k.$length?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+0])>>0))));    }    if((1>=k.$length?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+1])===255){  %($s=-1;return C.New("proxy: SOCKS5 proxy at "+c.addr+" requires authentication");    }  %�if((1>=k.$length?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+1])===2){$s=12;continue;}$s=13;continue;    case 12:  %�k=$subslice(k,0,0);  %�k=$append(k,1);  %�k=$append(k,((c.user.length<<24>>>24)));  &k=$appendSlice(k,c.user);  &2k=$append(k,((c.password.length<<24>>>24)));  &^k=$appendSlice(k,c.password);  &�w=a.Write(k);$s=14;case 14:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}v=w;x=v[1];  &�if(!($interfaceIsEqual(x,$ifaceNil))){$s=15;continue;}$s=16;continue;    case 15:  &�y=x.Error();$s=17;case 17:if($c){$c=false;y=y.$blk();}if(y&&y.$blk!==undefined){break s;}z=C.New("proxy: failed to write authentication request to SOCKS5 proxy at "+c.addr+": "+y);$s=18;case 18:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}$s=-1;return z;    case 16:  '/ab=F.ReadFull(a,$subslice(k,0,2));$s=19;case 19:if($c){$c=false;ab=ab.$blk();}if(ab&&ab.$blk!==undefined){break s;}aa=ab;ac=aa[1];  ',if(!($interfaceIsEqual(ac,$ifaceNil))){$s=20;continue;}$s=21;continue;    case 20:  'ead=ac.Error();$s=22;case 22:if($c){$c=false;ad=ad.$blk();}if(ad&&ad.$blk!==undefined){break s;}ae=C.New("proxy: failed to read authentication reply from SOCKS5 proxy at "+c.addr+": "+ad);$s=23;case 23:if($c){$c=false;ae=ae.$blk();}if(ae&&ae.$blk!==undefined){break s;}$s=-1;return ae;    case 21:    if(!(((1>=k.$length?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+1])===0))){  '�$s=-1;return C.New("proxy: SOCKS5 proxy at "+c.addr+" rejected username/password");    }    case 13:  (Sk=$subslice(k,0,0);  (bk=$append(k,5,1,0);  (�af=A.ParseIP(f);    if(!(af===A.IP.nil)){  (�ag=af.To4();    if(!(ag===A.IP.nil)){  (�k=$append(k,1);  )af=ag;    }else{  )+k=$append(k,4);    }  )Nk=$appendSlice(k,$subslice(new Z(af.$array),af.$offset,af.$offset+af.$length));    }else{    if(f.length>255){  )�$s=-1;return C.New("proxy: destination hostname too long: "+f);    }  )�k=$append(k,3);  )�k=$append(k,((f.length<<24>>>24)));  *k=$appendSlice(k,f);    }  *:k=$append(k,(((j>>8>>0)<<24>>>24)),((j<<24>>>24)));  *lai=a.Write(k);$s=24;case 24:if($c){$c=false;ai=ai.$blk();}if(ai&&ai.$blk!==undefined){break s;}ah=ai;aj=ah[1];  *iif(!($interfaceIsEqual(aj,$ifaceNil))){$s=25;continue;}$s=26;continue;    case 25:  *�ak=aj.Error();$s=27;case 27:if($c){$c=false;ak=ak.$blk();}if(ak&&ak.$blk!==undefined){break s;}al=C.New("proxy: failed to write connect request to SOCKS5 proxy at "+c.addr+": "+ak);$s=28;case 28:if($c){$c=false;al=al.$blk();}if(al&&al.$blk!==undefined){break s;}$s=-1;return al;    case 26:  +an=F.ReadFull(a,$subslice(k,0,4));$s=29;case 29:if($c){$c=false;an=an.$blk();}if(an&&an.$blk!==undefined){break s;}am=an;ao=am[1];  +	if(!($interfaceIsEqual(ao,$ifaceNil))){$s=30;continue;}$s=31;continue;    case 30:  +Aap=ao.Error();$s=32;case 32:if($c){$c=false;ap=ap.$blk();}if(ap&&ap.$blk!==undefined){break s;}aq=C.New("proxy: failed to read connect reply from SOCKS5 proxy at "+c.addr+": "+ap);$s=33;case 33:if($c){$c=false;aq=aq.$blk();}if(aq&&aq.$blk!==undefined){break s;}$s=-1;return aq;    case 31:  +�ar="unknown error";    if((((1>=k.$length?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+1])>>0))<S.$length){  +�ar=(as=(1>=k.$length?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+1]),((as<0||as>=S.$length)?($throwRuntimeError("index out of range"),undefined):S.$array[S.$offset+as]));    }    if(ar.length>0){  ,2$s=-1;return C.New("proxy: SOCKS5 proxy at "+c.addr+" failed to connect: "+ar);    }  ,�at=0;    au=(3>=k.$length?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+3]);  ,�if(au===(1)){$s=35;continue;}if(au===(4)){$s=36;continue;}if(au===(3)){$s=37;continue;}$s=38;continue;    case 35:  ,�at=4;    $s=39;continue;    case 36:  ,�at=16;    $s=39;continue;    case 37:  -+aw=F.ReadFull(a,$subslice(k,0,1));$s=40;case 40:if($c){$c=false;aw=aw.$blk();}if(aw&&aw.$blk!==undefined){break s;}av=aw;ax=av[1];  -Rif(!($interfaceIsEqual(ax,$ifaceNil))){$s=41;continue;}$s=42;continue;    case 41:  -eay=ax.Error();$s=43;case 43:if($c){$c=false;ay=ay.$blk();}if(ay&&ay.$blk!==undefined){break s;}az=C.New("proxy: failed to read domain length from SOCKS5 proxy at "+c.addr+": "+ay);$s=44;case 44:if($c){$c=false;az=az.$blk();}if(az&&az.$blk!==undefined){break s;}$s=-1;return az;    case 42:  -�at=(((0>=k.$length?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+0])>>0));    $s=39;continue;case 38:  .$s=-1;return C.New("proxy: got unknown address type "+G.Itoa((((3>=k.$length?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+3])>>0)))+" from SOCKS5 proxy at "+c.addr);    case 39:    case 34:    if(k.$capacity<at){  .�k=$makeSlice(Z,at);    }else{  .�k=$subslice(k,0,at);    }  .�bb=F.ReadFull(a,k);$s=45;case 45:if($c){$c=false;bb=bb.$blk();}if(bb&&bb.$blk!==undefined){break s;}ba=bb;bc=ba[1];  .�if(!($interfaceIsEqual(bc,$ifaceNil))){$s=46;continue;}$s=47;continue;    case 46:  /bd=bc.Error();$s=48;case 48:if($c){$c=false;bd=bd.$blk();}if(bd&&bd.$blk!==undefined){break s;}be=C.New("proxy: failed to read address from SOCKS5 proxy at "+c.addr+": "+bd);$s=49;case 49:if($c){$c=false;be=be.$blk();}if(be&&be.$blk!==undefined){break s;}$s=-1;return be;    case 47:  /�bg=F.ReadFull(a,$subslice(k,0,2));$s=50;case 50:if($c){$c=false;bg=bg.$blk();}if(bg&&bg.$blk!==undefined){break s;}bf=bg;bh=bf[1];  /�if(!($interfaceIsEqual(bh,$ifaceNil))){$s=51;continue;}$s=52;continue;    case 51:  /�bi=bh.Error();$s=53;case 53:if($c){$c=false;bi=bi.$blk();}if(bi&&bi.$blk!==undefined){break s;}bj=C.New("proxy: failed to read port from SOCKS5 proxy at "+c.addr+": "+bi);$s=54;case 54:if($c){$c=false;bj=bj.$blk();}if(bj&&bj.$blk!==undefined){break s;}$s=-1;return bj;    case 52:  0U$s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:R.ptr.prototype.connect};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.ai=ai;$f.aj=aj;$f.ak=ak;$f.al=al;$f.am=am;$f.an=an;$f.ao=ao;$f.ap=ap;$f.aq=aq;$f.ar=ar;$f.as=as;$f.at=at;$f.au=au;$f.av=av;$f.aw=aw;$f.ax=ax;$f.ay=ay;$f.az=az;$f.b=b;$f.ba=ba;$f.bb=bb;$f.bc=bc;$f.bd=bd;$f.be=be;$f.bf=bf;$f.bg=bg;$f.bh=bh;$f.bi=bi;$f.bj=bj;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};R.prototype.connect=function(a,b){return this.$val.connect(a,b);};socks5connect~

errors.Newio.ReadFullnet.IPnet.ParseIPnet.SplitHostPortstrconv.Atoistrconv.Itoavendor/golang_org/x/net/proxy.Z$vendor/golang_org/x/net/proxy.socks5*vendor/golang_org/x/net/proxy.socks5Errors �y{"Base":12387,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/vendor/golang_org/x/net/proxy/direct.go","Base":1,"Size":408,"Lines":[0,55,109,159,160,174,175,184,191,193,194,215,216,290,312,313,374,406],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/vendor/golang_org/x/net/proxy/per_host.go","Base":410,"Size":3708,"Lines":[0,55,109,159,160,174,175,184,191,202,204,205,278,330,352,372,373,402,427,452,477,479,480,554,633,658,715,733,758,776,779,781,782,855,883,954,995,1012,1030,1033,1034,1087,1089,1090,1147,1188,1229,1254,1274,1279,1283,1324,1351,1371,1376,1380,1395,1398,1399,1437,1474,1493,1497,1521,1576,1587,1606,1610,1613,1657,1683,1702,1706,1709,1723,1725,1726,1796,1874,1940,2013,2025,2069,2101,2131,2164,2186,2198,2202,2237,2295,2350,2372,2377,2389,2393,2435,2450,2462,2466,2503,2526,2538,2542,2560,2563,2565,2566,2641,2719,2762,2799,2838,2840,2841,2919,2997,3034,3081,3131,3133,3134,3210,3276,3317,3352,3380,3383,3419,3439,3442,3487,3489,3490,3554,3595,3630,3658,3661,3706],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/vendor/golang_org/x/net/proxy/proxy.go","Base":4119,"Size":2439,"Lines":[0,55,109,159,160,238,247,296,297,306,316,323,334,340,342,343,393,417,471,523,525,526,604,623,646,648,649,731,751,783,819,844,860,863,864,902,919,935,938,979,996,1012,1015,1016,1050,1074,1089,1092,1093,1131,1163,1179,1181,1182,1260,1294,1361,1362,1443,1522,1537,1620,1646,1719,1722,1748,1750,1751,1823,1866,1925,1941,1961,1980,2012,2050,2071,2075,2078,2079,2098,2114,2160,2163,2164,2235,2274,2300,2343,2367,2371,2374,2375,2437],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/vendor/golang_org/x/net/proxy/socks5.go","Base":6559,"Size":5827,"Lines":[0,55,109,159,160,174,175,184,194,200,207,218,220,221,300,357,437,452,472,489,509,512,530,551,580,583,584,599,601,602,623,646,669,692,694,695,719,720,728,752,776,778,779,803,804,812,830,848,866,868,869,898,903,923,948,972,993,1016,1032,1058,1089,1091,1092,1170,1234,1252,1281,1291,1385,1388,1389,1437,1454,1472,1475,1522,1537,1555,1558,1576,1578,1579,1645,1709,1768,1831,1880,1897,1910,1913,1914,1950,1967,2037,2040,2072,2139,2142,2143,2181,2218,2219,2253,2321,2403,2413,2475,2478,2479,2523,2628,2631,2632,2687,2793,2796,2814,2927,2930,2951,3036,3039,3040,3075,3091,3146,3186,3217,3261,3296,3297,3342,3462,3466,3467,3523,3642,3646,3647,3666,3755,3759,3762,3763,3778,3845,3846,3887,3922,3954,3966,3977,4009,4013,4040,4050,4073,4143,4147,4181,4218,4247,4250,4296,4297,4341,4453,4456,4457,4512,4623,4626,4627,4655,4693,4726,4729,4730,4753,4844,4847,4848,4869,4886,4903,4934,4951,4982,5002,5041,5059,5171,5175,5206,5216,5336,5339,5340,5372,5409,5419,5448,5451,5502,5607,5610,5611,5652,5707,5809,5812,5813,5825],"Infos":null}]}
 