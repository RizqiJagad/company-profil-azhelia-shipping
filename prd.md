# Product Requirements Document (PRD) - AZHELIA SHIPPING
## Company Profile Website (Versi Improvisasi & Analisis Mendalam)

---

## 1. Executive Summary & Overview

* **Nama Proyek:** AZHELIA SHIPPING - Company Profile Website
* **Konsep Utama:** *"Professional Maritime Excellence"*
* **Target Audience:** 
  * **Shipowners / Principal:** Perusahaan pemilik kapal internasional yang membutuhkan jasa manajemen kru dan rekrutmen pelaut berkualitas.
  * **Seafarers / Pelaut:** Pelaut profesional yang mencari peluang karir di kapal-kapal internasional.
* **Referensi Design:** Adaptasi sealand.co.id dengan pendekatan yang lebih sophisticated, modern, dan conversion-oriented.

---

## 2. Analisis Brief & Strategic Recommendations

### ✅ Kekuatan Brief
1. **Struktur Halaman Jelas:** Terdefinisi dengan baik mencakup 12 halaman utama.
2. **Target Audience Spesifik:** Fokus ganda pada Shipowners dan Seafarers.
3. **Tech Stack Modern:** Menggunakan Next.js 14, Tailwind CSS, shadcn/ui, dan Framer Motion.
4. **Color Palette Elegan:** Skema warna navy-blue modern yang mencerminkan kewibawaan industri maritim.
5. **Fokus pada Performance & SEO:** Arsitektur yang berfokus pada kecepatan muat dan keterlihatan di mesin pencari.

### ⚠️ Area Improvisasi & Strategi Solusi
1. **Hero Section Powerful:** Menambahkan storytelling visual dengan latar belakang video maritim full-screen dan parallax scrolling effect.
2. **Social Proof Integration:** Menampilkan counter statistik real-time dan testimoni carousel dari pemimpin industri/kapten.
3. **Interactive Career Board:** Menyediakan fitur pencarian posisi, filter berdasarkan rank/jabatan, serta multi-step application form.
4. **Dynamic Gallery:** Implementasi masonry layout dengan lightbox modal untuk gambar dan media interaktif.
5. **Strategic Call-to-Action (CTA):** Penempatan banner CTA strategis di setiap alur halaman untuk meningkatkan konversi.
6. **Lead Generation Page:** Halaman download profil perusahaan yang ter-gate dengan formulir pengumpulan data calon klien.
7. **Contact & Auto-Response Flow:** Form kontak multi-kolom yang terintegrasi dengan Google Maps dan link WhatsApp langsung.

---

## 3. Visual Design System

### 3.1 Design Philosophy
* **Clean & Sophisticated:** Memanfaatkan *generous white space*, tata letak teratur, dan tampilan bebas dari elemen berantakan.
* **Trust & Authority:** Tipografi yang tegas (*bold typography*) dipadukan dengan statistik impresif untuk membangun kredibilitas.
* **Smooth Interactions:** Animasi mikro (*micro-interactions*) yang halus menggunakan Framer Motion.
* **Visual Hierarchy:** Alur navigasi yang jelas dan jalur konversi pengguna (*conversion funnels*) yang efisien.

### 3.2 Color Palette

```css
/* Primary Colors */
--primary-navy: #0A2540;          /* Deep navy untuk headings utama & aksen gelap */
--primary-blue: #1E3A8A;          /* Maritime blue untuk brand accent utama */
--primary-light: #3B82F6;         /* Bright blue untuk CTA buttons & highlight */

/* Neutrals */
--white: #FFFFFF;                 /* Background utama */
--off-white: #F8FAFC;             /* Secondary background & card backgrounds */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-900: #111827;              /* Warna teks utama */

/* Semantic Colors */
--success: #10B981;               /* Status aktif / sukses */
--warning: #F59E0B;               /* Peringatan / perhatian */
--error: #EF4444;                 /* Validasi error */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #0A2540 0%, #1E3A8A 100%);
--gradient-blue: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
```

### 3.3 Typography System
* **Primary Font:** `'Inter'`, sans-serif
* **Heading Weight:** Bold & Extra-Bold (700-800)
* **Body Weight:** Regular & Medium (400-500)

**Type Scale:**
* `xs`: `0.75rem` (12px)
* `sm`: `0.875rem` (14px)
* `base`: `1rem` (16px)
* `lg`: `1.125rem` (18px)
* `xl`: `1.25rem` (20px)
* `2xl`: `1.5rem` (24px)
* `3xl`: `1.875rem` (30px)
* `4xl`: `2.25rem` (36px)
* `5xl`: `3rem` (48px)
* `6xl`: `3.75rem` (60px)

