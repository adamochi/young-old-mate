import { useRef } from "react";

import LogoS from "../../../assets/images/logo-s.png";
import "./index.scss";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="young_old_mate"
      />

      <svg
        width="1017pt"
        height="932pt"
        version="1.0"
        viewBox="0 0 1017 932"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M9784 6838 c-27 -29 -65 -73 -84 -97 -19 -24 -70 -71 -114 -105 -253
            -197 -318 -231 -651 -341 -298 -99 -338 -108 -665 -150 -657 -84 -880 -129
            -1210 -245 -290 -101 -539 -224 -760 -373 -92 -63 -303 -242 -387 -331 -225
            -236 -426 -545 -534 -820 -54 -135 -114 -452 -140 -736 -12 -132 -12 -1010 1
            -1353 19 -525 -21 -855 -125 -1042 -108 -192 -394 -316 -895 -386 -308 -43
            -821 -37 -1077 12 -105 20 -305 84 -376 121 -66 33 -128 106 -194 229 -70 131
            -82 162 -116 319 -57 258 -88 775 -102 1725 -11 718 -66 981 -240 1143 -78 73
            -212 142 -350 179 -95 26 -111 27 -340 27 -145 1 -275 -4 -328 -12 -186 -27
            -390 -93 -485 -157 -29 -20 -58 -33 -64 -29 -6 4 -8 3 -4 -4 3 -6 -9 -23 -29
            -38 -43 -33 -110 -132 -131 -196 -9 -29 -20 -46 -26 -42 -6 4 -8 2 -5 -3 4 -6
            -2 -63 -13 -127 -33 -191 -35 -305 -10 -531 25 -233 72 -492 100 -551 11 -23
            20 -47 20 -54 0 -10 15 -11 62 -7 35 4 108 10 163 13 55 4 105 11 112 16 14
            11 12 26 -17 238 -38 267 -55 458 -55 610 0 135 3 164 23 226 46 141 117 188
            310 206 242 22 599 -5 691 -52 39 -20 69 -69 55 -91 -4 -7 -3 -10 4 -5 6 3 15
            -7 21 -26 56 -173 71 -397 81 -1213 10 -814 22 -999 81 -1273 52 -240 188
            -549 322 -728 110 -148 188 -205 382 -277 142 -53 257 -78 490 -108 158 -20
            200 -21 610 -16 467 6 645 17 937 62 217 34 318 63 443 128 94 49 277 238 336
            347 96 177 174 430 190 613 13 160 15 450 5 972 -10 549 4 1098 34 1290 23
            152 31 176 69 198 31 18 165 52 246 62 143 17 474 23 770 13 479 -15 687 2
            1028 88 100 25 189 46 197 47 8 1 17 4 20 7 3 3 38 19 79 34 98 38 259 121
            346 178 39 25 126 81 195 123 221 137 383 279 562 493 83 99 94 116 191 302
            36 69 70 125 75 125 6 0 14 4 19 9 5 5 3 6 -4 2 -21 -12 -16 2 37 100 51 95
            81 166 151 358 47 130 48 135 94 396 30 171 36 229 38 372 1 93 0 174 -4 179
            -3 5 -28 -14 -55 -43z m-289 -850 c-24 -79 -156 -323 -250 -463 -134 -198
            -175 -252 -199 -263 -69 -31 -328 -62 -524 -62 -94 0 -392 27 -402 36 -7 8 20
            22 100 50 41 15 140 51 220 81 80 30 181 67 225 83 254 89 483 236 720 463 55
            53 104 96 108 97 5 0 5 -10 2 -22z m-240 1 c-4 -5 -48 -44 -98 -86 -51 -42
            -97 -81 -103 -87 -25 -23 -163 -119 -239 -167 -122 -76 -386 -201 -520 -247
            -125 -43 -367 -97 -392 -88 -8 3 -12 2 -9 -3 6 -10 -43 -25 -52 -17 -2 3 16
            30 42 60 51 60 133 124 406 316 l175 124 220 48 c250 54 403 96 490 132 65 27
            90 32 80 15z m-1115 -237 c0 -4 -11 -14 -25 -22 -42 -26 -215 -191 -282 -269
            -35 -41 -78 -104 -95 -139 -18 -35 -41 -68 -52 -73 -12 -4 -90 -22 -175 -39
            -85 -18 -202 -45 -260 -62 -58 -16 -131 -30 -162 -31 -31 -1 -55 -4 -53 -6 6
            -6 -108 -52 -114 -46 -19 18 162 198 389 386 90 75 197 164 236 198 86 73 99
            76 358 96 218 16 235 17 235 7z m-840 -120 c0 -4 -19 -22 -41 -40 -23 -17
            -104 -90 -179 -162 -148 -140 -268 -292 -303 -385 -25 -67 -28 -70 -121 -113
            -44 -21 -112 -57 -151 -79 -38 -22 -135 -77 -215 -122 -336 -192 -410 -242
            -540 -365 -68 -66 -85 -77 -88 -62 -6 27 70 174 131 255 83 110 271 311 400
            428 320 289 548 434 918 583 180 72 189 75 189 62z m584 -506 c164 -48 277
            -59 536 -51 164 4 264 12 330 25 52 10 117 21 144 24 l49 6 -19 -21 c-35 -39
            -218 -195 -301 -256 l-82 -61 -178 -7 c-278 -12 -798 22 -997 64 -22 5 -70 12
            -106 16 -66 7 -220 59 -220 75 0 11 215 78 415 131 88 23 189 50 225 60 86 24
            105 23 204 -5z m-932 -280 c167 -76 417 -139 668 -168 58 -7 229 -12 382 -12
            237 0 276 -2 266 -14 -44 -53 -364 -158 -631 -208 -115 -21 -180 -25 -497 -34
            -552 -15 -1009 -31 -1069 -37 -36 -4 -52 -2 -50 5 4 10 239 169 374 252 232
            143 433 249 471 250 6 0 45 -15 86 -34z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
