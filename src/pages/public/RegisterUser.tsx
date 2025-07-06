import UserRegistrationForm from "../../components/forms/UserRegistrationForm"

const RegisterUser = () => {

    const handleSubmit = (data: any) => {
    console.log('Usuário enviado:', data);
    //enviar os dados via API
  };

  return (
    <>
        <UserRegistrationForm onSubmit={handleSubmit} />
    </>
  );
}

export default RegisterUser;