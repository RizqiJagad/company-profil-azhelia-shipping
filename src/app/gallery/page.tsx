'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { galleryData, GalleryItem } from '@/data/maritimeData';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Operations', 'Vessels', 'Training', 'Events'];

  const filteredGallery = galleryData.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <div className="pt-24 pb-20 bg-[#FAF6EC]">
      {/* Header */}
      <section className="bg-[#071429] text-white py-16 mb-16 border-b border-[#E1B341]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black mb-4 text-[#E1B341]"
          >
            VISUAL JOURNEY & OPERATIONS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 font-light"
          >
            A glimpse into our crewing operations, fleet management, simulator training sessions, and annual maritime events.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#E1B341] text-[#071429] shadow-md font-black border border-[#071429]'
                  : 'bg-white text-gray-700 hover:bg-[#E1B341]/20 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white border border-[#E1B341]/30 hover:border-[#E1B341]"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071429]/95 via-[#071429]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-black bg-[#E1B341] text-[#071429] px-2.5 py-0.5 rounded-full mb-2 inline-block uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-lg leading-snug text-white">{item.title}</h4>
                    <p className="text-xs text-gray-300 mt-1 line-clamp-2">{item.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 p-2 bg-[#E1B341] rounded-full text-[#071429] shadow">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={selectedImage.title}
          maxWidth="3xl"
        >
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl max-h-[65vh] border border-[#E1B341]/30">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-[#071429] bg-[#E1B341] px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Category: {selectedImage.category}
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{selectedImage.description}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}
