export const index = '/';
export const posts = (id = ':id') => `/posts/${id}`;
export const about = () => '/about';
export const contacts = () => '/contacts';
export const postEdit = (id = ':id') => `/posts/${id}/edit`;
export const postCreate = () => '/create-post';