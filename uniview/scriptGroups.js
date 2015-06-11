// hand-crafted list of Unicode blocks
// field[3] is a link to the scriptdata file, if there is one
// field[4] is a link to the block/script file, if there is one
// script block must be listed in order

var titles = new Array(
"0¶127¶Basic Latin¶latin¶39 45 95",
"128¶255¶Latin-1 Supplement¶latin¶",
"256¶383¶Latin Extended-A¶latin¶",
"384¶591¶Latin Extended-B¶latin¶577:578",
"592¶687¶IPA Extensions¶latin¶660",
"688¶767¶Spacing Modifier Letters¶¶",
"768¶879¶Combining Diacritical Marks¶¶",
"880¶1023¶Greek and Coptic¶greek¶884 894 900 902:906 908 910:929 931:974 988:993",
"1024¶1279¶Cyrillic¶cyrillic¶",
"1280¶1327¶Cyrillic Supplement¶cyrillic¶",
"1328¶1423¶Armenian¶armenian¶1329:1366 1375 1377:1414",
"1424¶1535¶Hebrew¶hebrew¶1478:1479 1488:1514 1520 1523:1524",
"1536¶1791¶Arabic¶arabic¶1536:1539 1550:1556 1563 1566:1567 1569:1594 1601:1618 1620 1622:1624 1642:1643 1648 1657 1662 1665 1669 1670 1672 1681 1688 1705 1711 1722 1726 1729:1730 1740 1746:1748 1776:1785",
"1792¶1871¶Syriac¶syriac¶",
"1872¶1919¶Arabic Supplement¶arabic¶1900",
"1920¶1983¶Thaana¶thaana¶",
"1984¶2047¶NKo¶nko¶",
"2048¶2111¶Samaritan¶samaritan¶",
"2112¶2143¶Mandaic¶mandaic¶",
"2208¶2303¶Arabic Extended-A¶arabic¶2209 2216",
"2304¶2431¶Devanagari¶devanagari¶2364 2404:2405",
"2432¶2559¶Bengali¶bengali¶2433:2435 2437:2444 2447:2448 2451:2472 2474:2480 2482 2486:2489 2492 2494:2500 2503:2504 2507:2510 2519 2524:2525 2527:2531 2534:2546 2548:2554",
"2560¶2687¶Gurmukhi¶gurmukhi¶",
"2688¶2815¶Gujarati¶gujarati¶",
"2816¶2943¶Oriya¶oriya¶",
"2944¶3071¶Tamil¶tamil¶2947 2949:2954 2958:2960 2962:2965 2969:2970 2972 2974:2975 2979:2980 2984:2986 2990:3001 3006:3010 3014:3016 3018:3021 3024 3031 3046:3066",
"3072¶3199¶Telugu¶telugu¶",
"3200¶3327¶Kannada¶kannada¶",
"3328¶3455¶Malayalam¶malayalam¶3330 3333:3340 3342:3344 3346:3368 3370:3385 3402:3404 3424:3427",
"3456¶3583¶Sinhala¶sinhala¶",
"3584¶3711¶Thai¶thai¶3585:3616 3618:3642 3648:3661 3663 3674:3675",
"3712¶3839¶Lao¶lao¶3713:3714 3716 3719:3720 3722 3725 3732:3735 3737:3743 3745:3747 3749 3751 3754:3755 3757:3769 3771:3773 3776:3780 3782 3784:3787 3789 3792:3801 3804:3805",
"3840¶4095¶Tibetan¶tibetan¶3848:3851 3853:3854 3860 3866:3871 3882:3895 3897:3911 3913:3946 3953:3969 3972 3976:3977 3980:3991 3993:3999 4001:4002 4004:4007 4009:4014 4016:4028 4030:4031 4038 4044 4046:4047 4050:4056",
"4096¶4255¶Myanmar¶myanmar¶4096:4129 4131:4135 4137:4146 4150:4175",
"4256¶4351¶Georgian¶georgian¶",
"4352¶4607¶Hangul Jamo¶hangul¶",
"4608¶4991¶Ethiopic¶ethiopic¶",
"4992¶5023¶Ethiopic Supplement¶ethiopic¶",
"5024¶5119¶Cherokee¶cherokee¶",
"5120¶5759¶Unified Canadian Aboriginal Syllabics¶ucas¶",
"5760¶5791¶Ogham¶ogham¶",
"5792¶5887¶Runic¶runic¶",
"5888¶5919¶Tagalog¶tagalog¶",
"5920¶5951¶Hanunoo¶hanunoo¶",
"5952¶5983¶Buhid¶buhid¶",
"5984¶6015¶Tagbanwa¶tagbanwa¶",
"6016¶6143¶Khmer¶khmer¶6016:6056 6058:6066 6070:6098 6100:6107 6109 6112:6121",
"6144¶6319¶Mongolian¶mongolian¶6150 6154 6158 6176:6210",
"6320¶6399¶Unified Canadian Aboriginal Syllabics Extended¶ucas¶",
"6400¶6479¶Limbu¶limbu¶",
"6480¶6527¶Tai Le¶taile¶",
"6528¶6623¶New Tai Lue¶newtailue¶",
"6624¶6655¶Khmer Symbols¶khmer¶",
"6656¶6687¶Buginese¶buginese¶",
"6688¶6831¶Tai Tham¶taitham¶",
"6832¶6911¶Combining Diacritical Marks Extended¶¶",
"6912¶7039¶Balinese¶balinese¶6912:6923 6927:6941 6945:6980 6980 6992:7008",
"7040¶7103¶Sundanese¶sundanese¶",
"7104¶7167¶Batak¶batak¶",
"7168¶7247¶Lepcha¶lepcha¶",
"7248¶7295¶Ol Chiki¶olchiki¶",
"7360¶7375¶Sundanese Supplement¶sundanese¶",
"7376¶7423¶Vedic Extensions¶¶",
"7424¶7551¶Phonetic Extensions¶¶",
"7552¶7615¶Phonetic Extensions Supplement¶¶",
"7616¶7679¶Combining Diacritical Marks Supplement¶¶",
"7680¶7935¶Latin Extended Additional¶latin¶",
"7936¶8191¶Greek Extended¶greek¶",
"8192¶8303¶General Punctuation¶¶",
"8304¶8351¶Superscripts and Subscripts¶¶",
"8352¶8399¶Currency Symbols¶¶",
"8400¶8447¶Combining Diacritical Marks for Symbols¶¶",
"8448¶8527¶Letterlike Symbols¶¶",
"8528¶8591¶Number Forms¶¶",
"8592¶8703¶Arrows¶¶",
"8704¶8959¶Mathematical Operators¶¶",
"8960¶9215¶Miscellaneous Technical¶¶",
"9216¶9279¶Control Pictures¶¶",
"9280¶9311¶Optical Character Recognition¶¶",
"9312¶9471¶Enclosed Alphanumerics¶¶",
"9472¶9599¶Box Drawing¶¶",
"9600¶9631¶Block Elements¶¶",
"9632¶9727¶Geometric Shapes¶¶",
"9728¶9983¶Miscellaneous Symbols¶¶",
"9984¶10175¶Dingbats¶¶",
"10176¶10223¶Miscellaneous Mathematical Symbols-A¶¶",
"10224¶10239¶Supplemental Arrows-A¶¶",
"10240¶10495¶Braille Patterns¶¶",
"10496¶10623¶Supplemental Arrows-B¶¶",
"10624¶10751¶Miscellaneous Mathematical Symbols-B¶¶",
"10752¶11007¶Supplemental Mathematical Operators¶¶",
"11008¶11263¶Miscellaneous Symbols and Arrows¶¶",
"11264¶11359¶Glagolitic¶glagolitic¶",
"11360¶11391¶Latin Extended-C¶latin¶",
"11392¶11519¶Coptic¶coptic¶",
"11520¶11567¶Georgian Supplement¶georgian¶",
"11568¶11647¶Tifinagh¶tifinagh¶11568:11621 11631",
"11648¶11743¶Ethiopic Extended¶ethiopic¶",
"11744¶11775¶Cyrillic Extended-A¶cyrillic¶",
"11776¶11903¶Supplemental Punctuation¶¶",
"11904¶12031¶CJK Radicals Supplement¶han¶",
"12032¶12255¶Kangxi Radicals¶han¶",
"12272¶12287¶Ideographic Description Characters¶han¶",
"12288¶12351¶CJK Symbols and Punctuation¶han¶",
"12352¶12447¶Hiragana¶japanese¶",
"12448¶12543¶Katakana¶japanese¶",
"12544¶12591¶Bopomofo¶bopomofo¶",
"12592¶12687¶Hangul Compatibility Jamo¶hangul¶",
"12688¶12703¶Kanbun¶¶",
"12704¶12735¶Bopomofo Extended¶bopomofo¶",
"12736¶12783¶CJK Strokes¶han¶",
"12784¶12799¶Katakana Phonetic Extensions¶japanese¶",
"12800¶13055¶Enclosed CJK Letters and Months¶han¶",
"13056¶13311¶CJK Compatibility¶han¶",
"13312¶19903¶CJK Unified Ideographs Extension A¶han¶",
"19904¶19967¶Yijing Hexagram Symbols¶¶",
"19968¶40959¶CJK Unified Ideographs¶han¶",
"40960¶42127¶Yi Syllables¶yi¶",
"42128¶42191¶Yi Radicals¶yi¶",
"42192¶42239¶Lisu¶lisu¶42192:42239",
"42240¶42559¶Vai¶vai¶",
"42560¶42655¶Cyrillic Extended-B¶cyrillic¶",
"42656¶42751¶Bamum¶bamum¶",
"42752¶42783¶Modifier Tone Letters¶¶",
"42784¶43007¶Latin Extended-D¶latin¶",
"43008¶43055¶Syloti Nagri¶sylotinagri¶",
"43056¶43071¶Common Indic Number Forms¶¶",
"43072¶43135¶Phags-pa¶phagspa¶",
"43136¶43231¶Saurashtra¶saurashtra¶",
"43232¶43263¶Devanagari Extended¶devanagari¶",
"43264¶43311¶Kayah Li¶kayahli¶",
"43312¶43359¶Rejang¶rejang¶",
"43360¶43391¶Hangul Jamo Extended-A¶hangul¶",
"43392¶43487¶Javanese¶javanese¶",
"43488¶43519¶Myanmar Extended-B¶myanmar¶",
"43520¶43615¶Cham¶cham¶",
"43616¶43647¶Myanmar Extended-A¶myanmar¶",
"43648¶43743¶Tai Viet¶taiviet¶",
"43744¶43775¶Meetei Mayek Extensions¶meeteimayek¶",
"43776¶43823¶Ethiopic Extended-A¶ethiopic¶",
"43824¶43887¶Latin Extended-E¶latin¶",
"43888¶43967¶Cherokee Supplement¶cherokee¶",
"43968¶44031¶Meetei Mayek¶meeteimayek¶",
"44032¶55215¶Hangul Syllables¶hangul¶",
"55216¶55295¶Hangul Jamo Extended-B¶hangul¶",
"55296¶56191¶High Surrogates¶¶",
"56192¶56319¶High Private Use Surrogates¶¶",
"56320¶57343¶Low Surrogates¶¶",
"57344¶63743¶Private Use Area¶¶",
"63744¶64255¶CJK Compatibility Ideographs¶han¶",
"64256¶64335¶Alphabetic Presentation Forms¶¶",
"64336¶65023¶Arabic Presentation Forms-A¶arabic¶",
"65024¶65039¶Variation Selectors¶¶",
"65040¶65055¶Vertical Forms¶¶",
"65056¶65071¶Combining Half Marks¶¶",
"65072¶65103¶CJK Compatibility Forms¶¶",
"65104¶65135¶Small Form Variants¶¶",
"65136¶65279¶Arabic Presentation Forms-B¶arabic¶",
"65280¶65519¶Halfwidth and Fullwidth Forms¶latin¶",
"65520¶65535¶Specials¶¶",
"65536¶65663¶Linear B Syllabary¶linearb¶",
"65664¶65791¶Linear B Ideograms¶linearb¶",
"65792¶65855¶Aegean Numbers¶¶",
"65856¶65935¶Ancient Greek Numbers¶greek¶",
"65936¶65999¶Ancient Symbols¶¶",
"66000¶66047¶Phaistos Disc¶phaistos¶",
"66176¶66207¶Lycian¶lycian¶",
"66208¶66271¶Carian¶carian¶",
"66272¶66303¶Coptic Epact Numbers¶¶",
"66304¶66351¶Old Italic¶olditalic¶",
"66352¶66383¶Gothic¶gothic¶",
"66384¶66431¶Old Permic¶¶",
"66432¶66463¶Ugaritic¶ugaritic¶",
"66464¶66527¶Old Persian¶oldpersian¶",
"66560¶66639¶Deseret¶deseret¶",
"66640¶66687¶Shavian¶shavian¶",
"66688¶66735¶Osmanya¶osmanya¶",
"66816¶66863¶Elbasan¶¶",
"66864¶66927¶Caucasian Albanian¶¶",
"67072¶67455¶Linear A¶¶",
"67584¶67647¶Cypriot Syllabary¶cypriot¶",
"67648¶67679¶Imperial Aramaic¶aramaic¶",
"67680¶67711¶Palmyrene¶¶",
"67712¶67759¶Nabataean¶¶",
"67808¶67839¶Hatran¶hatran¶",
"67840¶67871¶Phoenician¶phoenician¶",
"67872¶67903¶Lydian¶lydian¶",
"67968¶67999¶Meroitic Hieroglyphs¶meroitic¶",
"68000¶68095¶Meroitic Cursive¶meroitic¶",
"68096¶68191¶Kharoshthi¶kharoshthi¶",
"68192¶68223¶Old South Arabian¶southarabian¶",
"68224¶68255¶Old North Arabian¶¶",
"68288¶68351¶Manichaean¶¶",
"68352¶68415¶Avestan¶avestan¶",
"68416¶68447¶Inscriptional Parthian¶parthian¶",
"68448¶68479¶Inscriptional Pahlavi¶pahlavi¶",
"68480¶68527¶Psalter Pahlavi¶¶",
"68608¶68687¶Old Turkic¶oldturkic¶",
"68608¶68687¶Old Turkic¶oldturkic¶",
"68736¶68863¶Old Hungarian¶oldhungarian¶",
"69632¶69759¶Brahmi¶brahmi¶",
"69760¶69839¶Kaithi¶kaithi¶",
"69840¶69887¶Sora Sompeng¶sorasompeng¶",
"69888¶69967¶Chakma¶chakma¶",
"69968¶70015¶Mahajani¶¶",
"70016¶70111¶Sharada¶sharada¶",
"70112¶70143¶Sinhala Archaic Numbers¶¶",
"70144¶70223¶Khojki¶¶",
"70272¶70319¶Multani¶multani¶",
"70320¶70399¶Khudawadi¶¶",
"70400¶70527¶Grantha¶¶",
"70784¶70879¶Tirhuta¶¶",
"71040¶71167¶Siddham¶¶",
"71168¶71263¶Modi¶¶",
"71296¶71375¶Takri¶takri¶",
"71424¶71487¶Ahom¶ahom¶",
"71840¶71935¶Warang Citi¶¶",
"72384¶72447¶Pau Cin Hau¶¶",
"73728¶74751¶Cuneiform¶cuneiform¶",
"74752¶74879¶Cuneiform Numbers and Punctuation¶cuneiform¶",
"74880¶75087¶Early Dynastic Cuneiform¶cuneiform¶",
"77824¶78895¶Egyptian Hieroglyphs¶egyptian¶",
"82944¶83583¶Anatolian Hieroglyphs¶anatolianhieroglyphs¶",
"92160¶92735¶Bamum Supplement¶bamum¶",
"92736¶92783¶Mro¶¶",
"92880¶92927¶Bassa Vah¶¶",
"92928¶93071¶Pahawh Hmong¶¶",
"93952¶94111¶Miao¶miao¶",
"110592¶110847¶Kana Supplement¶japanese¶",
"113664¶113823¶Duployan¶¶",
"113824¶113839¶Shorthand Format Controls¶¶",
"118784¶119039¶Byzantine Musical Symbols¶¶",
"119040¶119295¶Musical Symbols¶¶",
"119296¶119375¶Ancient Greek Musical Notation¶greek¶",
"119552¶119647¶Tai Xuan Jing Symbols¶¶",
"119648¶119679¶Counting Rod Numerals¶¶",
"119808¶120831¶Mathematical Alphanumeric Symbols¶¶",
"120832¶121519¶Sutton SignWriting¶¶",
"124928¶125151¶Mende Kikakui¶¶",
"126464¶126719¶Arabic Mathematical Alphabetic Symbols¶¶",
"126976¶127023¶Mahjong Tiles¶¶",
"127024¶127135¶Domino Tiles¶¶",
"127136¶127231¶Playing Cards¶¶",
"127232¶127487¶Enclosed Alphanumeric Supplement¶¶",
"127488¶127743¶Enclosed Ideographic Supplement¶¶",
"127744¶128511¶Miscellaneous Symbols and Pictographs¶¶",
"128512¶128591¶Emoticons¶¶",
"128592¶128639¶Ornamental Dingbats¶¶",
"128640¶128767¶Transport And Map Symbols¶¶",
"128768¶128895¶Alchemical Symbols¶¶",
"128896¶129023¶Geometric Shapes Extended¶¶",
"129024¶129279¶Supplemental Arrows-C¶¶",
"129280¶129535¶Supplemental Symbols and Pictographs¶¶",
"131072¶173791¶CJK Unified Ideographs Extension B¶han¶",
"173824¶177983¶CJK Unified Ideographs Extension C¶han¶",
"177984¶178207¶CJK Unified Ideographs Extension D¶han¶",
"178208¶183983¶CJK Unified Ideographs Extension E¶han¶",
"194560¶195103¶CJK Compatibility Ideographs Supplement¶han¶",
"917504¶917631¶Tags¶¶",
"917760¶917999¶Variation Selectors Supplement¶¶",
"983040¶1048575¶Supplementary Private Use Area-A¶¶",
"1048576¶1114111¶Supplementary Private Use Area-B¶¶",
"▲");


var scriptGroups = new Array;
for (i=0; i<titles.length; i++) {
	scriptGroups[i+1] = titles[i].split('¶');
	}
scriptGroups[0] = "▲";

