"use client";

import { Controller, useFormContext } from "react-hook-form";
import { InputLabel } from "@/components/shared/InputLabel";
import AvatarUpload from "@/components/file-upload/avatar-upload";

export function PersonalData() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex w-full flex-row gap-6">
        <div className="w-full">
          <InputLabel
            {...register("usernameUser")}
            name="usernameUser"
            labelText="Nome"
          />
          {errors.usernameUser && (
            <p className="text-red-500 text-xs">
              {String(errors.usernameUser.message)}
            </p>
          )}
        </div>
        <div className="w-full">
          <InputLabel
            {...register("login")}
            name="login"
            type="email"
            labelText="Email"
          />
          {errors.login && (
            <p className="text-red-500 text-xs">
              {String(errors.login.message)}
            </p>
          )}
        </div>
      </div>

      <div className="flex w-full flex-row gap-6">
        <div className="w-full">
          <InputLabel
            {...register("telephoneNumber")}
            name="telephoneNumber"
            type="text"
            labelText="Telefone"
          />
          {errors.telephoneNumber && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.telephoneNumber.message)}
            </p>
          )}
        </div>
        <div className="w-full">
          <InputLabel
            {...register("workPlace")}
            name="workPlace"
            type="text"
            labelText="Local de trabalho"
            placeholder="Nome da empresa, endereço"
          />
          {errors.workPlace && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.workPlace.message)}
            </p>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col sm:flex-row gap-6">
        <div className="flex w-full flex-col gap-6">
          <div>
            <InputLabel
              {...register("password")}
              name="password"
              type="password"
              labelText="Senha"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {String(errors.password.message)}
              </p>
            )}
          </div>
          <div>
            <InputLabel
              {...register("passwordConfirmation")}
              name="passwordConfirmation"
              type="password"
              labelText="Confirme a senha"
            />
            {errors.passwordConfirmation && (
              <p className="text-red-500 text-xs mt-1">
                {String(errors.passwordConfirmation.message)}
              </p>
            )}
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <Controller
            name="profilePic"
            control={control}
            render={({ field: { value, onChange } }) => (
              <AvatarUpload
                defaultAvatar={ value ? value.preview ?? undefined : undefined }
                onFileChange={(f) => onChange(f)}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
