const userService = require("../../../src/services/userService");

describe("User Service Test", () => {
  let validUser = {};
  let invalidUser = {};

  beforeAll(() => {
    validUser = {
      name: "Heisenberg",
      password: "ISellMeta",
    };
    invalidUser = {
      hello: "world",
    };
  });

  describe("Create user", () => {
    it("Should be able to create user", () => {
      const user = userService.save(validUser);
      expect(user).toBe(validUser);
    });

    it("Do not should be able to create user with invalid attributes", () => {
      const user = userService.save(invalidUser);
      expect(user).toBeUndefined();
    });
  });
});
