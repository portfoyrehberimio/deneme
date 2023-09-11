


// coin listesi
        var coinList = `PAXG
BTC
ETH
BNB
FTM
TRX
ARPA
FET
ATOM
ANKR
MATIC
AGIX
MANA
ADA
SAND
AAVE
LRC
STORJ
BAKE
SHIB
ENJ
LTC
CHR
ONE
ALICE
DOT
OCEAN
XMR
WAVES
ANT
BAT
SOL
APE
DUSK
STX
CAKE
CHZ
BTT
ENS
GHST
GMT
HBAR
GALA
LINK
EGLD
RUNE
ETC
ZRX
INJ
STRAX
XRP
COMP
MKR
SUSHI
FIDA
OMG
SANTOS
XTZ
ZEN
LUNC
RNDR
QTUM
PERP
NMR
AVA
CELR
ROSE
ACH
YFI
DOGE
ALGO
NEO
FLUX
VGX
AVAX
AXS
AUCTION
DASH
OKB
MPL
NEAR
UTK
TWT
JST
SUPER
RLC
VET
BCH
RIF
ID
CKB
PHA
REN
SLP
ELF
COMBO
OG
CRV
UMA
KNC
ICX
ICP
LAZIO
TLM
ZIL
ALPINE
ETN
AR
NKN
LPT
SRM
c98
OP
OGN
HOT
ZEC
CFX
RVN
TRU
FIRO
FXS
DF
RPL
IRIS
HIVE
GNS
REP
POLS
ERN
QUACK
GRT
SC
SKL
MBOX
XVS
CEEK
SNX
FIL
GMX
TROY
SXP
WAXP
JOE
1INCH
GNO
BAND
BNT
POND
REEF
TSUKA
AUDIO
MAGIC
MASK
CTSI
API3
SPELL
IOTX
DYDX
OSMO
CTK
LEO
ALPACA
KDA
METIS
ELON
BAL
CHESS
SFUND
RACA
KAVA
CELO
PSG
KLAY
DENT
QUICK
BADGER
CRO
XEM
KLV
GLM
CITY
LYXE
APT
MOVR
QNT
ARB
THETA
ALPHA
LUNA
ATLAS
XDC
RAY
JASMY
LDO
ALI
ACM
CSPR
MINA
YGG
KCS
BURGER
DEXE
NEXO
RSR
XLM
JUV
BTG
BSW
BAR
DCR
UNI
TON
MIOTA
SYS
DERO
FLOKI
GT
FTT
KEEP
BIT
HT
HNT
AFC
BDX
EWT
IMX
ETHW
WOJAK
PIVX
ILV
DAO
WEMIX
HOOK
POLY
BSV
CFG
SCRT
RON
CREAM
FLOW
SFP
BABYDOGE
CEL
BTM
EDU
GLMR
SNT
CVX
INTER
PEPE
FORT
BLUR
GAFI
NYM
MC
POLIS
ORCA
GODS
ZKS
RBN`;


