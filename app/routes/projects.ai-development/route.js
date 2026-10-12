// Hidden: the shipped sites now live on the Product Leadership page. Delete the loader to bring it back.
export const loader = () => {
  throw new Response(null, { status: 404, statusText: 'Not found' });
};

export { AiDevelopment as default, meta } from './ai-development';
