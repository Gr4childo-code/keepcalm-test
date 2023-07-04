import React, { useState, useEffect, useRef } from 'react';

import styles from './Scroll.module.scss';
import { TitleExtra } from '../global/TitleExtra/TitleExtra';

interface Props {
  slides: string[];
}

export const Scroll = ({ slides }: Props) => {
  const [dynamicHeight, setDynamicHeight] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);

  const calcDynamicHeight = (objectWidth: number) => {
    return objectWidth - window.innerWidth + window.innerHeight;
  };

  const handleDynamicHeight = (
    ref: React.RefObject<HTMLDivElement>,
    setDynamicHeight: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const objectWidth = ref.current?.scrollWidth;

    if (!objectWidth) return;

    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  };

  const handleScrollListener = () => {
    const offsetTop = containerRef.current && -containerRef.current.offsetTop;
    offsetTop && setTranslateX(offsetTop);
  };

  const handleResize = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScrollListener);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScrollListener);
    };
  }, []);

  const itemsRenderer = () =>
    slides.map((item, index) => (
      <div className={styles.scroll__item} key={`scroll__image-${index}`}>
        <img className={styles.scroll__image} src={item} alt='' />
      </div>
    ));

  return (
    <>
      <div className={styles.scroll}>
        <div className={styles.horizontal_scroll} style={{ height: `${dynamicHeight}px` }}>
          <div className={styles.horizontal_scroll__sticky_container} ref={containerRef}>
            <div className={styles.horizontal_scroll__sticky_container__inner}>
              <TitleExtra text={'Lorem ipsum dolor sit amet'} />
            </div>

            <div
              className={styles.horizontal_scroll__translate_container}
              style={{ transform: `translateX(${translateX}px)` }}
              ref={objectRef}
            >
              <div className={styles.scroll__container}>{itemsRenderer()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
