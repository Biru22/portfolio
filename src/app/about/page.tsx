import dynamic from 'next/dynamic';

const DynamicPageAbout = dynamic(() => import('../../components/PageAbout.component'));

export default function About() {
  return <DynamicPageAbout />;
}
