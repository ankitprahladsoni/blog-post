export default class ContentLoader {
  public static getArticle(folder: string, article: string) {
    return require(`./${folder}/${article}`).getArticle();
  }
}
