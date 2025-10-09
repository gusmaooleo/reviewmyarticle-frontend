import { updateAppState } from "@/app/actions/actions";
import { environments } from "@/environments/environments";
import { OAuth2 } from "@/types/api-response-types";
import { ILoginForm } from "@/types/login";
import { SubscribeForm } from "@/types/subscribe-form";
import { parseMonthYear } from "../utils/parseMonthYear";

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

  async createUser(data: SubscribeForm, congressToSubscribe: number) {
    try {
      const subscribeFormattedObject = {
        usernameUser: data.usernameUser,
        login: data.login,
        workPlace: data.workPlace,
        isReviewer: data.isReviewer,
        addressDTO: {
          street: data.street,
          number: data.number,
          complement: data.complement,
          state: data.state,
          city: data.city,
          zipCode: data.zipCode,
          country: data.country,
        },
        cardDTO: {
          number: data.cardNumber.replace(/\s+/g, ""),
          expired: parseMonthYear(data.expired),
          cvv: data.cvv,
        },
        profileImage: data.profilePic,
        congressoId: congressToSubscribe,
        roles: [
          {
            id: data.isReviewer ? 2 : 3,
            authority: data.isReviewer ? "ROLE_REVIEWER" : "ROLE_PARTICIPANT",
          },
        ],
        password: data.password,
      };

      const createUser = await fetch(`${environments.url}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subscribeFormattedObject)
      });

      const createdUser = await createUser.json();
      console.log(createdUser);
    } catch (error) {
      console.log(error);
    }
  }

  private getBasicAuth() {
    return Buffer.from(
      `${environments.clientID}:${environments.clientSecret}`
    ).toString("base64");
  }
}