### 3.4 Component Design Patterns

#### Buttons
```tsx
// Primary CTA - Gradient dengan hover effect
<Button variant="primary" className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#0A2540] hover:to-[#1E3A8A] transition-all duration-300 shadow-lg hover:shadow-xl">
  Get Started
</Button>

// Secondary - Outline dengan subtle hover
<Button variant="outline" className="border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white">
  Learn More
</Button>

// Ghost - Minimal untuk text links
<Button variant="ghost" className="text-[#1E3A8A] hover:text-[#0A2540] hover:bg-gray-100">
  View Details →
</Button>
```

#### Cards
```tsx
// Service Card dengan hover lift effect
<Card className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
  <Icon className="w-12 h-12 text-[#1E3A8A] mb-4" />
  <h3 className="text-xl font-bold text-[#111827] mb-2">Service Title</h3>
  <p className="text-gray-600">Description text</p>
</Card>
```

---

## 4. Arsitektur Informasi & Spesifikasi Halaman (12 Halaman)

### 1. HOMEPAGE — *"Your Gateway to Maritime Excellence"*
* **Hero Section (Full-screen dengan Video & Parallax):**
  * Video latar belakang laut/kapal dengan overlay gradien navy.
  * Headline dramatis: *"Your Trusted Partner in Maritime Excellence"*.
  * Dual CTA Button: *"Explore Our Services"* dan *"View Career Opportunities"*.
* **Statistics Counter Section:**
  * Komponen counter teranimasi: 500+ Seafarers Deployed, 15+ Vessel Types, 100% Compliance Rate, 10+ Years Experience.
* **Why Choose Us:**
  * Grid keunggulan interaktif dengan animasi icon dan hover lift.
* **Testimonial Carousel (Social Proof):**
  * Kartu kutipan dari Kapten dan Shipowner terpercaya.
* **CTA Banner Konversi:**
  * Banner penutup dengan ajakan bertindak langsung menghubungi tim.

### 2. ABOUT US — *"Our Story, Our Commitment"*
* **Timeline / History Section:**
  * Garis waktu vertikal interaktif yang menampilkan milestone perusahaan dari pendirian (2015) hingga inovasi platform digital (2024).
* **Vision & Mission Cards:**
  * Layout 2 kolom modern bergaris batas warna aksen dengan deskripsi mendalam.
* **Core Values Grid:**
  * Icon grid 4 kolom (Integrity, Excellence, Responsibility, Professionalism) dengan efek zoom saat dikursor.

### 3. SERVICES — *"End-to-End Maritime Solutions"*
* **Service Grid & Modal Details:**
  * Menampilkan 6+ layanan utama: Crew Recruitment, Crew Management, Maritime Training, Document Compliance, Payroll Services, & Crew Travel.
  * Setiap kartu mencantumkan daftar poin keunggulan utama dan tombol modal untuk melihat detail selengkapnya.

### 4. VESSEL TYPES — *"Comprehensive Maritime Coverage"*
* **Interactive Vessel Gallery:**
  * Grid responsif tipe kapal: Bulk Carrier, Tanker, Container, MPP Vessel, LPG Carrier, dan General Cargo.
  * Dilengkapi gambar berkualitas tinggi, spesifikasi DWT/TEU, dan gradien overlay saat di-hover.

### 5. RECRUITMENT PROCESS — *"Transparent Journey"*
* **Interactive Step-by-Step Timeline:**
  * Diagram alir 6 langkah transparan: (1) Application, (2) Screening, (3) Interview, (4) Medical Check, (5) Training, (6) Deployment.
  * Dilengkapi nomor langkah, icon visual, dan penjelasan ringkas di setiap tahap.

### 6. CAREERS — *"Your Maritime Career Starts Here"*
* **Enhanced Job Board & Filter System:**
  * Fitur pencarian posisi pekerjaan berbasis kata kunci.
  * Dropdown filter berdasarkan Rank/Jabatan (Captain, Chief Engineer, Officers, Ratings).
  * Kartu lowongan kerja lengkap dengan badge status, durasi kontrak, lokasi, dan perkiraan gaji.
* **Multi-Step Application Form (Modal/Dialog):**
  * **Step 1:** Data Pribadi (Nama, Email, Telepon, Tanggal Lahir).
  * **Step 2:** Pengalaman & Kualifikasi (Rank saat ini, Pengalaman kerja, Sertifikasi).
  * **Step 3:** Lampiran Dokumen (Upload CV PDF, Foto, Sertifikat).

