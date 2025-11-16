'use client';

import { motion, type MotionProps } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';

type AnimatedSectionProps = ComponentPropsWithoutRef<'section'> & {
  delay?: number;
  motionProps?: MotionProps;
  trigger?: 'view' | 'mount';
  variantsOverride?: MotionProps['variants'];
};

const variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({
  children,
  delay = 0,
  motionProps,
  trigger = 'view',
  variantsOverride,
  className = '',
  ...rest
}: AnimatedSectionProps) {
  const { className: motionClassName, ...restMotionProps } = motionProps ?? {};
  const combinedClassName = [className, motionClassName].filter(Boolean).join(' ');
  const useViewport = trigger === 'view';

  return (
    <motion.section
      className={combinedClassName}
      initial="hidden"
      {...(useViewport
        ? {
            whileInView: 'visible',
            viewport: { once: true, amount: 0.2 },
          }
        : { animate: 'visible' })}
      variants={variantsOverride ?? variants}
      transition={{ duration: 0.9, ease: 'easeOut', delay }}
      {...rest}
      {...restMotionProps}
    >
      {children}
    </motion.section>
  );
}
