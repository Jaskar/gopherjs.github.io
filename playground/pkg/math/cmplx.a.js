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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �A��
math/cmplxcmplxmath��version 4

 	cmplx 	 Abs x   	 Acos    	 	Acosh    	 Asin    	 	Asinh    	 Atan    	 	Atanh    	 Conj    	 Cos    	 Cosh    	 Cot    	 Exp    	 Inf   	 	IsInf     	 	IsNaN     	 Log    	 	Log10    	 NaN   	 	Phase    	 	Polar   r  θ  	 Pow   y   	 Rect .  0   	 Sin    	 Sinh    	 Sqrt    	 Tan    	 Tanh    6AA=$packages["math"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} math/cmplx.AbsBPB=function(a){var $ptr,a;  return A.Hypot(a.$real,a.$imag);    };$pkg.Abs=B;Abs
math.Hypotmath/cmplx.Abs math/cmplx.AsinC��C=function(a){var $ptr,a,b,c,d,e,f;    if(a.$imag===0){    if(A.Abs(a.$real)>1){  �return new $Complex128(1.5707963267948966,0);    }  �return new $Complex128(A.Asin(a.$real),0);    }  �b=new $Complex128(-a.$imag,a.$real);  	c=new $Complex128(a.$real*a.$real-a.$imag*a.$imag,a.$real*a.$imag+a.$imag*a.$real);  	*d=new $Complex128(1-c.$real,-c.$imag);  	[e=Z(d);  	�f=O(new $Complex128(b.$real+e.$real,b.$imag+e.$imag));  	�return new $Complex128(f.$imag,-f.$real);    };$pkg.Asin=C;Asinmath.Abs	math.Asinmath/cmplx.Asinmath/cmplx.Logmath/cmplx.Sqrt math/cmplx.AsinhD��D=function(a){var $ptr,a,b,c,d;    if(a.$imag===0){    if(A.Abs(a.$real)>1){  
zreturn new $Complex128(1.5707963267948966,0);    }  
�return new $Complex128(A.Asinh(a.$real),0);    }  
�b=new $Complex128(a.$real*a.$real-a.$imag*a.$imag,a.$real*a.$imag+a.$imag*a.$real);  
�c=new $Complex128(1+b.$real,b.$imag);  return O((d=Z(c),new $Complex128(a.$real+d.$real,a.$imag+d.$imag)));    };$pkg.Asinh=D;Asinhmath.Abs
math.Asinhmath/cmplx.Asinhmath/cmplx.Logmath/cmplx.Sqrt math/cmplx.AcosE{E=function(a){var $ptr,a,b;  �b=C(a);  �return new $Complex128(1.5707963267948966-b.$real,-b.$imag);    };$pkg.Acos=E;Acosmath/cmplx.Acosmath/cmplx.Asin math/cmplx.AcoshF��F=function(a){var $ptr,a,b;  �b=E(a);    if(b.$imag<=0){  �return new $Complex128(-b.$imag,b.$real);    }  �return new $Complex128(b.$imag,-b.$real);    };$pkg.Acosh=F;Acoshmath/cmplx.Acosmath/cmplx.Acosh math/cmplx.AtanG��G=function(a){var $ptr,a,b,c,d,e,f,g;    if((a.$real===0)&&a.$imag>1){  �return N();    }  �b=a.$real*a.$real;  �c=1-b-a.$imag*a.$imag;    if(c===0){  'return N();    }  8d=0.5*A.Atan2(2*a.$real,c);  ]e=AC(d);  pd=a.$imag-1;  �f=b+d*d;    if(f===0){  �return N();    }  �d=a.$imag+1;  �g=(b+d*d)/f;  �return new $Complex128(e,0.25*A.Log(g));    };$pkg.Atan=G;Atan
math.Atan2math.Logmath/cmplx.Atanmath/cmplx.NaNmath/cmplx.reducePi math/cmplx.AtanhH��H=function(a){var $ptr,a,b;  Yb=new $Complex128(-a.$imag,a.$real);  �b=G(b);  �return new $Complex128(b.$imag,-b.$real);    };$pkg.Atanh=H;Atanhmath/cmplx.Atanmath/cmplx.Atanh math/cmplx.ConjIZI=function(a){var $ptr,a;  �return new $Complex128(a.$real,-a.$imag);    };$pkg.Conj=I;Conjmath/cmplx.Conj math/cmplx.ExpJ��J=function(a){var $ptr,a,b,c,d,e;  ib=A.Exp(a.$real);  �c=A.Sincos(a.$imag);d=c[0];e=c[1];  �return new $Complex128(b*e,b*d);    };$pkg.Exp=J;Expmath.Expmath.Sincosmath/cmplx.Exp math/cmplx.IsInfK��K=function(a){var $ptr,a;    if(A.IsInf(a.$real,0)||A.IsInf(a.$imag,0)){  return true;    }  %return false;    };$pkg.IsInf=K;IsInf
math.IsInfmath/cmplx.IsInf math/cmplx.InfL[L=function(){var $ptr,a;  �a=A.Inf(1);  �return new $Complex128(a,a);    };$pkg.Inf=L;Infmath.Infmath/cmplx.Inf math/cmplx.IsNaNM��M=function(a){var $ptr,a;    if(A.IsInf(a.$real,0)||A.IsInf(a.$imag,0)){  1return false;    }else if(A.IsNaN(a.$real)||A.IsNaN(a.$imag)){  rreturn true;    }  �return false;    };$pkg.IsNaN=M;IsNaN
math.IsInf
math.IsNaNmath/cmplx.IsNaN math/cmplx.NaNNZN=function(){var $ptr,a;  �a=A.NaN();  �return new $Complex128(a,a);    };$pkg.NaN=N;NaNmath.NaNmath/cmplx.NaN math/cmplx.LogOYO=function(a){var $ptr,a;  'ereturn new $Complex128(A.Log(B(a)),Q(a));    };$pkg.Log=O;Logmath.Logmath/cmplx.Absmath/cmplx.Logmath/cmplx.Phase math/cmplx.Log10P��P=function(a){var $ptr,a,b;  '�return(b=O(a),new $Complex128(0.4342944819032518*b.$real-0*b.$imag,0.4342944819032518*b.$imag+0*b.$real));    };$pkg.Log10=P;Log10math/cmplx.Logmath/cmplx.Log10 math/cmplx.PhaseQRQ=function(a){var $ptr,a;  )Treturn A.Atan2(a.$imag,a.$real);    };$pkg.Phase=Q;Phase
math.Atan2math/cmplx.Phase math/cmplx.PolarRdR=function(a){var $ptr,a,b,c,d,e;b=0;c=0;    d=B(a);e=Q(a);b=d;c=e;return[b,c];    };$pkg.Polar=R;Polarmath/cmplx.Absmath/cmplx.Phasemath/cmplx.Polar math/cmplx.PowS��S=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m;    if((a.$real===0&&a.$imag===0)){  1�c=b.$real;d=b.$imag;e=c;f=d;    if((e===0)){  2-return new $Complex128(1,0);    }else if(e<0){    if(f===0){  2Wreturn new $Complex128(A.Inf(1),0);    }  2~return L();    }else if(e>0){  2�return new $Complex128(0,0);    }  2�$panic(new $String("not reached"));    }  2�g=B(a);    if(g===0){  2�return new $Complex128(0,0);    }  3h=A.Pow(g,b.$real);  3%i=Q(a);  36j=b.$real*i;    if(!((b.$imag===0))){  3bh=h*(A.Exp(-b.$imag*i));  3�j=j+(b.$imag*A.Log(g));    }  3�k=A.Sincos(j);l=k[0];m=k[1];  3�return new $Complex128(h*m,h*l);    };$pkg.Pow=S;Pow	math.Expmath.Infmath.Logmath.Powmath.Sincosmath/cmplx.Absmath/cmplx.Infmath/cmplx.Phasemath/cmplx.Pow math/cmplx.RectT|T=function(a,b){var $ptr,a,b,c,d,e;  5c=A.Sincos(b);d=c[0];e=c[1];  5$return new $Complex128(a*e,a*d);    };$pkg.Rect=T;Rectmath.Sincosmath/cmplx.Rect math/cmplx.SinU��U=function(a){var $ptr,a,b,c,d,e,f,g;  ;�b=A.Sincos(a.$real);c=b[0];d=b[1];  ;�e=Y(a.$imag);f=e[0];g=e[1];  ;�return new $Complex128(c*g,d*f);    };$pkg.Sin=U;Sinmath.Sincosmath/cmplx.Sinmath/cmplx.sinhcosh math/cmplx.SinhV��V=function(a){var $ptr,a,b,c,d,e,f,g;  =�b=A.Sincos(a.$imag);c=b[0];d=b[1];  =�e=Y(a.$real);f=e[0];g=e[1];  =�return new $Complex128(d*f,c*g);    };$pkg.Sinh=V;Sinhmath.Sincosmath/cmplx.Sinhmath/cmplx.sinhcosh math/cmplx.CosW��W=function(a){var $ptr,a,b,c,d,e,f,g;  ?�b=A.Sincos(a.$real);c=b[0];d=b[1];  ?�e=Y(a.$imag);f=e[0];g=e[1];  ?�return new $Complex128(d*g,-c*f);    };$pkg.Cos=W;Cosmath.Sincosmath/cmplx.Cosmath/cmplx.sinhcosh math/cmplx.CoshX��X=function(a){var $ptr,a,b,c,d,e,f,g;  AYb=A.Sincos(a.$imag);c=b[0];d=b[1];  Awe=Y(a.$real);f=e[0];g=e[1];  A�return new $Complex128(d*g,c*f);    };$pkg.Cosh=X;Coshmath.Sincosmath/cmplx.Coshmath/cmplx.sinhcosh math/cmplx.sinhcoshY��Y=function(a){var $ptr,a,b,c,d,e,f,g,h,i;b=0;c=0;    if(A.Abs(a)<=0.5){    d=A.Sinh(a);e=A.Cosh(a);b=d;c=e;return[b,c];    }  B:f=A.Exp(a);  BLg=0.5/f;  B[f=f*(0.5);    h=f-g;i=f+g;b=h;c=i;return[b,c];    };sinhcoshmath.Abs	math.Coshmath.Exp	math.Sinhmath/cmplx.sinhcosh math/cmplx.SqrtZ��Z=function(a){var $ptr,a,b,c,d,e,f,g,h;    if(a.$imag===0){    if(a.$real===0){  JUreturn new $Complex128(0,0);    }    if(a.$real<0){  J�return new $Complex128(0,A.Sqrt(-a.$real));    }  J�return new $Complex128(A.Sqrt(a.$real),0);    }    if(a.$real===0){    if(a.$imag<0){  Kb=A.Sqrt(-0.5*a.$imag);  K%return new $Complex128(b,-b);    }  KAc=A.Sqrt(0.5*a.$imag);  Kareturn new $Complex128(c,c);    }  Kzd=a.$real;  K�e=a.$imag;  K�f=0;    if(A.Abs(d)>4||A.Abs(e)>4){  Ld=d*(0.25);  Le=e*(0.25);  L f=2;    }else{  L6d=d*(1.8014398509481984e+16);  L\e=e*(1.8014398509481984e+16);  Lyf=7.450580596923828e-09;    }  L�g=A.Hypot(d,e);  L�h=0;    if(d>0){  L�h=A.Sqrt(0.5*g+0.5*d);  L�g=f*A.Abs((0.5*e)/h);  Mh=h*(f);    }else{  M2g=A.Sqrt(0.5*g-0.5*d);  MQh=f*A.Abs((0.5*e)/g);  Msg=g*(f);    }    if(e<0){  M�return new $Complex128(h,-g);    }  M�return new $Complex128(h,g);    };$pkg.Sqrt=Z;Sqrtmath.Abs
math.Hypot	math.Sqrtmath/cmplx.Sqrt math/cmplx.TanAA��AA=function(a){var $ptr,a,b;  Ub=A.Cos(2*a.$real)+A.Cosh(2*a.$imag);    if(A.Abs(b)<0.25){  U[b=AD(a);    }    if(b===0){  U~return L();    }  U�return new $Complex128(A.Sin(2*a.$real)/b,A.Sinh(2*a.$imag)/b);    };$pkg.Tan=AA;Tanmath.Absmath.Cos	math.Coshmath.Sin	math.Sinhmath/cmplx.Infmath/cmplx.Tanmath/cmplx.tanSeries math/cmplx.TanhAB��AB=function(a){var $ptr,a,b;  WCb=A.Cosh(2*a.$real)+A.Cos(2*a.$imag);    if(b===0){  W�return L();    }  W�return new $Complex128(A.Sinh(2*a.$real)/b,A.Sin(2*a.$imag)/b);    };$pkg.Tanh=AB;Tanhmath.Cos	math.Coshmath.Sin	math.Sinhmath/cmplx.Infmath/cmplx.Tanh math/cmplx.reducePiAC��AC=function(a){var $ptr,a,b;  Yb=a/3.141592653589793;    if(b>=0){  Y3b=b+(0.5);    }else{  YHb=b-(0.5);    }  YUb=($flatten64((new $Int64(0,b))));  Y�return((a-b*3.141592651605606)-b*1.9841871479187034e-09)-b*1.1442377452219664e-17;    };reducePimath/cmplx.reducePi math/cmplx.tanSeriesAD��AD=function(a){var $ptr,a,b,c,d,e,f,g,h,i;  Z)b=A.Abs(2*a.$real);  ZEc=A.Abs(2*a.$imag);  Zab=AC(b);  Zrb=b*b;  Z}c=c*c;  Z�d=1;  Z�e=1;  Z�f=1;  Z�g=0;  Z�h=0;  Z�while(true){  Z�g=g+(1);  Z�f=f*(g);  Z�g=g+(1);  Z�f=f*(g);  Z�d=d*(b);  Z�e=e*(c);  Z�i=e+d;  [
i=i/(f);  [h=h+(i);  [g=g+(1);  [$f=f*(g);  [.g=g+(1);  [5f=f*(g);  [?d=d*(b);  [Ie=e*(c);  [Si=e-d;  [ai=i/(f);  [jh=h+(i);    if(!(A.Abs(i/h)>1.1102230246251565e-16)){  [�break;    }    }  \return h;    };	tanSeriesmath.Absmath/cmplx.reducePimath/cmplx.tanSeries math/cmplx.CotAE��AE=function(a){var $ptr,a,b;  ^�b=A.Cosh(2*a.$imag)-A.Cos(2*a.$real);    if(A.Abs(b)<0.25){  _b=AD(a);    }    if(b===0){  _*return L();    }  _;return new $Complex128(A.Sin(2*a.$real)/b,-A.Sinh(2*a.$imag)/b);    };$pkg.Cot=AE;Cotmath.Absmath.Cos	math.Coshmath.Sin	math.Sinhmath/cmplx.Cotmath/cmplx.Infmath/cmplx.tanSeries �k{"Base":24445,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/abs.go","Base":1,"Size":420,"Lines":[0,55,109,159,160,233,253,267,268,282,283,349],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/asin.go","Base":422,"Size":4640,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1162,1165,1181,1184,1209,1244,1283,1286,1314,1317,1330,1333,1373,1431,1491,1551,1609,1647,1648,1687,1724,1743,1772,1820,1824,1864,1867,1910,1923,1972,2032,2051,2096,2098,2099,2150,2188,2209,2228,2257,2305,2309,2350,2353,2366,2414,2477,2479,2480,2511,2514,2530,2533,2570,2573,2586,2589,2629,2687,2747,2807,2808,2849,2886,2900,2945,2947,2948,3001,3039,3053,3072,3117,3120,3165,3167,3168,3200,3203,3219,3222,3228,3247,3250,3258,3292,3335,3369,3403,3406,3438,3470,3502,3534,3566,3569,3605,3608,3637,3640,3653,3656,3696,3754,3814,3874,3936,3991,4021,4022,4064,4101,4135,4150,4153,4154,4179,4210,4223,4238,4241,4278,4296,4297,4314,4329,4342,4357,4360,4377,4398,4435,4437,4438,4492,4530,4576,4589,4638],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/conj.go","Base":5063,"Size":292,"Lines":[0,55,109,159,160,174,175,219],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/exp.go","Base":5356,"Size":1742,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1165,1168,1184,1187,1249,1252,1258,1277,1296,1304,1336,1339,1352,1355,1395,1453,1513,1573,1574,1624,1660,1684,1714,1740],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/isinf.go","Base":7099,"Size":506,"Lines":[0,55,109,159,160,174,175,189,190,257,289,344,358,361,375,377,378,434,458,478,504],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/isnan.go","Base":7606,"Size":596,"Lines":[0,55,109,159,160,174,175,189,190,248,279,311,321,377,392,442,456,459,473,475,476,525,549,568,594],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/log.go","Base":8203,"Size":2042,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1162,1165,1181,1184,1241,1268,1271,1277,1323,1331,1368,1371,1413,1416,1429,1432,1472,1530,1590,1650,1653,1712,1774,1801,1802,1845,1881,1925,1927,1928,1973,2011,2040],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/phase.go","Base":10246,"Size":372,"Lines":[0,55,109,159,160,174,175,189,190,250,299],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/polar.go","Base":10619,"Size":371,"Lines":[0,55,109,159,160,174,175,232,261,301,344,369],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/pow.go","Base":10991,"Size":2291,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1159,1162,1178,1181,1227,1263,1322,1325,1338,1341,1381,1439,1499,1500,1550,1598,1626,1709,1748,1798,1825,1836,1851,1863,1877,1892,1927,1932,1948,1962,1974,1978,2001,2004,2023,2042,2065,2068,2101,2118,2142,2161,2193,2232,2235,2263,2289],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/rect.go","Base":13283,"Size":348,"Lines":[0,55,109,159,160,174,175,189,190,257,295,320,346],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/sin.go","Base":13632,"Size":3389,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1158,1161,1177,1180,1186,1205,1208,1216,1219,1264,1267,1294,1297,1310,1313,1353,1411,1471,1531,1569,1570,1600,1636,1666,1695,1723,1725,1726,1753,1756,1772,1775,1811,1862,1865,1878,1881,1921,1979,2039,2040,2082,2119,2149,2178,2206,2208,2209,2236,2239,2255,2258,2264,2283,2286,2294,2297,2342,2345,2358,2361,2401,2459,2519,2579,2580,2612,2648,2678,2707,2736,2738,2739,2768,2771,2787,2790,2837,2840,2853,2856,2896,2954,3014,3015,3059,3096,3126,3155,3183,3185,3186,3213,3257,3282,3318,3321,3339,3354,3364,3387],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/sqrt.go","Base":17022,"Size":2882,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1156,1159,1175,1178,1211,1214,1243,1273,1276,1305,1335,1338,1397,1429,1432,1492,1562,1565,1578,1581,1621,1679,1739,1799,1800,1838,1928,1965,1984,2004,2028,2032,2051,2093,2097,2137,2140,2159,2178,2212,2237,2241,2273,2296,2299,2313,2327,2346,2399,2440,2452,2464,2476,2486,2524,2553,2597,2600,2623,2638,2650,2681,2715,2728,2738,2769,2803,2816,2819,2831,2855,2858,2880],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.VLfzHbnnK8/goroot/src/math/cmplx/tan.go","Base":19905,"Size":4539,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1161,1164,1180,1183,1189,1208,1211,1219,1222,1256,1291,1324,1327,1388,1444,1473,1476,1503,1506,1519,1522,1562,1620,1680,1740,1800,1801,1834,1870,1919,1944,1963,1966,1979,1994,1997,2060,2062,2063,2093,2096,2112,2115,2173,2176,2189,2192,2232,2290,2350,2351,2396,2433,2482,2495,2510,2513,2576,2578,2579,2633,2668,2677,2714,2774,2834,2894,2897,2915,2928,2939,2949,2960,2963,3013,3051,3053,3054,3104,3143,3175,3203,3231,3248,3259,3270,3281,3292,3302,3313,3323,3330,3337,3347,3354,3364,3374,3384,3399,3408,3417,3418,3425,3435,3442,3452,3462,3472,3486,3495,3504,3537,3614,3637,3646,3650,3653,3663,3665,3666,3696,3699,3715,3718,3724,3743,3746,3754,3757,3791,3826,3859,3862,3917,3974,3997,4000,4013,4016,4056,4114,4174,4234,4274,4275,4310,4346,4395,4420,4439,4442,4455,4470,4473,4537],"Infos":null}]}
 