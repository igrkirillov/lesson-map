import ErrorRepository from "../ErrorRepository";

describe("errors repository module", () => {
  test ("translate successfully", () => {
    const errorRepo = new ErrorRepository();
    const errorCode = 1;
    const errorDesc = "Opps";
    errorRepo.addError(errorCode, errorDesc);
    expect(errorRepo.translate(errorCode)).toBe(errorDesc);
  });
  test ("translate with error", () => {
    const errorRepo = new ErrorRepository();
    const errorCode = 1;
    expect(() => errorRepo.translate(errorCode)).toThrow("Unknown error");
  });
});