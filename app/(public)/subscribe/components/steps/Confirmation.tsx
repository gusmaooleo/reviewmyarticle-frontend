import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SubscribeForm } from "@/types/subscribe-form";
import { MessageCircleWarningIcon } from "lucide-react";
import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";

export function Confirmation() {
  const {
    register,
    control,
    formState: { errors },
    getValues,
  } = useFormContext<SubscribeForm>();
  const values = getValues();

  return (
    <div className="flex flex-col h-full gap-6 w-full">
      <div className="flex flex-row gap-6 justify-between">
        <div>
          <Label htmlFor="usernameUser">Nome</Label>
          <p id="usernameUser">{values.usernameUser}</p>
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <p id="email">{values.login}</p>
        </div>
        <div>
          <Label htmlFor="number">Telefone</Label>
          <p id="number">{values.telephoneNumber}</p>
        </div>
      </div>

      <Separator />

      <div className="flex flex-row gap-6 justify-between">
        <div>
          <Label htmlFor="address">Endereço</Label>
          <p id="address">{`${values.street}, ${values.complement}, ${values.city}, ${values.state} - ${values.zipCode}, Brasil`}</p>
        </div>
        {values.workPlace && (
          <div>
            <Label htmlFor="workPlace">Local de trabalho</Label>
            <p id="workPlace">{`${values.workPlace}`}</p>
          </div>
        )}
      </div>

      <Separator />

      <div className="flex flex-row gap-6 justify-between">
        <div>
          <Label htmlFor="cardNumber">Número do cartão</Label>
          <p id="cardNumber">{values.cardNumber}</p>
        </div>
        <div>
          <Label htmlFor="expiration">Vencimento</Label>
          <p id="expiration">{values.expired}</p>
        </div>
        <div>
          <Label htmlFor="cvv">CVV</Label>
          <p id="CVV">{values.cvv}</p>
        </div>
      </div>

      {values.profilePic ? (
        <>
          <Separator />
          <div className="flex flex-col items-center gap-2 pt-10">
            <Label htmlFor="profilePic">Foto de perfil</Label>
            <Image
              src={(values.profilePic as any).preview}
              alt="profilePic"
              id="profilePic"
              width={120}
              height={120}
              className="object-cover aspect-square rounded-[100px]"
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col w-full text-yellow-600 justify-center items-center gap-2 mt-2">
          <p className="text-center">
            Escolha uma foto de perfil na aba "Dados pessoais" <br /> para
            habilitar a pré visualização
          </p>
          <MessageCircleWarningIcon />
        </div>
      )}

      <div className="flex w-full justify-center flex-row gap-2 mb-[-60px] mt-2">
        <Controller
          name="isReviewer"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="isReviewer"
              checked={!!field.value}
              onCheckedChange={(v) => field.onChange(!!v)}
              onBlur={field.onBlur}
              ref={field.ref}
              className="bg-white"
            />
          )}
        />
        <Label htmlFor="isReviewer">Quero ser um revisor de artigos</Label>
      </div>
    </div>
  );
}
