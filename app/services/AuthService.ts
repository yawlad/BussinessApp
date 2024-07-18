import { AxiosError } from "axios";
import { instance } from "./service.api.config";
import Student from "@/types/Student";

const AuthService = {
  async login(data: { password: string }) {
    return instance
      .post("/auth/", data)
      .then((response) => {
        return response.status;
      })
      .catch((error: AxiosError) => {
        throw error;
      });
  },
};

export default AuthService;
