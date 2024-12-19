'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Mousewheel, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import instagram from '@/assets/svg/in.svg';
import linkedin from '@/assets/svg/li.svg';

import { sntTeamMember } from '@/teamConstants';

const CoreAllMemberSlider = () => {
const [slidesToShow, setSlidesToShow] = useState(1);

useEffect(() => {
    const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
        setSlidesToShow(3); // Desktop
    } else if (screenWidth >= 992) {
        setSlidesToShow(2); // Desktop-Small
    } else if (screenWidth >= 768) {
        setSlidesToShow(1); // Tablet
    } else {
        setSlidesToShow(1); // Mobile
    }
    };
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => {
    window.removeEventListener('resize', updateSlidesToShow);
    };
}, []);

const settings = {
    slidesPerView: slidesToShow,
    spaceBetween: 20,
    pagination: { clickable: true },
    navigation: true,
    mousewheel: true,
};

return (
    <div className="max-w-screen overflow-hidden">
    <Swiper {...settings} modules={[Mousewheel, Pagination, Navigation]}>
        {sntTeamMember.map((memberDetails, index) => (
        <SwiperSlide key={index} className="py-[20px]">
            <div className="flex justify-center">
            <Image
                src={memberDetails.memberPhoto}
                alt={index.toString()}
                width={120}
                className="rounded-full"
            />
            </div>
            <div className="mt-[10px] text-center">
            <span className="text-base font-bold md:text-xl">{memberDetails.memberName}</span>
            </div>
            <div className="flex justify-center">
            <div>
                <span>{memberDetails.memberYear},</span>
            </div>
            <div>
                <span>&nbsp;{memberDetails.memberBranch}</span>
            </div>
            </div>
            <div className="flex justify-center">
            <div>
                <span>{memberDetails.memberRole}</span>
            </div>
            </div>
            <div className="mt-[10px] flex justify-center gap-5">
            <div>
                <Link href={memberDetails.memberInsta} target="_blank">
                <Image src={instagram} alt="Instagram" width={30} className="duration-150 hover:scale-110" />
                </Link>
            </div>
            <div>
                <Link href={memberDetails.memberLinkedin} target="_blank">
                <Image src={linkedin} alt="LinkedIn" width={30} className="duration-150 hover:scale-110" />
                </Link>
            </div>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
);
};

export default CoreAllMemberSlider;