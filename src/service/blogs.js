/**
 * check a slug url exist or not
 * @param {*} slug 
 * @returns 
 */
export const checkSlugExists = (slug) => {
    const blogs = JSON.parse(localStorage.getItem('blogs'));
    if (blogs) {
        const isBlog = blogs.find((blog) => {
            return blog.slug === slug
        })
        return !!isBlog
    } else {
        return false;
    }
}