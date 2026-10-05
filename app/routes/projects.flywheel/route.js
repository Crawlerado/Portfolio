// Hidden until the Flywheel case study is finished. Delete the loader to bring it back.
export const loader = () => {
  throw new Response(null, { status: 404, statusText: 'Not found' });
};

export { Flywheel as default, meta } from './flywheel';
