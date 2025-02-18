// components/Footer.js
import Link from "next/link";

export default function FooterView() {
  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Content */}
      <div className="container mx-auto p-6 text-center relative z-10">
        {/* Contact Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700">Email: contact@voltify.com</p>
          <p className="text-gray-700">Phone: +64 (234) 567-8900</p>
          <p className="text-gray-700">
            Address: 123 Hellava, Malang, Indonesia
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M1609 5110 c-330 -14 -556 -56 -747 -138 -179 -77 -285 -148 -417
-279 -178 -177 -289 -376 -359 -643 -62 -236 -76 -507 -76 -1490 0 -967 13
-1241 71 -1477 144 -587 574 -961 1207 -1048 181 -24 561 -35 1287 -35 675 0
1064 10 1239 31 358 42 638 166 859 378 249 240 381 527 429 936 19 160 19
2294 0 2445 -39 306 -130 558 -274 751 -71 96 -223 241 -318 306 -215 145
-474 225 -815 254 -161 13 -1813 20 -2086 9z m2163 -483 c285 -42 445 -113
599 -266 100 -100 155 -188 204 -324 82 -230 90 -352 90 -1482 0 -651 -4 -964
-13 -1069 -29 -347 -98 -534 -260 -707 -169 -180 -380 -269 -707 -299 -177
-17 -1640 -25 -1977 -11 -152 6 -311 16 -354 22 -189 26 -372 93 -486 176 -71
53 -185 177 -227 247 -84 140 -134 337 -151 587 -30 454 -20 2012 14 2270 36
267 119 447 276 599 172 167 398 248 748 270 76 4 587 7 1137 5 853 -2 1016
-4 1107 -18z"
                />
                <path
                  d="M3802 4200 c-113 -57 -167 -145 -167 -275 0 -94 22 -150 86 -214 64
-63 120 -86 214 -86 67 0 89 4 137 28 101 50 158 137 166 253 7 103 -16 163
-87 235 -66 66 -124 89 -221 89 -54 0 -78 -6 -128 -30z"
                />
                <path
                  d="M2336 3854 c-263 -48 -496 -171 -692 -368 -260 -259 -385 -562 -385
-926 0 -220 41 -401 132 -583 280 -556 896 -841 1495 -692 236 59 418 161 595
332 159 154 266 322 333 523 48 145 66 257 66 420 0 162 -18 275 -65 417 -64
192 -157 344 -302 494 -198 204 -445 336 -717 384 -111 19 -352 19 -460 -1z
m396 -458 c458 -88 762 -538 674 -999 -54 -279 -259 -527 -521 -628 -128 -50
-202 -62 -350 -56 -105 4 -146 10 -215 32 -303 96 -524 341 -586 649 -24 119
-15 304 21 416 94 298 345 525 644 585 89 18 243 18 333 1z"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M75 5093 c10 -16 448 -653 973 -1418 525 -765 955 -1395 955 -1400 0
-6 -431 -512 -959 -1126 -527 -613 -965 -1123 -973 -1132 -13 -16 1 -17 206
-17 l220 0 849 987 c467 542 854 988 859 989 6 2 316 -442 689 -986 l679 -990
744 0 c705 0 743 1 734 18 -5 9 -460 672 -1010 1472 -550 800 -1001 1457
-1001 1460 0 4 418 492 929 1085 l928 1080 -215 3 c-177 2 -218 0 -231 -12 -9
-8 -374 -431 -811 -939 -437 -509 -798 -923 -802 -921 -4 3 -296 425 -649 939
l-642 935 -745 0 -744 0 17 -27z m2815 -2529 c855 -1224 1557 -2229 1558
-2235 3 -6 -118 -8 -334 -7 l-338 3 -1558 2228 c-857 1226 -1558 2231 -1558
2233 0 2 152 4 338 4 l337 -1 1555 -2225z"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M452 5100 c-109 -29 -187 -74 -272 -160 -87 -86 -131 -163 -160 -276
-20 -76 -20 -118 -20 -2104 0 -1986 0 -2028 20 -2104 29 -113 73 -190 160
-276 86 -87 163 -131 276 -160 76 -20 118 -20 2104 -20 1986 0 2028 0 2104 20
113 29 190 73 276 160 87 86 131 163 160 276 20 76 20 118 20 2104 0 1986 0
2028 -20 2104 -29 113 -73 190 -160 276 -86 87 -163 131 -276 160 -76 20 -117
20 -2108 19 -1967 0 -2033 -1 -2104 -19z m4171 -409 c21 -13 50 -42 65 -64
l27 -41 0 -2025 0 -2026 -24 -38 c-13 -21 -42 -50 -64 -65 l-41 -27 -2026 0
-2026 0 -41 27 c-22 15 -51 44 -64 65 l-24 38 -3 2004 c-1 1390 1 2015 8 2043
13 47 77 114 122 127 21 6 793 9 2043 8 l2010 -2 38 -24z"
                />
                <path
                  d="M1152 4265 c-74 -21 -131 -56 -189 -118 -90 -95 -127 -217 -106 -342
15 -86 46 -149 106 -212 90 -95 203 -140 327 -130 100 8 172 40 244 107 138
130 174 321 90 487 -38 75 -136 165 -211 193 -75 28 -190 35 -261 15z"
                />
                <path
                  d="M3240 3179 c-194 -28 -392 -143 -485 -282 l-35 -52 0 153 0 152 -340
0 -340 0 0 -1130 0 -1130 339 0 340 0 4 653 c4 709 4 707 62 831 72 152 213
226 406 213 136 -9 227 -68 279 -182 52 -112 53 -123 57 -842 l4 -673 345 0
345 0 -4 768 c-3 499 -9 790 -16 832 -75 438 -259 634 -646 690 -81 11 -236
11 -315 -1z"
                />
                <path d="M900 2020 l0 -1130 350 0 350 0 0 1130 0 1130 -350 0 -350 0 0 -1130z" />
              </g>
            </svg>
          </a>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="/terms" passHref>
            <p className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-300">
              Terms of Service
            </p>
          </Link>
          <Link href="/privacy" passHref>
            <p className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-300">
              Privacy Policy
            </p>
          </Link>
          <Link href="/about" passHref>
            <p className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-300">
              About Us
            </p>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2025 Voltify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
