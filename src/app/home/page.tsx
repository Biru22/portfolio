import dynamic from 'next/dynamic';

const DynamicPageHome = dynamic(() => import('../../components/PageHome.component'));

export default function About() {
  return <DynamicPageHome />;
}
