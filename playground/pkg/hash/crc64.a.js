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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �e��
hash/crc64crc64hash�R
$$ exports $$
pv0
crc64hash/crc64	Checksum data2tab
Table �   ECMA$# B�וWl�ISO$#p�	MakeTable poly > 	New tab> Hash64hashhashHashWriterioio 
Write p2nerr6  BlockSize    
Reset    Size    Sum b2 2  
Sum64      Size$!>	Update crctab>p2  AA=$packages["hash"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BOB=$pkg.Table=$newType(2048,$kindArray,"crc64.Table","Table","hash/crc64",null);B.init($Uint64,256);Tablehash/crc64.Table D��D=$pkg.digest=$newType(0,$kindStruct,"crc64.digest","digest","hash/crc64",function(crc_,tab_){this.$val=this;if(arguments.length===0){this.crc=new $Uint64(0,0);this.tab=J.nil;return;}this.crc=crc_;this.tab=tab_;});��L.methods=[{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([K],[$Int,$error],false)},{prop:"Sum64",name:"Sum64",pkg:"",typ:$funcType([],[$Uint64],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([K],[K],false)}];|D.init([{prop:"crc",name:"crc",pkg:"hash/crc64",typ:$Uint64,tag:""},{prop:"tab",name:"tab",pkg:"hash/crc64",typ:J,tag:""}]);digesthash/crc64.Jhash/crc64.Khash/crc64.Lhash/crc64.Tablehash/crc64.digest II=$arrayType($Uint64,256);I JJ=$ptrType(B);Jhash/crc64.Table KK=$sliceType($Uint8);K LL=$ptrType(D);Lhash/crc64.digest hash/crc64.MakeTableC�C=function(a){var $ptr,a,b,c,d,e,f,g;  tb=I.zero();  �c=0;while(true){if(!(c<256)){break;}  �d=new $Uint64(0,c);  �e=0;while(true){if(!(e<8)){break;}    if((f=new $Uint64(d.$high&0,(d.$low&1)>>>0),(f.$high===0&&f.$low===1))){  �d=(g=$shiftRightUint64(d,1),new $Uint64(g.$high^a.$high,(g.$low^a.$low)>>>0));    }else{  d=$shiftRightUint64(d,(1));    }  �e=e+(1)>>0;    }  "b.nilCheck,((c<0||c>=b.length)?$throwRuntimeError("index out of range"):b[c]=d);  �c=c+(1)>>0;    }  1return b;    };$pkg.MakeTable=C;	MakeTablehash/crc64.Ihash/crc64.MakeTable hash/crc64.NewEUE=function(a){var $ptr,a;  return new D.ptr(new $Uint64(0,0),a);    };$pkg.New=E;Newhash/crc64.Newhash/crc64.digest (*hash/crc64.digest).Size��D.ptr.prototype.Size=function(){var $ptr,a;  �a=this;  �return 8;    };D.prototype.Size=function(){return this.$val.Size();};digesthash/crc64.digest (*hash/crc64.digest).BlockSize��D.ptr.prototype.BlockSize=function(){var $ptr,a;  �a=this;  �return 1;    };D.prototype.BlockSize=function(){return this.$val.BlockSize();};digesthash/crc64.digest (*hash/crc64.digest).Reset��D.ptr.prototype.Reset=function(){var $ptr,a;  �a=this;  a.crc=new $Uint64(0,0);    };D.prototype.Reset=function(){return this.$val.Reset();};digesthash/crc64.digest hash/crc64.updateF��F=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i;  Ua=new $Uint64(~a.$high,~a.$low>>>0);  ad=c;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  ya=(g=(h=((a.$low<<24>>>24)^f)<<24>>>24,(b.nilCheck,((h<0||h>=b.length)?$throwRuntimeError("index out of range"):b[h]))),i=$shiftRightUint64(a,8),new $Uint64(g.$high^i.$high,(g.$low^i.$low)>>>0));    e++;}  �return new $Uint64(~a.$high,~a.$low>>>0);    };updatehash/crc64.update hash/crc64.UpdateGKG=function(a,b,c){var $ptr,a,b,c;  *return F(a,b,c);    };$pkg.Update=G;Updatehash/crc64.Updatehash/crc64.update (*hash/crc64.digest).Write��D.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f;b=0;c=$ifaceNil;  Nd=this;  d.crc=F(d.crc,d.tab,a);    e=a.$length;f=$ifaceNil;b=e;c=f;return[b,c];    };D.prototype.Write=function(a){return this.$val.Write(a);};digesthash/crc64.digesthash/crc64.update (*hash/crc64.digest).Sum64��D.ptr.prototype.Sum64=function(){var $ptr,a;  �a=this;  �return a.crc;    };D.prototype.Sum64=function(){return this.$val.Sum64();};digesthash/crc64.digest (*hash/crc64.digest).Sum��D.ptr.prototype.Sum=function(a){var $ptr,a,b,c;  �b=this;  c=b.Sum64();  "return $append(a,($shiftRightUint64(c,56).$low<<24>>>24),($shiftRightUint64(c,48).$low<<24>>>24),($shiftRightUint64(c,40).$low<<24>>>24),($shiftRightUint64(c,32).$low<<24>>>24),($shiftRightUint64(c,24).$low<<24>>>24),($shiftRightUint64(c,16).$low<<24>>>24),($shiftRightUint64(c,8).$low<<24>>>24),(c.$low<<24>>>24));    };D.prototype.Sum=function(a){return this.$val.Sum(a);};digesthash/crc64.digest hash/crc64.ChecksumHXH=function(a,b){var $ptr,a,b;  	,return F(new $Uint64(0,0),b,a);    };$pkg.Checksum=H;Checksumhash/crc64.Checksumhash/crc64.update �U{"Base":2379,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VN0yYPqRpv/goroot/src/hash/crc64/crc64.go","Base":1,"Size":2377,"Lines":[0,55,109,159,160,235,309,325,339,340,354,355,398,413,414,441,449,511,537,538,584,611,613,614,697,720,721,793,845,882,899,927,946,973,992,1020,1032,1046,1051,1055,1068,1071,1081,1083,1084,1143,1164,1176,1188,1190,1191,1254,1304,1371,1431,1432,1476,1477,1523,1524,1563,1564,1619,1631,1654,1692,1695,1708,1710,1711,1777,1832,1860,1862,1863,1917,1950,1970,1972,1973,2022,2023,2064,2080,2198,2200,2201,2249,2299],"Infos":null}]}
 