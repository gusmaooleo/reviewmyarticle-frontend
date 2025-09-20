"use client";

import { Controller, useFormContext } from "react-hook-form";
import { InputLabel } from "@/components/shared/InputLabel";
import { useEffect, useState } from "react";
import { StatesOptions, UFState } from "@/components/subscribe/StatesOptions";
import { CreditCardInput } from "@/components/subscribe/CreditCardInput";
import { SubscribeForm } from "@/types/subscribe-form";

export function AddressPayment() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<SubscribeForm>();
  const [states, setStates] = useState<UFState[]>([]);

  useEffect(() => {
    const loadStates = async () => {
      const ufStates = await (
        await fetch("https://apis.codante.io/bandeiras-dos-estados")
      ).json();
      setStates(ufStates);
    };

    loadStates();
  }, []);

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex w-full flex-row gap-6">
        <div className="w-full">
          <Controller
            name="state"
            control={control}
            render={({ field: { value, onChange } }) => (
              <StatesOptions
                name="state"
                states={states}
                labelText="Estado"
                value={value}
                onValueChange={onChange}
              />
            )}
          />
          {errors.state && (
            <p className="text-red-500 text-xs">
              {String(errors.state.message)}
            </p>
          )}
        </div>
        <div className="w-full">
          <InputLabel {...register("city")} name="city" labelText="Cidade" />
          {errors.city && (
            <p className="text-red-500 text-xs">
              {String(errors.city.message)}
            </p>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col sm:flex-row gap-6">
        <div className="hidden">
          <InputLabel
            {...register("country")}
            name="country"
            labelText=""
            className="hidden"
            value={"Brasil"}
          />
        </div>
        <div className="w-full">
          <InputLabel
            {...register("street")}
            name="street"
            labelText="Endereço"
          />
          {errors.street && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.street.message)}
            </p>
          )}
        </div>
        <div className="w-full">
          <InputLabel
            {...register("complement")}
            name="complement"
            labelText="Complemento"
          />
          {errors.complement && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.complement.message)}
            </p>
          )}
        </div>
        <div className="w-full">
          <InputLabel
            {...register("zipCode")}
            name="zipCode"
            labelText="Código postal"
          />
          {errors.zipCode && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.zipCode.message)}
            </p>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col sm:flex-row gap-6">
        <div className="w-full">
          <CreditCardInput
            labelText="Número do cartão"
            {...register("cardNumber")}
            name="cardNumber"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.cardNumber.message)}
            </p>
          )}
        </div>
        <div className="flex flex-row gap-6 justify-between">
          <div className="w-full sm:w-[60%]">
            <InputLabel
              {...register("expired")}
              name="expired"
              labelText="Vencimento"
              placeholder="mm/aa"
            />
            {errors.expired && (
              <p className="text-red-500 text-xs mt-1">
                {String(errors.expired.message)}
              </p>
            )}
          </div>
          <div className="w-full sm:w-[40%]">
            <InputLabel {...register("cvv")} name="cvv" labelText="CVV" />
            {errors.cvv && (
              <p className="text-red-500 text-xs mt-1">
                {String(errors.cvv.message)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
