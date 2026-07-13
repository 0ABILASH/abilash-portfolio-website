import { useState, useEffect } from 'react'

const collections = [
  {
    id: 'moments',
    name: 'Moments',
    count: 5,
    cover: '/gallery/IMG_6568.png',
    photos: [
      { src: '/gallery/IMG_6568.png', caption: 'Jeff Bezos' },
      { src: '/gallery/IMG_6570.png', caption: 'Sundar Pichai' },
      { src: '/gallery/IMG_6574.png', caption: 'Mark Zuckerberg' },
      { src: '/gallery/IMG_6575.png', caption: 'Elon Musk' },
      { src: '/gallery/photo4.webp', caption: 'Into the code' },
    ]
  },
  {
    id: 'featured',
    name: 'Featured',
    count: 3,
    cover: '/IMG_6558.png',
    photos: [
      { src: '/IMG_6558.png', caption: 'Abilash' },
      { src: '/abilashPhoto.jpeg', caption: 'Abilash' },
      { src: '/photo.jpg', caption: 'Creative space' },
    ]
  },
  {
    id: 'visionaries',
    name: 'Tech Visionaries',
    count: 4,
    cover: '/gallery/IMG_6570.png',
    photos: [
      { src: '/gallery/IMG_6568.png', caption: 'Jeff Bezos — Amazon' },
      { src: '/gallery/IMG_6570.png', caption: 'Sundar Pichai — Google' },
      { src: '/gallery/IMG_6574.png', caption: 'Mark Zuckerberg — Meta' },
      { src: '/gallery/IMG_6575.png', caption: 'Elon Musk — Tesla' },
    ]
  },
  {
    id: 'creative',
    name: 'Creative',
    count: 3,
    cover: '/gallery/photo4.webp',
    photos: [
      { src: '/gallery/photo4.webp', caption: 'Abstract' },
      { src: '/gallery/IMG_6568.png', caption: 'Vision' },
      { src: '/photo.jpg', caption: 'Workspace' },
    ]
  },
]

export default function PhotoGrid() {
  const [activeCollection, setActiveCollection] = useState(null)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    if (activeIndex === null) return
    const photos = activeCollection ? collections.find(c => c.id === activeCollection)?.photos || [] : []
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveIndex(null)
      if (e.key === 'ArrowRight') setActiveIndex(i => (i + 1) % photos.length)
      if (e.key === 'ArrowLeft') setActiveIndex(i => (i - 1 + photos.length) % photos.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, activeCollection])

  const currentCollection = collections.find(c => c.id === activeCollection)
  const photos = currentCollection?.photos || []

  return (
    <section className="collection-section" id="gallery">
      <div className="sec-label">Gallery</div>

      {!activeCollection ? (
        <div className="coll-grid">
          {collections.map((c, ci) => (
            <button
              key={c.id}
              className="coll-card"
              onClick={() => setActiveCollection(c.id)}
              style={{ '--i': ci }}
            >
              <div className="coll-card-visual">
                <div className="coll-card-strip">
                  {c.photos.slice(0, 4).map((p, i) => (
                    <div key={i} className="coll-card-thumb">
                      <img src={p.src} alt="" />
                    </div>
                  ))}
                </div>
                <div className="coll-card-gradient" />
              </div>
              <div className="coll-card-body">
                <div className="coll-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {ci === 0 && <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></>}
                    {ci === 1 && <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>}
                    {ci === 2 && <><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></>}
                    {ci === 3 && <><path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/><path d="M2 7l10 5 10-5"/><path d="M12 22V12"/></>}
                  </svg>
                </div>
                <div className="coll-card-meta">
                  <h3 className="coll-card-name">{c.name}</h3>
                  <span className="coll-card-count">{c.count} photos</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <>
          <div className="coll-back">
            <button className="coll-back-btn" onClick={() => setActiveCollection(null)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
              <span>Back</span>
            </button>
            <span className="coll-back-title">{currentCollection?.name} · {photos.length} photos</span>
          </div>

          <div className="coll-photos">
            {photos.map((p, i) => (
              <button
                key={i}
                className="coll-photo-item"
                onClick={() => setActiveIndex(i)}
                aria-label={`Open ${p.caption}`}
              >
                <img src={p.src} alt={p.caption} loading="lazy" />
                <div className="coll-photo-overlay">
                  <span className="coll-photo-num">{(i + 1).toString().padStart(2, '0')}</span>
                  <span className="coll-photo-caption">{p.caption}</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {activeIndex !== null && (
        <div className="coll-lightbox" onClick={() => setActiveIndex(null)}>
          <button className="coll-lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close">&times;</button>
          <button
            className="coll-lightbox-nav prev"
            onClick={e => { e.stopPropagation(); setActiveIndex(i => (i - 1 + photos.length) % photos.length) }}
            aria-label="Previous"
          >&#8249;</button>
          <img
            src={photos[activeIndex].src}
            alt={photos[activeIndex].caption}
            className="coll-lightbox-img"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="coll-lightbox-nav next"
            onClick={e => { e.stopPropagation(); setActiveIndex(i => (i + 1) % photos.length) }}
            aria-label="Next"
          >&#8250;</button>
          <div className="coll-lightbox-info">
            <span className="coll-lightbox-counter">{activeIndex + 1} / {photos.length}</span>
            <span className="coll-lightbox-caption">{photos[activeIndex].caption}</span>
          </div>
        </div>
      )}
    </section>
  )
}
