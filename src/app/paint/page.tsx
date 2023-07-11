import dynamic from 'next/dynamic';

const DynamicPagePaint = dynamic(() => import('../../components//PagePaint.component'));

export default function About() {
  return <DynamicPagePaint />;
}
