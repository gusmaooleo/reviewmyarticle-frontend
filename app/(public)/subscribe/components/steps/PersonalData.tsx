import AvatarUpload from "@/components/file-upload/avatar-upload";
import InputLabel from "@/components/shared/InputLabel";

export default function PersonalData() {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex w-full flex-row gap-6">
        <InputLabel id="name" type="text" labelText="Nome" />
        <InputLabel id="email" placeholder="mail@exemplo.com" type="email" labelText="Email" />
      </div>
      
      <div className="flex w-full flex-row gap-6">
        <InputLabel id="phone" type="text" labelText="Telefone" />
        <InputLabel id="job-place" type="text" labelText="Local de trabalho" placeholder="Nome da empresa, endereço" />
      </div>

      <div className="flex w-full flex-col sm:flex-row gap-6">
        <div className="flex w-full flex-col gap-6">
          <InputLabel id="password" type="password" labelText="Senha" />
          <InputLabel id="password_confirmation" type="password" labelText="Confirme a senha" />
        </div>
        <div className="flex w-full items-center justify-center">
          <AvatarUpload />
        </div>
      </div>
      
    </div>
  )
}