// JSON verileri
var coinData =[
    {
        "Coin": "PAXG",
        "Genel Puan": "100,0",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "5",
        "Market Hacmi": "5",
        "Varolma Süresi": "5",
        "BTC Korelasyonu": "5",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "5",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,75",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "0",
        "Kısa Vade Al": "6",
        "Orta Vade": "0,78",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "7",
        "Uzun Vade": "0,75",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "9"
    },
    {
        "Coin": "BTC",
        "Genel Puan": "84,0",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "2",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "4",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "5",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "5",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,86",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "6",
        "Orta Vade": "0,78",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "7",
        "Uzun Vade": "0,75",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "9"
    },
    {
        "Coin": "ETH",
        "Genel Puan": "80,0",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "2",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "4",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "5",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "5",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,86",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "6",
        "Orta Vade": "0,78",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "7",
        "Uzun Vade": "0,75",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "9"
    },
    {
        "Coin": "BNB",
        "Genel Puan": "76,0",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "2",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "5",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,80",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "4",
        "Orta Vade": "0,83",
        "Orta Vade Sat": "1",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,78",
        "Uzun Vade Sat": "2",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "FTM",
        "Genel Puan": "74,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,67",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "4",
        "Orta Vade": "0,75",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "6",
        "Uzun Vade": "0,73",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "8"
    },
    {
        "Coin": "TRX",
        "Genel Puan": "72,3",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,75",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,67",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "ARPA",
        "Genel Puan": "72,1",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,57",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "4",
        "Orta Vade": "0,63",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,64",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "FET",
        "Genel Puan": "70,6",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "ATOM",
        "Genel Puan": "69,5",
        "Kar Potansiyeli": "2",
        "Enflasyon": "3",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,57",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "6",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "ANKR",
        "Genel Puan": "69,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,71",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,70",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "MATIC",
        "Genel Puan": "68,9",
        "Kar Potansiyeli": "2",
        "Enflasyon": "4",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,63",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "AGIX",
        "Genel Puan": "67,6",
        "Kar Potansiyeli": "2",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "1",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,57",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "4",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,55",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "MANA",
        "Genel Puan": "67,6",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,67",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "ADA",
        "Genel Puan": "67,6",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "2",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,63",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,64",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "SAND",
        "Genel Puan": "67,5",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "2",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,80",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "4",
        "Orta Vade": "0,86",
        "Orta Vade Sat": "1",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "6",
        "Uzun Vade": "0,70",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "AAVE",
        "Genel Puan": "66,7",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "2",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,67",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "5",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,80",
        "Orta Vade Sat": "1",
        "Orta Vade Nötr": "5",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,75",
        "Uzun Vade Sat": "2",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "LRC",
        "Genel Puan": "66,6",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "2",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,67",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "STORJ",
        "Genel Puan": "66,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,67",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "BAKE",
        "Genel Puan": "66,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,67",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "SHIB",
        "Genel Puan": "66,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "ENJ",
        "Genel Puan": "66,2",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,67",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "LTC",
        "Genel Puan": "66,1",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "CHR",
        "Genel Puan": "66,1",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,63",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "ONE",
        "Genel Puan": "66,0",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,71",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,70",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "ALICE",
        "Genel Puan": "65,7",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,63",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,64",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "DOT",
        "Genel Puan": "65,6",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,75",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,83",
        "Orta Vade Sat": "1",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,78",
        "Uzun Vade Sat": "2",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "OCEAN",
        "Genel Puan": "65,5",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "XMR",
        "Genel Puan": "65,3",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "WAVES",
        "Genel Puan": "65,1",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,71",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,70",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "ANT",
        "Genel Puan": "65,0",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,00",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "5",
        "Kısa Vade Al": "0",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,38",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "BAT",
        "Genel Puan": "65,0",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "SOL",
        "Genel Puan": "65,0",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "2",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "2",
        "toplam puan": "13",
        "Kısa Vade": "0,67",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "4",
        "Orta Vade": "0,63",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "APE",
        "Genel Puan": "65,0",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "5",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "6",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,57",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "6",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "DUSK",
        "Genel Puan": "64,7",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,67",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "STX",
        "Genel Puan": "64,5",
        "Kar Potansiyeli": "2",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "CAKE",
        "Genel Puan": "64,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,71",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,75",
        "Uzun Vade Sat": "2",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "CHZ",
        "Genel Puan": "64,1",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "13",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "BTT",
        "Genel Puan": "64,0",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "2",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "ENS",
        "Genel Puan": "63,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "4",
        "Market Hacmi": "2",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "GHST",
        "Genel Puan": "63,7",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,42",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "GMT",
        "Genel Puan": "63,7",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "HBAR",
        "Genel Puan": "63,6",
        "Kar Potansiyeli": "3",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "13",
        "Kısa Vade": "0,67",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "4",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "GALA",
        "Genel Puan": "63,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,63",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,64",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "LINK",
        "Genel Puan": "63,3",
        "Kar Potansiyeli": "3",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "2",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,40",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "5",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "EGLD",
        "Genel Puan": "62,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,63",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "RUNE",
        "Genel Puan": "62,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "2",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "ETC",
        "Genel Puan": "62,7",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,55",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "ZRX",
        "Genel Puan": "62,7",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,60",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "5",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,63",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "INJ",
        "Genel Puan": "62,6",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "STRAX",
        "Genel Puan": "62,3",
        "Kar Potansiyeli": "2",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,44",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "XRP",
        "Genel Puan": "62,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "COMP",
        "Genel Puan": "62,2",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,75",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,83",
        "Orta Vade Sat": "1",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,78",
        "Uzun Vade Sat": "2",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "MKR",
        "Genel Puan": "62,1",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,55",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "SUSHI",
        "Genel Puan": "62,0",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,75",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,83",
        "Orta Vade Sat": "1",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,78",
        "Uzun Vade Sat": "2",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "FIDA",
        "Genel Puan": "61,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,63",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,64",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "OMG",
        "Genel Puan": "61,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,63",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,64",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "SANTOS",
        "Genel Puan": "61,6",
        "Kar Potansiyeli": "3",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "XTZ",
        "Genel Puan": "61,5",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "ZEN",
        "Genel Puan": "61,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,63",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,64",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "LUNC",
        "Genel Puan": "61,2",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "2",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "RNDR",
        "Genel Puan": "61,2",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "13",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "QTUM",
        "Genel Puan": "61,0",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "PERP",
        "Genel Puan": "60,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "NMR",
        "Genel Puan": "60,8",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,63",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "AVA",
        "Genel Puan": "60,7",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,55",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "CELR",
        "Genel Puan": "60,7",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "ROSE",
        "Genel Puan": "60,5",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,75",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,83",
        "Orta Vade Sat": "1",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,75",
        "Uzun Vade Sat": "2",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "ACH",
        "Genel Puan": "60,5",
        "Kar Potansiyeli": "3",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "YFI",
        "Genel Puan": "60,5",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,67",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "DOGE",
        "Genel Puan": "60,4",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "ALGO",
        "Genel Puan": "60,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "13",
        "Kısa Vade": "0,67",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "5",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,80",
        "Orta Vade Sat": "1",
        "Orta Vade Nötr": "5",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,75",
        "Uzun Vade Sat": "2",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "NEO",
        "Genel Puan": "60,2",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "FLUX",
        "Genel Puan": "60,2",
        "Kar Potansiyeli": "3",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "VGX",
        "Genel Puan": "59,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,63",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,64",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "AVAX",
        "Genel Puan": "59,5",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "13",
        "Kısa Vade": "0,67",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "4",
        "Orta Vade": "0,63",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,67",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "AXS",
        "Genel Puan": "59,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "5",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "2",
        "toplam puan": "13",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "AUCTION",
        "Genel Puan": "59,1",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "DASH",
        "Genel Puan": "59,0",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "OKB",
        "Genel Puan": "59,0",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "MPL",
        "Genel Puan": "59,0",
        "Kar Potansiyeli": "2",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "13",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "NEAR",
        "Genel Puan": "59,0",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "13",
        "Kısa Vade": "0,75",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,80",
        "Orta Vade Sat": "1",
        "Orta Vade Nötr": "5",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,83",
        "Uzun Vade Sat": "1",
        "Uzun Vade Nötr": "7",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "UTK",
        "Genel Puan": "58,9",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "TWT",
        "Genel Puan": "58,8",
        "Kar Potansiyeli": "2",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,30",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "JST",
        "Genel Puan": "58,8",
        "Kar Potansiyeli": "2",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "SUPER",
        "Genel Puan": "58,6",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "RLC",
        "Genel Puan": "58,3",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "VET",
        "Genel Puan": "58,2",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "BCH",
        "Genel Puan": "57,8",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "RIF",
        "Genel Puan": "57,7",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,29",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "ID",
        "Genel Puan": "57,5",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,00",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "0",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "CKB",
        "Genel Puan": "57,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,67",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "4",
        "Orta Vade": "0,71",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,70",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "PHA",
        "Genel Puan": "57,1",
        "Kar Potansiyeli": "3",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "REN",
        "Genel Puan": "56,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "SLP",
        "Genel Puan": "56,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "ELF",
        "Genel Puan": "56,9",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "2",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,29",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,30",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "COMBO",
        "Genel Puan": "56,6",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "1",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,56",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,58",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "OG",
        "Genel Puan": "56,6",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "CRV",
        "Genel Puan": "56,5",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "UMA",
        "Genel Puan": "56,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "KNC",
        "Genel Puan": "56,3",
        "Kar Potansiyeli": "3",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,40",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "5",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "ICX",
        "Genel Puan": "56,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,67",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "ICP",
        "Genel Puan": "56,2",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "2",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "LAZIO",
        "Genel Puan": "56,1",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,00",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "0",
        "Orta Vade": "0,14",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,22",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "TLM",
        "Genel Puan": "55,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "ZIL",
        "Genel Puan": "55,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "ALPINE",
        "Genel Puan": "55,8",
        "Kar Potansiyeli": "3",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "6",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,43",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "6",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "ETN",
        "Genel Puan": "55,7",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "AR",
        "Genel Puan": "55,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "NKN",
        "Genel Puan": "55,4",
        "Kar Potansiyeli": "3",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,55",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "LPT",
        "Genel Puan": "55,3",
        "Kar Potansiyeli": "3",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,60",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "5",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,57",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "6",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "SRM",
        "Genel Puan": "55,2",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,71",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "c98",
        "Genel Puan": "55,2",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "OP",
        "Genel Puan": "55,0",
        "Kar Potansiyeli": "1",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "2",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,14",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,30",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "OGN",
        "Genel Puan": "54,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "HOT",
        "Genel Puan": "54,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "2",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,44",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "ZEC",
        "Genel Puan": "54,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,63",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "CFX",
        "Genel Puan": "54,7",
        "Kar Potansiyeli": "2",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "RVN",
        "Genel Puan": "54,6",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,55",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "TRU",
        "Genel Puan": "54,5",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "FIRO",
        "Genel Puan": "54,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "FXS",
        "Genel Puan": "54,1",
        "Kar Potansiyeli": "2",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "4",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "DF",
        "Genel Puan": "54,0",
        "Kar Potansiyeli": "3",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "5",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "6",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "3",
        "Uzun Vade Nötr": "7",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "RPL",
        "Genel Puan": "53,8",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "IRIS",
        "Genel Puan": "53,6",
        "Kar Potansiyeli": "3",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "HIVE",
        "Genel Puan": "53,6",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "GNS",
        "Genel Puan": "53,6",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,18",
        "Uzun Vade Sat": "9",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "REP",
        "Genel Puan": "53,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "POLS",
        "Genel Puan": "53,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,44",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "ERN",
        "Genel Puan": "53,2",
        "Kar Potansiyeli": "3",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "QUACK",
        "Genel Puan": "53,0",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "GRT",
        "Genel Puan": "52,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "SC",
        "Genel Puan": "52,6",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "SKL",
        "Genel Puan": "52,6",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "MBOX",
        "Genel Puan": "52,5",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,67",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "4",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "XVS",
        "Genel Puan": "52,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,44",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "CEEK",
        "Genel Puan": "52,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "2",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "SNX",
        "Genel Puan": "52,2",
        "Kar Potansiyeli": "2",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "FIL",
        "Genel Puan": "52,2",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,75",
        "Kısa Vade Sat": "1",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,67",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "GMX",
        "Genel Puan": "52,1",
        "Kar Potansiyeli": "2",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "2",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,00",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "0",
        "Uzun Vade": "0,22",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "TROY",
        "Genel Puan": "52,1",
        "Kar Potansiyeli": "1",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "SXP",
        "Genel Puan": "52,0",
        "Kar Potansiyeli": "3",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "WAXP",
        "Genel Puan": "51,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "2",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "JOE",
        "Genel Puan": "51,8",
        "Kar Potansiyeli": "3",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "1INCH",
        "Genel Puan": "51,7",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "GNO",
        "Genel Puan": "51,6",
        "Kar Potansiyeli": "2",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,44",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "BAND",
        "Genel Puan": "51,5",
        "Kar Potansiyeli": "3",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "BNT",
        "Genel Puan": "51,5",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "2",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "2",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "POND",
        "Genel Puan": "51,5",
        "Kar Potansiyeli": "3",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "REEF",
        "Genel Puan": "51,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "1",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "2",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,55",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "TSUKA",
        "Genel Puan": "51,4",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,27",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "AUDIO",
        "Genel Puan": "51,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "2",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "MAGIC",
        "Genel Puan": "51,3",
        "Kar Potansiyeli": "1",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "1",
        "Market Hacmi": "1",
        "Varolma Süresi": "2",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,29",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "MASK",
        "Genel Puan": "51,2",
        "Kar Potansiyeli": "2",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "1",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,30",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "CTSI",
        "Genel Puan": "51,2",
        "Kar Potansiyeli": "3",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "API3",
        "Genel Puan": "51,1",
        "Kar Potansiyeli": "2",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,27",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "SPELL",
        "Genel Puan": "51,1",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "IOTX",
        "Genel Puan": "51,0",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "DYDX",
        "Genel Puan": "50,9",
        "Kar Potansiyeli": "2",
        "Enflasyon": "1",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "OSMO",
        "Genel Puan": "50,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "4",
        "Market Hacmi": "2",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "CTK",
        "Genel Puan": "50,8",
        "Kar Potansiyeli": "2",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "LEO",
        "Genel Puan": "50,7",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "2",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "2",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "ALPACA",
        "Genel Puan": "50,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,44",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "KDA",
        "Genel Puan": "50,1",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "2",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "METIS",
        "Genel Puan": "50,0",
        "Kar Potansiyeli": "2",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "ELON",
        "Genel Puan": "49,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "BAL",
        "Genel Puan": "49,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "2",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "CHESS",
        "Genel Puan": "49,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,40",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "5",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,38",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "SFUND",
        "Genel Puan": "49,6",
        "Kar Potansiyeli": "3",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "RACA",
        "Genel Puan": "49,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "KAVA",
        "Genel Puan": "48,8",
        "Kar Potansiyeli": "3",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "CELO",
        "Genel Puan": "48,6",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,00",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "5",
        "Kısa Vade Al": "0",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "2",
        "Orta Vade Nötr": "6",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "7",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "PSG",
        "Genel Puan": "48,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,38",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "KLAY",
        "Genel Puan": "48,0",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,44",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "DENT",
        "Genel Puan": "47,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "1",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,44",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "QUICK",
        "Genel Puan": "47,6",
        "Kar Potansiyeli": "1",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,29",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "BADGER",
        "Genel Puan": "47,5",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "1",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,44",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "CRO",
        "Genel Puan": "47,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,55",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "XEM",
        "Genel Puan": "47,4",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "KLV",
        "Genel Puan": "47,1",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "GLM",
        "Genel Puan": "46,9",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "CITY",
        "Genel Puan": "46,3",
        "Kar Potansiyeli": "2",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,00",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "0",
        "Uzun Vade": "0,11",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "1"
    },
    {
        "Coin": "LYXE",
        "Genel Puan": "46,2",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "APT",
        "Genel Puan": "46,1",
        "Kar Potansiyeli": "1",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "2",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,00",
        "Orta Vade Sat": "7",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "0",
        "Uzun Vade": "0,20",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "MOVR",
        "Genel Puan": "45,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "QNT",
        "Genel Puan": "45,9",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "2",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "ARB",
        "Genel Puan": "45,9",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,00",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "0",
        "Orta Vade": "0,17",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,22",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "THETA",
        "Genel Puan": "45,7",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,60",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "ALPHA",
        "Genel Puan": "45,6",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "LUNA",
        "Genel Puan": "45,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "1",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "ATLAS",
        "Genel Puan": "45,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "5",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,00",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "5",
        "Kısa Vade Al": "0",
        "Orta Vade": "0,40",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "5",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,43",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "6",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "XDC",
        "Genel Puan": "45,3",
        "Kar Potansiyeli": "1",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "RAY",
        "Genel Puan": "45,1",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "2",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "JASMY",
        "Genel Puan": "45,0",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "1",
        "Market Hacmi": "2",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "2",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,14",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,30",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "LDO",
        "Genel Puan": "44,9",
        "Kar Potansiyeli": "1",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,38",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "ALI",
        "Genel Puan": "44,8",
        "Kar Potansiyeli": "1",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "1",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,17",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "ACM",
        "Genel Puan": "44,7",
        "Kar Potansiyeli": "1",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,14",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,20",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "CSPR",
        "Genel Puan": "44,1",
        "Kar Potansiyeli": "1",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,17",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,22",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "MINA",
        "Genel Puan": "43,9",
        "Kar Potansiyeli": "2",
        "Enflasyon": "1",
        "Senelik Faiz": "3",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,20",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "5",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,29",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "6",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "YGG",
        "Genel Puan": "43,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "KCS",
        "Genel Puan": "43,8",
        "Kar Potansiyeli": "3",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "BURGER",
        "Genel Puan": "43,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,56",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,58",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "DEXE",
        "Genel Puan": "43,6",
        "Kar Potansiyeli": "1",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "2",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,00",
        "Kısa Vade Sat": "6",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "0",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,18",
        "Uzun Vade Sat": "9",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "NEXO",
        "Genel Puan": "43,4",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "RSR",
        "Genel Puan": "43,0",
        "Kar Potansiyeli": "3",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "XLM",
        "Genel Puan": "42,8",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "JUV",
        "Genel Puan": "42,5",
        "Kar Potansiyeli": "1",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,27",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "BTG",
        "Genel Puan": "42,1",
        "Kar Potansiyeli": "2",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "BSW",
        "Genel Puan": "42,1",
        "Kar Potansiyeli": "1",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,17",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,22",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "BAR",
        "Genel Puan": "41,9",
        "Kar Potansiyeli": "2",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,27",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "DCR",
        "Genel Puan": "41,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,56",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,58",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "7"
    },
    {
        "Coin": "UNI",
        "Genel Puan": "41,6",
        "Kar Potansiyeli": "2",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,60",
        "Kısa Vade Sat": "2",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "TON",
        "Genel Puan": "41,4",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "3",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "MIOTA",
        "Genel Puan": "41,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "2",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "SYS",
        "Genel Puan": "41,2",
        "Kar Potansiyeli": "4",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,56",
        "Uzun Vade Sat": "4",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "DERO",
        "Genel Puan": "40,4",
        "Kar Potansiyeli": "3",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,38",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "FLOKI",
        "Genel Puan": "40,4",
        "Kar Potansiyeli": "2",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "1",
        "Market Hacmi": "2",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,44",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "GT",
        "Genel Puan": "40,3",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "2",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,27",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "FTT",
        "Genel Puan": "40,3",
        "Kar Potansiyeli": "1",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,50",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,55",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "KEEP",
        "Genel Puan": "40,1",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "4",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,55",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "BIT",
        "Genel Puan": "40,0",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "4",
        "Market Hacmi": "2",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "HT",
        "Genel Puan": "39,7",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,55",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "HNT",
        "Genel Puan": "39,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,56",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "5",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "6"
    },
    {
        "Coin": "AFC",
        "Genel Puan": "37,7",
        "Kar Potansiyeli": "1",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,00",
        "Kısa Vade Sat": "6",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "0",
        "Orta Vade": "0,00",
        "Orta Vade Sat": "8",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "0",
        "Uzun Vade": "0,00",
        "Uzun Vade Sat": "11",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "0"
    },
    {
        "Coin": "BDX",
        "Genel Puan": "37,7",
        "Kar Potansiyeli": "1",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "5",
        "Market Hacmi": "2",
        "Varolma Süresi": "2",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,14",
        "Kısa Vade Sat": "6",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,22",
        "Orta Vade Sat": "7",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,18",
        "Uzun Vade Sat": "9",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "EWT",
        "Genel Puan": "37,6",
        "Kar Potansiyeli": "3",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,29",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "IMX",
        "Genel Puan": "37,6",
        "Kar Potansiyeli": "1",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "2",
        "Market Hacmi": "2",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,14",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,20",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "ETHW",
        "Genel Puan": "37,3",
        "Kar Potansiyeli": "2",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "1",
        "Market Hacmi": "1",
        "Varolma Süresi": "2",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "4",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,27",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "WOJAK",
        "Genel Puan": "37,2",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,14",
        "Kısa Vade Sat": "6",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,13",
        "Orta Vade Sat": "7",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,18",
        "Uzun Vade Sat": "9",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "PIVX",
        "Genel Puan": "36,9",
        "Kar Potansiyeli": "2",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "3",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "ILV",
        "Genel Puan": "36,2",
        "Kar Potansiyeli": "2",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "DAO",
        "Genel Puan": "35,5",
        "Kar Potansiyeli": "2",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,29",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,30",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "WEMIX",
        "Genel Puan": "35,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "4",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,43",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "3",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,45",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "HOOK",
        "Genel Puan": "34,8",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,22",
        "Orta Vade Sat": "7",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,25",
        "Uzun Vade Sat": "9",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "POLY",
        "Genel Puan": "34,2",
        "Kar Potansiyeli": "2",
        "Enflasyon": "3",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "BSV",
        "Genel Puan": "34,1",
        "Kar Potansiyeli": "3",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "3",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,29",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "CFG",
        "Genel Puan": "34,0",
        "Kar Potansiyeli": "3",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,17",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "SCRT",
        "Genel Puan": "33,8",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,40",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,57",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "4",
        "Uzun Vade": "0,50",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "RON",
        "Genel Puan": "33,3",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "5",
        "Market Hacmi": "2",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,14",
        "Kısa Vade Sat": "6",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,11",
        "Orta Vade Sat": "8",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,08",
        "Uzun Vade Sat": "11",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "1"
    },
    {
        "Coin": "CREAM",
        "Genel Puan": "32,7",
        "Kar Potansiyeli": "3",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,43",
        "Orta Vade Sat": "4",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,40",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "FLOW",
        "Genel Puan": "32,2",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "2",
        "Market Hacmi": "2",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,50",
        "Orta Vade Sat": "3",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,44",
        "Uzun Vade Sat": "5",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "SFP",
        "Genel Puan": "30,5",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "4",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,29",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,30",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "BABYDOGE",
        "Genel Puan": "30,4",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "2",
        "Market Hacmi": "2",
        "Varolma Süresi": "2",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,14",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,20",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "CEL",
        "Genel Puan": "30,3",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "2",
        "Düşüş Performansı": "1",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,14",
        "Kısa Vade Sat": "6",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,33",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,42",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "5"
    },
    {
        "Coin": "BTM",
        "Genel Puan": "30,3",
        "Kar Potansiyeli": "1",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "4",
        "toplam puan": "",
        "Kısa Vade": "0,00",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "0",
        "Orta Vade": "0,29",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,33",
        "Uzun Vade Sat": "6",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "EDU",
        "Genel Puan": "30,1",
        "Kar Potansiyeli": "1",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,14",
        "Kısa Vade Sat": "6",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,11",
        "Orta Vade Sat": "8",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,17",
        "Uzun Vade Sat": "10",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "GLMR",
        "Genel Puan": "29,6",
        "Kar Potansiyeli": "1",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,00",
        "Orta Vade Sat": "7",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "0",
        "Uzun Vade": "0,10",
        "Uzun Vade Sat": "9",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "1"
    },
    {
        "Coin": "SNT",
        "Genel Puan": "29,1",
        "Kar Potansiyeli": "2",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,29",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "CVX",
        "Genel Puan": "28,6",
        "Kar Potansiyeli": "4",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "1",
        "Market Hacmi": "2",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "3",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,17",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "4",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,22",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "INTER",
        "Genel Puan": "28,4",
        "Kar Potansiyeli": "1",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,00",
        "Kısa Vade Sat": "6",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "0",
        "Orta Vade": "0,00",
        "Orta Vade Sat": "8",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "0",
        "Uzun Vade": "0,09",
        "Uzun Vade Sat": "10",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "1"
    },
    {
        "Coin": "PEPE",
        "Genel Puan": "28,4",
        "Kar Potansiyeli": "1",
        "Enflasyon": "4",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,13",
        "Orta Vade Sat": "7",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,18",
        "Uzun Vade Sat": "9",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "FORT",
        "Genel Puan": "28,2",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "2",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,20",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,20",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "2"
    },
    {
        "Coin": "BLUR",
        "Genel Puan": "26,2",
        "Kar Potansiyeli": "1",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,14",
        "Kısa Vade Sat": "6",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,11",
        "Orta Vade Sat": "8",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,08",
        "Uzun Vade Sat": "11",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "1"
    },
    {
        "Coin": "GAFI",
        "Genel Puan": "25,7",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "1",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,14",
        "Kısa Vade Sat": "6",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "NYM",
        "Genel Puan": "25,1",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,14",
        "Kısa Vade Sat": "6",
        "Kısa Vade Nötr": "1",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,11",
        "Orta Vade Sat": "8",
        "Orta Vade Nötr": "1",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,08",
        "Uzun Vade Sat": "11",
        "Uzun Vade Nötr": "1",
        "Uzun Vade Al": "1"
    },
    {
        "Coin": "MC",
        "Genel Puan": "23,9",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "3",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "2",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,25",
        "Kısa Vade Sat": "3",
        "Kısa Vade Nötr": "4",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,00",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "5",
        "Orta Vade Al": "0",
        "Uzun Vade": "0,13",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "5",
        "Uzun Vade Al": "1"
    },
    {
        "Coin": "POLIS",
        "Genel Puan": "23,4",
        "Kar Potansiyeli": "2",
        "Enflasyon": "1",
        "Senelik Faiz": "5",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "2",
        "Market Hacmi": "1",
        "Varolma Süresi": "4",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "3",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,36",
        "Uzun Vade Sat": "7",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "4"
    },
    {
        "Coin": "ORCA",
        "Genel Puan": "23,0",
        "Kar Potansiyeli": "4",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "4",
        "Düşüş Performansı": "4",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "3",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,33",
        "Kısa Vade Sat": "4",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "2",
        "Orta Vade": "0,38",
        "Orta Vade Sat": "5",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "3",
        "Uzun Vade": "0,27",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "GODS",
        "Genel Puan": "22,5",
        "Kar Potansiyeli": "2",
        "Enflasyon": "1",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "5",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,00",
        "Orta Vade Sat": "7",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "0",
        "Uzun Vade": "0,10",
        "Uzun Vade Sat": "9",
        "Uzun Vade Nötr": "3",
        "Uzun Vade Al": "1"
    },
    {
        "Coin": "ZKS",
        "Genel Puan": "22,4",
        "Kar Potansiyeli": "4",
        "Enflasyon": "5",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "5",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "1",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "2",
        "Yatırımcı Puanı": "1",
        "Yıllara Göre Hacim Farkı": "1",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "1",
        "toplam puan": "",
        "Kısa Vade": "0,17",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "2",
        "Kısa Vade Al": "1",
        "Orta Vade": "0,25",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "2",
        "Orta Vade Al": "2",
        "Uzun Vade": "0,27",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "2",
        "Uzun Vade Al": "3"
    },
    {
        "Coin": "RBN",
        "Genel Puan": "20,7",
        "Kar Potansiyeli": "1",
        "Enflasyon": "2",
        "Senelik Faiz": "1",
        "Yükseliş Performansı": "1",
        "Düşüş Performansı": "3",
        "Market Hacmi": "1",
        "Varolma Süresi": "3",
        "BTC Korelasyonu": "3",
        "Sektör Çeşitlilik Puanı": "1",
        "Yatırımcı Puanı": "2",
        "Yıllara Göre Hacim Farkı": "3",
        "Günlük/Toplam Hacim": "1",
        "Dolaşım Miktarı Düzeni (Beta)": "5",
        "toplam puan": "",
        "Kısa Vade": "0,00",
        "Kısa Vade Sat": "5",
        "Kısa Vade Nötr": "3",
        "Kısa Vade Al": "0",
        "Orta Vade": "0,14",
        "Orta Vade Sat": "6",
        "Orta Vade Nötr": "3",
        "Orta Vade Al": "1",
        "Uzun Vade": "0,11",
        "Uzun Vade Sat": "8",
        "Uzun Vade Nötr": "4",
        "Uzun Vade Al": "1"
    }
];
  

