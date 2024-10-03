'use client';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFound = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.push('/');
    };
    return (
        <div className="errorContainer h-screen flex justify-center items-center ">
            <div>
                <div className="hidden  md:flex items-center justify-center">
                    <svg width={161} height={200} viewBox="0 0 161 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.379883 160.556V130L90.8989 0H136.02V126.667H160.38V160.556H136.02V200H97.2657V160.556H0.379883ZM99.7571 41.6667L43.0096 126.667H99.7571V41.6667Z"
                            fill="#0A8FDC"
                        />
                    </svg>

                    <svg width={255} height={231} viewBox="0 0 255 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M127.481 230.861C197.467 230.861 254.202 224.148 254.202 215.867C254.202 207.586 197.467 200.874 127.481 200.874C57.4947 200.874 0.759766 207.586 0.759766 215.867C0.759766 224.148 57.4947 230.861 127.481 230.861Z"
                            fill="url(#paint0_radial_171_12368)"
                        />
                        <path
                            d="M127.481 186.609C172.085 186.609 208.244 150.45 208.244 105.845C208.244 61.2412 172.085 25.0823 127.481 25.0823C82.8762 25.0823 46.7173 61.2412 46.7173 105.845C46.7173 150.45 82.8762 186.609 127.481 186.609Z"
                            fill="url(#paint1_radial_171_12368)"
                        />
                        <path
                            style={{ mixBlendMode: 'multiply' }}
                            opacity="0.69"
                            d="M127.481 186.609C172.085 186.609 208.244 150.45 208.244 105.845C208.244 61.2412 172.085 25.0823 127.481 25.0823C82.8762 25.0823 46.7173 61.2412 46.7173 105.845C46.7173 150.45 82.8762 186.609 127.481 186.609Z"
                            fill="url(#paint2_radial_171_12368)"
                        />
                        <path
                            style={{ mixBlendMode: 'screen' }}
                            opacity="0.69"
                            d="M175.015 143.253C201.266 117.002 201.266 74.4405 175.015 48.1894C148.764 21.9384 106.203 21.9384 79.9517 48.1894C53.7006 74.4405 53.7006 117.002 79.9517 143.253C106.203 169.504 148.764 169.504 175.015 143.253Z"
                            fill="url(#paint3_linear_171_12368)"
                        />
                        <path
                            style={{ mixBlendMode: 'multiply' }}
                            opacity="0.15"
                            d="M127.481 186.609C172.085 186.609 208.244 150.45 208.244 105.845C208.244 61.2412 172.085 25.0823 127.481 25.0823C82.8762 25.0823 46.7173 61.2412 46.7173 105.845C46.7173 150.45 82.8762 186.609 127.481 186.609Z"
                            stroke="url(#paint4_radial_171_12368)"
                            strokeMiterlimit={10}
                        />
                        <path
                            style={{ mixBlendMode: 'multiply' }}
                            opacity="0.36"
                            d="M127.481 178.255C87.1064 178.255 54.218 146.213 52.8477 106.174C52.8185 107.041 52.7966 107.901 52.7966 108.776C52.7966 150.025 86.2317 183.46 127.481 183.46C168.73 183.46 202.165 150.025 202.165 108.776C202.165 107.901 202.143 107.041 202.114 106.174C200.743 146.213 167.855 178.255 127.481 178.255Z"
                            fill="url(#paint5_radial_171_12368)"
                        />
                        <g opacity="0.67">
                            <path
                                d="M155.988 155.922C154.487 155.922 153.022 155.149 152.205 153.757C144.231 140.111 126.643 135.49 112.997 143.464C108.755 145.943 105.213 149.471 102.742 153.676C101.517 155.761 98.8419 156.461 96.7572 155.236C94.6725 154.012 93.9728 151.337 95.1973 149.252C98.4191 143.756 103.048 139.142 108.58 135.913C126.395 125.504 149.348 131.532 159.757 149.347C160.974 151.431 160.274 154.114 158.19 155.331C157.497 155.739 156.739 155.929 155.988 155.929V155.922Z"
                                fill="url(#paint6_linear_171_12368)"
                                stroke="url(#paint7_linear_171_12368)"
                                strokeWidth="0.25"
                                strokeMiterlimit={10}
                            />
                            <g style={{ mixBlendMode: 'multiply' }}>
                                <path
                                    d="M155.609 155.914C154.108 155.914 152.643 155.142 151.826 153.749C143.852 140.104 126.263 135.483 112.618 143.457C108.376 145.935 104.833 149.463 102.362 153.669C101.138 155.754 98.4627 156.454 96.3781 155.229C94.2934 154.004 93.5936 151.329 94.8182 149.245C98.04 143.749 102.669 139.135 108.201 135.906C126.016 125.497 148.969 131.525 159.378 149.339C160.595 151.424 159.895 154.106 157.811 155.324C157.118 155.732 156.36 155.921 155.609 155.921V155.914Z"
                                    fill="url(#paint8_linear_171_12368)"
                                    stroke="url(#paint9_linear_171_12368)"
                                    strokeWidth="0.25"
                                    strokeMiterlimit={10}
                                />
                            </g>
                        </g>
                        <path
                            d="M98.9729 151.461C101.743 146.737 105.73 142.641 110.796 139.681C126.548 130.475 146.782 135.789 155.988 151.541"
                            stroke="black"
                            strokeWidth={9}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g style={{ mixBlendMode: 'screen' }}>
                            <path
                                d="M98.9729 151.461C101.743 146.737 105.73 142.641 110.796 139.681C126.548 130.475 146.782 135.789 155.988 151.541"
                                stroke="black"
                                strokeWidth={6}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <g style={{ mixBlendMode: 'multiply' }} opacity="0.6">
                            <path
                                d="M127.481 147.422C135.798 147.422 142.802 151.067 144.967 156.031C145.893 153.917 146.002 151.577 144.756 149.128C142.584 144.849 136.796 141.628 129.937 141.044C118.799 140.097 109.294 145.724 109.294 152.794C109.294 153.917 109.55 155.003 110.001 156.038C112.166 151.074 119.171 147.43 127.488 147.43L127.481 147.422Z"
                                fill="url(#paint10_linear_171_12368)"
                            />
                        </g>
                        <g style={{ mixBlendMode: 'multiply' }} opacity="0.6">
                            <path
                                d="M96.6696 153.939C94.4829 152.27 93.7904 149.361 94.789 146.868C93.8779 147.561 93.1125 148.501 92.6679 149.769C91.888 151.978 92.3982 154.471 94.0164 156.089C96.6477 158.713 100.919 158.29 103.15 155.368C103.507 154.901 103.776 154.398 103.988 153.881C101.852 155.499 98.8636 155.608 96.6696 153.939Z"
                                fill="url(#paint11_linear_171_12368)"
                            />
                        </g>
                        <g style={{ mixBlendMode: 'multiply' }} opacity="0.6">
                            <path
                                d="M158.292 153.939C160.478 152.27 161.171 149.361 160.172 146.868C161.083 147.561 161.849 148.501 162.293 149.769C163.073 151.978 162.563 154.471 160.945 156.089C158.314 158.713 154.042 158.29 151.812 155.368C151.454 154.901 151.185 154.398 150.973 153.881C153.109 155.499 156.098 155.608 158.292 153.939Z"
                                fill="url(#paint12_linear_171_12368)"
                            />
                        </g>
                        <g style={{ mixBlendMode: 'multiply' }} opacity="0.6">
                            <path
                                d="M152.526 72.0823C146.957 72.0823 142.43 76.6088 142.43 82.1777V103.178L149.297 106.509L142.43 108.856V115.788C142.43 121.357 146.957 125.883 152.526 125.883C158.095 125.883 162.621 121.357 162.621 115.788V82.185C162.621 76.6161 158.095 72.0896 152.526 72.0896V72.0823Z"
                                fill="black"
                            />
                            <path
                                d="M152.526 72.0823C146.957 72.0823 142.43 76.6088 142.43 82.1777V103.178L149.297 106.509L142.43 108.856V115.788C142.43 121.357 146.957 125.883 152.526 125.883C158.095 125.883 162.621 121.357 162.621 115.788V82.185C162.621 76.6161 158.095 72.0896 152.526 72.0896V72.0823Z"
                                stroke="url(#paint13_linear_171_12368)"
                                strokeWidth="0.49"
                                strokeMiterlimit={10}
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </g>
                        <path
                            d="M152.526 124.797C147.547 124.797 143.509 120.759 143.509 115.78V109.621L152.118 106.676L143.509 102.5V82.1777C143.509 77.1993 147.547 73.1611 152.526 73.1611C157.504 73.1611 161.543 77.1993 161.543 82.1777V115.78C161.543 120.759 157.504 124.797 152.526 124.797Z"
                            fill="black"
                        />
                        <g style={{ mixBlendMode: 'screen' }}>
                            <path
                                d="M144.603 82.3383C144.603 77.9575 148.153 74.4077 152.533 74.4077C156.914 74.4077 160.464 77.9575 160.464 82.3383C160.464 86.719 156.914 96.4645 152.533 96.4645C148.153 96.4645 144.603 86.719 144.603 82.3383Z"
                                fill="black"
                            />
                        </g>
                        <g style={{ mixBlendMode: 'screen' }}>
                            <path
                                d="M160.256 117.562C161.267 113.3 158.633 109.025 154.371 108.014C150.109 107.003 145.835 109.638 144.824 113.899C143.812 118.161 146.447 122.435 150.709 123.447C154.97 124.458 159.245 121.823 160.256 117.562Z"
                                fill="black"
                            />
                        </g>
                        <g style={{ mixBlendMode: 'multiply' }} opacity="0.6">
                            <path
                                d="M102.435 72.0823C96.8666 72.0823 92.3401 76.6088 92.3401 82.1777V103.178L99.2064 106.509L92.3401 108.856V115.788C92.3401 121.357 96.8666 125.883 102.435 125.883C108.004 125.883 112.531 121.357 112.531 115.788V82.185C112.531 76.6161 108.004 72.0896 102.435 72.0896V72.0823Z"
                                fill="black"
                            />
                            <path
                                d="M102.435 72.0823C96.8666 72.0823 92.3401 76.6088 92.3401 82.1777V103.178L99.2064 106.509L92.3401 108.856V115.788C92.3401 121.357 96.8666 125.883 102.435 125.883C108.004 125.883 112.531 121.357 112.531 115.788V82.185C112.531 76.6161 108.004 72.0896 102.435 72.0896V72.0823Z"
                                stroke="url(#paint14_linear_171_12368)"
                                strokeWidth="0.49"
                                strokeMiterlimit={10}
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </g>
                        <path
                            d="M102.435 124.797C97.4569 124.797 93.4187 120.759 93.4187 115.78V109.621L102.027 106.676L93.4187 102.5V82.1777C93.4187 77.1993 97.4569 73.1611 102.435 73.1611C107.414 73.1611 111.452 77.1993 111.452 82.1777V115.78C111.452 120.759 107.414 124.797 102.435 124.797Z"
                            fill="black"
                        />
                        <g style={{ mixBlendMode: 'screen' }}>
                            <path
                                d="M94.5046 82.3383C94.5046 77.9575 98.0544 74.4077 102.435 74.4077C106.816 74.4077 110.366 77.9575 110.366 82.3383C110.366 86.719 106.816 96.4645 102.435 96.4645C98.0544 96.4645 94.5046 86.719 94.5046 82.3383Z"
                                fill="black"
                            />
                        </g>
                        <g style={{ mixBlendMode: 'screen' }}>
                            <path
                                d="M108.045 121.317C111.142 118.22 111.142 113.199 108.045 110.101C104.948 107.004 99.927 107.004 96.8299 110.101C93.7328 113.199 93.7328 118.22 96.8299 121.317C99.927 124.414 104.948 124.414 108.045 121.317Z"
                                fill="black"
                            />
                        </g>
                        <g style={{ mixBlendMode: 'multiply' }}>
                            <path
                                d="M85.7576 73.1465C83.0971 73.1465 80.422 72.6727 77.849 71.7178C75.7716 70.9452 74.7147 68.6419 75.4873 66.5645C76.2599 64.4871 78.5706 63.4301 80.6407 64.2028C88.2287 67.0164 96.6913 63.1386 99.5049 55.5506C100.278 53.4732 102.581 52.4163 104.658 53.189C106.736 53.9616 107.793 56.265 107.02 58.3424C104.913 64.0279 100.715 68.5471 95.2043 71.0764C92.1866 72.4613 88.9794 73.1538 85.7576 73.1538V73.1465Z"
                                fill="url(#paint15_linear_171_12368)"
                                stroke="black"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                            />
                            <g style={{ mixBlendMode: 'screen' }}>
                                <path
                                    d="M85.7576 73.1465C83.0971 73.1465 80.422 72.6727 77.849 71.7178C75.7716 70.9452 74.7147 68.6419 75.4873 66.5645C76.2599 64.4871 78.5706 63.4301 80.6407 64.2028C88.2287 67.0164 96.6913 63.1386 99.5049 55.5506C100.278 53.4732 102.581 52.4163 104.658 53.189C106.736 53.9616 107.793 56.265 107.02 58.3424C104.913 64.0279 100.715 68.5471 95.2043 71.0764C92.1866 72.4613 88.9794 73.1538 85.7576 73.1538V73.1465Z"
                                    fill="url(#paint16_linear_171_12368)"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                />
                            </g>
                        </g>
                        <path
                            d="M103.259 56.9429C99.6728 66.6155 88.9141 71.5502 79.2415 67.9567"
                            stroke="black"
                            strokeWidth={9}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g style={{ mixBlendMode: 'screen' }}>
                            <path
                                d="M103.259 56.9429C99.6728 66.6155 88.9141 71.5502 79.2415 67.9567"
                                stroke="black"
                                strokeWidth={6}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <g style={{ mixBlendMode: 'multiply' }}>
                            <path
                                d="M169.204 73.1465C171.864 73.1465 174.539 72.6727 177.112 71.7178C179.19 70.9452 180.247 68.6419 179.474 66.5645C178.701 64.4871 176.391 63.4301 174.321 64.2028C166.733 67.0164 158.27 63.1386 155.456 55.5506C154.684 53.4732 152.38 52.4163 150.303 53.189C148.226 53.9616 147.169 56.265 147.941 58.3424C150.048 64.0279 154.246 68.5471 159.757 71.0764C162.775 72.4613 165.982 73.1538 169.204 73.1538V73.1465Z"
                                fill="url(#paint17_linear_171_12368)"
                                stroke="black"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                            />
                            <g style={{ mixBlendMode: 'screen' }}>
                                <path
                                    d="M169.204 73.1465C171.864 73.1465 174.539 72.6727 177.112 71.7178C179.19 70.9452 180.247 68.6419 179.474 66.5645C178.701 64.4871 176.391 63.4301 174.321 64.2028C166.733 67.0164 158.27 63.1386 155.456 55.5506C154.684 53.4732 152.38 52.4163 150.303 53.189C148.226 53.9616 147.169 56.265 147.941 58.3424C150.048 64.0279 154.246 68.5471 159.757 71.0764C162.775 72.4613 165.982 73.1538 169.204 73.1538V73.1465Z"
                                    fill="url(#paint18_linear_171_12368)"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                />
                            </g>
                        </g>
                        <path
                            d="M151.702 56.9429C155.289 66.6155 166.047 71.5502 175.72 67.9567"
                            stroke="black"
                            strokeWidth={9}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g style={{ mixBlendMode: 'screen' }}>
                            <path
                                d="M151.702 56.9429C155.289 66.6155 166.047 71.5502 175.72 67.9567"
                                stroke="black"
                                strokeWidth={6}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <g style={{ mixBlendMode: 'multiply' }} opacity="0.26">
                            <path
                                d="M164.429 136.875C164.429 139.521 162.286 141.672 159.633 141.672C156.98 141.672 154.837 139.529 154.837 136.875C154.837 134.885 157.548 129.55 158.89 127.02C159.203 126.43 160.056 126.43 160.369 127.02C161.718 129.55 164.422 134.885 164.422 136.875H164.429Z"
                                fill="#FBA51A"
                            />
                        </g>
                        <path
                            d="M164.429 136.533C164.429 138.989 162.439 140.986 159.975 140.986C157.512 140.986 155.522 138.996 155.522 136.533C155.522 134.681 158.036 129.732 159.283 127.385C159.574 126.838 160.362 126.838 160.653 127.385C161.9 129.732 164.414 134.681 164.414 136.533H164.429Z"
                            fill="url(#paint19_radial_171_12368)"
                        />
                        <g style={{ mixBlendMode: 'screen' }} opacity="0.72">
                            <path
                                d="M163.197 135.971C163.197 137.75 161.754 139.193 159.975 139.193C158.197 139.193 156.754 137.75 156.754 135.971C156.754 134.63 158.576 131.044 159.48 129.346C159.691 128.945 160.26 128.945 160.471 129.346C161.375 131.044 163.197 134.63 163.197 135.971Z"
                                fill="#0A8FDC"
                            />
                        </g>
                        <defs>
                            <radialGradient
                                id="paint0_radial_171_12368"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(127.481 216.141) scale(89.9839 11.6979)"
                            >
                                <stop stopColor="#CCDEFC" />
                                <stop offset="0.09" stopColor="#CDDFFC" stopOpacity="0.97" />
                                <stop offset="0.22" stopColor="#D2E2FC" stopOpacity="0.87" />
                                <stop offset="0.4" stopColor="#DAE7FC" stopOpacity="0.72" />
                                <stop offset="0.6" stopColor="#E5EEFD" stopOpacity="0.5" />
                                <stop offset="0.82" stopColor="#F3F7FE" stopOpacity="0.23" />
                                <stop offset={1} stopColor="white" stopOpacity={0} />
                            </radialGradient>
                            <radialGradient
                                id="paint1_radial_171_12368"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(139.486 63.4812) scale(95.2685)"
                            >
                                <stop stopColor="#FED36E" />
                                <stop offset={1} stopColor="#E39F52" />
                            </radialGradient>
                            <radialGradient
                                id="paint2_radial_171_12368"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(127.036 91.5443) scale(89.532)"
                            >
                                <stop offset="0.69" stopColor="#FED36E" stopOpacity={0} />
                                <stop offset={1} stopColor="#E39F52" />
                            </radialGradient>
                            <linearGradient
                                id="paint3_linear_171_12368"
                                x1="127.485"
                                y1="162.943"
                                x2="127.485"
                                y2="28.503"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.13" stopColor="#FED36E" stopOpacity={0} />
                                <stop offset="0.2" stopColor="#FED36E" stopOpacity="0.03" />
                                <stop offset="0.32" stopColor="#FED36E" stopOpacity="0.13" />
                                <stop offset="0.47" stopColor="#FED36E" stopOpacity="0.28" />
                                <stop offset="0.64" stopColor="#FED36E" stopOpacity="0.49" />
                                <stop offset="0.84" stopColor="#FED36E" stopOpacity="0.75" />
                                <stop offset={1} stopColor="#FED36E" />
                            </linearGradient>
                            <radialGradient
                                id="paint4_radial_171_12368"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(127.48 105.845) scale(81.1277)"
                            >
                                <stop offset="0.69" stopColor="#FED36E" stopOpacity={0} />
                                <stop offset={1} stopColor="#E39F52" />
                            </radialGradient>
                            <radialGradient
                                id="paint5_radial_171_12368"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(127.969 180.726) scale(100.837 100.837)"
                            >
                                <stop stopColor="#E39F52" />
                                <stop offset={1} stopColor="#FED36E" stopOpacity={0} />
                            </radialGradient>
                            <linearGradient
                                id="paint6_linear_171_12368"
                                x1="94.5996"
                                y1="143.362"
                                x2="160.362"
                                y2="143.362"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#E39F52" />
                                <stop offset="0.27" stopColor="#E7A756" />
                                <stop offset="0.7" stopColor="#F3BE63" />
                                <stop offset={1} stopColor="#FED36E" />
                            </linearGradient>
                            <linearGradient
                                id="paint7_linear_171_12368"
                                x1="94.5122"
                                y1="143.362"
                                x2="160.449"
                                y2="143.362"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FED36E" />
                                <stop offset="0.3" stopColor="#F3BE63" />
                                <stop offset="0.73" stopColor="#E7A756" />
                                <stop offset={1} stopColor="#E39F52" />
                            </linearGradient>
                            <linearGradient
                                id="paint8_linear_171_12368"
                                x1="94.2132"
                                y1="143.355"
                                x2="159.975"
                                y2="143.355"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#E39F52" />
                                <stop offset="0.27" stopColor="#E7A756" />
                                <stop offset="0.7" stopColor="#F3BE63" />
                                <stop offset={1} stopColor="#FED36E" />
                            </linearGradient>
                            <linearGradient
                                id="paint9_linear_171_12368"
                                x1="94.1257"
                                y1="143.355"
                                x2="160.07"
                                y2="143.355"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FED36E" />
                                <stop offset="0.3" stopColor="#F3BE63" />
                                <stop offset="0.73" stopColor="#E7A756" />
                                <stop offset={1} stopColor="#E39F52" />
                            </linearGradient>
                            <linearGradient
                                id="paint10_linear_171_12368"
                                x1="127.481"
                                y1="156.031"
                                x2="127.481"
                                y2="140.942"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FED36E" stopOpacity={0} />
                                <stop offset="0.28" stopColor="#FDD26D" stopOpacity={0} />
                                <stop offset="0.42" stopColor="#FCD06C" stopOpacity="0.04" />
                                <stop offset="0.53" stopColor="#FBCD6B" stopOpacity="0.1" />
                                <stop offset="0.63" stopColor="#F8C968" stopOpacity="0.19" />
                                <stop offset="0.71" stopColor="#F6C365" stopOpacity="0.29" />
                                <stop offset="0.79" stopColor="#F2BC62" stopOpacity="0.43" />
                                <stop offset="0.86" stopColor="#EEB45D" stopOpacity="0.58" />
                                <stop offset="0.93" stopColor="#E9AB58" stopOpacity="0.77" />
                                <stop offset="0.99" stopColor="#E3A052" stopOpacity="0.97" />
                                <stop offset={1} stopColor="#E39F52" />
                            </linearGradient>
                            <linearGradient
                                id="paint11_linear_171_12368"
                                x1="98.8908"
                                y1="151.007"
                                x2="94.1393"
                                y2="157.242"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FED36E" stopOpacity={0} />
                                <stop offset="0.28" stopColor="#FDD26D" stopOpacity={0} />
                                <stop offset="0.42" stopColor="#FCD06C" stopOpacity="0.04" />
                                <stop offset="0.53" stopColor="#FBCD6B" stopOpacity="0.1" />
                                <stop offset="0.63" stopColor="#F8C968" stopOpacity="0.19" />
                                <stop offset="0.71" stopColor="#F6C365" stopOpacity="0.29" />
                                <stop offset="0.79" stopColor="#F2BC62" stopOpacity="0.43" />
                                <stop offset="0.86" stopColor="#EEB45D" stopOpacity="0.58" />
                                <stop offset="0.93" stopColor="#E9AB58" stopOpacity="0.77" />
                                <stop offset="0.99" stopColor="#E3A052" stopOpacity="0.97" />
                                <stop offset={1} stopColor="#E39F52" />
                            </linearGradient>
                            <linearGradient
                                id="paint12_linear_171_12368"
                                x1="156.013"
                                y1="150.943"
                                x2="160.765"
                                y2="157.178"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FED36E" stopOpacity={0} />
                                <stop offset="0.28" stopColor="#FDD26D" stopOpacity={0} />
                                <stop offset="0.42" stopColor="#FCD06C" stopOpacity="0.04" />
                                <stop offset="0.53" stopColor="#FBCD6B" stopOpacity="0.1" />
                                <stop offset="0.63" stopColor="#F8C968" stopOpacity="0.19" />
                                <stop offset="0.71" stopColor="#F6C365" stopOpacity="0.29" />
                                <stop offset="0.79" stopColor="#F2BC62" stopOpacity="0.43" />
                                <stop offset="0.86" stopColor="#EEB45D" stopOpacity="0.58" />
                                <stop offset="0.93" stopColor="#E9AB58" stopOpacity="0.77" />
                                <stop offset="0.99" stopColor="#E3A052" stopOpacity="0.97" />
                                <stop offset={1} stopColor="#E39F52" />
                            </linearGradient>
                            <linearGradient
                                id="paint13_linear_171_12368"
                                x1="142.255"
                                y1="98.9791"
                                x2="162.803"
                                y2="98.9791"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FED36E" />
                                <stop offset="0.3" stopColor="#F3BE63" />
                                <stop offset="0.73" stopColor="#E7A756" />
                                <stop offset={1} stopColor="#E39F52" />
                            </linearGradient>
                            <linearGradient
                                id="paint14_linear_171_12368"
                                x1="92.1579"
                                y1="98.9791"
                                x2="112.706"
                                y2="98.9791"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FED36E" />
                                <stop offset="0.3" stopColor="#F3BE63" />
                                <stop offset="0.73" stopColor="#E7A756" />
                                <stop offset={1} stopColor="#E39F52" />
                            </linearGradient>
                            <linearGradient
                                id="paint15_linear_171_12368"
                                x1="75.2322"
                                y1="63.0365"
                                x2="107.268"
                                y2="63.0365"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#E39F52" />
                                <stop offset="0.27" stopColor="#E7A756" />
                                <stop offset="0.7" stopColor="#F3BE63" />
                                <stop offset={1} stopColor="#FED36E" />
                            </linearGradient>
                            <linearGradient
                                id="paint16_linear_171_12368"
                                x1="75.2322"
                                y1="63.0365"
                                x2="107.268"
                                y2="63.0365"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#E39F52" />
                                <stop offset="0.27" stopColor="#E7A756" />
                                <stop offset="0.7" stopColor="#F3BE63" />
                                <stop offset={1} stopColor="#FED36E" />
                            </linearGradient>
                            <linearGradient
                                id="paint17_linear_171_12368"
                                x1="179.729"
                                y1="63.0365"
                                x2="147.694"
                                y2="63.0365"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#E39F52" />
                                <stop offset="0.27" stopColor="#E7A756" />
                                <stop offset="0.7" stopColor="#F3BE63" />
                                <stop offset={1} stopColor="#FED36E" />
                            </linearGradient>
                            <linearGradient
                                id="paint18_linear_171_12368"
                                x1="179.729"
                                y1="63.0365"
                                x2="147.694"
                                y2="63.0365"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#E39F52" />
                                <stop offset="0.27" stopColor="#E7A756" />
                                <stop offset="0.7" stopColor="#F3BE63" />
                                <stop offset={1} stopColor="#FED36E" />
                            </linearGradient>
                            <radialGradient
                                id="paint19_radial_171_12368"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(159.706 137.91) scale(9.23529 9.23529)"
                            >
                                <stop offset="0.17" stopColor="#659CFC" />
                                <stop offset={1} stopColor="#176BFC" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <svg width={161} height={200} viewBox="0 0 161 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.379883 160.556V130L90.8989 0H136.02V126.667H160.38V160.556H136.02V200H97.2657V160.556H0.379883ZM99.7571 41.6667L43.0096 126.667H99.7571V41.6667Z"
                            fill="#0A8FDC"
                        />
                    </svg>
                </div>
                <div className=" flex justify-center text-center">
                    <div className="space-y-5">
                        <h1 className="text-primary text-6xl">Not Found</h1>
                        <p className="text-[#333333]">Visited page not found, please go to homepage.</p>
                        <Button
                            onClick={handleGoBack}
                            shape="round"
                            className="px-6"
                            style={{
                                height: '50px',
                                width: '200px',
                                backgroundColor: '#0A8FDC',
                                fontWeight: '500',
                                border: 'none',
                                color: '#fff',
                            }}
                        >
                            Go Home Page
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
