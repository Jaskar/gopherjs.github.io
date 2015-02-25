p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ����go/tokentokenfmt#github.com/gopherjs/gopherjs/nosyncsortstrconvtesting�=}package token
import testing "testing"
import fmt "fmt"
import sort "sort"
import nosync "github.com/gopherjs/gopherjs/nosync"
import strconv "strconv"
const @"".ADD @"".Token = 0xc
const @"".ADD_ASSIGN @"".Token = 0x17
const @"".AND @"".Token = 0x11
const @"".AND_ASSIGN @"".Token = 0x1c
const @"".AND_NOT @"".Token = 0x16
const @"".AND_NOT_ASSIGN @"".Token = 0x21
const @"".ARROW @"".Token = 0x24
const @"".ASSIGN @"".Token = 0x2a
const @"".BREAK @"".Token = 0x3d
const @"".CASE @"".Token = 0x3e
const @"".CHAN @"".Token = 0x3f
const @"".CHAR @"".Token = 0x8
const @"".COLON @"".Token = 0x3a
const @"".COMMA @"".Token = 0x34
const @"".COMMENT @"".Token = 0x2
const @"".CONST @"".Token = 0x40
const @"".CONTINUE @"".Token = 0x41
const @"".DEC @"".Token = 0x26
const @"".DEFAULT @"".Token = 0x42
const @"".DEFER @"".Token = 0x43
const @"".DEFINE @"".Token = 0x2f
const @"".ELLIPSIS @"".Token = 0x30
const @"".ELSE @"".Token = 0x44
const @"".EOF @"".Token = 0x1
const @"".EQL @"".Token = 0x27
const @"".FALLTHROUGH @"".Token = 0x45
const @"".FLOAT @"".Token = 0x6
const @"".FOR @"".Token = 0x46
const @"".FUNC @"".Token = 0x47
type @"".File struct { @"".set *@"".FileSet; @"".name string; @"".base int; @"".size int; @"".lines []int; @"".infos []@"".lineInfo }
func (? *@"".File) @"".AddLine(@"".offset int) ()
func (? *@"".File) @"".AddLineInfo(@"".offset int, @"".filename string, @"".line int) ()
func (? *@"".File) @"".Base() (? int)
func (? *@"".File) @"".Line(@"".p @"".Pos) (? int)
func (? *@"".File) @"".LineCount() (? int)
func (? *@"".File) @"".MergeLine(@"".line int) ()
func (? *@"".File) @"".Name() (? string)
func (? *@"".File) @"".Offset(@"".p @"".Pos) (? int)
func (? *@"".File) @"".Pos(@"".offset int) (? @"".Pos)
func (? *@"".File) @"".Position(@"".p @"".Pos) (@"".pos @"".Position)
func (? *@"".File) @"".PositionFor(@"".p @"".Pos, @"".adjusted bool) (@"".pos @"".Position)
func (? *@"".File) @"".SetLines(@"".lines []int) (? bool)
func (? *@"".File) @"".SetLinesForContent(@"".content []byte) ()
func (? *@"".File) @"".Size() (? int)
func (? *@"".File) @"".position(@"".p @"".Pos, @"".adjusted bool) (@"".pos @"".Position)
func (? *@"".File) @"".unpack(@"".offset int, @"".adjusted bool) (@"".filename string, @"".line int, @"".column int)
type @"".FileSet struct { @"".mutex @"github.com/gopherjs/gopherjs/nosync".RWMutex; @"".base int; @"".files []*@"".File; @"".last *@"".File }
func (? *@"".FileSet) @"".AddFile(@"".filename string, @"".base int, @"".size int) (? *@"".File)
func (? *@"".FileSet) @"".Base() (? int)
func (? *@"".FileSet) @"".File(@"".p @"".Pos) (@"".f *@"".File)
func (? *@"".FileSet) @"".Iterate(@"".f func (? *@"".File) (? bool)) ()
func (? *@"".FileSet) @"".Position(@"".p @"".Pos) (@"".pos @"".Position)
func (? *@"".FileSet) @"".PositionFor(@"".p @"".Pos, @"".adjusted bool) (@"".pos @"".Position)
func (? *@"".FileSet) @"".Read(@"".decode func (? interface {  }) (? error)) (? error)
func (? *@"".FileSet) @"".Write(@"".encode func (? interface {  }) (? error)) (? error)
func (? *@"".FileSet) @"".file(@"".p @"".Pos) (? *@"".File)
const @"".GEQ @"".Token = 0x2e
const @"".GO @"".Token = 0x48
const @"".GOTO @"".Token = 0x49
const @"".GTR @"".Token = 0x29
const @"".HighestPrec = 0x7
const @"".IDENT @"".Token = 0x4
const @"".IF @"".Token = 0x4a
const @"".ILLEGAL @"".Token = 0x0
const @"".IMAG @"".Token = 0x7
const @"".IMPORT @"".Token = 0x4b
const @"".INC @"".Token = 0x25
const @"".INT @"".Token = 0x5
const @"".INTERFACE @"".Token = 0x4c
const @"".LAND @"".Token = 0x22
const @"".LBRACE @"".Token = 0x33
const @"".LBRACK @"".Token = 0x32
const @"".LEQ @"".Token = 0x2d
const @"".LOR @"".Token = 0x23
const @"".LPAREN @"".Token = 0x31
const @"".LSS @"".Token = 0x28
func @"".Lookup(@"".ident string) (? @"".Token)
const @"".LowestPrec = 0x0
const @"".MAP @"".Token = 0x4d
const @"".MUL @"".Token = 0xe
const @"".MUL_ASSIGN @"".Token = 0x19
const @"".NEQ @"".Token = 0x2c
const @"".NOT @"".Token = 0x2b
func @"".NewFileSet() (? *@"".FileSet)
const @"".NoPos @"".Pos = 0x0
const @"".OR @"".Token = 0x12
const @"".OR_ASSIGN @"".Token = 0x1d
const @"".PACKAGE @"".Token = 0x4e
const @"".PERIOD @"".Token = 0x35
type @"".Pos int
func (? @"".Pos) @"".IsValid() (? bool)
func (? *@"".Pos) @"".IsValid() (? bool)
type @"".Position struct { @"".Filename string; @"".Offset int; @"".Line int; @"".Column int }
func (? @"".Position) @"".String() (? string)
func (? *@"".Position) @"".IsValid() (? bool)
func (? *@"".Position) @"".String() (? string)
const @"".QUO @"".Token = 0xf
const @"".QUO_ASSIGN @"".Token = 0x1a
const @"".RANGE @"".Token = 0x4f
const @"".RBRACE @"".Token = 0x38
const @"".RBRACK @"".Token = 0x37
const @"".REM @"".Token = 0x10
const @"".REM_ASSIGN @"".Token = 0x1b
const @"".RETURN @"".Token = 0x50
const @"".RPAREN @"".Token = 0x36
const @"".SELECT @"".Token = 0x51
const @"".SEMICOLON @"".Token = 0x39
const @"".SHL @"".Token = 0x14
const @"".SHL_ASSIGN @"".Token = 0x1f
const @"".SHR @"".Token = 0x15
const @"".SHR_ASSIGN @"".Token = 0x20
const @"".STRING @"".Token = 0x9
const @"".STRUCT @"".Token = 0x52
const @"".SUB @"".Token = 0xd
const @"".SUB_ASSIGN @"".Token = 0x18
const @"".SWITCH @"".Token = 0x53
const @"".TYPE @"".Token = 0x54
func @"".TestFileSetRace(@"".t *@"testing".T) ()
type @"".Token int
func (? @"".Token) @"".IsKeyword() (? bool)
func (? @"".Token) @"".IsLiteral() (? bool)
func (? @"".Token) @"".IsOperator() (? bool)
func (? @"".Token) @"".Precedence() (? int)
func (? @"".Token) @"".String() (? string)
func (? *@"".Token) @"".IsKeyword() (? bool)
func (? *@"".Token) @"".IsLiteral() (? bool)
func (? *@"".Token) @"".IsOperator() (? bool)
func (? *@"".Token) @"".Precedence() (? int)
func (? *@"".Token) @"".String() (? string)
const @"".UnaryPrec = 0x6
const @"".VAR @"".Token = 0x55
const @"".XOR @"".Token = 0x13
const @"".XOR_ASSIGN @"".Token = 0x1e
type @"".lineInfo struct { @"".Offset int; @"".Filename string; @"".Line int }
type @"".serializedFile struct { @"".Name string; @"".Base int; @"".Size int; @"".Lines []int; @"".Infos []@"".lineInfo }
type @"".serializedFileSet struct { @"".Base int; @"".Files []@"".serializedFile }
type @"github.com/gopherjs/gopherjs/nosync".RWMutex struct { @"github.com/gopherjs/gopherjs/nosync".writeLocked bool; @"github.com/gopherjs/gopherjs/nosync".readLockCounter int }
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".Lock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".RLock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".RUnlock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".Unlock() ()
type @"testing".T struct { ? @"testing".common; @"testing".name string; @"testing".startParallel chan bool }
func (? *@"testing".T) @"testing".Parallel() ()
func (? *@"testing".T) @"testing".report() ()
import time "time"
type @"testing".common struct { @"testing".mu @"github.com/gopherjs/gopherjs/nosync".RWMutex; @"testing".output []byte; @"testing".failed bool; @"testing".skipped bool; @"testing".finished bool; @"testing".start @"time".Time; @"testing".duration @"time".Duration; @"testing".self interface {  }; @"testing".signal chan interface {  } }
func (? *@"testing".common) @"testing".Error(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Errorf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Fail() ()
func (? *@"testing".common) @"testing".FailNow() ()
func (? *@"testing".common) @"testing".Failed() (? bool)
func (? *@"testing".common) @"testing".Fatal(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Fatalf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Log(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Logf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Skip(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".SkipNow() ()
func (? *@"testing".common) @"testing".Skipf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Skipped() (? bool)
func (? *@"testing".common) @"testing".log(@"testing".s string) ()
func (? *@"testing".common) @"testing".private() ()
func (? *@"testing".common) @"testing".skip() ()
type @"time".Time struct { @"time".sec int64; @"time".nsec int32; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? @"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"time".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? @"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? @"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
func (? *@"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? *@"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"time".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? *@"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? *@"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
type @"time".Duration int64
func (? @"time".Duration) @"time".Hours() (? float64)
func (? @"time".Duration) @"time".Minutes() (? float64)
func (? @"time".Duration) @"time".Nanoseconds() (? int64)
func (? @"time".Duration) @"time".Seconds() (? float64)
func (? @"time".Duration) @"time".String() (? string)
func (? *@"time".Duration) @"time".Hours() (? float64)
func (? *@"time".Duration) @"time".Minutes() (? float64)
func (? *@"time".Duration) @"time".Nanoseconds() (? int64)
func (? *@"time".Duration) @"time".Seconds() (? float64)
func (? *@"time".Duration) @"time".String() (? string)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
CBB=$packages["fmt"];E    $r=B.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} D3D=$packages["github.com/gopherjs/gopherjs/nosync"];E    $r=D.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["sort"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} EE=$packages["strconv"];E    $r=E.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} AA=$packages["testing"];E    $r=A.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} G�3G=$pkg.Position=$newType(0,$kindStruct,"token.Position","Position","go/token",function(Filename_,Offset_,Line_,Column_){this.$val=this;this.Filename=Filename_!==undefined?Filename_:"";this.Offset=Offset_!==undefined?Offset_:0;this.Line=Line_!==undefined?Line_:0;this.Column=Column_!==undefined?Column_:0;});��G.methods=[{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)}];AC.methods=[{prop:"IsValid",name:"IsValid",pkg:"",typ:$funcType([],[$Bool],false)}];��G.init([{prop:"Filename",name:"Filename",pkg:"",typ:$String,tag:""},{prop:"Offset",name:"Offset",pkg:"",typ:$Int,tag:""},{prop:"Line",name:"Line",pkg:"",typ:$Int,tag:""},{prop:"Column",name:"Column",pkg:"",typ:$Int,tag:""}]);go/token.Positiongo/token.Positiongo/token:*go/token.Position HBH=$pkg.Pos=$newType(4,$kindInt,"token.Pos","Pos","go/token",null);SH.methods=[{prop:"IsValid",name:"IsValid",pkg:"",typ:$funcType([],[$Bool],false)}];go/token.Posgo/token.Pos I�mI=$pkg.File=$newType(0,$kindStruct,"token.File","File","go/token",function(set_,name_,base_,size_,lines_,infos_){this.$val=this;this.set=set_!==undefined?set_:AD.nil;this.name=name_!==undefined?name_:"";this.base=base_!==undefined?base_:0;this.size=size_!==undefined?size_:0;this.lines=lines_!==undefined?lines_:X.nil;this.infos=infos_!==undefined?infos_:AA.nil;});��Y.methods=[{prop:"Name",name:"Name",pkg:"",typ:$funcType([],[$String],false)},{prop:"Base",name:"Base",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"LineCount",name:"LineCount",pkg:"",typ:$funcType([],[$Int],false)},{prop:"AddLine",name:"AddLine",pkg:"",typ:$funcType([$Int],[],false)},{prop:"MergeLine",name:"MergeLine",pkg:"",typ:$funcType([$Int],[],false)},{prop:"SetLines",name:"SetLines",pkg:"",typ:$funcType([X],[$Bool],false)},{prop:"SetLinesForContent",name:"SetLinesForContent",pkg:"",typ:$funcType([AE],[],false)},{prop:"AddLineInfo",name:"AddLineInfo",pkg:"",typ:$funcType([$Int,$String,$Int],[],false)},{prop:"Pos",name:"Pos",pkg:"",typ:$funcType([$Int],[H],false)},{prop:"Offset",name:"Offset",pkg:"",typ:$funcType([H],[$Int],false)},{prop:"Line",name:"Line",pkg:"",typ:$funcType([H],[$Int],false)},{prop:"unpack",name:"unpack",pkg:"go/token",typ:$funcType([$Int,$Bool],[$String,$Int,$Int],false)},{prop:"position",name:"position",pkg:"go/token",typ:$funcType([H,$Bool],[G],false)},{prop:"PositionFor",name:"PositionFor",pkg:"",typ:$funcType([H,$Bool],[G],false)},{prop:"Position",name:"Position",pkg:"",typ:$funcType([H],[G],false)}];�^I.init([{prop:"set",name:"set",pkg:"go/token",typ:AD,tag:""},{prop:"name",name:"name",pkg:"go/token",typ:$String,tag:""},{prop:"base",name:"base",pkg:"go/token",typ:$Int,tag:""},{prop:"size",name:"size",pkg:"go/token",typ:$Int,tag:""},{prop:"lines",name:"lines",pkg:"go/token",typ:X,tag:""},{prop:"infos",name:"infos",pkg:"go/token",typ:AA,tag:""}]);go/token.File	go/token.Filego/token.FileSetgo/token.Posgo/token.Positiongo/token:*go/token.Filego/token:*go/token.FileSetgo/token:[]bytego/token:[]go/token.lineInfogo/token:[]int J�J=$pkg.lineInfo=$newType(0,$kindStruct,"token.lineInfo","lineInfo","go/token",function(Offset_,Filename_,Line_){this.$val=this;this.Offset=Offset_!==undefined?Offset_:0;this.Filename=Filename_!==undefined?Filename_:"";this.Line=Line_!==undefined?Line_:0;});��J.init([{prop:"Offset",name:"Offset",pkg:"",typ:$Int,tag:""},{prop:"Filename",name:"Filename",pkg:"",typ:$String,tag:""},{prop:"Line",name:"Line",pkg:"",typ:$Int,tag:""}]);go/token.lineInfogo/token.lineInfo L�1L=$pkg.FileSet=$newType(0,$kindStruct,"token.FileSet","FileSet","go/token",function(mutex_,base_,files_,last_){this.$val=this;this.mutex=mutex_!==undefined?mutex_:new D.RWMutex.ptr();this.base=base_!==undefined?base_:0;this.files=files_!==undefined?files_:Z.nil;this.last=last_!==undefined?last_:Y.nil;});��AD.methods=[{prop:"Base",name:"Base",pkg:"",typ:$funcType([],[$Int],false)},{prop:"AddFile",name:"AddFile",pkg:"",typ:$funcType([$String,$Int,$Int],[Y],false)},{prop:"Iterate",name:"Iterate",pkg:"",typ:$funcType([AF],[],false)},{prop:"file",name:"file",pkg:"go/token",typ:$funcType([H],[Y],false)},{prop:"File",name:"File",pkg:"",typ:$funcType([H],[Y],false)},{prop:"PositionFor",name:"PositionFor",pkg:"",typ:$funcType([H,$Bool],[G],false)},{prop:"Position",name:"Position",pkg:"",typ:$funcType([H],[G],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([AG],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([AG],[$error],false)}];��L.init([{prop:"mutex",name:"mutex",pkg:"go/token",typ:D.RWMutex,tag:""},{prop:"base",name:"base",pkg:"go/token",typ:$Int,tag:""},{prop:"files",name:"files",pkg:"go/token",typ:Z,tag:""},{prop:"last",name:"last",pkg:"go/token",typ:Y,tag:""}]);go/token.FileSet	+github.com/gopherjs/gopherjs/nosync.RWMutexgo/token.FileSetgo/token.Posgo/token.Positiongo/token:*go/token.Filego/token:*go/token.FileSetgo/token:[]*go/token.File"go/token:func(*go/token.File) bool go/token:func(interface{}) error P�`P=$pkg.serializedFile=$newType(0,$kindStruct,"token.serializedFile","serializedFile","go/token",function(Name_,Base_,Size_,Lines_,Infos_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.Base=Base_!==undefined?Base_:0;this.Size=Size_!==undefined?Size_:0;this.Lines=Lines_!==undefined?Lines_:X.nil;this.Infos=Infos_!==undefined?Infos_:AA.nil;});�P.init([{prop:"Name",name:"Name",pkg:"",typ:$String,tag:""},{prop:"Base",name:"Base",pkg:"",typ:$Int,tag:""},{prop:"Size",name:"Size",pkg:"",typ:$Int,tag:""},{prop:"Lines",name:"Lines",pkg:"",typ:X,tag:""},{prop:"Infos",name:"Infos",pkg:"",typ:AA,tag:""}]);go/token.serializedFilego/token.serializedFilego/token:[]go/token.lineInfogo/token:[]int Q��Q=$pkg.serializedFileSet=$newType(0,$kindStruct,"token.serializedFileSet","serializedFileSet","go/token",function(Base_,Files_){this.$val=this;this.Base=Base_!==undefined?Base_:0;this.Files=Files_!==undefined?Files_:AB.nil;});lQ.init([{prop:"Base",name:"Base",pkg:"",typ:$Int,tag:""},{prop:"Files",name:"Files",pkg:"",typ:AB,tag:""}]);go/token.serializedFileSetgo/token.serializedFileSet"go/token:[]go/token.serializedFile RHR=$pkg.Token=$newType(4,$kindInt,"token.Token","Token","go/token",null);��R.methods=[{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"Precedence",name:"Precedence",pkg:"",typ:$funcType([],[$Int],false)},{prop:"IsLiteral",name:"IsLiteral",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"IsOperator",name:"IsOperator",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"IsKeyword",name:"IsKeyword",pkg:"",typ:$funcType([],[$Bool],false)}];go/token.Tokengo/token.Token WW=$sliceType($emptyInterface);go/token:[]interface{} XX=$sliceType($Int);go/token:[]int YY=$ptrType(I);go/token:*go/token.Filego/token.File ZZ=$sliceType(Y);go/token:[]*go/token.Filego/token:*go/token.File AAAA=$sliceType(J);go/token:[]go/token.lineInfogo/token.lineInfo ABAB=$sliceType(P);"go/token:[]go/token.serializedFilego/token.serializedFile ACAC=$ptrType(G);go/token:*go/token.Positiongo/token.Position ADAD=$ptrType(L);go/token:*go/token.FileSetgo/token.FileSet AEAE=$sliceType($Uint8);go/token:[]byte AF AF=$funcType([Y],[$Bool],false);"go/token:func(*go/token.File) boolgo/token:*go/token.File AG/AG=$funcType([$emptyInterface],[$error],false); go/token:func(interface{}) error Sgo/token.tokens TT=false;go/token.keywordsgo/token.keywords �     S=$toNativeArray($kindString,["ILLEGAL","EOF","COMMENT","","IDENT","INT","FLOAT","IMAG","CHAR","STRING","","","+","-","*","/","%","&","|","^","<<",">>","&^","+=","-=","*=","/=","%=","&=","|=","^=","<<=",">>=","&^=","&&","||","<-","++","--","==","<",">","=","!","!=","<=",">=",":=","...","(","[","{",",",".",")","]","}",";",":","","","break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"]);go/token.tokensgo/token.tokens go/token.TestFileSetRaceFNF=$pkg.TestFileSetRace=function(a){var a;   [a.common.Skip(new W([]));    };go/token.TestFileSetRacego/token.TestFileSetRacego/token:[]interface{} (*go/token.Position).IsValid��G.ptr.prototype.IsValid=function(){var a;  Ea=this;  ereturn a.Line>0;    };G.prototype.IsValid=function(){return this.$val.IsValid();};go/token.Positiongo/token.Position (go/token.Position).String�sG.ptr.prototype.String=function(){var a,b;  �a=$clone(this,G);  �b=a.Filename;  �    if(a.IsValid()){  �    if(!(b==="")){  �  �b=b+(":");        }    b=b+(B.Sprintf("%d:%d",new W([new $Int(a.Line),new $Int(a.Column)])));        }  6    if(b===""){  Eb="-";    }  Qreturn b;    };G.prototype.String=function(){return this.$val.String();};go/token.Positionfmt.Sprintfgo/token.Positiongo/token:[]interface{} (go/token.Pos).IsValid��H.prototype.IsValid=function(){var a;  
�a=this.$val;  
�return!((a===0));    };$ptrType(H).prototype.IsValid=function(){return new H(this.$get()).IsValid();};go/token.Posgo/token.Pos (*go/token.File).Name��I.ptr.prototype.Name=function(){var a;  va=this;  �return a.name;    };I.prototype.Name=function(){return this.$val.Name();};go/token.Filego/token.File (*go/token.File).Base��I.ptr.prototype.Base=function(){var a;  �a=this;  return a.base;    };I.prototype.Base=function(){return this.$val.Base();};go/token.Filego/token.File (*go/token.File).Size��I.ptr.prototype.Size=function(){var a;  Za=this;  qreturn a.size;    };I.prototype.Size=function(){return this.$val.Size();};go/token.Filego/token.File (*go/token.File).LineCount��I.ptr.prototype.LineCount=function(){var a,b;  �a=this;  �a.set.mutex.RLock();  �b=a.lines.$length;   a.set.mutex.RUnlock();  return b;    };I.prototype.LineCount=function(){return this.$val.LineCount();};go/token.Filego/token.File (*go/token.File).AddLine��I.ptr.prototype.AddLine=function(a){var a,b,c,d,e;  �b=this;  b.set.mutex.Lock();  !  $c=b.lines.$length;    if(((c===0)||(d=b.lines,e=c-1>>0,((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]))<a)&&a<b.size){  pb.lines=$append(b.lines,a);    }  �b.set.mutex.Unlock();    };I.prototype.AddLine=function(a){return this.$val.AddLine(a);};go/token.Filego/token.File (*go/token.File).MergeLine��I.ptr.prototype.MergeLine=function(a){var $deferred=[],$err=null,a,b;try{$deferFrames.push($deferred);  �b=this;  �    if(a<=0){  $panic(new $String("illegal line number (line numbering starts at 1)"));    }  Ib.set.mutex.Lock();  ]$deferred.push([$methodVal(b.set.mutex,"Unlock"),[]]);  y    if(a>=b.lines.$length){  �$panic(new $String("illegal line number"));    }  �$copySlice($subslice(b.lines,a),$subslice(b.lines,(a+1>>0)));  #b.lines=$subslice(b.lines,0,(b.lines.$length-1>>0));    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};I.prototype.MergeLine=function(a){return this.$val.MergeLine(a);};go/token.Filego/token.File (*go/token.File).SetLines�I.ptr.prototype.SetLines=function(a){var a,b,c,d,e,f,g,h;  �b=this;  Ec=b.size;  Ud=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  v    if(f>0&&g<=(h=f-1>>0,((h<0||h>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+h]))||c<=g){  �return false;    }    e++;}  �b.set.mutex.Lock();  �b.lines=a;  �b.set.mutex.Unlock();  return true;    };I.prototype.SetLines=function(a){return this.$val.SetLines(a);};go/token.Filego/token.File #(*go/token.File).SetLinesForContent��I.ptr.prototype.SetLinesForContent=function(a){var a,b,c,d,e,f,g,h;  �b=this;  �  �c=X.nil;  �d=0;  �e=a;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);      if(d>=0){  !c=$append(c,d);    }  Cd=-1;  O    if(h===10){  ad=g+1>>0;    }    f++;}  �b.set.mutex.Lock();  �b.lines=c;  �b.set.mutex.Unlock();    };I.prototype.SetLinesForContent=function(a){return this.$val.SetLinesForContent(a);};go/token.Filego/token.Filego/token:[]int (*go/token.File).AddLineInfo��I.ptr.prototype.AddLineInfo=function(a,b,c){var a,b,c,d,e,f,g;  ~d=this;  �d.set.mutex.Lock();  �  �e=d.infos.$length;    if((e===0)||(f=d.infos,g=e-1>>0,((g<0||g>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+g])).Offset<a&&a<d.size){  %d.infos=$append(d.infos,new J.ptr(a,b,c));    }  ed.set.mutex.Unlock();    };I.prototype.AddLineInfo=function(a,b,c){return this.$val.AddLineInfo(a,b,c);};go/token.Filego/token.Filego/token.lineInfo (*go/token.File).Pos��I.ptr.prototype.Pos=function(a){var a,b;  �b=this;      if(a>b.size){  4$panic(new $String("illegal file offset"));    }  Ureturn((b.base+a>>0)>>0);    };I.prototype.Pos=function(a){return this.$val.Pos(a);};go/token.Filego/token.File (*go/token.File).Offset�I.ptr.prototype.Offset=function(a){var a,b;  b=this;  *    if((a>>0)<b.base||(a>>0)>(b.base+b.size>>0)){  [$panic(new $String("illegal Pos value"));    }  zreturn(a>>0)-b.base>>0;    };I.prototype.Offset=function(a){return this.$val.Offset(a);};go/token.Filego/token.File (*go/token.File).Line��I.ptr.prototype.Line=function(a){var a,b;  b=this;  (return b.Position(a).Line;    };I.prototype.Line=function(a){return this.$val.Line(a);};go/token.Filego/token.File go/token.searchLineInfosK��K=function(a,b){var a,b;  vreturn C.Search(a.$length,(function(c){var c;  �return((c<0||c>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+c]).Offset>b;    }))-1>>0;    };go/token.searchLineInfosgo/token.searchLineInfossort.Search (*go/token.File).unpack��I.ptr.prototype.unpack=function(a,b){var a,b,c="",d=0,e=0,f,g,h,i,j,k,l,m,n;   �f=this;  !c=f.name;  !  !g=O(f.lines,a);    if(g>=0){  !Kh=g+1>>0;i=(a-(j=f.lines,((g<0||g>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+g]))>>0)+1>>0;d=h;e=i;    }  !w    if(b&&f.infos.$length>0){  !�  !�k=K(f.infos,a);    if(k>=0){  !�m=(l=f.infos,((k<0||k>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+k]));  "c=m.Filename;  "-  "0n=O(f.lines,m.Offset);    if(n>=0){  "c  "cd=d+(((m.Line-n>>0)-1>>0))>>0;        }    }    }  "�return[c,d,e];    };I.prototype.unpack=function(a,b){return this.$val.unpack(a,b);};go/token.Filego/token.unpack~go/token.Filego/token.searchIntsgo/token.searchLineInfos (*go/token.File).position�I.ptr.prototype.position=function(a,b){var a,b,c=new G.ptr(),d,e,f;  "�d=this;  "�e=(a>>0)-d.base>>0;  "�c.Offset=e;  #f=d.unpack(e,b);c.Filename=f[0];c.Line=f[1];c.Column=f[2];  #Dreturn c;    };I.prototype.position=function(a,b){return this.$val.position(a,b);};go/token.Filego/token.position~go/token.Filego/token.Positiongo/token.unpack~ (*go/token.File).PositionFor�WI.ptr.prototype.PositionFor=function(a,b){var a,b,c=new G.ptr(),d;  $Kd=this;  $�    if(!((a===0))){  $�    if((a>>0)<d.base||(a>>0)>(d.base+d.size>>0)){  $�$panic(new $String("illegal Pos value"));    }  $�$copy(c,d.position(a,b),G);    }  %return c;    };I.prototype.PositionFor=function(a,b){return this.$val.PositionFor(a,b);};go/token.Filego/token.Filego/token.Positiongo/token.position~ (*go/token.File).Position��I.ptr.prototype.Position=function(a){var a,b=new G.ptr(),c;  %�c=this;  %�    $copy(b,c.PositionFor(a,true),G);return b;    };I.prototype.Position=function(a){return this.$val.Position(a);};go/token.Filego/token.Filego/token.Position go/token.NewFileSetM]M=$pkg.NewFileSet=function(){  ("return new L.ptr(new D.RWMutex.ptr(),1,Z.nil,Y.nil);    };go/token.NewFileSet+github.com/gopherjs/gopherjs/nosync.RWMutexgo/token.Filego/token.FileSetgo/token.NewFileSetgo/token:*go/token.Filego/token:[]*go/token.File (*go/token.FileSet).Base��L.ptr.prototype.Base=function(){var a,b;  (�a=this;  (�a.mutex.RLock();  (�b=a.base;  (�a.mutex.RUnlock();  )return b;    };L.prototype.Base=function(){return this.$val.Base();};go/token.FileSetgo/token.FileSet (*go/token.FileSet).AddFile��L.ptr.prototype.AddFile=function(a,b,c){var $deferred=[],$err=null,a,b,c,d,e;try{$deferFrames.push($deferred);  ,Cd=this;  ,�d.mutex.Lock();  ,�$deferred.push([$methodVal(d.mutex,"Unlock"),[]]);  ,�    if(b<0){  ,�b=d.base;    }  ,�    if(b<d.base||c<0){  ,�$panic(new $String("illegal base or size"));    }  -.e=new I.ptr(d,a,b,c,new X([0]),AA.nil);  -b  -bb=b+((c+1>>0))>>0;      -�    if(b<0){  -�$panic(new $String("token.Pos offset overflow (> 2G of source code in file set)"));    }  .d.base=b;  .#d.files=$append(d.files,e);  .Ad.last=e;  .Mreturn e;    }catch(err){$err=err;return Y.nil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};L.prototype.AddFile=function(a,b,c){return this.$val.AddFile(a,b,c);};go/token.FileSetgo/token.Filego/token.FileSetgo/token.lineInfogo/token:*go/token.Filego/token:[]go/token.lineInfogo/token:[]int (*go/token.FileSet).Iterate��L.ptr.prototype.Iterate=function(a){var a,b,c,d,e;  .�b=this;  .�  .�c=0;while(true){  /  /d=Y.nil;  /b.mutex.RLock();  /.    if(c<b.files.$length){  /Gd=(e=b.files,((c<0||c>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+c]));    }  /_b.mutex.RUnlock();  /s    if(d===Y.nil||!a(d)){  /�break;    }      /  /c=c+(1)>>0;    }    };L.prototype.Iterate=function(a){return this.$val.Iterate(a);};go/token.FileSetgo/token.FileSetgo/token:*go/token.File go/token.searchFilesN��N=function(a,b){var a,b;  /�return C.Search(a.$length,(function(c){var c;  /�return((c<0||c>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+c]).base>b;    }))-1>>0;    };go/token.searchFilesgo/token.searchFilessort.Search (*go/token.FileSet).file�`L.ptr.prototype.file=function(a){var a,b,c,d,e,f;  0 b=this;  0Ab.mutex.RLock();  0u  0xc=b.last;    if(!(c===Y.nil)&&c.base<=(a>>0)&&(a>>0)<=(c.base+c.size>>0)){  0�b.mutex.RUnlock();  0�return c;    }  1  1d=N(b.files,(a>>0));    if(d>=0){  1@f=(e=b.files,((d<0||d>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+d]));  1�    if((a>>0)<=(f.base+f.size>>0)){  1�b.mutex.RUnlock();  1�b.mutex.Lock();  1�b.last=f;  2b.mutex.Unlock();  2return f;    }    }  2&b.mutex.RUnlock();  29return Y.nil;    };L.prototype.file=function(a){return this.$val.file(a);};go/token.FileSetgo/token.file~go/token.FileSetgo/token.searchFilesgo/token:*go/token.File (*go/token.FileSet).File��L.ptr.prototype.File=function(a){var a,b=Y.nil,c;  2�c=this;  2�    if(!((a===0))){  3b=c.file(a);    }  3!return b;    };L.prototype.File=function(a){return this.$val.File(a);};go/token.FileSetgo/token.FileSetgo/token.file~go/token:*go/token.File (*go/token.FileSet).PositionFor� L.ptr.prototype.PositionFor=function(a,b){var a,b,c=new G.ptr(),d,e;  4%d=this;  4e    if(!((a===0))){  4w  4ze=d.file(a);    if(!(e===Y.nil)){  4�$copy(c,e.position(a,b),G);    }    }  4�return c;    };L.prototype.PositionFor=function(a,b){return this.$val.PositionFor(a,b);};go/token.FileSetgo/token.FileSetgo/token.Positiongo/token.file~go/token.position~go/token:*go/token.File (*go/token.FileSet).Position��L.ptr.prototype.Position=function(a){var a,b=new G.ptr(),c;  5^c=this;  5�    $copy(b,c.PositionFor(a,true),G);return b;    };L.prototype.Position=function(a){return this.$val.Position(a);};go/token.FileSetgo/token.FileSetgo/token.Position go/token.searchIntsO�|O=function(a,b){var a,b,c,d,e,f,g,h;  8c=0;d=a.$length;e=c;f=d;  8while(true){if(!(e<f)){break;}  8'h=e+(g=((f-e>>0))/2,(g===g&&g!==1/0&&g!==-1/0)?g>>0:$throwRuntimeError("integer divide by zero"))>>0;  8n    if(((h<0||h>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+h])<=b){  8�e=h+1>>0;    }else{  8�f=h;    }    }  8�return e-1>>0;    };go/token.searchIntsgo/token.searchInts (*go/token.FileSet).Read��L.ptr.prototype.Read=function(a){var a,b,c,d,e,f,g,h;  :�b=this;  :�  :�c=$clone(new Q.ptr(),Q);  :�  :�d=a(c);    if(!($interfaceIsEqual(d,$ifaceNil))){  ; return d;    }  ;0b.mutex.Lock();  ;@b.base=c.Base;  ;Re=$makeSlice(Z,c.Files.$length);  ;y  ;}f=0;while(true){if(!(f<c.Files.$length)){break;}  ;�h=(g=c.Files,((f<0||f>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+f]));  ;�((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]=new I.ptr(b,h.Name,h.Base,h.Size,h.Lines,h.Infos));      ;�  ;�f=f+(1)>>0;    }  ;�b.files=e;  <b.last=Y.nil;  <b.mutex.Unlock();  <(return $ifaceNil;    };L.prototype.Read=function(a){return this.$val.Read(a);};go/token.FileSetgo/token.Filego/token.FileSetgo/token.serializedFileSetgo/token:*go/token.Filego/token:[]*go/token.File (*go/token.FileSet).Write�qL.ptr.prototype.Write=function(a){var a,b,c,d,e,f,g,h;  <ob=this;  <�  <�c=$clone(new Q.ptr(),Q);  <�b.mutex.Lock();  <�c.Base=b.base;  <�d=$makeSlice(AB,b.files.$length);  =e=b.files;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  =4$copy(((g<0||g>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+g]),new P.ptr(h.name,h.base,h.size,h.lines,h.infos),P);    f++;}  =|c.Files=d;  =�b.mutex.Unlock();  =�return a(new c.constructor.elem(c));    };L.prototype.Write=function(a){return this.$val.Write(a);};go/token.FileSetgo/token.FileSetgo/token.serializedFilego/token.serializedFileSet"go/token:[]go/token.serializedFile (go/token.Token).String�JR.prototype.String=function(){var a,b;  K�a=this.$val;  K�b="";  K�    if(0<=a&&a<86){  K�b=((a<0||a>=S.length)?$throwRuntimeError("index out of range"):S[a]);    }  L    if(b===""){  L b="token("+E.Itoa((a>>0))+")";    }  LPreturn b;    };$ptrType(R).prototype.String=function(){return new R(this.$get()).String();};go/token.Tokengo/token.Tokengo/token.tokensstrconv.Itoa (go/token.Token).Precedence��R.prototype.Precedence=function(){var a,b;  Nxa=this.$val;  N�b=a;  N�if(b===35){  N�return 1;      N�}else if(b===34){  N�return 2;      N�}else if(b===39||b===44||b===40||b===45||b===41||b===46){  N�return 3;      N�}else if(b===12||b===13||b===18||b===19){  Oreturn 4;      O#}else if(b===14||b===15||b===16||b===20||b===21||b===17||b===22){  OQreturn 5;    }  O^return 0;    };$ptrType(R).prototype.Precedence=function(){return new R(this.$get()).Precedence();};go/token.Tokengo/token.Token go/token.initU�U=function(){var a,b;  O�T=new $Map();  O�  O�a=61;while(true){if(!(a<86)){break;}  O�b=((a<0||a>=S.length)?$throwRuntimeError("index out of range"):S[a]);(T||$throwRuntimeError("assignment to entry in nil map"))[b]={k:b,v:a};      O�  O�a=a+(1)>>0;    }    };	    U();go/token.initgo/token.keywordsgo/token.tokens go/token.LookupV��V=$pkg.Lookup=function(a){var a,b,c,d,e;  P�  P�b=(c=T[a],c!==undefined?[c.v,true]:[0,false]);d=b[0];e=b[1];    if(e){  P�return d;    }  P�return 4;    };go/token.Lookupgo/token.Lookupgo/token.keywords (go/token.Token).IsLiteral��R.prototype.IsLiteral=function(){var a;  Qqa=this.$val;  Q�return 3<a&&a<10;    };$ptrType(R).prototype.IsLiteral=function(){return new R(this.$get()).IsLiteral();};go/token.Tokengo/token.Token (go/token.Token).IsOperator��R.prototype.IsOperator=function(){var a;  R9a=this.$val;  RXreturn 11<a&&a<59;    };$ptrType(R).prototype.IsOperator=function(){return new R(this.$get()).IsOperator();};go/token.Tokengo/token.Token (go/token.Token).IsKeyword��R.prototype.IsKeyword=function(){var a;  R�a=this.$val;  Sreturn 60<a&&a<86;    };$ptrType(R).prototype.IsKeyword=function(){return new R(this.$get()).IsKeyword();};go/token.Tokengo/token.Token ��{"Base":21314,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/compiler/natives/go/token/token_test.go","Base":1,"Size":101,"Lines":[0,13,14,28,29,38,49,51,52,89,99],"Infos":null},{"Name":"/usr/local/go/src/go/token/position.go","Base":103,"Size":14414,"Lines":[0,55,109,159,160,174,175,184,191,199,207,209,210,291,304,305,356,406,456,459,482,519,561,608,675,677,678,728,788,789,841,844,897,953,1008,1066,1069,1107,1126,1146,1161,1173,1177,1227,1230,1244,1254,1257,1267,1269,1270,1339,1410,1437,1440,1518,1596,1608,1611,1678,1747,1816,1885,1926,1929,2005,2077,2151,2227,2287,2290,2303,2304,2378,2449,2519,2564,2567,2587,2588,2638,2668,2687,2689,2690,2771,2779,2780,2837,2888,2891,2910,2925,2974,3042,3091,3092,3139,3248,3266,3268,3269,3337,3368,3383,3385,3386,3456,3484,3499,3501,3502,3565,3593,3608,3610,3611,3663,3696,3717,3736,3759,3769,3771,3772,3820,3892,3965,3968,4005,4025,4103,4139,4142,4164,4166,4167,4243,4323,4401,4458,4461,4498,4514,4574,4577,4597,4625,4652,4683,4686,4757,4824,4892,4965,5011,5051,5087,5089,5090,5167,5240,5311,5360,5433,5505,5515,5518,5562,5597,5613,5645,5700,5716,5720,5723,5724,5744,5764,5781,5803,5816,5818,5819,5891,5940,5992,6009,6020,6054,6071,6102,6106,6118,6135,6156,6160,6163,6164,6184,6204,6221,6243,6245,6246,6310,6373,6407,6430,6485,6499,6516,6530,6532,6533,6602,6672,6739,6791,6794,6860,6926,6929,6997,7017,7100,7162,7165,7187,7189,7190,7246,7281,7309,7312,7349,7371,7402,7405,7434,7436,7437,7497,7542,7580,7583,7618,7666,7695,7698,7722,7724,7725,7788,7836,7839,7872,7899,7901,7902,7950,8027,8029,8030,8107,8183,8262,8265,8352,8371,8418,8460,8463,8498,8541,8594,8616,8643,8696,8725,8730,8734,8737,8745,8747,8748,8811,8838,8859,8924,8932,8934,8935,9008,9081,9139,9179,9182,9248,9265,9314,9344,9348,9380,9383,9391,9393,9394,9464,9538,9541,9589,9620,9622,9623,9704,9715,9716,9763,9825,9858,9861,9883,9928,9981,10048,10100,10102,10103,10141,10170,10188,10213,10216,10218,10219,10284,10322,10325,10356,10373,10386,10405,10415,10416,10418,10419,10496,10572,10648,10729,10791,10794,10869,10944,11006,11009,11033,11036,11115,11189,11219,11222,11289,11305,11329,11344,11360,11363,11395,11427,11430,11462,11514,11570,11585,11656,11659,11692,11707,11737,11749,11759,11761,11762,11840,11866,11869,11917,11938,11955,11973,11997,12018,12022,12042,12073,12082,12086,12089,12091,12092,12133,12208,12210,12211,12249,12266,12301,12376,12396,12407,12410,12455,12503,12521,12572,12603,12624,12642,12695,12715,12727,12731,12734,12753,12765,12767,12768,12823,12882,12904,12907,12949,12966,12982,12985,12993,12995,12996,13066,13139,13197,13237,13240,13309,13326,13358,13391,13395,13398,13406,13408,13409,13476,13550,13553,13604,13635,13637,13638,13719,13739,13740,13778,13835,13839,13914,13918,13988,14054,14121,14180,14238,14257,14270,14324,14341,14358,14371,14382,14391,14395,14398,14412],"Infos":null},{"Name":"/usr/local/go/src/go/token/serialize.go","Base":14518,"Size":1279,"Lines":[0,55,109,159,160,174,175,204,276,290,301,312,325,343,345,346,378,389,413,415,416,490,553,579,616,629,632,633,649,667,706,744,764,828,831,848,862,880,881,893,895,896,947,1011,1037,1038,1054,1072,1119,1148,1218,1221,1239,1257,1258,1277],"Infos":null},{"Name":"/usr/local/go/src/go/token/token.go","Base":15798,"Size":5515,"Lines":[0,55,109,159,160,237,316,319,333,334,351,352,422,437,438,461,469,488,510,515,524,525,538,578,627,643,660,678,697,712,729,742,743,757,786,796,806,816,826,836,837,851,865,879,894,909,924,925,943,961,979,997,1015,1016,1038,1060,1082,1105,1128,1151,1152,1165,1178,1191,1204,1217,1218,1232,1245,1258,1271,1284,1285,1301,1317,1333,1349,1366,1367,1380,1393,1406,1419,1432,1433,1449,1465,1481,1497,1513,1527,1528,1541,1554,1561,1567,1573,1580,1590,1591,1600,1607,1613,1626,1631,1632,1638,1642,1648,1652,1660,1661,1672,1677,1686,1693,1701,1702,1710,1718,1726,1732,1737,1750,1752,1753,1779,1800,1801,1818,1839,1840,1858,1874,1892,1909,1926,1945,1946,1957,1968,1979,1990,2001,2002,2017,2032,2047,2063,2079,2095,2096,2115,2134,2153,2172,2191,2192,2215,2238,2261,2285,2309,2333,2334,2348,2362,2376,2390,2404,2405,2420,2434,2448,2462,2476,2477,2494,2511,2528,2545,2563,2564,2578,2592,2606,2620,2634,2635,2652,2669,2686,2703,2720,2721,2741,2760,2779,2799,2822,2823,2848,2871,2893,2922,2943,2944,2961,2976,2993,3008,3027,3028,3053,3072,3095,3116,3138,3139,3158,3177,3196,3213,3229,3231,3232,3293,3361,3429,3495,3563,3566,3601,3610,3653,3671,3674,3688,3734,3737,3747,3749,3750,3813,3876,3941,4002,4056,4059,4067,4101,4118,4135,4137,4138,4198,4257,4281,4284,4319,4332,4343,4354,4366,4377,4413,4424,4449,4460,4505,4516,4519,4538,4540,4541,4571,4572,4586,4621,4671,4697,4700,4702,4703,4782,4785,4819,4872,4885,4888,4902,4904,4905,4919,4920,4986,5042,5045,5129,5130,5199,5242,5245,5332,5333,5397,5428,5431],"Infos":null}]}
 