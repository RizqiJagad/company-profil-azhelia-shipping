import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const pdfsDir = path.join(process.cwd(), 'public', 'pdfs');
    const publicDir = path.join(process.cwd(), 'public');

    let targetFile = '';

    // Check public/pdfs directory first
    if (fs.existsSync(pdfsDir)) {
      const files = fs.readdirSync(pdfsDir);
      const pdfFile = files.find((f) => f.toLowerCase().endsWith('.pdf'));
      if (pdfFile) {
        targetFile = path.join(pdfsDir, pdfFile);
      }
    }

    // Check public root directory if not found in public/pdfs
    if (!targetFile && fs.existsSync(publicDir)) {
      const files = fs.readdirSync(publicDir);
      const pdfFile = files.find((f) => f.toLowerCase().endsWith('.pdf'));
      if (pdfFile) {
        targetFile = path.join(publicDir, pdfFile);
      }
    }

    if (!targetFile || !fs.existsSync(targetFile)) {
      return new NextResponse('PDF File Not Found', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(targetFile);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="AZHELIA_SHIPPING_Company_Profile.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
