'use client';

import {
  createScope,
  animate,
  createTimeline,
  stagger,
  text,
} from "animejs";
import { useEffect, useRef } from "react";

export default function TextAnimation() {
  const animationRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (!animationRef.current) return;

    // Create scope after component mounts
    scopeRef.current = createScope({
      root: '#horizontal-split',
  defaults: {
    ease: 'outQuad',
    duration: 500,
  }
    }).add((scope) => {
      if (!scope) return;
      const { root, methods } = scope;

      
  text.split('h2', {
    chars: {
      class: 'char',
      clone: 'left',
      wrap: 'clip',
    },
  });

  const rotateAnim = createTimeline({
    autoplay: false,
    defaults: { ease: 'inOutQuad', duration: 400, }
  })
  .add('.char > span', { x: '100%' }, stagger(5, { use: 'data-char' }))

  scope.add('onEnter', () => {
    animate(rotateAnim, { progress: 1 });
  });
  scope.add('onLeave', () => {
    animate(rotateAnim, { progress: 0 });
  });

  root.addEventListener('pointerenter', /** @type {EventListener} */(methods.onEnter));
  root.addEventListener('pointerleave', /** @type {EventListener} */(methods.onLeave));

});

    // Cleanup function
    return () => {
      if (scopeRef.current) {
        // Remove event listeners and clean up
        const root = animationRef.current;
        if (root) {
          root.removeEventListener('pointerenter', scopeRef.current.methods?.onEnter);
          root.removeEventListener('pointerleave', scopeRef.current.methods?.onLeave);
        }
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .char {
          display: inline-block;
          overflow: hidden;
        }
        
        .char > span {
          display: inline-block;
          will-change: transform;
        }
        
        .clip {
          overflow: hidden;
        }
        
                
        article {
          container-type: inline-size;
          border-radius: 1cqw;
        }
      `}</style>
      
      <article 
        id="horizontal-split" 
        ref={animationRef}
        className="flex flex-row justify-center items-center p-2 text-gray-300 transition-colors duration-300 ease-out"
      > <h3 className="text-xs px-2">website by:</h3>
        <h2 className="text-center text-sm will-change-transform cursor-pointer">
          Lewis Scrimgeour
        </h2>
      </article>
    </>
  );
}