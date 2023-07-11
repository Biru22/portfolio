import dynamic from 'next/dynamic';

const DynamicPageProjects = dynamic(() => import('../../components/PageProjects.component'));

export default function About() {
  return <DynamicPageProjects />;
}
