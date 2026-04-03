import { APIRequestContext } from "@playwright/test";

export class UserService {
  constructor(private request: APIRequestContext) {}

  async getUserById(id: number) {
    return await this.request.get(`https://reqres.in/api/users/${id}`, {
      headers: { "x-api-key": "reqresfree-v1" },
    });
  }

  async mockGetUserByIdSuccess() {
    return await this.request.get("http://localhost:8882/api/users/12", {
      headers: { "x-api-key": "reqresfree-v1" },
    });
  }

  async mockGetUserByIdUnsuccess() {
    return await this.request.get("http://localhost:8882/api/users/1234", {
      headers: { "x-api-key": "reqresfree-v1" },
    });
  }
}
