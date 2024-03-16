import {
    LucideProps,
    Moon,
    SunMedium,
    Twitter,
    Github,
    // type Icon as LucideIcon,
} from "lucide-react"

// export type Icon = LucideIcon

export const Icons = {
    sun: SunMedium,
    moon: Moon,
    twitter: Twitter,
    gitHub: Github,
    logo: (props: LucideProps) => <svg fill="currentColor" viewBox="-4.018 63.277 753.7 408.483" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M 262.933 392.237 C 264.269 404.996 267.978 416.866 274.357 427.845 C 282.369 441.494 293.793 452.176 308.481 459.447 C 323.169 466.865 340.527 470.573 360.705 470.573 C 390.823 470.573 418.716 462.858 444.383 447.429 C 445.867 446.539 447.053 445.5 448.537 444.462 C 434.739 422.652 431.326 395.946 430.585 385.116 C 421.386 405.738 410.852 421.91 398.389 432.74 C 387.559 442.384 376.135 447.132 364.266 447.132 C 353.436 447.132 344.83 443.274 338.303 435.56 C 331.775 427.845 328.659 415.976 328.659 400.101 C 328.659 372.801 334.148 344.909 344.978 316.274 C 347.649 309.302 350.469 302.773 353.287 296.69 C 335.186 314.643 306.256 344.316 262.933 392.237 M 373.91 208.265 L 412.93 63.61 L 302.101 67.913 L 294.832 92.986 L 305.81 92.986 C 314.416 92.986 320.647 94.322 324.208 97.141 C 327.769 99.959 329.549 103.816 329.549 108.713 C 329.549 111.977 329.103 115.241 328.213 118.653 L 282.221 290.904 C 309.965 259.748 341.715 228.592 373.91 208.265 Z M 83.561 341.793 C 90.386 301.587 102.106 270.134 118.872 247.137 C 130.296 231.262 142.61 223.399 155.666 223.399 C 162.194 223.399 167.683 226.069 172.134 231.262 C 176.437 236.455 178.662 243.725 178.662 252.923 C 178.662 275.326 169.166 295.504 150.028 313.455 C 136.231 326.512 113.975 336.007 83.561 341.793 Z M 675.682 428.587 C 674.496 427.103 673.902 425.174 673.902 422.504 C 673.902 418.943 675.682 410.635 679.243 397.578 L 732.358 206.633 L 663.962 211.678 L 649.571 250.401 C 644.823 234.229 637.554 222.36 627.762 214.941 C 617.97 207.523 605.061 203.666 589.038 203.666 C 567.97 203.666 547.348 210.046 527.17 222.212 C 537.11 236.9 544.083 257.226 544.677 284.525 C 545.271 283.487 545.567 282.447 546.161 281.557 C 563.519 251.143 582.955 235.861 604.616 235.861 C 613.963 235.861 621.381 239.422 626.574 246.395 C 631.767 253.368 634.438 265.534 634.438 282.893 C 634.289 311.823 629.393 339.271 619.749 364.938 C 610.254 390.605 599.127 409.003 586.812 419.981 C 574.35 430.961 562.777 436.45 551.947 436.45 C 551.205 436.45 550.464 436.302 549.722 436.302 L 549.722 436.45 C 549.722 436.45 542.155 437.191 534.589 431.109 C 532.363 429.477 530.138 427.548 528.357 425.026 C 526.429 422.207 524.797 418.497 523.609 414.344 C 523.609 414.195 523.461 413.898 523.461 413.75 C 523.016 412.118 522.423 410.487 522.126 408.705 C 518.565 393.869 518.12 371.317 525.241 336.304 C 535.627 285.415 528.06 252.329 513.669 231.41 C 513.521 231.558 513.372 231.558 513.224 231.707 C 511.444 229.036 509.664 226.217 507.586 223.843 C 504.173 219.986 500.464 216.723 496.607 213.755 C 496.459 213.607 496.311 213.458 496.013 213.31 C 492.304 210.49 488.299 208.117 484.145 206.189 C 483.699 206.041 483.403 205.891 482.958 205.743 C 474.204 201.886 464.709 199.512 454.175 198.918 C 454.175 198.918 454.323 198.77 454.323 198.77 C 453.878 198.77 453.433 198.77 452.988 198.77 C 451.504 198.77 450.318 198.325 448.834 198.325 C 447.499 198.325 446.311 198.622 444.976 198.77 C 439.784 198.77 434.739 199.364 429.398 200.402 C 428.063 200.698 426.727 200.848 425.541 201.144 C 407.143 205.595 388.301 215.091 369.755 228.146 C 350.913 242.537 320.499 269.688 274.506 319.835 L 274.357 320.281 C 249.432 349.508 228.662 376.808 215.011 392.831 C 215.011 392.831 214.863 392.979 214.863 392.979 C 196.763 411.377 181.481 423.69 169.018 429.921 C 168.722 430.071 168.574 430.071 168.276 430.219 C 155.963 436.302 143.351 439.417 130.444 439.417 C 115.014 439.417 102.552 434.372 93.353 424.136 C 84.154 414.046 79.407 399.507 79.407 380.665 C 79.407 376.214 79.703 370.575 80.445 363.9 C 126.883 355.74 161.6 346.392 184.301 336.007 C 207.148 325.622 223.617 313.307 233.705 299.212 C 243.795 285.118 248.987 271.024 248.987 256.929 C 248.987 240.016 242.607 226.069 229.996 214.941 C 217.386 203.963 199.582 198.325 176.585 198.325 C 145.281 198.325 116.053 205.891 88.902 221.024 C 61.752 236.158 40.387 256.781 24.66 283.041 C 8.933 309.302 1.219 336.748 1.219 365.384 C 1.219 397.578 10.565 423.097 29.408 441.939 C 48.251 460.781 73.917 470.129 106.705 470.129 C 113.382 470.129 119.762 469.683 126.141 468.793 C 125.697 468.941 125.547 469.239 125.103 469.387 C 127.477 468.793 129.554 468.349 131.779 467.755 C 145.577 465.529 158.782 461.523 171.392 455.589 C 172.727 454.996 174.211 453.956 175.547 453.214 C 178.81 451.583 182.075 449.803 185.191 447.725 C 185.932 447.281 186.674 446.687 187.564 446.242 C 191.273 443.868 194.983 441.197 198.84 438.081 C 200.472 436.895 202.104 435.708 203.587 434.372 C 204.626 433.482 205.813 432.444 207 431.405 C 213.973 425.47 221.095 418.646 228.216 411.079 C 229.551 409.745 230.738 408.557 232.221 407.074 C 241.865 395.798 250.619 385.56 259.224 375.768 C 260.114 374.73 260.707 373.84 261.597 372.801 C 293.496 335.858 344.682 274.585 386.966 249.808 C 387.559 249.362 388.153 248.768 388.747 248.324 C 394.978 244.021 399.131 241.648 401.654 240.609 C 406.55 238.532 411.446 237.345 416.342 237.345 C 417.825 237.345 419.161 237.642 420.496 237.79 L 420.496 237.493 C 420.496 237.493 431.475 236.603 440.228 248.027 C 440.674 248.62 441.268 248.918 441.564 249.51 C 446.757 256.335 449.724 266.869 450.466 280.667 C 451.652 293.723 451.06 310.637 447.201 333.039 C 439.339 383.039 447.943 414.64 461.594 434.67 C 461.742 434.522 461.89 434.372 462.038 434.372 C 464.115 437.488 466.043 440.753 468.566 443.422 C 472.127 447.281 475.985 450.693 479.842 453.66 C 480.732 454.254 481.622 454.996 482.364 455.589 C 485.479 457.815 488.744 459.595 492.156 461.227 C 494.381 462.265 496.607 463.304 498.832 464.194 C 502.096 465.381 505.361 466.419 508.773 467.309 C 510.406 467.755 511.888 468.051 513.075 468.199 C 518.12 469.09 523.164 469.683 528.654 469.683 C 542.897 469.683 556.25 466.271 569.008 459.447 C 581.768 452.622 594.824 440.604 608.326 423.542 C 609.512 438.823 613.667 450.396 620.639 458.111 C 627.612 465.826 637.405 469.683 650.164 469.683 C 687.107 469.683 721.231 439.269 752.536 378.588 L 732.358 367.608 C 711.291 409.151 694.08 429.773 680.875 429.773 C 678.502 430.812 676.722 430.071 675.682 428.587 Z"/></svg>,
}