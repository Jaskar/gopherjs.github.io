p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ���cryptocryptohashiostrconv��package crypto
import hash "hash"
import io "io"
import strconv "strconv"
type @"".Hash uint
func (? @"".Hash) @"".Available() (? bool)
func (? @"".Hash) @"".HashFunc() (? @"".Hash)
func (? @"".Hash) @"".New() (? @"hash".Hash)
func (? @"".Hash) @"".Size() (? int)
func (? *@"".Hash) @"".Available() (? bool)
func (? *@"".Hash) @"".HashFunc() (? @"".Hash)
func (? *@"".Hash) @"".New() (? @"hash".Hash)
func (? *@"".Hash) @"".Size() (? int)
const @"".MD4 @"".Hash = 0x1
const @"".MD5 @"".Hash = 0x2
const @"".MD5SHA1 @"".Hash = 0x8
type @"".PrivateKey interface {  }
type @"".PublicKey interface {  }
const @"".RIPEMD160 @"".Hash = 0x9
func @"".RegisterHash(@"".h @"".Hash, @"".f func () (? @"hash".Hash)) ()
const @"".SHA1 @"".Hash = 0x3
const @"".SHA224 @"".Hash = 0x4
const @"".SHA256 @"".Hash = 0x5
const @"".SHA384 @"".Hash = 0x6
const @"".SHA3_224 @"".Hash = 0xa
const @"".SHA3_256 @"".Hash = 0xb
const @"".SHA3_384 @"".Hash = 0xc
const @"".SHA3_512 @"".Hash = 0xd
const @"".SHA512 @"".Hash = 0x7
type @"".Signer interface { @"".Public() (? @"".PublicKey); @"".Sign(@"".rand @"io".Reader, @"".msg []byte, @"".opts @"".SignerOpts) (@"".signature []byte, @"".err error) }
type @"".SignerOpts interface { @"".HashFunc() (? @"".Hash) }
type @"hash".Hash interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
AA=$packages["hash"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["io"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["strconv"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} DED=$pkg.Hash=$newType(4,$kindUint,"crypto.Hash","Hash","crypto",null);�D.methods=[{prop:"HashFunc",name:"HashFunc",pkg:"",typ:$funcType([],[D],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"New",name:"New",pkg:"",typ:$funcType([],[A.Hash],false)},{prop:"Available",name:"Available",pkg:"",typ:$funcType([],[$Bool],false)}];crypto.Hashcrypto.Hash	hash.Hash HYH=$pkg.PublicKey=$newType(8,$kindInterface,"crypto.PublicKey","PublicKey","crypto",null);H.init([]);crypto.PublicKeycrypto.PublicKey I\I=$pkg.PrivateKey=$newType(8,$kindInterface,"crypto.PrivateKey","PrivateKey","crypto",null);I.init([]);crypto.PrivateKeycrypto.PrivateKey JPJ=$pkg.Signer=$newType(8,$kindInterface,"crypto.Signer","Signer","crypto",null);��J.init([{prop:"Public",name:"Public",pkg:"",typ:$funcType([],[H],false)},{prop:"Sign",name:"Sign",pkg:"",typ:$funcType([B.Reader,O,K],[O,$error],false)}]);crypto.Signercrypto.PublicKeycrypto.Signercrypto.SignerOptscrypto:[]byte	io.Reader K\K=$pkg.SignerOpts=$newType(8,$kindInterface,"crypto.SignerOpts","SignerOpts","crypto",null);OK.init([{prop:"HashFunc",name:"HashFunc",pkg:"",typ:$funcType([],[D],false)}]);crypto.SignerOptscrypto.Hashcrypto.SignerOpts LL=$sliceType($Uint8);crypto:[]uint8 MM=$funcType([],[A.Hash],false);crypto:func() hash.Hash	hash.Hash NN=$sliceType(M);crypto:[]func() hash.Hashcrypto:func() hash.Hash OO=$sliceType($Uint8);crypto:[]byte Ecrypto.digestSizes Fcrypto.hashes 9    E=new L([0,16,16,20,28,32,48,64,36,20,28,32,48,64]);crypto.digestSizescrypto.digestSizescrypto:[]uint8     F=$makeSlice(N,14);crypto.hashescrypto:[]func() hash.Hashcrypto:func() hash.Hash	hash.Hash (crypto.Hash).HashFunc��D.prototype.HashFunc=function(){var a;  �a=this.$val;  �return a;    };$ptrType(D).prototype.HashFunc=function(){return new D(this.$get()).HashFunc();};crypto.Hashcrypto.Hash (crypto.Hash).Size�HD.prototype.Size=function(){var a;  �a=this.$val;  �    if(a>0&&a<14){  �return(((a<0||a>=E.$length)?$throwRuntimeError("index out of range"):E.$array[E.$offset+a])>>0);    }  �$panic(new $String("crypto: Size of unknown hash function"));    };$ptrType(D).prototype.Size=function(){return new D(this.$get()).Size();};crypto.Hashcrypto.Hashcrypto.digestSizes (crypto.Hash).New��D.prototype.New=function(){var a,b;  �a=this.$val;  �    if(a>0&&a<14){  b=((a<0||a>=F.$length)?$throwRuntimeError("index out of range"):F.$array[F.$offset+a]);  )    if(!(b===$throwNilPointerError)){  :return b();    }    }  M$panic(new $String("crypto: requested hash function #"+C.Itoa((a>>0))+" is unavailable"));    };$ptrType(D).prototype.New=function(){return new D(this.$get()).New();};crypto.Hashcrypto.Hashcrypto.hashesstrconv.Itoa (crypto.Hash).Available�D.prototype.Available=function(){var a;  �a=this.$val;  	return a<14&&!(((a<0||a>=F.$length)?$throwRuntimeError("index out of range"):F.$array[F.$offset+a])===$throwNilPointerError);    };$ptrType(D).prototype.Available=function(){return new D(this.$get()).Available();};crypto.Hashcrypto.Hashcrypto.hashes crypto.RegisterHashG��G=$pkg.RegisterHash=function(a,b){var a,b;  
6    if(a>=14){  
J$panic(new $String("crypto: RegisterHash of unknown hash function"));    }  
�((a<0||a>=F.$length)?$throwRuntimeError("index out of range"):F.$array[F.$offset+a]=b);    };crypto.RegisterHashcrypto.RegisterHashcrypto.hashes ��{"Base":4103,"Files":[{"Name":"/usr/local/go/src/crypto/crypto.go","Base":1,"Size":4101,"Lines":[0,55,109,159,160,219,234,235,244,252,258,269,271,272,352,364,379,380,458,490,500,502,503,511,572,620,669,720,771,822,873,948,1015,1077,1139,1201,1263,1272,1274,1275,1302,1318,1334,1350,1366,1382,1398,1414,1430,1446,1462,1478,1494,1510,1512,1513,1593,1670,1691,1718,1745,1774,1777,1825,1827,1828,1875,1876,1955,2010,2042,2069,2086,2102,2116,2120,2123,2210,2212,2213,2293,2326,2366,2368,2369,2447,2521,2564,2612,2631,2688,2691,2706,2708,2709,2778,2805,2806,2877,2905,2906,2979,3053,3077,3140,3157,3177,3178,3247,3316,3388,3455,3459,3532,3605,3673,3745,3826,3828,3829,3887,3915,3988,4060,4082,4099],"Infos":null}]}
 