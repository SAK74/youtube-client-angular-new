export abstract class LoggerService {
  // eslint-disable-next-line class-methods-use-this
  protected logMessage(message: string) {
    // eslint-disable-next-line no-console
    console.log(message);
  }
}