### 7. GALLERY — *"Visual Journey"*
* **Masonry Grid & Lightbox Integration:**
  * Tata letak galeri gaya masonry yang responsif.
  * Fitur pop-up Lightbox untuk memperbesar foto beserta judul dan deskripsi dokumentasi kegiatan operasional.

### 8. TEAMS — *"Meet Our Leadership"*
* **Leadership Grid & Hover Overlay:**
  * Menampilkan jajaran direksi dan manajemen perusahaan.
  * Efek overlay saat kursor diarahkan untuk menampilkan biografi singkat serta tautan sosial media (LinkedIn & Email).

### 9. FAQ — *"Quick Answers"*
* **Tabbed Categorized Accordions:**
  * Pembagian kategori FAQ berbasis Tab: **For Shipowners** dan **For Seafarers**.
  * Akordion interaktif yang mulus untuk menyembunyikan/menampilkan jawaban.

### 10. CONTACT — *"Let's Connect"*
* **Multi-Column Layout:**
  * Kolom Informasi Kontak: Alamat kantor di Jakarta Utara, Nomor Telepon/WhatsApp (+62 812-9590-4116), dan Email resmi.
  * Quick Actions Button: Tombol akses cepat pesan WhatsApp dan panggilan telepon langsung.
  * Formulir Kontak: Input Nama, Email, Telepon, Subjek, dan Pesan.
  * Embed Google Maps interaktif ukuran penuh.

### 11. DOWNLOAD COMPANY PROFILE — *"Lead Generation Page"*
* **Gated Content Strategy:**
  * Halaman penawaran download E-Book/PDF Profil Perusahaan.
  * Form pendaftaran singkat (Nama, Email, Nama Perusahaan) sebelum link unduhan dibuka untuk menangkap *potential leads*.

### 12. PRIVACY POLICY — *"Legal Compliance"*
* **Legal Layout Clean:**
  * Halaman kebijakan privasi berformat standar, mudah dibaca, dan mencakup informasi pengumpulan data, penggunaan data, serta hak pengguna sesuai regulasi.

---

## 5. Technical Implementation & Architecture

### 5.1 Tech Stack & Tools
| Kategori | Teknologi |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) + TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Form Handling** | React Hook Form + Zod Schema Validation |
| **State Management**| Zustand |
| **SEO** | Next SEO + Schema.org (JSON-LD) |
| **Media Handling** | Next/Image dengan WebP/AVIF Optimization |
| **Deployment** | Vercel Platform |

### 5.2 SEO Configuration Strategy
```typescript
// app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://azheliashipping.com'),
  title: {
    default: 'AZHELIA SHIPPING - Maritime Recruitment & Crew Management',
    template: '%s | AZHELIA SHIPPING'
  },
  description: 'Professional maritime recruitment and crew management company connecting skilled seafarers with international shipowners.',
  keywords: [
    'maritime recruitment indonesia',
    'crew management jakarta',
    'seafarer jobs',
    'shipping company',
    'crew recruitment'
  ],
  authors: [{ name: 'AZHELIA SHIPPING' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://azheliashipping.com',
    siteName: 'AZHELIA SHIPPING',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AZHELIA SHIPPING'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AZHELIA SHIPPING',
    description: 'Professional maritime recruitment and crew management',
    images: ['/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};
```

### 5.3 Performance Optimization Strategies
```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};
```

### 5.4 Responsive Design Strategy & Breakpoints
* **Mobile-First Approach:** Layout dibangun dari ukuran layar terkecil hingga desktop.
* **Breakpoints Standard:**
  * `sm`: `640px` (Mobile Landscape)
  * `md`: `768px` (Tablet)
  * `lg`: `1024px` (Laptop)
  * `xl`: `1280px` (Desktop)
  * `2xl`: `1536px` (Large Desktop)

---

## 6. Verification & Quality Assurance Criteria

1. **Performance Score:** Minimum Lighthouse score **> 90** pada Performance, Accessibility, Best Practices, dan SEO.
2. **Cross-Browser Compatibility:** Berjalan tanpa hambatan pada Chrome, Edge, Safari, dan Firefox modern.
3. **Responsive Execution:** Tampilan adaptif penuh dari resolusi mobile (360px) hingga layar Ultra-wide.
4. **Form Validation:** Validasi komprehensif pada form Karir, Kontak, dan Download PDF menggunakan Zod schema.
