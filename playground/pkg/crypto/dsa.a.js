p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �g���
crypto/dsadsaerrorsiomath/big�C�package dsa
import errors "errors"
import io "io"
import big "math/big"
var @"".ErrInvalidPublicKey error
func @"".GenerateKey(@"".priv *@"".PrivateKey, @"".rand @"io".Reader) (? error)
func @"".GenerateParameters(@"".params *@"".Parameters, @"".rand @"io".Reader, @"".sizes @"".ParameterSizes) (@"".err error)
const @"".L1024N160 @"".ParameterSizes = 0x0
const @"".L2048N224 @"".ParameterSizes = 0x1
const @"".L2048N256 @"".ParameterSizes = 0x2
const @"".L3072N256 @"".ParameterSizes = 0x3
type @"".ParameterSizes int
type @"".Parameters struct { @"".P *@"math/big".Int; @"".Q *@"math/big".Int; @"".G *@"math/big".Int }
type @"".PrivateKey struct { ? @"".PublicKey; @"".X *@"math/big".Int }
type @"".PublicKey struct { ? @"".Parameters; @"".Y *@"math/big".Int }
func @"".Sign(@"".rand @"io".Reader, @"".priv *@"".PrivateKey, @"".hash []byte) (@"".r *@"math/big".Int, @"".s *@"math/big".Int, @"".err error)
func @"".Verify(@"".pub *@"".PublicKey, @"".hash []byte, @"".r *@"math/big".Int, @"".s *@"math/big".Int) (? bool)
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"math/big".n int64, @"math/big".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"math/big".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"math/big".y *@"math/big".Int) (@"math/big".r int)
func (? *@"math/big".Int) @"math/big".Div(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int)
import fmt "fmt"
func (? *@"math/big".Int) @"math/big".Format(@"math/big".s @"fmt".State, @"math/big".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"math/big".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"math/big".text []byte, @"math/big".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"math/big".g *@"math/big".Int, @"math/big".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"math/big".a int64, @"math/big".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"math/big".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"math/big".rnd *@"math/rand".Rand, @"math/big".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"math/big".s @"fmt".ScanState, @"math/big".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"math/big".x *@"math/big".Int, @"math/big".i int, @"math/big".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"math/big".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"math/big".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"math/big".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"math/big".s string, @"math/big".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"math/big".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? *@"math/big".Int, ? int, ? error)
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"fmt".c int) (? bool); @"fmt".Precision() (@"fmt".prec int, @"fmt".ok bool); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool); @"fmt".Write(@"fmt".b []byte) (@"fmt".ret int, @"fmt".err error) }
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"math/rand".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"math/rand".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"math/rand".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"math/rand".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"math/rand".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"fmt".ScanState interface { @"fmt".Read(@"fmt".buf []byte) (@"fmt".n int, @"fmt".err error); @"fmt".ReadRune() (@"fmt".r rune, @"fmt".size int, @"fmt".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"fmt".skipSpace bool, @"fmt".f func (? rune) (? bool)) (@"fmt".token []byte, @"fmt".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"io".r rune, @"io".size int, @"io".err error); @"io".UnreadRune() (? error) }
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
$$
AA=$packages["errors"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["io"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["math/big"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} D��D=$pkg.Parameters=$newType(0,$kindStruct,"dsa.Parameters","Parameters","crypto/dsa",function(P_,Q_,G_){this.$val=this;this.P=P_!==undefined?P_:N.nil;this.Q=Q_!==undefined?Q_:N.nil;this.G=G_!==undefined?G_:N.nil;});��D.init([{prop:"P",name:"P",pkg:"",typ:N,tag:""},{prop:"Q",name:"Q",pkg:"",typ:N,tag:""},{prop:"G",name:"G",pkg:"",typ:N,tag:""}]);crypto/dsa.Parameterscrypto/dsa.Parameterscrypto/dsa:*math/big.Int E��E=$pkg.PublicKey=$newType(0,$kindStruct,"dsa.PublicKey","PublicKey","crypto/dsa",function(Parameters_,Y_){this.$val=this;this.Parameters=Parameters_!==undefined?Parameters_:new D.ptr();this.Y=Y_!==undefined?Y_:N.nil;});bE.init([{prop:"Parameters",name:"",pkg:"",typ:D,tag:""},{prop:"Y",name:"Y",pkg:"",typ:N,tag:""}]);crypto/dsa.PublicKeycrypto/dsa.Parameterscrypto/dsa.PublicKeycrypto/dsa:*math/big.Int F��F=$pkg.PrivateKey=$newType(0,$kindStruct,"dsa.PrivateKey","PrivateKey","crypto/dsa",function(PublicKey_,X_){this.$val=this;this.PublicKey=PublicKey_!==undefined?PublicKey_:new E.ptr();this.X=X_!==undefined?X_:N.nil;});aF.init([{prop:"PublicKey",name:"",pkg:"",typ:E,tag:""},{prop:"X",name:"X",pkg:"",typ:N,tag:""}]);crypto/dsa.PrivateKeycrypto/dsa.PrivateKeycrypto/dsa.PublicKeycrypto/dsa:*math/big.Int GcG=$pkg.ParameterSizes=$newType(4,$kindInt,"dsa.ParameterSizes","ParameterSizes","crypto/dsa",null);crypto/dsa.ParameterSizescrypto/dsa.ParameterSizes MM=$sliceType($Uint8);crypto/dsa:[]byte NN=$ptrType(C.Int);crypto/dsa:*math/big.Intmath/big.Int crypto/dsa.ErrInvalidPublicKey F    $pkg.ErrInvalidPublicKey=A.New("crypto/dsa: invalid public key");crypto/dsa.ErrInvalidPublicKey
errors.New crypto/dsa.GenerateParametersH�	�H=$pkg.GenerateParameters=function(a,b,c){var a,b,c,d=$ifaceNil,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  }  �e=0;f=0;g=e;h=f;  �i=c;  �if(i===0){  �g=1024;  �h=160;      �}else if(i===1){  �g=2048;  �h=224;      �}else if(i===2){  �g=2048;  h=256;      }else if(i===3){  g=3072;  *h=256;    }else{  >    d=A.New("crypto/dsa: invalid ParameterSizes");return d;    }  {k=$makeSlice(M,(j=h/8,(j===j&&j!==1/0&&j!==-1/0)?j>>0:$throwRuntimeError("integer divide by zero")));  �m=$makeSlice(M,(l=g/8,(l===l&&l!==1/0&&l!==-1/0)?l>>0:$throwRuntimeError("integer divide by zero")));  �n=new C.Int.ptr();  �o=new C.Int.ptr();  �p=new C.Int.ptr();  �q=new C.Int.ptr();  	q.SetInt64(new $Int64(0,1));  	  	(GeneratePrimes:while(true){  	0r=B.ReadFull(b,k);d=r[1];  	U    if(!($interfaceIsEqual(d,$ifaceNil))){  	hreturn d;    }  	v    s=k.$length-1>>0;  	v((s<0||s>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+s]=(((s<0||s>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+s])|(1))>>>0);      	�  	�(0>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+0]=((0>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+0])|(128))>>>0);      	�n.SetBytes(k);  	�    if(!n.ProbablyPrime(64)){  	�continue;    }  	�  	�t=0;while(true){if(!(t<(4*g>>0))){break;}  
u=B.ReadFull(b,m);d=u[1];  
6    if(!($interfaceIsEqual(d,$ifaceNil))){  
Jreturn d;    }  
Z    v=m.$length-1>>0;  
Z((v<0||v>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+v]=(((v<0||v>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+v])|(1))>>>0);      
x  
x(0>=m.$length?$throwRuntimeError("index out of range"):m.$array[m.$offset+0]=((0>=m.$length?$throwRuntimeError("index out of range"):m.$array[m.$offset+0])|(128))>>>0);      
�o.SetBytes(m);  
�p.Mod(o,n);  
�p.Sub(p,q);  
�o.Sub(o,p);  
�    if(o.BitLen()<g){  
�  
  
t=t+(1)>>0;    continue;    }      if(!o.ProbablyPrime(64)){  +  
  
t=t+(1)>>0;    continue;    }  =a.P=o;  Ma.Q=n;  ]break GeneratePrimes;    }    }  {w=new C.Int.ptr();  �w.SetInt64(new $Int64(0,2));  �x=new C.Int.ptr();  �y=new C.Int.ptr().Sub(o,q);  �z=new C.Int.ptr().Div(y,n);  �while(true){  �x.Exp(w,z,o);      if(x.Cmp(q)===0){  #w.Add(w,q);  4continue;    }  Da.G=x;  Sreturn d;    }    };crypto/dsa.GenerateParameterscrypto/dsa.GenerateParameterscrypto/dsa:[]byte
errors.Newio.ReadFullmath/big.Int crypto/dsa.GenerateKeyI�I=$pkg.GenerateKey=function(a,b){var a,b,c,d,e,f,g;  $    if(a.PublicKey.Parameters.P===N.nil||a.PublicKey.Parameters.Q===N.nil||a.PublicKey.Parameters.G===N.nil){  [return A.New("crypto/dsa: parameters not set up before generating key");    }  �c=new C.Int.ptr();  �e=$makeSlice(M,(d=a.PublicKey.Parameters.Q.BitLen()/8,(d===d&&d!==1/0&&d!==-1/0)?d>>0:$throwRuntimeError("integer divide by zero")));  �while(true){  �f=B.ReadFull(b,e);g=f[1];      if(!($interfaceIsEqual(g,$ifaceNil))){  -return g;    }  >c.SetBytes(e);  S    if(!((c.Sign()===0))&&c.Cmp(a.PublicKey.Parameters.Q)<0){  ~break;    }    }  �a.X=c;  �a.PublicKey.Y=new C.Int.ptr();  �a.PublicKey.Y.Exp(a.PublicKey.Parameters.G,c,a.PublicKey.Parameters.P);  �return $ifaceNil;    };crypto/dsa.GenerateKeycrypto/dsa.GenerateKeycrypto/dsa:*math/big.Intcrypto/dsa:[]byte
errors.Newio.ReadFullmath/big.Int crypto/dsa.fermatInverseJ��J=function(a,b){var a,b,c,d;  c=C.NewInt(new $Int64(0,2));  )d=new C.Int.ptr().Sub(b,c);  Nreturn new C.Int.ptr().Exp(a,d,b);    };crypto/dsa.fermatInversecrypto/dsa.fermatInversemath/big.Intmath/big.NewInt crypto/dsa.SignK��K=$pkg.Sign=function(a,b,c){var a,b,c,d=N.nil,e=N.nil,f=$ifaceNil,g,h,i,j,k,l;  �g=b.PublicKey.Parameters.Q.BitLen();  �    if(!(((g&7)===0))){  �f=$pkg.ErrInvalidPublicKey;  �return[d,e,f];    }  �  �g=(g>>$min((3),31))>>0;      �while(true){  �h=new C.Int.ptr();  	i=$makeSlice(M,g);  "while(true){  +j=B.ReadFull(a,i);f=j[1];  N    if(!($interfaceIsEqual(f,$ifaceNil))){  breturn[d,e,f];    }  qh.SetBytes(i);  �    if(h.Sign()>0&&h.Cmp(b.PublicKey.Parameters.Q)<0){  �break;    }    }  �k=J(h,b.PublicKey.Parameters.Q);  �d=new C.Int.ptr().Exp(b.PublicKey.Parameters.G,h,b.PublicKey.Parameters.P);  d.Mod(d,b.PublicKey.Parameters.Q);  #    if(d.Sign()===0){  9continue;    }  Il=h.SetBytes(c);  be=new C.Int.ptr().Mul(b.X,d);  �e.Add(e,l);  �e.Mod(e,b.PublicKey.Parameters.Q);  �e.Mul(e,k);  �e.Mod(e,b.PublicKey.Parameters.Q);  �    if(!((e.Sign()===0))){  �break;    }    }  �return[d,e,f];    };crypto/dsa.Signcrypto/dsa.ErrInvalidPublicKeycrypto/dsa.Signcrypto/dsa.fermatInversecrypto/dsa:*math/big.Intcrypto/dsa:[]byteio.ReadFullmath/big.Int crypto/dsa.VerifyL��L=$pkg.Verify=function(a,b,c,d){var a,b,c,d,e,f,g,h,i,j;  �    if(c.Sign()<1||c.Cmp(a.Parameters.Q)>=0){  �return false;    }  �    if(d.Sign()<1||d.Cmp(a.Parameters.Q)>=0){  �return false;    }  �e=new C.Int.ptr().ModInverse(d,a.Parameters.Q);  "f=a.Parameters.Q.BitLen();  7    if(!(((f&7)===0))){  Greturn false;    }  Xg=new C.Int.ptr().SetBytes(b);  {h=new C.Int.ptr().Mul(g,e);  �h.Mod(h,a.Parameters.Q);  �i=e.Mul(c,e);  �i.Mod(i,a.Parameters.Q);  �j=h.Exp(a.Parameters.G,h,a.Parameters.P);  �i.Exp(a.Y,i,a.Parameters.P);  j.Mul(j,i);  j.Mod(j,a.Parameters.P);  *j.Mod(j,a.Parameters.Q);  <return j.Cmp(c)===0;    };crypto/dsa.Verifycrypto/dsa.Verifymath/big.Int ��{"Base":6228,"Files":[{"Name":"/usr/local/go/src/crypto/dsa/dsa.go","Base":1,"Size":6226,"Lines":[0,55,109,159,160,245,257,258,267,277,283,295,297,298,377,453,478,496,498,499,541,565,577,589,591,592,636,661,672,684,686,687,764,840,919,950,1021,1022,1101,1161,1185,1186,1194,1227,1238,1249,1260,1262,1263,1343,1412,1434,1435,1513,1573,1669,1740,1809,1874,1914,1915,1929,1945,1962,1973,1983,2000,2011,2021,2038,2049,2059,2076,2087,2097,2107,2165,2168,2169,2198,2227,2228,2247,2266,2287,2308,2325,2326,2342,2349,2386,2404,2414,2418,2419,2448,2468,2489,2490,2526,2538,2542,2543,2572,2610,2629,2640,2645,2646,2676,2697,2698,2720,2737,2758,2775,2798,2811,2816,2817,2854,2867,2872,2873,2889,2905,2929,2933,2936,2937,2956,2971,2990,2991,3024,3055,3056,3063,3080,3103,3120,3132,3136,3137,3152,3161,3164,3166,3167,3241,3303,3362,3416,3495,3498,3499,3518,3561,3562,3569,3607,3625,3639,3643,3664,3706,3715,3719,3722,3723,3735,3758,3789,3801,3803,3804,3881,3959,4030,4068,4113,4135,4172,4212,4214,4215,4295,4373,4452,4461,4464,4544,4619,4641,4727,4755,4756,4778,4793,4821,4830,4833,4842,4843,4850,4870,4895,4903,4938,4957,4968,4973,4992,5034,5044,5049,5053,5054,5089,5090,5132,5151,5152,5173,5185,5189,5190,5214,5215,5249,5263,5282,5299,5318,5319,5340,5349,5353,5356,5357,5365,5367,5368,5447,5490,5493,5573,5648,5670,5733,5761,5762,5802,5817,5820,5860,5875,5878,5879,5919,5920,5941,5956,5971,5974,6008,6009,6039,6058,6077,6096,6127,6153,6167,6184,6201,6202,6224],"Infos":null}]}
 