import React, { useRef, useState } from 'react';
import { Spinner } from '../Spinner';
import {
  pullToRefresh,
  type PullToRefreshVariants,
} from './PullToRefresh.styles';

export interface PullToRefreshProps extends PullToRefreshVariants {
  children: React.ReactNode;
  onRefresh: () => Promise<void>;
  threshold?: number;
  className?: string;
}

export const PullToRefresh = ({
  children,
  onRefresh,
  threshold = 60,
  className,
}: PullToRefreshProps) => {
  const { wrapper, loaderContainer, content } = pullToRefresh();

  const containerRef = useRef<HTMLDivElement>(null);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isDragging, setIsDragging] = useState(false); // [추가] 드래그 상태 감지

  const startY = useRef(0);
  const isTopReached = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isRefreshing) return;

    if (containerRef.current && containerRef.current.scrollTop === 0) {
      isTopReached.current = true;
      startY.current = e.touches[0].clientY;
      setIsDragging(true);
    } else {
      isTopReached.current = false;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTopReached.current || isRefreshing) return;

    const currentY = e.touches[0].clientY;
    const diff = currentY - startY.current;

    if (diff > 0) {
      const resistance = 0.5;
      const newDistance = Math.min(diff * resistance, threshold * 2.5);

      setPullDistance(newDistance);

      if (e.cancelable) e.preventDefault();
    }
  };

  const handleTouchEnd = async () => {
    setIsDragging(false);

    if (!isTopReached.current || isRefreshing) return;

    if (pullDistance >= threshold) {
      setIsRefreshing(true);
      setPullDistance(threshold);

      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
        setPullDistance(0);
      }
    } else {
      // 임계값 못 넘음 -> 0으로 복귀
      setPullDistance(0);
    }
  };

  const transitionStyle = isDragging
    ? 'none'
    : 'all 0.45s cubic-bezier(0, 0, 0.2, 1)';

  return (
    <div
      ref={containerRef}
      className={wrapper({ className })}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={loaderContainer()}
        style={{
          height: 'auto',
          top: pullDistance > 0 ? `${pullDistance / 2}px` : `-${threshold}px`,
          transform: 'translateY(-50%)',
          opacity: pullDistance > 0 ? Math.min(pullDistance / threshold, 1) : 0,
          transition: transitionStyle,
        }}
      >
        <Spinner size="md" speed="fast" />
      </div>
      <div
        className={content()}
        style={{
          transform: `translateY(${pullDistance}px)`,
          transition: transitionStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};