var projeismi=[

    [
        [
            "BTC",
            "Bitcoin"
        ],
        [
            "ETH",
            "Ethereum"
        ],
        [
            "USDT",
            "Tether"
        ],
        [
            "BNB",
            "BNB"
        ],
        [
            "XRP",
            "XRP"
        ],
        [
            "USDC",
            "USD Coin"
        ],
        [
            "STETH",
            "Lido Staked Ether"
        ],
        [
            "DOGE",
            "Dogecoin"
        ],
        [
            "ADA",
            "Cardano"
        ],
        [
            "SOL",
            "Solana"
        ],
        [
            "TRX",
            "TRON"
        ],
        [
            "TON",
            "Toncoin"
        ],
        [
            "DOT",
            "Polkadot"
        ],
        [
            "MATIC",
            "Polygon"
        ],
        [
            "LTC",
            "Litecoin"
        ],
        [
            "SHIB",
            "Shiba Inu"
        ],
        [
            "WBTC",
            "Wrapped Bitcoin"
        ],
        [
            "BCH",
            "Bitcoin Cash"
        ],
        [
            "DAI",
            "Dai"
        ],
        [
            "AVAX",
            "Avalanche"
        ],
        [
            "LEO",
            "LEO Token"
        ],
        [
            "UNI",
            "Uniswap"
        ],
        [
            "XLM",
            "Stellar"
        ],
        [
            "LINK",
            "Chainlink"
        ],
        [
            "BUSD",
            "Binance USD"
        ],
        [
            "TUSD",
            "TrueUSD"
        ],
        [
            "OKB",
            "OKB"
        ],
        [
            "XMR",
            "Monero"
        ],
        [
            "ETC",
            "Ethereum Classic"
        ],
        [
            "ATOM",
            "Cosmos Hub"
        ],
        [
            "HBAR",
            "Hedera"
        ],
        [
            "ICP",
            "Internet Computer"
        ],
        [
            "FIL",
            "Filecoin"
        ],
        [
            "MNT",
            "Mantle"
        ],
        [
            "QNT",
            "Quant"
        ],
        [
            "LDO",
            "Lido DAO"
        ],
        [
            "CRO",
            "Cronos"
        ],
        [
            "APT",
            "Aptos"
        ],
        [
            "ARB",
            "Arbitrum"
        ],
        [
            "VET",
            "VeChain"
        ],
        [
            "NEAR",
            "NEAR Protocol"
        ],
        [
            "OP",
            "Optimism"
        ],
        [
            "MKR",
            "Maker"
        ],
        [
            "RETH",
            "Rocket Pool ETH"
        ],
        [
            "GRT",
            "The Graph"
        ],
        [
            "AAVE",
            "Aave"
        ],
        [
            "XDC",
            "XDC Network"
        ],
        [
            "FRAX",
            "Frax"
        ],
        [
            "WBT",
            "WhiteBIT Coin"
        ],
        [
            "ALGO",
            "Algorand"
        ],
        [
            "STX",
            "Stacks"
        ],
        [
            "USDD",
            "USDD"
        ],
        [
            "KAS",
            "Kaspa"
        ],
        [
            "EGLD",
            "MultiversX"
        ],
        [
            "EOS",
            "EOS"
        ],
        [
            "XTZ",
            "Tezos"
        ],
        [
            "SAND",
            "The Sandbox"
        ],
        [
            "IMX",
            "ImmutableX"
        ],
        [
            "SNX",
            "Synthetix Network"
        ],
        [
            "AXS",
            "Axie Infinity"
        ],
        [
            "THETA",
            "Theta Network"
        ],
        [
            "BSV",
            "Bitcoin SV"
        ],
        [
            "BGB",
            "Bitget Token"
        ],
        [
            "RLB",
            "Rollbit Coin"
        ],
        [
            "INJ",
            "Injective"
        ],
        [
            "FTM",
            "Fantom"
        ],
        [
            "MANA",
            "Decentraland"
        ],
        [
            "APE",
            "ApeCoin"
        ],
        [
            "XRD",
            "Radix"
        ],
        [
            "GT",
            "Gate"
        ],
        [
            "RNDR",
            "Render"
        ],
        [
            "NEO",
            "NEO"
        ],
        [
            "GALA",
            "GALA"
        ],
        [
            "USDP",
            "Pax Dollar"
        ],
        [
            "KAVA",
            "Kava"
        ],
        [
            "XEC",
            "eCash"
        ],
        [
            "PAXG",
            "PAX Gold"
        ],
        [
            "XAUT",
            "Tether Gold"
        ],
        [
            "CETH",
            "cETH"
        ],
        [
            "FLOW",
            "Flow"
        ],
        [
            "RUNE",
            "THORChain"
        ],
        [
            "RPL",
            "Rocket Pool"
        ],
        [
            "KLAY",
            "Klaytn"
        ],
        [
            "MIOTA",
            "IOTA"
        ],
        [
            "CHZ",
            "Chiliz"
        ],
        [
            "FRXETH",
            "Frax Ether"
        ],
        [
            "FXS",
            "Frax Share"
        ],
        [
            "TKX",
            "Tokenize Xchange"
        ],
        [
            "KCS",
            "KuCoin"
        ],
        [
            "CRV",
            "Curve DAO"
        ],
        [
            "CSPR",
            "Casper Network"
        ],
        [
            "BTT",
            "BitTorrent"
        ],
        [
            "HT",
            "Huobi"
        ],
        [
            "MINA",
            "Mina Protocol"
        ],
        [
            "SUI",
            "Sui"
        ],
        [
            "DYDX",
            "dYdX"
        ],
        [
            "LUNC",
            "Terra"
        ],
        [
            "PEPE",
            "Pepe"
        ],
        [
            "FDUSD",
            "First Digital USD"
        ],
        [
            "TWT",
            "Trust Wallet"
        ],
        [
            "CBETH",
            "Coinbase Wrapped Staked ETH"
        ],
        [
            "NEXO",
            "NEXO"
        ],
        [
            "NXM",
            "Nexus Mutual"
        ],
        [
            "GMX",
            "GMX"
        ],
        [
            "NFT",
            "APENFT"
        ],
        [
            "FLR",
            "Flare"
        ],
        [
            "GUSD",
            "Gemini Dollar"
        ],
        [
            "DASH",
            "Dash"
        ],
        [
            "SFRXETH",
            "Staked Frax Ether"
        ],
        [
            "WOO",
            "WOO Network"
        ],
        [
            "COMP",
            "Compound"
        ],
        [
            "LUSD",
            "Liquity USD"
        ],
        [
            "MX",
            "MX"
        ],
        [
            "ASTR",
            "Astar"
        ],
        [
            "ZIL",
            "Zilliqa"
        ],
        [
            "OMI",
            "ECOMI"
        ],
        [
            "BONE",
            "Bone ShibaSwap"
        ],
        [
            "AR",
            "Arweave"
        ],
        [
            "CFX",
            "Conflux"
        ],
        [
            "GNO",
            "Gnosis"
        ],
        [
            "CUSDC",
            "cUSDC"
        ],
        [
            "CAKE",
            "PancakeSwap"
        ],
        [
            "1INCH",
            "1inch"
        ],
        [
            "TOMI",
            "tomiNet"
        ],
        [
            "BAT",
            "Basic Attention"
        ],
        [
            "SEI",
            "Sei"
        ],
        [
            "ILV",
            "Illuvium"
        ],
        [
            "FET",
            "Fetch.ai"
        ],
        [
            "SFP",
            "SafePal"
        ],
        [
            "OKT",
            "OKT Chain"
        ],
        [
            "XCH",
            "Chia"
        ],
        [
            "ENJ",
            "Enjin Coin"
        ],
        [
            "BTG",
            "Bitcoin Gold"
        ],
        [
            "HBTC",
            "Huobi BTC"
        ],
        [
            "HNT",
            "Helium"
        ],
        [
            "CELO",
            "Celo"
        ],
        [
            "QTUM",
            "Qtum"
        ],
        [
            "AGIX",
            "SingularityNET"
        ],
        [
            "LRC",
            "Loopring"
        ],
        [
            "OSMO",
            "Osmosis"
        ],
        [
            "CVX",
            "Convex Finance"
        ],
        [
            "ELG",
            "Escoin"
        ],
        [
            "AKT",
            "Akash Network"
        ],
        [
            "XEM",
            "NEM"
        ],
        [
            "MASK",
            "Mask Network"
        ],
        [
            "EURT",
            "Euro Tether"
        ],
        [
            "DFI",
            "DeFiChain"
        ],
        [
            "OX",
            "Open Exchange Token"
        ],
        [
            "ZEC",
            "Zcash"
        ],
        [
            "ENS",
            "Ethereum Name Service"
        ],
        [
            "LPT",
            "Livepeer"
        ],
        [
            "TFUEL",
            "Theta Fuel"
        ],
        [
            "DCR",
            "Decred"
        ],
        [
            "ROSE",
            "Oasis Network"
        ],
        [
            "BDX",
            "Beldex"
        ],
        [
            "CDAI",
            "cDAI"
        ],
        [
            "AZERO",
            "Aleph Zero"
        ],
        [
            "ANKR",
            "Ankr Network"
        ],
        [
            "HOT",
            "Holo"
        ],
        [
            "OHM",
            "Olympus"
        ],
        [
            "CUSDT",
            "cUSDT"
        ],
        [
            "YFI",
            "yearn.finance"
        ],
        [
            "RVN",
            "Ravencoin"
        ],
        [
            "JST",
            "JUST"
        ],
        [
            "BLUR",
            "Blur"
        ],
        [
            "EUSD",
            "eUSD"
        ],
        [
            "GMT",
            "STEPN"
        ],
        [
            "FLOKI",
            "FLOKI"
        ],
        [
            "BABYDOGE",
            "Baby Doge Coin"
        ],
        [
            "WEMIX",
            "WEMIX"
        ],
        [
            "GFARM2",
            "Gains Farm"
        ],
        [
            "JASMY",
            "JasmyCoin"
        ],
        [
            "KSM",
            "Kusama"
        ],
        [
            "AUDIO",
            "Audius"
        ],
        [
            "ANT",
            "Aragon"
        ],
        [
            "GLM",
            "Golem"
        ],
        [
            "ALUSD",
            "Alchemix USD"
        ],
        [
            "BTSE",
            "BTSE Token"
        ],
        [
            "ICX",
            "ICON"
        ],
        [
            "FNSA",
            "FINSCHIA"
        ],
        [
            "WAVES",
            "Waves"
        ],
        [
            "RBN",
            "Ribbon Finance"
        ],
        [
            "WLD",
            "Worldcoin"
        ],
        [
            "LUNA",
            "Terra"
        ],
        [
            "SXP",
            "SXP"
        ],
        [
            "BAL",
            "Balancer"
        ],
        [
            "UNIBOT",
            "Unibot"
        ],
        [
            "ETHW",
            "EthereumPoW"
        ],
        [
            "SC",
            "Siacoin"
        ],
        [
            "MC",
            "Merit Circle"
        ],
        [
            "DAO",
            "DAO Maker"
        ],
        [
            "BAND",
            "Band Protocol"
        ],
        [
            "OCEAN",
            "Ocean Protocol"
        ],
        [
            "ONT",
            "Ontology"
        ],
        [
            "ELF",
            "aelf"
        ],
        [
            "SETH2",
            "sETH2"
        ],
        [
            "GLMR",
            "Moonbeam"
        ],
        [
            "RON",
            "Ronin"
        ],
        [
            "IOST",
            "IOST"
        ],
        [
            "BICO",
            "Biconomy"
        ],
        [
            "BICO",
            "Biconomy"
        ],
        [
            "TRYB",
            "BiLira"
        ],
        [
            "WAXP",
            "WAX"
        ],
        [
            "EURS",
            "STASIS EURO"
        ],
        [
            "IOTX",
            "IoTeX"
        ],
        [
            "AXL",
            "Axelar"
        ],
        [
            "CHSB",
            "SwissBorg"
        ],
        [
            "ONE",
            "Harmony"
        ],
        [
            "BTC.B",
            "Bitcoin Avalanche Bridged (BTC.b)"
        ],
        [
            "WBETH",
            "Wrapped Beacon ETH"
        ],
        [
            "USTC",
            "TerraClassicUSD"
        ],
        [
            "TRIBE",
            "Tribe"
        ],
        [
            "BORA",
            "BORA"
        ],
        [
            "SUSHI",
            "Sushi"
        ],
        [
            "KRD",
            "Krypton DAO"
        ],
        [
            "POLY",
            "Polymath"
        ],
        [
            "KDA",
            "Kadena"
        ],
        [
            "MAGIC",
            "Magic"
        ],
        [
            "DGB",
            "DigiByte"
        ],
        [
            "STG",
            "Stargate Finance"
        ],
        [
            "TOMO",
            "TomoChain"
        ],
        [
            "ZEN",
            "Horizen"
        ],
        [
            "MSOL",
            "Marinade staked SOL"
        ],
        [
            "GNS",
            "Gains Network"
        ],
        [
            "AMP",
            "Amp"
        ],
        [
            "EWT",
            "Energy Web"
        ],
        [
            "CORE",
            "Core"
        ],
        [
            "HIVE",
            "Hive"
        ],
        [
            "LSK",
            "Lisk"
        ],
        [
            "SKL",
            "SKALE"
        ],
        [
            "SSV",
            "SSV Network"
        ],
        [
            "CRVUSD",
            "crvUSD"
        ],
        [
            "KUB",
            "Bitkub Coin"
        ],
        [
            "JOE",
            "JOE"
        ],
        [
            "NU",
            "NuCypher"
        ],
        [
            "FLUX",
            "Flux"
        ],
        [
            "LYXE",
            "LUKSO [OLD]"
        ],
        [
            "API3",
            "API3"
        ],
        [
            "UMA",
            "UMA"
        ],
        [
            "GLR",
            "GalleryCoin"
        ],
        [
            "CET",
            "CoinEx"
        ],
        [
            "CYBER",
            "CyberConnect"
        ],
        [
            "KNC",
            "Kyber Network Crystal"
        ],
        [
            "DESO",
            "Decentralized Social"
        ],
        [
            "BITCOIN",
            "HarryPotterObamaSonic10Inu (ETH)"
        ],
        [
            "EVER",
            "Everscale"
        ],
        [
            "POLYX",
            "Polymesh"
        ],
        [
            "CKB",
            "Nervos Network"
        ],
        [
            "RSR",
            "Reserve Rights"
        ],
        [
            "STSOL",
            "Lido Staked SOL"
        ],
        [
            "MRS",
            "Metars Genesis"
        ],
        [
            "DAG",
            "Constellation"
        ],
        [
            "HXRO",
            "HXRO"
        ],
        [
            "ORDI",
            "ORDI"
        ],
        [
            "CTSI",
            "Cartesi"
        ],
        [
            "TRAC",
            "OriginTrail"
        ],
        [
            "CDT",
            "Blox"
        ],
        [
            "MURA",
            "Murasaki"
        ],
        [
            "SNT",
            "Status"
        ],
        [
            "PUNDIX",
            "Pundi X"
        ],
        [
            "KAG",
            "Kinesis Silver"
        ],
        [
            "PYR",
            "Vulcan Forged"
        ],
        [
            "PLA",
            "PlayDapp"
        ],
        [
            "SYN",
            "Synapse"
        ],
        [
            "STPT",
            "STP"
        ],
        [
            "EDU",
            "Open Campus"
        ],
        [
            "FX",
            "Function X"
        ],
        [
            "MLK",
            "MiL.k Alliance"
        ],
        [
            "DEXE",
            "DeXe"
        ],
        [
            "VVS",
            "VVS Finance"
        ],
        [
            "ELON",
            "Dogelon Mars"
        ],
        [
            "EXRD",
            "e-Radix"
        ],
        [
            "BRISE",
            "Bitgert"
        ],
        [
            "SWETH",
            "Swell Ethereum"
        ],
        [
            "XNO",
            "Nano"
        ],
        [
            "KAU",
            "Kinesis Gold"
        ],
        [
            "WCFG",
            "Wrapped Centrifuge"
        ],
        [
            "CFG",
            "Centrifuge"
        ],
        [
            "C98",
            "Coin98"
        ],
        [
            "KUJI",
            "Kujira"
        ],
        [
            "NRV",
            "Nerve Finance"
        ],
        [
            "DEL",
            "Decimal"
        ],
        [
            "QANX",
            "QANplatform"
        ],
        [
            "STBT",
            "Short-term T-Bill Token"
        ],
        [
            "DKA",
            "dKargo"
        ],
        [
            "LQTY",
            "Liquity"
        ],
        [
            "EMAID",
            "MaidSafeCoin"
        ],
        [
            "OETH",
            "Origin Ether"
        ],
        [
            "BLD",
            "Agoric"
        ],
        [
            "MTL",
            "Metal DAO"
        ],
        [
            "TEL",
            "Telcoin"
        ],
        [
            "W$C",
            "World$tateCoin"
        ],
        [
            "SFM",
            "SafeMoon"
        ],
        [
            "RLC",
            "iExec RLC"
        ],
        [
            "PRIME",
            "Echelon Prime"
        ],
        [
            "ERG",
            "Ergo"
        ],
        [
            "RIF",
            "RSK Infrastructure Framework"
        ],
        [
            "HEZ",
            "Hermez Network"
        ],
        [
            "PROM",
            "Prom"
        ],
        [
            "VEGA",
            "Vega Protocol"
        ],
        [
            "SAVAX",
            "BENQI Liquid Staked AVAX"
        ],
        [
            "WNXM",
            "Wrapped NXM"
        ],
        [
            "UW3S",
            "Utility Web3Shot"
        ],
        [
            "IQ",
            "IQ"
        ],
        [
            "NMR",
            "Numeraire"
        ],
        [
            "RDNT",
            "Radiant Capital"
        ],
        [
            "SURE",
            "inSure DeFi"
        ],
        [
            "ECOIN",
            "Ecoin"
        ],
        [
            "DOCK",
            "Dock"
        ],
        [
            "STEEM",
            "Steem"
        ],
        [
            "ORBS",
            "Orbs"
        ],
        [
            "OMG",
            "OMG Network"
        ],
        [
            "SHR",
            "Share"
        ],
        [
            "ASTRAFER",
            "Astrafer"
        ],
        [
            "MVL",
            "MVL"
        ],
        [
            "ACH",
            "Alchemy Pay"
        ],
        [
            "PCX",
            "ChainX"
        ],
        [
            "SGB",
            "Songbird"
        ],
        [
            "SYS",
            "Syscoin"
        ],
        [
            "CELR",
            "Celer Network"
        ],
        [
            "RAD",
            "Radworks"
        ],
        [
            "MED",
            "Medibloc"
        ],
        [
            "POND",
            "Marlin"
        ],
        [
            "NYM",
            "Nym"
        ],
        [
            "WILD",
            "Wilder World"
        ],
        [
            "ARKM",
            "Arkham"
        ],
        [
            "STRD",
            "Stride"
        ],
        [
            "ALPHA",
            "Stella"
        ],
        [
            "PENDLE",
            "Pendle"
        ],
        [
            "ARDR",
            "Ardor"
        ],
        [
            "TON",
            "Tokamak Network"
        ],
        [
            "DODO",
            "DODO"
        ],
        [
            "DENT",
            "Dent"
        ],
        [
            "VTHO",
            "VeThor"
        ],
        [
            "ALICE",
            "My Neighbor Alice"
        ],
        [
            "BNT",
            "Bancor Network"
        ],
        [
            "STRAX",
            "Stratis"
        ],
        [
            "BFC",
            "Bifrost"
        ],
        [
            "SLP",
            "Smooth Love Potion"
        ],
        [
            "WIN",
            "WINkLink"
        ],
        [
            "ULT",
            "Shardus"
        ],
        [
            "XVG",
            "Verge"
        ],
        [
            "XIDO",
            "Xido Finance"
        ],
        [
            "POWR",
            "Power Ledger"
        ],
        [
            "ACS",
            "Access Protocol"
        ],
        [
            "XCAD",
            "XCAD Network"
        ],
        [
            "LINA",
            "Linear"
        ],
        [
            "SWEAT",
            "Sweatcoin (Sweat Economy)"
        ],
        [
            "SX",
            "SX Network"
        ],
        [
            "HUNT",
            "Hunt"
        ],
        [
            "COL",
            "Clash of Lilliput"
        ],
        [
            "ALI",
            "Artificial Liquid Intelligence"
        ],
        [
            "SCRT",
            "Secret"
        ],
        [
            "XVS",
            "Venus"
        ],
        [
            "AVINOC",
            "AVINOC"
        ],
        [
            "MATICX",
            "Stader MaticX"
        ],
        [
            "HFT",
            "Hashflow"
        ],
        [
            "CVC",
            "Civic"
        ],
        [
            "ANKRETH",
            "Ankr Staked ETH"
        ],
        [
            "CEL",
            "Celsius Network"
        ],
        [
            "MAV",
            "Maverick Protocol"
        ],
        [
            "NKN",
            "NKN"
        ],
        [
            "GAL",
            "Galxe"
        ],
        [
            "ID",
            "SPACE ID"
        ],
        [
            "GTC",
            "Gitcoin"
        ],
        [
            "VITA",
            "VitaDAO"
        ],
        [
            "GEL",
            "Gelato"
        ],
        [
            "STMX",
            "StormX"
        ],
        [
            "SDEX",
            "SmarDex"
        ],
        [
            "MBOX",
            "Mobox"
        ],
        [
            "EUROC",
            "Euro Coin"
        ],
        [
            "BETA",
            "Beta Finance"
        ],
        [
            "CQT",
            "Covalent"
        ],
        [
            "QKC",
            "QuarkChain"
        ],
        [
            "UXP",
            "UXD Protocol"
        ],
        [
            "CHR",
            "Chromia"
        ],
        [
            "METIS",
            "Metis"
        ],
        [
            "CCD",
            "Concordium"
        ],
        [
            "BZR",
            "Bazaars"
        ],
        [
            "FIDU",
            "Fidu"
        ],
        [
            "REQ",
            "Request"
        ],
        [
            "EUL",
            "Euler"
        ],
        [
            "SUN",
            "Sun Token"
        ],
        [
            "KODA",
            "Koda Cryptocurrency"
        ],
        [
            "DEXT",
            "DexTools"
        ],
        [
            "PEOPLE",
            "ConstitutionDAO"
        ],
        [
            "PHA",
            "Phala"
        ],
        [
            "MDX",
            "Mdex (HECO)"
        ],
        [
            "DOLA",
            "DOLA"
        ],
        [
            "UNFI",
            "Unifi Protocol DAO"
        ],
        [
            "BOB",
            "BOB"
        ],
        [
            "KEEP",
            "Keep Network"
        ],
        [
            "CWEB",
            "Coinweb"
        ],
        [
            "BLZ",
            "Bluzelle"
        ],
        [
            "MBX",
            "Marblex"
        ],
        [
            "WMT",
            "World Mobile Token"
        ],
        [
            "CANTO",
            "CANTO"
        ],
        [
            "SPELL",
            "Spell"
        ],
        [
            "CAW",
            "A Hunters Dream"
        ],
        [
            "TEMPLE",
            "TempleDAO"
        ],
        [
            "REN",
            "REN"
        ],
        [
            "BTM",
            "Bytom"
        ],
        [
            "COTI",
            "COTI"
        ],
        [
            "WRX",
            "WazirX"
        ],
        [
            "LEASH",
            "Doge Killer"
        ],
        [
            "FUN",
            "FUNToken"
        ],
        [
            "FLEXUSD",
            "flexUSD"
        ],
        [
            "DFUK",
            "DFUK"
        ],
        [
            "RSS3",
            "RSS3"
        ],
        [
            "MBL",
            "MovieBloc"
        ],
        [
            "USDR",
            "Real USD"
        ],
        [
            "MIM",
            "Magic Internet Money"
        ],
        [
            "DNX",
            "Dynex"
        ],
        [
            "CTK",
            "Shentu"
        ],
        [
            "YGG",
            "Yield Guild Games"
        ],
        [
            "XYO",
            "XYO Network"
        ],
        [
            "ATOR",
            "AirTor Protocol"
        ],
        [
            "NVIR",
            "NvirWorld"
        ],
        [
            "DUSK",
            "DUSK Network"
        ],
        [
            "VRA",
            "Verasity"
        ],
        [
            "AXN",
            "Axion"
        ],
        [
            "XSGD",
            "XSGD"
        ],
        [
            "GMT",
            "Gomining Token"
        ],
        [
            "HIFI",
            "Hifi Finance"
        ],
        [
            "ARK",
            "ARK"
        ],
        [
            "ZIG",
            "Zignaly"
        ],
        [
            "CBK",
            "Cobak"
        ],
        [
            "GHST",
            "Aavegotchi"
        ],
        [
            "BOBA",
            "Boba Network"
        ],
        [
            "MFT",
            "Hifi Finance [OLD]"
        ],
        [
            "NXRA",
            "AllianceBlock Nexera"
        ],
        [
            "UOS",
            "Ultra"
        ],
        [
            "SSX",
            "SOMESING Exchange"
        ],
        [
            "MNW",
            "Morpheus Network"
        ],
        [
            "ARPA",
            "ARPA"
        ],
        [
            "BADGER",
            "Badger DAO"
        ],
        [
            "ARRR",
            "Pirate Chain"
        ],
        [
            "AERGO",
            "Aergo"
        ],
        [
            "POKT",
            "Pocket Network"
        ],
        [
            "TMG",
            "T-mac DAO"
        ],
        [
            "ZBC",
            "Zebec Protocol"
        ],
        [
            "RAY",
            "Raydium"
        ],
        [
            "ACM",
            "AC Milan Fan Token"
        ],
        [
            "WAGMIGAMES",
            "WAGMI Games"
        ],
        [
            "STRK",
            "Strike"
        ],
        [
            "CTC",
            "Creditcoin"
        ],
        [
            "MPL",
            "Maple"
        ],
        [
            "WAN",
            "Wanchain"
        ],
        [
            "GODS",
            "Gods Unchained"
        ],
        [
            "OGN",
            "Origin Protocol"
        ],
        [
            "HOOK",
            "Hooked Protocol"
        ],
        [
            "AGLD",
            "Adventure Gold"
        ],
        [
            "HAY",
            "Destablecoin HAY"
        ],
        [
            "NEST",
            "Nest Protocol"
        ],
        [
            "MOON",
            "r/CryptoCurrency Moons"
        ],
        [
            "ALEX",
            "ALEX Lab"
        ],
        [
            "SOLO",
            "Sologenic"
        ],
        [
            "TRIAS",
            "TriasLab"
        ],
        [
            "AURA",
            "Aura Finance"
        ],
        [
            "TRB",
            "Tellor Tributes"
        ],
        [
            "RARE",
            "SuperRare"
        ],
        [
            "TLM",
            "Alien Worlds"
        ],
        [
            "0X0",
            "0x0.ai: AI Smart Contract"
        ],
        [
            "META",
            "Metadium"
        ],
        [
            "HC",
            "HyperCash"
        ],
        [
            "BFIC",
            "Bficoin"
        ],
        [
            "10SET",
            "Tenset"
        ],
        [
            "RLY",
            "Rally"
        ],
        [
            "FCT",
            "Firmachain"
        ],
        [
            "COMBO",
            "COMBO"
        ],
        [
            "DERO",
            "Dero"
        ],
        [
            "HEART",
            "Humans.ai"
        ],
        [
            "TT",
            "ThunderCore"
        ],
        [
            "MTD",
            "Minted"
        ],
        [
            "LAT",
            "PlatON Network"
        ],
        [
            "BAD",
            "Bad Idea AI"
        ],
        [
            "SUSD",
            "sUSD"
        ],
        [
            "VGX",
            "Voyager VGX"
        ],
        [
            "CEEK",
            "CEEK Smart VR"
        ],
        [
            "SB",
            "Snowbank"
        ],
        [
            "BEAN",
            "Bean"
        ],
        [
            "EVMOS",
            "Evmos"
        ],
        [
            "OXT",
            "Orchid Protocol"
        ],
        [
            "GRS",
            "Groestlcoin"
        ],
        [
            "ETN",
            "Electroneum"
        ],
        [
            "FEI",
            "Fei USD"
        ],
        [
            "MTRG",
            "Meter Governance"
        ],
        [
            "SDAO",
            "SingularityDAO"
        ],
        [
            "LCX",
            "LCX"
        ],
        [
            "LOOKS",
            "LooksRare"
        ],
        [
            "ACA",
            "Acala"
        ],
        [
            "CRE",
            "Carry"
        ],
        [
            "LYRA",
            "Lyra Finance"
        ],
        [
            "KMD",
            "Komodo"
        ],
        [
            "STORJ",
            "Storj"
        ],
        [
            "LOOMOLD",
            "Loom Network (OLD)"
        ],
        [
            "IDEX",
            "IDEX"
        ],
        [
            "MOVR",
            "Moonriver"
        ],
        [
            "FINE",
            "Refinable"
        ],
        [
            "DAWN",
            "Dawn Protocol"
        ],
        [
            "USD+",
            "Overnight.fi USD+"
        ],
        [
            "RACA",
            "Radio Caca"
        ],
        [
            "SOMM",
            "Sommelier"
        ],
        [
            "UQC",
            "Uquid Coin"
        ],
        [
            "SUPER",
            "SuperVerse"
        ],
        [
            "SFUND",
            "Seedify.fund"
        ],
        [
            "TRU",
            "TrueFi"
        ],
        [
            "USX",
            "dForce USD"
        ],
        [
            "MOON",
            "MOON (Ordinals)"
        ],
        [
            "ELA",
            "Elastos"
        ],
        [
            "VRSC",
            "Verus Coin"
        ],
        [
            "ASD",
            "AscendEx"
        ],
        [
            "AURABAL",
            "Aura BAL"
        ],
        [
            "REEF",
            "Reef"
        ],
        [
            "ATA",
            "Automata"
        ],
        [
            "B2M",
            "Bit2Me"
        ],
        [
            "BEL",
            "Bella Protocol"
        ],
        [
            "TLOS",
            "Telos"
        ],
        [
            "DG",
            "DeGate"
        ],
        [
            "GAS",
            "Gas"
        ],
        [
            "XPRT",
            "Persistence"
        ],
        [
            "PERP",
            "Perpetual Protocol"
        ],
        [
            "TBTC",
            "tBTC"
        ],
        [
            "BMEX",
            "BitMEX"
        ],
        [
            "EFI",
            "Efinity"
        ],
        [
            "UWU",
            "UwU Lend"
        ],
        [
            "QRDO",
            "Qredo"
        ],
        [
            "VR",
            "Victoria VR"
        ],
        [
            "KILT",
            "KILT Protocol"
        ],
        [
            "QUICK",
            "Quickswap"
        ],
        [
            "DUST",
            "Dust Protocol"
        ],
        [
            "LEVER",
            "LeverFi"
        ],
        [
            "CHNG",
            "Chainge Finance"
        ],
        [
            "FLM",
            "Flamingo Finance"
        ],
        [
            "QUICK",
            "Quickswap [OLD]"
        ],
        [
            "RFR",
            "Refereum"
        ],
        [
            "PLU",
            "Pluton"
        ],
        [
            "SAITAMA",
            "Saitama"
        ],
        [
            "GOG",
            "Guild of Guardians"
        ],
        [
            "TSUKA",
            "Dejitaru Tsuka"
        ],
        [
            "FORT",
            "Forta"
        ],
        [
            "RDPX",
            "Dopex Rebate"
        ],
        [
            "TPT",
            "TokenPocket Token"
        ],
        [
            "LADYS",
            "Milady Meme Coin"
        ],
        [
            "MCB",
            "MUX Protocol"
        ],
        [
            "PHB",
            "Phoenix Global [OLD]"
        ],
        [
            "INSTAR",
            "INSTAR"
        ],
        [
            "OSAK",
            "Osaka Protocol"
        ],
        [
            "MOC",
            "Mossland"
        ],
        [
            "IRIS",
            "IRISnet"
        ],
        [
            "TONIC",
            "Tectonic"
        ],
        [
            "BAKE",
            "BakerySwap"
        ],
        [
            "AUCTION",
            "Bounce"
        ],
        [
            "ERN",
            "Ethernity Chain"
        ],
        [
            "CXO",
            "CargoX"
        ],
        [
            "KIN",
            "Kin"
        ],
        [
            "UTK",
            "Utrust"
        ],
        [
            "XRP",
            "HarryPotterObamaPacMan8Inu"
        ],
        [
            "PREMIA",
            "Premia"
        ],
        [
            "THOR",
            "THORSwap"
        ],
        [
            "ROUTE",
            "Router Protocol"
        ],
        [
            "BTRFLY",
            "Redacted"
        ],
        [
            "BAR",
            "FC Barcelona Fan Token"
        ],
        [
            "COT",
            "Cosplay Token"
        ],
        [
            "FPIS",
            "Frax Price Index Share"
        ],
        [
            "CTXC",
            "Cortex"
        ],
        [
            "KOGE",
            "KOGE"
        ],
        [
            "HELLO",
            "HELLO"
        ],
        [
            "GBEX",
            "Globiance Exchange"
        ],
        [
            "AVA",
            "AVA"
        ],
        [
            "KEY",
            "SelfKey"
        ],
        [
            "SBD",
            "Steem Dollars"
        ],
        [
            "SETH",
            "sETH"
        ],
        [
            "AHT",
            "AhaToken"
        ],
        [
            "LIT",
            "Litentry"
        ],
        [
            "POLIS",
            "Star Atlas DAO"
        ],
        [
            "BTS",
            "BitShares"
        ],
        [
            "MIMATIC",
            "MAI"
        ],
        [
            "0XBTC",
            "0xBitcoin"
        ],
        [
            "POLS",
            "Polkastarter"
        ],
        [
            "ZCX",
            "Unizen"
        ],
        [
            "DIA",
            "DIA"
        ],
        [
            "CBAT",
            "cBAT"
        ],
        [
            "NAKA",
            "Nakamoto Games"
        ],
        [
            "GXC",
            "GXChain"
        ],
        [
            "ORAI",
            "Oraichain"
        ],
        [
            "TARA",
            "Taraxa"
        ],
        [
            "MDT",
            "Measurable Data"
        ],
        [
            "ALU",
            "Altura"
        ],
        [
            "H2O",
            "H2O Dao"
        ],
        [
            "WAIT",
            "Hourglass"
        ],
        [
            "PLT",
            "Poollotto.finance"
        ],
        [
            "FORTH",
            "Ampleforth Governance"
        ],
        [
            "RAMP",
            "RAMP [OLD]"
        ],
        [
            "MELD",
            "MELD"
        ],
        [
            "PHB",
            "Phoenix"
        ],
        [
            "R",
            "R"
        ],
        [
            "BIFI",
            "Beefy"
        ],
        [
            "CLV",
            "Clover Finance"
        ],
        [
            "ETHX",
            "Stader ETHx"
        ],
        [
            "ADS",
            "Adshares"
        ],
        [
            "SAI",
            "Sai"
        ],
        [
            "LTO",
            "LTO Network"
        ],
        [
            "COPI",
            "Cornucopias"
        ],
        [
            "FRA",
            "Findora"
        ],
        [
            "BSW",
            "Biswap"
        ],
        [
            "LOKA",
            "League of Kingdoms"
        ],
        [
            "AQT",
            "Alpha Quark"
        ],
        [
            "GHO",
            "GHO"
        ],
        [
            "CUDOS",
            "Cudos"
        ],
        [
            "PAAL",
            "PAAL AI"
        ],
        [
            "KP3R",
            "Keep3rV1"
        ],
        [
            "LBR",
            "Lybra Finance"
        ],
        [
            "KLV",
            "Klever"
        ],
        [
            "STRX",
            "StrikeX"
        ],
        [
            "QUACK",
            "Rich Quack"
        ],
        [
            "HDN",
            "Hydranet"
        ],
        [
            "TROY",
            "TROY"
        ],
        [
            "MLN",
            "Enzyme"
        ],
        [
            "TVK",
            "The Virtua Kolect"
        ],
        [
            "MULTI",
            "Multichain"
        ],
        [
            "USP",
            "Platypus USD"
        ],
        [
            "ALPINE",
            "Alpine F1 Team Fan Token"
        ],
        [
            "PTS",
            "Petals"
        ],
        [
            "XCM",
            "Coinmetro"
        ],
        [
            "PLEX",
            "PLEX"
        ],
        [
            "REI",
            "REI Network"
        ],
        [
            "ALCX",
            "Alchemix"
        ],
        [
            "NTX",
            "NuNet"
        ],
        [
            "QI",
            "BENQI"
        ],
        [
            "BOND",
            "BarnBridge"
        ],
        [
            "SWISE",
            "StakeWise"
        ],
        [
            "ALPACA",
            "Alpaca Finance"
        ],
        [
            "GPX",
            "GPEX"
        ],
        [
            "AMPL",
            "Ampleforth"
        ],
        [
            "SIDUS",
            "Sidus"
        ],
        [
            "BTU",
            "BTU Protocol"
        ],
        [
            "VNO",
            "Veno Finance"
        ],
        [
            "HERO",
            "Metahero"
        ],
        [
            "MNGO",
            "Mango"
        ],
        [
            "NEXA",
            "Nexa"
        ],
        [
            "DPX",
            "Dopex"
        ],
        [
            "DIONE",
            "Dione"
        ],
        [
            "KISHU",
            "Kishu Inu"
        ],
        [
            "SLND",
            "Solend"
        ],
        [
            "SAITO",
            "Saito"
        ],
        [
            "BITCI",
            "Bitcicoin"
        ],
        [
            "ATLAS",
            "Star Atlas"
        ],
        [
            "AIMBOT",
            "AimBot"
        ],
        [
            "U",
            "Unidef"
        ],
        [
            "YCC",
            "Yuan Chain Coin"
        ],
        [
            "FIRO",
            "Firo"
        ],
        [
            "SN",
            "SpaceN"
        ],
        [
            "XCN",
            "Onyxcoin"
        ],
        [
            "CITY",
            "Manchester City Fan Token"
        ],
        [
            "AURORA",
            "Aurora"
        ],
        [
            "COS",
            "Contentos"
        ],
        [
            "PSP",
            "ParaSwap"
        ],
        [
            "CAST",
            "Castello Coin"
        ],
        [
            "KAI",
            "KardiaChain"
        ],
        [
            "GF",
            "GuildFi"
        ],
        [
            "ORCA",
            "Orca"
        ],
        [
            "RVF",
            "RocketX exchange"
        ],
        [
            "YLD",
            "Yield App"
        ],
        [
            "MOG",
            "Mog Coin"
        ],
        [
            "EGC",
            "EverGrow Coin"
        ],
        [
            "INST",
            "Instadapp"
        ],
        [
            "SD",
            "Stader"
        ],
        [
            "WRLD",
            "NFT Worlds"
        ],
        [
            "IUS",
            "Iustitia Coin"
        ],
        [
            "CUNI",
            "cUNI"
        ],
        [
            "MELD",
            "MELD [OLD]"
        ],
        [
            "NULS",
            "NULS"
        ],
        [
            "VEED",
            "VEED"
        ],
        [
            "BLID",
            "Bolide"
        ],
        [
            "UPP",
            "Sentinel Protocol"
        ],
        [
            "FOX",
            "ShapeShift FOX"
        ],
        [
            "VELO",
            "Velo"
        ],
        [
            "SCI+",
            "SCI Coin"
        ],
        [
            "GFI",
            "Goldfinch"
        ],
        [
            "ONIT",
            "ONBUFF"
        ],
        [
            "ADX",
            "AdEx"
        ],
        [
            "ORN",
            "Orion Protocol"
        ],
        [
            "ECOX",
            "ECOx"
        ],
        [
            "CAPS",
            "Ternoa"
        ],
        [
            "YFII",
            "DFI.money"
        ],
        [
            "JPEG",
            "JPEG'd"
        ],
        [
            "MARO",
            "Maro"
        ],
        [
            "THALES",
            "Thales"
        ],
        [
            "UXD",
            "UXD Stablecoin"
        ],
        [
            "DNT",
            "district0x"
        ],
        [
            "UFO",
            "UFO Gaming"
        ],
        [
            "BMX",
            "BitMart"
        ],
        [
            "VRO",
            "VeraOne"
        ],
        [
            "TENET",
            "TENET"
        ],
        [
            "MAP",
            "MAP Protocol"
        ],
        [
            "MEVFREE",
            "MEVFree"
        ],
        [
            "TKP",
            "TOKPIE"
        ],
        [
            "FOLD",
            "Manifold Finance"
        ],
        [
            "MEX",
            "xExchange"
        ],
        [
            "OPUL",
            "Opulous"
        ],
        [
            "WING",
            "Wing Finance"
        ],
        [
            "HVH",
            "HAVAH"
        ],
        [
            "MXC",
            "MXC"
        ],
        [
            "ICETH",
            "Interest Compounding ETH Index"
        ],
        [
            "DERC",
            "DeRace"
        ],
        [
            "OG",
            "OG Fan Token"
        ],
        [
            "CRU",
            "Crust Network"
        ],
        [
            "ADCO",
            "Advertise Coin"
        ],
        [
            "DATA",
            "Streamr"
        ],
        [
            "TKO",
            "Tokocrypto"
        ],
        [
            "TOR",
            "TOR"
        ],
        [
            "IBEUR",
            "Iron Bank EUR"
        ],
        [
            "HOPR",
            "HOPR"
        ],
        [
            "DOME",
            "Everdome"
        ],
        [
            "AGEUR",
            "agEUR"
        ],
        [
            "PRO",
            "Propy"
        ],
        [
            "VOXEL",
            "Voxies"
        ],
        [
            "BRICK",
            "r/FortNiteBR Bricks"
        ],
        [
            "VAI",
            "Vaiot"
        ],
        [
            "AURY",
            "Aurory"
        ],
        [
            "STOS",
            "Stratos"
        ],
        [
            "SHDW",
            "Shadow Token"
        ],
        [
            "IXT",
            "IX"
        ],
        [
            "HDX",
            "HydraDX"
        ],
        [
            "SDT",
            "Stake DAO"
        ],
        [
            "LAZIO",
            "Lazio Fan Token"
        ],
        [
            "QOM",
            "Shiba Predator"
        ],
        [
            "PSG",
            "Paris Saint-Germain Fan Token"
        ],
        [
            "BZZ",
            "Swarm"
        ],
        [
            "ZRX",
            "0x Protocol"
        ],
        [
            "RAIL",
            "Railgun"
        ],
        [
            "OUSD",
            "Origin Dollar"
        ],
        [
            "STARS",
            "Stargaze"
        ],
        [
            "ZUSD",
            "ZUSD"
        ],
        [
            "XPR",
            "Proton"
        ],
        [
            "XTP",
            "Tap"
        ],
        [
            "SDN",
            "Shiden Network"
        ],
        [
            "SANTOS",
            "Santos FC Fan Token"
        ],
        [
            "VCNT",
            "ViciCoin"
        ],
        [
            "FIDA",
            "Bonfida"
        ],
        [
            "RFOX",
            "RFOX"
        ],
        [
            "BZRX",
            "bZx Protocol"
        ],
        [
            "NCT",
            "PolySwarm"
        ],
        [
            "CEUR",
            "Celo Euro"
        ],
        [
            "DXD",
            "DXdao"
        ],
        [
            "ARC",
            "Arc"
        ],
        [
            "XDATA",
            "Streamr XDATA"
        ],
        [
            "BWO",
            "Battle World"
        ],
        [
            "VOLT",
            "Volt Inu"
        ],
        [
            "AST",
            "AirSwap"
        ],
        [
            "FSN",
            "FUSION"
        ],
        [
            "DG",
            "Decentral Games"
        ],
        [
            "DF",
            "dForce"
        ],
        [
            "XSUSHI",
            "xSUSHI"
        ],
        [
            "RMRK",
            "RMRK"
        ],
        [
            "GYEN",
            "GYEN"
        ],
        [
            "CHESS",
            "Tranchess"
        ],
        [
            "RXD",
            "Radiant"
        ],
        [
            "DMT",
            "Dream Machine Token"
        ],
        [
            "GAMI",
            "GAMI World"
        ],
        [
            "GAFI",
            "GameFi"
        ],
        [
            "TDROP",
            "ThetaDrop"
        ],
        [
            "AREA",
            "Areon Network"
        ],
        [
            "PIVX",
            "PIVX"
        ],
        [
            "AXEL",
            "AXEL"
        ],
        [
            "MCADE",
            "Metacade"
        ],
        [
            "DIMO",
            "DIMO"
        ],
        [
            "FARM",
            "Harvest Finance"
        ],
        [
            "INDY",
            "Indigo Protocol"
        ],
        [
            "GMM",
            "Gamium"
        ],
        [
            "CERE",
            "Cere Network"
        ],
        [
            "GRAI",
            "Grai"
        ],
        [
            "ALEPH",
            "Aleph.im"
        ],
        [
            "HARD",
            "Kava Lend"
        ],
        [
            "ETHIX",
            "Ethix"
        ],
        [
            "STFX",
            "STFX"
        ],
        [
            "DPI",
            "DeFi Pulse Index"
        ],
        [
            "VELA",
            "Vela Token"
        ],
        [
            "EPS",
            "Ellipsis [OLD]"
        ],
        [
            "FIO",
            "FIO Protocol"
        ],
        [
            "IMGNAI",
            "Image Generation AI"
        ],
        [
            "SNAIL",
            "SnailBrook"
        ],
        [
            "COVAL",
            "Circuits of Value"
        ],
        [
            "ACX",
            "Across Protocol"
        ],
        [
            "MARE",
            "Mare Finance"
        ],
        [
            "UFT",
            "UniLend Finance"
        ],
        [
            "SPACE",
            "MicrovisionChain"
        ],
        [
            "SRM",
            "Serum"
        ],
        [
            "FIS",
            "Stafi"
        ],
        [
            "KOIN",
            "Koinos"
        ],
        [
            "HMX",
            "HMX"
        ],
        [
            "OM",
            "MANTRA"
        ],
        [
            "TALK",
            "Talken"
        ],
        [
            "GXA",
            "Galaxia"
        ],
        [
            "YVE-CRVDAO",
            "veCRV-DAO yVault"
        ],
        [
            "VIDT",
            "VIDT DAO"
        ],
        [
            "ZANO",
            "Zano"
        ],
        [
            "KWENTA",
            "Kwenta"
        ],
        [
            "CYCE",
            "Crypto Carbon Energy"
        ],
        [
            "Leverage Index ETH2X-FLI",
            "Index Coop - ETH 2x Flexible Leverage Index"
        ],
        [
            "PTU",
            "Pintu"
        ],
        [
            "PINKSALE",
            "PinkSale"
        ],
        [
            "ICHI",
            "ICHI"
        ],
        [
            "VLX",
            "Velas"
        ],
        [
            "BEAI",
            "BeNFT Solutions"
        ],
        [
            "XEN",
            "XEN Crypto"
        ],
        [
            "PNK",
            "Kleros"
        ],
        [
            "VITE",
            "Vite"
        ],
        [
            "QLC",
            "Kepple [OLD]"
        ],
        [
            "FRONT",
            "Frontier"
        ],
        [
            "SOFI",
            "RAI Finance"
        ],
        [
            "DC",
            "Dogechain"
        ],
        [
            "EJS",
            "Enjinstarter"
        ],
        [
            "DMD",
            "Diamond"
        ],
        [
            "ASTO",
            "Altered State Machine"
        ],
        [
            "PRQ",
            "PARSIQ"
        ],
        [
            "ISK",
            "ISKRA Token"
        ],
        [
            "CUBE",
            "Somnium Space CUBEs"
        ],
        [
            "PLAY",
            "XCAD Network PLAY"
        ],
        [
            "AFC",
            "Arsenal Fan Token"
        ],
        [
            "XETA",
            "XANA"
        ],
        [
            "YUSD",
            "YUSD Stablecoin"
        ],
        [
            "AIDOGE",
            "ArbDoge AI"
        ],
        [
            "HAI",
            "Hacken"
        ],
        [
            "WOZX",
            "Efforce"
        ],
        [
            "SPH",
            "Spheroid Universe"
        ],
        [
            "SBTC",
            "sBTC"
        ],
        [
            "JUNO",
            "JUNO"
        ],
        [
            "BLUSD",
            "Boosted LUSD"
        ],
        [
            "DEUS",
            "DEUS Finance"
        ],
        [
            "NEX",
            "Nash"
        ],
        [
            "QASH",
            "QASH"
        ],
        [
            "SPOOL",
            "Spool"
        ],
        [
            "OSHI",
            "OSHI"
        ],
        [
            "SAMO",
            "Samoyedcoin"
        ],
        [
            "XDAG",
            "Dagger"
        ],
        [
            "AMB",
            "AirDAO"
        ],
        [
            "UMEE",
            "Umee"
        ],
        [
            "RBLS",
            "Rebel Bots"
        ],
        [
            "TSHARE",
            "Tomb Shares"
        ],
        [
            "REV",
            "Revain"
        ],
        [
            "JUV",
            "Juventus Fan Token"
        ],
        [
            "AIOZ",
            "AIOZ Network"
        ],
        [
            "RETH2",
            "rETH2"
        ],
        [
            "GFAL",
            "Games for a Living"
        ],
        [
            "OVR",
            "Ovr"
        ],
        [
            "EPIC",
            "Epic Cash"
        ],
        [
            "RIDE",
            "holoride"
        ],
        [
            "MATH",
            "MATH"
        ],
        [
            "XKI",
            "KI"
        ],
        [
            "WWY",
            "WeWay"
        ],
        [
            "ZGD",
            "ZambesiGold"
        ],
        [
            "GAL",
            "Galatasaray Fan Token"
        ],
        [
            "$ADS",
            "Alkimi"
        ],
        [
            "NUM",
            "NUM Token"
        ],
        [
            "TIME",
            "Wonderland TIME"
        ],
        [
            "XAI",
            "SideShift"
        ],
        [
            "BNBX",
            "Stader BNBx"
        ],
        [
            "STRP",
            "Strips Finance"
        ],
        [
            "GET",
            "GET Protocol"
        ],
        [
            "HERA",
            "Hera Finance"
        ],
        [
            "GFT",
            "Gifto"
        ],
        [
            "SOLVE",
            "SOLVE"
        ],
        [
            "DREP",
            "Drep"
        ],
        [
            "LON",
            "Tokenlon"
        ],
        [
            "GDDY",
            "Giddy"
        ],
        [
            "UNCX",
            "UNCX Network"
        ],
        [
            "FEG",
            "FEG BSC"
        ],
        [
            "SILO",
            "Silo Finance"
        ],
        [
            "QTCON",
            "Quiztok"
        ],
        [
            "USDX",
            "USDX"
        ],
        [
            "BURGER",
            "BurgerCities"
        ],
        [
            "KNCL",
            "Kyber Network Crystal Legacy"
        ],
        [
            "BUY",
            "Buying.com"
        ],
        [
            "BTCP",
            "Bitcoin Pro"
        ],
        [
            "POOLX",
            "Poolz Finance"
        ],
        [
            "ES",
            "Era Swap"
        ],
        [
            "QRL",
            "Quantum Resistant Ledger"
        ],
        [
            "PDT",
            "ParagonsDAO"
        ],
        [
            "BONK",
            "Bonk"
        ],
        [
            "NOIA",
            "Syntropy"
        ],
        [
            "HTR",
            "Hathor"
        ],
        [
            "OBSR",
            "Observer"
        ],
        [
            "BOSON",
            "Boson Protocol"
        ],
        [
            "AGI",
            "Delysium"
        ],
        [
            "RARI",
            "Rarible"
        ],
        [
            "SPHERE",
            "Sphere Finance"
        ],
        [
            "SWFTC",
            "SWFTCOIN"
        ],
        [
            "FEG",
            "FEG ETH"
        ],
        [
            "TABOO",
            "Taboo"
        ],
        [
            "PKF",
            "Red Kite"
        ],
        [
            "SWAP",
            "TrustSwap"
        ],
        [
            "PRE",
            "Presearch"
        ],
        [
            "XDG",
            "Decentral Games Governance"
        ],
        [
            "ITHEUM",
            "Itheum"
        ],
        [
            "BCD",
            "Bitcoin Diamond"
        ],
        [
            "MLT",
            "Media Licensing Token"
        ],
        [
            "APX",
            "ApolloX"
        ],
        [
            "HEGIC",
            "Hegic"
        ],
        [
            "SHI",
            "Shina Inu"
        ],
        [
            "BTC2",
            "Bitcoin 2"
        ],
        [
            "AE",
            "Aeternity"
        ],
        [
            "SAUCE",
            "SaucerSwap"
        ],
        [
            "NWC",
            "Newscrypto Coin"
        ],
        [
            "MUTE",
            "Mute"
        ],
        [
            "WISE",
            "Wise"
        ],
        [
            "NFAI",
            "Not Financial Advice"
        ],
        [
            "KITTY",
            "Kitty Inu"
        ],
        [
            "FUSE",
            "Fuse"
        ],
        [
            "CGL",
            "Crypto Gladiator League"
        ],
        [
            "CORGIAI",
            "CorgiAI"
        ],
        [
            "COW",
            "CoW Protocol"
        ],
        [
            "VXV",
            "Vectorspace AI"
        ],
        [
            "LVL",
            "Level"
        ],
        [
            "BIGSB",
            "BigShortBets"
        ],
        [
            "TIME",
            "chrono.tech"
        ],
        [
            "ATM",
            "Atletico Madrid Fan Token"
        ],
        [
            "NEER",
            "Metaverse.Network Pioneer"
        ],
        [
            "OCTA",
            "OctaSpace"
        ],
        [
            "ACN",
            "Acorn Protocol"
        ],
        [
            "OPTI",
            "Optimus AI"
        ],
        [
            "WEMIX$",
            "WEMIX Dollar"
        ],
        [
            "REP",
            "Augur"
        ],
        [
            "GRAIL",
            "Camelot Token"
        ],
        [
            "BCB",
            "Blockchain Bets"
        ],
        [
            "NPXS",
            "Pundi X [OLD]"
        ],
        [
            "ALPH",
            "Alephium"
        ],
        [
            "HYDRA",
            "Hydra"
        ],
        [
            "ICE",
            "Popsicle Finance"
        ],
        [
            "AMO",
            "AMO Coin"
        ],
        [
            "KLIMA",
            "KlimaDAO"
        ],
        [
            "YOSHI",
            "Yoshi.exchange"
        ],
        [
            "DXP",
            "Vela Exchange"
        ],
        [
            "FOR",
            "ForTube"
        ],
        [
            "OCT",
            "Octopus Network"
        ],
        [
            "ION",
            "Ion"
        ],
        [
            "TAMA",
            "Tamadoge"
        ],
        [
            "FER",
            "Ferro"
        ],
        [
            "INTER",
            "Inter Milan Fan Token"
        ],
        [
            "XBT",
            "Xbit"
        ],
        [
            "MNDE",
            "Marinade"
        ],
        [
            "KATA",
            "Katana Inu"
        ],
        [
            "UBT",
            "Unibright"
        ],
        [
            "GQ",
            "Galactic Quadrant"
        ],
        [
            "DVF",
            "Rhino.fi"
        ],
        [
            "CHEQ",
            "CHEQD Network"
        ],
        [
            "BROCK",
            "Bitrock"
        ],
        [
            "GBYTE",
            "Obyte"
        ],
        [
            "FIBO",
            "FibSwap DEX"
        ],
        [
            "CRTS",
            "Cratos"
        ],
        [
            "PALLA",
            "Pallapay"
        ],
        [
            "CVP",
            "PowerPool Concentrated Voting Power"
        ],
        [
            "BCT",
            "Toucan Protocol: Base Carbon Tonne"
        ],
        [
            "PPC",
            "Peercoin"
        ],
        [
            "OOKI",
            "Ooki"
        ],
        [
            "RVP",
            "Revolution Populi"
        ],
        [
            "RGT",
            "Rari Governance"
        ],
        [
            "HUSD",
            "HUSD"
        ],
        [
            "CREAM",
            "Cream"
        ],
        [
            "IDRT",
            "Rupiah Token"
        ],
        [
            "PZM",
            "Prizm"
        ],
        [
            "FUL",
            "Fulcrom"
        ],
        [
            "NEOX",
            "Neoxa"
        ],
        [
            "CGO",
            "Comtech Gold"
        ],
        [
            "STEAMX",
            "Steam Exchange"
        ],
        [
            "JEWEL",
            "DeFi Kingdoms"
        ],
        [
            "WIT",
            "Witnet"
        ],
        [
            "UNDEAD",
            "Undead Blocks"
        ],
        [
            "SQUIDGROW",
            "SquidGrow"
        ],
        [
            "SOCKS",
            "Unisocks"
        ],
        [
            "GST-SOL",
            "STEPN Green Satoshi Token on Solana"
        ],
        [
            "SPS",
            "Splintershards"
        ],
        [
            "XCP",
            "Counterparty"
        ],
        [
            "TOKE",
            "Tokemak"
        ],
        [
            "HNS",
            "Handshake"
        ],
        [
            "SOUL",
            "Phantasma"
        ],
        [
            "ETHM",
            "Ethereum Meta"
        ],
        [
            "CULT",
            "Cult DAO"
        ],
        [
            "ZKS",
            "ZKSpace"
        ],
        [
            "WXT",
            "WXT Token"
        ],
        [
            "JADE",
            "Jade Protocol"
        ],
        [
            "RENBTC",
            "renBTC"
        ],
        [
            "NIM",
            "Nimiq"
        ],
        [
            "DVPN",
            "Sentinel"
        ],
        [
            "PER",
            "PER Project"
        ],
        [
            "KRL",
            "KRYLL"
        ],
        [
            "VAL",
            "Validity"
        ],
        [
            "GULF",
            "GulfCoin"
        ],
        [
            "PEEL",
            "Meta Apes PEEL"
        ],
        [
            "SCLP",
            "Scallop"
        ],
        [
            "ATPAY",
            "AtPay"
        ],
        [
            "TONE",
            "TE-FOOD"
        ],
        [
            "PUSH",
            "Push Protocol"
        ],
        [
            "IDIA",
            "Impossible Finance Launchpad"
        ],
        [
            "KALM",
            "KALM"
        ],
        [
            "LM",
            "LeisureMeta"
        ],
        [
            "CHO",
            "Choise.com"
        ],
        [
            "CWBTC",
            "cWBTC"
        ],
        [
            "RBIF",
            "Robo Inu Finance"
        ],
        [
            "GAMMA",
            "Gamma Strategies"
        ],
        [
            "ALOT",
            "Dexalot"
        ],
        [
            "MIMO",
            "Mimo Governance"
        ],
        [
            "CPOOL",
            "Clearpool"
        ],
        [
            "VINU",
            "Vita Inu"
        ],
        [
            "CATE",
            "CateCoin"
        ],
        [
            "GRV",
            "GroveCoin"
        ],
        [
            "DMTR",
            "Dimitra"
        ],
        [
            "ABT",
            "Arcblock"
        ],
        [
            "LOVELY",
            "Lovely Inu finance"
        ],
        [
            "PSTAKE",
            "pSTAKE Finance"
        ],
        [
            "BUMP",
            "Bumper"
        ],
        [
            "GO",
            "GoChain"
        ],
        [
            "CNC",
            "Conic"
        ],
        [
            "SOV",
            "Sovryn"
        ],
        [
            "VIB",
            "Viberate"
        ],
        [
            "AVT",
            "Aventus"
        ],
        [
            "DLC",
            "Diamond Launch"
        ],
        [
            "INDEX",
            "Index Cooperative"
        ],
        [
            "KOMPETE",
            "KOMPETE Token"
        ],
        [
            "HEC",
            "Hector Network"
        ],
        [
            "GHNY",
            "Grizzly Honey"
        ],
        [
            "DIVI",
            "Divi"
        ],
        [
            "CATGIRL",
            "Catgirl"
        ],
        [
            "SUDO",
            "sudoswap"
        ],
        [
            "RISE",
            "EverRise"
        ],
        [
            "MIX",
            "MixMarvel"
        ],
        [
            "QSP",
            "Quantstamp"
        ],
        [
            "FITFI",
            "Step App"
        ],
        [
            "ARIA20",
            "Arianee"
        ],
        [
            "INV",
            "Inverse Finance"
        ],
        [
            "BTR",
            "Bitrue Coin"
        ],
        [
            "CGPT",
            "ChainGPT"
        ],
        [
            "LBT",
            "Law Blocks"
        ],
        [
            "BSCPAD",
            "BSCPAD"
        ],
        [
            "VELO",
            "Velodrome Finance"
        ],
        [
            "MASQ",
            "MASQ"
        ],
        [
            "DEGO",
            "Dego Finance"
        ],
        [
            "PROS",
            "Prosper"
        ],
        [
            "HAPI",
            "HAPI"
        ],
        [
            "IMPT",
            "IMPT"
        ],
        [
            "LEND",
            "Aave [OLD]"
        ],
        [
            "SWTH",
            "Carbon Protocol"
        ],
        [
            "PAI",
            "Parrot USD"
        ],
        [
            "LCR",
            "Lucro"
        ],
        [
            "SIX",
            "SIX Network"
        ],
        [
            "SIS",
            "Symbiosis"
        ],
        [
            "VALOR",
            "Smart Valor"
        ],
        [
            "ASR",
            "AS Roma Fan Token"
        ],
        [
            "MDAO",
            "MarsDAO"
        ],
        [
            "RET",
            "Renewable Energy"
        ],
        [
            "PDEX",
            "Polkadex"
        ],
        [
            "QMALL",
            "Qmall"
        ],
        [
            "TEMP",
            "Tempus"
        ],
        [
            "SNFTS",
            "Seedify NFT Space"
        ],
        [
            "PNT",
            "pNetwork"
        ],
        [
            "TAKI",
            "Taki"
        ],
        [
            "MMPRO",
            "Market Making Pro"
        ],
        [
            "NODL",
            "Nodle Network"
        ],
        [
            "GST-ETH",
            "STEPN Green Satoshi Token on ETH"
        ],
        [
            "SPA",
            "Sperax"
        ],
        [
            "BAN",
            "Banano"
        ],
        [
            "GEAR",
            "Gearbox"
        ],
        [
            "KLT",
            "Kamaleont"
        ],
        [
            "KMON",
            "Kryptomon"
        ],
        [
            "GZONE",
            "GameZone"
        ],
        [
            "SONNE",
            "Sonne Finance"
        ],
        [
            "SWASH",
            "Swash"
        ],
        [
            "GRND",
            "SuperWalk"
        ],
        [
            "KUNCI",
            "Kunci Coin"
        ],
        [
            "LSS",
            "Lossless"
        ],
        [
            "SPC",
            "SpaceChain (ERC-20)"
        ],
        [
            "RAI",
            "Rai Reflex Index"
        ],
        [
            "TURBO",
            "Turbo"
        ],
        [
            "AQUA",
            "Aquarius"
        ],
        [
            "TRA",
            "Trabzonspor Fan Token"
        ],
        [
            "FLOOR",
            "FloorDAO"
        ],
        [
            "APEX",
            "ApeX"
        ],
        [
            "HI",
            "hi Dollar"
        ],
        [
            "EL",
            "ELYSIA"
        ],
        [
            "SKEB",
            "Skeb"
        ],
        [
            "AURA",
            "Aura Network"
        ],
        [
            "BEN",
            "Ben"
        ],
        [
            "KAR",
            "Karura"
        ],
        [
            "DORA",
            "Dora Factory"
        ],
        [
            "KNIGHT",
            "CitaDAO"
        ],
        [
            "IBAT",
            "Battle Infinity"
        ],
        [
            "TRAC",
            "TRAC (Ordinals)"
        ],
        [
            "VERSE",
            "Verse"
        ],
        [
            "MAN",
            "Matrix AI Network"
        ],
        [
            "VEE",
            "BLOCKv"
        ],
        [
            "STARL",
            "StarLink"
        ],
        [
            "PNB",
            "Pink BNB"
        ],
        [
            "JIM",
            "Jim"
        ],
        [
            "GPCX",
            "Good Person Coin"
        ],
        [
            "CRPT",
            "Crypterium"
        ],
        [
            "REGEN",
            "Regen"
        ],
        [
            "WIKEN",
            "Project WITH"
        ],
        [
            "SHFT",
            "Shyft Network"
        ],
        [
            "DAVIS",
            "Davis Cup Fan Token"
        ],
        [
            "XCFX",
            "Nucleon xCFX"
        ],
        [
            "RAE",
            "Receive Access Ecosystem"
        ],
        [
            "CAP",
            "Cap"
        ],
        [
            "ANGLE",
            "ANGLE"
        ],
        [
            "PLI",
            "Plugin"
        ],
        [
            "LUNR",
            "Lunr"
        ],
        [
            "MANC",
            "Mancium"
        ],
        [
            "SPANK",
            "SpankChain"
        ],
        [
            "ASTRO",
            "Astroport"
        ],
        [
            "VST",
            "Vesta Stable"
        ],
        [
            "ZKP",
            "Panther Protocol"
        ],
        [
            "MV",
            "GensoKishi Metaverse"
        ],
        [
            "FEVR",
            "RealFevr"
        ],
        [
            "FLX",
            "Reflexer Ungovernance"
        ],
        [
            "KAP",
            "KAP Games"
        ],
        [
            "GENE",
            "Genopets"
        ],
        [
            "NOTE",
            "Notional Finance"
        ],
        [
            "CUSD",
            "Celo Dollar"
        ],
        [
            "LBC",
            "LBRY Credits"
        ],
        [
            "OAX",
            "OAX"
        ],
        [
            "PIB",
            "Pibble"
        ],
        [
            "DONUT",
            "Donut"
        ],
        [
            "EQUAD",
            "Quadrant Protocol"
        ],
        [
            "ZZ",
            "ZigZag"
        ],
        [
            "BCN",
            "Bytecoin"
        ],
        [
            "XAVA",
            "Avalaunch"
        ],
        [
            "FLX",
            "SEDA Protocol"
        ],
        [
            "PIP",
            "PIP"
        ],
        [
            "CPH",
            "Cypherium"
        ],
        [
            "TET",
            "Tectum"
        ],
        [
            "UT",
            "Ulord"
        ],
        [
            "WOJAK",
            "Wojak"
        ],
        [
            "TXAU",
            "tGOLD"
        ],
        [
            "PROPC",
            "Propchain"
        ],
        [
            "VINA",
            "VICUNA"
        ],
        [
            "LPNT",
            "Luxurious Pro Network"
        ],
        [
            "NAP",
            "Napoli Fan Token"
        ],
        [
            "BLN",
            "Balance Network"
        ],
        [
            "SCP",
            "ScPrime"
        ],
        [
            "DOG",
            "The Doge NFT"
        ],
        [
            "LORDS",
            "LORDS"
        ],
        [
            "NFTX",
            "NFTX"
        ],
        [
            "BAX",
            "BABB"
        ],
        [
            "CBX",
            "CropBytes"
        ],
        [
            "WELL",
            "Moonwell"
        ],
        [
            "EIV",
            "Earniverse"
        ],
        [
            "ROKO",
            "Roko Network"
        ],
        [
            "OOE",
            "OpenOcean"
        ],
        [
            "BBANK",
            "blockbank"
        ],
        [
            "CELL",
            "Cellframe"
        ],
        [
            "XFUND",
            "xFUND"
        ],
        [
            "DINO",
            "DinoLFG"
        ],
        [
            "PBX",
            "Paribus"
        ],
        [
            "SFTMX",
            "Stader sFTMX"
        ],
        [
            "TRVL",
            "TRVL"
        ],
        [
            "$RAINI",
            "Raini"
        ],
        [
            "XNA",
            "Neurai"
        ],
        [
            "PXP",
            "PointPay"
        ],
        [
            "OMMI",
            "Ommniverse"
        ],
        [
            "NOM",
            "Onomy Protocol"
        ],
        [
            "BYTZ",
            "BYTZ"
        ],
        [
            "SRX",
            "StorX"
        ],
        [
            "PING",
            "Sonar"
        ],
        [
            "DBC",
            "DeepBrain Chain"
        ],
        [
            "OXEN",
            "Oxen"
        ],
        [
            "CLY",
            "Colony"
        ],
        [
            "IETH",
            "iETH v1"
        ],
        [
            "NCDT",
            "nuco.cloud"
        ],
        [
            "KAN",
            "BitKan"
        ],
        [
            "3ULL",
            "PLAYA3ULL GAMES"
        ],
        [
            "GHUB",
            "GemHUB"
        ],
        [
            "MUSE",
            "Muse DAO"
        ],
        [
            "SCNSOL",
            "Socean Staked Sol"
        ],
        [
            "BLOCK",
            "Blockasset"
        ],
        [
            "RADAR",
            "DappRadar"
        ],
        [
            "RJV",
            "Rejuve.AI"
        ],
        [
            "TROVE",
            "Arbitrove Governance Token"
        ],
        [
            "FYN",
            "Affyn"
        ],
        [
            "SOPH",
            "SophiaVerse"
        ],
        [
            "ORB",
            "Orbcity"
        ],
        [
            "SOLID",
            "Solidly"
        ],
        [
            "MET",
            "Metronome"
        ],
        [
            "XHV",
            "Haven"
        ],
        [
            "NGC",
            "NAGA"
        ],
        [
            "BANANA",
            "ApeSwap"
        ],
        [
            "WOM",
            "Wombat Exchange"
        ],
        [
            "TGT",
            "THORWallet DEX"
        ],
        [
            "BERRY",
            "Berry"
        ],
        [
            "SIPHER",
            "Sipher"
        ],
        [
            "MGP",
            "Magpie"
        ],
        [
            "SYLO",
            "Sylo"
        ],
        [
            "WALV",
            "Alvey Chain"
        ],
        [
            "BEPRO",
            "BEPRO Network"
        ],
        [
            "LIT",
            "Timeless"
        ],
        [
            "LOC",
            "LockTrip"
        ],
        [
            "DEP",
            "DEAPCOIN"
        ],
        [
            "FOOM",
            "Foom"
        ],
        [
            "MYST",
            "Mysterium"
        ],
        [
            "UMAMI",
            "Umami"
        ],
        [
            "KASTA",
            "Kasta"
        ],
        [
            "STEP",
            "Step Finance"
        ],
        [
            "RBX",
            "RabbitX"
        ],
        [
            "WHALE",
            "WHALE"
        ],
        [
            "SKEY",
            "Skey Network"
        ],
        [
            "GRG",
            "RigoBlock"
        ],
        [
            "ALD",
            "Aladdin DAO"
        ],
        [
            "ZPAY",
            "ZoidPay"
        ],
        [
            "$FAST",
            "PodFast"
        ],
        [
            "SENATE",
            "SENATE"
        ],
        [
            "XPX",
            "ProximaX"
        ],
        [
            "CTX",
            "Cryptex Finance"
        ],
        [
            "TIG",
            "Tigris"
        ],
        [
            "ZCN",
            "Zus"
        ],
        [
            "SHILL",
            "SHILL Token"
        ],
        [
            "XEP",
            "Electra Protocol"
        ],
        [
            "SFD",
            "SafeDeal"
        ],
        [
            "ZYN",
            "Zynecoin"
        ],
        [
            "CIV",
            "Civilization"
        ],
        [
            "RFD",
            "Refund"
        ],
        [
            "RVST",
            "Revest Finance"
        ],
        [
            "ROA",
            "ROACORE"
        ],
        [
            "X2Y2",
            "X2Y2"
        ],
        [
            "SUKU",
            "SUKU"
        ],
        [
            "LING",
            "Lingose"
        ],
        [
            "DSLA",
            "DSLA Protocol"
        ],
        [
            "LANA",
            "LanaCoin"
        ],
        [
            "CGG",
            "Chain Guardians"
        ],
        [
            "WTC",
            "Waltonchain"
        ],
        [
            "MCRT",
            "MagicCraft"
        ],
        [
            "ADM",
            "ADAMANT Messenger"
        ],
        [
            "REVV",
            "REVV"
        ],
        [
            "XIDR",
            "XIDR"
        ],
        [
            "OGV",
            "Origin DeFi Governance"
        ],
        [
            "LOOT",
            "LootBot"
        ],
        [
            "CRE",
            "Crescent Network"
        ],
        [
            "BOTTO",
            "Botto"
        ],
        [
            "PEPE2.0",
            "Pepe 2.0"
        ],
        [
            "HOGE",
            "Hoge Finance"
        ],
        [
            "TORN",
            "Tornado Cash"
        ],
        [
            "FRM",
            "Ferrum Network"
        ],
        [
            "DUA",
            "Brillion"
        ],
        [
            "VAI",
            "Vai"
        ],
        [
            "WLKN",
            "Walken"
        ],
        [
            "AD",
            "ADreward"
        ],
        [
            "BNC",
            "Bifrost Native Coin"
        ],
        [
            "GRIN",
            "Grin"
        ],
        [
            "PKT",
            "PKT"
        ],
        [
            "DJED",
            "Djed"
        ],
        [
            "WAS",
            "Wasder"
        ],
        [
            "ZBIT",
            "ZBIT (Ordinals)"
        ],
        [
            "MARS",
            "Mars Protocol"
        ],
        [
            "X",
            "X"
        ],
        [
            "NCR",
            "Neos Credits"
        ],
        [
            "BEAM",
            "BEAM"
        ],
        [
            "XTM",
            "Torum"
        ],
        [
            "WINR",
            "WINR Protocol"
        ],
        [
            "ASK",
            "Permission Coin"
        ],
        [
            "URUS",
            "Aurox"
        ],
        [
            "JONES",
            "Jones DAO"
        ],
        [
            "GHX",
            "GamerCoin"
        ],
        [
            "PIKA",
            "Pika Protocol"
        ],
        [
            "FUTURE",
            "FutureCoin"
        ],
        [
            "TIPS",
            "Fedoracoin"
        ],
        [
            "NOLO",
            "YoloNolo"
        ],
        [
            "AZIT",
            "azit"
        ],
        [
            "CCT",
            "Carbon Credit"
        ],
        [
            "EPIK",
            "Epik Prime"
        ],
        [
            "GRC",
            "Gridcoin"
        ],
        [
            "GSWIFT",
            "GameSwift"
        ],
        [
            "DHT",
            "dHEDGE DAO"
        ],
        [
            "PLASTIK",
            "Plastiks"
        ],
        [
            "HOP",
            "Hop Protocol"
        ],
        [
            "CSIX",
            "Carbon Browser"
        ],
        [
            "JRT",
            "Jarvis Reward"
        ],
        [
            "WOMBAT",
            "Wombat"
        ],
        [
            "PART",
            "Particl"
        ],
        [
            "FORE",
            "FORE Protocol"
        ],
        [
            "KOY",
            "Koyo"
        ],
        [
            "LAI",
            "LayerAI"
        ],
        [
            "ZERO",
            "ZeroLiquid"
        ],
        [
            "POR",
            "Portugal National Team Fan Token"
        ],
        [
            "DDX",
            "DerivaDAO"
        ],
        [
            "XED",
            "Exeedme"
        ],
        [
            "ANC",
            "Anchor Protocol"
        ],
        [
            "LCS",
            "LocalCoinSwap"
        ],
        [
            "DCB",
            "Decubate"
        ],
        [
            "FACTR",
            "Defactor"
        ],
        [
            "SANI",
            "Sanin Inu"
        ],
        [
            "WCHI",
            "XAYA"
        ],
        [
            "MTV",
            "MultiVAC"
        ],
        [
            "AQTIS",
            "AQTIS"
        ],
        [
            "BOB",
            "BOB Token"
        ],
        [
            "PAID",
            "PAID Network"
        ],
        [
            "ECO",
            "ECO"
        ],
        [
            "PNG",
            "Pangolin"
        ],
        [
            "GM",
            "GM"
        ],
        [
            "BUX",
            "BUX"
        ],
        [
            "PAW",
            "PAWSWAP"
        ],
        [
            "IPOR",
            "IPOR"
        ],
        [
            "NTVRK",
            "Netvrk"
        ],
        [
            "LZM",
            "LoungeM"
        ],
        [
            "NRG",
            "Energi"
        ],
        [
            "BST",
            "Blocksquare"
        ],
        [
            "OATH",
            "OATH"
        ],
        [
            "BOO",
            "Spookyswap"
        ],
        [
            "MPS",
            "Mt Pelerin Shares"
        ],
        [
            "XTN",
            "Neutrino Index Token"
        ],
        [
            "SEUR",
            "sEUR"
        ],
        [
            "XDEFI",
            "XDEFI"
        ],
        [
            "ERN",
            "Ethos Reserve Note"
        ],
        [
            "DAFI",
            "Dafi Protocol"
        ],
        [
            "BRIDGE",
            "Octus Bridge"
        ],
        [
            "PI",
            "Plian"
        ],
        [
            "AUTO",
            "Cube Intelligence"
        ],
        [
            "SAN",
            "Santiment Network"
        ],
        [
            "SLR",
            "Solarcoin"
        ],
        [
            "DARK",
            "Dark Frontiers"
        ],
        [
            "OCC",
            "OccamFi"
        ],
        [
            "MOOV",
            "dotmoovs"
        ],
        [
            "BLT",
            "Blocto"
        ],
        [
            "MUSD",
            "mStable USD"
        ],
        [
            "JMPT",
            "JumpToken"
        ],
        [
            "CRP",
            "Crypton"
        ],
        [
            "GARI",
            "Gari Network"
        ],
        [
            "UNO",
            "Uno Re"
        ],
        [
            "SHIRYO-INU",
            "Shiryo"
        ],
        [
            "ONI",
            "ONINO"
        ],
        [
            "SHIBDOGE",
            "ShibaDoge"
        ],
        [
            "MOBI",
            "Mobius"
        ],
        [
            "IGU",
            "IguVerse IGU"
        ],
        [
            "OXY",
            "Oxygen"
        ],
        [
            "LUA",
            "LuaSwap"
        ],
        [
            "BPRO",
            "B.Protocol"
        ],
        [
            "MVX",
            "Metavault Trade"
        ],
        [
            "DIP",
            "Etherisc DIP"
        ],
        [
            "TCH",
            "TigerCash"
        ],
        [
            "BTCMT",
            "Minto"
        ],
        [
            "BOA",
            "BOSagora"
        ],
        [
            "MEED",
            "Meeds DAO"
        ],
        [
            "POLA",
            "Polaris Share"
        ],
        [
            "SNC",
            "SunContract"
        ],
        [
            "PRISM",
            "Prism"
        ],
        [
            "GRUMPYCAT",
            "Grumpy Cat"
        ],
        [
            "BBS",
            "BBS Network"
        ],
        [
            "SMT",
            "Swarm Markets"
        ],
        [
            "MTC",
            "Doc.com"
        ],
        [
            "MARSH",
            "Unmarshal"
        ],
        [
            "ZMN",
            "ZMINE"
        ],
        [
            "DIGITS",
            "Digits DAO"
        ],
        [
            "BDT",
            "BlackDragon"
        ],
        [
            "MINTME",
            "MintMe.com Coin"
        ],
        [
            "SRLTY",
            "SaitaRealty"
        ],
        [
            "AIMX",
            "Aimedis (NEW)"
        ],
        [
            "TRAXX",
            "Traxx"
        ],
        [
            "MONA",
            "Monavale"
        ],
        [
            "GAINS",
            "Gains"
        ],
        [
            "SIGNA",
            "Signum"
        ],
        [
            "ARG",
            "Argentine Football Association Fan Token"
        ],
        [
            "STIMA",
            "STIMA"
        ],
        [
            "RDT",
            "Ridotto"
        ],
        [
            "NAV",
            "Navcoin"
        ],
        [
            "WITCH",
            "Witch Token"
        ],
        [
            "WHALE",
            "White Whale"
        ],
        [
            "XMON",
            "XMON"
        ],
        [
            "MNTA",
            "MantaDAO"
        ],
        [
            "GYMNET",
            "Gym Network"
        ],
        [
            "BOOT",
            "Bostrom"
        ],
        [
            "EXTRA",
            "Extra Finance"
        ],
        [
            "OMAX",
            "Omax"
        ],
        [
            "TPAD",
            "TrustPad"
        ],
        [
            "VTC",
            "Vertcoin"
        ],
        [
            "DETO",
            "Delta Exchange"
        ],
        [
            "OTO",
            "OTOCASH"
        ],
        [
            "CBY",
            "Carbify"
        ],
        [
            "ACT",
            "Acet"
        ],
        [
            "POLYDOGE",
            "PolyDoge"
        ],
        [
            "D2T",
            "Dash 2 Trade"
        ],
        [
            "BS",
            "Blacksmith Token"
        ],
        [
            "SLIM",
            "Solanium"
        ],
        [
            "NLS",
            "Nolus"
        ],
        [
            "CETUS",
            "Cetus Protocol"
        ],
        [
            "NBT",
            "NanoByte"
        ],
        [
            "XELS",
            "XELS"
        ],
        [
            "THE",
            "Thena"
        ],
        [
            "VSYS",
            "V.SYSTEMS"
        ],
        [
            "NVT",
            "NerveNetwork"
        ],
        [
            "XRT",
            "Robonomics Network"
        ],
        [
            "BANK",
            "Bankless DAO"
        ],
        [
            "GEIST",
            "Geist Finance"
        ],
        [
            "FCL",
            "Fractal"
        ],
        [
            "BRG",
            "Bridge Oracle"
        ],
        [
            "MMF",
            "MMFinance (Cronos)"
        ],
        [
            "CAS",
            "Cashaa"
        ],
        [
            "THL",
            "Thala"
        ],
        [
            "NEWS",
            "PUBLISH"
        ],
        [
            "DFYN",
            "Dfyn Network"
        ],
        [
            "$NMKR",
            "NMKR"
        ],
        [
            "GNY",
            "GNY"
        ],
        [
            "CIRUS",
            "Cirus"
        ],
        [
            "DYP",
            "Dypius"
        ],
        [
            "GLEEC",
            "Gleec Coin"
        ],
        [
            "EVN",
            "Evolution Finance"
        ],
        [
            "PKOIN",
            "Pocketcoin"
        ],
        [
            "DVI",
            "Dvision Network"
        ],
        [
            "CNHT",
            "CNH Tether"
        ],
        [
            "TAROT",
            "Tarot"
        ],
        [
            "K21",
            "K21"
        ],
        [
            "KMA",
            "Calamari Network"
        ],
        [
            "LCC",
            "Litecoin Cash"
        ],
        [
            "INSUR",
            "InsurAce"
        ],
        [
            "WSI",
            "WeSendit"
        ],
        [
            "UMB",
            "Umbrella Network"
        ],
        [
            "SPE",
            "SavePlanetEarth"
        ],
        [
            "STAX",
            "StableXSwap"
        ],
        [
            "WACME",
            "Wrapped Accumulate"
        ],
        [
            "BEND",
            "BendDAO"
        ],
        [
            "RTM",
            "Raptoreum"
        ],
        [
            "GFI",
            "Gravity Finance"
        ],
        [
            "CLO",
            "Callisto Network"
        ],
        [
            "DRAGONKING",
            "DragonKing"
        ],
        [
            "RING",
            "Darwinia Network"
        ],
        [
            "EUROE",
            "EUROe Stablecoin"
        ],
        [
            "KRAV",
            "Krav"
        ],
        [
            "APW",
            "Spectra"
        ],
        [
            "YDF",
            "Yieldification"
        ],
        [
            "BPT",
            "BlackPool"
        ],
        [
            "MOOI",
            "MOOI Network"
        ],
        [
            "LMWR",
            "LimeWire"
        ],
        [
            "GDCC",
            "Global Digital Cluster Coin"
        ],
        [
            "ADP",
            "Adappter"
        ],
        [
            "KAT",
            "Kambria"
        ],
        [
            "GCR",
            "Global Coin Research"
        ],
        [
            "IPAD",
            "Infinity PAD"
        ],
        [
            "ROME",
            "Rome"
        ],
        [
            "CHART",
            "Nchart Token"
        ],
        [
            "PBR",
            "PolkaBridge"
        ],
        [
            "POLK",
            "Polkamarkets"
        ],
        [
            "VSTA",
            "Vesta Finance"
        ],
        [
            "WIGO",
            "WigoSwap"
        ],
        [
            "WAGIEBOT",
            "Wagie Bot"
        ],
        [
            "CMDX",
            "COMDEX"
        ],
        [
            "USDP",
            "USDP Stablecoin"
        ],
        [
            "AIN",
            "AI Network"
        ],
        [
            "NRCH",
            "Enreach"
        ],
        [
            "BETS",
            "BetSwirl"
        ],
        [
            "C3",
            "Charli3"
        ],
        [
            "MITX",
            "Morpheus Labs"
        ],
        [
            "ZILLIONXO",
            "Zillion Aakar XO"
        ],
        [
            "00",
            "00 Token"
        ],
        [
            "EDGE",
            "Edge"
        ],
        [
            "GZIL",
            "governance ZIL"
        ],
        [
            "IGNIS",
            "Ignis"
        ],
        [
            "HXD",
            "Honeyland"
        ],
        [
            "ROCO",
            "Roco Finance"
        ],
        [
            "AMKT",
            "Alongside Crypto Market Index"
        ],
        [
            "SEND",
            "Send"
        ],
        [
            "QUAD",
            "Quadency"
        ],
        [
            "MBS",
            "MonkeyLeague"
        ],
        [
            "JUR",
            "Jur"
        ],
        [
            "ABYSS",
            "Abyss"
        ],
        [
            "STAT",
            "STAT"
        ],
        [
            "CLINK",
            "cLINK"
        ],
        [
            "STARSHIP",
            "StarShip"
        ],
        [
            "UJENNY",
            "Jenny DAO V1"
        ],
        [
            "YOU",
            "Youves YOU Governance"
        ],
        [
            "XCHF",
            "CryptoFranc"
        ],
        [
            "FCTR",
            "FactorDAO"
        ],
        [
            "HANDY",
            "Handy"
        ],
        [
            "JUP",
            "Jupiter"
        ],
        [
            "OOKS",
            "Onooks"
        ],
        [
            "GMD",
            "GMD"
        ],
        [
            "NPC",
            "Non-Playable Coin"
        ],
        [
            "EMP",
            "Empowa"
        ],
        [
            "RPG",
            "Rangers Protocol"
        ],
        [
            "MARS4",
            "MARS4"
        ],
        [
            "MEAN",
            "Mean DAO"
        ],
        [
            "EXD",
            "Exorde"
        ],
        [
            "DIO",
            "Decimated"
        ],
        [
            "MAPS",
            "MAPS"
        ],
        [
            "PSL",
            "Pastel"
        ],
        [
            "PAR",
            "Parallel"
        ],
        [
            "WALLET",
            "Ambire Wallet"
        ],
        [
            "TREEB",
            "Retreeb"
        ],
        [
            "DRGN",
            "Dragonchain"
        ],
        [
            "LIBRE",
            "Libre"
        ],
        [
            "JESUS",
            "Jesus Coin"
        ],
        [
            "HANU",
            "Hanu Yokia"
        ],
        [
            "BOLT",
            "Bolt"
        ],
        [
            "GOVI",
            "CVI"
        ],
        [
            "CHAIN",
            "Chain Games"
        ],
        [
            "DFL",
            "DeFi Land"
        ],
        [
            "INFRA",
            "Bware"
        ],
        [
            "DOP",
            "Drops Ownership Power"
        ],
        [
            "DOGEGF",
            "DogeGF"
        ],
        [
            "MNFT",
            "Mongol NFT"
        ],
        [
            "MCONTENT",
            "MContent"
        ],
        [
            "COLLAB",
            "Collab.Land"
        ],
        [
            "UFC",
            "UFC Fan Token"
        ],
        [
            "MENGO",
            "Flamengo Fan Token"
        ],
        [
            "PND",
            "Pandacoin"
        ],
        [
            "BIT",
            "BIT"
        ]
    ]
];