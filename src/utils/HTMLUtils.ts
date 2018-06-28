export default class HTMLUtils {
  public static getAllElementsBySelector(selector: string) {
    return [
      ...(document.querySelectorAll(selector) as NodeListOf<HTMLElement>),
    ];
  }

  public static getAllElementBySelectors(...selectors: string[]) {
    return selectors.map(s => document.querySelector(s) as Element);
  }

  public static getIndexToScroll() {
    const height: number = window.scrollY + 100;
    return this.getAllElementsBySelector(this.headingSelector)
      .filter(el => el.offsetTop < height)
      .map(el => el.dataset.index)
      .pop();
  }

  public static scrollToDiv(divIndex: string) {
    const heightToScroll = this.getAllElementsBySelector(this.headingSelector)
      .filter(el => divIndex === el.dataset.index)
      .map(el => el.offsetTop - 50)
      .pop();

    window.scrollTo({
      top: heightToScroll,
      behavior: 'instant',
    });
  }

  private static readonly headingSelector: string = 'h1[id="sectionSubHeading"]';
}
