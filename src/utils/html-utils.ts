export default class HTMLUtils {
  public static getAllElementsBySelector(selector: string) {
    return [
      ...(document.querySelectorAll(selector) as NodeListOf<HTMLElement>),
    ];
  }
}
