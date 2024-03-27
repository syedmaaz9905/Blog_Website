import { cx } from '@/src/utils';
import Link from 'next/link';
import React from 'react';
import '../Header/custom.css';

const Tag = ({ link = "#", name, ...props }) => {
    return (
        <Link href={link} className={cx("inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-300 text-sm sm:text-base custom-button-homecoversection", props.className)}>
            {name}
        </Link>
    )
};

export default Tag;