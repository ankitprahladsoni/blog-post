export default class HTMLUtils {
  public static getAllElementsBySelector(selector: string) {
    return [
      ...(document.querySelectorAll(selector) as NodeListOf<HTMLElement>),
    ];
  }

  public static getAllElementBySelectors(...selectors: string[]) {
    return selectors.map(s => document.querySelector(s) as Element);
  }
}
