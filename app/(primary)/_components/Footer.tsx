import Link from "next/link";
function Footer() {
  return (
    <div className=" bg-[#072D6B] h-full mt-[6rem] w-full">
    <div className="bg-[#052862] h-[258px] mx-auto flex flex-col items-center text-white py-[51px] px-[24px]">
      <form className="flex flex-row items-center">
        <input
          type="email"
          className="w-[255px] 425:w-[315px] py-[10px] bg-[#052862] border border-solid border-[#3385FF] focus:outline-none  placeholder:text-light/40 px-[16px] rounded-l-[6px]"
          placeholder="Enter your Email "
        />
        <button type="submit" className="py-[11px] px-[15.62px] rounded-r-[6px] font-inter bg-[#3385FF]">
          Join
        </button>
      </form>
      <div className="flex gap-[6px] items-start mt-[2rem]">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <g clip-path="url(#clip0_2473_8041)">
              <path
                d="M16.8333 22.8057C16.8326 21.231 17.2305 19.6817 17.9901 18.3024C18.7497 16.923 19.8461 15.7584 21.1773 14.9171C22.5084 14.0758 24.0308 13.5853 25.6027 13.4912C27.1746 13.3971 28.7447 13.7025 30.1667 14.379V5.47233C30.1667 4.00566 28.9667 2.80566 27.5 2.80566H6.16667C4.7 2.80566 3.5 4.00566 3.5 5.47233V21.4723C3.5 22.939 4.7 24.139 6.16667 24.139H16.94C16.8733 23.699 16.8333 23.259 16.8333 22.8057ZM6.16667 5.47233L16.8333 12.139L27.5 5.47233V8.139L16.8333 14.8057L6.16667 8.139V5.47233ZM23.9533 26.8057L19.2333 22.0857L21.1133 20.2057L23.94 23.0323L29.5933 17.379L31.5 19.259L23.9533 26.8057Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2473_8041">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0 0.195312)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div>
          <h1 className="font-aeonik text-[16px]">
            Sign up for our newsletter
          </h1>
          <p className="text-[14px] font-aeonik text-light/70">
            Dont miss out on all our juicy updates. Subscribe to our
            Newsletter!
          </p>
        </div>
      </div>
    </div>
    <div className="bg-[#072D6B] px-[26px] py-[26px]">
     
      <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:items-center py-[4rem]">
      <div className="flex gap-[16px] items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="25"
            viewBox="0 0 84 25"
            fill="none"
          >
            <path
              d="M4.51535 12.7508V13.5609C4.51535 13.7047 4.59684 13.8341 4.72626 13.8964L10.7995 16.8012C11.0583 16.9258 11.2213 17.1847 11.2213 17.4723V18.7713C11.2213 19.0445 10.9337 19.2266 10.6892 19.1068L5.04262 16.4081C4.79816 16.2883 4.51056 16.4705 4.51056 16.7437V17.6209C4.51056 17.7647 4.59204 17.8941 4.72147 17.9564L10.7947 20.8612C11.0535 20.9858 11.2165 21.2447 11.2165 21.5323V22.9655C11.2165 23.2387 10.9289 23.4208 10.6844 23.301L4.50576 20.3483L1.24148 18.7857L1.10727 18.7186C0.977847 18.6514 0.853219 18.57 0.742972 18.4741C0.311569 18.1146 0.0287602 17.5825 0 16.9834V8.1348C0.0335536 7.50687 0.38347 6.96042 0.89636 6.65844L1.16479 6.52902C1.20793 6.51464 1.24628 6.48588 1.29421 6.46191C1.07851 6.65844 0.944294 6.97001 0.944294 7.28158C0.944294 7.60753 1.07371 7.92389 1.32776 8.09645C1.48115 8.20191 1.62495 8.25943 1.79751 8.32174L3.44164 9.10785L4.51535 9.62074L10.8042 12.6262C11.0631 12.7508 11.2261 13.0097 11.2261 13.2973V14.7832C11.2261 15.0564 10.9385 15.2386 10.694 15.1187L5.04742 12.4201C4.79816 12.2954 4.51535 12.4776 4.51535 12.7508Z"
              fill="white"
            />
            <path
              d="M1.38528 18.8482C1.26545 18.8194 1.01619 18.6996 0.905947 18.6181C0.838839 18.5701 0.766939 18.5222 0.699832 18.4647C0.359503 18.1819 0.110247 17.7936 0 17.3478V8.06787C0.052727 7.44953 0.417023 6.92226 0.929913 6.63465L1.1552 6.5292L1.27024 6.47168C1.23669 6.49085 1.20314 6.51003 1.16958 6.52441L0.901153 6.65383C0.388263 6.95581 0.0383472 7.50225 0.00479366 8.13018V16.9787C0.0335539 17.5779 0.316362 18.11 0.747765 18.4695C0.858013 18.5653 0.982641 18.6468 1.11206 18.7139L1.24628 18.781L1.38528 18.8482Z"
              fill="white"
            />
            <path
              d="M1.29472 6.45703C1.28984 6.46191 1.29472 6.45703 1.29472 6.45703L1.26544 6.47167C1.2752 6.46679 1.28496 6.46191 1.29472 6.45703Z"
              fill="#3A7AF8"
            />
            <path
              d="M15.751 0.771732V10.1811C15.751 10.2003 15.751 10.2195 15.7462 10.2338C15.7127 10.4543 15.588 10.6509 15.4155 10.7755C15.3963 10.7899 15.3819 10.7995 15.3627 10.809L15.1662 10.9049L4.05998 16.2543L1.75437 17.3568C1.6633 17.3999 1.58181 17.4335 1.49553 17.4814C1.26066 17.6156 1.13123 17.8936 1.13123 18.186C1.13123 18.4688 1.27024 18.7229 1.48115 18.8811C1.4476 18.8715 1.41884 18.8619 1.38528 18.8523C1.26545 18.8236 1.01619 18.7037 0.905947 18.6222C0.83884 18.5743 0.766939 18.5264 0.699832 18.4688C0.359503 18.186 0.110247 17.7978 0 17.352V8.06724C0.052727 7.44889 0.417023 6.92162 0.929914 6.63402L1.1552 6.52857L14.4328 0.139008L14.6246 0.0479337C14.6437 0.0383469 14.6629 0.0335535 14.6821 0.0287601C14.7108 0.0191734 14.7444 0.0143803 14.7732 0.00958695C14.8163 0.00479359 14.8594 0 14.9026 0C15.3292 0 15.6839 0.311569 15.7462 0.723798C15.751 0.738178 15.751 0.752559 15.751 0.771732Z"
              fill="#3A7AF8"
            />
            <path
              d="M13.5556 24.2929L12.1032 23.7609C11.9546 23.7081 11.8588 23.5691 11.8588 23.411V22.0065C11.8588 21.7477 12.1176 21.5655 12.3621 21.6566L13.8145 22.1886C13.9631 22.2414 14.0589 22.3804 14.0589 22.5386V23.943C14.0541 24.2019 13.7953 24.3792 13.5556 24.2929Z"
              fill="#1EFF59"
            />
            <path
              opacity="0.6"
              d="M15.1614 10.9054L15.3579 10.8095C15.3771 10.7999 15.3963 10.7903 15.4106 10.7759C15.5832 10.6465 15.7078 10.4548 15.7414 10.2343C15.7462 10.2151 15.7462 10.2007 15.7462 10.1816V0.772185C15.7462 0.753011 15.7462 0.738631 15.7414 0.719458C15.7414 0.714665 15.7414 0.709871 15.7414 0.705078L3.64772 6.52902L3.42244 6.63447C2.90955 6.92207 2.55004 7.45414 2.49252 8.06769V16.9977L4.05516 16.25L15.1614 10.9054Z"
              fill="#2C5CBA"
            />
            <path
              opacity="0.4"
              d="M15.2765 10.747L15.4346 10.6703C15.449 10.6607 15.4634 10.6559 15.4778 10.6463C15.6168 10.5409 15.7175 10.3875 15.7462 10.2101C15.7462 10.1958 15.751 10.1814 15.751 10.167V2.57909C15.751 2.56471 15.751 2.55033 15.7462 2.53595C15.7462 2.53116 15.7462 2.53116 15.7462 2.52637L5.99171 7.21907L5.80956 7.30535C5.39733 7.54023 5.10494 7.96684 5.0618 8.46055V15.6602L6.32245 15.0562L15.2765 10.747Z"
              fill="#2C5CBA"
            />
            <path
              opacity="0.3"
              d="M15.3771 10.7279L15.5017 10.6704C15.5161 10.6656 15.5257 10.656 15.5353 10.6512C15.6455 10.5697 15.7222 10.4499 15.7462 10.3109C15.7462 10.3013 15.751 10.2869 15.751 10.2773V4.35271C15.751 4.34312 15.751 4.32874 15.7462 4.31916C15.7462 4.31436 15.7462 4.31436 15.7462 4.30957L8.03368 7.9717L7.88988 8.03881C7.56393 8.22096 7.33385 8.5517 7.30029 8.93996V14.5578L8.29731 14.088L15.3771 10.7279Z"
              fill="#2C5CBA"
            />
            <path
              d="M38.2085 10.1271C38.9303 10.8489 39.2912 11.9506 39.2912 13.4703V18.865H37.7336V13.5652C37.7336 12.5775 37.5056 11.8177 37.0497 11.2858C36.5938 10.7539 35.948 10.488 35.1122 10.488C34.2004 10.488 33.4786 10.8109 32.9657 11.4377C32.4338 12.0836 32.1869 12.9384 32.1869 14.0211V18.865H30.6293V9.17729H31.9779L32.1869 10.488C32.9087 9.5382 33.9725 9.06331 35.3781 9.06331C36.5559 9.06331 37.4866 9.42423 38.2085 10.1271Z"
              fill="white"
            />
            <path
              d="M41.1238 10.6019H39.3762V9.17729H41.1238V6.46094H42.6814V9.17729H45.1319V10.6019H42.6814V16.3196C42.6814 16.7375 42.7574 17.0224 42.9094 17.1934C43.0614 17.3643 43.3463 17.4403 43.7452 17.4403H45.4358V18.865H43.6502C42.7384 18.865 42.0736 18.675 41.6937 18.2571C41.3138 17.8582 41.1238 17.2124 41.1238 16.3386V10.6019Z"
              fill="white"
            />
            <path
              d="M51.0838 9.17729V10.6969H50.305C49.3742 10.6969 48.7094 11.0198 48.3105 11.6277C47.9116 12.2545 47.7216 13.0144 47.7216 13.9261V18.865H46.164V9.17729H47.5127L47.7216 10.6399C47.9876 10.203 48.3485 9.84213 48.8044 9.57619C49.2413 9.31025 49.8491 9.17729 50.6469 9.17729H51.0838Z"
              fill="white"
            />
            <path
              d="M53.3241 9.17729L56.3064 17.0794L59.1937 9.17729H60.8463L56.3823 20.4986C56.1544 21.0874 55.9454 21.5243 55.7745 21.8093C55.5845 22.1132 55.3756 22.3221 55.1096 22.4551C54.8437 22.6071 54.4828 22.664 54.0459 22.664H52.1844V21.2394H53.571C53.8749 21.2394 54.1029 21.2204 54.2549 21.1444C54.4068 21.0874 54.5208 20.9924 54.6158 20.8405C54.7107 20.6885 54.8247 20.4416 54.9767 20.0997L55.4706 18.9409L51.6715 9.17729H53.3241Z"
              fill="white"
            />
            <path
              d="M21.4463 11.4189C21.8262 10.6781 22.3771 10.1082 23.0799 9.69033C23.7638 9.27243 24.5616 9.06348 25.4734 9.06348C26.3472 9.06348 27.145 9.25343 27.8288 9.61434C28.5126 9.99425 29.0445 10.5261 29.4434 11.21C29.8233 11.9128 30.0323 12.7296 30.0703 13.6604C30.0703 13.8123 30.0513 14.0213 30.0323 14.3252H22.5101V14.4582C22.5291 15.408 22.814 16.1678 23.3839 16.7376C23.9347 17.3075 24.6566 17.5924 25.5683 17.5924C26.2522 17.5924 26.841 17.4215 27.3349 17.0796C27.8288 16.7376 28.1517 16.2438 28.3227 15.6169H29.8993C29.7093 16.6047 29.2345 17.4215 28.4746 18.0483C27.7148 18.6752 26.784 18.9791 25.6823 18.9791C24.7135 18.9791 23.8777 18.7891 23.1559 18.3712C22.4341 17.9533 21.8642 17.3835 21.4653 16.6237C21.0664 15.8638 20.8765 15.0091 20.8765 14.0213C20.8765 13.0335 21.0664 12.1787 21.4463 11.4189ZM28.4556 13.0335C28.3797 12.2167 28.0567 11.5709 27.5249 11.115C26.993 10.6591 26.3092 10.4311 25.4924 10.4311C24.7515 10.4311 24.1057 10.6781 23.5548 11.153C22.985 11.6469 22.681 12.2737 22.605 13.0335H28.4556Z"
              fill="white"
            />
            <path
              d="M68.9035 9.65238C69.6063 10.0513 70.1572 10.6211 70.5561 11.362C70.955 12.1218 71.164 12.9956 71.164 14.0213C71.164 15.0091 70.955 15.8639 70.5561 16.6047C70.1572 17.3645 69.6063 17.9344 68.9035 18.3523C68.1817 18.7702 67.3839 18.9791 66.5101 18.9791C65.7123 18.9791 65.0474 18.8462 64.4966 18.5612C63.9267 18.2763 63.4898 17.8774 63.1859 17.3835V22.6643H61.6283V9.17749H62.9769L63.1859 10.7351C63.9837 9.63338 65.1044 9.06352 66.5101 9.06352C67.4029 9.06352 68.2007 9.27247 68.9035 9.65238ZM68.6756 16.6047C69.2644 15.9399 69.5684 15.0851 69.5684 14.0213C69.5684 12.9766 69.2644 12.1218 68.6756 11.4569C68.0867 10.7921 67.3079 10.4502 66.3581 10.4502C65.7313 10.4502 65.1804 10.6022 64.6865 10.9061C64.1926 11.21 63.8317 11.6279 63.5658 12.1598C63.2999 12.6916 63.1669 13.2995 63.1669 13.9833C63.1669 14.6862 63.2999 15.313 63.5658 15.8639C63.8317 16.4148 64.1926 16.8327 64.6865 17.1366C65.1804 17.4405 65.7313 17.5925 66.3581 17.5925C67.3079 17.5925 68.0867 17.2696 68.6756 16.6047Z"
              fill="#1EFF59"
            />
            <path
              d="M81.6248 17.4405V18.8652H80.77C80.1432 18.8652 79.7063 18.7512 79.4403 18.4853C79.1744 18.2383 79.0224 17.8584 79.0224 17.3645C78.2626 18.4473 77.1799 18.9791 75.7742 18.9791C74.6915 18.9791 73.8177 18.7322 73.1719 18.2193C72.526 17.7254 72.2031 17.0226 72.2031 16.1488C72.2031 15.1801 72.526 14.4392 73.1908 13.9074C73.8557 13.3945 74.8245 13.1285 76.0971 13.1285H78.9465V12.4637C78.9465 11.8369 78.7185 11.343 78.3006 10.9821C77.8827 10.6401 77.2939 10.4502 76.534 10.4502C75.8502 10.4502 75.2993 10.6022 74.8624 10.9061C74.4256 11.21 74.1596 11.5899 74.0646 12.0838H72.507C72.621 11.134 73.0389 10.3932 73.7607 9.86133C74.4825 9.32946 75.4323 9.06352 76.61 9.06352C77.8447 9.06352 78.7945 9.36745 79.4783 9.9753C80.1622 10.5832 80.5041 11.438 80.5041 12.5587V16.7377C80.5041 17.2126 80.713 17.4405 81.1499 17.4405H81.6248ZM78.9465 14.4392H75.9452C74.5015 14.4392 73.7797 14.9901 73.7797 16.0538C73.7797 16.5477 73.9697 16.9276 74.3496 17.2126C74.7295 17.5165 75.2424 17.6495 75.8882 17.6495C76.838 17.6495 77.5788 17.4025 78.1297 16.9086C78.6615 16.4148 78.9465 15.7499 78.9465 14.9141V14.4392Z"
              fill="#1EFF59"
            />
            <path
              d="M82.4424 5.56836H84V18.8652H82.4424V5.56836Z"
              fill="#1EFF59"
            />
          </svg>
        </span>

        <div className="rounded-full w-[4px] h-[4px] bg-light"></div>
        <p className="font-inter text-[14px] text-light">
          Entrypal Apps Limited (RC 1889170)
        </p>
      </div>
      <div className="flex gap-[33.6px]  items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
          >
            <path
              d="M23.954 2.56909C23.069 2.95809 22.124 3.22309 21.129 3.34409C22.143 2.73309 22.923 1.77009 23.292 0.621094C22.341 1.17609 21.287 1.58009 20.165 1.80509C19.269 0.846094 17.992 0.246094 16.574 0.246094C13.857 0.246094 11.654 2.44909 11.654 5.16309C11.654 5.55309 11.699 5.92809 11.781 6.28709C7.691 6.09409 4.066 4.13009 1.64 1.16109C1.213 1.88309 0.974 2.72209 0.974 3.63609C0.974 5.34609 1.844 6.84909 3.162 7.73209C2.355 7.70609 1.596 7.48409 0.934 7.11609V7.17709C0.934 9.56209 2.627 11.5511 4.88 12.0041C4.467 12.1151 4.031 12.1751 3.584 12.1751C3.27 12.1751 2.969 12.1451 2.668 12.0891C3.299 14.0421 5.113 15.4661 7.272 15.5061C5.592 16.8251 3.463 17.6111 1.17 17.6111C0.78 17.6111 0.391 17.5881 0 17.5441C2.189 18.9381 4.768 19.7531 7.557 19.7531C16.611 19.7531 21.556 12.2571 21.556 5.76709C21.556 5.55809 21.556 5.34709 21.541 5.13709C22.502 4.44809 23.341 3.57709 24.001 2.58909L23.954 2.56909Z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>
        </span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="18"
            viewBox="0 0 25 18"
            fill="none"
          >
            <path
              d="M24.095 3.20522C23.956 2.70699 23.6907 2.25305 23.325 1.88727C22.9592 1.5215 22.5053 1.25628 22.007 1.11723C20.137 0.616225 12.611 0.616225 12.611 0.616225C12.611 0.616225 5.10401 0.606225 3.21501 1.11723C2.71678 1.25628 2.26283 1.5215 1.89706 1.88727C1.53129 2.25305 1.26606 2.70699 1.12701 3.20522C0.772534 5.11974 0.597774 7.06319 0.605013 9.01023C0.599142 10.9499 0.773897 12.8859 1.12701 14.7932C1.26606 15.2915 1.53129 15.7454 1.89706 16.1112C2.26283 16.4769 2.71678 16.7422 3.21501 16.8812C5.08301 17.3832 12.611 17.3832 12.611 17.3832C12.611 17.3832 20.117 17.3832 22.007 16.8812C22.5053 16.7422 22.9592 16.4769 23.325 16.1112C23.6907 15.7454 23.956 15.2915 24.095 14.7932C24.4408 12.8852 24.6081 10.9492 24.595 9.01023C24.6095 7.06388 24.4421 5.12043 24.095 3.20522ZM10.209 12.6012V5.40823L16.473 9.01023L10.209 12.6012Z"
              fill="white"
              fill-opacity="0.9"
            />
          </svg>
        </span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M20.647 20.452H17.093V14.883C17.093 13.555 17.066 11.846 15.241 11.846C13.388 11.846 13.105 13.291 13.105 14.785V20.452H9.55101V9H12.965V10.561H13.011C13.488 9.661 14.648 8.711 16.381 8.711C19.982 8.711 20.648 11.081 20.648 14.166L20.647 20.452ZM5.53701 7.433C4.39301 7.433 3.47401 6.507 3.47401 5.368C3.47401 4.23 4.39401 3.305 5.53701 3.305C6.67701 3.305 7.60101 4.23 7.60101 5.368C7.60101 6.507 6.67601 7.433 5.53701 7.433ZM7.31901 20.452H3.75501V9H7.31901V20.452ZM22.425 0H1.97101C0.992012 0 0.200012 0.774 0.200012 1.729V22.271C0.200012 23.227 0.992012 24 1.97101 24H22.422C23.4 24 24.2 23.227 24.2 22.271V1.729C24.2 0.774 23.4 0 22.422 0H22.425Z"
              fill="white"
              fill-opacity="0.9"
            />
          </svg>
        </span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.8 0C9.54 0 9.133 0.015 7.853 0.072C6.575 0.132 5.705 0.333 4.94 0.63C4.151 0.936 3.481 1.347 2.814 2.014C2.147 2.681 1.735 3.35 1.43 4.14C1.133 4.905 0.931003 5.775 0.872003 7.053C0.812003 8.333 0.800003 8.74 0.800003 12C0.800003 15.26 0.815003 15.667 0.872003 16.947C0.932003 18.224 1.133 19.095 1.43 19.86C1.736 20.648 2.147 21.319 2.814 21.986C3.481 22.652 4.15 23.065 4.94 23.37C5.706 23.666 6.576 23.869 7.853 23.928C9.133 23.988 9.54 24 12.8 24C16.06 24 16.467 23.985 17.747 23.928C19.024 23.868 19.895 23.666 20.66 23.37C21.448 23.064 22.119 22.652 22.786 21.986C23.452 21.319 23.865 20.651 24.17 19.86C24.466 19.095 24.669 18.224 24.728 16.947C24.788 15.667 24.8 15.26 24.8 12C24.8 8.74 24.785 8.333 24.728 7.053C24.668 5.776 24.466 4.904 24.17 4.14C23.864 3.351 23.452 2.681 22.786 2.014C22.119 1.347 21.451 0.935 20.66 0.63C19.895 0.333 19.024 0.131 17.747 0.072C16.467 0.012 16.06 0 12.8 0ZM12.8 2.16C16.003 2.16 16.385 2.176 17.65 2.231C18.82 2.286 19.455 2.48 19.877 2.646C20.439 2.863 20.837 3.123 21.259 3.542C21.678 3.962 21.938 4.361 22.155 4.923C22.319 5.345 22.515 5.98 22.568 7.15C22.625 8.416 22.638 8.796 22.638 12C22.638 15.204 22.623 15.585 22.564 16.85C22.503 18.02 22.308 18.655 22.143 19.077C21.919 19.639 21.664 20.037 21.244 20.459C20.825 20.878 20.42 21.138 19.864 21.355C19.444 21.519 18.799 21.715 17.629 21.768C16.355 21.825 15.98 21.838 12.77 21.838C9.559 21.838 9.184 21.823 7.911 21.764C6.74 21.703 6.095 21.508 5.675 21.343C5.106 21.119 4.715 20.864 4.296 20.444C3.875 20.025 3.606 19.62 3.396 19.064C3.231 18.644 3.037 17.999 2.976 16.829C2.931 15.569 2.915 15.18 2.915 11.985C2.915 8.789 2.931 8.399 2.976 7.124C3.037 5.954 3.231 5.31 3.396 4.89C3.606 4.32 3.875 3.93 4.296 3.509C4.715 3.09 5.106 2.82 5.675 2.611C6.095 2.445 6.726 2.25 7.896 2.19C9.171 2.145 9.546 2.13 12.755 2.13L12.8 2.16ZM12.8 5.838C9.395 5.838 6.638 8.598 6.638 12C6.638 15.405 9.398 18.162 12.8 18.162C16.205 18.162 18.962 15.402 18.962 12C18.962 8.595 16.202 5.838 12.8 5.838ZM12.8 16C10.59 16 8.8 14.21 8.8 12C8.8 9.79 10.59 8 12.8 8C15.01 8 16.8 9.79 16.8 12C16.8 14.21 15.01 16 12.8 16ZM20.646 5.595C20.646 6.39 20 7.035 19.206 7.035C18.411 7.035 17.766 6.389 17.766 5.595C17.766 4.801 18.412 4.156 19.206 4.156C19.999 4.155 20.646 4.801 20.646 5.595Z"
              fill="white"
              fill-opacity="0.9"
            />
          </svg>
        </span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
          >
            <path
              d="M11.93 0.02C13.24 0 14.54 0.01 15.84 0C15.92 1.53 16.47 3.09 17.59 4.17C18.71 5.28 20.29 5.79 21.83 5.96V9.99C20.39 9.94 18.94 9.64 17.63 9.02C17.06 8.76 16.53 8.43 16.01 8.09C16 11.01 16.02 13.93 15.99 16.84C15.91 18.24 15.45 19.63 14.64 20.78C13.33 22.7 11.06 23.95 8.73001 23.99C7.30001 24.07 5.87001 23.68 4.65001 22.96C2.63001 21.77 1.21001 19.59 1.00001 17.25C0.980012 16.75 0.970012 16.25 0.990012 15.76C1.17001 13.86 2.11001 12.04 3.57001 10.8C5.23001 9.36 7.55001 8.67 9.72001 9.08C9.74001 10.56 9.68001 12.04 9.68001 13.52C8.69001 13.2 7.53001 13.29 6.66001 13.89C6.03001 14.3 5.55001 14.93 5.30001 15.64C5.09001 16.15 5.15001 16.71 5.16001 17.25C5.40001 18.89 6.98001 20.27 8.66001 20.12C9.78001 20.11 10.85 19.46 11.43 18.51C11.62 18.18 11.83 17.84 11.84 17.45C11.94 15.66 11.9 13.88 11.91 12.09C11.92 8.06 11.9 4.04 11.93 0.02Z"
              fill="white"
              fill-opacity="0.9"
            />
          </svg>
        </span>
      </div>

      </div>
      <div className="text-light flex flex-col lg:flex-row gap-[30px]">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/cookies-policy">Cookies Policy</Link>
        <Link
          href="/entrypal-terms-of-use-for-eventgoers"
        >
          Terms of Use for Attendees
        </Link>
        <Link href="/entrypal-terms-&-condition-for-eventcreators">Terms & Conditions for Creators</Link>
        <Link href="/eventcreators-service-agreement">Eventcreator Service Agreement </Link>
      </div>
    </div>
  </div>
  )
}

export default Footer