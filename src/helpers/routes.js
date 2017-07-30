export const index = '/';
export const posts = (id = ':id') => `/posts/${id}`;
export const about = () => '/about';
export const like = (id) => `/posts/${id}/like`;