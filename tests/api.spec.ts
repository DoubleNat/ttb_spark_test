import test, { expect } from "@playwright/test";
import { UserService } from "../resources/2_api/user.api";

let userService: UserService;

test.beforeEach("Create Object", async ({ request }) => {
  userService = new UserService(request);
});

test("Test Case 1: Get User Profile Success", async () => {
  const response = await userService.mockGetUserByIdSuccess();
  await expect(response.status()).toBe(200);

  const body = await response.json();
  await expect(body.id).toBe(12);
  await expect(body.email).toBe("rachel.howell@reqres.in");
  await expect(body.first_name).toBe("Rachel");
  await expect(body.last_name).toBe("Howell");
  await expect(body.avatar).toBe("https://reqres.in/img/faces/12-image.jpg");
});

test("Test Case 2: Get User Profile But User Not Found", async () => {
  const response = await userService.mockGetUserByIdUnsuccess();
  await expect(response.status()).toBe(404);

  const body = await response.json();
  await expect(body).toEqual({});
});



