import { updateAppState } from "@/app/actions/actions";
import { environments } from "@/environments/environments";
import { OAuth2 } from "@/types/api-response-types";
import { ILoginForm } from "@/types/login";

export class UserService {
  async logInUser(loginData: ILoginForm): Promise<boolean> {
    try {
      const response = await fetch(`${environments.url}/oauth2/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + this.getBasicAuth(),
        },
        body: new URLSearchParams({
          grant_type: "password",
          username: loginData.login,
          password: loginData.password,
        }),
        cache: "no-store",
      });
      const data: OAuth2 = await response.json();
      if (data.access_token) {
        updateAppState({ userToken: data.access_token });
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  private getBasicAuth() {
    return Buffer.from(
      `${environments.clientID}:${environments.clientSecret}`
    ).toString("base64");
  }
}
