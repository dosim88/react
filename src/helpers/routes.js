export const index = '/';
export const pages = (page = ':page') => `/pages/${page}`;
export const search = () => '/search';
export const posts = (id = ':id') => `/posts/${id}`;
export const about = () => '/about';
export const contacts = () => '/contacts';
export const postEdit = (id = ':id') => `/posts/${id}/edit`;
export const postCreate = () => '/create-post';