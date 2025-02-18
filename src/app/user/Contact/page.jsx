// pages/contact.js
import Head from "next/head";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full bg-purple-400 opacity-50 animate-particle-move-${
              i % 3
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-2xl w-full relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 text-center mb-6">
            Contact Us
          </h2>

          {/* Email Section */}
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">Email</h3>
              <p className="text-gray-600">Contact@Voltify.com</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M985 4570 c-117 -24 -238 -96 -307 -181 -124 -156 -146 -292 -95
-589 141 -806 509 -1526 1076 -2103 453 -462 976 -787 1583 -986 316 -103 710
-181 841 -166 194 22 355 133 433 300 52 113 55 152 52 670 -3 457 -4 471 -25
517 -29 63 -99 137 -152 161 -24 10 -105 27 -180 37 -240 33 -417 80 -631 170
-141 59 -195 68 -277 45 -96 -27 -148 -74 -219 -195 -81 -139 -119 -180 -171
-180 -26 0 -54 10 -84 28 -266 170 -769 702 -769 814 0 58 25 84 150 159 155
91 173 107 211 185 28 55 32 76 32 137 -1 64 -7 87 -56 208 -86 207 -139 419
-167 654 -18 152 -75 240 -189 294 l-56 26 -480 2 c-264 1 -498 -2 -520 -7z
m984 -216 c33 -28 45 -63 55 -160 19 -179 103 -493 183 -678 38 -89 43 -134
19 -170 -8 -13 -68 -55 -133 -92 -134 -78 -185 -124 -218 -198 -56 -122 -40
-218 56 -354 98 -137 225 -288 344 -407 165 -165 416 -364 512 -407 80 -35
214 -23 292 26 51 33 67 53 146 183 39 64 82 125 98 136 38 29 79 25 176 -18
219 -97 486 -167 716 -190 80 -8 108 -22 130 -65 14 -27 15 -90 13 -498 -3
-454 -4 -468 -25 -514 -51 -111 -160 -187 -281 -195 -77 -6 -290 29 -485 78
-1239 312 -2238 1236 -2641 2441 -95 286 -172 658 -164 798 9 155 116 273 270
299 29 5 245 9 480 10 l426 1 31 -26z"
                  />
                  <path
                    d="M3127 4560 c-21 -14 -47 -62 -47 -90 0 -29 27 -77 50 -90 10 -5 71
-14 135 -20 265 -21 486 -113 688 -285 238 -203 407 -558 407 -856 0 -55 20
-103 49 -119 36 -19 96 -12 124 14 35 33 41 75 27 207 -36 342 -177 631 -423
865 -193 184 -420 305 -677 360 -95 20 -308 29 -333 14z"
                  />
                  <path
                    d="M3114 3686 c-33 -33 -36 -40 -31 -78 8 -63 40 -88 125 -98 89 -12
155 -44 211 -105 51 -56 69 -96 86 -195 16 -90 42 -120 106 -120 31 0 47 7 70
29 26 27 29 36 29 94 0 256 -217 481 -486 504 l-73 6 -37 -37z"
                  />{" "}
                </g>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">Phone</h3>
              <p className="text-gray-600">+64 (123) 456-7890</p>
            </div>
          </div>

          {/* Address Section */}
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">Address</h3>
              <p className="text-gray-600">123 Hellava, Malang, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
