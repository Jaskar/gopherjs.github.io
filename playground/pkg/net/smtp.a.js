p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �4p��net/smtpsmtp
crypto/hmac
crypto/md5
crypto/tlsencoding/base64errorsfmtionetnet/textprotostrings��package smtp
import hmac "crypto/hmac"
import md5 "crypto/md5"
import errors "errors"
import fmt "fmt"
import tls "crypto/tls"
import base64 "encoding/base64"
import io "io"
import net "net"
import textproto "net/textproto"
import strings "strings"
type @"".Auth interface { @"".Next(@"".fromServer []byte, @"".more bool) (@"".toServer []byte, @"".err error); @"".Start(@"".server *@"".ServerInfo) (@"".proto string, @"".toServer []byte, @"".err error) }
func @"".CRAMMD5Auth(@"".username string, @"".secret string) (? @"".Auth)
type @"".Client struct { @"".Text *@"net/textproto".Conn; @"".conn @"net".Conn; @"".tls bool; @"".serverName string; @"".ext map[string]string; @"".auth []string; @"".localName string; @"".didHello bool; @"".helloError error }
func (? *@"".Client) @"".Auth(@"".a @"".Auth) (? error)
func (? *@"".Client) @"".Close() (? error)
func (? *@"".Client) @"".Data() (? @"io".WriteCloser, ? error)
func (? *@"".Client) @"".Extension(@"".ext string) (? bool, ? string)
func (? *@"".Client) @"".Hello(@"".localName string) (? error)
func (? *@"".Client) @"".Mail(@"".from string) (? error)
func (? *@"".Client) @"".Quit() (? error)
func (? *@"".Client) @"".Rcpt(@"".to string) (? error)
func (? *@"".Client) @"".Reset() (? error)
func (? *@"".Client) @"".StartTLS(@"".config *@"crypto/tls".Config) (? error)
func (? *@"".Client) @"".Verify(@"".addr string) (? error)
func (? *@"".Client) @"".cmd(@"".expectCode int, @"".format string, @"".args ...interface {  }) (? int, ? string, ? error)
func (? *@"".Client) @"".ehlo() (? error)
func (? *@"".Client) @"".hello() (? error)
func (? *@"".Client) @"".helo() (? error)
func @"".Dial(@"".addr string) (? *@"".Client, ? error)
func @"".NewClient(@"".conn @"net".Conn, @"".host string) (? *@"".Client, ? error)
func @"".PlainAuth(@"".identity string, @"".username string, @"".password string, @"".host string) (? @"".Auth)
func @"".SendMail(@"".addr string, @"".a @"".Auth, @"".from string, @"".to []string, @"".msg []byte) (? error)
type @"".ServerInfo struct { @"".Name string; @"".TLS bool; @"".Auth []string }
type @"".cramMD5Auth struct { @"".username string; @"".secret string }
func (? *@"".cramMD5Auth) @"".Next(@"".fromServer []byte, @"".more bool) (? []byte, ? error)
func (? *@"".cramMD5Auth) @"".Start(@"".server *@"".ServerInfo) (? string, ? []byte, ? error)
type @"".dataCloser struct { @"".c *@"".Client; ? @"io".WriteCloser }
func (? *@"".dataCloser) @"".Close() (? error)
type @"".plainAuth struct { @"".identity string; @"".username string; @"".password string; @"".host string }
func (? *@"".plainAuth) @"".Next(@"".fromServer []byte, @"".more bool) (? []byte, ? error)
func (? *@"".plainAuth) @"".Start(@"".server *@"".ServerInfo) (? string, ? []byte, ? error)
type @"net/textproto".Conn struct { ? @"net/textproto".Reader; ? @"net/textproto".Writer; ? @"net/textproto".Pipeline; @"net/textproto".conn @"io".ReadWriteCloser }
func (? *@"net/textproto".Conn) @"net/textproto".Close() (? error)
func (? *@"net/textproto".Conn) @"net/textproto".Cmd(@"net/textproto".format string, @"net/textproto".args ...interface {  }) (@"net/textproto".id uint, @"net/textproto".err error)
import time "time"
type @"net".Conn interface { @"net".Close() (? error); @"net".LocalAddr() (? @"net".Addr); @"net".Read(@"net".b []byte) (@"net".n int, @"net".err error); @"net".RemoteAddr() (? @"net".Addr); @"net".SetDeadline(@"net".t @"time".Time) (? error); @"net".SetReadDeadline(@"net".t @"time".Time) (? error); @"net".SetWriteDeadline(@"net".t @"time".Time) (? error); @"net".Write(@"net".b []byte) (@"net".n int, @"net".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
import x509 "crypto/x509"
import sync "sync"
type @"crypto/tls".Config struct { @"crypto/tls".Rand @"io".Reader; @"crypto/tls".Time func () (? @"time".Time); @"crypto/tls".Certificates []@"crypto/tls".Certificate; @"crypto/tls".NameToCertificate map[string]*@"crypto/tls".Certificate; @"crypto/tls".GetCertificate func (@"crypto/tls".clientHello *@"crypto/tls".ClientHelloInfo) (? *@"crypto/tls".Certificate, ? error); @"crypto/tls".RootCAs *@"crypto/x509".CertPool; @"crypto/tls".NextProtos []string; @"crypto/tls".ServerName string; @"crypto/tls".ClientAuth @"crypto/tls".ClientAuthType; @"crypto/tls".ClientCAs *@"crypto/x509".CertPool; @"crypto/tls".InsecureSkipVerify bool; @"crypto/tls".CipherSuites []uint16; @"crypto/tls".PreferServerCipherSuites bool; @"crypto/tls".SessionTicketsDisabled bool; @"crypto/tls".SessionTicketKey [32]byte; @"crypto/tls".ClientSessionCache @"crypto/tls".ClientSessionCache; @"crypto/tls".MinVersion uint16; @"crypto/tls".MaxVersion uint16; @"crypto/tls".CurvePreferences []@"crypto/tls".CurveID; @"crypto/tls".serverInitOnce @"sync".Once }
func (? *@"crypto/tls".Config) @"crypto/tls".BuildNameToCertificate() ()
func (? *@"crypto/tls".Config) @"crypto/tls".cipherSuites() (? []uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".curvePreferences() (? []@"crypto/tls".CurveID)
func (? *@"crypto/tls".Config) @"crypto/tls".getCertificate(@"crypto/tls".clientHello *@"crypto/tls".ClientHelloInfo) (? *@"crypto/tls".Certificate, ? error)
func (? *@"crypto/tls".Config) @"crypto/tls".maxVersion() (? uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".minVersion() (? uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".mutualVersion(@"crypto/tls".vers uint16) (? uint16, ? bool)
func (? *@"crypto/tls".Config) @"crypto/tls".rand() (? @"io".Reader)
func (? *@"crypto/tls".Config) @"crypto/tls".serverInit() ()
func (? *@"crypto/tls".Config) @"crypto/tls".time() (? @"time".Time)
import bufio "bufio"
type @"net/textproto".Reader struct { @"net/textproto".R *@"bufio".Reader; @"net/textproto".dot *@"net/textproto".dotReader; @"net/textproto".buf []byte }
func (? *@"net/textproto".Reader) @"net/textproto".DotReader() (? @"io".Reader)
func (? *@"net/textproto".Reader) @"net/textproto".ReadCodeLine(@"net/textproto".expectCode int) (@"net/textproto".code int, @"net/textproto".message string, @"net/textproto".err error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadContinuedLine() (? string, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadContinuedLineBytes() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadDotBytes() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadDotLines() (? []string, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadLine() (? string, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadLineBytes() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadMIMEHeader() (? @"net/textproto".MIMEHeader, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadResponse(@"net/textproto".expectCode int) (@"net/textproto".code int, @"net/textproto".message string, @"net/textproto".err error)
func (? *@"net/textproto".Reader) @"net/textproto".closeDot() ()
func (? *@"net/textproto".Reader) @"net/textproto".readCodeLine(@"net/textproto".expectCode int) (@"net/textproto".code int, @"net/textproto".continued bool, @"net/textproto".message string, @"net/textproto".err error)
func (? *@"net/textproto".Reader) @"net/textproto".readContinuedLineSlice() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".readLineSlice() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".skipSpace() (? int)
func (? *@"net/textproto".Reader) @"net/textproto".upcomingHeaderNewlines() (@"net/textproto".n int)
type @"net/textproto".Writer struct { @"net/textproto".W *@"bufio".Writer; @"net/textproto".dot *@"net/textproto".dotWriter }
func (? *@"net/textproto".Writer) @"net/textproto".DotWriter() (? @"io".WriteCloser)
func (? *@"net/textproto".Writer) @"net/textproto".PrintfLine(@"net/textproto".format string, @"net/textproto".args ...interface {  }) (? error)
func (? *@"net/textproto".Writer) @"net/textproto".closeDot() ()
type @"net/textproto".Pipeline struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".request @"net/textproto".sequencer; @"net/textproto".response @"net/textproto".sequencer }
func (? *@"net/textproto".Pipeline) @"net/textproto".EndRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".EndResponse(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".Next() (? uint)
func (? *@"net/textproto".Pipeline) @"net/textproto".StartRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".StartResponse(@"net/textproto".id uint) ()
type @"io".ReadWriteCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"net".Addr interface { @"net".Network() (? string); @"net".String() (? string) }
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
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
import crypto "crypto"
type @"crypto/tls".Certificate struct { @"crypto/tls".Certificate [][]byte; @"crypto/tls".PrivateKey @"crypto".PrivateKey; @"crypto/tls".OCSPStaple []byte; @"crypto/tls".Leaf *@"crypto/x509".Certificate }
type @"crypto/tls".ClientHelloInfo struct { @"crypto/tls".CipherSuites []uint16; @"crypto/tls".ServerName string; @"crypto/tls".SupportedCurves []@"crypto/tls".CurveID; @"crypto/tls".SupportedPoints []uint8 }
type @"crypto/x509".CertPool struct { @"crypto/x509".bySubjectKeyId map[string][]int; @"crypto/x509".byName map[string][]int; @"crypto/x509".certs []*@"crypto/x509".Certificate }
func (? *@"crypto/x509".CertPool) @"crypto/x509".AddCert(@"crypto/x509".cert *@"crypto/x509".Certificate) ()
func (? *@"crypto/x509".CertPool) @"crypto/x509".AppendCertsFromPEM(@"crypto/x509".pemCerts []byte) (@"crypto/x509".ok bool)
func (? *@"crypto/x509".CertPool) @"crypto/x509".Subjects() (@"crypto/x509".res [][]byte)
func (? *@"crypto/x509".CertPool) @"crypto/x509".findVerifiedParents(@"crypto/x509".cert *@"crypto/x509".Certificate) (@"crypto/x509".parents []int, @"crypto/x509".errCert *@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"crypto/tls".ClientAuthType int
type @"crypto/tls".ClientSessionCache interface { @"crypto/tls".Get(@"crypto/tls".sessionKey string) (@"crypto/tls".session *@"crypto/tls".ClientSessionState, @"crypto/tls".ok bool); @"crypto/tls".Put(@"crypto/tls".sessionKey string, @"crypto/tls".cs *@"crypto/tls".ClientSessionState) () }
type @"crypto/tls".CurveID uint16
type @"sync".Once struct { @"sync".m @"sync".Mutex; @"sync".done uint32 }
func (? *@"sync".Once) @"sync".Do(@"sync".f func () ()) ()
type @"bufio".Reader struct { @"bufio".buf []byte; @"bufio".rd @"io".Reader; @"bufio".r int; @"bufio".w int; @"bufio".err error; @"bufio".lastByte int; @"bufio".lastRuneSize int }
func (? *@"bufio".Reader) @"bufio".Buffered() (? int)
func (? *@"bufio".Reader) @"bufio".Peek(@"bufio".n int) (? []byte, ? error)
func (? *@"bufio".Reader) @"bufio".Read(@"bufio".p []byte) (@"bufio".n int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadByte() (@"bufio".c byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadBytes(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadLine() (@"bufio".line []byte, @"bufio".isPrefix bool, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadRune() (@"bufio".r rune, @"bufio".size int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadSlice(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadString(@"bufio".delim byte) (@"bufio".line string, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".Reset(@"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".UnreadByte() (? error)
func (? *@"bufio".Reader) @"bufio".UnreadRune() (? error)
func (? *@"bufio".Reader) @"bufio".WriteTo(@"bufio".w @"io".Writer) (@"bufio".n int64, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".fill() ()
func (? *@"bufio".Reader) @"bufio".readErr() (? error)
func (? *@"bufio".Reader) @"bufio".reset(@"bufio".buf []byte, @"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".writeBuf(@"bufio".w @"io".Writer) (? int64, ? error)
type @"net/textproto".dotReader struct { @"net/textproto".r *@"net/textproto".Reader; @"net/textproto".state int }
func (? *@"net/textproto".dotReader) @"net/textproto".Read(@"net/textproto".b []byte) (@"net/textproto".n int, @"net/textproto".err error)
type @"net/textproto".MIMEHeader map[string][]string
func (? @"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? @"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
type @"bufio".Writer struct { @"bufio".err error; @"bufio".buf []byte; @"bufio".n int; @"bufio".wr @"io".Writer }
func (? *@"bufio".Writer) @"bufio".Available() (? int)
func (? *@"bufio".Writer) @"bufio".Buffered() (? int)
func (? *@"bufio".Writer) @"bufio".Flush() (? error)
func (? *@"bufio".Writer) @"bufio".ReadFrom(@"bufio".r @"io".Reader) (@"bufio".n int64, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".Reset(@"bufio".w @"io".Writer) ()
func (? *@"bufio".Writer) @"bufio".Write(@"bufio".p []byte) (@"bufio".nn int, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".WriteByte(@"bufio".c byte) (? error)
func (? *@"bufio".Writer) @"bufio".WriteRune(@"bufio".r rune) (@"bufio".size int, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".WriteString(@"bufio".s string) (? int, ? error)
func (? *@"bufio".Writer) @"bufio".flush() (? error)
type @"net/textproto".dotWriter struct { @"net/textproto".w *@"net/textproto".Writer; @"net/textproto".state int }
func (? *@"net/textproto".dotWriter) @"net/textproto".Close() (? error)
func (? *@"net/textproto".dotWriter) @"net/textproto".Write(@"net/textproto".b []byte) (@"net/textproto".n int, @"net/textproto".err error)
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"net/textproto".sequencer struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".wait map[uint]chan uint }
func (? *@"net/textproto".sequencer) @"net/textproto".End(@"net/textproto".id uint) ()
func (? *@"net/textproto".sequencer) @"net/textproto".Start(@"net/textproto".id uint) ()
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
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
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"crypto".PrivateKey interface {  }
import big "math/big"
import pkix "crypto/x509/pkix"
import asn1 "encoding/asn1"
type @"crypto/x509".Certificate struct { @"crypto/x509".Raw []byte; @"crypto/x509".RawTBSCertificate []byte; @"crypto/x509".RawSubjectPublicKeyInfo []byte; @"crypto/x509".RawSubject []byte; @"crypto/x509".RawIssuer []byte; @"crypto/x509".Signature []byte; @"crypto/x509".SignatureAlgorithm @"crypto/x509".SignatureAlgorithm; @"crypto/x509".PublicKeyAlgorithm @"crypto/x509".PublicKeyAlgorithm; @"crypto/x509".PublicKey interface {  }; @"crypto/x509".Version int; @"crypto/x509".SerialNumber *@"math/big".Int; @"crypto/x509".Issuer @"crypto/x509/pkix".Name; @"crypto/x509".Subject @"crypto/x509/pkix".Name; @"crypto/x509".NotBefore @"time".Time; @"crypto/x509".NotAfter @"time".Time; @"crypto/x509".KeyUsage @"crypto/x509".KeyUsage; @"crypto/x509".Extensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtraExtensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtKeyUsage []@"crypto/x509".ExtKeyUsage; @"crypto/x509".UnknownExtKeyUsage []@"encoding/asn1".ObjectIdentifier; @"crypto/x509".BasicConstraintsValid bool; @"crypto/x509".IsCA bool; @"crypto/x509".MaxPathLen int; @"crypto/x509".MaxPathLenZero bool; @"crypto/x509".SubjectKeyId []byte; @"crypto/x509".AuthorityKeyId []byte; @"crypto/x509".OCSPServer []string; @"crypto/x509".IssuingCertificateURL []string; @"crypto/x509".DNSNames []string; @"crypto/x509".EmailAddresses []string; @"crypto/x509".IPAddresses []@"net".IP; @"crypto/x509".PermittedDNSDomainsCritical bool; @"crypto/x509".PermittedDNSDomains []string; @"crypto/x509".CRLDistributionPoints []string; @"crypto/x509".PolicyIdentifiers []@"encoding/asn1".ObjectIdentifier }
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckCRLSignature(@"crypto/x509".crl *@"crypto/x509/pkix".CertificateList) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignature(@"crypto/x509".algo @"crypto/x509".SignatureAlgorithm, @"crypto/x509".signed []byte, @"crypto/x509".signature []byte) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignatureFrom(@"crypto/x509".parent *@"crypto/x509".Certificate) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CreateCRL(@"crypto/x509".rand @"io".Reader, @"crypto/x509".priv interface {  }, @"crypto/x509".revokedCerts []@"crypto/x509/pkix".RevokedCertificate, @"crypto/x509".now @"time".Time, @"crypto/x509".expiry @"time".Time) (@"crypto/x509".crlBytes []byte, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Equal(@"crypto/x509".other *@"crypto/x509".Certificate) (? bool)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Verify(@"crypto/x509".opts @"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".VerifyHostname(@"crypto/x509".h string) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".buildChains(@"crypto/x509".cache map[int][][]*@"crypto/x509".Certificate, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".isValid(@"crypto/x509".certType int, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".systemVerify(@"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"crypto/tls".ClientSessionState struct { @"crypto/tls".sessionTicket []uint8; @"crypto/tls".vers uint16; @"crypto/tls".cipherSuite uint16; @"crypto/tls".masterSecret []byte; @"crypto/tls".serverCertificates []*@"crypto/x509".Certificate }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
type @"crypto/x509".SignatureAlgorithm int
type @"crypto/x509".PublicKeyAlgorithm int
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
type @"crypto/x509/pkix".Name struct { @"crypto/x509/pkix".Country []string; @"crypto/x509/pkix".Organization []string; @"crypto/x509/pkix".OrganizationalUnit []string; @"crypto/x509/pkix".Locality []string; @"crypto/x509/pkix".Province []string; @"crypto/x509/pkix".StreetAddress []string; @"crypto/x509/pkix".PostalCode []string; @"crypto/x509/pkix".SerialNumber string; @"crypto/x509/pkix".CommonName string; @"crypto/x509/pkix".Names []@"crypto/x509/pkix".AttributeTypeAndValue }
func (? @"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".FillFromRDNSequence(@"crypto/x509/pkix".rdns *@"crypto/x509/pkix".RDNSequence) ()
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
type @"crypto/x509".KeyUsage int
type @"crypto/x509/pkix".Extension struct { @"crypto/x509/pkix".Id @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Critical bool "asn1:\"optional\""; @"crypto/x509/pkix".Value []byte }
type @"crypto/x509".ExtKeyUsage int
type @"encoding/asn1".ObjectIdentifier []int
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
type @"net".IP []byte
func (? @"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? @"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? @"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? @"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? @"net".IP) @"net".IsLoopback() (? bool)
func (? @"net".IP) @"net".IsMulticast() (? bool)
func (? @"net".IP) @"net".IsUnspecified() (? bool)
func (? @"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? @"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? @"net".IP) @"net".String() (? string)
func (? @"net".IP) @"net".To16() (? @"net".IP)
func (? @"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? *@"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? *@"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? *@"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? *@"net".IP) @"net".IsLoopback() (? bool)
func (? *@"net".IP) @"net".IsMulticast() (? bool)
func (? *@"net".IP) @"net".IsUnspecified() (? bool)
func (? *@"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? *@"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? *@"net".IP) @"net".String() (? string)
func (? *@"net".IP) @"net".To16() (? @"net".IP)
func (? *@"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".UnmarshalText(@"net".text []byte) (? error)
type @"crypto/x509/pkix".CertificateList struct { @"crypto/x509/pkix".TBSCertList @"crypto/x509/pkix".TBSCertificateList; @"crypto/x509/pkix".SignatureAlgorithm @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".SignatureValue @"encoding/asn1".BitString }
func (? *@"crypto/x509/pkix".CertificateList) @"crypto/x509/pkix".HasExpired(@"crypto/x509/pkix".now @"time".Time) (? bool)
type @"crypto/x509/pkix".RevokedCertificate struct { @"crypto/x509/pkix".SerialNumber *@"math/big".Int; @"crypto/x509/pkix".RevocationTime @"time".Time; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"optional\"" }
type @"crypto/x509".VerifyOptions struct { @"crypto/x509".DNSName string; @"crypto/x509".Intermediates *@"crypto/x509".CertPool; @"crypto/x509".Roots *@"crypto/x509".CertPool; @"crypto/x509".CurrentTime @"time".Time; @"crypto/x509".KeyUsages []@"crypto/x509".ExtKeyUsage }
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
type @"crypto/x509/pkix".AttributeTypeAndValue struct { @"crypto/x509/pkix".Type @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Value interface {  } }
type @"crypto/x509/pkix".RDNSequence []@"crypto/x509/pkix".RelativeDistinguishedNameSET
type @"net".IPMask []byte
func (? @"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? @"net".IPMask) @"net".String() (? string)
func (? *@"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? *@"net".IPMask) @"net".String() (? string)
type @"crypto/x509/pkix".TBSCertificateList struct { @"crypto/x509/pkix".Raw @"encoding/asn1".RawContent; @"crypto/x509/pkix".Version int "asn1:\"optional,default:2\""; @"crypto/x509/pkix".Signature @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".Issuer @"crypto/x509/pkix".RDNSequence; @"crypto/x509/pkix".ThisUpdate @"time".Time; @"crypto/x509/pkix".NextUpdate @"time".Time "asn1:\"optional\""; @"crypto/x509/pkix".RevokedCertificates []@"crypto/x509/pkix".RevokedCertificate "asn1:\"optional\""; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"tag:0,optional,explicit\"" }
type @"crypto/x509/pkix".AlgorithmIdentifier struct { @"crypto/x509/pkix".Algorithm @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Parameters @"encoding/asn1".RawValue "asn1:\"optional\"" }
type @"encoding/asn1".BitString struct { @"encoding/asn1".Bytes []byte; @"encoding/asn1".BitLength int }
func (? @"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? @"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
type @"crypto/x509/pkix".RelativeDistinguishedNameSET []@"crypto/x509/pkix".AttributeTypeAndValue
type @"encoding/asn1".RawContent []byte
type @"encoding/asn1".RawValue struct { @"encoding/asn1".Class int; @"encoding/asn1".Tag int; @"encoding/asn1".IsCompound bool; @"encoding/asn1".Bytes []byte; @"encoding/asn1".FullBytes []byte }
$$
:AA=$packages["crypto/hmac"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["crypto/md5"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} EE=$packages["crypto/tls"];E    $r=E.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} FF=$packages["encoding/base64"];E    $r=F.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} CC=$packages["errors"];E    $r=C.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} DD=$packages["fmt"];E    $r=D.$init($BLOCKING);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} GG=$packages["io"];E    $r=G.$init($BLOCKING);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} HH=$packages["net"];E    $r=H.$init($BLOCKING);$s=8;case 8:if($r&&$r.$blocking){$r=$r();} II=$packages["net/textproto"];E    $r=I.$init($BLOCKING);$s=9;case 9:if($r&&$r.$blocking){$r=$r();} JJ=$packages["strings"];G    $r=J.$init($BLOCKING);$s=10;case 10:if($r&&$r.$blocking){$r=$r();} KJK=$pkg.Auth=$newType(8,$kindInterface,"smtp.Auth","Auth","net/smtp",null);��K.init([{prop:"Next",name:"Next",pkg:"",typ:$funcType([W,$Bool],[W,$error],false)},{prop:"Start",name:"Start",pkg:"",typ:$funcType([AG],[$String,W,$error],false)}]);net/smtp.Authnet/smtp.Authnet/smtp.ServerInfonet/smtp:*net/smtp.ServerInfonet/smtp:[]byte L��L=$pkg.ServerInfo=$newType(0,$kindStruct,"smtp.ServerInfo","ServerInfo","net/smtp",function(Name_,TLS_,Auth_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.TLS=TLS_!==undefined?TLS_:false;this.Auth=Auth_!==undefined?Auth_:AA.nil;});��L.init([{prop:"Name",name:"Name",pkg:"",typ:$String,tag:""},{prop:"TLS",name:"TLS",pkg:"",typ:$Bool,tag:""},{prop:"Auth",name:"Auth",pkg:"",typ:AA,tag:""}]);net/smtp.ServerInfonet/smtp.ServerInfonet/smtp:[]string M�HM=$pkg.plainAuth=$newType(0,$kindStruct,"smtp.plainAuth","plainAuth","net/smtp",function(identity_,username_,password_,host_){this.$val=this;this.identity=identity_!==undefined?identity_:"";this.username=username_!==undefined?username_:"";this.password=password_!==undefined?password_:"";this.host=host_!==undefined?host_:"";});��AH.methods=[{prop:"Start",name:"Start",pkg:"",typ:$funcType([AG],[$String,W,$error],false)},{prop:"Next",name:"Next",pkg:"",typ:$funcType([W,$Bool],[W,$error],false)}];�M.init([{prop:"identity",name:"identity",pkg:"net/smtp",typ:$String,tag:""},{prop:"username",name:"username",pkg:"net/smtp",typ:$String,tag:""},{prop:"password",name:"password",pkg:"net/smtp",typ:$String,tag:""},{prop:"host",name:"host",pkg:"net/smtp",typ:$String,tag:""}]);net/smtp.plainAuthnet/smtp.plainAuthnet/smtp:*net/smtp.ServerInfonet/smtp:*net/smtp.plainAuthnet/smtp:[]byte O��O=$pkg.cramMD5Auth=$newType(0,$kindStruct,"smtp.cramMD5Auth","cramMD5Auth","net/smtp",function(username_,secret_){this.$val=this;this.username=username_!==undefined?username_:"";this.secret=secret_!==undefined?secret_:"";});��AI.methods=[{prop:"Start",name:"Start",pkg:"",typ:$funcType([AG],[$String,W,$error],false)},{prop:"Next",name:"Next",pkg:"",typ:$funcType([W,$Bool],[W,$error],false)}];��O.init([{prop:"username",name:"username",pkg:"net/smtp",typ:$String,tag:""},{prop:"secret",name:"secret",pkg:"net/smtp",typ:$String,tag:""}]);net/smtp.cramMD5Authnet/smtp.cramMD5Authnet/smtp:*net/smtp.ServerInfonet/smtp:*net/smtp.cramMD5Authnet/smtp:[]byte Q�PQ=$pkg.Client=$newType(0,$kindStruct,"smtp.Client","Client","net/smtp",function(Text_,conn_,tls_,serverName_,ext_,auth_,localName_,didHello_,helloError_){this.$val=this;this.Text=Text_!==undefined?Text_:Z.nil;this.conn=conn_!==undefined?conn_:$ifaceNil;this.tls=tls_!==undefined?tls_:false;this.serverName=serverName_!==undefined?serverName_:"";this.ext=ext_!==undefined?ext_:false;this.auth=auth_!==undefined?auth_:AA.nil;this.localName=localName_!==undefined?localName_:"";this.didHello=didHello_!==undefined?didHello_:false;this.helloError=helloError_!==undefined?helloError_:$ifaceNil;});�{Y.methods=[{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"hello",name:"hello",pkg:"net/smtp",typ:$funcType([],[$error],false)},{prop:"Hello",name:"Hello",pkg:"",typ:$funcType([$String],[$error],false)},{prop:"cmd",name:"cmd",pkg:"net/smtp",typ:$funcType([$Int,$String,X],[$Int,$String,$error],true)},{prop:"helo",name:"helo",pkg:"net/smtp",typ:$funcType([],[$error],false)},{prop:"ehlo",name:"ehlo",pkg:"net/smtp",typ:$funcType([],[$error],false)},{prop:"StartTLS",name:"StartTLS",pkg:"",typ:$funcType([AJ],[$error],false)},{prop:"Verify",name:"Verify",pkg:"",typ:$funcType([$String],[$error],false)},{prop:"Auth",name:"Auth",pkg:"",typ:$funcType([K],[$error],false)},{prop:"Mail",name:"Mail",pkg:"",typ:$funcType([$String],[$error],false)},{prop:"Rcpt",name:"Rcpt",pkg:"",typ:$funcType([$String],[$error],false)},{prop:"Data",name:"Data",pkg:"",typ:$funcType([],[G.WriteCloser,$error],false)},{prop:"Extension",name:"Extension",pkg:"",typ:$funcType([$String],[$Bool,$String],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[$error],false)},{prop:"Quit",name:"Quit",pkg:"",typ:$funcType([],[$error],false)}];�.Q.init([{prop:"Text",name:"Text",pkg:"",typ:Z,tag:""},{prop:"conn",name:"conn",pkg:"net/smtp",typ:H.Conn,tag:""},{prop:"tls",name:"tls",pkg:"net/smtp",typ:$Bool,tag:""},{prop:"serverName",name:"serverName",pkg:"net/smtp",typ:$String,tag:""},{prop:"ext",name:"ext",pkg:"net/smtp",typ:AK,tag:""},{prop:"auth",name:"auth",pkg:"net/smtp",typ:AA,tag:""},{prop:"localName",name:"localName",pkg:"net/smtp",typ:$String,tag:""},{prop:"didHello",name:"didHello",pkg:"net/smtp",typ:$Bool,tag:""},{prop:"helloError",name:"helloError",pkg:"net/smtp",typ:$error,tag:""}]);net/smtp.Clientcrypto/tls.Configio.WriteClosernet.Connnet/smtp.Authnet/smtp.Clientnet/smtp:*crypto/tls.Confignet/smtp:*net/smtp.Clientnet/smtp:*net/textproto.Connnet/smtp:[]interface{}net/smtp:[]stringnet/smtp:map[string]string T��T=$pkg.dataCloser=$newType(0,$kindStruct,"smtp.dataCloser","dataCloser","net/smtp",function(c_,WriteCloser_){this.$val=this;this.c=c_!==undefined?c_:Y.nil;this.WriteCloser=WriteCloser_!==undefined?WriteCloser_:$ifaceNil;});QAL.methods=[{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];wT.init([{prop:"c",name:"c",pkg:"net/smtp",typ:Y,tag:""},{prop:"WriteCloser",name:"",pkg:"",typ:G.WriteCloser,tag:""}]);net/smtp.dataCloserio.WriteClosernet/smtp.dataClosernet/smtp:*net/smtp.Clientnet/smtp:*net/smtp.dataCloser WW=$sliceType($Uint8);net/smtp:[]byte XX=$sliceType($emptyInterface);net/smtp:[]interface{} YY=$ptrType(Q);net/smtp:*net/smtp.Clientnet/smtp.Client ZZ=$ptrType(I.Conn);net/smtp:*net/textproto.Connnet/textproto.Conn AAAA=$sliceType($String);net/smtp:[]string ABAB=$sliceType(E.Certificate);!net/smtp:[]crypto/tls.Certificatecrypto/tls.Certificate AC/AC=$ptrType($packages["crypto/x509"].CertPool);net/smtp:*crypto/x509.CertPoolcrypto/x509.CertPool ADAD=$sliceType($Uint16);net/smtp:[]uint16 AEAE=$arrayType($Uint8,32);net/smtp:[32]byte AFAF=$sliceType(E.CurveID);net/smtp:[]crypto/tls.CurveIDcrypto/tls.CurveID AGAG=$ptrType(L);net/smtp:*net/smtp.ServerInfonet/smtp.ServerInfo AHAH=$ptrType(M);net/smtp:*net/smtp.plainAuthnet/smtp.plainAuth AIAI=$ptrType(O);net/smtp:*net/smtp.cramMD5Authnet/smtp.cramMD5Auth AJAJ=$ptrType(E.Config);net/smtp:*crypto/tls.Configcrypto/tls.Config AKAK=$mapType($String,$String);net/smtp:map[string]string ALAL=$ptrType(T);net/smtp:*net/smtp.dataClosernet/smtp.dataCloser UU=$throwNilPointerError;net/smtp.testHookStartTLSnet/smtp.testHookStartTLS net/smtp.PlainAuthNUN=$pkg.PlainAuth=function(a,b,c,d){var a,b,c,d;  _return new M.ptr(a,b,c,d);    };net/smtp.PlainAuthnet/smtp.PlainAuthnet/smtp.plainAuth (*net/smtp.plainAuth).Start��M.ptr.prototype.Start=function(a){var a,b,c,d,e,f,g;  �b=this;  �    if(!a.TLS){  �c=false;  
d=a.Auth;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  5    if(f==="PLAIN"){  Sc=true;  ibreak;    }    e++;}  z    if(!c){  �return["",W.nil,C.New("unencrypted connection")];    }    }  �    if(!(a.Name===b.host)){  �return["",W.nil,C.New("wrong host name")];    }  	g=new W($stringToBytes(b.identity+"\x00"+b.username+"\x00"+b.password));  	breturn["PLAIN",g,$ifaceNil];    };M.prototype.Start=function(a){return this.$val.Start(a);};net/smtp.plainAuth
errors.Newnet/smtp.plainAuthnet/smtp:[]byte (*net/smtp.plainAuth).Next��M.ptr.prototype.Next=function(a,b){var a,b,c;  	�c=this;  	�    if(b){  	�return[W.nil,C.New("unexpected server challenge")];    }  
3return[W.nil,$ifaceNil];    };M.prototype.Next=function(a,b){return this.$val.Next(a,b);};net/smtp.plainAuth
errors.Newnet/smtp.plainAuthnet/smtp:[]byte net/smtp.CRAMMD5AuthPKP=$pkg.CRAMMD5Auth=function(a,b){var a,b;  �return new O.ptr(a,b);    };net/smtp.CRAMMD5Authnet/smtp.CRAMMD5Authnet/smtp.cramMD5Auth (*net/smtp.cramMD5Auth).Start��O.ptr.prototype.Start=function(a){var a,b;  �b=this;  return["CRAM-MD5",W.nil,$ifaceNil];    };O.prototype.Start=function(a){return this.$val.Start(a);};net/smtp.cramMD5Authnet/smtp.cramMD5Authnet/smtp:[]byte (*net/smtp.cramMD5Auth).Next��O.ptr.prototype.Next=function(a,b){var a,b,c,d,e;  8c=this;  ~    if(b){  �d=A.New(B.New,new W($stringToBytes(c.secret)));  �d.Write(a);  �e=$makeSlice(W,0,d.Size());  �return[new W($stringToBytes(D.Sprintf("%s %x",new X([new $String(c.username),d.Sum(e)])))),$ifaceNil];    }  /return[W.nil,$ifaceNil];    };O.prototype.Next=function(a,b){return this.$val.Next(a,b);};net/smtp.cramMD5Authcrypto/hmac.Newcrypto/md5.Newfmt.Sprintfnet/smtp.cramMD5Authnet/smtp:[]bytenet/smtp:[]interface{} net/smtp.DialR��R=$pkg.Dial=function(a,$b){var $args=arguments,$r,$s=0,$this=this,b,c,d,e,f,g;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  nc=H.Dial("tcp",a,$BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}b=c;d=b[0];e=b[1];  �    if(!($interfaceIsEqual(e,$ifaceNil))){  �return[Y.nil,e];    }  �f=H.SplitHostPort(a);g=f[0];  �return S(d,g);    case-1:}return;}};$f.$blocking=true;return $f;};net/smtp.Dialnet.Dialnet.SplitHostPortnet/smtp.Clientnet/smtp.Dialnet/smtp.NewClientnet/smtp:*net/smtp.Client net/smtp.NewClientS�-S=$pkg.NewClient=function(a,b){var a,b,c,d,e,f;  �c=I.NewConn(a);  �d=c.Reader.ReadResponse(220);e=d[2];       if(!($interfaceIsEqual(e,$ifaceNil))){  c.Close();  !return[Y.nil,e];    }  5f=new Q.ptr(c,a,false,b,false,AA.nil,"localhost",false,$ifaceNil);  �return[f,$ifaceNil];    };net/smtp.NewClientnet/smtp.Clientnet/smtp.NewClientnet/smtp:*net/smtp.Clientnet/smtp:*net/textproto.Connnet/smtp:[]stringnet/textproto.Connnet/textproto.NewConn (*net/smtp.Client).Close��Q.ptr.prototype.Close=function(){var a;  �a=this;  �return a.Text.Close();    };Q.prototype.Close=function(){return this.$val.Close();};net/smtp.Clientnet/smtp.Client (*net/smtp.Client).hello��Q.ptr.prototype.hello=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  !a=$this;  =if(!a.didHello){$s=1;continue;}$s=2;continue;    case 1:  Pa.didHello=true;  db=a.ehlo($BLOCKING);$s=3;case 3:if(b&&b.$blocking){b=b();}c=b;  vif(!($interfaceIsEqual(c,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  �d=a.helo($BLOCKING);$s=6;case 6:if(d&&d.$blocking){d=d();}a.helloError=d;    case 5:    case 2:  �return a.helloError;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.hello=function($b){return this.$val.hello($b);};net/smtp.Clientnet/smtp.hello~net/smtp.Clientnet/smtp.ehlo~net/smtp.helo~ (*net/smtp.Client).Hello��Q.ptr.prototype.Hello=function(a,$b){var $args=arguments,$r,$s=0,$this=this,b,c;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  b=$this;  /    if(b.didHello){  Areturn C.New("smtp: Hello called after other methods");    }  �b.localName=a;  �c=b.hello($BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}return c;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Hello=function(a,$b){return this.$val.Hello(a,$b);};net/smtp.Client
errors.Newnet/smtp.Clientnet/smtp.hello~ (*net/smtp.Client).cmd��Q.ptr.prototype.cmd=function(a,b,c,$b){var $args=arguments,$deferred=[],$err=null,$r,$s=0,$this=this,d,e,f,g,h,i,j,k;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  d=$this;  ^f=d.Text.Cmd(b,c,$BLOCKING);$s=1;case 1:if(f&&f.$blocking){f=f();}e=f;g=e[0];h=e[1];  �    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[0,"",h];    }  �$r=d.Text.Pipeline.StartResponse(g,$BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();}  �$deferred.push([$methodVal(d.Text.Pipeline,"EndResponse"),[g,$BLOCKING]]);  �i=d.Text.Reader.ReadResponse(a);j=i[0];k=i[1];h=i[2];  return[j,k,h];    case-1:}return;}}catch(err){$err=err;return[0,"",$ifaceNil];}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};Q.prototype.cmd=function(a,b,c,$b){return this.$val.cmd(a,b,c,$b);};net/smtp.Clientnet/smtp.cmd~net/smtp.Client (*net/smtp.Client).helo��Q.ptr.prototype.helo=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  �a=$this;  �a.ext=false;  �c=a.cmd(250,"HELO %s",new X([new $String(a.localName)]),$BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}b=c;d=b[2];  return d;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.helo=function($b){return this.$val.helo($b);};net/smtp.Clientnet/smtp.helo~net/smtp.Clientnet/smtp.cmd~net/smtp:[]interface{} (*net/smtp.Client).ehlo�TQ.ptr.prototype.ehlo=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  �a=$this;  �c=a.cmd(250,"EHLO %s",new X([new $String(a.localName)]),$BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}b=c;d=b[1];e=b[2];  �    if(!($interfaceIsEqual(e,$ifaceNil))){  �return e;    }  f=new $Map();  (g=J.Split(d,"\n");  M    if(g.$length>1){  eg=$subslice(g,1);  }h=g;i=0;while(true){if(!(i<h.$length)){break;}j=((i<0||i>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+i]);  �k=J.SplitN(j," ",2);  �    if(k.$length>1){  �l=(0>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+0]);(f||$throwRuntimeError("assignment to entry in nil map"))[l]={k:l,v:(1>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+1])};    }else{  m=(0>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+0]);(f||$throwRuntimeError("assignment to entry in nil map"))[m]={k:m,v:""};    }    i++;}    }  $  'n=(o=f["AUTH"],o!==undefined?[o.v,true]:["",false]);p=n[0];q=n[1];    if(q){  Ha.auth=J.Split(p," ");    }  oa.ext=f;  |return e;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.ehlo=function($b){return this.$val.ehlo($b);};net/smtp.Clientnet/smtp.ehlo~net/smtp.Clientnet/smtp.cmd~net/smtp:[]interface{}strings.Splitstrings.SplitN (*net/smtp.Client).StartTLS�,Q.ptr.prototype.StartTLS=function(a,$b){var $args=arguments,$r,$s=0,$this=this,b,c,d,e,f,g,h;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  ,b=$this;  ]  `c=b.hello($BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  �return d;    case 3:  �f=b.cmd(220,"STARTTLS",new X([]),$BLOCKING);$s=4;case 4:if(f&&f.$blocking){f=f();}e=f;g=e[2];  �    if(!($interfaceIsEqual(g,$ifaceNil))){  �return g;    }  �b.conn=E.Client(b.conn,a);  �b.Text=I.NewConn(b.conn);  b.tls=true;  -h=b.ehlo($BLOCKING);$s=5;case 5:if(h&&h.$blocking){h=h();}return h;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.StartTLS=function(a,$b){return this.$val.StartTLS(a,$b);};net/smtp.Clientcrypto/tls.Clientnet/smtp.Clientnet/smtp.cmd~net/smtp.ehlo~net/smtp.hello~net/smtp:[]interface{}net/textproto.NewConn (*net/smtp.Client).Verify�fQ.ptr.prototype.Verify=function(a,$b){var $args=arguments,$r,$s=0,$this=this,b,c,d,e,f,g;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  =b=$this;  e  hc=b.hello($BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  �return d;    case 3:  �f=b.cmd(250,"VRFY %s",new X([new $String(a)]),$BLOCKING);$s=4;case 4:if(f&&f.$blocking){f=f();}e=f;g=e[2];  �return g;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Verify=function(a,$b){return this.$val.Verify(a,$b);};net/smtp.Clientnet/smtp.Clientnet/smtp.cmd~net/smtp.hello~net/smtp:[]interface{} (*net/smtp.Client).Auth�FQ.ptr.prototype.Auth=function(a,$b){var $args=arguments,$r,$s=0,$this=this,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:   �b=$this;   �   �c=b.hello($BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:   �return d;    case 3:   �e=F.StdEncoding;  !f=a.Start(new L.ptr(b.serverName,b.tls,b.auth));g=f[0];h=f[1];i=f[2];  !Wif(!($interfaceIsEqual(i,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  !ij=b.Quit($BLOCKING);$s=6;case 6:if(j&&j.$blocking){j=j();}j;  !treturn i;    case 5:  !�k=$makeSlice(W,e.EncodedLen(h.$length));  !�e.Encode(k,h);  !�m=b.cmd(0,"AUTH %s %s",new X([new $String(g),k]),$BLOCKING);$s=7;case 7:if(m&&m.$blocking){m=m();}l=m;n=l[0];o=l[1];i=l[2];  "case 8:if(!($interfaceIsEqual(i,$ifaceNil))){$s=9;continue;}  "'  "+p=W.nil;  "8q=n;  "Hif(q===334){  "Ur=e.DecodeString(o);p=r[0];i=r[1];      "}else if(q===235){  "�p=new W($stringToBytes(o));    }else{  "�i=new I.Error.ptr(n,o);    }  #$    if($interfaceIsEqual(i,$ifaceNil)){  #7s=a.Next(p,n===334);h=s[0];i=s[1];    }  #bif(!($interfaceIsEqual(i,$ifaceNil))){$s=10;continue;}$s=11;continue;    case 10:  #�t=b.cmd(501,"*",new X([]),$BLOCKING);$s=12;case 12:if(t&&t.$blocking){t=t();}t;  #�u=b.Quit($BLOCKING);$s=13;case 13:if(u&&u.$blocking){u=u();}u;  #�$s=9;continue;    case 11:  #�    if(h===W.nil){  #�$s=9;continue;    }  #�k=$makeSlice(W,e.EncodedLen(h.$length));  $e.Encode(k,h);  $-w=b.cmd(0,$bytesToString(k),new X([]),$BLOCKING);$s=14;case 14:if(w&&w.$blocking){w=w();}v=w;n=v[0];o=v[1];i=v[2];    $s=8;continue;case 9:  $]return i;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Auth=function(a,$b){return this.$val.Auth(a,$b);};net/smtp.Clientencoding/base64.StdEncodingnet/smtp.Clientnet/smtp.ServerInfonet/smtp.cmd~net/smtp.hello~net/smtp:[]bytenet/smtp:[]interface{}net/textproto.Error (*net/smtp.Client).Mail�!Q.ptr.prototype.Mail=function(a,$b){var $args=arguments,$r,$s=0,$this=this,b,c,d,e,f,g,h,i,j,k;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  %kb=$this;  %�  %�c=b.hello($BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  %�return d;    case 3:  %�e="MAIL FROM:<%s>";  %�    if(!(b.ext===false)){  %�  %�f=(g=b.ext["8BITMIME"],g!==undefined?[g.v,true]:["",false]);h=f[1];    if(h){  &  &e=e+(" BODY=8BITMIME");        }    }  &>j=b.cmd(250,e,new X([new $String(a)]),$BLOCKING);$s=4;case 4:if(j&&j.$blocking){j=j();}i=j;k=i[2];  &ereturn k;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Mail=function(a,$b){return this.$val.Mail(a,$b);};net/smtp.Clientnet/smtp.Clientnet/smtp.cmd~net/smtp.hello~net/smtp:[]interface{} (*net/smtp.Client).Rcpt��Q.ptr.prototype.Rcpt=function(a,$b){var $args=arguments,$r,$s=0,$this=this,b,c,d,e;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  '8b=$this;  '\d=b.cmd(25,"RCPT TO:<%s>",new X([new $String(a)]),$BLOCKING);$s=1;case 1:if(d&&d.$blocking){d=d();}c=d;e=c[2];  '�return e;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Rcpt=function(a,$b){return this.$val.Rcpt(a,$b);};net/smtp.Clientnet/smtp.Clientnet/smtp.cmd~net/smtp:[]interface{} (*net/smtp.dataCloser).Close��T.ptr.prototype.Close=function(){var a,b,c;  '�a=this;  '�a.WriteCloser.Close();  (
b=a.c.Text.Reader.ReadResponse(250);c=b[2];  (3return c;    };T.prototype.Close=function(){return this.$val.Close();};net/smtp.dataClosernet/smtp.dataCloser (*net/smtp.Client).Data�Q.ptr.prototype.Data=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  )<a=$this;  )ic=a.cmd(354,"DATA",new X([]),$BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}b=c;d=b[2];  )�    if(!($interfaceIsEqual(d,$ifaceNil))){  )�return[$ifaceNil,d];    }  )�return[new T.ptr(a,a.Text.Writer.DotWriter()),$ifaceNil];    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Data=function($b){return this.$val.Data($b);};net/smtp.Clientnet/smtp.Clientnet/smtp.cmd~net/smtp.dataClosernet/smtp:[]interface{} net/smtp.SendMailV�=V=$pkg.SendMail=function(a,b,c,d,e,$b){var $args=arguments,$deferred=[],$err=null,$r,$s=0,$this=this,aa,ab,ac,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  +Ng=R(a,$BLOCKING);$s=1;case 1:if(g&&g.$blocking){g=g();}f=g;h=f[0];i=f[1];  +d    if(!($interfaceIsEqual(i,$ifaceNil))){  +vreturn i;    }  +�$deferred.push([$methodVal(h,"Close"),[$BLOCKING]]);  +�  +�j=h.hello($BLOCKING);$s=2;case 2:if(j&&j.$blocking){j=j();}i=j;if(!($interfaceIsEqual(i,$ifaceNil))){$s=3;continue;}$s=4;continue;    case 3:  +�return i;    case 4:  +�  +�l=h.Extension("STARTTLS",$BLOCKING);$s=5;case 5:if(l&&l.$blocking){l=l();}k=l;m=k[0];if(m){$s=6;continue;}$s=7;continue;    case 6:  +�n=new E.Config.ptr($ifaceNil,$throwNilPointerError,AB.nil,false,$throwNilPointerError,AC.nil,AA.nil,h.serverName,0,AC.nil,false,AD.nil,false,false,AE.zero(),$ifaceNil,0,0,AF.nil,new $packages["sync"].Once.ptr());  ,&    if(!(U===$throwNilPointerError)){  ,FU(n);    }  ,e  ,ho=h.StartTLS(n,$BLOCKING);$s=8;case 8:if(o&&o.$blocking){o=o();}i=o;if(!($interfaceIsEqual(i,$ifaceNil))){$s=9;continue;}$s=10;continue;    case 9:  ,�return i;    case 10:    case 7:  ,�if(!($interfaceIsEqual(b,$ifaceNil))&&!(h.ext===false)){$s=11;continue;}$s=12;continue;    case 11:  ,�  ,�p=(q=h.ext["AUTH"],q!==undefined?[q.v,true]:["",false]);r=p[1];if(r){$s=13;continue;}$s=14;continue;    case 13:  ,�  ,�s=h.Auth(b,$BLOCKING);$s=15;case 15:if(s&&s.$blocking){s=s();}i=s;if(!($interfaceIsEqual(i,$ifaceNil))){$s=16;continue;}$s=17;continue;    case 16:  -return i;    case 17:    case 14:    case 12:  -%  -(t=h.Mail(c,$BLOCKING);$s=18;case 18:if(t&&t.$blocking){t=t();}i=t;if(!($interfaceIsEqual(i,$ifaceNil))){$s=19;continue;}$s=20;continue;    case 19:  -Kreturn i;    case 20:  -Zu=d;v=0;case 21:if(!(v<u.$length)){$s=22;continue;}w=((v<0||v>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+v]);  -v  -yx=h.Rcpt(w,$BLOCKING);$s=23;case 23:if(x&&x.$blocking){x=x();}i=x;if(!($interfaceIsEqual(i,$ifaceNil))){$s=24;continue;}$s=25;continue;    case 24:  -�return i;    case 25:    v++;$s=21;continue;case 22:  -�z=h.Data($BLOCKING);$s=26;case 26:if(z&&z.$blocking){z=z();}y=z;aa=y[0];i=y[1];  -�    if(!($interfaceIsEqual(i,$ifaceNil))){  -�return i;    }  -�ab=aa.Write(e);i=ab[1];  -�    if(!($interfaceIsEqual(i,$ifaceNil))){  .return i;    }  .i=aa.Close();  ..    if(!($interfaceIsEqual(i,$ifaceNil))){  .@return i;    }  .Oac=h.Quit($BLOCKING);$s=27;case 27:if(ac&&ac.$blocking){ac=ac();}return ac;    case-1:}return;}}catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};net/smtp.SendMailcrypto/tls.Certificatecrypto/tls.Configcrypto/tls.CurveIDcrypto/x509.CertPoolnet/smtp.Dialnet/smtp.SendMailnet/smtp.hello~net/smtp.testHookStartTLSnet/smtp:*crypto/x509.CertPoolnet/smtp:[32]byte!net/smtp:[]crypto/tls.Certificatenet/smtp:[]crypto/tls.CurveIDnet/smtp:[]stringnet/smtp:[]uint16	sync.Once (*net/smtp.Client).Extension��Q.ptr.prototype.Extension=function(a,$b){var $args=arguments,$r,$s=0,$this=this,b,c,d,e,f,g,h;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  /ab=$this;  /�  /�c=b.hello($BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  /�return[false,""];    case 3:  /�    if(b.ext===false){  /�return[false,""];    }  /�a=J.ToUpper(a);  0e=(f=b.ext[a],f!==undefined?[f.v,true]:["",false]);g=e[0];h=e[1];  0+return[h,g];    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Extension=function(a,$b){return this.$val.Extension(a,$b);};net/smtp.Clientnet/smtp.Clientnet/smtp.hello~strings.ToUpper (*net/smtp.Client).Reset�LQ.ptr.prototype.Reset=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d,e,f;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  0�a=$this;  0�  0�b=a.hello($BLOCKING);$s=1;case 1:if(b&&b.$blocking){b=b();}c=b;if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  0�return c;    case 3:  0�e=a.cmd(250,"RSET",new X([]),$BLOCKING);$s=4;case 4:if(e&&e.$blocking){e=e();}d=e;f=d[2];  1return f;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Reset=function($b){return this.$val.Reset($b);};net/smtp.Clientnet/smtp.Clientnet/smtp.cmd~net/smtp.hello~net/smtp:[]interface{} (*net/smtp.Client).Quit��Q.ptr.prototype.Quit=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d,e,f;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  1ja=$this;  1�  1�b=a.hello($BLOCKING);$s=1;case 1:if(b&&b.$blocking){b=b();}c=b;if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  1�return c;    case 3:  1�e=a.cmd(221,"QUIT",new X([]),$BLOCKING);$s=4;case 4:if(e&&e.$blocking){e=e();}d=e;f=d[2];  1�    if(!($interfaceIsEqual(f,$ifaceNil))){  1�return f;    }  1�return a.Text.Close();    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Quit=function($b){return this.$val.Quit($b);};net/smtp.Clientnet/smtp.Clientnet/smtp.cmd~net/smtp.hello~net/smtp:[]interface{} �	�{"Base":12819,"Files":[{"Name":"/usr/local/go/src/net/smtp/auth.go","Base":1,"Size":3392,"Lines":[0,55,109,159,160,173,174,183,198,212,222,229,231,232,292,314,364,419,482,544,591,649,707,777,778,842,905,967,1007,1067,1125,1190,1192,1193,1249,1274,1309,1370,1425,1427,1428,1452,1489,1526,1528,1529,1599,1636,1710,1786,1820,1885,1940,1942,1943,2015,2033,2055,2097,2126,2148,2158,2163,2167,2186,2242,2246,2249,2277,2325,2328,2400,2427,2429,2430,2503,2514,2550,2606,2609,2626,2628,2629,2655,2680,2682,2683,2758,2795,2867,2924,2973,3012,3014,3015,3089,3118,3120,3121,3196,3207,3250,3272,3305,3370,3373,3390],"Infos":null},{"Name":"/usr/local/go/src/net/smtp/smtp.go","Base":3394,"Size":9424,"Lines":[0,55,109,159,160,245,293,315,337,359,411,424,425,434,448,467,477,483,490,507,518,520,521,583,604,683,714,736,809,830,845,881,898,917,949,972,1002,1023,1074,1125,1172,1174,1175,1241,1281,1323,1359,1376,1394,1397,1436,1466,1468,1469,1546,1593,1655,1688,1725,1742,1757,1775,1778,1858,1873,1875,1876,1908,1941,1964,1966,1967,2009,2042,2060,2080,2098,2116,2143,2147,2150,2171,2173,2174,2242,2311,2388,2462,2491,2540,2557,2619,2622,2647,2665,2667,2668,2747,2843,2883,2900,2920,2923,2949,2979,3030,3053,3055,3056,3135,3168,3200,3213,3262,3274,3276,3277,3344,3409,3441,3492,3509,3522,3525,3557,3594,3617,3641,3674,3714,3736,3763,3775,3797,3802,3806,3809,3844,3881,3884,3897,3909,3911,3912,3991,4068,4122,4157,4170,4173,4210,4227,4240,4243,4280,4316,4330,4347,4349,4350,4415,4480,4546,4597,4642,4677,4690,4693,4735,4747,4749,4750,4826,4876,4949,4987,5022,5035,5038,5070,5140,5157,5168,5181,5184,5240,5271,5329,5347,5364,5380,5392,5435,5447,5512,5535,5546,5596,5600,5618,5658,5662,5680,5701,5720,5732,5741,5745,5764,5773,5777,5833,5865,5911,5914,5926,5928,5929,6007,6085,6099,6179,6222,6257,6270,6273,6301,6320,6358,6388,6392,6395,6434,6446,6448,6449,6527,6603,6640,6681,6725,6737,6739,6740,6765,6776,6792,6794,6795,6832,6855,6896,6908,6910,6911,6981,7050,7091,7156,7206,7239,7256,7274,7277,7325,7327,7328,7392,7393,7456,7526,7594,7610,7691,7713,7730,7743,7746,7763,7797,7810,7813,7856,7906,7937,7965,7969,8013,8027,8031,8034,8065,8099,8135,8150,8155,8159,8162,8199,8212,8215,8242,8280,8294,8298,8301,8321,8338,8351,8354,8377,8394,8407,8410,8427,8444,8457,8460,8477,8479,8480,8548,8622,8690,8729,8785,8820,8839,8842,8861,8880,8883,8911,8936,8954,8956,8957,9030,9046,9079,9114,9127,9130,9163,9175,9177,9178,9250,9282,9317,9330,9333,9366,9383,9396,9399,9422],"Infos":null}]}
 