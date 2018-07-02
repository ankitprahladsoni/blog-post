export function getArticle() {
  const article=[];
  article.push(require('./what-is-it').default);
  article.push(require('./problem-statement').default);
  article.push(require('./the-solution').default);
  article.push(require('./other-examples').default);
  article.push(require('./conclusion').default);
  return article;
}