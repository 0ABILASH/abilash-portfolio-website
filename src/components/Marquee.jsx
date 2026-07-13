// export default function Marquee() {
//   const items = ['Software Engineering', 'Yottron Solutions', 'Clean Architecture', 'Problem Solving', 'Innovation', 'Scalable Systems', 'Full Stack Dev', 'Open Source']
//   const doubled = [...items, ...items]
//   return (
//     <div className="mq-wrap">
//       <div className="mq">
//         {doubled.map((item, i) => (
//           <span key={i} className="mq-item">{item}<span className="md">&#10022;</span></span>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default function Marquee() {
//   const items = ['Thank you for visiting my portfolio!', 'Feel free to explore my work and get in touch!']
//   const doubled = [...items, ...items, ...items]  // ← the loop trick starts here

//   return (
//     <div className="mq-wrap">
//       <div className="mq">
//         {doubled.map((item, i) => (
//           <span key={i} className="mq-item">
//             {item}<span className="md">&#10024;</span>
//           </span>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default function Marquee() {
//   const items = [
//     'Thank you for visiting my portfolio!',
//     'Feel free to explore my work and get in touch!'
//   ]
//   const doubled = [...items, ...items]

//   return (
//     <div className="mq-wrap">
//       <style>{`
//         .mq-wrap {
//           border-top: 1px solid rgba(200,169,126,.07);
//           border-bottom: 1px solid rgba(200,169,126,.07);
//           overflow: hidden;
//           padding: 10px 0;
//           background: rgba(200,169,126,.012);
//           position: relative;
//           z-index: 2;
//         }
//         .mq {
//           display: flex;
//           gap: 70px;
//           width: max-content;
//           animation: mqScroll 24s linear infinite;
//         }
//         .mq-item {
//           font-family: 'Archivo Black', sans-serif;
//           font-size: 1.05rem;
//           color: rgba(0,0,0,.9);
//           white-space: nowrap;
//           letter-spacing: .06em;
//         }
//         .mq-item .md {
//           color: var(--a, #c8a97e);
//           margin-left: 8px;
//         }
//         @keyframes mqScroll {
//           from { transform: translateX(0); }
//           to   { transform: translateX(-50%); }
//         }
//       `}</style>
//       <div className="mq">
//         {doubled.map((item, i) => (
//           <span key={i} className="mq-item">
//             {item}<span className="md">&#10024;</span>
//           </span>
//         ))}
//       </div>
//     </div>
//   )
// }

export default function Marquee() {
  const items = [
    'Disclaimer: Career and Website are under construction. ' , ' ',' ',' ',' ',' ',' ',
  ]

  // Repeat the phrase set enough times to always fill wide screens with no gaps
  const REPEAT = 8
  const looped = Array.from({ length: REPEAT }).flatMap(() => items)

  return (
    <div className="mq-wrap">
      <style>{`
        .mq-wrap {
          border-top: 1px solid rgba(200,169,126,.07);
          border-bottom: 1px solid rgba(200,169,126,.07);
          overflow: hidden;
          padding: 10px 0;
          background: rgba(200,169,126,.012);
          position: relative;
          z-index: 2;
        }
        .mq {
          display: flex;
          gap: 70px;
          width: max-content;
          animation: mqScroll 10s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .mq-wrap:hover .mq {
           animation-play-state: running !important;
           pointer-events: none;
        }
        .mq-item {
          font-family: 'Archivo Black', sans-serif;
          font-size: 1.05rem;
          color: rgba(0,0,0,.9);
          white-space: nowrap;
          letter-spacing: .06em;
          flex-shrink: 0;
        }
        .mq-item .md {
          color: var(--a, #c8a97e);
          margin-left: 8px;
        }
        @keyframes mqScroll {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(${-100 / REPEAT}%,0,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mq { animation: none; }
        }
      `}</style>
      <div className="mq">
        {looped.map((item, i) => (
          <span key={i} className="mq-item">  &#xA0; 
            {item}<span className="md" ></span>
          </span>
        ))}
      </div>
    </div>
  )
}